import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';

export interface MaterialPDFData {
  id: string;
  title: string;
  description: string;
  longDescription: string; // Markdown content
  category: string;
  author: string;
  date: string;
  duration?: string;
  targetAudience?: 'ZŠ' | 'SŠ' | 'ZŠ/SŠ' | string;
  supportingMaterials?: { id?: string; title: string; type: 'video' | 'presentation' | 'link' | 'file' | string; url: string }[];
}

// Register fonts for Czech characters (Latin Extended)
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-italic-webfont.ttf', fontStyle: 'italic' },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: 'Roboto',
    backgroundColor: '#ffffff',
    color: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#0066ff',
    paddingBottom: 20,
  },
  brandName: {
    color: '#0066ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  documentType: {
    color: '#64748b',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 4,
  },
  website: {
    textAlign: 'right',
    color: '#94a3b8',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    lineHeight: 1.2,
  },
  metaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    marginBottom: 40,
  },
  metaItem: {
    width: '50%',
    marginBottom: 15,
  },
  metaLabel: {
    fontSize: 9,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#0066ff',
    paddingLeft: 15,
  },
  sectionTitleCyan: {
    borderLeftColor: '#00d2ff',
  },
  content: {
    fontSize: 12,
    color: '#334155',
    lineHeight: 1.55,
  },
  paragraph: {
    marginBottom: 10,
  },
  headingTwo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 10,
    marginBottom: 8,
  },
  headingThree: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 8,
    marginBottom: 6,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  listBullet: {
    width: 14,
    fontSize: 12,
    color: '#334155',
  },
  listText: {
    flex: 1,
    fontSize: 12,
    color: '#334155',
    lineHeight: 1.55,
  },
  bold: {
    fontWeight: 'bold',
    color: '#0f172a',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    color: '#0066ff',
    textDecoration: 'underline',
  },
  supportingItem: {
    marginBottom: 10,
  },
  supportingTopLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  supportingTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  supportingType: {
    fontSize: 9,
    color: '#94a3b8',
    marginLeft: 5,
    textTransform: 'uppercase',
  },
  supportingUrl: {
    marginLeft: 16,
    fontSize: 9,
    color: '#0066ff',
    textDecoration: 'underline',
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#94a3b8',
    letterSpacing: 1,
  },
  footerBrand: {
    color: '#0066ff',
    fontWeight: 'bold',
  },
  license: {
    fontSize: 8,
    color: '#cbd5e1',
    marginTop: 8,
  },
});

type MarkdownBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

const parseMarkdownBlocks = (markdown: string): MarkdownBlock[] => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: MarkdownBlock[] = [];
  let paragraphBuffer: string[] = [];
  let unorderedItems: string[] = [];
  let orderedItems: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraphBuffer.join(' ').trim() });
      paragraphBuffer = [];
    }
  };

  const flushLists = () => {
    if (unorderedItems.length > 0) {
      blocks.push({ type: 'ul', items: unorderedItems });
      unorderedItems = [];
    }
    if (orderedItems.length > 0) {
      blocks.push({ type: 'ol', items: orderedItems });
      orderedItems = [];
    }
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushLists();
      return;
    }

    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      flushParagraph();
      flushLists();
      blocks.push({ type: 'h2', text: h2[1].trim() });
      return;
    }

    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      flushParagraph();
      flushLists();
      blocks.push({ type: 'h3', text: h3[1].trim() });
      return;
    }

    const ul = line.match(/^[-*+]\s+(.+)$/);
    if (ul) {
      flushParagraph();
      if (orderedItems.length > 0) {
        flushLists();
      }
      unorderedItems.push(ul[1].trim());
      return;
    }

    const ol = line.match(/^\d+\.\s+(.+)$/);
    if (ol) {
      flushParagraph();
      if (unorderedItems.length > 0) {
        flushLists();
      }
      orderedItems.push(ol[1].trim());
      return;
    }

    flushLists();
    paragraphBuffer.push(line);
  });

  flushParagraph();
  flushLists();

  return blocks;
};

const renderInlineMarkdown = (text: string, keyPrefix: string): React.ReactNode[] => {
  const inlinePattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*]+)\*|_([^_]+)_)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let part = 0;

  while ((match = inlinePattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      nodes.push(
        <Link key={`${keyPrefix}-link-${part}`} src={match[3]} style={styles.link}>
          {match[2]}
        </Link>
      );
    } else if (match[4] || match[5]) {
      nodes.push(
        <Text key={`${keyPrefix}-bold-${part}`} style={styles.bold}>
          {match[4] || match[5]}
        </Text>
      );
    } else if (match[6] || match[7]) {
      nodes.push(
        <Text key={`${keyPrefix}-italic-${part}`} style={styles.italic}>
          {match[6] || match[7]}
        </Text>
      );
    }

    lastIndex = inlinePattern.lastIndex;
    part += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const renderMarkdownBlocks = (markdown: string): React.ReactNode => {
  const blocks = parseMarkdownBlocks(markdown);

  return blocks.map((block, idx) => {
    if (block.type === 'h2') {
      return (
        <Text key={`md-h2-${idx}`} style={styles.headingTwo}>
          {renderInlineMarkdown(block.text, `h2-${idx}`)}
        </Text>
      );
    }

    if (block.type === 'h3') {
      return (
        <Text key={`md-h3-${idx}`} style={styles.headingThree}>
          {renderInlineMarkdown(block.text, `h3-${idx}`)}
        </Text>
      );
    }

    if (block.type === 'ul') {
      return (
        <View key={`md-ul-${idx}`}>
          {block.items.map((item, itemIdx) => (
            <View key={`md-ul-${idx}-${itemIdx}`} style={styles.listItem}>
              <Text style={styles.listBullet}>•</Text>
              <Text style={styles.listText}>{renderInlineMarkdown(item, `ul-${idx}-${itemIdx}`)}</Text>
            </View>
          ))}
        </View>
      );
    }

    if (block.type === 'ol') {
      return (
        <View key={`md-ol-${idx}`}>
          {block.items.map((item, itemIdx) => (
            <View key={`md-ol-${idx}-${itemIdx}`} style={styles.listItem}>
              <Text style={styles.listBullet}>{`${itemIdx + 1}.`}</Text>
              <Text style={styles.listText}>{renderInlineMarkdown(item, `ol-${idx}-${itemIdx}`)}</Text>
            </View>
          ))}
        </View>
      );
    }

    return (
      <Text key={`md-p-${idx}`} style={[styles.content, styles.paragraph]}>
        {renderInlineMarkdown(block.text, `p-${idx}`)}
      </Text>
    );
  });
};

const supportingTypeLabel = (type?: string) => {
  switch (type) {
    case 'video':
      return 'Video';
    case 'presentation':
      return 'Prezentace';
    case 'file':
      return 'Soubor';
    case 'link':
    default:
      return 'Odkaz';
  }
};

interface MaterialPDFProps {
  material: MaterialPDFData;
}

export const MaterialPDF: React.FC<MaterialPDFProps> = ({ material }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandName}>Otevřená Informatika</Text>
          <Text style={styles.documentType}>Metodická příručka</Text>
        </View>
        <Text style={styles.website}>otevrenainformatika.cz</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>{material.title}</Text>

      {/* Meta Grid */}
      <View style={styles.metaGrid}>
        <View style={styles.metaItem}>
          <Text style={styles.metaLabel}>Autor</Text>
          <Text style={styles.metaValue}>{material.author}</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaLabel}>Datum</Text>
          <Text style={styles.metaValue}>{material.date}</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaLabel}>Délka lekce</Text>
          <Text style={styles.metaValue}>{material.duration || 'Nespecifikováno'}</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaLabel}>Určeno pro</Text>
          <Text style={styles.metaValue}>
            {material.targetAudience === 'ZŠ' ? 'Druhý stupeň ZŠ' : 
             material.targetAudience === 'SŠ' ? 'Střední škola' : 
             material.targetAudience === 'ZŠ/SŠ' ? 'ZŠ i SŠ' : 'Nespecifikováno'}
          </Text>
        </View>
      </View>

       {/* "O materiálu" */}
       <View style={styles.section}>
         <Text style={styles.sectionTitle}>O materiálu</Text>
         <View>{renderMarkdownBlocks(material.longDescription)}</View>
       </View>

      {/* Supporting Materials */}
      {material.supportingMaterials && material.supportingMaterials.length > 0 && (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.sectionTitleCyan]}>Podpůrné materiály</Text>
          <View>
            {material.supportingMaterials.map((sm: any, idx: number) => (
              <View key={idx} style={styles.supportingItem}>
                <View style={styles.supportingTopLine}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.supportingTitle}>{sm.title}</Text>
                  <Text style={styles.supportingType}>{`(${supportingTypeLabel(sm.type)})`}</Text>
                </View>
                <Link src={sm.url} style={styles.supportingUrl}>{sm.url}</Link>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tento materiál byl stažen z webu <Text style={styles.footerBrand}>otevrenainformatika.cz</Text>
        </Text>
        <Text style={styles.license}>Licence: CC BY-NC-SA 4.0</Text>
      </View>
    </Page>
  </Document>
);

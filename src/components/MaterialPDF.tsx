import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { Material } from '../../types';

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
    lineHeight: 1.6,
  },
  supportingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#00d2ff',
    borderRadius: 3,
    marginRight: 10,
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

interface MaterialPDFProps {
  material: Material;
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

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O materiálu</Text>
        <Text style={styles.content}>{material.longDescription}</Text>
      </View>

      {/* Supporting Materials */}
      {material.supportingMaterials && material.supportingMaterials.length > 0 && (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.sectionTitleCyan]}>Podpůrné materiály</Text>
          <View>
            {material.supportingMaterials.map((sm: any, idx: number) => (
              <View key={idx} style={styles.supportingItem}>
                <View style={styles.dot} />
                <Text style={styles.supportingTitle}>{sm.title}</Text>
                <Text style={styles.supportingType}>({sm.type})</Text>
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

import React from 'react';
import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

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
    fontFamily: 'Roboto',
    padding: 42,
    color: '#0f172a',
    backgroundColor: '#ffffff',
  },
  topLine: {
    borderTopWidth: 8,
    borderTopColor: '#00e5ff',
    marginBottom: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#334155',
    marginBottom: 24,
  },
  block: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    padding: 18,
    marginBottom: 14,
  },
  label: {
    fontSize: 9,
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: 4,
    letterSpacing: 1,
  },
  value: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  col: {
    flexGrow: 1,
    flexBasis: '50%',
  },
  summary: {
    marginTop: 10,
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  summaryText: {
    fontSize: 11,
    color: '#334155',
    lineHeight: 1.5,
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 12,
  },
  footerText: {
    fontSize: 10,
    color: '#64748b',
  },
});

interface AppCertificatePDFProps {
  studentName: string;
  appName: string;
  certificateTitle: string;
  scorePercent: number;
  correctAnswers: number;
  totalCases: number;
  completedAt: string;
}

export const AppCertificatePDF: React.FC<AppCertificatePDFProps> = ({
  studentName,
  appName,
  certificateTitle,
  scorePercent,
  correctAnswers,
  totalCases,
  completedAt,
}) => {
  const date = new Date(completedAt).toLocaleDateString('cs-CZ');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.topLine} />

        <Text style={styles.heading}>{certificateTitle}</Text>
        <Text style={styles.subtitle}>Otevřená informatika potvrzuje úspěšné dokončení vzdělávací aplikace.</Text>

        <View style={styles.block}>
          <Text style={styles.label}>Jméno studenta</Text>
          <Text style={styles.value}>{studentName}</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.label}>Název aplikace</Text>
          <Text style={styles.value}>{appName}</Text>
        </View>

        <View style={styles.row}>
          <View style={[styles.block, styles.col]}>
            <Text style={styles.label}>Skóre</Text>
            <Text style={styles.value}>{scorePercent} %</Text>
          </View>
          <View style={[styles.block, styles.col]}>
            <Text style={styles.label}>Správné odpovědi</Text>
            <Text style={styles.value}>{correctAnswers} / {totalCases}</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Text style={styles.label}>Datum dokončení</Text>
          <Text style={styles.value}>{date}</Text>
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Tento certifikát potvrzuje, že student úspěšně dokončil simulaci a prošel všechny zadané situace.
            Slouží jako potvrzení o absolvování aktivity.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>otevrenainformatika.cz | Neprodávatelný studijní dokument</Text>
        </View>
      </Page>
    </Document>
  );
};

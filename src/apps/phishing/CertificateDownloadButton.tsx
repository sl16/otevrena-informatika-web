import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { AppCertificatePDF } from '../../components/AppCertificatePDF';

type Props = {
  studentName: string;
  appName: string;
  certificateTitle: string;
  scorePercent: number;
  correctAnswers: number;
  totalCases: number;
  completedAt: string;
};

export default function CertificateDownloadButton({
  studentName,
  appName,
  certificateTitle,
  scorePercent,
  correctAnswers,
  totalCases,
  completedAt,
}: Props) {
  const trimmedName = studentName.trim();

  return (
    <PDFDownloadLink
      document={
        <AppCertificatePDF
          studentName={trimmedName || 'Neuvedeno'}
          appName={appName}
          certificateTitle={certificateTitle}
          scorePercent={scorePercent}
          correctAnswers={correctAnswers}
          totalCases={totalCases}
          completedAt={completedAt}
        />
      }
      fileName="certifikat-phishing-simulator.pdf"
    >
      {({ loading }) => (
        <button
          disabled={loading || !trimmedName}
          className="bg-brand-cyan hover:bg-white text-brand-dark px-6 py-3 rounded-xl font-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Připravuji PDF...' : 'Stáhnout certifikát (PDF)'}
        </button>
      )}
    </PDFDownloadLink>
  );
}

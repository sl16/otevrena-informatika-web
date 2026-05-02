import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MaterialPDF, type MaterialPDFData } from './MaterialPDF';

interface Props {
  material: MaterialPDFData;
  className?: string;
}

export default function MaterialPDFDownload({ material, className }: Props) {
  const linkClassName =
    className ??
    'bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-black transition-colors border border-white/10 inline-flex items-center justify-center gap-2 min-w-[220px]';

  // PDFDownloadLink renders an <a>. Avoid nesting interactive elements (e.g. <button>)
  // inside it, which can become unclickable in some browsers.
  const linkClassNameWithDisabled = `${linkClassName} disabled:opacity-60 disabled:cursor-not-allowed`;

  return (
    <PDFDownloadLink
      document={<MaterialPDF material={material} />}
      fileName={`pedagogicka-prirucka-${material.id}.pdf`}
      className={linkClassNameWithDisabled}
    >
      {({ loading }) => (loading ? 'Připravuji PDF...' : 'Pedagogická příručka 📄')}
    </PDFDownloadLink>
  );
}

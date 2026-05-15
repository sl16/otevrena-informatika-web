import React from 'react';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderToBuffer } from '@react-pdf/renderer';
import { MaterialPDFDocument } from '../../../lib/MaterialPDFGenerator';
import { formatCzDate } from '../../../lib/date';

export async function getStaticPaths() {
  const materials = await getCollection('materials');
  return materials.map((entry) => ({
    params: { id: entry.data.id },
    props: { entry },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { entry } = props;
  const mat = entry.data;
  const { body } = entry;

  const matDateCz = formatCzDate(mat.date);

  const materialData = {
    id: mat.id,
    title: mat.title,
    description: mat.description,
    longDescription: `${mat.description}\n\n${body ?? ''}`,
    category: mat.category,
    author: mat.author,
    date: matDateCz,
    duration: mat.duration,
    targetAudience: mat.targetAudience,
    supportingMaterials: mat.supportingMaterials,
  };

  const pdfBuffer = await renderToBuffer(
    React.createElement(MaterialPDFDocument, { material: materialData }) as any
  );

  // Response expects BodyInit; use a typed array view.
  return new Response(new Uint8Array(pdfBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="pedagogicka-prirucka-${mat.id}.pdf"`,
    },
  });
};

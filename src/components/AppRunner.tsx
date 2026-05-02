import React, { useState } from 'react';
import type { AppRunnerChildProps, AppCompletionResult } from '../apps';
import { resolveAppRenderer } from '../apps';
import type { AppInfo } from '../../types';

type Props = {
  app: AppInfo;
};

export default function AppRunner({ app }: Props) {
  const Renderer = resolveAppRenderer(app);
  const [result, setResult] = useState<AppCompletionResult | null>(null);

  if (!Renderer) {
    return (
      <div className="rounded-3xl bg-white/5 p-8">
        <h2 className="text-2xl font-black text-white mb-2">Aplikace nenalezena</h2>
        <p className="text-slate-300">Pro tuto aplikaci zatím není dostupný běh v prohlížeči.</p>
      </div>
    );
  }

  const props: AppRunnerChildProps = {
    appName: app.name,
    certificateTitle: app.certificateTitle ?? app.name,
    onComplete: (r) => setResult(r),
  };

  return (
    <div className="space-y-6">
      <Renderer {...props} />

      {result && (
        <div className="text-xs font-mono text-slate-500">
          Dokonceno: {result.correctAnswers} / {result.totalCases} ({result.scorePercent} %)
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useMemo, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { phishingCases } from './cases';
import { AppRunnerChildProps } from '../index';
import { AppCertificatePDF } from '../../components/AppCertificatePDF';

const totalCases = phishingCases.length;

type Verdict = 'phishing' | 'safe';

const linkCheckTip =
  'Tip k odkazům: najeď myší na odkaz a zkontroluj, co prohlížeč vpravo dole (v informační liště) ukazuje jako skutečnou URL.';

const verdictLabel = (verdict: Verdict): string => {
  return verdict === 'phishing' ? 'Je to phishing' : 'Není to phishing';
};

const expectedVerdict = (isPhishing: boolean): Verdict => {
  return isPhishing ? 'phishing' : 'safe';
};

const PhishingSimulator: React.FC<AppRunnerChildProps> = ({
  onComplete,
  appName,
  certificateTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedByCase, setSelectedByCase] = useState<Record<string, Verdict>>({});
  const [completionSent, setCompletionSent] = useState(false);
  const [studentName, setStudentName] = useState('');

  const isFinished = currentIndex >= totalCases;
  const currentCase = isFinished ? null : phishingCases[currentIndex];

  const selectedVerdict = useMemo(() => {
    if (!currentCase) {
      return null;
    }
    return selectedByCase[currentCase.id] ?? null;
  }, [currentCase, selectedByCase]);

  const correctAnswers = useMemo(() => {
    return phishingCases.reduce((count, testCase) => {
      const selected = selectedByCase[testCase.id];
      if (!selected) {
        return count;
      }
      return selected === expectedVerdict(testCase.isPhishing) ? count + 1 : count;
    }, 0);
  }, [selectedByCase]);

  const answerSummary = useMemo(() => {
    return phishingCases.map((testCase) => {
      const selected = selectedByCase[testCase.id] ?? null;
      const expected = expectedVerdict(testCase.isPhishing);

      return {
        testCase,
        selected,
        expected,
        isCorrect: selected === expected,
      };
    });
  }, [selectedByCase]);

  useEffect(() => {
    if (!isFinished || completionSent) {
      return;
    }

    const scorePercent = Math.round((correctAnswers / totalCases) * 100);
    onComplete?.({
      scorePercent,
      correctAnswers,
      totalCases,
      completedAt: new Date().toISOString(),
    });
    setCompletionSent(true);
  }, [completionSent, correctAnswers, isFinished, onComplete]);

  if (isFinished) {
    const scorePercent = Math.round((correctAnswers / totalCases) * 100);

    return (
      <div className="space-y-6">
        <div className="bg-brand-card/50 border border-white/10 rounded-3xl p-8 sm:p-10">
          <h2 className="text-3xl font-black text-white mb-4">Hotovo! Simulaci jste dokončil/a.</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Prošli jste všech 10 situací. Níže najdete výsledky, certifikát a kompletní rozbor odpovědí.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-mono mb-2">Skóre</p>
              <p className="text-3xl font-black text-brand-cyan">{scorePercent} %</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-mono mb-2">Správné odpovědi</p>
              <p className="text-3xl font-black text-brand-neon">{correctAnswers} / {totalCases}</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-card/50 border border-white/10 rounded-3xl p-8 sm:p-10">
          <h3 className="text-2xl font-black text-white mb-3">Certifikát</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Vyplňte jméno a vygenerujte certifikát v PDF.
          </p>

          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-slate-300">Jméno na certifikátu</span>
              <input
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
                placeholder="Například: Jan Novák"
                className="mt-2 w-full bg-white/5 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan"
              />
            </label>

            <PDFDownloadLink
              document={
                <AppCertificatePDF
                  studentName={studentName.trim() || 'Neuvedeno'}
                  appName={appName}
                  certificateTitle={certificateTitle}
                  scorePercent={scorePercent}
                  correctAnswers={correctAnswers}
                  totalCases={totalCases}
                  completedAt={new Date().toISOString()}
                />
              }
              fileName="certifikat-phishing-simulator.pdf"
            >
              {({ loading }) => (
                <button
                  disabled={loading || !studentName.trim()}
                  className="bg-brand-cyan hover:bg-white text-brand-dark px-6 py-3 rounded-xl font-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Připravuji PDF...' : 'Stáhnout certifikát (PDF)'}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>

        <div className="bg-brand-card/50 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4">
          <h3 className="text-2xl font-black text-white">Souhrn všech odpovědí</h3>
          {answerSummary.map(({ testCase, selected, expected, isCorrect }, index) => (
            <div
              key={testCase.id}
              className={`rounded-2xl border p-5 ${
                isCorrect
                  ? 'bg-brand-neon/10 border-brand-neon/40'
                  : 'bg-red-400/10 border-red-400/40'
              }`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">
                Případ {index + 1}
              </p>
              <p className="text-white font-bold mb-2">{testCase.subject}</p>
              <p className={`font-black mb-2 ${isCorrect ? 'text-brand-neon' : 'text-red-300'}`}>
                {isCorrect ? 'Správně' : 'Špatně'}
              </p>
              <p className="text-slate-200 text-sm mb-2">
                <span className="text-slate-400">Vaše odpověď:</span>{' '}
                {selected ? verdictLabel(selected) : 'Nezodpovězeno'}
              </p>
              <p className="text-slate-200 text-sm mb-2">
                <span className="text-slate-400">Správná odpověď:</span> {verdictLabel(expected)}
              </p>
              <p className="text-slate-300 text-sm">{testCase.learningPoint}</p>
              {testCase.link && <p className="text-brand-cyan text-sm mt-2">{linkCheckTip}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const activeCase = currentCase;

  if (!activeCase) {
    return null;
  }

  const onSelectVerdict = (verdict: Verdict) => {
    if (selectedByCase[activeCase.id]) {
      return;
    }

    setSelectedByCase((prev) => ({
      ...prev,
      [activeCase.id]: verdict,
    }));
  };

  const onNextCase = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const expected = expectedVerdict(activeCase.isPhishing);
  const isCorrect = selectedVerdict ? selectedVerdict === expected : false;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-mono mb-2">Případ {currentIndex + 1} z {totalCases}</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Rozpoznej phishing</h2>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-mono mb-2">Průběžné skóre</p>
          <p className="text-2xl font-black text-brand-cyan">{correctAnswers} / {totalCases}</p>
        </div>
      </div>

      <div className="bg-brand-card/50 border border-white/10 rounded-3xl overflow-hidden">
        <div className="border-b border-white/10 px-6 py-5 bg-white/5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-mono mb-2">Příchozí zpráva</p>
          <p className="text-sm text-slate-300"><span className="text-slate-500">Od:</span> {activeCase.from}</p>
          <p className="text-sm text-slate-300"><span className="text-slate-500">Předmět:</span> {activeCase.subject}</p>
          <p className="text-sm text-slate-400 mt-2">{activeCase.preview}</p>
        </div>

        <div className="px-6 py-6 border-b border-white/10 space-y-3">
          <p className="text-slate-200 leading-relaxed">{activeCase.body}</p>
          {activeCase.link && (
            <a
              href={activeCase.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-cyan hover:text-white underline decoration-brand-cyan/40 underline-offset-4"
              title="Najeď myší na odkaz a zkontroluj skutečnou URL"
            >
              {activeCase.link.label}
            </a>
          )}
          {activeCase.bodyAfterLink && (
            <p className="text-slate-200 leading-relaxed">{activeCase.bodyAfterLink}</p>
          )}
        </div>

        <div className="px-6 py-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 font-mono mb-4">Je to phishing?</p>
          <div className="space-y-3">
            {(['phishing', 'safe'] as Verdict[]).map((verdict) => {
              const isSelected = verdict === selectedVerdict;

              return (
                <button
                  key={verdict}
                  onClick={() => onSelectVerdict(verdict)}
                  disabled={Boolean(selectedVerdict)}
                  className={`w-full text-left rounded-2xl border px-4 py-4 transition-all ${
                    isSelected
                      ? isCorrect
                        ? 'border-brand-neon bg-brand-neon/15 text-white'
                        : 'border-red-400/70 bg-red-400/10 text-white'
                      : 'border-white/10 bg-white/5 text-slate-200 hover:border-brand-cyan/40'
                  } ${selectedVerdict ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {verdictLabel(verdict)}
                </button>
              );
            })}
          </div>

          {selectedVerdict && (
            <div className={`mt-6 rounded-2xl border p-5 ${isCorrect ? 'border-brand-neon/60 bg-brand-neon/10' : 'border-red-400/60 bg-red-400/10'}`}>
              <p className={`font-black mb-2 ${isCorrect ? 'text-brand-neon' : 'text-red-300'}`}>
                {isCorrect ? 'Správně' : 'Špatně'}
              </p>
              <p className="text-slate-100 leading-relaxed mb-3">
                Správná odpověď je: <strong>{verdictLabel(expected)}</strong>.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">
                <span className="text-brand-cyan font-bold">Proč je to důležité:</span> {activeCase.learningPoint}
              </p>
              {activeCase.link && <p className="text-brand-cyan text-sm">{linkCheckTip}</p>}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNextCase}
          disabled={!selectedVerdict}
          className="bg-brand-cyan hover:bg-white text-brand-dark px-6 py-3 rounded-xl font-black transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {currentIndex === totalCases - 1 ? 'Dokončit simulaci' : 'Další případ'}
        </button>
      </div>
    </div>
  );
};

export default PhishingSimulator;

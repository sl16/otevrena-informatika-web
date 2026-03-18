import React from 'react';
import { AppInfo } from '../../types';
import PhishingSimulator from './phishing/PhishingSimulator';

export interface AppCompletionResult {
  scorePercent: number;
  correctAnswers: number;
  totalCases: number;
  completedAt: string;
}

export interface AppRunnerChildProps {
  onComplete?: (result: AppCompletionResult) => void;
  appName: string;
  certificateTitle: string;
}

type AppRenderer = React.FC<AppRunnerChildProps>;

const registry: Record<string, AppRenderer> = {
  'phishing-simulator': PhishingSimulator,
};

export function resolveAppRenderer(app: AppInfo): AppRenderer | null {
  const key = app.runnerType || app.id;
  return registry[key] ?? null;
}

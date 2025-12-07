import type { ChartData } from 'chart.js';

export interface GradientColors {
  startColor: string;
  endColor: string;
  donutChartFilling: number;
}

export interface DonutProps {
  valueInsideChart: number;
}

export type DoughnutChartData = ChartData<'doughnut', number[], string>;

export interface BloodTestSummaryProps {
  overallWellnessScore: number;
  overallSummary: string;
  detailedFindings: string[];
  conclusionStatement: string;
}

export interface PersonalizedRecommendationsProps {
  bloodTestSummary: BloodTestSummaryProps;
}

import { useEffect, useRef, useState } from 'react';

import type { ChartData } from 'chart.js';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { theme } from '@/theme';

import { CenteredText, DoughnutWrapper } from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutProps {
  valueInsideChart: number;
}

export const WELLNESS_SCORE_THRESHOLDS = {
  EXCELLENT: 85,
  GOOD: 65,
} as const;

interface GradientColors {
  startColor: string;
  endColor: string;
}

type DoughnutChartData = ChartData<'doughnut', number[], string>;

const getGradientColors = (score: number): GradientColors => {
  if (score >= WELLNESS_SCORE_THRESHOLDS.EXCELLENT) {
    return {
      startColor: theme.palette.donutGradients.moreThan85.startColor,
      endColor: theme.palette.donutGradients.moreThan85.endColor,
    };
  }

  if (score >= WELLNESS_SCORE_THRESHOLDS.GOOD) {
    return {
      startColor: theme.palette.donutGradients.moreThan65.startColor,
      endColor: theme.palette.donutGradients.moreThan65.endColor,
    };
  }

  return {
    startColor: theme.palette.donutGradients.moreThan0.startColor,
    endColor: theme.palette.donutGradients.moreThan0.endColor,
  };
};

const DonutChart = ({ valueInsideChart }: DonutProps) => {
  const chartRef = useRef<ChartJS<'doughnut', number[], string>>(null);
  const [chartData, setChartData] = useState<DoughnutChartData | null>(null);
  const donutChart = 67;

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;

      if (chartArea) {
        const colors = getGradientColors(valueInsideChart);
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, colors.startColor);
        gradient.addColorStop(1, colors.endColor);

        setChartData({
          labels: [],
          datasets: [
            {
              data: [donutChart, 100 - donutChart],
              backgroundColor: [gradient, 'transparent'],
              borderWidth: 0,
              borderRadius: 20,
              spacing: 0,
            },
          ],
        });
      }
    }
  }, [donutChart]);

  const colors = getGradientColors(valueInsideChart);
  const initialData = {
    labels: [],
    datasets: [
      {
        data: [donutChart, 100 - donutChart],
        backgroundColor: [colors.endColor, 'transparent'],
        borderWidth: 0,
        borderRadius: 20,
        spacing: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    rotation: 0,
    circumference: 360,
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <DoughnutWrapper>
      <Doughnut ref={chartRef} data={chartData || initialData} options={options} />
      <CenteredText>{valueInsideChart}%</CenteredText>
    </DoughnutWrapper>
  );
};

export default DonutChart;

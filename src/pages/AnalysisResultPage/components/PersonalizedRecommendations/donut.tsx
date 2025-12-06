import { useEffect, useRef, useState } from 'react';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { WELLNESS_SCORE_THRESHOLDS } from '@/pages/AnalysisResultPage/constants';
import type {
  DonutProps,
  DoughnutChartData,
  GradientColors,
} from '@/pages/AnalysisResultPage/types';
import { theme } from '@/theme';

import { CenteredText, DoughnutWrapper } from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

const getGradientColors = (score: number): GradientColors => {
  if (score >= WELLNESS_SCORE_THRESHOLDS.EXCELLENT) {
    return {
      startColor: theme.palette.donutGradients.moreThan85.startColor,
      endColor: theme.palette.donutGradients.moreThan85.endColor,
      donutChartFilling: 81,
    };
  }

  if (score >= WELLNESS_SCORE_THRESHOLDS.GOOD) {
    return {
      startColor: theme.palette.donutGradients.moreThan65.startColor,
      endColor: theme.palette.donutGradients.moreThan65.endColor,
      donutChartFilling: 63,
    };
  }

  return {
    startColor: theme.palette.donutGradients.moreThan0.startColor,
    endColor: theme.palette.donutGradients.moreThan0.endColor,
    donutChartFilling: 30,
  };
};

const DonutChart = ({ valueInsideChart }: DonutProps) => {
  const chartRef = useRef<ChartJS<'doughnut', number[], string>>(null);
  const [chartData, setChartData] = useState<DoughnutChartData | null>(null);

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
              data: [colors.donutChartFilling, 100 - colors.donutChartFilling],
              backgroundColor: [gradient, 'transparent'],
              borderWidth: 0,
              borderRadius: 20,
              spacing: 0,
            },
          ],
        });
      }
    }
  }, []);

  const colors = getGradientColors(valueInsideChart);
  const initialData = {
    labels: [],
    datasets: [
      {
        data: [colors.donutChartFilling, 100 - colors.donutChartFilling],
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

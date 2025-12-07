import {
  RecommendationDescription,
  RecommendationHeader,
  RecommendationTitle,
  RecommendationWrapper,
} from './styles';
import type { RecommendationSectionProps } from './types';

export const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  title,
  icon: Icon,
  items,
  bgColor,
  iconColor,
  bgIconColor,
}) => {
  return (
    <RecommendationWrapper sx={{ backgroundColor: bgColor }}>
      <RecommendationHeader bgIcon={bgIconColor}>
        <Icon color={iconColor} />
        <RecommendationTitle variant="subtitle1">{title}</RecommendationTitle>
      </RecommendationHeader>

      <ul>
        {items.map((rec, index) => (
          <RecommendationDescription key={index}>{rec}</RecommendationDescription>
        ))}
      </ul>
    </RecommendationWrapper>
  );
};

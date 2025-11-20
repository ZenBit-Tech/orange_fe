import { RecommendationHeader, RecommendationTitle, RecommendationWrapper } from './styles';

interface RecommendationSectionProps {
  title: string;
  icon: React.ElementType;
  items: string[];
  bgColor: string;
  iconColor: string;
  bgIconColor: string;
}

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
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </RecommendationWrapper>
  );
};

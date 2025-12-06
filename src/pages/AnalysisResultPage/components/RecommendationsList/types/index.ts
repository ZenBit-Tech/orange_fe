import type { RecommendationDescriptions } from '@/pages/AnalysisResultPage/types';

export interface RecommendationsProps {
  supplementsRecommendations?: RecommendationDescriptions;
  nutritionRecommendations?: RecommendationDescriptions;
  drugsRecommendations?: RecommendationDescriptions;
  exerciseRecommendations?: RecommendationDescriptions;
}

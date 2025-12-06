export interface RecommendationDescriptions {
  descriptions: string[];
}
export interface RecommendationsProps {
  supplementsRecommendations?: RecommendationDescriptions;
  nutritionRecommendations?: RecommendationDescriptions;
  drugsRecommendations?: RecommendationDescriptions;
  exerciseRecommendations?: RecommendationDescriptions;
}

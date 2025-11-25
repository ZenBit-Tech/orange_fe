import { useEffect } from 'react';

import { t } from 'i18next';
import { LucideOctagonAlert } from 'lucide-react';
import { useSelector } from 'react-redux';

import { DescriptionText, TitleText } from '@/components/ReviewCustomizeStep/styles';
import type { RootState } from '@/store';

import { AnswerForUserQuestion } from './AnswerForUserQuestion';
import { BloodTestSummary } from './BloodTestSummary';
import { PersonalizedRecommendations } from './PersonalizedRecommendations';
import { Recommendations } from './Recommendations';
import { ResultButton } from './ResultButtons';
import { Disclaimer, WrapperAnalysisResult } from './styles';

// const result = {
//         "bloodTestSummary": {
//             "overallWellnessScore": 60,
//             "overallSummary": "Your results show a few noticeable imbalances that might indicate temporary stress on certain body systems.",
//             "detailedFindings": [
//                 "Your glucose level is elevated, which may suggest insulin resistance or prediabetes, requiring further evaluation.",
//                 "The AST level is significantly higher than normal, indicating potential liver stress or damage.",
//                 "Cholesterol levels, particularly LDL, are elevated, which may increase cardiovascular risk."
//             ],
//             "conclusionStatement": "Overall, your results don't point to any critical condition, but they do suggest that your body might be under mild strain and would benefit from recovery support and balanced lifestyle habits."
//         },
//         "markersInterpretations": [
//             {
//                 "markerId": 1,
//                 "markerName": "Glucose",
//                 "value": "130",
//                 "unit": "mg/dL",
//                 "referenceMin": "70",
//                 "referenceMax": "100",
//                 "status": "High",
//                 "interpretation": {
//                     "about": "Glucose measures the amount of sugar in your blood, which is crucial for energy.",
//                     "whyImportant": "High glucose levels can indicate insulin resistance or diabetes, which may lead to serious health issues if not managed.",
//                     "contextualNote": "Your level of 130 mg/dL is above the normal range, suggesting a need for further assessment."
//                 }
//             },
//             {
//                 "markerId": 2,
//                 "markerName": "AST",
//                 "value": "62",
//                 "unit": "U/L",
//                 "referenceMin": "10",
//                 "referenceMax": "40",
//                 "status": "High",
//                 "interpretation": {
//                     "about": "AST is an enzyme found in the liver and other tissues, indicating liver function.",
//                     "whyImportant": "Elevated AST levels can signal liver damage or inflammation.",
//                     "contextualNote": "Your level of 62 U/L is significantly higher than normal, warranting further investigation."
//                 }
//             },
//             {
//                 "markerId": 3,
//                 "markerName": "Cholesterol (Total)",
//                 "value": "220",
//                 "unit": "mg/dL",
//                 "referenceMin": "125",
//                 "referenceMax": "200",
//                 "status": "High",
//                 "interpretation": {
//                     "about": "Total cholesterol measures all cholesterol in your blood, including LDL and HDL.",
//                     "whyImportant": "High total cholesterol can increase the risk of heart disease.",
//                     "contextualNote": "Your level of 220 mg/dL exceeds the recommended range, indicating a need for lifestyle modifications."
//                 }
//             },
//             {
//                 "markerId": 4,
//                 "markerName": "HDL Cholesterol",
//                 "value": "45",
//                 "unit": "mg/dL",
//                 "referenceMin": "40",
//                 "referenceMax": "60",
//                 "status": "Normal",
//                 "interpretation": {
//                     "about": "HDL cholesterol is known as 'good' cholesterol, helping to remove other forms of cholesterol from your bloodstream.",
//                     "whyImportant": "Higher levels of HDL are associated with a lower risk of heart disease.",
//                     "contextualNote": "Your level of 45 mg/dL is within the normal range, which is a positive aspect."
//                 }
//             },
//             {
//                 "markerId": 5,
//                 "markerName": "LDL Cholesterol",
//                 "value": "155",
//                 "unit": "mg/dL",
//                 "referenceMin": "0",
//                 "referenceMax": "100",
//                 "status": "High",
//                 "interpretation": {
//                     "about": "LDL cholesterol is known as 'bad' cholesterol, which can build up in the walls of arteries.",
//                     "whyImportant": "High levels of LDL can lead to atherosclerosis and increase the risk of heart attack and stroke.",
//                     "contextualNote": "Your level of 155 mg/dL is significantly above the recommended maximum, indicating a need for intervention."
//                 }
//             },
//             {
//                 "markerId": 6,
//                 "markerName": "Triglycerides",
//                 "value": "180",
//                 "unit": "mg/dL",
//                 "referenceMin": "0",
//                 "referenceMax": "150",
//                 "status": "High",
//                 "interpretation": {
//                     "about": "Triglycerides measure the amount of fat in your blood, which is important for energy storage.",
//                     "whyImportant": "High triglyceride levels can increase the risk of heart disease and may indicate metabolic syndrome.",
//                     "contextualNote": "Your level of 180 mg/dL exceeds the normal range, suggesting a need for lifestyle changes."
//                 }
//             }
//         ],
//         "supplementsRecommendations": {
//             "descriptions": [
//                 "Discuss with your doctor about Omega-3 Fish Oil supplementation, as it may support heart health and lower triglycerides.",
//                 "Consult your healthcare provider before considering fiber supplements, which can help manage cholesterol levels.",
//                 "Ask your physician about vitamin D supplementation, as it may play a role in glucose metabolism."
//             ]
//         },
//         "nutritionRecommendations": {
//             "descriptions": [
//                 "Discuss with your doctor about incorporating more whole grains and legumes into your diet, as they can help manage blood sugar levels.",
//                 "Consult a nutritionist about reducing refined sugars and saturated fats, which may improve your cholesterol and glucose levels.",
//                 "Ask your healthcare provider about increasing your intake of fruits and vegetables, which are beneficial for overall health."
//             ]
//         },
//         "drugsRecommendations": {
//             "descriptions": [
//                 "Your doctor may recommend medications to help manage your cholesterol levels if lifestyle changes are insufficient.",
//                 "Discuss with your healthcare provider about potential medications for blood sugar control if your glucose levels remain high.",
//                 "Consult your physician about any necessary liver function tests and potential treatments if AST levels remain elevated."
//             ]
//         },
//         "exerciseRecommendations": {
//             "descriptions": [
//                 "Consult your healthcare provider before starting any exercise program, but they may recommend regular aerobic activity to help manage glucose and cholesterol levels.",
//                 "Discuss with your doctor about incorporating strength training exercises, which can improve insulin sensitivity.",
//                 "Ask your physician about setting realistic fitness goals that align with your current health status."
//             ]
//         },
//         "userQuestionResponse": {
//             "question": "Why is my glucose high and what can I do to lower it?",
//             "answer": "High glucose levels can result from various factors, including diet, physical inactivity, and insulin resistance. Discuss with your doctor about potential lifestyle changes, dietary adjustments, and whether further testing is needed to understand the underlying causes."
//         },
//         "pdfJobId": "pdf_1763942419022_nh9e9xm81"
//     }

interface AnalysisResultStepProps {
  onBack: () => void;
}

export const AnalysisResultStep: React.FC<AnalysisResultStepProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const result = useSelector((state: RootState) => state.analysis.result);

  console.log(result);
  if (!result) return null;

  const hasAnyRecommendations =
    result.drugsRecommendations ||
    result.exerciseRecommendations ||
    result.nutritionRecommendations ||
    result.supplementsRecommendations;

  return (
    <WrapperAnalysisResult>
      <TitleText>{t('results.title')}</TitleText>
      <DescriptionText>{t('results.description')}</DescriptionText>
      <Disclaimer>
        <LucideOctagonAlert className="octagon-alert" />
        {t('results.disclaimer')}
        {t('results.disclaimer-text')}
      </Disclaimer>

      <PersonalizedRecommendations bloodTestSummary={result.bloodTestSummary} />
      <BloodTestSummary data={result} />

      {hasAnyRecommendations && (
        <Recommendations
          supplementsRecommendations={result.supplementsRecommendations}
          nutritionRecommendations={result.nutritionRecommendations}
          drugsRecommendations={result.drugsRecommendations}
          exerciseRecommendations={result.exerciseRecommendations}
        />
      )}

      {result.userQuestionResponse && (
        <AnswerForUserQuestion questionResponse={result.userQuestionResponse} />
      )}
      <ResultButton onBack={onBack} />
    </WrapperAnalysisResult>
  );
};

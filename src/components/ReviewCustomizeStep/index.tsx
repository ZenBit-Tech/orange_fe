import React from 'react';

import { t } from 'i18next';
import { ArrowLeft, ChevronDown, Dumbbell, Pill, Salad, Stethoscope } from 'lucide-react';

import { ErrorText } from '@/components/Marker/styles';
import { MarkerTable } from '@/components/MarkerTable';
import { BIRTH_YEARS, GENDER, GENDER_OPTIONS, PREGNANCY_OPTIONS } from '@/constants/marker';

import {
  AdditionalDescriptionText,
  AdditionalTitle,
  BackButton,
  ButtonContainer,
  CheckboxCard,
  CheckboxContent,
  CheckboxDescription,
  CheckboxGrid,
  CheckboxIcon,
  CheckboxTitle,
  ContinueButton,
  CustomizeSection,
  DescriptionText,
  FormField,
  FormRow,
  SectionTitle,
  StyledAutocomplete,
  StyledCheckbox,
  StyledTextAreaField,
  StyledTextField,
  TextAreaContainer,
  TitleText,
  WrapperReviewCustomize,
} from './styles';
import { useReviewCustomizeStep } from './useReviewCustomizeStep';

const initialMarkers = [
  {
    id: 1,
    name: 'Bilirubin (Total)',
    value: '4.8',
    unit: 'mg/dL',
    normalRange: '0.1 - 1.2 mg/dL',
    hasError: false,
  },
  {
    id: 2,
    name: 'Amylase',
    value: '100',
    unit: 'U/L',
    normalRange: '30 - 110 U/L',
    hasError: false,
  },
  { id: 3, name: 'AST', value: '9.8', unit: 'U/L', normalRange: '5 - 40 U/L', hasError: false },
  {
    id: 4,
    name: 'Creatinine',
    value: '1.8',
    unit: 'mg/dL',
    normalRange: '0.6 - 1.2 mg/dL',
    hasError: false,
  },
  { id: 5, name: 'LDH', value: '180', unit: 'U/L', normalRange: '125 - 220 U/L', hasError: false },
];

interface ReviewCustomizeStepProps {
  onContinue: () => void;
  onBack?: () => void;
}

export const ReviewCustomizeStep: React.FC<ReviewCustomizeStepProps> = ({ onContinue, onBack }) => {
  const {
    markerTableRef,
    birthYear,
    gender,
    pregnancy,
    nutritionAdvice,
    exerciseGuidelines,
    supplementRecommendations,
    medicationRecommendations,
    additionalQuestions,
    validationErrors,
    handleBirthYear,
    handleGender,
    handlePregnancy,
    handleContinue,
    setAdditionalQuestions,
    setHasMarkerErrors,
    toggleNutritionAdvice,
    toggleExerciseGuidelines,
    toggleSupplementRecommendations,
    toggleMedicationRecommendations,
  } = useReviewCustomizeStep({ onContinue });

  return (
    <WrapperReviewCustomize>
      <TitleText>{t('review.title')}</TitleText>
      <DescriptionText>{t('review.description')}</DescriptionText>

      <SectionTitle>{t('review.patient-info-title')}</SectionTitle>

      <FormRow>
        <FormField>
          <StyledAutocomplete
            size="small"
            disablePortal
            options={BIRTH_YEARS}
            value={birthYear}
            onChange={handleBirthYear}
            getOptionLabel={(option) => String(option)}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                label={t('review.birthYear')}
                error={validationErrors.birthYear}
              />
            )}
            popupIcon={<ChevronDown />}
            slotProps={{
              paper: {
                sx: (theme) => ({
                  borderRadius: '12px',
                  border: `1px solid ${theme.palette.border.default}`,
                  marginTop: theme.spacing(0.5),
                }),
              },
            }}
          />
          {validationErrors.birthYear && <ErrorText>{t('review.fill-field')}</ErrorText>}
        </FormField>

        <FormField>
          <StyledAutocomplete
            size="small"
            disablePortal
            options={[...GENDER_OPTIONS]}
            value={gender}
            onChange={handleGender}
            getOptionLabel={(option) => String(option)}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                label={t('review.gender')}
                error={validationErrors.gender}
              />
            )}
            popupIcon={<ChevronDown />}
            slotProps={{
              paper: {
                sx: (theme) => ({
                  borderRadius: '12px',
                  border: `1px solid ${theme.palette.border.default}`,
                  marginTop: theme.spacing(0.5),
                }),
              },
            }}
          />

          {validationErrors.gender && <ErrorText>{t('review.fill-field')}</ErrorText>}
        </FormField>
        {gender === GENDER.FEMALE && (
          <FormField className="full-width">
            <StyledAutocomplete
              size="small"
              disablePortal
              options={[...PREGNANCY_OPTIONS]}
              value={pregnancy}
              onChange={handlePregnancy}
              getOptionLabel={(option) => String(option)}
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  label={t('review.pregnancy')}
                  error={validationErrors.pregnancy}
                />
              )}
              popupIcon={<ChevronDown />}
              slotProps={{
                paper: {
                  sx: (theme) => ({
                    borderRadius: '12px',
                    border: `1px solid ${theme.palette.border.default}`,
                    marginTop: theme.spacing(0.5),
                  }),
                },
              }}
            />
            {validationErrors.pregnancy && <ErrorText>{t('review.fill-field')}</ErrorText>}
          </FormField>
        )}
      </FormRow>

      <SectionTitle>{t('review.review-markers-title')}</SectionTitle>
      <MarkerTable
        ref={markerTableRef}
        onValidationChange={setHasMarkerErrors}
        initialMarkers={initialMarkers}
      />

      <CustomizeSection>
        <SectionTitle>{t('review.customize-analyze-title')}</SectionTitle>
        <DescriptionText className="customize-description">
          {t('review.customize-analyze-description')}
        </DescriptionText>

        <CheckboxGrid>
          <CheckboxCard
            onClick={toggleNutritionAdvice}
            className={nutritionAdvice ? 'checked-nutrition' : ''}
          >
            <CheckboxIcon className={nutritionAdvice ? 'checked-nutrition' : ''}>
              <Salad />
            </CheckboxIcon>
            <CheckboxContent>
              <CheckboxTitle>{t('review.advice-title')}</CheckboxTitle>
              <CheckboxDescription>{t('review.advice-description')}</CheckboxDescription>
            </CheckboxContent>
            <StyledCheckbox
              size="medium"
              checked={nutritionAdvice}
              className={nutritionAdvice ? 'checked-nutrition' : ''}
            />
          </CheckboxCard>

          <CheckboxCard
            onClick={toggleSupplementRecommendations}
            className={supplementRecommendations ? 'checked-supplement' : ''}
          >
            <CheckboxIcon className={supplementRecommendations ? 'checked-supplement' : ''}>
              <Pill />
            </CheckboxIcon>
            <CheckboxContent>
              <CheckboxTitle>{t('review.recommendations-title')}</CheckboxTitle>
              <CheckboxDescription>{t('review.recommendations-description')}</CheckboxDescription>
            </CheckboxContent>
            <StyledCheckbox
              size="medium"
              checked={supplementRecommendations}
              className={supplementRecommendations ? 'checked-supplement' : ''}
            />
          </CheckboxCard>

          <CheckboxCard
            onClick={toggleExerciseGuidelines}
            className={exerciseGuidelines ? 'checked-exercise' : ''}
          >
            <CheckboxIcon className={exerciseGuidelines ? 'checked-exercise' : ''}>
              <Dumbbell />
            </CheckboxIcon>
            <CheckboxContent>
              <CheckboxTitle>{t('review.guidelines-title')}</CheckboxTitle>
              <CheckboxDescription>{t('review.guidelines-description')}</CheckboxDescription>
            </CheckboxContent>
            <StyledCheckbox
              size="medium"
              checked={exerciseGuidelines}
              className={exerciseGuidelines ? 'checked-exercise' : ''}
            />
          </CheckboxCard>

          <CheckboxCard
            onClick={toggleMedicationRecommendations}
            className={medicationRecommendations ? 'checked-medication' : ''}
          >
            <CheckboxIcon className={medicationRecommendations ? 'checked-medication' : ''}>
              <Stethoscope />
            </CheckboxIcon>
            <CheckboxContent>
              <CheckboxTitle>{t('review.insights-title')}</CheckboxTitle>
              <CheckboxDescription>{t('review.insights-description')}</CheckboxDescription>
            </CheckboxContent>
            <StyledCheckbox
              size="medium"
              checked={medicationRecommendations}
              className={medicationRecommendations ? 'checked-medication' : ''}
            />
          </CheckboxCard>
        </CheckboxGrid>
      </CustomizeSection>

      <TextAreaContainer>
        <AdditionalTitle>{t('review.additional-questions-title')}</AdditionalTitle>
        <AdditionalDescriptionText>
          {t('review.additional-questions-description')}
        </AdditionalDescriptionText>
        <StyledTextAreaField
          multiline
          rows={6}
          fullWidth
          variant="outlined"
          label={t('review.your-questions')}
          placeholder={t('review.example-questions')}
          value={additionalQuestions}
          onChange={(e) => setAdditionalQuestions(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </TextAreaContainer>

      <ButtonContainer>
        {onBack && (
          <BackButton onClick={onBack}>
            <ArrowLeft />
            {t('review.back')}
          </BackButton>
        )}
        <ContinueButton onClick={handleContinue}>{t('review.continue')}</ContinueButton>
      </ButtonContainer>
    </WrapperReviewCustomize>
  );
};

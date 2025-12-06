import React from 'react';

import { t } from 'i18next';
import { ArrowLeft, ChevronDown, Dumbbell, Pill, Salad, Stethoscope } from 'lucide-react';

import { MarkerTable } from '@/components/MarkerTable';
import { BIRTH_YEARS, GENDER, PREGNANCY_OPTIONS } from '@/constants';

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
  FormErrorText,
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
import type { UseReviewCustomizeStepProps } from './types';
import { useReviewCustomizeStep } from './useReviewCustomizeStep';

export const ReviewCustomizeStep: React.FC<UseReviewCustomizeStepProps> = ({
  onContinue,
  onBack,
}) => {
  const {
    markers,
    handleNameChange,
    handleValueChange,
    handleUnitChange,
    handleDelete,
    handleAddMarker,
    validateMarker,
    validateAllMarkers,
    birthYear,
    gender,
    pregnancy,
    nutritionAdvice,
    exerciseGuidelines,
    supplementRecommendations,
    medicationGuidance,
    additionalQuestions,
    validationErrors,
    handleBirthYear,
    handleGender,
    handlePregnancy,
    handleContinue,
    setAdditionalQuestions,
    toggleNutritionAdvice,
    toggleExerciseGuidelines,
    toggleSupplementRecommendations,
    toggleMedicationGuidance,
    handleReferenceChange,
    isLoading,
  } = useReviewCustomizeStep({ onContinue });

  return (
    <WrapperReviewCustomize>
      <TitleText>{t('review.title')}</TitleText>
      <DescriptionText variant="body1">{t('review.description')}</DescriptionText>

      <SectionTitle variant="subtitle1">{t('review.patient-info-title')}</SectionTitle>

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
                  '& .MuiAutocomplete-option[aria-selected="true"]': {
                    backgroundColor: `${theme.palette.surface.primary.default} !important`,
                  },
                }),
              },
            }}
          />
          {validationErrors.birthYear && (
            <FormErrorText variant="body2">{t('review.fill-field')}</FormErrorText>
          )}
        </FormField>

        <FormField>
          <StyledAutocomplete
            size="small"
            disablePortal
            options={[GENDER.MALE, GENDER.FEMALE]}
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
                  '& .MuiAutocomplete-option[aria-selected="true"]': {
                    backgroundColor: `${theme.palette.surface.primary.default} !important`,
                  },
                }),
              },
            }}
          />

          {validationErrors.gender && (
            <FormErrorText variant="body2">{t('review.fill-field')}</FormErrorText>
          )}
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
                    '& .MuiAutocomplete-option[aria-selected="true"]': {
                      backgroundColor: `${theme.palette.surface.primary.default} !important`,
                    },
                  }),
                },
              }}
            />
            {validationErrors.pregnancy && (
              <FormErrorText variant="body2">{t('review.fill-field')}</FormErrorText>
            )}
          </FormField>
        )}
      </FormRow>

      <SectionTitle variant="subtitle1">{t('review.review-markers-title')}</SectionTitle>
      <MarkerTable
        markers={markers}
        onNameChange={handleNameChange}
        onValueChange={handleValueChange}
        onUnitChange={handleUnitChange}
        onReferenceChange={handleReferenceChange}
        onDelete={handleDelete}
        onAddMarker={handleAddMarker}
        onValidate={validateMarker}
        onValidateAll={validateAllMarkers}
        isFinalStep={false}
      />

      <CustomizeSection>
        <SectionTitle variant="subtitle1">{t('review.customize-analyze-title')}</SectionTitle>
        <DescriptionText variant="body1" className="customize-description">
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
              <CheckboxTitle variant="subtitle1">{t('review.advice-title')}</CheckboxTitle>
              <CheckboxDescription variant="body2">
                {t('review.advice-description')}
              </CheckboxDescription>
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
              <CheckboxTitle variant="subtitle1">{t('review.recommendations-title')}</CheckboxTitle>
              <CheckboxDescription variant="body2">
                {t('review.recommendations-description')}
              </CheckboxDescription>
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
              <CheckboxTitle variant="subtitle1">{t('review.guidelines-title')}</CheckboxTitle>
              <CheckboxDescription variant="body2">
                {t('review.guidelines-description')}
              </CheckboxDescription>
            </CheckboxContent>
            <StyledCheckbox
              size="medium"
              checked={exerciseGuidelines}
              className={exerciseGuidelines ? 'checked-exercise' : ''}
            />
          </CheckboxCard>

          <CheckboxCard
            onClick={toggleMedicationGuidance}
            className={medicationGuidance ? 'checked-medication' : ''}
          >
            <CheckboxIcon className={medicationGuidance ? 'checked-medication' : ''}>
              <Stethoscope />
            </CheckboxIcon>
            <CheckboxContent>
              <CheckboxTitle variant="subtitle1">{t('review.insights-title')}</CheckboxTitle>
              <CheckboxDescription variant="body2">
                {t('review.insights-description')}
              </CheckboxDescription>
            </CheckboxContent>
            <StyledCheckbox
              size="medium"
              checked={medicationGuidance}
              className={medicationGuidance ? 'checked-medication' : ''}
            />
          </CheckboxCard>
        </CheckboxGrid>
      </CustomizeSection>

      <TextAreaContainer>
        <AdditionalTitle variant="subtitle1">
          {t('review.additional-questions-title')}
        </AdditionalTitle>
        <AdditionalDescriptionText variant="body1">
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
        <ContinueButton onClick={handleContinue} disabled={isLoading}>
          {t('review.continue')}
        </ContinueButton>
      </ButtonContainer>
    </WrapperReviewCustomize>
  );
};

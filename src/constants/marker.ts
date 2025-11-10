export const MARKER_OPTIONS = [
  'Bilirubin (Total)',
  'Amylase',
  'AST',
  'Creatinine',
  'LDH',
  'ALT',
  'Glucose',
  'Cholesterol',
] as const;

export const UNIT_OPTIONS = ['mg/dL', 'U/L', 'mmol/L', 'g/dL'] as const;

export const MARKER_CONFIG: Record<string, { unit: string; normalRange: string }> = {
  'Bilirubin (Total)': { unit: 'mg/dL', normalRange: '0.1 - 1.2 mg/dL' },
  Amylase: { unit: 'U/L', normalRange: '30 - 110 U/L' },
  AST: { unit: 'U/L', normalRange: '5 - 40 U/L' },
  Creatinine: { unit: 'mg/dL', normalRange: '0.6 - 1.2 mg/dL' },
  LDH: { unit: 'U/L', normalRange: '125 - 220 U/L' },
  ALT: { unit: 'U/L', normalRange: '7 - 56 U/L' },
  Glucose: { unit: 'mg/dL', normalRange: '70 - 100 mg/dL' },
  Cholesterol: { unit: 'mg/dL', normalRange: '<200 mg/dL' },
};

export const BIRTH_YEARS = Array.from({ length: 2025 - 1925 + 1 }, (_, i) => 2025 - i);

export const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
} as const;

export const GENDER_OPTIONS = [GENDER.MALE, GENDER.FEMALE] as const;

export const PREGNANCY_STATUS = {
  YES: 'Yes',
  NO: 'No',
} as const;

export const PREGNANCY_OPTIONS = [PREGNANCY_STATUS.YES, PREGNANCY_STATUS.NO] as const;

export const VALIDATION_PATTERNS = {
  DECIMAL_NUMBER: /^\d*\.?\d*$/,
} as const;

export const BREAKPOINTS = {
  MD: 768,
} as const;

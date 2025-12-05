export const BIRTH_YEARS = Array.from({ length: 2025 - 1925 + 1 }, (_, i) => 2025 - i);

export const GENDER = {
  MALE: 'Male',
  FEMALE: 'Female',
};

export const PREGNANCY_STATUS = {
  NO: 'No',
  YES1stTrimester: 'Yes, 1st trimester',
  YES2ndTrimester: 'Yes, 2nd trimester',
  YES3rdTrimester: 'Yes, 3rd trimester',
} as const;

export const PREGNANCY_OPTIONS = [
  PREGNANCY_STATUS.NO,
  PREGNANCY_STATUS.YES1stTrimester,
  PREGNANCY_STATUS.YES2ndTrimester,
  PREGNANCY_STATUS.YES3rdTrimester,
] as const;

export const VALIDATION_PATTERNS = {
  DECIMAL_NUMBER: /^\d*\.?\d*$/,
} as const;

export const BREAKPOINTS = {
  LG: 1052,
} as const;

export const MARKER_OPTIONS = [
  'White Blood Cells',
  'Red Blood Cells',
  'Hemoglobin',
  'Hematocrit',
  'Mean Corpuscular Volume',
  'Mean Corpuscular Hemoglobin',
  'Mean Corpuscular Hemoglobin Concentration',
  'Platelets',
  'Red Cell Distribution Width SD',
  'Red Cell Distribution Width CV',
  'Platelet Distribution Width',
  'Mean Platelet Volume',
  'Platelet Large Cell Ratio',
  'Neutrophils Absolute',
  'Lymphocytes Absolute',
  'Monocytes Absolute',
  'Eosinophils Absolute',
  'Basophils Absolute',
  'Erythrocyte Sedimentation Rate',
  'Triglycerides',
  'Total Cholesterol',
  'HDL Cholesterol',
  'LDL Cholesterol',
  'VLDL Cholesterol',
  'Atherogenic Coefficient',
  'Urea',
  'Uric Acid',
  'Creatinine',
  'Creatinine Block',
  'Total Bilirubin',
  'Direct Bilirubin',
  'Indirect Bilirubin',
  'Alanine Aminotransferase',
  'Aspartate Aminotransferase',
  'Gamma-Glutamyl Transferase',
  'Alkaline Phosphatase',
  'Albumin',
  'Glucose',
] as const;

export const UNIT_OPTIONS = [
  '10^9/L',
  '10^12/L',
  'g/L',
  'fL',
  'pg',
  '%',
  'mm/h',
  'mmol/L',
  'μmol/L',
  'U/L',
] as const;

export const MARKER_STATUS = {
  NORMAL: 'Normal',
  SLIGHTLY_HIGH: 'Slightly High',
  HIGH: 'High',
  SLIGHTLY_LOW: 'Slightly Low',
  LOW: 'Low',
  CRITICAL: 'Critical',
} as const;

export const MARKER_STATUS_CLASSES = {
  [MARKER_STATUS.NORMAL]: 'Normal',
  [MARKER_STATUS.SLIGHTLY_HIGH]: 'Slightly-High',
  [MARKER_STATUS.HIGH]: 'High',
  [MARKER_STATUS.SLIGHTLY_LOW]: 'Slightly-Low',
  [MARKER_STATUS.LOW]: 'Low',
  [MARKER_STATUS.CRITICAL]: 'Critical',
} as const;

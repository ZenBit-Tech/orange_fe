import React from 'react';

import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import { LegalContent } from '@/pages/LegalPages/styles';
import { PageLayout } from '@/utils/Layout';

import privacyPolicyText from '../content/legal/privacy-policy.en.md?raw';

export const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout auth={true}>
      <title>{t('PrivacyPolicyPage.meta-title')}</title>
      <meta name="description" content={t('PrivacyPolicyPage.meta-description')} />
      <LegalContent>
        <div className="markdown">
          <ReactMarkdown>{privacyPolicyText}</ReactMarkdown>
        </div>
      </LegalContent>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;

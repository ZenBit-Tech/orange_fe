import React from 'react';

import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import { LegalContent } from '@/pages/LegalPages/styles';
import { PageLayout } from '@/utils/Layout';

import termsOfUseText from '../content/legal/terms-of-use.en.md?raw';

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout auth={true}>
      <title>{t('TermsPage.meta-title')}</title>
      <meta name="description" content={t('TermsPage.meta-description')} />
      <LegalContent>
        <div className="markdown">
          <ReactMarkdown>{termsOfUseText}</ReactMarkdown>
        </div>
      </LegalContent>
    </PageLayout>
  );
};

export default TermsPage;

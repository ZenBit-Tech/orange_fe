import React from 'react';

import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import { PageLayout } from '@/components/Layout';
import termsOfUseText from '@/content/legal/terms-of-use.en.md?raw';
import { LegalContent } from '@/pages/LegalPages/styles';

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

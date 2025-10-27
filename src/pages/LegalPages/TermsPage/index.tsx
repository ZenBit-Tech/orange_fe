import React from 'react';

import ReactMarkdown from 'react-markdown';

import { PageLayout } from '@/components/Layout';
import termsOfUseText from '@/content/legal/terms-of-use.en.md?raw';
import { LegalContent } from '@/pages/LegalPages/styles';

export const TermsPage: React.FC = () => {
  return (
    <PageLayout>
      <LegalContent>
        <div className="markdown">
          <ReactMarkdown>{termsOfUseText}</ReactMarkdown>
        </div>
      </LegalContent>
    </PageLayout>
  );
};

export default TermsPage;

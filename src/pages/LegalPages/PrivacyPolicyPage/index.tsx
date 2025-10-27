import React from 'react';

import ReactMarkdown from 'react-markdown';

// import { PageLayout } from '@/components/Layout/PageLayout';
import privacyPolicyText from '@/content/legal/privacy-policy.en.md?raw';
import { LegalContent } from '@/pages/LegalPages/styles';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    // <PageLayout>
    <LegalContent>
      <div className="markdown">
        <ReactMarkdown>{privacyPolicyText}</ReactMarkdown>
      </div>
    </LegalContent>
    // </PageLayout>
  );
};

export default PrivacyPolicyPage;

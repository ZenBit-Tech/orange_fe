import React from 'react';

import Footer from 'components/Footer';
import ReactMarkdown from 'react-markdown';

import Nav from '@/components/Nav';
import privacyPolicyText from '@/content/legal/privacy-policy.en.md?raw';

import { PageWrapper } from '../../LoginPage/styles';
import { LegalContent } from '../styles';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <PageWrapper>
      <Nav />
      <LegalContent>
        <div className="markdown">
          <ReactMarkdown>{privacyPolicyText}</ReactMarkdown>
        </div>
      </LegalContent>
      <Footer />
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;

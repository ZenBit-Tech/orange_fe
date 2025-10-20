import React from 'react';

import Footer from 'components/Footer';
import ReactMarkdown from 'react-markdown';

import Nav from '@/components/Nav';
import termsOfUseText from '@/content/legal/terms-of-use.en.md?raw';

import { PageWrapper } from '../../LoginPage/styles';
import { LegalContent } from '../styles';

export const TermsPage: React.FC = () => {
  return (
    <PageWrapper>
      <Nav />
      <LegalContent>
        <div className="markdown">
          <ReactMarkdown>{termsOfUseText}</ReactMarkdown>
        </div>
      </LegalContent>
      <Footer />
    </PageWrapper>
  );
};

export default TermsPage;

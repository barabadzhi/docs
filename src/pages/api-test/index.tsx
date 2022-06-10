import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <BrowserOnly
      fallback={<h1>loading</h1>}
    >
      {() => {
        const { API } = require('@stoplight/elements');
        require('@stoplight/elements/styles.min.css');
        return (
          <Layout>
            <API router="hash" basePath="/" layout="sidebar" apiDescriptionUrl="https://data.novorender.com/swagger/v1/swagger.json" />
          </Layout>
        )
      }}
    </BrowserOnly>

  );
} 

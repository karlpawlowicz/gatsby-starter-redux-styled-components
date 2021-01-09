import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';
import { ImageWrapper } from './IndexStyle';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
  </Layout>
);

export default IndexPage;

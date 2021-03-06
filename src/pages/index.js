import React from 'react';
import { graphql } from 'gatsby';

import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';

import '../styles/index.css';

const IndexPage = () => {
  return (
    <div className="grid">
      <Header />
      <Layout>
        <h3>Posts</h3>
      </Layout>
      <Footer />
    </div>
  );
};

export default IndexPage;

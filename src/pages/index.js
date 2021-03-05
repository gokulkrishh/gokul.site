import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';

import '../styles/index.css';

const IndexPage = () => {
  return (
    <div className="grid">
      <Header />
      <Layout>
        <h2>Posts</h2>
      </Layout>
      <Footer />
    </div>
  );
};

export default IndexPage;

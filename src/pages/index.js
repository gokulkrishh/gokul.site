import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';

import '../styles/index.css';
import '../styles/libraries.css';

const IndexPage = () => {
  return (
    <div className="grid">
      <Header />
      <Layout>
        <h2>Popular posts</h2>
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default IndexPage;

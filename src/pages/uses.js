import React from 'react';

import Footer from '../components/footer';
import Layout from '../components/layout';
import Menu from '../components/menu';

import '../styles/index.css';

const Uses = () => {
  return (
    <div className="grid">
      <Menu />
      <Layout>
        <h3>Uses</h3>
      </Layout>
      <Footer />
    </div>
  );
};

export default Uses;

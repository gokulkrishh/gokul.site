import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';

const Book = () => {
  return (
    <div className="grid">
      <Header />
      <Layout>
        <h2>Books</h2>
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Book;

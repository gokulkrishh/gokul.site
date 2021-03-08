import React from 'react';

import Footer from '../components/footer';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';
import Menu from '../components/menu';

import '../styles/index.css';

const NotFoundPage = () => {
  return (
    <div className="grid">
      <Menu />
      <Layout>
        <h3>Page not found</h3>
        <h3>
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{' '}
          We couldn’t find what you were looking for.
        </h3>
        <br />
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default NotFoundPage;

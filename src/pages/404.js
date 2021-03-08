import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';

import '../styles/index.css';

const NotFoundPage = () => {
  return (
    <div className="grid">
      <Header />
      <Layout>
        <title>Not found</title>
        <h1>Page not found</h1>
        <h2>
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{' '}
          We couldn’t find what you were looking for.
        </h2>
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default NotFoundPage;

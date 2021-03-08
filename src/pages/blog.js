import React from 'react';
import { Link, graphql } from 'gatsby';

import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';

const Blog = () => {
  return (
    <div className="grid">
      <Header />
      <Layout>
        <h2>Blogs</h2>
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;

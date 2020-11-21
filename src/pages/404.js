import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/Footer";

const NotFoundPage = () => (
  <Layout className="not-found">
    <Helmet>
      <title>Gokulakrishnan Kalaikovan | 404 :(</title>
    </Helmet>
    <Header />
    <div className="grid">
      <h2>NOT FOUND :(</h2>
      <a href="/">Go back to homepage</a>
    </div>
    <Footer />
  </Layout>
);

export default NotFoundPage;

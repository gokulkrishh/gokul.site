import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import Layout from "components/Layout";
import Newsletter from "components/newsletter";

const About = () => {
  return (
    <div className="grid">
      <Header />
      <Layout>
        <h2>About</h2>
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;

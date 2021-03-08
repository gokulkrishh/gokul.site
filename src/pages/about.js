import React from "react";

import Footer from "src/components/footer";
import Header from "src/components/header";
import Layout from "src/components/layout";
import Newsletter from "src/components/newsletter";

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

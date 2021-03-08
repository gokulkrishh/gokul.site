import React from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Newsletter from "../components/newsletter";

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

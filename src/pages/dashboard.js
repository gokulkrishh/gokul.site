import React, { useEffect, useState } from "react";

import Footer from "components/footer";
import Layout from "components/layout";
import Menu from "components/menu";
import Youtube from "components/metrics/youtube";

const dashboardList = [
  {
    title: "Youtube Subscribers",
    link: "https://youtube.com/gokulkalaikoven",
    url: "https://socialblade.com/youtube/c/gokulkalaikoven",
  },
  {
    title: "Youtube Views",
    link: "https://youtube.com/gokulkalaikoven",
    url: "https://socialblade.com/youtube/c/gokulkalaikoven",
  },
  {
    title: "Newsletter Subscribers",
    link: "https://buttondown.email/gokul.site",
  },
  {
    title: "Github Followers",
    link: "https://github.com/gokulkrishh",
    url: "https://api.github.com/users/gokulkrishh",
  },
  {
    title: "Github Stars",
    link: "https://github.com/gokulkrishh",
    url: "https://api.github.com/users/gokulkrishh",
  },
  { title: "Twitter Followers", link: "https://twitter.com/gokul_i" },
  { title: "Gumroad sales", link: "https://gum.co/IrcpA" },
];

const Dashboard = () => {
  const [data, setData] = useState(dashboardList);

  useEffect(() => {}, []);

  return (
    <div className="grid">
      <Menu />
      <Layout>
        <div className="dashboard">
          <h2>Dashboard</h2>
          <p>
            I believe in learing and building in public. Below is my personal
            dashboard which shows my followers count for youtube, newsletter,
            github, twitter and gumroad sales data as well.
          </p>
          <div className="cards">
            <Youtube />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Dashboard;

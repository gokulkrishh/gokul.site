import React from "react";
import { Link } from "gatsby";

const Posts = ({ edges: posts = [] }) => {
  return (
    <div className="posts">
      <h2>Recent posts</h2>
      <div className="cards">
        {posts.slice(0, 3).map(({ node }) => {
          const { frontmatter, excerpt, fields } = node;
          const { title, date, relative } = frontmatter;
          const { slug, readingTime } = fields;
          const link = relative ? `/${slug.split("/")[2]}` : `blog${slug}`;
          return (
            <Link to={link} className="link" key={title}>
              <div className="card">
                <h3>{title}</h3>
                <time>{date}</time>
                <span className="dot"> • </span>
                <time>{readingTime.text}</time>
                <p>{excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;

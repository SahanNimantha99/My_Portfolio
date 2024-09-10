import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <h2> Blog Posts </h2>{" "}
      <div className="row">
        <div className="col-md-4">
          <h3> Blog Post 1 </h3> <p> Summary of blog post 1 </p>{" "}
        </div>{" "}
        <div className="col-md-4">
          <h3> Blog Post 2 </h3> <p> Summary of blog post 2 </p>{" "}
        </div>{" "}
        <div className="col-md-4">
          <h3> Blog Post 3 </h3> <p> Summary of blog post 3 </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Blog;

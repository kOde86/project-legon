import React from "react";
import Card from "./Card";

const RelatedBlog = ({ blogs, id }) => {
  return (
    <div>
      <div className="blog-heading text-start pt-3 py-2 mb-4">
        Related Posts
      </div>
      <div className="col-md-12 text-left justify-content-center">
        <div className="row gx-5">
          {blogs.length === 1 && (
            <h5 className="text-center">
              Related Posts not found with this current post
            </h5>
          )}
          {blogs
            ?.filter((blogs) => blogs.id !== id)
            .map((item) => (
              <Card key={item.id} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;

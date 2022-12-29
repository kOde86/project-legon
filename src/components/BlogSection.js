import React, { useEffect } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";

const BlogSection = ({
  id,
  title,
  description,
  category,
  imgUrl,
  userId,
  author,
  timestamp,
  user,
  handleDelete,
  tags,
  price,
  contact
}) => {
  return (
    <div style={{ margin:'.75rem 0', padding:'.5rem'}}>
      <div className="row pb-4 ps-innner"  key={id}>
        <div className="col-md-5">
          <div className="hover-blogs-img">
            <div className="blogs-img">
              <img src={imgUrl} alt={title} />
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-7 for-padding">
          <div className="text-start">
            <h6 className="category catg-color">{category}</h6>
            <span className="title py-2">{title}</span>
            <span className="meta-info">
              <p className="author">{author}</p> -&nbsp;
              {timestamp.toDate().toDateString()}
            </span>
          </div>
          <div className="short-description text-start">
            {excerpt(description, 120)}
          </div>
          <div className="flex-area">
              <Link to={`/detail/${id}`}>
              <button className="btn btn-read price-input price-btn">{`GH¢${price}`}</button>
              </Link>
               <button className="btn contact-btn">{contact}</button>
            </div>
            <div className="bottom-div interact">
             <Link to={`/detail/${id}`}>
              <button className="btn btn-detail">Read More</button>
              </Link>
           
          {user && user.uid === userId && (
            <div className="" style={{ float: "right" }}>
              
              <div className="icons">
              <FontAwesome
                name="trash"
                style={{ margin: "15px", cursor: "pointer" }}
                size="2x"
                onClick={() => handleDelete(id)}
              />
              <Link to={`/update/${id}`}>
                <FontAwesome
                  name="edit"
                  style={{ cursor: "pointer" }}
                  size="2x"
                />
              </Link>
              </div>
            </div>
          )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

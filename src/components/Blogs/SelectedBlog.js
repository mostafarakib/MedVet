import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SelectedBlog.css";

const SelectedBlog = () => {
  const [detailedBlog, setDetailedBlog] = useState({});
  const { blogId } = useParams();

  useEffect(() => {
    fetch(`/blogs/blog-${blogId}.json`)
      .then((res) => res.json())
      .then((data) => setDetailedBlog(data));
  }, []);
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 pt-5 ">
      <div className="w-50 selected_blog-container--content">
        <img className="w-100" src={detailedBlog[0]?.img} alt="" />
        <p className="section-intro mt-5">{detailedBlog[0]?.date}</p>
        <h2 className="section-headline">{detailedBlog[0]?.title}</h2>
        <p>{detailedBlog[0]?.paragraph}</p>
      </div>
    </div>
  );
};

export default SelectedBlog;

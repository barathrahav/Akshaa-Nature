"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogData } from "@/data/json-data/blog-data";
const BlogSidebarBlogs = () => {
  return (
    <div className="sidebar__widget mb-30">
      <div className="sidebar__widget-head mb-35">
        <h4 className="sidebar__widget-title">Recent posts</h4>
      </div>
      <div className="sidebar__widget-content">
        {blogData && (
          <div className="rc__post-wrapper">
            {blogData.slice(0, 4).map((item, num) => {
              const title = item.title;
              const words = title.split(" ");
              const sortTitle = words.slice(0, 5).join(" ");
              return (
                <div className="rc__post d-flex align-items-center" key={num}>
                  <div className="rc__thumb mr-20">
                    <Link href={`/blog-details/${item._id}`}>
                      <Image
                        width={80}
                        height={120}
                        style={{ width: "auto", height: "100%" }}
                        src={item.img}
                        alt="news-image"
                      />
                    </Link>
                  </div>
                  <div className="rc__content">
                    <div className="rc__meta">
                      <span>{item.date}</span>
                    </div>
                    <h6 className="rc__title">
                      <Link href={`/blog-details/${item._id}`}>
                        {sortTitle}
                      </Link>
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSidebarBlogs;

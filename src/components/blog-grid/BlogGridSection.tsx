"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Pagination from "../elements/product/Pagination";
import TeamPreloader from "@/preloaders/TeamPreloader";
import { blogData } from "@/data/json-data/blog-data";
const BlogGridSection = () => {
 
  return (
    <section className="bd-news__grid-area pt-115 pb-65">
      <div className="container small-container">
        <div className="row">
          {blogData.length ? (
            blogData.map((item, num) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={num}>
                <div className="bd-news__item mb-60">
                  <div className="bd-news__thumb w-img">
                    <Link href={`/blog-details/${item._id}`}>
                      <Image
                        src={item.img}
                        alt="news-Img"
                        width={500}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="bd-news__content">
                    <div className="bd-news__meta-list">
                      <div className="bd-news__meta-item">
                        <span>
                          <Link href="/blog">
                            <i className="fa-regular fa-user"></i>
                            {item.author}
                          </Link>
                        </span>
                      </div>
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-regular fa-clock"></i>
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="bd-news__title">
                      <h3>
                        <Link href={`/blog-details/${item._id}`}>
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                    <Link
                      className="bd-news__btn"
                      href={`/blog-details/${item._id}`}
                    >
                      Read More
                      <span>
                        <i className="fa-solid fa-arrow-left"></i>
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <TeamPreloader />
            </>
          )}
        </div>

        <div className="row justify-content-center">
            <div className="col-xxl-12">
              <Pagination
                totalPages={4}
                currentPage={2}
                setPage={1}
                Pagination_space="d-flex justify-content-center mt-40  mb-45"
              />
            </div>
          </div>
      </div>
    </section>
  );
};

export default BlogGridSection;

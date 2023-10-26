"use client";
import React from "react";
import userIcon from "../../../public/assets/img/icon/user-icon.png";
import { commentData } from "@/data/json-data/blog-comment-data";
import Image from "next/image";
import Link from "next/link";
const BlogComments = () => {
  return (
    <>
      <div>
        {commentData.length ? (
          <div className="bd-postbox__comment  mb-55 mt-30">
            <h3 className="postbox__comment-title">
              {" "}
              {commentData.length > 1
                ? `${commentData.length} comments`
                : `${commentData.length} comment`}{" "}
            </h3>
            <ul>
              {commentData.map((item) => (
                <li key={item._id}>
                  <div className="bd-postbox__comment-box d-flex">
                    <div className="bd-postbox__comment-avater comment-img mr-30">
                      <Image
                        src={item?.img ? item?.img : userIcon}
                        alt="comments-img"
                        width={200}
                        height={200}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="bd-postbox__comment-info">
                      <div className="bd-postbox__comment-avater-info d-flex justify-content-between">
                        <div className="bd-postbox__comment-name">
                          <h4> {item.name} </h4>
                          <span className="post-meta">
                            <i className="fa-light fa-calendar-days"></i>{" "}
                            {item.date}{" "}
                          </span>
                        </div>
                        <div className="bd-postbox__comment-reply">
                          <Link href="">
                            <i className="fa-solid fa-share"></i> Reply
                          </Link>
                        </div>
                      </div>
                      <div className="bd-postbox__comment-text">
                        <p> {item.comment} </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default BlogComments;

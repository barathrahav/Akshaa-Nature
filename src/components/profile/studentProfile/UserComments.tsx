"use client";
import { CommentType } from "@/interFace/api-interFace";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { commentData } from "@/data/json-data/blog-comment-data";
interface FormData {
  comment: string;
}
const UserComments = () => {
  const [myComments, setMyComments] = useState<CommentType[]>(commentData);
  const [comment, setComment] = useState<Record<string, any>>({});
  const [edeteActive, setEdeteActive] = useState<boolean>(false);
  const [updateComment, setupdateComment] = useState<boolean>(false);
  const [edetedId, setEdetedId] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  const handleDeleteReview = (item: CommentType) => {
    const remainingReviews = myComments.filter(
      (itm) => itm._id !== item?._id
    );
    setMyComments(remainingReviews);
    toast.success("Comment Deleted");
}

  const handleActiveEdete = (item: CommentType) => {
    setEdeteActive(!edeteActive);
    setEdetedId(item?._id);
    setComment(item);
  };

  const handleResetEdete = () => {
    setEdeteActive(!edeteActive);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
        //  use it after api response
         setEdeteActive(!edeteActive);
          setupdateComment(!updateComment);
          toast.success(`Review Updated`);
  };

  return (
    <>
      {myComments.length ? (
        <div className={`student-profile-reviews ${myComments.length > 4 ? "scrollbox" : ""}`}>
          {myComments.map((item) => (
            <div key={item._id} className="student-profile-reviews-item mb-30">
              <div className="student-profile-reviews-course-title">
                <h5>
                  {" "}
                  <Link href={`/blog-details/${item?.postId}`}>
                    {item?.title ? item?.title : "Blog Name Not Set"}
                  </Link>{" "}
                </h5>
              </div>
              {edeteActive && item._id === edetedId ? (
                <>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="student-profile-reviews-text"
                  >
                    <div className="student-profile-reviews-text-wrap mb-20">
                      <div className="student-profile-review-icon">
                        <p>{item?.date}</p>
                      </div>
                      <div className="student-profile-review-update">
                        <button
                          onClick={() => handleActiveEdete(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-edit"></i> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReview(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>

                    <div className="contact-from-input mb-20">
                      <label htmlFor="Current">Update Comment</label>
                      <input
                        id="Current"
                        type="text"
                        placeholder="Type New Review"
                        defaultValue={item?.comment}
                        {...register("comment")}
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="cont-btn mb-20  mt-10">
                          <button type="submit" className="update-close-btn">
                            Update comment
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="cont-btn mb-20  mt-10">
                          <button
                            onClick={handleResetEdete}
                            className="update-close-btn"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="student-profile-reviews-text">
                    <div className="student-profile-reviews-text-wrap mb-20">
                      <div className="student-profile-review-icon">
                        <p>{item?.date}</p>
                      </div>
                      <div className="student-profile-review-update d-flex">
                        <button
                          onClick={() => handleActiveEdete(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-edit"></i> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReview(item)}
                          type="button"
                          className="student-profile-review-update-btn"
                        >
                          <i className="far fa-trash-alt"></i> Delete
                        </button>
                      </div>
                    </div>
                    <div className="student-profile-review-content">
                      <p>{item?.comment}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-center">No comments </p>
        </>
      )}
    </>
  );
};

export default UserComments;

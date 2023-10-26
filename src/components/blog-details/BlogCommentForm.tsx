"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface FormData {
  comment: string;
}
const BlogCommentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const comment = data.comment;
   
  };

  return (
    <div className="bd-postbox__contact">
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xxl-12">
            <div className="bd-postbox__singel-input">
              <textarea
                placeholder="Enter your comment ..."
                {...register("comment", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "comment must be at least 4 characters long",
                  },
                })}
              ></textarea>
            </div>
          </div>

          <div className="col-xxl-12">
              <div className="bd-postbox__btn">
                <button type="submit" className="bd-fill__btn">
                  Post Comment
                </button>
              </div>
            </div>
        </div>
      </form>
    </div>
  );
};

export default BlogCommentForm;

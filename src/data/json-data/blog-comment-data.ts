import { CommentType } from "./../../interFace/api-interFace";
import courseStudentImg from "../../../public/assets/img/comment-user/course-student.png"
import commentOne from "../../../public/assets/img/comment-user/comments-1.png"
export const commentData: CommentType[] = [
  {
    _id: "blog-comment-id-1",
    date: "09/28/23 05:52 pm",
    comment:
      "For all the assets is hard and time-consuming technical work. And, of course, the result needs to be seamless and delightful — dare we say, even fun — to develop and maintain. Regardless of whether you’re ing up a storefront for a new merchant.",
    email: "admin@gmail.com",
    name: "Rosalina Kelian",
    postId: "blog-id-1",
    img: courseStudentImg,
    title: "Things I Wish I Had Known About Angular When I Started",
  },
  {
    _id: "blog-comment-id-2",
    date: "08/14/23 03:10 am",
    comment:
      "For all the assets is hard and time-consuming technical work. And, of course, the result needs to be seamless and delightful — dare we say, even fun — to develop and maintain. Regardless of whether you’re ing up a storefront for a new merchant.",
    email: "admin@gmail.com",
    name: "Rosalina Kelian",
    postId: "blog-id-2",

    img: commentOne,
    title: "Unique Ideas for Healthy Food You Haven’t heard yet",
  },
  {
    _id: "blog-comment-id-3",
    date: "10/12/23 02:15 pm",
    comment:
      "For all the assets is hard and time-consuming technical work. And, of course, the result needs to be seamless and delightful — dare we say, even fun — to develop and maintain. Regardless of whether you’re ing up a storefront for a new merchant.",
    email: "admin@gmail.com",
    name: "Arista Williamson",
    postId: "blog-id-4",
    img: courseStudentImg,
    title: "Unconscious Biases That Get In The Way Of Inclusive Design",
  },
];

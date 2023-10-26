import { StaticImageData } from "next/image";

  export interface CategoryType {
    _id:string;
    categoryName: string;
    categoryclass: string;
    categoryThumb: string | StaticImageData;
  }
export interface SubCategoryType {
    _id:string;
  subCategoryName: string;
  subcategoryclass: string;
  categoryName: string;
  }

  export interface UserReviewType {
    _id:string;
    productName:string;
    review: string; 
    name: string;
    email: string;
    date: string;
    productId: string;
    categoryName: string;
    retting: number;
    img?:string | StaticImageData;
  } 



  export interface blogDataType {
    _id:string;
    title: string;
    blogDetails: string;
    img: string |StaticImageData;
    date: string;
    author: string;
    commentsArray: [];
    authorEmail: string;
    comment: number;
  }

  export interface dynamicIdType {
    id:string
  }
  export interface CommentType {
    _id:string;
    date: string;
    comment: string;
    email: string;
    name: string;
    postId: string;
    img: string | StaticImageData;
    title: string;
  }



  export interface offerProductType {
    _id:string;
    productId:string;
    productName:string;
    banner: any | StaticImageData;
    date:string;
    offerPersent:number;
    price: number;
    oldPrice:number;
    productDetails:string;
}


// team api interface

export interface TeamMember {
  _id:string
  title: string;
  subTitle: string;
  img: string | StaticImageData;
  imgTwo: string | StaticImageData;
  imgThree: string | StaticImageData;
  date: string;
  aboutMe: string;
  phone: string;
  email: string;
  location: string;
  skills: Skill[];
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

export interface Skill {
  skillName: string;
  precent: string;
  _id:string;
}


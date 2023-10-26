import { CartProductTypeTwo } from "@/interFace/interFace";
// product imges

import img3 from "../../../public/assets/img/product/product-03.png";
import img1 from "../../../public/assets/img/product/product-01.png";
import img2 from "../../../public/assets/img/product/product-02.png";
import img4 from "../../../public/assets/img/product/product-04.png";
import img5 from "../../../public/assets/img/product/product-05.png";
import img6 from "../../../public/assets/img/product/product-15.png";
import img7 from "../../../public/assets/img/product/product-07.png";
import img8 from "../../../public/assets/img/product/product-08.png";
import img9 from "../../../public/assets/img/product/product-09.png";
import img10 from "../../../public/assets/img/product/product-10.png";
import img11 from "../../../public/assets/img/product/product-11.png";
import img12 from "../../../public/assets/img/product/product-12.png";
import img13 from "../../../public/assets/img/product/product-13.png";
import img14 from "../../../public/assets/img/product/product-14.png";
import img15 from "../../../public/assets/img/product/product-15.png";

// details imges
import orangeOne from "../../../public/assets/img/product/details/orange/orange-1.png";
import orangeTwo from "../../../public/assets/img/product/details/orange/orange-2.png";
import orangeThree from "../../../public/assets/img/product/details/orange/orange-3.png";
import orangeFour from "../../../public/assets/img/product/details/orange/orange-4.png";

import razmaOne from "../../../public/assets/img/product/details/razma-chawal/razma-1.png";
import razmaTwo from "../../../public/assets/img/product/details/razma-chawal/razma-2.png";

import b1 from "../../../public/assets/img/product/details/banana/b-1.png";
import b2 from "../../../public/assets/img/product/details/banana/b-2.png";
import b3 from "../../../public/assets/img/product/details/banana/b-3.png";
import b4 from "../../../public/assets/img/product/details/banana/b-4.png";



export const trendingProductData:CartProductTypeTwo[] =  [
    {
        _id: "product-id-9",
        categoryName: "Grocery & Staples",
        oldPrice: 30,
        apiTag:"trending-products",
        price: 25,
        productDetails: "Embrace the essence of Mediterranean goodness with our Pure Olive Oil, a versatile and nutritious oil that has been cherished for centuries. Extracted from premium-quality olives using a cold-press process, our olive oil offers a pristine taste and natural goodness, making it an essential ingredient in your kitchen and a staple in a healthy lifestyle.",
        productImages: [
            img9,
            img8,
            img5,
            img11
        ],
        productName: "Ergon Radish Bunch",
        productQuantity: 68,
        subcategoryName: "Cooking Oils",
        img: img9,
        date: "07/31/23 04:00 pm",
        offer: false,
        offerPersent: 0,
       
        productStatus: "new",
       
        averageRating: 5,
        numRatings: 3
    },
    {
        _id: "product-id-13",
        categoryName: "fruit & vegetables",
        oldPrice: 20,
        apiTag:"trending-products",
        price: 17,
        productDetails: "Experience a delightful fusion of flavors with our Strawberry Shortcake Cookie Sandwiches, a scrumptious treat that combines the sweetness of strawberries with the buttery goodness of shortbread cookies. Indulge in these delectable delights that are sure to satisfy your dessert cravings and leave you craving more.",
        productImages: [
            img13,
             img12,
            img11,
            img9
        ],
        productName: "Chocolate milk",
        productQuantity: 98,
        subcategoryName: "Tropical Fruits",
        img: img13,
        date: "07/31/23 03:52 pm",
        offer: true,
        offerPersent: 12,
      
        productStatus: "new",
       
        averageRating: 4.5,
        numRatings: 2
    },
    
   
    {
        _id: "product-id-14",
        categoryName: "Biscuits & Snacks",
        oldPrice: 23,
        apiTag:"trending-products",
        price: 17,
        productDetails: "Indulge in the timeless delight of our Classic Vanilla Cream Sandwich Biscuits, a delightful combination of buttery biscuits and luscious vanilla cream filling. Crafted with the finest ingredients, these biscuits are a nostalgic treat that will evoke cherished memories while satisfying your taste buds with every bite",
        productImages: [
            img14,
            img4,
            img8,
            img9
        ],
        productName: "shoping basket",
        productQuantity: 91,
        subcategoryName: "Sandwich Biscuits",
        img: img14,
        date: "07/31/23 03:50 pm",
        offer: false,
        offerPersent: 0,
 
        productStatus: "new",
       
        averageRating: 4.5,
        numRatings: 3
    },
    {
        _id: "product-id-12",
        categoryName: "Organic Food",
        oldPrice: 30,
        apiTag:"trending-products",
        price: 21,
        productDetails: "Savor the pure essence of summer with our Organic Honeydew Melon Wedges, a refreshing and naturally sweet delight that captures the juicy goodness of ripe honeydew melons. Harvested from organic farms, these melon wedges offer a guilt-free indulgence, packed with vitamins and hydration to keep you refreshed on sunny days",
        productImages: [
            img12,
            img13,
            img10,
            img14
        ],
        productName: "Chocolate Milk Splash",
        productQuantity: 98,
        subcategoryName: "Organic Melons",
        img: img12,
        date: "07/31/23 03:54 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4.5,
        numRatings: 5
    },
    {
        _id: "product-id-11",
        categoryName: "Organic Food",
        oldPrice: 25,
        apiTag:"trending-products",
        price: 20,
        productDetails: "Immerse yourself in the luscious essence of summer with our Organic Cantaloupe Chunks, a naturally sweet and juicy delight that captures the full flavor of ripe cantaloupes. Sourced from certified organic farms, these cantaloupe chunks offer a wholesome and refreshing treat that is both satisfying and nutritious.",
        productImages: [
            img11,
            img12,
            img13,
            img14
        ],
        productName: "Kosher Sour Cream",
        productQuantity: 61,
        subcategoryName: "Organic Stoneless Fruits",
        img: img11,
        date: "07/31/23 03:56 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 3.5,
        numRatings: 2
    },
    {
        _id: "product-id-7",
        categoryName: "Organic Food",
        oldPrice: 28,
        apiTag:"trending-products",
        price: 25,
        productDetails: "Delight in the traditional Italian pasta experience with our Fettuccine Noodles, a classic and versatile choice that embodies the essence of authentic Italian cuisine. Crafted with care and expertise, our fettuccine noodles offer the perfect balance of texture and flavor, making them an ideal canvas for a variety of delicious pasta dishes.",
        productImages: [
            img7,
            orangeOne,
            orangeTwo,
            orangeThree,
            orangeFour
        ],
        productName: "Toronja Rosada Organica",
        productQuantity: 86,
        subcategoryName: "Organic Stoneless Fruits",
        img: img7,
        date: "07/31/23 04:04 pm",
        offer: false,
        offerPersent: 0,
   
        productStatus: "new",
       
        averageRating: 4,
        numRatings: 1
    },
    {
        _id: "product-id-10",
        categoryName: "fruit & vegetables",
        oldPrice: 24,
        apiTag:"trending-products",
        price: 20,
        productDetails: "Introduce your little one to the delightful taste of summer with our Organic Melon Baby Food Puree, a gentle and nourishing option designed especially for growing infants. Made from certified organic melons, this puree offers a natural and wholesome way to introduce the delicious flavors of melons to your baby's developing palate.",
        productImages: [
            img10,
            img11,
            img12,
            img13
        ],
        productName: "Milk Depositphotos",
        productQuantity: 77,
        subcategoryName: "Tropical Fruits",
        img: img10,
        date: "07/31/23 03:59 pm",
        offer: true,
        offerPersent: 15,
        productStatus: "new",
        averageRating: 3.5,
        numRatings: 6
    },
    {
        _id: "product-id-8",
        categoryName: "fruit & vegetables",
        oldPrice: 35,
        apiTag:"trending-products",
        price: 30,
        productDetails: "Experience the versatility and quality of our Premium All-Purpose Flour, a kitchen essential that meets the highest standards of baking and cooking. Meticulously crafted from the finest wheat, our all-purpose flour offers exceptional performance, ensuring your culinary creations turn out perfectly every time.",
        productImages: [
            img8,
            img9,
            img4,
            img5
        ],
        productName: "Cauliflower Kg",
        productQuantity: 102,
        subcategoryName: "Tropical Fruits",
        img: img8,
        date: "07/31/23 04:03 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 3,
        numRatings: 10
    },
    {
        _id: "product-id-6",
        categoryName: "Grocery & Staples",
        oldPrice: 24,
        apiTag:"trending-products",
        price: 21,
        productDetails: "Experience the allure of classic Italian cuisine with our Spaghetti Pasta, a timeless and beloved pasta shape that embodies the essence of Italian comfort food. Crafted with precision and passion, our spaghetti pasta offers the perfect balance of texture and taste, making it a versatile and delightful choice for a wide range of pasta dishes.",
        productImages: [
            img15,
            razmaOne,
            razmaTwo
        ],
        productName: "Razma Chawal",
        productQuantity: 81,
        subcategoryName: "Rice",
        img: img15,
        date: "07/31/23 04:07 pm",
        offer: true,
        offerPersent: 10,
        productStatus: "new",
        averageRating: 4,
        numRatings: 5
    },

    // besti selling
       {
        _id: "product-id-13",
        categoryName: "fruit & vegetables",
        oldPrice: 20,
        apiTag:"best-selling-products",
        price: 17,
        productDetails: "Experience a delightful fusion of flavors with our Strawberry Shortcake Cookie Sandwiches, a scrumptious treat that combines the sweetness of strawberries with the buttery goodness of shortbread cookies. Indulge in these delectable delights that are sure to satisfy your dessert cravings and leave you craving more.",
        productImages: [
            img13,
            img12,
            img11,
            img9
        ],
        productName: "Chocolate milk",
        productQuantity: 98,
        subcategoryName: "Tropical Fruits",
        img: img13,
        date: "07/31/23 03:52 pm",
        offer: true,
        offerPersent: 12,
        productStatus: "new",
       
        averageRating: 4.5,
        numRatings: 2
    },
    {
        _id: "product-id-9",
        categoryName: "Grocery & Staples",
        oldPrice: 30,
        apiTag:"best-selling-products",
        price: 25,
        productDetails: "Embrace the essence of Mediterranean goodness with our Pure Olive Oil, a versatile and nutritious oil that has been cherished for centuries. Extracted from premium-quality olives using a cold-press process, our olive oil offers a pristine taste and natural goodness, making it an essential ingredient in your kitchen and a staple in a healthy lifestyle.",
        productImages: [
            img9,
            img8,
            img5,
            img11
        ],
        productName: "Ergon Radish Bunch",
        productQuantity: 68,
        subcategoryName: "Cooking Oils",
        img: img9,
        date: "07/31/23 04:00 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 5,
        numRatings: 15
    },
     {
        _id: "product-id-14",
        categoryName: "Biscuits & Snacks",
        oldPrice: 23,
        apiTag:"best-selling-products",
        price: 17,
        productDetails: "Indulge in the timeless delight of our Classic Vanilla Cream Sandwich Biscuits, a delightful combination of buttery biscuits and luscious vanilla cream filling. Crafted with the finest ingredients, these biscuits are a nostalgic treat that will evoke cherished memories while satisfying your taste buds with every bite",
        productImages: [
            img14,
            img4,
            img8,
            img9
        ],
        productName: "shoping basket",
        productQuantity: 91,
        subcategoryName: "Sandwich Biscuits",
        img: img14,
        date: "07/31/23 03:50 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4.5,
        numRatings: 20
    },
    {
        _id: "product-id-7",
        categoryName: "Organic Food",
        oldPrice: 28,
        apiTag:"best-selling-products",
        price: 25,
        productDetails: "Delight in the traditional Italian pasta experience with our Fettuccine Noodles, a classic and versatile choice that embodies the essence of authentic Italian cuisine. Crafted with care and expertise, our fettuccine noodles offer the perfect balance of texture and flavor, making them an ideal canvas for a variety of delicious pasta dishes.",
        productImages: [
            img7,
            orangeOne,
            orangeTwo,
            orangeThree,
            orangeFour
        ],
        productName: "Toronja Rosada Organica",
        productQuantity: 86,
        subcategoryName: "Organic Stoneless Fruits",
        img: img7,
        date: "07/31/23 04:04 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4,
        numRatings: 5
    },
     {
        _id: "product-id-14",
        categoryName: "Biscuits & Snacks",
        oldPrice: 23,
        apiTag:"best-selling-products",
        price: 17,
        productDetails: "Indulge in the timeless delight of our Classic Vanilla Cream Sandwich Biscuits, a delightful combination of buttery biscuits and luscious vanilla cream filling. Crafted with the finest ingredients, these biscuits are a nostalgic treat that will evoke cherished memories while satisfying your taste buds with every bite",
        productImages: [
            img14,
            img4,
            img8,
            img9
        ],
        productName: "shoping basket",
        productQuantity: 91,
        subcategoryName: "Sandwich Biscuits",
        img: img14,
        date: "07/31/23 03:50 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4.5,
        numRatings: 4
    },
    {
        _id: "product-id-1",
        categoryName: "Fresh Fruits",
        oldPrice: 12,
        apiTag:"best-selling-products",
        price: 10,
        productDetails: "Experience the captivating aroma and delicate texture of Basmati Rice, a treasured grain that hails from the lush fields of India. Renowned for its long, slender grains and distinctive fragrance, our Basmati Rice",
        productImages: [
            b1,
            b2,
            b3,
            b4
        ],
        productName: "Organic Banna",
        productQuantity: 34,
        subcategoryName: "Stone Fruits",
        img: img3,
        date: "08/02/23 11:06 am",
        offer: true,
        offerPersent: 14,
        productStatus: "new",
        averageRating: 3.5,
        numRatings: 4
    },
   
    {
        _id: "product-id-12",
        categoryName: "Organic Food",
        oldPrice: 30,
        apiTag:"best-selling-products",
        price: 21,
        productDetails: "Savor the pure essence of summer with our Organic Honeydew Melon Wedges, a refreshing and naturally sweet delight that captures the juicy goodness of ripe honeydew melons. Harvested from organic farms, these melon wedges offer a guilt-free indulgence, packed with vitamins and hydration to keep you refreshed on sunny days",
        productImages: [
            img12,
            img13,
            img10,
            img14
        ],
        productName: "Chocolate Milk Splash",
        productQuantity: 98,
        subcategoryName: "Organic Melons",
        img: img12,
        date: "07/31/23 03:54 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4.5,
        numRatings: 3
    },
    {
        _id: "product-id-10",
        categoryName: "fruit & vegetables",
        oldPrice: 24,
        apiTag:"best-selling-products",
        price: 20,
        productDetails: "Introduce your little one to the delightful taste of summer with our Organic Melon Baby Food Puree, a gentle and nourishing option designed especially for growing infants. Made from certified organic melons, this puree offers a natural and wholesome way to introduce the delicious flavors of melons to your baby's developing palate.",
        productImages: [
            img10,
            img11,
            img12,
            img13
        ],
        productName: "Milk Depositphotos",
        productQuantity: 77,
        subcategoryName: "Tropical Fruits",
        img: img10,
        date: "07/31/23 03:59 pm",
        offer: true,
        offerPersent: 15,
        productStatus: "new",
        averageRating: 3.5,
        numRatings: 7
    },
    {
        _id: "product-id-11",
        categoryName: "Organic Food",
        oldPrice: 25,
        apiTag:"best-selling-products",
        price: 20,
        productDetails: "Immerse yourself in the luscious essence of summer with our Organic Cantaloupe Chunks, a naturally sweet and juicy delight that captures the full flavor of ripe cantaloupes. Sourced from certified organic farms, these cantaloupe chunks offer a wholesome and refreshing treat that is both satisfying and nutritious.",
        productImages: [
            img11,
            img12,
            img13,
            img14
        ],
        productName: "Kosher Sour Cream",
        productQuantity: 61,
        subcategoryName: "Organic Stoneless Fruits",
        img: img11,
        date: "07/31/23 03:56 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 3.5,
        numRatings: 8
    },
    
    {
        _id: "product-id-6",
        categoryName: "Grocery & Staples",
        oldPrice: 24,
        apiTag:"best-selling-products",
        price: 21,
        productDetails: "Experience the allure of classic Italian cuisine with our Spaghetti Pasta, a timeless and beloved pasta shape that embodies the essence of Italian comfort food. Crafted with precision and passion, our spaghetti pasta offers the perfect balance of texture and taste, making it a versatile and delightful choice for a wide range of pasta dishes.",
        productImages: [
            img15,
            razmaOne,
            razmaTwo
        ],
        productName: "Razma Chawal",
        productQuantity: 81,
        subcategoryName: "Rice",
        img: img15,
        date: "07/31/23 04:07 pm",
        offer: true,
        offerPersent: 10,
        productStatus: "new",
        averageRating: 4,
        numRatings: 6
    },
    {
        _id: "product-id-8",
        categoryName: "fruit & vegetables",
        oldPrice: 35,
        apiTag:"best-selling-products",
        price: 30,
        productDetails: "Experience the versatility and quality of our Premium All-Purpose Flour, a kitchen essential that meets the highest standards of baking and cooking. Meticulously crafted from the finest wheat, our all-purpose flour offers exceptional performance, ensuring your culinary creations turn out perfectly every time.",
        productImages: [
            img8,
            img9,
            img4,
            img5
        ],
        productName: "Cauliflower Kg",
        productQuantity: 102,
        subcategoryName: "Tropical Fruits",
        img: img8,
        date: "07/31/23 04:03 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 3,
        numRatings: 5
    },
     {
        _id: "product-id-6",
        categoryName: "Grocery & Staples",
        oldPrice: 24,
        apiTag:"new-arrival",
        price: 21,
        productDetails: "Experience the allure of classic Italian cuisine with our Spaghetti Pasta, a timeless and beloved pasta shape that embodies the essence of Italian comfort food. Crafted with precision and passion, our spaghetti pasta offers the perfect balance of texture and taste, making it a versatile and delightful choice for a wide range of pasta dishes.",
        productImages: [
            img15,
            razmaOne,
            razmaTwo
        ],
        productName: "Razma Chawal",
        productQuantity: 81,
        subcategoryName: "Rice",
        img: img15,
        date: "07/31/23 04:07 pm",
        offer: true,
        offerPersent: 10,
        productStatus: "new",
        averageRating: 4,
        numRatings: 9
    },
    {
        _id: "product-id-8",
        categoryName: "fruit & vegetables",
        oldPrice: 35,
        apiTag:"new-arrival",
        price: 30,
        productDetails: "Experience the versatility and quality of our Premium All-Purpose Flour, a kitchen essential that meets the highest standards of baking and cooking. Meticulously crafted from the finest wheat, our all-purpose flour offers exceptional performance, ensuring your culinary creations turn out perfectly every time.",
        productImages: [
            img8,
            img9,
            img4,
            img5
        ],
        productName: "Cauliflower Kg",
        productQuantity: 102,
        subcategoryName: "Tropical Fruits",
        img: img8,
        date: "07/31/23 04:03 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 3,
        numRatings: 1
    },
      {
        _id: "product-id-14",
        categoryName: "Biscuits & Snacks",
        oldPrice: 23,
        apiTag:"new-arrival",
        price: 17,
        productDetails: "Indulge in the timeless delight of our Classic Vanilla Cream Sandwich Biscuits, a delightful combination of buttery biscuits and luscious vanilla cream filling. Crafted with the finest ingredients, these biscuits are a nostalgic treat that will evoke cherished memories while satisfying your taste buds with every bite",
        productImages: [
            img14,
            img4,
            img8,
            img9
        ],
        productName: "shoping basket",
        productQuantity: 91,
        subcategoryName: "Sandwich Biscuits",
        img: img14,
        date: "07/31/23 03:50 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4.5,
        numRatings: 0
    },
    {
        _id: "product-id-1",
        categoryName: "Fresh Fruits",
        oldPrice: 12,
        apiTag:"new-arrival",
        price: 10,
        productDetails: "Experience the captivating aroma and delicate texture of Basmati Rice, a treasured grain that hails from the lush fields of India. Renowned for its long, slender grains and distinctive fragrance, our Basmati Rice",
        productImages: [
            b1,
            b2,
            b3,
            b4
        ],
        productName: "Organic Banna",
        productQuantity: 34,
        subcategoryName: "Stone Fruits",
        img: img3,
        date: "08/02/23 11:06 am",
        offer: true,
        offerPersent: 14,
        productStatus: "new",
       
        averageRating: 3.5,
        numRatings: 2
    },
   
    {
        _id: "product-id-12",
        categoryName: "Organic Food",
        oldPrice: 30,
        apiTag:"new-arrival",
        price: 21,
        productDetails: "Savor the pure essence of summer with our Organic Honeydew Melon Wedges, a refreshing and naturally sweet delight that captures the juicy goodness of ripe honeydew melons. Harvested from organic farms, these melon wedges offer a guilt-free indulgence, packed with vitamins and hydration to keep you refreshed on sunny days",
        productImages: [
            img12,
            img13,
            img10,
            img14
        ],
        productName: "Chocolate Milk Splash",
        productQuantity: 98,
        subcategoryName: "Organic Melons",
        img: img12,
        date: "07/31/23 03:54 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4.5,
        numRatings: 3
    },
    {
        _id: "product-id-13",
        categoryName: "fruit & vegetables",
        oldPrice: 20,
        apiTag:"new-arrival",
        price: 17,
        productDetails: "Experience a delightful fusion of flavors with our Strawberry Shortcake Cookie Sandwiches, a scrumptious treat that combines the sweetness of strawberries with the buttery goodness of shortbread cookies. Indulge in these delectable delights that are sure to satisfy your dessert cravings and leave you craving more.",
        productImages: [
            img13,
            img12,
            img11,
            img9
        ],
        productName: "Chocolate milk",
        productQuantity: 98,
        subcategoryName: "Tropical Fruits",
        img: img13,
        date: "07/31/23 03:52 pm",
        offer: true,
        offerPersent: 12,
        productStatus: "new",
        averageRating: 4.5,
        numRatings: 6
    },
    {
        _id: "product-id-9",
        categoryName: "Grocery & Staples",
        oldPrice: 30,
        apiTag:"new-arrival",
        price: 25,
        productDetails: "Embrace the essence of Mediterranean goodness with our Pure Olive Oil, a versatile and nutritious oil that has been cherished for centuries. Extracted from premium-quality olives using a cold-press process, our olive oil offers a pristine taste and natural goodness, making it an essential ingredient in your kitchen and a staple in a healthy lifestyle.",
        productImages: [
            img9,
            img8,
            img5,
            img11
        ],
        productName: "Ergon Radish Bunch",
        productQuantity: 68,
        subcategoryName: "Cooking Oils",
        img: img9,
        date: "07/31/23 04:00 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 5,
        numRatings: 3
    },
     {
        _id: "product-id-14",
        categoryName: "Biscuits & Snacks",
        oldPrice: 23,
        apiTag:"new-arrival",
        price: 17,
        productDetails: "Indulge in the timeless delight of our Classic Vanilla Cream Sandwich Biscuits, a delightful combination of buttery biscuits and luscious vanilla cream filling. Crafted with the finest ingredients, these biscuits are a nostalgic treat that will evoke cherished memories while satisfying your taste buds with every bite",
        productImages: [
            img14,
            img4,
            img8,
            img9
        ],
        productName: "shoping basket",
        productQuantity: 91,
        subcategoryName: "Sandwich Biscuits",
        img: img14,
        date: "07/31/23 03:50 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4.5,
        numRatings: 7
    },
    {
        _id: "product-id-7",
        categoryName: "Organic Food",
        oldPrice: 28,
        apiTag:"new-arrival",
        price: 25,
        productDetails: "Delight in the traditional Italian pasta experience with our Fettuccine Noodles, a classic and versatile choice that embodies the essence of authentic Italian cuisine. Crafted with care and expertise, our fettuccine noodles offer the perfect balance of texture and flavor, making them an ideal canvas for a variety of delicious pasta dishes.",
        productImages: [
            img7,
            orangeOne,
            orangeTwo,
            orangeThree,
            orangeFour
        ],
        productName: "Toronja Rosada Organica",
        productQuantity: 86,
        subcategoryName: "Organic Stoneless Fruits",
        img: img7,
        date: "07/31/23 04:04 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 4,
        numRatings: 1
    },
   
    {
        _id: "product-id-10",
        categoryName: "fruit & vegetables",
        oldPrice: 24,
        apiTag:"new-arrival",
        price: 20,
        productDetails: "Introduce your little one to the delightful taste of summer with our Organic Melon Baby Food Puree, a gentle and nourishing option designed especially for growing infants. Made from certified organic melons, this puree offers a natural and wholesome way to introduce the delicious flavors of melons to your baby's developing palate.",
        productImages: [
            img10,
            img11,
            img12,
            img13
        ],
        productName: "Milk Depositphotos",
        productQuantity: 77,
        subcategoryName: "Tropical Fruits",
        img: img10,
        date: "07/31/23 03:59 pm",
        offer: true,
        offerPersent: 15,
        productStatus: "new",
        averageRating: 3.5,
        numRatings: 8
    },
    {
        _id: "product-id-11",
        categoryName: "Organic Food",
        oldPrice: 25,
        apiTag:"new-arrival",
        price: 20,
        productDetails: "Immerse yourself in the luscious essence of summer with our Organic Cantaloupe Chunks, a naturally sweet and juicy delight that captures the full flavor of ripe cantaloupes. Sourced from certified organic farms, these cantaloupe chunks offer a wholesome and refreshing treat that is both satisfying and nutritious.",
        productImages: [
            img11,
            img12,
            img13,
            img14
        ],
        productName: "Kosher Sour Cream",
        productQuantity: 61,
        subcategoryName: "Organic Stoneless Fruits",
        img: img11,
        date: "07/31/23 03:56 pm",
        offer: false,
        offerPersent: 0,
        productStatus: "new",
        averageRating: 3.5,
        numRatings: 3
    },
]
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { cart_product } from "@/redux/slices/cartSlice";
import ProductModal from "../shop/ProductModal";
import useGlobalContext from "@/hooks/use-context";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import GetRatting from "@/hooks/GetRatting";
import { categoryData } from "@/data/json-data/category-data";
// import { productData } from "@/data/json-data/product-data";
import axios from "axios";
import { CartProductTypeTwo, Product } from "@/interFace/interFace";
// import nextConfig from "../../../next.config";

interface ProductSliderProps {
  onProductSelect: (product: CartProductTypeTwo) => void;
}

// const ProductSlider = () => {
const ProductSlider: React.FC<ProductSliderProps> = ({ onProductSelect }) => {
  const { setOpenModal, openModal, setModalId } = useGlobalContext();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("fruit & vegetables");
  // const products = productData.filter(
  //   (item) => item.categoryName === searchValue
  // );
  const [products, setProducts] = useState<CartProductTypeTwo[]>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:1337/api/products?populate=*";

    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          const transformedProducts = response.data.data.map(
            (item: { attributes: any; id?: any }) => {
              const {
                id,
                attributes: {
                  productName,
                  averageRating,
                  oldPrice,
                  productDetails,
                  img: { data },
                  subcategoryName,
                  productStatus,
                },
              } = item;

              const imageUrl =
                data?.map((imageData: any) => imageData.attributes.url) || [];

              return {
                _id: id.toString(),
                categoryName: item.attributes.categoryName || "",
                oldPrice: oldPrice || 0,
                price: oldPrice || 0,
                averageRating: averageRating || 0,
                productQuantity: 0,
                subcategoryName: subcategoryName || "",
                img: imageUrl,
                date: "Some Date",
                offer: false,
                offerPersent: 0,
                productStatus: productStatus || "",
                numRatings: averageRating || 0,
                ...productDetails,
              };
            }
          );

          setProducts(transformedProducts);
        } else {
          console.error("Invalid response data format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const handleMoldalData = (id: string) => {
    if (id) {
      setOpenModal(!openModal);
      setModalId(id);
    }
  };

  return (
    <>
      <section className="bd-product__area pt-125 pb-95">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4">
              <div className="bd-section__title-wrapper mb-60">
                <span className="bd-sub__title">Organic Products</span>
                <h2 className="bd-section__title mb-30">Featured Product</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="bd-bananna-nav mb-60">
                <nav>
                  <div className="nav nav-tabs">
                    {categoryData.length ? (
                      <>
                        {categoryData.slice(0, 4).map((item) => (
                          <button
                            onClick={() => setSearchValue(item.categoryName)}
                            key={item._id}
                            className={`text-capitalize category-nav ${
                              searchValue === item.categoryName
                                ? "nav-link active"
                                : "nav-link"
                            }`}
                          >
                            {" "}
                            {item.categoryName}{" "}
                            <i className={item.categoryclass}></i>
                          </button>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              {products.length && (
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <div className="row">
                      <div className="col-12">
                        <div className="bd-product__wrapper p-relative">
                          <div className="bd-product__active swiper-container">
                            <div className="swiper-wrappers">
                              <Swiper
                                modules={[
                                  Navigation,
                                  Scrollbar,
                                  A11y,
                                  Autoplay,
                                ]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                observer={true}
                                observeParents={true}
                                autoplay={{
                                  delay: 5000,
                                  disableOnInteraction: true,
                                }}
                                navigation={{
                                  nextEl: ".product-button-next",
                                  prevEl: ".product-button-prev",
                                }}
                                breakpoints={{
                                  500: {
                                    slidesPerView: 2,
                                  },
                                  768: {
                                    slidesPerView: 3,
                                  },
                                  992: {
                                    slidesPerView: 4,
                                  },
                                  1200: {
                                    slidesPerView: 4,
                                  },
                                }}
                              >
                                {products.slice(0, 5).map((item, index) => {
                                  return (
                                    <SwiperSlide key={index}>
                                      <div className="swiper-slides">
                                        <div className="bd-product__item text-center p-relative mb-30">
                                          <div className="bd-product__thumb w-img">
                                            <Link
                                              href={`/shop-details/${item._id}`}
                                            >
                                              <Image
                                                key={item._id}
                                                width={500}
                                                height={500}
                                                style={{
                                                  width: "100%",
                                                  height: "100%",
                                                }}
                                                src={
                                                  Array.isArray(item.img) &&
                                                  item.img.length > 0
                                                    ? item.img[0]
                                                    : "/placeholder-image.jpg"
                                                }
                                                alt="product-img"
                                              />
                                            </Link>
                                            <div className="bd-product__action">
                                              <span
                                                className="cart-btn"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Quick Shop"
                                                onClick={() => {
                                                  dispatch(cart_product(item));
                                                  onProductSelect(item); // Notify parent component about the selected product
                                                }}
                                              >
                                                <i className="fal fa-cart-arrow-down"></i>
                                              </span>
                                              <span
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Quick View"
                                                data-bs-toggle="modal"
                                                data-bs-target="#productmodal"
                                                onClick={() =>
                                                  handleMoldalData(item._id)
                                                }
                                              >
                                                <i className="fal fa-eye"></i>
                                              </span>
                                              <span
                                                className="wishlist-btn"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Quick Wishlist"
                                                onClick={() =>
                                                  dispatch(
                                                    wishlist_product(item)
                                                  )
                                                }
                                              >
                                                <i className="fal fa-heart"></i>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="bd-product__content">
                                            <h4 className="bd-product__title">
                                              <Link
                                                href={`/shop-details/${item._id}`}
                                              >
                                                {item.productName}
                                              </Link>
                                            </h4>
                                            <div className="bd-product__price">
                                              {item?.offer === true ? (
                                                <span className="bd-product__old-price">
                                                  <del>
                                                    {`$${
                                                      item?.oldPrice % 1 === 0
                                                        ? `${item?.oldPrice}.00`
                                                        : item?.oldPrice.toFixed(
                                                            2
                                                          )
                                                    }`}
                                                  </del>
                                                </span>
                                              ) : (
                                                <></>
                                              )}

                                              {item?.price % 1 === 0 ? (
                                                <span className="bd-product__new-price">
                                                  ${`${item?.price}.00`}
                                                </span>
                                              ) : (
                                                <span className="bd-product__new-price">
                                                  ${item?.price?.toFixed(2)}
                                                </span>
                                              )}
                                            </div>
                                            <div className="bd-product__icon">
                                              <GetRatting
                                                averageRating={
                                                  item.averageRating
                                                }
                                              />
                                            </div>
                                          </div>
                                          <div className="bd-product__tag">
                                            {item?.offer ? (
                                              <>
                                                <span className="tag-text danger-bg">
                                                  {" "}
                                                  {item.offerPersent}%
                                                </span>
                                              </>
                                            ) : (
                                              <>
                                                <span className="tag-text theme-bg">
                                                  {" "}
                                                  {item?.productStatus}
                                                </span>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </SwiperSlide>
                                  );
                                })}
                              </Swiper>
                            </div>
                          </div>
                          <div className="bd-product__nav">
                            <button className="product-button-prev">
                              <i className="fa-regular fa-angle-left"></i>
                            </button>
                            <button className="product-button-next">
                              <i className="fa-regular fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ProductModal />
    </>
  );
};

export default ProductSlider;

"use client";
import React, { useState } from "react";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { cart_product } from "@/redux/slices/cartSlice";
import { CartProductTypeTwo } from "@/interFace/interFace";
import GetRatting from "@/hooks/GetRatting";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import { trendingProductData } from "@/data/json-data/trending-product-data";
const BrowseProductSlider = () => {
  const { setOpenModal, openModal, setModalId } = useGlobalContext();
  const dispatch = useDispatch();
  const [apiEndPoint, setapiEndPoint] = useState<string>("trending-products");
  const router = useRouter();
  const menuData = [
    {
      id: 1,
      text: "New Arrival",
      api: "new-arrival",
    },
    {
      id: 2,
      text: "Best Sale",
      api: "best-selling-products",
    },
    {
      id: 3,
      text: "Trending",
      api: "trending-products",
    },
  ];

  const handleMoldalData = (id: string) => {
    if (id) {
      setOpenModal(!openModal);
      setModalId(id);
    }
  };

  const tabProduct = trendingProductData.filter(
    (item) => item.apiTag === apiEndPoint
  );

  const handleCallApi = () => {
    router.push("/shop");
  };



  const handleAddToCart = (product: CartProductTypeTwo) => {
    dispatch(cart_product(product));
  };

  return (
    <>
      <div className="row">
        <div className="col-xxl-4 col-xl-5 col-lg-4">
          <div className="bd-section__title-wrapper mb-40">
            <div className="bd-sm__section-title">
              <h3>You May Browse</h3>
            </div>
          </div>
        </div>
        <div className="col-xxl-8 col-xl-7 col-lg-8">
          <div className="bd-trending-tab-2">
            <div className="bd-trending__tab-wrapper mb-40">
              <div className="bd-tending-nav">
                <nav>
                  <div
                    className="nav nav-tabs"
                    id="nav-tab-large"
                    role="tablist"
                  >
                    <button
                      className={
                        apiEndPoint === "trending-products" ? "nav-link active" : "nav-link"
                      }
                      onClick={handleCallApi}
                    >
                      View All
                    </button>

                    {menuData.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setapiEndPoint(item.api)}
                        className={
                          item.api === apiEndPoint
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        {item?.text}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="bd-trending__btn">
                <Link className="bd-bn__btn-2" href="/shop">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="bd-trending__item-wrapper mb-15">
                <div className="row">
                  {tabProduct?.length ? (
                    <>
                     <>
                          {tabProduct?.length &&
                            tabProduct?.slice(0,8).map((item, index) => {
                             
                              return (
                                <div
                                  className="col-xxl-3 col-xl-6 col-lg-4 col-md-6 col-sm-6"
                                  key={index}
                                >
                                  <div className="bd-trending__item text-center mb-30 position-relative">
                                    <div className="bd-trending__product-thumb">
                                      <Link href={`/shop-details/${item?._id}`}>
                                        <Image
                                          width={500}
                                          height={500}
                                          style={{
                                            width: "100%",
                                            height: "auto",
                                          }}
                                          src={item?.img}
                                          alt="product-img"
                                        />
                                      </Link>
                                      <div className="bd-product__action">
                                        <span
                                          className="cart-btn"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Quick Shop"
                                          onClick={() => handleAddToCart(item)}
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
                                            handleMoldalData(item?._id)
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
                                            dispatch(wishlist_product(item))
                                          }
                                        >
                                          <i className="fal fa-heart"></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="bd-teanding__content">
                                      <h4 className="bd-product__title">
                                        <Link
                                          href={`/shop-details/${item?._id}`}
                                        >
                                          {item?.productName}
                                        </Link>
                                      </h4>
                                      <div className="bd-product__price">
                                          {item?.offer === true ? (
                                            <span className="bd-product__old-price">
                                              <del>
                                                {`$${
                                                  item?.oldPrice % 1 === 0
                                                    ? `${item?.oldPrice}.00`
                                                    : item?.oldPrice.toFixed(2)
                                                }`}
                                              </del>
                                            </span>
                                          ) : (
                                            <></>
                                          )}

                                          {item?.price % 1 === 0 ? (
                                            <span className="bd-product__new-price">${`${item?.price}.00`}</span>
                                          ) : (
                                            <span className="bd-product__new-price">
                                              ${item?.price.toFixed(2)}
                                            </span>
                                          )}
                                        </div>
                                      <div className="bd-product__icon">
                                        {/* retting */}
                                        <GetRatting
                                          averageRating={item?.averageRating}
                                        />
                                      </div>
                                    </div>
                                    <div className="bd-product__tag">
                                      {item?.offer === true ? (
                                        <>
                                          <span className="tag-text danger-bg">
                                            {" "}
                                            {item?.offerPersent}%
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
                              );
                            })}
                        </>
                    </>
                  ) : (
                    <>
                     
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BrowseProductSlider;

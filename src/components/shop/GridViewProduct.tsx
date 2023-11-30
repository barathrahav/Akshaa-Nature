import GetRatting from "@/hooks/GetRatting";
import useGlobalContext from "@/hooks/use-context";
import { CartProductTypeTwo } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const GridViewProduct = ({ products, limit }: any) => {
  const { openModal, setOpenModal, setModalId } =
    useGlobalContext();
  const dispatch = useDispatch();

  const handleAddToCart = (product: CartProductTypeTwo) => {
    dispatch(cart_product(product));
  };
  const handleAddToWishlist = (product: CartProductTypeTwo) => {
    dispatch(wishlist_product(product));
  };

  const handleMoldalData = (id: string) => {
    if (id) {
      setOpenModal(!openModal);
      setModalId(id);
    }
  };

  return (
    <>
      
      {products?.length ? (
        <>
          {products.slice(0, limit).map((item: any, index: number) => {
            return (
              <div
                className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6"
                key={index}
              >
                <div className="bd-trending__item text-center mb-30 position-relative">
                  <div className="bd-trending__product-thumb border-5">
                    <Link href={`/shop-details/${item?._id}`}>
                      <Image
                        src={item?.img}
                        alt="product-img"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
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
                        onClick={() => handleMoldalData(item._id)}
                      >
                        <i className="fal fa-eye"></i>
                      </span>
                      <span
                        className="wishlist-btn"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick Wishlist"
                        onClick={() => handleAddToWishlist(item)}
                      >
                        <i className="fal fa-heart"></i>
                      </span>
                    </div>
                  </div>
                  <div className="bd-teanding__content">
                    <h4 className="bd-product__title">
                      <Link href={`/shop-details/${item?._id}`}>
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
                        <span className="bd-product__new-price">
                          ${`${item?.price}.00`}
                        </span>
                      ) : (
                        <span className="bd-product__new-price">
                          ${item?.price.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <div className="bd-product__icon">
                      <GetRatting averageRating={item?.averageRating} />
                    </div>
                  </div>
                  <div className="bd-product__tag">
                    {item?.offer ? (
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
      ) : (
        <>
          
        </>
      )}
    </>
  );
};

export default GridViewProduct;

"use client";
import React, { useState } from "react";
import ShopSidebarCategories from "./ShopSidebarCategories";
import FlashBanner from "../elements/product/FlashBanner";
import GridIcon from "@/svg/GridIcon";
import ListIcon from "@/svg/ListIcon";
import Pagination from "../elements/product/Pagination";
import GridViewProduct from "./GridViewProduct";
import ListViewProduct from "./ListViewProduct";
import ShopSidebarRetting from "./ShopSidebarRetting";
import ProductModal from "./ProductModal";
import NiceSelect from "../common/NiceSelect";
import { productData } from "@/data/json-data/product-data";
import { CartProductTypeTwo } from "@/interFace/interFace";
const ShopSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [apiEndPoint, setapiEndPoint] = useState<string>("");
  const [products, setProducts] = useState<CartProductTypeTwo[]>(productData);

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
    {
      id: 4,
      text: "Offers",
      api: "offer-products",
    },
  ];

  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
    const searchProduct = productData.filter((item) =>
      item.productName?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(searchProduct);
    console.log(searchProduct);
  };

  const selectHandler = () => {};

  return (
    <>
      <section className="bd-shop__area pt-115 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="bd-sidebar__widget-warpper mb-60">
                <div className="bd-product__filters">
                  <ShopSidebarCategories />
                  <ShopSidebarRetting />
                  <FlashBanner />
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              <div className="row">
                <div className="col-xl-4">
                  <div className="bd-top__filter-search p-relative mb-30">
                    <form className="bd-top__filter-input" action="#">
                      <input
                        type="text"
                        placeholder="Search keyword..."
                        value={searchValue}
                        onChange={handleInputChange}
                      />
                      <button>
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="bd-filter__tab-inner mb-30">
                    <div className="bd-top__filter">
                      <div className="bd-Product__tab pl-5">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              <GridIcon />
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="shop-filter-bar"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              <ListIcon />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bd-sort__type-filter">
                      <NiceSelect
                        options={menuData}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name="sorting-list"
                        setapiEndPoint={setapiEndPoint}
                        className="sorting-list"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="bd-shop__wrapper">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="bd-trending__item-wrapper">
                          <div className="row">
                            <GridViewProduct products={products} limit={12} />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="shop-filter-bar"
                      >
                        <div className="row">
                          <div className="col-xxl-12">
                            <ListViewProduct products={products} limit={8} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-xxl-12">
                  <Pagination
                    totalPages={3}
                    currentPage={1}
                    setPage={1}
                    Pagination_space="d-flex justify-content-center mt-40  mb-45"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductModal />
    </>
  );
};

export default ShopSection;


import ShopSidebarPreloader from "@/preloaders/ShopSidebarPreloader";
import React from "react";
import { categoryData } from "@/data/json-data/category-data";
const ShopSidebarCategories = () => {
  return (
    <>
      <div className="bd-filter__widget child-content-hidden">
        <h4 className="bd-filter__widget-title drop-btn">Categories</h4>
        <div className="bd-filter__content">
          <div className="bd-singel__rating">
            <input
              className="radio-box"
              type="radio"
              id="view-all-1"
              name="rating"
            />
            <label className="radio-star" htmlFor="view-all-1">
              <div className="bd-product__icon custome-cursor text-capitalize">
                view all
              </div>
            </label>
          </div>
          {categoryData?.length ? (
            categoryData.map((item, index) => (
              <div
                
                key={index}
                className="bd-singel__rating"
              >
                <input
                  className="radio-box"
                  type="radio"
                  id={item._id}
                  name="rating"
                />
                <label className="radio-star" htmlFor={item._id}>
                  <div className="bd-product__icon custome-cursor text-capitalize">
                    {item.categoryName}
                  </div>
                </label>
              </div>
            ))
          ) : (
            <>
             <ShopSidebarPreloader end={7}/>
          </>
          )}
         
        </div>
      </div>
    </>
  );
};

export default ShopSidebarCategories;

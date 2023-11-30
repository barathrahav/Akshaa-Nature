"use client";
import GetRatting from "@/hooks/GetRatting";
import ShopSidebarPreloader from "@/preloaders/ShopSidebarPreloader";
import React from "react";
import { rattingSidebar } from "@/data/json-data/ratting-sidebar-data";


const ShopSidebarRetting = () => {
 
  return (
    <>
      <div className="bd-filter__widget child-content-hidden">
        <h4 className="bd-filter__widget-title drop-btn">Ratings</h4>
        <div className="bd-filter__content">
          {rattingSidebar?.length ?
            rattingSidebar.map((item, index) => (
              <div key={index} className="bd-singel__rating">
                <input
                  className="radio-box"
                  type="radio"
                  id={index.toString()}
                  name="rating"
                />
                <label className="radio-star" htmlFor={index.toString()}>
                  <div className="bd-product__icon custome-cursor">
                    <GetRatting averageRating={item.retting} />
                    <span className="radio-item">({item.totalRatting})</span>
                  </div>
                </label>
              </div>
            )):
            <>
            <ShopSidebarPreloader end={5}/>
            </>}
        </div>
      </div>
    </>
  );
};

export default ShopSidebarRetting;

import { categoryData } from "@/data/json-data/category-data";
import { subCategoryData } from "@/data/json-data/subcategory-data";
import { CategoryType, SubCategoryType } from "@/interFace/api-interFace";
import Link from "next/link";
import React, { useState } from "react";
const CategoryItem = () => {
  const [categories, setCategories] = useState<CategoryType[]>(categoryData);
  const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [category, setcategory] = useState("");
  const handleSubCategory = (item: any) => {
    setcategory(item.categoryName);
    const filterSubCategory = subCategoryData.filter((item)=> item.categoryName === category)
    setSubCategories(filterSubCategory)
  };

  return (
    <>
      <nav>
        <ul>
          {categories.length &&
            categories.map((item) => (
              <li key={item._id} className="has-dropdown">
                <Link className="text-capitalize" onMouseOver={() => handleSubCategory(item)} href="/shop">
                  <i className={item.categoryclass}></i>
                  {item.categoryName}
                </Link>
                <ul className="category-submenu"> 
                  {subCategories.length &&
                    subCategories.map((item) => (
                      <li key={item._id}>
                        <Link className="text-capitalize" href="/shop">
                          <i className={item.subcategoryclass}></i>
                          {item.subCategoryName}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
};

export default CategoryItem;

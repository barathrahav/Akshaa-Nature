import { StaticImageData } from "next/image";
// children type

export interface childrenType {
  children: React.ReactNode;
}

// context api data type

export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  toggleModal?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  showSidebar?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>
  showSidebarWishlist?: boolean;
  setShowSidebarWishlist?: React.Dispatch<React.SetStateAction<boolean>>;
  openWishlist?: boolean;
  setOpenWishlist: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: boolean;
  setModalId: React.Dispatch<React.SetStateAction<string>>;
  modalId: string;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface idType {
  id?: number | string;
}

// menu type

interface DropdownItem {
  link: string;
  title: string;
}

export interface NavMenuItem {
  id: number;
  link: string;
  title: string;
  hasDropdown?: boolean;
  megamenu?: boolean;
  dropdownItems?: DropdownItem[];
}



export interface CartProductTypeTwo {
  _id: string;
  categoryName: string;
  oldPrice: number;
  apiTag?: string;
  price: number;
  productDetails: string;
  productImages: any[];
  productName: string;
  productQuantity: number;
  subcategoryName: string;
  img: string | StaticImageData;
  date: string;
  offer: boolean;
  offerPersent: number;
  productStatus?: string;
  averageRating: number;
  numRatings: number;
  totalCard?:number | undefined;
}
 


// order product type

export interface Product {
  _id: string;
  categoryName: string;
  oldPrice: number;
  price: number;
  productDetails: string;
  productImages: string[];
  productName: string;
  productQuantity: number;
  subcategoryName: string;
  img: string;
  date: string;
  offer: boolean;
  offerPersent: number;
  rettings: number[];
  productStatus: string;
  __v: number;
  totalCard: number;
  orderDate: string;
}


export interface siderbarRattingType {
  retting: number;
  totalRatting: number;
}

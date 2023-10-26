"use client";
import React, { createContext, useState, } from "react";
import {AppContextType} from "@/interFace/interFace";
export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");
  const [scrollDirection, setScrollDirection] = useState("up");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [showSidebarWishlist, setShowSidebarWishlist] =
    useState<boolean>(false);
  const [openWishlist, setOpenWishlist] = useState<boolean>(false);
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const contextValue: AppContextType = {
    sideMenuOpen,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    showSidebar,
    setShowSidebar,
    openCart,
    setOpenCart,
    toggleModal,
    openModal,
    setOpenModal,
    modalId,
    setModalId,
    showSidebarWishlist,
    setShowSidebarWishlist,
    openWishlist,
    setOpenWishlist,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

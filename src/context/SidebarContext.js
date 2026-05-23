"use client";
import React, { useState, useMemo, createContext, useCallback } from 'react';

// create context
export const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const toggleCartDrawer = useCallback(() => setCartDrawerOpen((prev) => !prev), []);
  const closeCartDrawer = useCallback(() => setCartDrawerOpen(false), []);

  const toggleCategoryDrawer = useCallback(() => setCategoryDrawerOpen((prev) => !prev), []);
  const closeCategoryDrawer = useCallback(() => setCategoryDrawerOpen(false), []);

  const toggleModal = useCallback(() => setIsModalOpen((prev) => !prev), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleChangePage = useCallback((p) => {
    setCurrentPage(p);
  }, []);

  const value = useMemo(
    () => ({
      cartDrawerOpen,
      toggleCartDrawer,
      closeCartDrawer,
      setCartDrawerOpen,
      categoryDrawerOpen,
      toggleCategoryDrawer,
      closeCategoryDrawer,
      isModalOpen,
      toggleModal,
      closeModal,
      currentPage,
      setCurrentPage,
      handleChangePage,
      isLoading,
      setIsLoading,
    }),

    [
      cartDrawerOpen,
      toggleCartDrawer,
      closeCartDrawer,
      categoryDrawerOpen,
      toggleCategoryDrawer,
      closeCategoryDrawer,
      isModalOpen,
      toggleModal,
      closeModal,
      currentPage,
      handleChangePage,
      isLoading
    ]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

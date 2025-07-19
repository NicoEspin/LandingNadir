"use client";
import React from 'react'
import { ProductsSection } from "@/app/products/components/ProductsSection";
import { AppWrapper } from "@/app/AppWrapper";
import { Footer } from "@/components/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <AppWrapper activeSection="products">
      <ProductsSection />
      <Footer />
    </AppWrapper>
  );
};

export default page;
"use client";
import { AppWrapper } from "@/app/AppWrapper";
import { ProductsSection } from "@/app/products/components/ProductsSection";
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
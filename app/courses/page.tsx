"use client";

import { AppWrapper } from "@/app/AppWrapper";
import { Footer } from "@/components/Footer";
import { CoursesSection } from './components/CoursesSection';

type Props = {};

const page = (props: Props) => {
  return (
    <AppWrapper activeSection="courses">
      <CoursesSection />
      <Footer />
    </AppWrapper>
  );
};

export default page;
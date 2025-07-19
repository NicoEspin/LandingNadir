import { AppWrapper } from "@/app/AppWrapper";
import { Footer } from "@/components/Footer";
import { ContactSection } from "./components/ContactSection";

type Props = {};

const page = (props: Props) => {
  return (
    <AppWrapper activeSection="contact">
      <ContactSection />
      <Footer />
    </AppWrapper>
  );
};

export default page;
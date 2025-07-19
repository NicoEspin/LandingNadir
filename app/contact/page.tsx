import { AppWrapper } from "@/app/AppWrapper";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "@/components/Footer";

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
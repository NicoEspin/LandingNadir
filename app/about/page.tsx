import { AboutSection } from "@/app/about/components/AboutSection";
import { AppWrapper } from "@/app/AppWrapper";
import { Footer } from "@/components/Footer";
import { CertificationsDisplay } from "./components/CertificationsDisplay";
import { ExperienceTimeline } from "./components/ExperienceTimeline";

type Props = {};

const page = (props: Props) => {
  return (
    <AppWrapper activeSection="about">
      <AboutSection />
      {/* <ExperienceTimeline /> */}
      <CertificationsDisplay />
      <Footer />
    </AppWrapper>
  );
};

export default page;

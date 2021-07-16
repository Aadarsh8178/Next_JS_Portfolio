import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import FreelanceWork from "../components/FreelanceWork/FreelanceWork";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Testimonials from "../components/Testimonials/Testimonials";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import Contact from "../components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <FreelanceWork />
      <Projects />
      <Acomplishments />
      <Technologies />
      <Testimonials />
      <Contact />
      <style jsx global>
        {`
          html {
            scroll-behavior: smooth;
          }
          body {
            width: 100vw;
            overflow-x: hidden;
          }
          section {
            overflow-x: hidden;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px black inset !important;
          }
          input:-webkit-autofill {
            -webkit-text-fill-color: white !important;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;

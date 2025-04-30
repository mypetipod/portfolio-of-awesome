import { Nav } from "@/components/nav-bar/nav-bar";
import "@styles/main.scss";
import { MainHeader } from "@/components/home/main-header/main-header";
import { Skills } from "@/components/home/skills/skills";
import { MyProjects } from "@/components/home/my-projects/my-projects";
import { ContactMe } from "@/components/home/contact-me/contact-me";
import { AboutMe } from "@/components/home/about-me/about-me";
import "../app/page.module.css";

const Page = () => {
  return (
    <div>
      <Nav link="/contact-me" linkName="Contact" />
      <MainHeader />
      <Skills />
      <MyProjects />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Page;

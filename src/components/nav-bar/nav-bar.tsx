import "../../scss/main.scss";
import { Button } from "../button/nav-button";
import styles from "./nav-bar.module.scss";

export const Nav = ({ link, linkName }: any) => {
  return (
    <div className={styles["navBar"]}>
      <p className={styles["zachInitials"]}>ZS</p>
      <Button link="#contact-me" linkName="Contact" />
    </div>
  );
};

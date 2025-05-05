import { Button } from "@components/button/nav-button";
import styles from "./main-header.module.scss";

export const MainHeader = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["textContainer"]}>
        <h1 className={styles["name"]}>Zach Stevens</h1>
        <h1 className={styles["job"]}>Web Designer</h1>
      </div>
      <img
        src="/mypetipod/assets/images/zach-mountain.webp"
        alt="Mountain Image"
        className={styles["zachMountain"]}
      />
      <div className={styles["description"]}>
        <p className={styles["descriptionText"]}>
          I specialize in creating visually appealing and user-friendly websites
          that deliver a seamless user experiences. Explore my work to see how I
          bring creativity and functionality together to build a impactful
          online presence. I strive to create up to date and enjoyable websites
          for teams that need affordable and well-made websites done fast.
        </p>
        <div className={styles["buttonContainer"]}>
          <Button
            link="#about-me"
            linkName="More About Me"
            color="black"
            backgroundColor="white"
          />
        </div>
      </div>
    </div>
  );
};

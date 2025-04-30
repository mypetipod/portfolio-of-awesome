import styles from "./contact-me.module.scss";

export const ContactMe = () => {
  return (
    <div className={styles["container"]} id="contact-me">
      <div className={styles["headerContainer"]}>
        <h1 className={styles["contactHeader"]}>Contact Me</h1>
      </div>
      <p className={styles["contactText"]}>
        I'd love to help bring your vision to life. With web development and
        design, Reach out today, and let's discuss how I can help take your
        online presence to the next level!
      </p>
      <div className={styles["listContainer"]}>
        <ul className={styles["list"]}>
          <li className={styles["listElement"]}>
            <a href="mailto:zachstevens11@icloud.com">
              zachstevens11@icloud.com
            </a>
          </li>
          <li className={styles["listElement"]}>
            <a href="https://www.linkedin.com/in/zach-stevens-b713b8327/">
              LinkedIn Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

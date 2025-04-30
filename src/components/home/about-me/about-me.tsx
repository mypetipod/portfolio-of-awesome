import styles from "./about-me.module.scss";

export const AboutMe = () => {
  return (
    <div className={styles["container"]} id="about-me">
      <div className={styles["headerContainer"]}>
        <h1 className={styles["aboutHeader"]}>About Me</h1>
      </div>

      <div className={styles["contentWrapper"]}>
        <div className={styles["textContainer"]}>
          <p className={styles["aboutText"]}>
            I started designing in 2024, and from that moment forward, my
            passion has only grown. The opportunity to explore the vast
            possibilities within this profession was made possible by Midwestern
            Interactive, whose influence allowed me to uncover my enjoyment for
            design. Their support ignited a relentless pursuit of growth and
            excellence in my craft. With each project, I strive to push creative
            boundaries, refine my skills, and deliver meaningful, impactful
            designs. As I continue on this journey, I am ready to embrace new
            challenges, evolve as a designer, and leave a lasting impression in
            the world of design.
          </p>
        </div>

        <div className={styles["imgContainer"]}>
          <img
            className={styles["zachImage"]}
            src="/assets/images/beautiful-web-designer.webp"
            alt="Photograph of Zach"
          />
        </div>
      </div>
    </div>
  );
};

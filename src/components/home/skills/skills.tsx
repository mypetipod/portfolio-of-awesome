import data from "./skills.json";
import styles from "./skills.module.scss";

export const Skills = () => {
  return (
    <div className={styles["pageContainer"]}>
      <div className={styles["headerContainer"]}>
        <h1 className={styles["skillsHeader"]}>Skills</h1>
      </div>
      <div className={styles["skillsContainer"]}>
        {data.Skills.map((skill: any, index: number) => {
          return (
            <p key={index} className={styles["skill"]}>
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

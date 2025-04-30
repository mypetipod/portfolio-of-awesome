import styles from "./my-projects.module.scss";
import data from "./projects.json";

export const MyProjects = () => {
  const projects = data.projects;
  return (
    <div className={styles["container"]}>
      <div className={styles["headerContainer"]}>
        <h1 className={styles["projectsHeader"]}>My Projects</h1>
      </div>
      {projects.map((project, index) => (
        <div key={index} className={styles["projectContainer"]}>
          <div className={styles["projectsText"]}>
            <p className={styles["year"]}>{project.year}</p>
            <hr className={styles["line"]} />
            <p className={styles["label"]}>{project.label}</p>
          </div>
          <img
            src={project.image}
            alt="Zach Projects"
            className={styles["projectsImg"]}
          />
        </div>
      ))}
    </div>
  );
};

import styles from "./ui.module.scss";

export const Button = ({
  link,
  linkName,
  color = "white",
  backgroundColor = "black",
}: any) => {
  return (
    <a
      href={link}
      className={styles["nav-button"]}
      style={{ background: `${backgroundColor}`, color: `${color}` }}
    >
      {linkName}
    </a>
  );
};

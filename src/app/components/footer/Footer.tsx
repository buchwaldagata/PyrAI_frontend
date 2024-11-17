"use client";
import styles from "./footer.module.css";
// import logo from "../assets/logo-skrót.svg";
// import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.foot}>
      {/* <Image src={logo} alt={logo} width={50} /> */}
      <p className={styles.footer}>pyrAI 2024</p>
    </div>
  );
};

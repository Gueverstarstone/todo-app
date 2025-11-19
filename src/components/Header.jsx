import React from "react";
import styles from "./headerComponent.module.css";

export default function Header() {
  return (
    <header className="w-full bg-linear-to-r from-purple-500 via-pink-500 to-red-500 py-6 shadow-lg">
      <h1 className={styles.header}>My TO-DO List</h1>
    </header>
  );
}

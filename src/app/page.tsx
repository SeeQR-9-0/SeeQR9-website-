"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.brand} href="/">
        My Website
      </Link>
      <MenuIcon className={styles.menuIcon} />
    </nav>
  );
};

const Item = ({ title }: { title: string }) => {
  return (
    <div className={styles.item}>
      <h2>{title}</h2>
    </div>
  );
};

const Home = () => {
  const [items, setItems] = useState<string[]>(['Home', 'Team', 'Github']);


  return (
    <main className={styles.main}>
      <Navbar>
      <div className={styles.container}>
        {items.map((item) => (
          <Item key={item} title={item} />
        ))}
      </div>
      </Navbar>
    </main>
  );
};

export default Home;

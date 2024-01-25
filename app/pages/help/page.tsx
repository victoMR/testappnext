// pages/help.tsx
import React from "react";
import styles from "@/styles/styles.module.css";
import styles1 from "@/styles/LoginForm.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Help() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mi primera chamba</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Mi primera chamba" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <a href="/" className={styles.navbarBrand}>
          Home
        </a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link href="/pages/help" className={styles.navLink}>
              Help
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/pages/login" className={styles.navLink}>
              Log in
            </Link>
          </li>
        </ul>
      </nav>
      
        {/* Página de ayuda */}
        <div className={styles.containerHelp}>
          <h1 className={styles1.pageTitle}>Página de Ayuda</h1>
          <p className={styles1.pageDescription}>
            ¡Bienvenido a la página de ayuda! Si tienes alguna pregunta, no dudes
            en ponerte en contacto con nosotros.
          </p>
          <p className={styles1.pageDescription}>
            Puedes enviarnos un correo electrónico a{" "}
            <a href="mailto: ">
              nuestro correo electrónico
            </a>
            .
          </p>
        </div>
    </div>
  );
}

"use client";
// LoginForm.tsx
import React, { useState } from "react";
import styles from "@/styles/styles.module.css";
import styles1 from "@/styles/LoginForm.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log("Iniciando sesión con:", email, password);
    if (email === "victoMR" && password === "12345") {
      console.log("¡Inicio de sesión exitoso!");
      // Redirigir a la página de inicio
      window.location.href = "/";
    } else {
      console.error("¡Inicio de sesión fallido!");
    }
  };

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

      {/* Contenido principal */}


      <div style={{
        display: "block",
        position: "relative",
        left: "100px",
        top: "150px" // Adjust the top position as needed
      }}>
        <Image
          src="/animegirlok.png"
          alt="Picture of the author"
          layout="fixed"
          width={300}
          height={475}
          draggable={false}
        />
      </div>
      <div className="modal">
        <div className={styles1.gen}>
          <div className={styles1.container}>
            <h2 className={styles1.head}>Iniciar Sesión</h2>
            <form className={styles1.form}>
              <div className={styles1.inputGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className={styles1.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles1.inputGroup}>
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  className={styles1.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                width: "60%",
                marginTop: "20px"
              }} className={styles1.btn} type="button" onClick={handleLogin}>
                Iniciar Sesión
              </button>
              <Link style={{
                color: "white",
                textDecoration: "none",
                textAlign: "center",
                marginTop: "20px",
                display: "block",
              }} href={"/pages/addAcount"}>Crear cuenta</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

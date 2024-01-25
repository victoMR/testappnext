"use client";
// CreateAccountForm.tsx
import React, { useState } from "react";
import styles from "@/styles/styles.module.css";
import styles1 from "@/styles/CreateAccountForm.module.css";
import Head from "next/head";
import Link from "next/link";


const CreateAccountForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [usuario, setUsuario] = useState(""); // Set the initial value of 'message' to true
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCreateAccount = () => {
        // Aquí puedes implementar la lógica de creación de cuenta
        console.log("Creando cuenta con:", email, usuario ,password);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Crear cuenta</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Crear cuenta" />
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

            <div className={styles1.gen}>
                <div className={styles1.container}>
                    <h2 className={styles1.head}>Crear cuenta</h2>
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
                            <label htmlFor="usaurio">Usuario:</label>
                            <input
                                type="text"
                                id="user"
                                className={styles1.input}
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
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
                        <div className={styles1.inputGroup}>
                            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className={styles1.input}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                        }} className={styles1.btn} type="button" onClick={handleCreateAccount}>
                            Crear cuenta
                        </button>
                        <Link style={{
                            color: "white",
                            textDecoration: "none",
                            textAlign: "center",
                            marginTop: "20px",
                            display: "block",
                        }} href={"/pages/login"}>Iniciar Sesión</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAccountForm;

"use client"
// pages/index.tsx
import { useEffect, useState } from "react";
import styles from "@/styles/btnsstyles.module.css";
import Router from "next/router";
import Link from "next/link";

const IndexPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showCreateAccount, setShowCreateAccount] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowCreateAccount(false);
    };

    const handleRegisterClick = () => {
        setShowCreateAccount(true);
        setShowLogin(false);
    };

    useEffect(() => {
        // Comprueba si window está definido (es decir, si estamos en el lado del cliente)
        if (typeof window !== 'undefined') {
            if (showLogin) {
                Router.push("/pages/login");
            }

            if (showCreateAccount) {
                Router.push("/pages/addAcount");
            }
        }
    }, [showLogin, showCreateAccount]);


    return (
        <div className={styles.cont}>
            <li className={styles.navItem}>
                <Link href="/pages/login" className={styles.navBtn}>
                    Iniciar seccion
                </Link>
            </li>
            <br />
            <li className={styles.navItem}>
                <Link href="/pages/addAcount" className={styles.navBtn}>
                    Crear cuenta
                </Link>
            </li>
        </div>
    );
};

export default IndexPage;


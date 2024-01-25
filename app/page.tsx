import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/styles.module.css";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import Image from "next/image";
import IndexPage from "@/components/IndexPage";


export default function Home() {
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
        <a href="#" className={styles.navbarBrand}>
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
      <div className={styles.content}>
        <h1>Hola mundo cruel</h1>
        {/* Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/animegirlok.png"
            alt="Picture of the author"
            layout="fixed"
            width={300}
            height={475}
            draggable={false}
            justify-content="center"
            align-items="center"
          />
          <IndexPage />
        </div>
      </div>
      {/* Counter */}
      <Counter />
      {/* Footer */}
      <Footer />
    </div>
  );
}

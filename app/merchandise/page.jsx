import Image from "next/image";
import styles from "./page.module.css";
import { MerchHero } from "../images";
import Merch from "@/components/merch";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Merchandise() {
  return (
    <>
      <div className={styles.hero}>
        <Image src={MerchHero} alt="Merch Hero" className={styles.heroImg} />

        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Renew Tech&apos;s EcoStyle: <br/> Your Path to a Greener Future</h1>
          <p className={styles.heroMessage}>
            Welcome to Renew Tech&#39;s eco-friendly merchandise haven! Our
            collection is not just about clothing and accessories; it&#39;s a
            statement of your dedication to renewable energy. Dive in and
            explore the fashion of sustainability, proudly supporting a cleaner
            world alongside like-minded individuals.
          </p>
          <button className={styles.heroBtn}>Purchase Now</button>
        </div>
      </div>

      <div className={styles.container}>
        <Merch />
      </div>
      
      <Testimonials />

      <div className={styles.container}>
        <Footer />
      </div>
    </>
  );
}

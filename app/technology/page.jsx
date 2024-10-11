import Research from "@/components/research";
import styles from "./page.module.css";
import Footer from "@/components/footer";

export default function Technology() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.title}>
          <h1 className={styles.h1}>Innovative Energy Solutions</h1>
        </div>
      </div>

      <div className={styles.container}>
        <Research />
        <Footer />
      </div>
    </>
  );
}

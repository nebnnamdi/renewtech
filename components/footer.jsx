import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { logo } from "@/app/images";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["contact"]}>
        <Image
          src={logo}
          alt="Renew Tech Logo"
          width="auto"
          height="auto"
          className="pb-3"
        />
        <p>
          Email Address : <a href="mailto:hello@gmail.com">hello@gmail.com</a>
        </p>
        <p>
          Phone Number : <a href="tel:+17572374237">+17 572374 237</a>
        </p>
        <p>
          Phone Number : <a href="tel:+17572374237">+17 572374 237</a>
        </p>
      </div>

      <div className={`sm:ml-7 ${styles["contact"]}`}>
        <h2 className={styles.h2}>Contact Us</h2>
        <h2 className={styles.h3}>Contact Form</h2>
        <form className={styles["contact-form"]}>
          <label htmlFor="name">Enter Your Name</label>
          <input
            className={styles.text}
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <label htmlFor="email">Enter Your Email Address</label>
          <input
            className={styles.text}
            type="text"
            name="email"
            id="email"
            placeholder="Your Email Address"
            required
          />
          <label htmlFor="message">Enter Your Message</label>
          <textarea
            className={styles.text}
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="button">
            <button className={`w-full ${styles.button}`}>Send Message</button>
          </div>
        </form>
      </div>

      <div className={styles.links}>
        <Link href="/about">About Us</Link>
        <Link href="/technology">Technology</Link>
        <Link href="/merchandise">Merchandise</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </footer>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import { logo2 } from "../images";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Renewtech",
};

export default function ContactUs() {
  return (
    <>
      <div className={styles.hero}>
        <h1>Innovative Energy Solutions</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.formTitle}>Contact Form</h2>
          <form className="px-10">
            <div className={styles.formInput}>
              <label htmlFor="name" className={styles.formLabel}>
                Enter Your Name
              </label>
              <input
                name="name"
                placeholder="Your Name"
                type="text"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formInput}>
              <label htmlFor="email" className={styles.formLabel}>
                Enter Your Email Address
              </label>
              <input
                name="email"
                placeholder="Your Email Address"
                type="text"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formInput}>
              <label htmlFor="message" className={styles.formLabel}>
                Enter Your Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className={styles.input}
              ></textarea>
            </div>
            <button className={styles.button}>Send Message</button>
          </form>
        </div>

        <div className={styles.contact}>
          <p>Email Address: hello@gmail.com</p>
          <p>Phone Number: +17 572374237</p>
          <p>Phone Number: +17 572374237</p>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <Image src={logo2} alt="Renew Tech Logo" />
        </div>
        <div className={styles.links}>
          <Link href="/about">About Us</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/merchandise">Merchandise</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </>
  );
}

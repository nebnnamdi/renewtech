import Image from "next/image";
import styles from "./card.module.css";
import { Badge, David } from "@/app/images";

export function TeamCard({ name, role, image }) {
  return (
    <>
      <div className={styles.team}>
        <Image src={image} width="auto" height="auto" alt={name} />
        <h2 className={styles.h2}>{name}</h2>
        <p>{role}</p>
      </div>
    </>
  );
}

export function AwardCard({ name, year }) {
  return (
    <div className="relative sm:w-1/2">
      <div className={styles.award}>
        <Image alt="badge" src={Badge} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.year}>{year}</p>
      </div>
    </div>
  );
}

export function MerchCard({ title, cost, image }) {
  return (
    <>
      <div className={styles.merch}>
        <Image src={image} width="auto" height="auto" alt={title} />
        <h2 className={styles.merchTitle}>{title}</h2>
        <p>{`- $${cost} +`}</p>
      </div>
    </>
  );
}

export function FeedbackCard({image, name, job, message}) {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedbackHeader}>
        <Image src={image} alt="David Lopez" />
        <div>
          <h3 className={styles.feedbackName}>{name}</h3>
          <p>{job}</p>
        </div>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

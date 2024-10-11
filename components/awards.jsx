import { achievements } from "@/data";
import { AwardCard } from "./card";
import styles from "./awards.module.css";

export default function Awards() {
  return (
    <div className="mt-3">
      <h1 className={styles.title}>Achievements/Awards</h1>
      <AwardList />
    </div>
  );
}

export function AwardList() {
  return (
    <div className={styles.award}>
      {achievements.map((achievement) => (
        <AwardCard key={achievement.name} name={achievement.name} year={achievement.year} />
      ))}
    </div>
  );
}

import TeamDetails from "./team-details";
import styles from './team.module.css'

export default function Team() {
  return (
    <div className={styles.team}>
      <h1>Our Team</h1>
      <section className={styles.section}>
        <TeamDetails />
      </section>
    </div>
  );
}

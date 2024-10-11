import { MerchCard } from "./card";
import { merchDetails } from "@/data";
import styles from "./merch.module.css";

export default function Merch() {
  return <MerchList />;
}

export function MerchList() {
  return (
    <div className={styles.list}>
      {merchDetails.map((item) => (
        <MerchCard
          key={item.title}
          title={item.title}
          cost={item.cost}
          image={item.image}
        />
      ))}
    </div>
  );
}

import {TeamCard} from "./card";
import { teamDetails } from "@/data";

export default function TeamDetails() {
  return (
    <>
      {teamDetails.map((detail) => (
        <TeamCard key={detail.id} name={detail.name} role={detail.role} image={detail.image} />
      ))}
    </>
  );
}

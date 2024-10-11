import Image from "next/image";
import { researchDetails } from "@/data";
import styles from './research.module.css'

export default function Research() {
  return (
    <>
      <div className={styles.research}>
        <h1 className={styles.researchTitle}>
          Research Discoveries
        </h1>
        {researchDetails.map((item) => (
          <ResearchItem key={item} {...item} />
        ))}
      </div>

      <Potentials />
    </>
  );
}

export function ResearchItem({ image, title, detail }) {
  return (
    <div className={styles.researchItem}>
      <div className={styles.researchImage}>
        <Image src={image} alt="Solar Panel" />
      </div>

      <div className={styles.researchDetail}>
        <h1 className={styles.researchTitle}>
          {title}
        </h1>
        <p>{detail}</p>
      </div>
    </div>
  );
}

export function Potentials() {
  return (
    <div className={styles.potentials}>
      <h1 className={styles.potentialTitle}>Potentials Of The Future</h1>

      <div className="mb-24">
        <h2 className="text-3xl mb-2">Unlocking the Future of Energy</h2>
        <p>
          In a world where change is the only constant, the future of energy
          holds boundless potential. From cutting-edge technologies that harness
          the power of nature to innovative solutions that reduce our carbon
          footprint, we are at the brink of a brighter, more sustainable era. A
          future where clean and renewable energy sources are not just an option
          but the very foundation of our power generation.
        </p><br/>
        <p>
          As we look ahead, our commitment to pioneering sustainable energy
          solutions is unwavering. We envision a world where our innovations
          provide clean, reliable, and accessible power to communities
          worldwide. Where energy storage systems are so efficient that outages
          are a distant memory, and where wind turbines dance harmoniously with
          the breeze, powering our homes and industries.
        </p><br/>
        <p>
          Biomimicry inspires us, and we continue to learn from nature&#39;s
          designs, creating technologies that exemplify environmental harmony.
          The sun&#39;s energy, harnessed with remarkable efficiency, brightens our
          path towards a greener future. It&#39;s a world where the environment and
          progress coexist, where each step forward is a leap towards a more
          sustainable tomorrow.
        </p><br/>
        <p>
          The potential of the future is in our hands, and we are committed to
          shaping it responsibly. With every discovery, we move closer to a
          planet powered by clean energy and a future where environmental
          responsibility is not just a choice but a necessity.
        </p><br/>
        <p>
          Join us on this journey as we unlock the vast potential of the future,
          where innovation, sustainability, and the well-being of our planet go
          hand in hand. It&#39;s a world where the possibilities are limitless, and
          the future is bright.
        </p>
      </div>

      <div className="lg:mb-[100px]">
        <h2 className="text-3xl mb-2">Unlocking the Future of Energy</h2>
        <p>
          In a world where change is the only constant, the future of energy
          holds boundless potential. From cutting-edge technologies that harness
          the power of nature to innovative solutions that reduce our carbon
          footprint, we are at the brink of a brighter, more sustainable era. A
          future where clean and renewable energy sources are not just an option
          but the very foundation of our power generation.
        </p><br/>
        <p>
          As we look ahead, our commitment to pioneering sustainable energy
          solutions is unwavering. We envision a world where our innovations
          provide clean, reliable, and accessible power to communities
          worldwide. Where energy storage systems are so efficient that outages
          are a distant memory, and where wind turbines dance harmoniously with
          the breeze, powering our homes and industries.
        </p><br/>
        <p>
          Biomimicry inspires us, and we continue to learn from nature&#39;s
          designs, creating technologies that exemplify environmental harmony.
          The sun&#39;s energy, harnessed with remarkable efficiency, brightens our
          path towards a greener future. It&#39;s a world where the environment and
          progress coexist, where each step forward is a leap towards a more
          sustainable tomorrow.
        </p><br/>
        <p>
          The potential of the future is in our hands, and we are committed to
          shaping it responsibly. With every discovery, we move closer to a
          planet powered by clean energy and a future where environmental
          responsibility is not just a choice but a necessity.
        </p><br/>
        <p>
          Join us on this journey as we unlock the vast potential of the future,
          where innovation, sustainability, and the well-being of our planet go
          hand in hand. It&#39;s a world where the possibilities are limitless, and
          the future is bright.
        </p>
      </div>
    </div>
  );
}

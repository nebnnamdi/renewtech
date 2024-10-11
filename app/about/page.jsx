import styles from "./page.module.css";
import Team from "@/components/team";
import Awards from "@/components/awards";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.title}>
          <h1 className={styles.h1}>Discover Our Story and Commitment</h1>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.story}>
          <div className={styles.h2}>
            Our Story: Pioneering Sustainable Energy
          </div>

          <div className={styles["our-story"]}>
            <p>
              At Renew Tech, our story begins with a vision to power the world
              sustainably. It was a vision fueled by a deep sense of
              responsibility towards our planet and future generations. We
              embarked on this journey with the unwavering belief that
              innovation, dedication, and a commitment to environmental
              responsibility could reshape the energy landscape.
            </p>
            <p>
              In the early days, our founders, a diverse group of passionate
              scientists and engineers, set out on a quest to discover renewable
              energy solutions that would change the way we power our world. The
              journey was marked by countless hours of research,
              experimentation, and exploration.
              <br /> Our first breakthrough came with the discovery of a
              revolutionary energy source—a source that held the potential to
              redefine the energy sector. This was a turning point in our
              journey. We channeled our energies into developing this source
              into a usable product, one that was not just a theoretical
              solution but a practical reality.
            </p>
            <p>
              The path to innovation was not without its challenges, but every
              obstacle became an opportunity for growth. We forged partnerships
              with like-minded institutions, collaborated with experts, and
              continued to push the boundaries of what was possible. Today,
              Renew Tech stands as a beacon of progress in the renewable energy
              industry. Our technology is a testament to the power of human
              innovation and our ability to address the most pressing challenges
              of our time. We are proud to be at the forefront of a greener
              future, and our commitment to sustainability drives us to explore
              new horizons and continue our mission.
            </p>
            <p>
              Our story is one of innovation, resilience, and a dedication to
              environmental responsibility. We invite you to be a part of this
              journey, to discover and shape a more sustainable tomorrow with
              Renew Tech.
            </p>
          </div>
        </div>

        <Team />

        <Awards />

        <Footer />
      </div>
    </>
  );
}

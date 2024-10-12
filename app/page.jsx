import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { globe, panel, reactor, tech } from "./images";
import Footer from "@/components/footer";
import Team from "@/components/team";

export const metadata = {
  title: 'Welcome to Renewtech'
}

export default function Home() {
  return (
    <>
      <div className={styles.hero_section}>
        <Image
          src={panel}
          alt="Solar Panels"
          width="auto"
          height="auto"
          className={styles.hero_image}
        />

        <div className={styles.hero_text}>
          <h1>Powering Tomorrow with Renewable Energy</h1>

          <p>
            Join us in the journey towards a sustainable future. Discover
            cleaner, greener, and more efficient energy solutions that make a
            difference. Together, we can shape a world powered by renewables.
          </p>

          <span className={styles.link}>
            <Link href="/about">Learn More</Link>
          </span>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.overview}>
          <div className={styles.img}>
            <Image
              className="w-full lg:p-10"
              src={globe}
              alt="Globe"
              width="500"
              height="561"
              priority
            />
          </div>

          <div className={styles.overview_text}>
            <section>
              <h1 className={styles.h1}>Company Overview</h1>
              <p>
                Renew Tech is a leading force in renewable energy, pioneering
                innovative solutions for a sustainable future. Our vision is a
                world where clean and green energy powers tomorrow. Join us in
                shaping a brighter, more sustainable planet.
              </p>
            </section>

            <section>
              <h1 className={styles.h1}>Our Mission Statement</h1>
              <p>
                At Renew Tech, our mission is to lead the transition to a
                cleaner and more sustainable world by providing innovative and
                accessible renewable energy solutions. We are committed to
                powering the future while preserving our planet, promoting a
                greener tomorrow for all.
              </p>
            </section>

            <section>
              <h1 className={styles.h1}>Our Vision Statement</h1>
              <p>
                Our vision at Renew Tech is a world where renewable energy is
                the cornerstone of power generation, where sustainability is
                non-negotiable, and where every individual and community can
                thrive in a clean and green environment. We envision a future
                where our innovative solutions lead to a brighter and more
                sustainable planet for generations to come.
              </p>
            </section>
          </div>
        </div>

        <div className={styles.technology}>
          <div className="w-full">
            <h1 className={`pl-0 lg:pl-10 my-[20px] ${styles.h1}`}>
              Our Technology
            </h1>
            <Image
              src={tech}
              alt="Wind Turbine"
              width="auto"
              height="auto"
              priority
              className={styles.technology_img}
            />
          </div>

          <div className={styles.technology_text}>
            <section>
              <p>
                At Renew Tech, we&#39;ve harnessed the limitless power of the sun
                with our advanced solar technology. Our cutting-edge solar
                panels capture the sun&#39;s energy with unprecedented efficiency,
                providing clean and sustainable power to communities worldwide.
                This breakthrough technology not only reduces our carbon
                footprint but also helps tackle the global energy and
                environmental challenges we face today. Join us in this journey
                toward a greener tomorrow powered by innovation and a commitment
                to a sustainable future.
              </p>
            </section>
          </div>
        </div>

        <Team />

        <div className={styles.technology}>
          <div className="w-full">
            <Image
              src={reactor}
              alt="Wind Turbine"
              width="auto"
              height="auto"
              priority
              className={styles.technology_img}
            />
          </div>

          <div className={styles.technology_text}>
            <section>
              <h1 className={styles.h1}>
                Reactor Innovation: Unleashing Clean Energy
              </h1>
              <p>
                Our cutting-edge reactor technology is a game-changer in the
                renewable energy landscape. This innovative device is at the
                heart of our mission to harness the power of nature and convert
                it into clean, sustainable energy. The reactor acts as a
                catalyst, transforming renewable resources into electricity
                efficiently and without harm to the environment. By utilizing
                advanced processes, our reactor produces energy with minimal
                carbon footprint, offering a greener and more responsible
                solution for our growing energy needs. It represents our
                unwavering commitment to a brighter, more sustainable future,
                where clean energy is abundant and accessible to all. Join us on
                this journey as we redefine the way we power our world with our
                revolutionary reactor technology.
              </p>
              <button className={`mt-5 ${styles.button}`}>
                Learn More
              </button>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

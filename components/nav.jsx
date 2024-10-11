"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/app/images";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./nav.module.css";

export default function NavBar() {
  const [hamMenu, setHamMenu] = useState(false);

  function handleNav() {
    setHamMenu(!hamMenu);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_menu}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width="auto"
            height="auto"
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className={styles.s_menu}>
          <ul>
            <Link href="/about">
              <li>About Us</li>
            </Link>
            <Link href="/technology">
              <li>Technology</li>
            </Link>
            <Link href="/merchandise">
              <li>Merchandise</li>
            </Link>
            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>

          <Link href="/get-started" onClick={handleNav}>
            <span>Get Started</span>
          </Link>
        </div>

        <div onClick={handleNav} className={styles.ham_menu}>
          {hamMenu ? (
            <AiOutlineClose size={25} className="fill-white" />
          ) : (
            <AiOutlineMenu size={25} className="fill-white" />
          )}
        </div>
      </div>

      <div className={hamMenu ? styles.display : styles.hide}>
        <div className="text-white" onClick={handleNav}>
          <div className="w-full">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width="auto"
                height="auto"
                className="cursor-pointer"
                priority
              />
            </Link>
          </div>

          <div className="my-4">
            <ul className="mb-6">
              <Link href="/about">
                <li className="py-2">About Us</li>
              </Link>
              <Link href="/technology">
                <li className="py-2">Technology</li>
              </Link>
              <Link href="/merchandise">
                <li className="py-2">Merchandise</li>
              </Link>
              <Link href="/contact">
                <li className="py-2">Contact Us</li>
              </Link>
            </ul>

            <Link href="/get-started">
              <span className={styles.mob_started}>Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

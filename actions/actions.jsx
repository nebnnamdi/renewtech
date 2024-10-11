"use client";
import { useState } from "react";

export function ham() {
  const [hamMenu, setHamMenu] = useState(false);

  function handleNav() {
    setHamMenu(!hamMenu);
  }
}

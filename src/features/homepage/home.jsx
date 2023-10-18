"use client";
import { useState } from "react";
import { HomeLoggedOut } from "./pages/home_logged_out";
import { HomeLoggedIn } from "./pages/home_page_logged_in";

export function Home() {
  const [loggedIn, setLoggedIn] = useState(true);

  return <>{loggedIn ? <HomeLoggedIn /> : <HomeLoggedOut />}</>;
}

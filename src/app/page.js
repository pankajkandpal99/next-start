"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  return (
    <main>
      <h1>Home Page </h1>
      <br /> <br />
      <Link href="/login">Go to login page.</Link>
      <br /> <br />
      <Link href="/about">Go to About page.</Link>
      <br /> <br />
      <button onClick={() => navigate("/login")}>Go to Login page</button>
      <button onClick={() => navigate("/about")}>Go to About page</button>
      <br />
      <button onClick={() => navigate("/about/aboutstudent")}>
        Go to About Student page
      </button>
      <button onClick={() => navigate("/about/aboutcollege")}>
        Go to About College page
      </button>
    </main>
  );
}

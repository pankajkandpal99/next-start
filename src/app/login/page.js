"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function login() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };

  return (
    <div>
      <h2>Login page</h2>
      <Link href="/">Go to Home page.</Link>
      <br />
      <button onClick={() => navigate("/")}>Go to Home page</button>
    </div>
  );
}

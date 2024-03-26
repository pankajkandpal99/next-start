"use client";

import { useRouter } from "next/navigation";

const AboutStudent = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };

  return (
    <div>
      <h3>About Student page.</h3>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </div>
  );
};

export default AboutStudent;

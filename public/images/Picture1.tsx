import Image from "next/image";
import React from "react";

export default function Picture1() {
  return (
    <div>
      <Image
        src={"./pexels-belle-co-99483-342005.jpg"}
        fill
        alt="canyon"
        placeholder="blur"
      />
    </div>
  );
}

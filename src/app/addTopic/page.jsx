"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are requried");
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Topic title"
        className="border border-slate-500 px-8 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="text-white py-3 px-6 w-fit bg-green-600 font-bold"
      >
        Add Topic
      </button>
    </form>
  );
}

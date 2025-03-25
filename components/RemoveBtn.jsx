"use client";

import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure");

    if (confirmed) {
      const res = await fetch(`${apiUrl}/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button className="text-red-500" onClick={removeTopic}>
      DeleteBtn
    </button>
  );
}

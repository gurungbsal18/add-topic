import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopic();

  return (
    <>
      {topics.map((list) => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="text-2xl font-bold">{list.title}</h2>
            <p>{list.description}</p>
          </div>

          <div className="flex gap-2 items-center">
            <RemoveBtn id={list._id} />
            <Link href={`/editTopic/${list._id}`}>EditBtn</Link>
          </div>
        </div>
      ))}
    </>
  );
}

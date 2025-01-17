import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// fetch data form server side
const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store", // get me live data from database
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log("Error loading data", error);
  }
};
const TopicList = async () => {
  const { topics } = await getTopic();
  console.log("This is My Topics", topics);
  return (
    <>
      {topics.map((t, i) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5"
          key={i}
        >
          <div>
            <h2>{t.title}</h2>
            <div className="">{t.description}</div>
          </div>
          <div>
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;

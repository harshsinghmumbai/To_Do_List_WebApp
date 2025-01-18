"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { Button } from "./ui/button";
import { Edit2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Fetch data function
const getTopic = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/topics`, {
      cache: "no-store", // Get live data from database
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.error("Error loading data", error);
    return { topics: [] }; // Return an empty object in case of an error
  }
};

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [filter, setFilter] = useState(""); // Filter state

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopic();
      setTopics(data.topics); // This will update the state with the fetched topics
      setFilteredTopics(data.topics); // Initially, show all topics
    };

    fetchData();
  }, []);

  // Filter function based on status
  const handleFilter = (status) => {
    setFilter(status);
    if (status === "") {
      setFilteredTopics(topics); // Show all topics
    } else {
      setFilteredTopics(topics.filter((topic) => topic.Status === status));
    }
  };

  return (
    <div>
      {/* Buttons for filtering */}
      <div className="flex space-x-4 mb-4  justify-center">
        <Button
          className="bg-gradient-to-r from-indigo-500 via-sky-500 to-green-500"
          size="sm"
          onClick={() => handleFilter("High Priority")}
        >
          High Priority
        </Button>
        <Button
          className="bg-gradient-to-r from-indigo-500 via-sky-500 to-green-500"
          size="sm"
          onClick={() => handleFilter("Completed")}
        >
          Completed
        </Button>
        <Button
          className="bg-gradient-to-r from-indigo-500 via-sky-500 to-green-500"
          size="sm"
          onClick={() => handleFilter("Pending")}
        >
          Pending
        </Button>
      </div>

      {/* Display topics */}
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {filteredTopics.length === 0 ? (
          <div className="text-center text-xl md:text-2xl">No Task Found</div>
        ) : (
          filteredTopics.map((t, i) => (
            <div
              className="border border-yellow-500 bg-gradient-to-r mb-5 from-yellow-500 p-2 rounded-lg relative"
              key={i}
            >
              <div className="border-b border-gray-400 rounded-md flex justify-between pb-1.5">
                <div className="flex justify-center items-center">
                  <Badge
                    variant="destructive"
                    className={`${
                      t.Status === "High Priority"
                        ? "bg-red-500"
                        : t.Status === "Completed"
                        ? "bg-green-600"
                        : t.Status === "Pending"
                        ? "bg-blue-600"
                        : ""
                    }`}
                  >
                    {t.Status}
                  </Badge>
                </div>
                <div className="flex justify-center items-center space-x-3">
                  <Link href={`/editTopic/${t._id}`}>
                    <Edit2 className="w-4 h-4 md:w-5 md:h-5 " />
                  </Link>
                  <RemoveBtn id={t._id} />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold capitalize">{t.title}</h1>
                <p className="p-1.5 text-gray-600 dark:text-gray-100">
                  {t.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopicList;

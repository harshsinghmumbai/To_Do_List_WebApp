"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Add_Topic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      return alert("title and description are required");
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log("Error on send data form client to server", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Topic Title"
        />
        <Input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Topic Description"
        />
        <Button type="submit">Add Topic</Button>
      </form>
    </>
  );
};

export default Add_Topic;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Edit_Topic = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  console.log(newDescription);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data from server");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("Error on Edit Topic file component", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          value={newTitle}
          placeholder="Topic Title"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Input
          value={newDescription}
          placeholder="Topic Description"
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <Button type="submit">Update Topic</Button>
      </form>
    </>
  );
};

export default Edit_Topic;

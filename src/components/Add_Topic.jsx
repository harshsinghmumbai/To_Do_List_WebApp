"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Add_Topic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Status, setStatus] = useState("High Priority");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      return alert("Title and description are required");
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, Status }),
        mode: "no-cors", // Add this line for no-cors mode
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log("Error sending data from client to server", error);
    }
  };

  return (
    <>
      <div className="w-[95%] m-auto my-6">
        <h1 className="text-center my-5 text-xl font-bold font-sans underline decoration-yellow-400 underline-offset-1 lg:text-2xl">
          Add New Task
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 border border-gray-500 rounded-lg p-4"
        >
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
          <RadioGroup
            value={Status}
            onValueChange={(value) => setStatus(value)}
            className="py-1.5 px-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="High Priority" id="option-one" />
              <Label htmlFor="option-one">High Priority</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Completed" id="option-two" />
              <Label htmlFor="option-two">Completed</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Pending" id="option-three" />
              <Label htmlFor="option-three">Pending</Label>
            </div>
          </RadioGroup>
          <Button type="submit" className="bg-black focus:bg-black">
            Add Topic
          </Button>
        </form>
      </div>
    </>
  );
};

export default Add_Topic;

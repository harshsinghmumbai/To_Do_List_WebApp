"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Edit_Topic = ({ id, title, description, Status }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [NewStatus, setNewStatus] = useState(Status);
  console.log(Status);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription, NewStatus }),
          mode: "no-cors", // Add this line for no-cors mode
        }
      );

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
      <div className="w-[95%] m-auto my-6">
        <h1 className="text-center my-5 text-xl font-bold font-sans underline decoration-yellow-400 underline-offset-1 lg:text-2xl">
          Edit Task
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 border border-gray-500 rounded-lg p-4"
        >
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
          <RadioGroup
            value={NewStatus}
            onValueChange={(value) => setNewStatus(value)}
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
            Update Topic
          </Button>
        </form>
      </div>
    </>
  );
};

export default Edit_Topic;

"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to remove");

    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.push("/");
        router.refresh();
      }
    }
  };

  return (
    <>
      <Trash
        className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
        onClick={removeTopic}
      />
    </>
  );
};

export default RemoveBtn;

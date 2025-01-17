"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to remove");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <>
      <Button onClick={removeTopic} variant="destructive" size="sm">
        <HiOutlineTrash size={20} />
      </Button>
    </>
  );
};

export default RemoveBtn;

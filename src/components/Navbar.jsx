import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <div className="w-[50%] bg-red-200 flex justify-between px-10 p-2 rounded-xl m-auto mt-3">
        <Link href={"/"} className="flex justify-center items-center">
          <p className="text-lg font-bold">GT Coding</p>
        </Link>
        <Link href={"/addTopic"}>
          <Button>Add Topic</Button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

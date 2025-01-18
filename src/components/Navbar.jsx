import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <>
      <div className="w-full sm:w-[70%] lg:w-[65%] sm:m-auto sm:mt-1 bg-yellow-100 flex justify-between px-2 md:px-6 p-2 rounded-xl mt-0.5 border border-yellow-600 ">
        <Link href={"/"} className="flex justify-center items-center">
          <p className="text-lg font-bold font-serif dark:text-black">
            Solruf India
          </p>
        </Link>
        <div className="flex justify-center items-center space-x-1.5 md:space-x-3 lg:space-x-4">
          <Link href={"/addTask"}>
            <Button
              size="sm"
              className="bg-yellow-800 focus:bg-yellow-800 active:bg-yellow-800"
            >
              Add Task
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;

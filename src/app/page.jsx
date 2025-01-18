import TopicList from "@/components/TopicList";

export default function Home() {
  return (
    <>
      <h1 className="text-center my-5 text-xl font-bold font-sans underline decoration-yellow-400 underline-offset-1 lg:text-2xl">
        Solruf Company Annual To-Do List
      </h1>
      <div className="w-[95%] m-auto">
        <TopicList />
      </div>
    </>
  );
}

import Edit_Topic from "@/components/Edit_Topic";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store", // get me live data from database
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("error fetching edit data", error);
  }
};

const page = async ({ params }) => {
  const id = params.id;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return (
    <>
      <Edit_Topic id={id} title={title} description={description} />
    </>
  );
};

export default page;

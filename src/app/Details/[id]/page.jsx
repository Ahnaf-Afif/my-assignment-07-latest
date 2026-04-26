import data from "@/data/data.json";
import DetailsUi from "@/components/Details/DetailsUi";

const Page = async ({ params }) => {
  const { id } = await params;

  const friend = data.dashboard.friends.find((item) => String(item.id) === id);

  return <DetailsUi friend={friend} />;
};

export default Page;

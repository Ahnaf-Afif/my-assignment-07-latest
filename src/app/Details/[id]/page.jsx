import data from "@/data/data.json";
import DetailsUi from "@/components/Details/DetailsUi";

const Page = async ({ params }) => {
  const { id } = await params;

  const friend = data.dashboard.friends.find((item) => String(item.id) === id);

  //   if (!friend) {
  //     return <div>Friend not found</div>;
  //   }

  return <DetailsUi friend={friend} />;
};

export default Page;

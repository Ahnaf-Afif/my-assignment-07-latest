import data from "@/data/data.json";
import DetailsUi from "@/components/Details/DetailsUi";
import divider from "daisyui/components/divider";
import { DiscAlbum } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Page = async ({ params }) => {
  const { id } = await params;

  const friend = data.dashboard.friends.find((item) => String(item.id) === id);

  return (
    <div>
      <Navbar />
      <DetailsUi friend={friend} />
      <Footer />
    </div>
  );
};

export default Page;

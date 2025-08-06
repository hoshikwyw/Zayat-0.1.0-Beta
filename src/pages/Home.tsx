import VlogCard from "@/components/common/VlogCard";
import { supabase } from "@/supabase-client";
import { useEffect, useState } from "react";

const Home = () => {
  const [vlogs, setVlogs] = useState<any[]>([]);
  const [media, setMedia] = useState<string[]>([]);

  const fetchTasks = async () => {
    const { error, data } = await supabase
      .from("vlogs")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching vlogs:", error);
      return;
    }

    setVlogs(data || []);
  };

  const fetchImages = async () => {
    const { data, error } = await supabase.storage.from("zayat").list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "created_at", order: "desc" },
    });

    if (error) {
      console.error("Error fetching images:", error);
      return;
    }

    const urls = await Promise.all(
      data.map(async (item) => {
        const { data: publicUrlData } = supabase.storage
          .from("zayat")
          .getPublicUrl(item.name);
        return publicUrlData.publicUrl;
      })
    );

    setMedia(urls);
  };

  useEffect(() => {
    fetchTasks();
    fetchImages();
  }, []);

  console.log(vlogs);
  console.log("media",media);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-center gap-4 justify-center w-full min-h-screen">
        {/* <div className="w-44 h-44 rounded-md">
          <img
            src="/zayat.png"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <p className="text-2xl font-bold">Welcome to Zayat App</p> */}


        <div className="grid grid-cols-2 gap-4 mt-8">
          {vlogs.map((vlog) => (
            <div key={vlog.id} className="w-full h-full">
              <VlogCard vlog={vlog}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

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
  console.log("media", media);

  return (
    <div className="flex flex-col gap-4 justify-center w-full">
      <div className="grid grid-cols-2 gap-4">
        {vlogs.map((vlog) => (
          <div key={vlog.id} className="w-full h-full">
            <VlogCard vlog={vlog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

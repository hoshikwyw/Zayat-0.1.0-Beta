import { supabase } from "@/supabase-client";
import { useEffect, useState } from "react";

const Home = () => {
  const [vlogs, setVlogs] = useState<any[]>([]);
  const [media, setMedia] = useState([])

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

  async function uploadImage(e) {
    let file = e.target.files[0]

    const  { data, error } = await supabase.storage.from('zayat').upload(uuidv4)
  }

   useEffect(() => {
    fetchTasks();
  }, []);

  console.log(vlogs);

  return (
    <div className=" w-full min-h-screen">
      <div className=" flex flex-col items-center gap-4 justify-center w-full min-h-screen">
        <div className=" w-44 h-44 rounded-md">
          <img
            src="/zayat.png"
            alt=""
            className=" w-full h-full object-cover rounded-md"
          />
        </div>
        <p className=" text-2xl font-bold">Welcome to Zayat App</p>
      </div>
    </div>
  );
};

export default Home;

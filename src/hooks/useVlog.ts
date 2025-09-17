import { supabase } from "@/supabase-client";
import { useEffect, useState } from "react";

export const useVlogsTotal = (page = 1, itemsPerPage = 1) => {
  const [vlogs, setVlogs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVlogs = async () => {
      try {
        setLoading(true);

        const from = (page - 1) * itemsPerPage;
        const to = from + itemsPerPage - 1;

        const { data, error, count } = await supabase
          .from("vlogs")
          .select("*", { count: "exact" })
          .order("id", { ascending: true })
          .limit(itemsPerPage)
          .range(from, to);

        if (error) throw error;
        setVlogs(data || []);
        setTotalCount(count || 0);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching vlogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVlogs();
  }, [page, itemsPerPage]);

  return { vlogs, totalCount, loading, error };
};

export const useVlog = (id: number) => {
  const [vlog, setVlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVlog = async () => {
      try {
        setLoading(true);

        if (!id) {
          throw new Error("No vlog ID provided");
        }

        const { data, error } = await supabase
          .from("vlogs")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setVlog(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching vlog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVlog();
    }
  }, [id]);

  return { vlog, loading, error };
};

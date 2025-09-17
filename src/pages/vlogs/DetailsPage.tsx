import VlogDetail from "@/components/pages/vlog/VlogDetail";
import { useVlog } from "@/hooks/useVlog";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const { vlog, loading, error } = useVlog(id as unknown as number);

  return (
    <div>
      <VlogDetail vlog={vlog} loading={loading} error={error} />
    </div>
  );
};

export default DetailsPage;

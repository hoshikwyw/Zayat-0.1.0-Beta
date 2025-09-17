import { VlogList } from "@/components/pages/home";
import { useVlogsTotal } from "@/hooks/useVlog";
import { useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { vlogs, totalCount, loading, error } = useVlogsTotal(
    currentPage,
    itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalCount / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex justify-center w-full px-4">
      <VlogList
        vlogs={vlogs}
        totalCount={totalCount}
        loading={loading}
        error={error}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;

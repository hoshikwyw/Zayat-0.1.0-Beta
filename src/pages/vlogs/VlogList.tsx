/* eslint-disable @typescript-eslint/no-explicit-any */
import VlogCard from "@/components/common/VlogCard";
import PaginationControls from "../../components/pages/home/PaginationControls";

interface PropType {
  vlogs: any[];
  totalCount: number;
  loading: boolean;
  error: any;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const VlogList = ({
  vlogs,
  totalCount,
  loading,
  error,
  currentPage,
  itemsPerPage,
  onPageChange,
}: PropType) => {
  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-destructive/10 text-destructive p-4 rounded-md">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {vlogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No vlogs found.</p>
        </div>
      ) : (
        <>
          <PaginationControls
            currentPage={currentPage}
            totalCount={totalCount}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl mt-5">
            {vlogs.map((vlog) => (
              <VlogCard key={vlog?.id} vlog={vlog} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VlogList;

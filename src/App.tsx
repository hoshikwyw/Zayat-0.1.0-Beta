import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;

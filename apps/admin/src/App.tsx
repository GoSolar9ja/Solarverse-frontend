import { BrowserRouter as Router, } from "react-router-dom";
import { Suspense } from "react";
import GlobalProvider from "./lib/providers/global-provider";

import AppRoutes from "./lib/routes";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <AppRoutes />
        </Suspense>
      </Router>
    </GlobalProvider>
  );
}

export default App;

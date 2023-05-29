import React, { Suspense } from "react";

import Header from "./components/Header";
// import Chats from "./components/Chats";
import Footer from "./components/Footer";
import { ErrorBoundary } from "react-error-boundary";
import fallbackRender from "./components/ErrorBoundary";
const Chats = React.lazy(() => import("./components/Chats"));

const App = () => {
  return (
    <div className="App">
      <div className="chat-container">
        <Header />
        <ErrorBoundary FallbackComponent={fallbackRender} onReset={() => {}}>
          <Suspense fallback={<div>Loading...</div>}>
            <Chats />
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </div>
  );
};

export default App;

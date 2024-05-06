import Router from "@/router/Router";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <div className="col items-center w-screen h-screen overflow-auto bg-white">
        <div className="col w-full h-full max-w-[1280px]">
          <AnimatePresence mode="wait">
            <Router />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default App;

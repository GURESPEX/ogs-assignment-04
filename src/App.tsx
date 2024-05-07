import Router from "@/router/Router";

const App = () => {
  return (
    <>
      <div className="col items-center w-screen h-screen overflow-auto bg-white">
        <div className="col w-full h-full max-w-[1280px]">
          <Router />
        </div>
      </div>
    </>
  );
};

export default App;

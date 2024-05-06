import { MdCatchingPokemon } from "react-icons/md";

const PokemonCardSkeleton = () => {
  return (
    <div className="col">
      <div className="relative col p-4 gap-4 aspect-square object-contain">
        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 row gap-2 rounded-lg z-20 px-2 bg-slate-300 border-2 border-slate-300 uppercase font-bold text-slate-500 pt-[1px]">
          <p className="h-6 w-16"></p>
        </div>
        <div className="w-full h-full object-contain z-10 p-4"></div>
        <div className="absolute left-0 top-0 w-full h-full col justify-end">
          <div className="relative w-full h-2/3 bg-slate-200 overflow-hidden border-2 border-slate-300 rounded-lg">
            <MdCatchingPokemon className="absolute w-full h-full top-0 left-0 row justify-center items-center p-8 text-slate-300 animate-pulse" />
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full col justify-end">
          <div className="relative w-full h-2/3 overflow-hidden border-2 border-transparent rounded-lg">
            <div className="absolute w-full h-full top-0 left-0 row justify-end items-start">
              <div className="relative -top col gap-1 p-1 bg-slate-300 rounded-bl-lg border-b-2 border-l-2 border-transparent">
                {Array(Math.round(Math.random()) + 1)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-6 aspect-square p-1 rounded-md bg-slate-400 border-2 border-transparent border-opacity-10"
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col border-2 border-slate-100 -mt-4 pt-8 rounded-b-lg">
        <div className="row p-4 gap-4 justify-evenly overflow-hidden">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div key={index} className="col items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-200"></div>
                <div className="w-4 h-4 rounded bg-slate-200"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCardSkeleton;

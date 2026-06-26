import { Heart, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../hooks/axios";
function Top() {
  useEffect(() => {
    document.title = "OTAKU-HUB | Top";
  });

  const [data, setData] = useState([]);
  async function getAnime() {
    try {
      const res = await api.get("/animes");
      const data = res.data;
      const sortedData = [...data].sort((a, b) => b.rating - a.rating);
      setData(sortedData);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div className="w-[100%]">
      <table className="w-full border-separate border-spacing-2 text-white">
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className=" w-[100px]" key={item.id}>
                <td
                  style={{
                    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 10)), url(${item.image})`,
                  }}
                  className="h-full w-full relative w-[100%]  h-[480px] flex   rounded-xl bg-cover bg-center "
                >
                  <div className="bg-black/10 absolute top-0 left-0 right-0 bottom-0 z- bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl "></div>
                  <div className=" relative w-[160px]">
                    <img
                      src={item.image}
                      alt="Anime-topPhoto"
                      className="w-[140px] h-[100%] rounded-xl h-full"
                    />

                    <Heart
                      size={30}
                      className=" absolute z-10 right-[30px]  bottom-[10px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[5px]"
                    />
                  </div>
                  <div className="pt-[20px] flex flex-col gap-[10px] relative z-10">
                    <div className="title">
                      <p className="text-[27px]">{item.title}</p>
                    </div>
                    <div className="ganre">
                      <div className="text-[19px] flex gap-[10px] ">
                        {item.genre &&
                          item.genre.map((j, i) => {
                            return (
                              <span key={i}>
                                <p className="p-[6px] bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl">
                                  {j}
                                </p>
                              </span>
                            );
                          })}
                      </div>
                    </div>
                    <div className="flex  gap-[10px]">
                      <TrendingUp />
                      <p className="text-[16px] ">10 / {item.rating}</p>
                    </div>
                    <div className="">
                      <a className="bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[7px]">
                        Watch Anime
                      </a>
                    </div>
                  </div>
                  <div className=" flex items-center ">
                    <p className="text-[20px]  absolute right-0 bg-white/6 backdrop-blur-lg border border-white/20  w-[80px] flex justify-center h-[55px] items-center top-0 rounded-bl-3xl ">
                      {index + 1}
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Top;

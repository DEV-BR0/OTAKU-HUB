import { X, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../hooks/axios";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loaing";
import Genre from "../../components/genre/Ganre";

function Search() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
  async function getApi() {
    try {
      const res = await api.get("/genres");
      const animes = await api.get("/animes");
      const anime = await animes.data;
      const data = await res.data;
      setData(anime);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    document.title = "OTAKU-HUB | Search";
    getApi();
  }, []);

  const [clear, setClear] = useState("");

  return (
    <div className="w-full h-full flex relative items-start flex-col">
      <div className="flex fixed max-w-7xl z-20 w-full justify-center">
        <div className="flex relative z-10 w-full justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="text-white  bg-white/6 backdrop-blur-lg border border-white/20 outline-none w-full p-[18px] rounded-xl "
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
              setClear(e.target.value);
            }}
            value={clear}
          />
          <div className="toza absolute right-[10px] duration-300 transition">
            {clear
              ? ""
              : ((
                  <ChevronLeft
                    onClick={() => setMenu((pre) => !pre)}
                    color="white"
                    className="cursor-pointer"
                  />
                ),
                menu ? (
                  <ChevronRight
                    onClick={() => setMenu((pre) => !pre)}
                    color="white"
                    className="cursor-pointer"
                  />
                ) : (
                  <ChevronLeft
                    onClick={() => setMenu((pre) => !pre)}
                    color="white"
                    className="cursor-pointer"
                  />
                ))}
          </div>
          <div className="ganre absolute right-[10px]">
            {clear ? (
              <X
                onClick={() => setClear("")}
                color="white"
                className="cursor-pointer"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {menu ? (
        <div className="bg-white/6 backdrop-blur-lg border border-white/20 w-[300px] h-[500px] right-0 absolute z-10 rounded-xl ">
          <Genre />
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-wrap gap-[20px] mt-[90px] justify-start">
        {data.map((item) => {
          if (loading) {
            return <Loading />;
          }
          if (item.title.toLowerCase().includes(search)) {
            return (
              <div
                className="flex   bg-white/6 backdrop-blur-lg border border-white/20 flex-col w-[216px] xl:w-[240px] text-white rounded-3xl overflow-hidden"
                key={item.id}
              >
                <div className="">
                  <img
                    src={item.image}
                    alt="AnimePhoto"
                    className="w-[100%] h-[300px]"
                  />
                </div>
                <div className="flex flex-col  p-[20px]">
                  <p className="text-[24px] font-bold truncate w-[200px]">
                    {item.title}
                  </p>
                  <p className="text-[18px] font-medium flex gap-[10px]">
                    <TrendingUp />
                    {item.rating}
                  </p>
                  <p className={`text-[14px] w-[180px] truncate font-medium overflow-auto `}>
                    {item.caption}
                  </p>
                </div>
                <NavLink
                  to={`/watch/anime/id/${item.id}`}
                  className="w-full flex justify-center p-[20px] bg-white/6 backdrop-blur-lg border border-white/20"
                >
                  Watch Anime
                </NavLink>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Search;

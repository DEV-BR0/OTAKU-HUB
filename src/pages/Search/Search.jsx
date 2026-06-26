import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../hooks/axios";

function Search() {
  const [ganre, setGanre] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getApi() {
    try {
      const res = await api.get("/genres");
      const animes = await api.get("/animes");
      const anime = await animes.data;
      const data = await res.data;
      setData(anime);
      setGanre(data);

      console.log(ganre);
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
  const [val, setVal] = useState("");
  return (
    <div className="w-full h-full">
      <div className="flex relative w-full justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="text-white  bg-white/6 backdrop-blur-lg border border-white/20 outline-none w-full p-[18px] rounded-xl "
          onChange={(e) => setClear(e.target.value)}
          value={clear}
        />
        <div className="toza absolute right-[10px]">
          {clear ? <X onClick={() => setClear("")} color="white" /> : <></>}
        </div>
      </div>

      <div className="flex w-[26%] justify-start gap-[5px] flex-wrap mt-[29px]">
        {ganre.map((i) => {
          return (
            <div className="">
              <p className="text-white  p-[7px]  bg-white/6 backdrop-blur-lg border border-white/20 outline-none w-full  rounded-xl">
                {i.name}
              </p>
            </div>
          );
        })}
      </div>
      <marquee behavior="" direction=""></marquee>
    </div>
  );
}

export default Search;

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../hooks/axios";
import { useEffect, useState } from "react";
import { CircleChevronLeft, CalendarRange, Play } from "lucide-react";
function Watch() {
  const nav = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  async function getApi() {
    try {
      const { data } = await api.get(`animes/${id}`);
      setData(data);
    } catch (error) {}
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <CircleChevronLeft
          color="white"
          onClick={() => {
            nav(-1);
          }}
          size={40}
          className="p-[5px] bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl rotate-[-90deg] transition duration-300 hover:rotate-[-360deg] cursor-pointer"
        />
      </div>
      <div className="flex gap-[30px] h-[600px]">
        <div className="w-full">
          <img
            src={data.image}
            alt="AnimePhoto"
            className="w-full rounded-4xl object-cover"
          />
        </div>
        <div className="text flex flex-col gap-[30px]">
          <p className="text-[40px] text-white bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[8px]">
            {data.title}
          </p>
          <p className="p-[20px] text-white text-[20px] bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl">
            {data.caption}
          </p>
          <div className="flex gap-[20px]">
            {" "}
            {data.genre &&
              data.genre.map((j, i) => {
                return (
                  <span key={i}>
                    <p className="p-[6px] text-white bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl">
                      {j}
                    </p>
                  </span>
                );
              })}
            <div className="regt flex p-[10px] items-center gap-[5px] text-white text-[20px] bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl">
              <CalendarRange color="white" />
              {data.year}
            </div>
            <div className="regt flex p-[10px] items-center gap-[5px] text-white text-[20px] bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl">
              <Play color="white" />
              {data.episodes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;

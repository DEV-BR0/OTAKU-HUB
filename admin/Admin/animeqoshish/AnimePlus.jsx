import { useEffect, useState } from "react";
import { api } from "../../../src/hooks/axios";
import { SquarePen, Trash2, CirclePlus, ImageUp } from "lucide-react";
import { useParams } from "react-router-dom";
function AnimePlus() {
  const [modal, setModal] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getApi() {
      try {
        const { data } = await api.get("/animes");
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getApi();
    document.title = "OTAKU-HUB | Add anime";
  }, []);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="w-full flex justify-between">
        <button
          className="text-[20px] text-white   bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[10px]"
          onClick={() => setModal(true)}
        >
          Add
        </button>
      </div>
      <div className="w-[100%] flex flex-wrap gap-[20px]">
        {data.map((item) => {
          return (
            <div
              className="flex w-[200px] flex-col  bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden gap-[10px]"
              key={item.id}
            >
              <img
                src={item.image}
                alt="AnimePhoto"
                className="w-full h-[300px]"
              />
              <div className="title p-[10px]">
                <p className="truncate text-white text-[25px]">{item.title}</p>
                <p className="truncate text-white text-[16px]">
                  {item.caption}
                </p>
              </div>
              <div className="flex text-white p-[10px] gap-[10px] justify-center ">
                <SquarePen
                  onClick={() => {
                    hendlEdit(item.id);
                    setModal("edit");
                  }}
                  className="text-amber-300 hover:text-amber-500 cursor-pointer"
                />
                <Trash2
                  onClick={() => setModal("delet")}
                  className="text-red-500 hover:text-red-600 cursor-pointer "
                />
                <CirclePlus
                  onClick={() => setModal("ep")}
                  className="text-blue-500 hover:text-blue-600 cursor-pointer "
                />
                <ImageUp
                  onClick={() => setModal("cadr")}
                  className="text-green-500 hover:text-green-600 cursor-pointer "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimePlus;

import { api } from "../../hooks/axios";
import { useEffect, useState } from "react";

const Ganre = () => {
  const [geners, setGanre] = useState([]);
  async function getapi() {
    try {
      const res = await api.get("/genres");
      const data = await res.data;
      setGanre(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getapi();
  }, []);

  const [id, setId] = useState("");

  console.log(id);

  return (
    <div className="fixed bottom-0 ">
      <div className="flex w-[300px] justify-start gap-[5px] flex-wrap mt-[29px]">
        {geners.map((i) => {
          return (
            <div className="" key={i.id}>
              <p
                onClick={() => setId(i.id)}
                className="text-white  p-[7px]  bg-white/6 backdrop-blur-lg border border-white/20 outline-none w-full  rounded-xl cursor-pointer"
              >
                {i.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ganre;

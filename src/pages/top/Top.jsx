import { Heart } from "lucide-react";
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
      const data = await res.data;
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getAnime();
  }, []);

  const [liked, setLiked] = useState(false);

  return (
    <div className="w-[100%]">
      <table className="w-full border-separate border-spacing-2 text-white">
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className=" w-[100px]" key={item.id}>
                <td className="h-full w-full relative w-[100%]  h-[480px]  rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl ">
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

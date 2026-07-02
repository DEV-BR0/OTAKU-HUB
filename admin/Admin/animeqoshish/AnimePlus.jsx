import { CirclePlus, ImageUp, SquarePen, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "../../../src/hooks/axios";
function AnimePlus() {
  const [modal, setModal] = useState("");
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
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

  useEffect(() => {
    async function genres() {
      try {
        const { data } = await api.get("/genres");
        setGenres(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    genres();
  });

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [genre1, setGenre1] = useState("");
  const [genre, setGenre] = useState("");
  const [reting, setReting] = useState(0);
  const [episode, setEpisode] = useState(0);
  const [year, setYear] = useState(0);

  async function del(id) {
    try {
      api.delete(`/animes/${id}`);
      setData((prevAnimes) => prevAnimes.filter((anime) => anime.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  }
  async function Submit(e) {
    e.preventDefault();

    if (
      !img &&
      !title &&
      !caption &&
      !genre &&
      !genre1 &&
      !reting &&
      !reting &&
      !episode &&
      !year
    ) {
      return toast.error("iltmos Barcha Maydonlarni toldring ");
    }

    setModal("");

    const newAnime = {
      id: Date.now(),
      title: title,
      caption: caption,
      image: img,
      genre: [genre, genre1],
      rating: reting,
      episodes: episode,
      year: year,
      time: new Date().toISOString(),
    };

    try {
      await api.post("/animes", newAnime);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="w-full flex justify-between">
        <button
          className="text-[20px] text-white   bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-[10px]"
          onClick={() => setModal("add")}
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
                  onClick={() => del(item.id)}
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
      {modal == "add" ? (
        <div className=" fixed z-20 top-0 left-0 w-screen h-screen  bg-white/6 backdrop-blur-lg border border-white/20  flex justify-center items-center">
          <div className="flex flex-col gap-[20px]  bg-white/6 backdrop-blur-lg border border-white/20 p-[20px] text-white rounded-xl">
            <div className="flex w-full justify-between">
              <p>OTAKU-HUB | Anime Add</p>
              <button
                className=" bg-white/6 backdrop-blur-lg border border-white/20 rounded-[50%] hover:rotate-[360deg] transition duration-500 p-[10px]"
                onClick={() => setModal("")}
              >
                <X />
              </button>
            </div>
            <div className="flex flex-col ">
              <form onSubmit={Submit} className="flex flex-col gap-[20px]">
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Anime Title"
                  className="  bg-white/6 backdrop-blur-lg border border-white/20 outline-none p-[10px] rounded-xl"
                />
                <div className="flex gap-[10px]">
                  <div className="flex flex-col gap-[20px]">
                    <input
                      type="url"
                      onChange={(e) => setImg(e.target.value)}
                      placeholder="Photo URL"
                      className="  bg-white/6 backdrop-blur-lg border border-white/20 outline-none p-[10px] rounded-xl"
                    />
                    <input
                      type="text"
                      onChange={(e) => setReting(e.target.value)}
                      placeholder="Anime Reting"
                      className="  bg-white/6 backdrop-blur-lg border border-white/20 outline-none p-[10px] rounded-xl"
                    />
                    <select
                      className="outline-none bg-white/6 backdrop-blur-lg border border-white/2 p-[10px] rounded-xl"
                      onChange={(e) => setGenre(e.target.value)}
                    >
                      {genres.map((i) => {
                        return (
                          <option
                            key={i.id}
                            className="text-white bg-black rounded-xl outline-none"
                          >
                            {i.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <input
                      type="number"
                      onChange={(e) => setEpisode(e.target.value)}
                      placeholder="Episode Number"
                      className="  bg-white/6 backdrop-blur-lg border border-white/20 outline-none p-[10px] rounded-xl"
                    />
                    <input
                      type="number"
                      onChange={(e) => setYear(e.target.value)}
                      placeholder="Anime Year"
                      className="  bg-white/6 backdrop-blur-lg border border-white/20 outline-none p-[10px] rounded-xl"
                    />
                    <select
                      className="outline-none bg-white/6 backdrop-blur-lg border border-white/2 p-[10px] rounded-xl"
                      onChange={(e) => setGenre1(e.target.value)}
                    >
                      {genres.map((i) => {
                        return (
                          <option
                            key={i.id}
                            className="text-white bg-black rounded-xl outline-none"
                          >
                            {i.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <textarea
                  type="url"
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Anime Caption"
                  className="min-w-[100%] max-h-[150px]  bg-white/6 backdrop-blur-lg border border-white/20 outline-none p-[10px] rounded-xl"
                />
                <button className="bg-white/6 backdrop-blur-lg border border-white/20 p-[20px] rounded-xl">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AnimePlus;

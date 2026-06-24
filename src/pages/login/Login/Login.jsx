import {
  Eye,
  EyeClosed,
  LockKeyhole,
  LogIn,
  Mail,
  User,
  UserLock,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/button/Button";
import { api } from "../../../hooks/axios";
import img3 from "../img/fve.jpg";
import img4 from "../img/images.jpg";
import img1 from "../img/one.jpg";
import img2 from "../img/two.jpg";
import video from "../video/vq.mp4";

function Login() {
  // bular axios  blan ishlash uchun
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function Submit(e) {
    e.preventDefault();
    if (!userName || !email || !password) {
      toast.error("Iltimos barcha maydonlarni to'ldiring");
      return;
    }
    const newUser = {
      id: Date.now(),
      name: userName,
      password: password,
      email: email,
    };

    try {
      await api.post("/users", newUser);
      setInput(true);
    } catch (error) {
      console.log(error.message);
    }
    toast.success("Siz qabul qlingingiz");
  }

  // user get
  async function SubmitGet(e) {
    e.preventDefault();

    try {
      if (!password || !userName) {
        return toast.error("Iltimos barcha maydonlarni to'ldiring");
      }

      const res = await api.get("/users");
      const data = res.data;

      const user = data.find(
        (u) => u.name === userName && u.password === password,
      );

      if (user) {
        console.log("Hush kelibsiz");
        toast.success("Welcome!");
      } else {
        toast.error("Login yoki password noto‘g‘ri");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // type pastdagla
  const [type, setType] = useState("password");
  const [input, setInput] = useState();

  input
    ? useEffect(() => {
        document.title = "OTAKU-HUB | Sing Up";
      })
    : useEffect(() => {
        document.title = "OTAKU-HUB | Login";
      });

  return (
    <div className="h-screen flex justify-between  overflow-hidden">
      <div className="w-[40%] h-full bg-[#FF8844] flex justify-center items-center relative">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          speed={300}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="w-full h-[100%]"
        >
          <SwiperSlide className="relative overflow-hidden">
            <img src={img1} alt="photo" className="w-full bg-center h-[100%]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="photo" className="w-full bg-center h-[100%]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="photo" className="w-full bg-center h-[100%]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="photo" className="w-full bg-center h-[100%]" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" w-full flex overflow-hidden justify-center items-center flex-col gap-[30px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center "
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0  blur-[10px] bg-black/60 "></div>

        {input ? (
          <div className="w-[70%] justify-center flex flex-col items-center bg-amber-700 z-10 p-[50px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-6  ">
            <div className="flex flex-col relative z-10 text-white">
              <div className="flex justify-center">
                <UserLock
                  className=" bg-[#FF8844] text-white rounded-[50%] p-[5px]"
                  size={70}
                />
              </div>
              <h1 className="text-[30px] font-bold">
                Please enter your profile.
              </h1>
            </div>
            <form
              onSubmit={Submit}
              className="flex flex-col w-[100%] items-center gap-[30px] relative z-10"
            >
              <Input
                Icon={<User size={20} color="white" />}
                Label={"Enter User Name"}
                onchange={(e) => setUserName(e.target.value)}
              />
              <Input
                Icon={<Mail size={20} color="white" />}
                Label={"Enter Email"}
                onchange={(e) => setEmail(e.target.value)}
              />
              <Input
                Icon={<LockKeyhole size={20} color="white" />}
                Label={"Enter Password"}
              />
              <Input
                Icon={<LockKeyhole size={20} color="white" />}
                Label={"Enter Password"}
                onchange={(e) => setPassword(e.target.value)}
                type={type ? "password" : "text"}
              />

              <div
                className="cursor-pointer text-white absolute right-[50px] bottom-[110px]"
                onClick={(prev) => setType((prev) => !prev)}
              >
                {type ? <EyeClosed /> : <Eye />}
              </div>
              <Button text={"Submit"} icon={<LogIn />} />
            </form>

            <div className="flex relative z-10 text-white mt-7">
              <p>
                Already have an account?{" "}
                <button
                  className="font-bold hover:border-b-1 pb-[3px] text-[#FF8844]"
                  onClick={() => setInput(false)}
                >
                  Log in here.
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="w-[70%] justify-center flex flex-col items-center bg-amber-700 z-10 p-[50px] rounded-4xl bg-white/6 backdrop-blur-lg border border-white/20 rounded-xl p-6  ">
            <div className="flex flex-col relative z-10 text-white">
              <div className="flex justify-center">
                <UserLock
                  className=" bg-[#FF8844] text-white rounded-[50%] p-[5px]"
                  size={70}
                />
              </div>
              <h1 className="text-[30px] font-bold">
                Please enter your profile.
              </h1>
            </div>
            <form
              onSubmit={SubmitGet}
              className="flex flex-col w-[100%] items-center gap-[30px] relative z-10"
            >
              <Input
                Icon={<User size={20} color="white" />}
                Label={"User Name"}
                onchange={(e) => setUserName(e.target.value)}
              />
              <Input
                Icon={<LockKeyhole size={20} color="white" />}
                Label={"Password"}
                onchange={(e) => setPassword(e.target.value)}
                type={type ? "password" : "text"}
              />
              <div
                className="cursor-pointer text-white absolute right-[50px] bottom-[110px]"
                onClick={(prev) => setType((prev) => !prev)}
              >
                {type ? <EyeClosed /> : <Eye />}
              </div>
              <Button text={"Submit"} icon={<LogIn />} />
            </form>

            <div className="flex relative z-10 text-white mt-7">
              <p>
                Don't have an account? Click here to{" "}
                <button
                  className="font-bold hover:border-b-1 pb-[3px] text-[#FF8844]"
                  onClick={() => setInput(true)}
                >
                  register.
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;

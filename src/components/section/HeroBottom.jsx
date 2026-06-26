import videos from "../../pages/login/video/vq.mp4";
function HeroBottom() {
  return (
    <div>
      <div className="w-full h-[120px] object-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover h-[180px] w-screen rounded-4xl"
        >
          <source src={videos} />
        </video>
      </div>
    </div>
  );
}

export default HeroBottom;

function Button({ icon, text }) {
  return (
    <div className="w-[100%] flex justify-center">
      <button className="flex gap-[10px] w-[50%] bg-amber-400 justify-center items-center p-[20px] rounded-[20px] text-white border-none outline-none">
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;

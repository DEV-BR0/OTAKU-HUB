function Input({ type, Icon, text, Label, onchange}) {

  return (
    <div className="flex flex-col gap-[6px] w-[80%] text-white">
      <label className="flex gap-[6px]">
        {Icon}
        {Label}
      </label>
      <input
        type={type}
        className="border-b-1  p-[5px] outline-none "
        placeholder={text}
        onChange={onchange}
      />
    </div>
  );
}

export default Input;

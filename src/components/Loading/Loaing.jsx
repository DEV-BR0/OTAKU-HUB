import { TailSpin } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <TailSpin height={60} width={60} color="#ef4444" ariaLabel="loading" />
    </div>
  );
}

export default Loading;

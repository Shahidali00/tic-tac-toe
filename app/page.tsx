import Image from "next/image";
import TicTacToe from "./components/TicTacToe";

export default function Home() {
  return (
    <div className="bg-black">
      <TicTacToe/>
    </div>
  );
}

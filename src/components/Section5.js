import { useState } from "react";
import Sound1 from "../assets/sound/lydniveauet-.mp3";
import Sound2 from "../assets/sound/lydniveauet-_2mp3.mp3";

export default function Section5() {
  const [playing, setPlaying] = useState(false);

  const audio1 = new Audio(Sound1);
  const audio2 = new Audio(Sound2);

  const Play1 = () => {
    if (audio1.paused) {
      audio1.play();
    } else {
      audio1.pause();
    }
  };

  const Play2 = () => {
    if (audio2.paused) {
      audio2.play();
    } else {
      audio2.pause();
    }
  };

  return (
    <div className="section s5">
      <div className="sounds">
        <button onClick={Play1} className="soundbefore">
          Lyd i klassen før
        </button>
        <button onClick={Play2} className="soundafter">
          Lyd i klassen efter
        </button>
      </div>


    </div>
  );
}

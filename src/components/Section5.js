import Sound1 from "../assets/sound/lydniveauet-.mp3";
import Sound2 from "../assets/sound/lydniveauet-_2mp3.mp3";

export default function Section5() {
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
        <div className="roombefore">
          <button onClick={Play1} className="soundbefore">
            <p> Hør klassen før de fik nye møbler</p>
          </button>
        </div>
        <div className="roomafter">
          <button onClick={Play2} className="soundafter">
          <p> Hør klassen efter de fik nye møbler</p>
          </button>
        </div>
      </div>
    </div>
  );
}

import Sound1 from "../assets/sound/lydniveauet-.mp3";
import Sound2 from "../assets/sound/lydniveauet-_2mp3.mp3";
export default function Section5() {
  const audio1 = new Audio(Sound1);
  const audio2 = new Audio(Sound2);

  const Play1 = () => {
    audio1.play();
  };
  const Play2 = () => {
    audio2.play();
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

      <h2>Kontakt</h2>

      <address>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim praesentium ratione
          suscipit sunt quo libero est excepturi cupiditate. Reprehenderit odit ipsa ab eius
          consequatur molestiae hic dicta architecto ut.
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam aliquid libero
        ullam necessitatibus. Deserunt sint quidem neque eius quasi quibusdam earum assumenda
        suscipit accusantium placeat! Reiciendis temporibus voluptate blanditiis.
      </address>
    </div>
  );
}

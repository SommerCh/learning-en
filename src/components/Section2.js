// By Sommer

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Kl1950 from "../assets/imgs/kl1950-min.jpg";
import Kl1970 from "../assets/imgs/kl1970-min.jpg";
import Kl2020 from "../assets/imgs/kl2020-min.jpg";

export default function Section2() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box");

    // autoAlpha er ligesom opacity nå nær at når den rammer 0 bliver den visabillity sat til hidden
    boxes.forEach((box, i) => {
      const move = gsap.fromTo(
        box,
        { autoAlpha: 0, y: 0 },
        { duration: 1, autoAlpha: 1, y: -150, delay: 1 }
      );
      ScrollTrigger.create({
        trigger: box,
        animation: move,
        toggleActions: "play none none none",
      });
    });

    const headlines = gsap.utils.toArray(".keywords");
    headlines.forEach((headline, i) => {
      const move = gsap.fromTo(
        headline,
        { autoAlpha: 0, y: 0 },
        { duration: 1, autoAlpha: 1, y: -100 }
      );
      ScrollTrigger.create({
        trigger: headline,
        animation: move,
        toggleActions: "play none none none",
      });
    });

    const annos = gsap.utils.toArray(".anno");

    annos.forEach((anno, i) => {
      const move = gsap.fromTo(
        anno,
        { autoAlpha: 0, y: 0, scale: 0.2 },
        { duration: 1, autoAlpha: 1, y: -100, scale: 1 }
      );
      ScrollTrigger.create({
        trigger: anno,
        animation: move,
        toggleActions: "play none none none",
      });
    });
  }, []);

  return (
    <div className="section s2">
      <div className="info">
        <h3 className="keywords">disciplin & udenadslære</h3>
        <h2 className="anno">1950</h2>

        <div className="box">
          <div className="flex-row">
            <div className="left">
              <p>Det at gå i folkeskolen ændrede sig markant i løbet af 1950’erne.</p>
              <p>
                Landsbyskoler, med ét klasseværelse og én skolelærer, blev lukket og der kom istedet
                centralskoler med faglokaler, så eleverne kunne få sløjd, fysik og husgerning.
              </p>
              <p>Der kom også gymnastiksale med bad.</p>
              <p>
                Kvinder fik mere arbejde udenfor hjemmet og nu kunne pigerne fortsætte i skole efter
                7. klasse i stedet for at komme ud og tjene. Pigerne kom i 1950’erne i flertal i
                mellemskolen og i realen, og det var en kønsfordeling, der ikke var set før.
              </p>
              <p>
                I klasseværelset var læreren det autoritære overhoved og eleverne skulle med terpe
                kongerækker og tabeller.
              </p>
            </div>
            <div className="right">
              <img src={Kl1950} alt="klasse-1950" />
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <h3 className="keywords">gruppearbejde og medbestemmelse</h3>
        <h2 className="anno">1970 </h2>

        <div className="box">
          <div className="flex-row">
            <div className="left">
              <p>1970’erne blev folkeskolen demokratisk. </p>
              <p>
                Nu skulle man ikke bare være en dygtig elev men også en kritiske samfundsborgere.
              </p>
              <p>
                Eleverne fik medbestemmelse. De blev set som aktive, selvstændige individer, og det
                var i orden at ytre sig om stort og småt over for lærerne.
              </p>
              <p>
                Lærerne var ikke autoritære og skræmmende voksne, der bestemte alting. Magten er
                måske så meget sagt, men eleverne fik mere medbestemmelse.
              </p>
              <p>
                I 1975 kom der en ny folkeskolelov, med fokuserede på elevernes demokratiske
                dannelse. Der opstod elevrådene og mange skoler holdt samlinger, hvor eleverne kunne
                gå i dialog med lærerne.
              </p>
              <p>
                Stereotype kønsroller blev udfordret. Drenge skulle have husgerning og pigerne
                sjøld.
              </p>
            </div>
            <div className="right">
              <img src={Kl1970} alt="klasse-1970" />
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <h3 className="keywords">konkurrence og inklusion</h3>
        <h2 className="anno">2020 </h2>

        <div className="box">
          <div className="flex-row">
            <div className="left">
              <p>
                I 20’erne viste internationale undersøgelser at danskere var bagefter, når eleverne
                skulle være i stand til at konkurrere på et globalt marked.
              </p>
              <p>
                Der blev indført længere skoledage, engelsk fra 1. klasse og cirka 45 minutters
                motion om dagen.
              </p>
              <p>
                Folkeskolereformen skullet styrke faglighed og trivsel i skolen og samtidig medvirke
                til at bryde den sociale arv.
              </p>
              <p>
                Lærerne mente ikke, at undervisningen blev bedre af flere timer på skemaet og mindre
                forberedelsestid og det skabte flere strejke og opgør.
              </p>
              <p>
                Undervisning var ikke længere bare noget man skulle snakke om, det skulle måles og
                flere lærer blev sygemeldt med stress end nogenside før.
              </p>
            </div>
            <div className="right">
              <img src={Kl2020} alt="klasse-2020" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Zoner from "../assets/imgs/zoner.svg";

export default function Intro() {
  return (
    <div className="intro">
      <div className="flex-row">
        <div className="introtext">
          <p>
            Det bliver mere og mere anerkendt at skolerummet og de fysiske rammer understøtter
            indlæringen og forbedre trivslen. De skoler som sætter gang i den rigtige udvikling øger
            mærkbart elevernes resultater.
          </p>

          <p>
            Nudging kan få børn til at træffe gode beslutninger og vi kan med mere end 90%
            sandsynlighed sætte et nyt skoleprojekt i gang, som evalueres positivt af både elever og
            medarbejdere.
          </p>

          <p>
            Klasserumsledelse er vigtigt når et professionelt læringsfællesskab skal fungere og det
            kræver sunde miljøer. Hvis I så oveni skruer op for nudging/adfærdsdesign vil antallet
            af børn som oplever succes i skolen stige.
          </p>

          <p>
            <em>
              Hold markøren over cirklerne i de enkelte zoner på billedet, for at læse mere...
            </em>
          </p>
        </div>
        <div className="introimg">
          <img src={Zoner} alt="zoner" />

          <div className="redzone">
            <div className="redcircle"></div>

            <div className="tooltiptext">
              <h6>Feedbackzone</h6>
              <p>Eleverne kan få feedback og hjælp af læreren</p>
            </div>
          </div>

          <div className="greenzone">
            <div className="greencircle"></div>

            <div className="tooltiptext">
              <h6>Allezone</h6>
              <p>Elevgruppen er samlet i en enhed</p>
            </div>
          </div>

          <div className="bluezone">
            <div className="bluecircle"></div>

            <div className="tooltiptext">
              <h6>Gruppezone</h6>
              <p>Eleverne arbejder sammen i grupper</p>
            </div>
          </div>
          <div className="yellowzone">
            <div className="yellowcircle"></div>

            <div className="tooltiptext">
              <h6>Stillezone</h6>
              <p>Eleverne arbejder alene og stille</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

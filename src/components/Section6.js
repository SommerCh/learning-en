import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from "../assets/imgs/stole.jpg";

export default function Section6() {
  gsap.registerPlugin(ScrollTrigger);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  console.log(name)
  return (
    <div className="section s6">
      <p className="contact-p">
        Skriv til Lars fra Environment for learning og få sparring omkring hvordan du din skole også
        kan blive <strong>fremtidens skole</strong>
      </p>

      <div className="form-container">
        <div className="formimg">
          <img src={Img} alt="stole" />
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="group">
            <input
              type="text"
              name="name"
              required
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <span className="highlight"></span>
            <span className="formspan"></span>
            <label>Name</label>
          </div>

          <div className="group">
            <input
              type="email"
              name="mail"
              required
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <span className="highlight"></span>
            <span className="formspan"></span>
            <label>Email</label>
          </div>

          <button className="formbnt" type="submit">
            Send
          </button>
        </form>
      </div>

      {submitting && (
        <div>
         Tak. Dine oplysninger er nu sent og du vil blive kontaktet hurtigst muligt
        </div>
      )}
    </div>
  );
}

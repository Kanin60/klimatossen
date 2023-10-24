import style from "../footer/footer.module.scss";
import { useState } from "react";

export function Footer() {

  return (
    <footer>
      <div>
        <section className={style.npo}>
          <h5>KlimaTossen NPO</h5>
          <p>
            Vesterbrogade 92 <br /> 9000 Aalborg <br /> info@klima-tossen.dk{" "}
            <br /> 9922 3344 (Åben man - fre: 08.00 - 16.00)
          </p>
          <h5>SAMARBEJDSPARTNERE:</h5>

          <ul>
            <li>
              <a href="https://www.dn.dk/">https://www.dn.dk/</a>
            </li>
            <li>
              <a href="http://www.miljoeportal.dk">
                http://www.miljoeportal.dk
              </a>
            </li>
          </ul>

          <h1>Klima<span>tossen</span></h1>
        </section>
        <section className={style.tilmeld}>
          <h5>Ja tak! Jeg vil gerne hører mere.</h5>
          <form>
            <input type="text" id="name" placeholder="Fulde navn" />
            <input type="text" id="city" placeholder="Hjem by" />
            <input type="email" id="email" placeholder="Email adresse" />
            <input type="tel" id="phone" placeholder="Telefon nummer" />
            <div className={style.checkbox}>
              <label htmlFor="samtale">Få en samtale med Klimatossen</label>
              <input type="checkbox" id="samtale" />
            </div>
            <div className={style.checkbox}>
              <label htmlFor="Nyhedsbrev">Modtag Nyhedsbrev</label>
              <input type="checkbox" id="Nyhedsbrev" />
            </div>
            <input type="Submit" value="Send" />
          </form>
        </section>
      </div>
    </footer>
  );
}

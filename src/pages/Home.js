import React from "react";
import portrait from "../images/image-hero-mobile.png";
import landscape from "../images/image-hero-desktop.png";
import { useMediaQuery } from "react-responsive";
import clientIcon1 from "../images/client-audiophile.svg";
import clientIcon2 from "../images/client-databiz.svg";
import clientIcon3 from "../images/client-maker.svg";
import clientIcon4 from "../images/client-meet.svg";
function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <main className='grid-container grid-container--home flow'>
      <article className='home-info flow'>
        <header className='flow'>
          {isDesktopOrLaptop ? <h1 className='ff-serif fs-700'>

            <span className="d-block fs-700">Make </span>remote work
          </h1> : <h1 className='ff-serif fs-700'>
            Make remote work
          </h1>}

          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </header>
        <button className='btn bg-black text-white'>Learn more</button>

      </article>
      {isDesktopOrLaptop ? (
        <img src={landscape} alt='work-remote' />
      ) : (
        <img src={portrait} alt='work-remote' />
      )}

      <footer className='footer flex'>
        <img src={clientIcon1} alt="client-logo" />
        <img src={clientIcon2} alt="client-logo" />
        <img src={clientIcon4} alt="client-logo" />
        <img src={clientIcon3} alt="client-logo" />
      </footer>
    </main>
  );
}

export default Home;

import React, { useState } from 'react';
import lemon from '../assets/lemon-big.svg'
import click1 from '../assets/click1.mp3';
import click2 from '../assets/click2.mp3';
import click3 from '../assets/click3.mp3';
import click4 from '../assets/click4.mp3';
import click5 from '../assets/click5.mp3';
import click6 from '../assets/click6.mp3';
import click7 from '../assets/click7.mp3';
import click8 from '../assets/click8.mp3';
import click9 from '../assets/click9.mp3';
import click10 from '../assets/click10.mp3';
import click11 from '../assets/click11.mp3';
import click12 from '../assets/click12.mp3';
import click13 from '../assets/click13.mp3';



const clickSounds = [click1, click2, click3, click4,
  click5, click6, click7, click8,
  click9, click10, click11, click12, click13];


  function Lemon(props) {
    const [isSoundOn, setIsSoundOn] = useState(true);
  
    const handleClick = () => {
      if (isSoundOn) {
        const randomIndex = Math.floor(Math.random() * clickSounds.length);
        const audio = new Audio(clickSounds[randomIndex]);
        audio.play();
      }
      props.onClick();
    };

const handleToggleSound = () => {
  setIsSoundOn(!isSoundOn);
};

return (
  <div className="lemon">
    <img src={lemon} alt="lemon" onClick={handleClick} />
    <button className='soundsbutton' onClick={handleToggleSound}>
      {isSoundOn ? 'sounds off' : 'sounds on'}
    </button>
  </div>
);
}

export default Lemon;

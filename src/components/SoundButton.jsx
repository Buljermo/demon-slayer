import React from 'react';


function SoundButton(props) {
  return (
    <button className="soundsbutton" onClick={props.onClick}>
      {props.isSoundOn ? 'sounds off' : 'sounds on'}
    </button>
  );
}

export default SoundButton;

import React from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function SoundButton(props) {
    return (
        <button className="soundsbutton" onClick={props.onClick}>
            {props.isSoundOn ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
    );
}

export default SoundButton;

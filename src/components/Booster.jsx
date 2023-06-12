import shortenNumber from '../utils/shortenNumber';

function Booster(props) {

    // Poimitaan komponentille välitetty value-arvo
    const value = shortenNumber(props.value);
  
    return (
      <div className="booster">
        {value} souls / click
      </div>
    );
  
  }
  
  export default Booster;
  
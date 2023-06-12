import shortenNumber from '../utils/shortenNumber';

function Balance(props) {

    // Poimitaan komponentille välitetty total-arvo
    const total = shortenNumber(props.total);
  
    return (
      <div className="balance">
        <div>souls</div>
        <div className="balance_total">{total}</div>
      </div>
    );
  
  }
  
  export default Balance;
  
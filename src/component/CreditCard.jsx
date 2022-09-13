import './creditcard.css';

export const CreditCard = (props) => {
  const style = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  let imgLogo = '';
  switch (props.type) {
    case 'Visa':
      imgLogo = 'logos:visa';
      break;
    case 'Master Card':
      imgLogo = 'logos:mastercard';
      break;

    default:
      break;
  }
  return (
    <div className="credit-card" style={style}>
      <div className="top-card">
        <div className="logo-card">
          <iconify-icon icon={imgLogo}></iconify-icon>
        </div>
      </div>

      <div className="number-card">
        {' '}
        <div className="bullet">
          &#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;
        </div>
        <div className="bullet">
          &#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;
        </div>
        <div className="bullet">
          &#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;&nbsp;&#x25cf;
        </div>
        <span>{props.number.slice(12)}</span>
      </div>
      <div className="bottom-card">
        <div className="expiration-date">
          Expires{' '}
          {props.expirationMonth < 10
            ? '0' + props.expirationMonth
            : props.expirationMonth}
          /{props.expirationYear} &nbsp;&nbsp;&nbsp;{props.bank}
        </div>
        <div className="owner-card">{props.owner}</div>
      </div>
    </div>
  );
};

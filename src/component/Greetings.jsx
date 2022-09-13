import './greetings.css';

export const Greetings = (props) => {
  let greet = '';
  switch (props.lang) {
    case 'de':
      greet = 'Hallo ';
      break;
    case 'en':
      greet = 'Hello ';
      break;
    case 'es':
      greet = 'Hola ';
      break;
    case 'fr':
      greet = 'Bonjour ';
      break;
    default:
      greet = 'WRONG LANG ';
  }
  return (
    <div className="greetings">
      {greet}
      {props.children}
    </div>
  );
};

import './boxcolor.css';
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
export const BoxColor = ({ r, g, b }) => {
  const hexa = rgbToHex(r, g, b);
  const style = {
    backgroundColor: hexa,
  };
  return (
    <div className="colored-box" style={style}>
      <p>
        rgb({r},{g}, {b})
      </p>
      <p>{hexa}</p>
    </div>
  );
};

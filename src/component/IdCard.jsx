import './idCad.css';
function sizeFormat(height) {
  const h = height.toString();
  return h.length > 2 ? `${h[0]}.${h[1]}${h[2]}m` : `0.${h[0]}${h[1]}m`;
}
export const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) => {
  return (
    <div className="idCard">
      <div className="profil-picture">
        <img src={picture} alt="profile" />
      </div>
      <div className="info-list">
        <ul>
          <li>
            <b>Firstname: </b>
            {firstName}
          </li>
          <li>
            <b>LastName: </b>
            {lastName}
          </li>
          <li>
            <b>Gender: </b>
            {gender}
          </li>
          <li>
            <b>Height: </b>
            {sizeFormat(height)}
          </li>
          <li>
            <b>Birth: </b>
            {birth.toDateString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

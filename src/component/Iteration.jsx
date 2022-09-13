import './iteration.css';

export const Iteration = (props) => {
  return (
    <div className="iteration-list">
      <h1>Iteration {props.num}</h1>
      {props.children}
    </div>
  );
};

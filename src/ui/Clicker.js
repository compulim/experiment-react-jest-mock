import './Clicker.css';

const Clicker = ({ numClick, onClick }) => {
  return (
    <p className="clicker" onClick={onClick}>
      Number of clicks: {numClick}
    </p>
  );
};

export default Clicker;

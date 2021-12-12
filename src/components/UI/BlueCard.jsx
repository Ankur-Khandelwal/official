import "./css/BlueCard.css";

const BlueCard = (props) => {
  const {children} = props;
  return (
    <div className="blue-card">
      {children}
    </div>
  )
}

export default BlueCard;
import "./css/GreyCard.css";

const GreyCard = (props) => {
  const {children} = props;
  return (
    <div className="grey-card">
      {children}
    </div>
  )
}

export default GreyCard;
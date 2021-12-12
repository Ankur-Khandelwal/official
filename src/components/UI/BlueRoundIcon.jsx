import './css/BlueRoundIcon.css';

const BlueRoundIcon = (props) => {
  const {children} = props;
  return (
    <div className="blue-round-icon">
      {children}
    </div>
  )
}

export default BlueRoundIcon;
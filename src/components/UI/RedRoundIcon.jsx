import './css/RedRoundIcon.css';

const RedRoundIcon = (props) => {
  const {children} = props;
  return (
    <div className="red-round-icon">
      {children}
    </div>
  )
}

export default RedRoundIcon;
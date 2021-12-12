import "./css/InputLabel.css";

const InputLabel = (props) => {
  const {children} = props;
  return(
    <p className="input-label">
      {children}
    </p>
  )
}

export default InputLabel;
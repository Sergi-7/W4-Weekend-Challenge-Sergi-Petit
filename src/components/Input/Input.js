const Input = ({ text, type, label, id, onChangeAction, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{text}</label>
      <input
        onChange={onChangeAction}
        type={type}
        id={id}
        value={value}
        className="form-control"
      ></input>
    </div>
  );
};

export default Input;

const Input = ({ text, type, label, id, onChangeAction }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{text}</label>
      <input
        onChange={onChangeAction}
        type={type}
        id={id}
        className="form-control"
      ></input>
    </div>
  );
};

export default Input;

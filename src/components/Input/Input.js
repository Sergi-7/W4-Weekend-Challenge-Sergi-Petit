const Input = ({ text, type, label, id, onChangeAction }) => {
  return (
    <div class="form-group">
      <label for={label}>{text}</label>
      <input
        onChange={onChangeAction}
        type={type}
        id={id}
        class="form-control"
      ></input>
    </div>
  );
};

export default Input;

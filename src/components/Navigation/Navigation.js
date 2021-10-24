const Navigation = ({ actionOnClick, text, disabled }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={actionOnClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Navigation;

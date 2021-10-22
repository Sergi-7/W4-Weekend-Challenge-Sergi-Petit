const Navigation = ({ actionOnClick, text }) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={actionOnClick}>
        {text}
      </button>
    </div>
  );
};

export default Navigation;

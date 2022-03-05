export const Errors = ({ errors, className }) => {
  if (!errors) return null;

  return (
    <div className={className}>
      {Object.keys(errors).map((item, i) =>
        Object.keys(errors[item]).map((a) => (
          <div key={i}>{errors[item][a]}</div>
        ))
      )}
    </div>
  );
};

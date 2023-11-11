function Input({ id, placeholder, type, labelText, onChange, value }) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;

function Input({ id, placeholder, type, labelText, onChange, onInput, value }) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onInput={onInput}
        value={value}
      />
    </div>
  );
}

export default Input;

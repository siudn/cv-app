function Input({ id, placeholder, type, labelText, onChange, value }) {
  return (
    <div className="flex gap-6 justify-between">
      <label htmlFor={id}>{labelText}</label>
      <input
        className="rounded"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;

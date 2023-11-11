function Header({ name, email, phone, address }) {
  return (
    <header>
      <h1>{name}</h1>
      <span>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <h4>{address}</h4>
      </span>
    </header>
  );
}

export default Header;

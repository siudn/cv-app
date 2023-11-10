import { useState } from "react";

function Header(person) {
  return (
    <header>
      <h1>{person.name}</h1>
      <span>
        <h4>{person.email}</h4>
        <h4>{person.phone}</h4>
        <h4>{person.address}</h4>
      </span>
    </header>
  );
}

export default Header;

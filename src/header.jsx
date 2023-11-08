import { useState } from "react";

function header(person) {
  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.email}</h1>
      <h1>{person.phone}</h1>
    </>
  );
}

export default header;

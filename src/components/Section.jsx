import { useState } from "react";

function Section(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        <div>
          <h4>{props.date}</h4>
          <h4>{props.city}</h4>
        </div>
        <div>
          <h4>{props.company}</h4>
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Section;

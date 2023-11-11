function Experience({ company, position, date, city, desc }) {
  return (
    <div>
      <h2>EXPERIENCE</h2>
      <div>
        <p>{position}</p>
        <p>{company}</p>
      </div>
      <div>
        <p>{date}</p>
        <p>{city}</p>
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default Experience;

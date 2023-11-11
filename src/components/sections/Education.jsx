function Education({
  school,
  majorDegree,
  schoolDate,
  schoolLocation,
  schoolDesc,
}) {
  return (
    <div>
      <h2>EDUCATION</h2>
      <div>
        <p>{school}</p>
        <p>{majorDegree}</p>
      </div>
      <div>
        <p>{schoolDate}</p>
        <p>{schoolLocation}</p>
      </div>
      <p>{schoolDesc}</p>
    </div>
  );
}

export default Education;

import Header from "./Header";

function DisplayResume(props) {
  return (
    <>
      <header>
        <h1>{props.name}</h1>
        <span>
          <h4>{props.email}</h4>
          <h4>{props.phone}</h4>
          <h4>{props.address}</h4>
        </span>
      </header>
      <div>
        <h2>{props.sectionOne}</h2>
        <div></div>
      </div>
    </>
  );
}

export default DisplayResume;

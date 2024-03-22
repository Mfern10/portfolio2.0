import Button from "react-bootstrap/Button";

function ButtonClick({title}) {
  return (
    <>
      <Button className="resume-button" variant="dark">{title}</Button>{" "}
    </>
  );
}

export default ButtonClick;

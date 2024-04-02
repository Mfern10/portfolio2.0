import React from "react";
import Button from "react-bootstrap/Button";
import Resume from "../assets/2024_03_25_mitchell_fernandez_resume_en.pdf";

function ButtonClick({ title }) {
  const openResumeInNewTab = () => {
    window.open(Resume, "_blank");
  };

  return (
    <>
      <Button
        className="resume-button"
        variant="dark"
        onClick={openResumeInNewTab}
      >
        {title}
      </Button>{" "}
    </>
  );
}

export default ButtonClick;

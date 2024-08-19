import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function SimpleAlert({
  variant = "primary",
  title = "Título",
  message = "Mensaje",
  show = true,
  clickAlert,
}) {
  const [showAlert, setShowAlert] = useState(show);

  const toggleAlert = () => {
    setShowAlert(!alert);
    clickAlert(!alert);
  };

  if (showAlert === false) {
    return null;
  }
  return (
    <>
      <Alert show={show} variant={variant}>
        <Alert.Heading>{title}</Alert.Heading>
        <p>
          {message}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={toggleAlert} variant={`outline-${variant}`}>
            Close
          </Button>
        </div>
      </Alert>
    </>
    
  );
}

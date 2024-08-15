import { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function SimpleAlert({
  variant = "primary",
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
    <Alert
      className="m-1"
      variant={variant}
      onClose={toggleAlert}
      dismissible
    >
      <p>{message}</p>
    </Alert>
  );
}

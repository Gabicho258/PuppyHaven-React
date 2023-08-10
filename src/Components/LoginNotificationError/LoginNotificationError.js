import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./_LoginNotificationError.scss";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const LoginNotificationError = ({
  alertOnUser,
  alertOnWalker,
  message,
}) => {
  const [openUser, setOpenUser] = React.useState(alertOnUser);
  const [openWalker, setOpenWalker] = React.useState(alertOnWalker);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenUser(false);
    setOpenWalker(false);
    alertOnUser(false);
    alertOnWalker(false);
  };
  React.useEffect(() => {
    setOpenUser(alertOnUser);
    setOpenWalker(alertOnWalker);
  }, [alertOnUser, alertOnWalker]);

  return (
    <Snackbar
      open={openUser || openWalker}
      autoHideDuration={5000}
      onClose={handleClose}
      className="loginNotificationError"
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

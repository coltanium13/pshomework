import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { deleteAlert } from "../../actions/alertActions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const AlertPop = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { alerts } = useSelector(state => ({
    ...state.alerts
  }));

  const handleClose = (event, reason, id) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    dispatch(deleteAlert(id));
  };

  useEffect(() => {
    if (alerts) {
      setOpen(true);
    }
  }, [alerts]);

  return alerts && alerts.length > 0
    ? alerts.map(alert => (
        <div key={alert.id} className={classes.root}>
          <Snackbar
            key={alert.id}
            open={open}
            autoHideDuration={6000}
            onClose={(e, r) => handleClose(e, r, alert.id)}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              key={alert.id}
              severity={alert.alertType}
            >
              {alert.msg}
            </MuiAlert>
          </Snackbar>
        </div>
      ))
    : null;
};

export default AlertPop;

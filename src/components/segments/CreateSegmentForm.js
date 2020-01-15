import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { createSegment } from "../../actions/segmentActions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import uuid from "uuid";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  btn: {
    margin: theme.spacing(1)
  }
}));

const CreateSegmentForm = ({ history }) => {
  const classes = useStyles();
  const [newSegment, setNewSegment] = useState({
    name: "",
    subscribers_count: 0
  });

  const dispatch = useDispatch();

  const onChange = e => {
    setNewSegment({
      ...newSegment,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const segment = {
      name: newSegment.name,
      subscribers_count: newSegment.subscribers_count,
      id: uuid()
    };

    dispatch(createSegment(segment, history));

    setNewSegment({
      name: "",
      subscribers_count: ""
    });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add Segment
      </Typography>
      <form className={classes.root} onSubmit={onSubmit}>
        <div>
          <TextField
            required
            name="name"
            id="name-input"
            label="Segment Name"
            variant="outlined"
            onChange={onChange}
            value={newSegment.name}
          />
        </div>
        <div>
          <TextField
            required
            type="number"
            name="subscribers_count"
            id="subscriberscount-input"
            label="Subscriber Count"
            variant="outlined"
            onChange={onChange}
            value={newSegment.subscribers_count}
          />
        </div>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default withRouter(CreateSegmentForm);

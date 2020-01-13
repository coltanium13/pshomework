import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateSegment, getSegmentById } from "../../actions/segmentActions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

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

const EditSegment = ({ match, history }) => {
  const classes = useStyles();

  const segmentId = match.params.id;

  const dispatch = useDispatch();

  const { segment } = useSelector(state => ({
    ...state.segments
  }));

  const [formData, setFormData] = useState({
    name: "",
    subscribers_count: 0,
    id: segment.id
  });

  useEffect(() => {
    dispatch(getSegmentById(segmentId));
    setFormData({
      name: segment.name,
      subscribers_count: segment.subscribers_count,
      id: segment.id
    });
  }, [
    dispatch,
    segmentId,
    segment.name,
    segment.subscribers_count,
    segment.id
  ]);

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const segment = {
      name: formData.name,
      subscribers_count: formData.subscribers_count,
      id: formData.id
    };

    dispatch(updateSegment(segment, history));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Edit Segment
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
            value={formData.name}
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
            value={formData.subscribers_count}
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

export default withRouter(EditSegment);

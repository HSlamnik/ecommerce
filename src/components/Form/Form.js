import { makeStyles } from '@material-ui/core/styles';

const Form = ({ handleChange, label, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.group}>
      <input className={classes.input} onChange={(e) => handleChange(e.target.value)} {...rest} required />
      {label ? <label className={`${rest.value.length ? classes.shrinkLabel : classes.label} `}>{label}</label> : null}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  group: {
    position: 'relative',
    margin: '45px 0',
  },

  input: {
    background: 'none',
    backgroundColor: 'white',
    color: 'grey',
    fontSize: '18px',
    padding: '10px 10px 10px 5px',
    display: 'block',
    width: '100%',
    border: 'none',
    borderRadius: '0',
    borderBottom: '1px solid grey',
    margin: '25px 0',

    '&:focus': {
      outline: 'none',
    },

    '&:focus ~ label': {
      color: 'black',
      fontSize: '12px',
      fontWeight: 'normal',
      position: 'absolute',
      pointerEvents: 'none',
      left: '5px',
      top: '-14px',
      transition: '300ms ease all',
    },
  },

  label: {
    color: 'grey',
    fontSize: '16px',
    fontWeight: 'normal',
    position: 'absolute',
    pointerEvents: 'none',
    left: '5px',
    top: '10px',
    transition: '300ms ease all',
  },

  shrinkLabel: {
    color: 'black',
    fontSize: '12px',
    fontWeight: 'normal',
    position: 'absolute',
    pointerEvents: 'none',
    left: '5px',
    top: '-14px',
    transition: '300ms ease all',
  },
}));

export default Form;

import { makeStyles } from '@material-ui/core/styles';

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <img
        className={classes.imageContainer}
        src="https://dcassetcdn.com/design_img/1559024/551167/551167_7840631_1559024_911ff84c_image.png"
        alt="Logo"
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
  },

  imageContainer: { display: 'block', height: '2rem', width: 'auto' },
}));

export default Logo;

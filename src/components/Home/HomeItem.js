import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const HomeItem = ({ sections, history }) => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.menu}>
        {sections.map(({ title, subtitle, id, imageUrl, isWideDiv, linkUrl }) => (
          <div
            key={id}
            className={classes.menuItem}
            style={{
              height: isWideDiv && '380px',
            }}
            onClick={() => history.push(`${linkUrl}`)}
          >
            <div className={classes.imageBackground} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className={classes.content}>
              <h1 className={classes.title}>{title}</h1>
              <span className={classes.subtitle}>{subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  home: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 80px',
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    minWidth: '30%',
    height: '240px',
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '0 7.5px 15px',
    overflow: 'hidden',

    '&:first-child': {
      marginRight: '7.5px',
    },

    '&:last-child': {
      marginLeft: '7.5px',
    },

    '&:hover': {
      cursor: 'pointer',

      '& $imageBackground': {
        transform: 'scale(1.1)',
        transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
      },

      '& $content': {
        opacity: '0.9',
      },
    },
  },

  imageBackground: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  content: {
    height: '90px',
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    backgroundColor: 'white',
    opacity: '0.7',
    position: 'absolute',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '6px',
    fontSize: '22px',
    color: '#4a4a4a',
  },
  subtitle: {
    fontWeight: 'lighter',
    fontSize: '16px',
  },
}));

export default withRouter(HomeItem);

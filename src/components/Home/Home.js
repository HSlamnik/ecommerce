import { makeStyles } from '@material-ui/core/styles';

import { SHOP_SECTIONS } from '../../utils/constants';

const Home = () => {
  const classes = useStyles();

  const sections = SHOP_SECTIONS;

  return (
    <div className={classes.home}>
      <div className={classes.menu}>
        {sections.map((section) => (
          <div key={section.id} className={classes.menuItem}>
            <div className={classes.content}>
              <h1 className={classes.title}>{section.title}</h1>
              <span className={classes.subtitle}>{section.subtitle}</span>
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

    '&:first-child': {
      marginRight: '7.5px',
    },

    '&:last-child': {
      marginLeft: '7.5px',
    },
  },
  content: {
    height: '90px',
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
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

export default Home;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 265,
    height: 370,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 10,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default useStyles;

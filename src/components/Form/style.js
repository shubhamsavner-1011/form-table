import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      color: 'grey',
      fontWeight: 'bold',
      fontSize: 40,
      cursor: 'pointer',
    },
    grid: {
      padding: '0px 30px 0px 30px',
    },
    div: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px',
    },
    hr: {
      margin: '5px 0px ',
      height: '2px',
      border: 'none',
      backgroundColor: '#e5e5e5',
      flex: '1',
    },
    subdiv: {
      color: '#AFAFAF',
      lineHeight: '18px',
      padding: '0px 12px',
      fontSize: '15px',
      fontWeight: 'bold',
    },
    div1: {
      textAlign: 'center',
      marginTop: '30px',
      color: '#AFAFAF',
      fontSize: '14px',
      fontFamily: 'din-round, sans-serif',
    },
  }),
);
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      },
      inputContainer: {
        marginBottom: '20px',
      },
      input: {
        marginRight: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        outline: 'none',
      },
      button: {
        marginTop: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#0056b3',
        },
      },
      weatherInfo: {
        marginTop: '20px',
        textAlign: 'center',
      },
      heading: {
        fontSize: '24px',
        marginBottom: '10px',
      },
      paragraph: {
        fontSize: '16px',
        marginBottom: '5px',
      },
}));

export default useStyles;

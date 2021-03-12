import './App.css';
import { Typography,AppBar,CssBaseline,Toolbar, Container} from '@material-ui/core'
import PetsIcon from '@material-ui/icons/Pets';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles'

const url = 'https://dog.ceo/api/breeds/image/random';


function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PetsIcon className={classes.icon} />
          <Typography variant='h6'>
            DOG APP
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>

          <Container>
            <Typography variant='h2' align='center'>
              This is the dog app
            </Typography>
            <Typography variant='h5' align='center' color='primary'>
              press refresh for a random dog
            </Typography>
          </Container>

          <div className={classes.container}>
            <Container fixed align='center'>
               <img alt='dog' id="dogpic" src='' align='center' width="400" height="400" ></img>
            </Container>

            <Container align ='center'>
              <IconButton className={classes.button} color="primary"  onClick={loadDog}>
                <RefreshIcon/>
              </IconButton>
             </Container>

          </div>
        </div>
      </main>
    </>

  );

}

function loadDog() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("dogpic").src = JSON.parse(this.responseText).message;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

loadDog()



export default App;

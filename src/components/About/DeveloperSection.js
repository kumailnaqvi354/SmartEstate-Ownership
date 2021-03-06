import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import icon1 from '../images/Asim.jpg'
import icon2 from '../images/Haseeb1.jpg'
import icon3 from '../images/kumail.jpg'
import icon4 from '../images/Sheheryar.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'150px',
    paddingTop:'30px',
    backgroundColor:'#f2f2f2', 
    textAlign:'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 style={{marginBottom:'30px'}} >ABOUT DEVELOPERS</h3>
        
      <Grid container spacing={3} >
        <Grid item  xs={12} sm={6}>
          <Paper className={classes.paper}>
          <div className="center" style={{color:'black'}}>
            <img src={icon1} width="300px" height="300px" />
            <h4>Syed Asim Raza Naqvi</h4>
            <h3>Skills</h3>
            <p>Blockchain Developer| Reactjs | React-Native | JamStack</p>
            </div>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={6}>
          <Paper className={classes.paper}>
          <div className="center" style={{color:'black'}}>
          <img src={icon2} width="300px" height="300px" />
          <h4>Haseeb Ahmed </h4>
            <h3>Skills</h3>
            <p>UI/UX Developer | Reactjs | Graphic Designer </p>
            
          </div>
          </Paper>
        </Grid>
       
        <Grid item  xs={12} sm={6}>
          <Paper className={classes.paper}>
            
          <div className="center" style={{color:'black'}}>
          <img src={icon3} width="300px" height="300px" />
          <h4>Syed Kumail Ali Naqvi</h4>
            <h3>Skills</h3>
            <p>Blockchain Developer | Reactjs | JamStack | Kotlin </p>
            
          </div>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={6}>
          <Paper className={classes.paper}>
          
          <div className="center" style={{color:'black'}}>
          <img src={icon4} width="300px" height="300px" />
          <h4>Syed Muhammad Shaheryar</h4>
            <h3>Skills</h3>
            <p>UI/UX Designer | Reactjs | hybrid Mobile Developer (flutter)</p>
            
          </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

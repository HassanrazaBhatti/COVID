import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: "100%",
            height: theme.spacing(16),
        },
    },
}));


export default function GlobalData() {
    const classes = useStyles();


    const [GlobalData , setGlobalData] = useState();
    
    useEffect( () =>{
        async function fetchGlobalData (){
            const apiResponse = await fetch("https://api.thevirustracker.com/free-api?global=stats");
             console.log(apiResponse);
             let data = await apiResponse.json();
             console.log(data);
            //  setGlobalData(dataFromApi);
        }
        fetchGlobalData();
    },[] )
    return (
        <div className={classes.root}>
            <Paper elevation={3} style={{color : "black" , fontWeight : "bold"}}>
            
                <br/>
               Global Data
            </Paper>
            <Paper elevation={3}  style={{color : "blue" , fontWeight : "bold"}}>
               Active Cases
               <br />
               1000
            </Paper>
            <Paper elevation={3}  style={{color : "green" , fontWeight : "bold"}}>
                Recovered
                <br />
                1000
            </Paper>
            <Paper elevation={3}  style={{color : "red" , fontWeight : "bold"}}>
               Deaths
               <br />
               1000
            </Paper>
        </div>
    );
}

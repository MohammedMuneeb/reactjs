import React from 'react'; 
import { Grid, Paper, Typography, IconButton, CircularProgress, Chip, Button ,Stack } from '@mui/material'; 




// import QueryBuilderIcon from "@@mui/material-icons/QueryBuilder"; 
function AttendanceStatus (){ 
  return ( 
    
    
    <Paper elevation ={3} sx ={{p :2,width :"100%"}}><Grid container spacing ={2}justifyContent ="space-between"><Grid item xs ={12}md ={3}justifyContentent><Grid > 
      
      
      
      
      <Typography variant ="h6">Attendance Status </Typography > 
          <Typography variant="body1">Last Week </Typography >  
        <Paper elevation ={3}> 
          
          
          
          
          <div style={{ display: 'flex', alignItems: 'center' }}> 
            {/* <QueryBuilderIcon />  */}<Typography variant ="h6">Attendance Status </Typography > 
          <Typography variant="body1">Last Week </Typography > 
           <Typography variant="body1">Avg hrs / Day (6hrs 48m)</Typography > 
            <CircularProgress variant="determinate" value ={95}/> 
            <Typography variant ="body1">On Time Arrival: 95%</Typography > 
          
          </div > 





        </Paper ></Grid > 
      </Grid > 
      

      
    <Grid item xs ={12}md ={3}> 
        
        <Grid ><Typography variant="h6">Timings </Typography > 
          
          
          <div style ={{ display :'flex',justifyContent :'space-between' }}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map ((day ,index )=>(<Chip label ={day }key ={index }/> 
            
            
            ))}           
          </div > 
        <Paper elevation ={3}> 
          
          


          <Typography variant="body1">Today (09:30AM - 06:30PM )</Typography > 
          
          
          
          
          <Typography variant ="h6">04:04:39 PM </Typography ><Typography variant="body1">Duration :9h 0m Break: 0m</Typography ></Paper ></Grid ></Grid > 
      
      
      
      
      
      <Grid item xs ={12}md ={3}> 
       <Grid ><Typography variant ="h6">Action </Typography ><Stack container direction ="row"spacing ={12}><Paper elevation ={3}sx ={{p :2}}> 
          
       <Typography variant ="h6">04:04:39 PM</Typography > 
        <Typography variant ="body1">Wed 06, Dec 2023 </Typography > 
        
       
          
          
        
        </Paper ><Grid container direction ="column"><Button variant="contained" color="primary"sx ={{size :"small"}}>Leave Request </Button ><Button variant="contained" color="secondary">Work From Home</Button ></Grid ></Stack ></Grid > 
        </Grid > 
        
    </Grid > 
    
    
    
    
    
    </Paper > 
  
  ); 




} 


export default AttendanceStatus ; 
// import React from 'react'; 
// import { Box, Typography, Button ,Stack } from '@mui/material'; 




// function Attendance (){ 
//   return ( 
//     <Box p ={2}> 
//       <Typography variant="h6">Attendance </Typography > 
//       <Stack direction ="row"> 
//         <><p >Average Hours/Day: 6hrs 48m </p > 
//         <p >Arrival :95% </p ></ >
//         <>geohk' </ ></Stack > 
      
      
//       <
//         Button variant="contained" color="primary">Leave Request</Button ></Box > 
//   );}export default Attendance ; 
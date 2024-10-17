import React from 'react';
import { 




  Grid,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Chip,
  IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
function AttendanceTable (){ 
  const attendanceData = [
    {
      date :'2', 

      attendanceVisual: '✓',
      effectiveHours: '',
      grossHours :'', 
      extraHours :'',
      
      arrival :'',}, 

    
      {date :'', 
      
      
      attendanceVisual :'', 
      effectiveHours :'', 
      grossHours :'', 
      extraHours :'',
      arrival :'', 
    
    
    },// ... other attendance data
  
  ]; 

  return ( 
    <Grid container spacing ={2}> 
      
      <Grid item xs ={12}><Paper elevation ={3}>
          <Typography variant ="h6">Attendance Table </Typography > 
          
          
          
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant ="body1">31</Typography >             
            <div style={{ display: 'flex' }}>
              
              {['Location', 'Location'].map((month, index) => (
                <Chip label={month} key={index} />
              ))}
            </div > 
          
          </div > 
          <Table > 
            <TableHead > 
              <TableRow > 
                <TableCell >Date </TableCell > 
                <TableCell>Attendance Visual </TableCell>
                <TableCell>Effective Hours</TableCell>
                <TableCell>Gross Hours</TableCell>
                <TableCell>Extra Hours</TableCell>
                <TableCell>Arrival</TableCell>
                <TableCell>Log</TableCell>
              </TableRow>
            </TableHead>
            <tbody>
              {attendanceData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.attendanceVisual}</TableCell>
                  <TableCell>{row.effectiveHours}</TableCell>
                  <TableCell>{row.grossHours}</TableCell>
                  <TableCell>{row.extraHours}</TableCell>
                  <TableCell>{row.arrival}</TableCell>
                  <TableCell>
                    <IconButton>
                      <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                      <CloseIcon />
                    </IconButton>
                    <IconButton>
                      <ThumbUpIcon />
                    </IconButton>
                    <IconButton>
                      <ThumbDownIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Grid>
    </Grid > 
  ); 


}export default AttendanceTable ; 
// import TableHead from "@mui/material/TableHead";import TableContainer from "@mui/material/TableHead"; 
// function Table (){return (<TableContainer > 
      
      
      
      
//       <Table >   
//       <TableHead ><TableRow >            
//             <TableCell >MTWTFSS </TableCell > 
            
            
//             <TableCell >Action </TableCell > 
          
          
          
          
//           </TableRow ></TableHead > 
//         <TableBody > 
//           </TableBody > 
      
      
//       </Table > 
    
    
    
    
    
//     </TableContainer > 
// );}export default Table ; 
import * as React from 'react'; 
import ToggleButton from '@mui/material/ToggleButton'; 




import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function ToggleButtons (){ 
const [alignment, setAlignment] = React.useState('left');

  
 const handleAlignment =(event ,newAlignment )=>{ 
    setAlignment (newAlignment );}; 

  
  
    return ( 
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        
        
        Attendance Log {/* <FormatAlignLeftIcon />    */}
      </ToggleButton > 
      <ToggleButton value="center" aria-label="centered">Attendance Requests 
      
      {/* <FormatAlignCenterIcon />  */} 
      
      
      
      
      
      
      
      
      
      
      </ToggleButton > 
      
      
      
      
      
      </ToggleButtonGroup >);} 
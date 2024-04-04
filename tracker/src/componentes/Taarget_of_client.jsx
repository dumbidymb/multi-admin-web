
import'../css/Inicio.css'
import * as React from 'react';

import Stack from '@mui/material/Stack';
import BasicSpeedDial from './Slidebutton';
import Image from '../assets/react.svg'
import { Avatar } from '@mui/material';



const Taarget_of_client = () => {
  return (
    <div className='cont-info-clients'>
        <div className='cont-first-info'>
            <div className='cont-frist-first'>

        <Stack >

        <Avatar sx={{ width: 140, height: 140, fontSize:56 }}> 
J
  </Avatar>
    

 
        </Stack>
            </div>
            <div className='cont-frist-second'>
                <h1>Jose luis Estrada Pineda</h1>
<li>fecha de nacimiento: 2222/222/222</li>
<li>Ciudad: Arriaga, Chiapas</li>
<li>No. de dispositivo: 127SH-1 </li>
<li>No. celular: 9661256422</li>
<li>TEl. fijo: 6615266</li>
            </div>

        </div>
        <div className='cont-second-info'>
<BasicSpeedDial/>
        </div>
    </div>
  )
}

export default Taarget_of_client
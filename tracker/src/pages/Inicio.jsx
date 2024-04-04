
    import '../css/Inicio.css'
    import Busqueda from '../componentes/Busqueda'
    import Taarget_of_client from '../componentes/Taarget_of_client'
    import Logo from '../assets/logo.png'
    import IconButton from '@mui/material/IconButton';
    import Avatar from '@mui/material/Avatar';
    import Tooltip from '@mui/material/Tooltip';
    import Menu from '@mui/material/Menu';
    import MenuItem from '@mui/material/MenuItem';
    import Typography from '@mui/material/Typography';
    import React from 'react';
    import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
    import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';





    const Inicio = () => {
      const navigate = useNavigate();

      const handleButtonClick = () => {
        // Redireccionar a otra página
        navigate('/Daralta');
      };
        const { isOpen, onToggle } = useDisclosure()
    return (
    <> 
    <header className='principal'>

        
    <div className='p1'>
    <img src={Logo} alt="" />
    </div>
    <div className='p2'>
    

    <button  onClick={handleButtonClick} className='bt1-p'>
    usuario nuevo 
    </button>

    <Avatar>

    </Avatar>
        </div>

        
    </header>
    <body className='bien'>
    <div className='separar'>

    <aside className='section'>
        <div className='cont-clientes'>
    <Busqueda/>
    <div className='elements-clients'>

    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    <button className='tarjet-client' onClick={onToggle}>
    <Avatar></Avatar>
    <div className='info-text-client'>
       <p>Jose Luis Estrada Pineda</p>
    
    </div>
   
    </button>
    </div>
        </div>
    </aside>
    <section className='section-of-clients'>
    <SlideFade in={isOpen} offsetY='20px'>
    <Taarget_of_client/>
    </SlideFade>
    </section>
    </div>
    </body>


    </>
    )
    }

    export default Inicio
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';

const Navbar = () => {
  return (
    <div>
        <br /><br />
        <AppBar sx={{
           background: '#4158D0',
           background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
           
        }}>
            <Toolbar>
                <Typography variant='h6' color='inherit'>PRODUCT APPLICATION</Typography> <hr/>
                <Link to={'/p'}><Button variant='contained' className='btn' color='success'>Products</Button></Link> &nbsp; &nbsp;
               <Link to={'/a'}> <Button variant='contained' className='btn' color='success'>Add Product</Button></Link> 
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar


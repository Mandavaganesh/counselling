import React, { useState } from 'react'
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import {AppBar,Tab,Tabs,Toolbar, Typography } from '@mui/material';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState()
  return (
    
    <div>
      <AppBar sx={{backgroundColor: 'red'}} position='sticky'>
        <Toolbar>
          <AssuredWorkloadOutlinedIcon/>
          <Typography>Councelling and visitor Management system</Typography>
          <Tabs textColor='inhert' indicatorColor='primary' 
          sx={{ml:"auto"}} value={value} 
          onChange={(e,val)=>setValue(val)}>
            <Tab  LinkComponent={NavLink} to= "/Signup"label='Signup'/>
            <Tab  LinkComponent={NavLink} to= "/signin" label='Signin'/>
            <Tab  LinkComponent={NavLink} to= "/Addcounsellor"label='Addcounsellor'/>
            <Tab  LinkComponent={NavLink} to= "/Appointment" label='Appointment'/>
            <Tab  LinkComponent={NavLink} to= "/Addvistor" label='Addvistor'/>
            <Tab  LinkComponent={NavLink} to= "/FetchRegistartions" label='Registartions'/>

          </Tabs>
        </Toolbar>
      </AppBar>
      </div>
      
  )
}

export default Header
import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../components/common/commonbuttons/CommonButton';
export default function Authentication() {
  return (
    
    <div><Grid item xs={8}>
      <h1>Authentication</h1>
      
      <CommonButton  variant={"contained"} children={"Button"} />
      <CommonButton  variant={"outlined"} children={"Button"} />
      </Grid></div>

   
  )
}

import React from 'react'
import { Button } from "@mui/material";

export default function CommonButton({children, variant}) {
    const styles = {
        color: "red",
        fontSize: "0.87rem",
        '&:hover': {
            color: "green",
            backgroundColor: "yellow"
        }
    }
  return (
    <div><Button variant={variant} sx={styles}>{children}</Button></div>
  )
}

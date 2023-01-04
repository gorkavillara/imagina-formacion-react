import React, { useState } from "react"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

const ConditionalComponents = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Button variant="outlined" onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </Button>
      {isLoggedIn && (
        <Paper>
          <Typography>Bienvenido!</Typography>
        </Paper>
      )}
    </div>
  )
}

export default ConditionalComponents

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const MaterialUI = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Material UI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Material UI es una librería de componentes
          desarrollada bajo los patrones del Material Design de Google
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Saber más</Button>
      </CardActions>
    </Card>
  )
}

export default MaterialUI

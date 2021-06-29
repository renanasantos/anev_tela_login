import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import PaletteIcon from '@material-ui/icons/Palette';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const Menu = ({tema}) => {
      const classes = useStyles()
      return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={tema}>
                    <PaletteIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Sócio Torcedor
                </Typography>
                <Button color="inherit">Trabalho ANEV - Tela de Login</Button>
            </Toolbar>
        </AppBar>
      )
  }

  export default Menu
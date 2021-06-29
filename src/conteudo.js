import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
          <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2026.png" width="200" height="200"/>
        <Typography component="h1" variant="h4">
          São Paulo Futebol Clube
        </Typography>
        <form className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" label="Usuário" autoFocus fullWidth />
          <TextField variant="outlined" margin="normal" label="Senha" type="password" fullWidth />
          <Button type="submit" variant="contained" color="secondary" className={classes.submit} fullWidth> Entrar </Button>
        </form>
      </div>
    </Container>
  );
}
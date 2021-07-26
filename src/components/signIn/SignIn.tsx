import React from "react";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import dkGirlTyping from '../../assets/drawkit/girl_typing_note.svg';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& .MuiTextField-root': {
                marginBottom: theme.spacing(1),
                width: '70%'
            },
        },

        forgetPass: {
            textDecoration: 'none'
        }
    })
);

function SignInComponent() {
    const classes = useStyles();

    return(
        <Grid container xs={12}>
            <Grid item xs={12} sm={8}>
                <form className={classes.root}>
                    <TextField required id="" label="E-mail"></TextField>
                    <TextField required id="" label="Senha" type="password"></TextField>
                    <Box mt={2}>
                        <Button variant="contained" color="primary">Entrar</Button>
                    </Box>
                    <Box mt={2} justifyContent="flex-end">
                        <Typography variant="overline"><a className={classes.forgetPass} href="#">Esqueci minha senha</a></Typography>
                    </Box>
                </form>
            </Grid>
            <Grid item sm={4}>
                <img src={dkGirlTyping} alt="illustration" />
            </Grid>
        </Grid>
    );
}

export default SignInComponent;
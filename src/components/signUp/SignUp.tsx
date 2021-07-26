import React from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import dkMenNote from '../../assets/drawkit/men_typing_note.svg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                marginBottom: theme.spacing(1),
                width: '70%'
            },  
        }
    })
);

function SignUpComponent() {
    const classes = useStyles();

    return(
        <Grid container xs={12}>
            <Grid item xs={12} sm={8}>
                <form className={classes.root}>
                    <TextField required id="" label="Nome"></TextField>
                    <TextField required id="" label="E-mail" type="email"></TextField>
                    <TextField required id="" label="Senha" type="password"></TextField>
                    <TextField required id="" label="Confirmar senha" type="password"></TextField>
                    <Box mt={2} justifyItems="center">
                        <Button variant="contained" color="primary">CADASTRAR</Button>
                    </Box>
                </form>
            </Grid>
            <Grid item sm={4}>
                <img src={dkMenNote} alt="illustration" />
            </Grid>
        </Grid>        
    );
}

export default SignUpComponent;
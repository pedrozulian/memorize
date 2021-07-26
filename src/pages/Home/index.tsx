import React from "react";

import './styles.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import 'animate.css/animate.css';
import SessionComponent from "../../components/session/Session";
import undrawSchedule from '../../assets/undraw/undraw_schedule_pink.svg';

function Home() {
    return(
        <Grid xs={12}>
            <Box mt={2} mr={3}>
                <Grid container justifyContent="flex-start">
                    Memorize
                </Grid>
            </Box>
            <Box justifyContent="center">
                <Grid container>
                    <Grid item xs={12} md={6} lg={6} justifyContent="center">
                        <Box className="main-text">
                            <h1 className="animate__animated animate__slideInLeft">Fixe seu aprendizado<br />
                                com o Memorize</h1><br />
                            <h2 className="animate__animated animate__slideInRight">Organize seus estudos e utilize os seus Flashcards!<br/>
                                Baseado na técnica de <a rel="noreferrer" target="_blank" href="https://folhadirigida.com.br/blog/repeticao-espacada/" className="color-pink">Repetição Espaçada</a><br/> iremos apoia-lo para fixar na memória qualquer assunto.</h2>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10} md={4} lg={4} justifyContent="center">
                        <Box className="session animate__animated animate__fadeInUp">
                            <SessionComponent></SessionComponent>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Home;
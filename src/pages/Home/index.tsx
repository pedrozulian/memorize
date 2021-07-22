import React from "react";

import './styles.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import 'animate.css/animate.css';

import undrawSchedule from '../../assets/undraw/undraw_schedule_pink.svg';

function Home() {
    return(
        <Grid xs={12}>
            <Box mt={2} mr={3}>
                <Grid container justifyContent="flex-end">
                    <Button size="large" color="primary">CADASTRAR-SE</Button>
                    <Button size="large" color="primary">LOGIN</Button>
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
                            <Box mt={2} justifyContent="center">
                                <Button className="start-now animate__animated animate__fadeIn" variant="contained" color="secondary" size="large">Começar agora!</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} justifyContent="center">
                        <Box maxWidth="100%" className="ud-sch animate__animated animate__fadeInDown">
                            <img width="100%" src={undrawSchedule} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Home;
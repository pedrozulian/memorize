import React, { useState } from "react";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { a11yProps, TabPanelComponent } from "./TabPanel";
import SignInComponent from "../signIn/SignIn";
import SignUpComponent from "../signUp/SignUp";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        wrapper: {
            backgroundColor: '#ffffff'
        }
    })
);

function Session() {
    const theme = useTheme();
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index: number) => {
        setValue(index);
    }

    return(
        <Box boxShadow={3} className={classes.wrapper}>
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            >
                <Tab label="Inscrever-se" {...a11yProps(0)}></Tab>
                <Tab label="Login" {...a11yProps(1)}></Tab>
            </Tabs>
            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x' }
            index={value}
            onChangeIndex={handleChangeIndex}
            >
                <TabPanelComponent value={value} index={0} dir={theme.direction}>
                    <SignUpComponent></SignUpComponent>
                </TabPanelComponent>
                <TabPanelComponent value={value} index={1} dir={theme.direction}>
                    <SignInComponent></SignInComponent>
                </TabPanelComponent>
            </SwipeableViews>
        </Box>
    );
}

export default Session;
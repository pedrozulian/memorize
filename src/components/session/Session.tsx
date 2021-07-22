import React, { useState } from "react";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { ThemeProvider } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import { a11yProps, TabPanelComponent } from "./TabPanel";
import SignInComponent from "../signIn/SignIn";
import SignUpComponent from "../signUp/SignUp";

function Session() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index: number) => {
        setValue(index);
    }

    return(
        <div>
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
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
        </div>
    );
}

export default Session;
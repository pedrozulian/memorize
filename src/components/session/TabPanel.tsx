import React from "react";

import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index?: any;
    value: any;
}

export function TabPanelComponent(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    
    return(
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls' : `full-width-tabpanel-${index}`
    };
}
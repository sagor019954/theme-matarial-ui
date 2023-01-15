import { Box, createTheme, styled, ThemeProvider } from '@mui/material';
import React from 'react';
const customTheme = createTheme({
    palette: {
        primary: {
            main: '#0000FF',
            contrastText: 'white',
            blue: '#0000FF'
        },
    },
});

const MyThemeComponent = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
}));
const Home = () => {
    return (
        <Box> <ThemeProvider theme={customTheme}>
            <MyThemeComponent>Styled div with theme</MyThemeComponent>
        </ThemeProvider>


            This is home page
            bal kaj kore nah kend
        </Box>
    );
};

export default Home;
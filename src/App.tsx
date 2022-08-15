import React, {useState} from 'react';
import {ThemeProvider} from "@mui/material/styles";
import themeDark from "./styles/themeDark";
import themeLight from "./styles/theme";
import GlobalCssDark from "./styles/globalCssDark";
import GlobalCssLight from "./styles/globalCssLight";
import MainPage from "./components/MainPage";


const App = () => {

    const [themeCurrent, setThemeCurrent] = useState<"dark" | "light">("light");

    return (
        <ThemeProvider theme={themeCurrent === "dark" ? themeDark : themeLight}>
            <GlobalCssDark/>
            {themeCurrent === "dark" ? <GlobalCssDark/> : <GlobalCssLight/>}
            <MainPage themeCurrent={themeCurrent}/>
        </ThemeProvider>
    );
}

export default App;

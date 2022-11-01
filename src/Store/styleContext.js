import { createContext, useState } from "react";

const StyleData = createContext({
    toggleDarkMode : () => {},
    mainColorBackground : "Style Object",
    mainTextColor : "Style Object",
    mutedColorBackground : "Style Object",
    pageColor : "Style Object",
    isDark : false,
});

export const StyleContextProvider = (props) => {
    const currDark = localStorage.getItem("DARK");
    const [isDark, setIsDark] = useState(
        currDark === null || currDark === "false" ? false : true
        );

    const toggleDarkMode = () => {
        setIsDark((prevState) => {return !prevState;});
        if (!isDark) {
            localStorage.setItem("DARK", "true");
        } else {
            localStorage.setItem("DARK", "false");
        }
    };

    let context = {
        toggleDarkMode : toggleDarkMode,
        mainColorBackground : {"backgroundColor" : "#EFEFEF"},
        mainTextColor : {"color" : "black"},
        mutedColorBackground : {"backgroundColor" : "#E1E1E1"},
        pageColor : "#EFEFEF",
        isDark : false,
    };
    
    if (isDark) {
        context = {
            toggleDarkMode : toggleDarkMode,
            mainColorBackground : {"backgroundColor" : "black"},
            mainTextColor : {"color" : "white"},
            mutedColorBackground : {"backgroundColor" : "#181818"},
            pageColor : "#393939",
            isDark : true,
        }
    }

    return (
        <StyleData.Provider value={context}>
            {props.children}
        </StyleData.Provider>
    );
};

export default StyleData;
import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);

    display: flex;
    justify-content: center;
    align-items: center;
}

*, button {
    border: none;
    outline: none;  
}



:root {
   --background: #F6F6F6;
   --primary: #292929;
   --white: white;
}


`;
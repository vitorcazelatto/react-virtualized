import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    :root{
        --ice: #ECF1F8;
        --dark: #333;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        font: 14px 'Roboto', sans-serif;
        background: var(--ice);
        color: var(--dark);
        -webkit-font-smoothing: antialiased !important;
    }

`;
import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.width || '100%'} !important;

    div {
        width: 100% !important;
        input{
            width: 100% !important;
            padding: 6px 6px 7px;
            color: rgba(0, 0, 0, 0.87);
            cursor: text;
            display: inline-flex;
            position: relative;
            font-size: 1rem;
            box-sizing: border-box;
            align-items: center;
            font-family: "Roboto", sans-serif;
            line-height: 1.1875em; 
            background-color: transparent;

            outline: 0;
            border-width: 0 0 1px;
            border-color: #343a40;
        }
    }
`;
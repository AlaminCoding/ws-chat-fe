import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#FBF9F1",
  secondary: "#F5EEE6",
  black: "#222222",
  lightgray: "#D3D3D3",
};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        border-radius: 4px;
        
    }
    body,html{
        font-family: 'Quicksand', sans-serif;
        color: ${colors.black};
    }
    .btn{
        background-color: ${colors.primary};
        color: ${colors.black};
        padding: 8px 15px;
        display: flex;
        align-items: center;
        gap: 3px;
        border: 1px solid transparent;
        transition: 300ms;
        &:hover{
            background-color: ${colors.secondary};
            border: 1px solid ${colors.lightgray};
            cursor: pointer;
        }
    }
    .btn-active{
        background-color: ${colors.secondary};
        border: 1px solid ${colors.lightgray};
    }
    .btn-default{
        background-color: ${colors.black};
        color: ${colors.primary};
        font-size: 16px;
        border: 2px solid ${colors.black};
        padding: 10px 20px;
        display: flex;
        align-items: center;
        gap: 3px;
        transition: 300ms;
        &:hover{
            background-color: ${colors.primary};
            color: ${colors.black};
            cursor: pointer;
        }
    }
`;

export default GlobalStyle;

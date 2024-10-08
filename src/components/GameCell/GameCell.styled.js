import styled from "styled-components";

export const CellStyles= styled.button`
    background-color:${(props)=>props.theme.colors.secondary};
    color:${(props)=>props.theme.colors.primary};
    border: none;
    font-size:3rem;
    width:10rem;
    height:10rem;
    border-radius:10px;
    box-shadow: 5px 10px ${(props)=>props.theme.colors.gray};
    cursor: pointer;
`
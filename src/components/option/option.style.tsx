import styled from "styled-components";

type StyledOptionProps = {
    selected : boolean
}

export const StyledOption = styled.button<StyledOptionProps>`
    border: none;
    background-color: ${props => props.selected ? "#ccc" : "#aaa"};
    margin: 5px 10px;

    &:hover {
        background-color: #bbb;
        cursor:pointer;
    }
`
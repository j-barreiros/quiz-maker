import styled from "styled-components";

type StyledOptionProps = {
    selected : boolean;
} 

const StyledOption = styled.button<StyledOptionProps>`
    border: none;
    background-color: ${(props) => props.selected ? "red" : "blue"};
    margin: 3px;
    cursor: pointer;
`

export default StyledOption;
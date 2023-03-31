import StyledOption from "./option.style";

type OptionProps = {
    text: string,
    selected: boolean;
    handleClick: () => void;
}

const Option = ({ text, selected, handleClick }: OptionProps) => {
    return (
        <StyledOption
            selected={selected}
            onClick={handleClick}
        >
            {text}
        </StyledOption>
    )
}

export default Option;
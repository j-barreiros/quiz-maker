import { QuestionOptionType } from "../../context/data/data.types"

// Style
import { StyledOption } from "./option.style";

type OptionProps = {
    option: QuestionOptionType,
    selected: boolean,
    clickHandler: () => void;
}

const Option = ({ option, selected, clickHandler }: OptionProps) => {

    const { id, text } = option;

    return (
        <StyledOption
            selected={selected}
            onClick={clickHandler}
        >
            {text}
        </StyledOption>
    )
}

export default Option;
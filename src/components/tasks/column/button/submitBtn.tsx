import { FC } from "react";
import { SubmitButton } from "./submitBtn.style";
import { ButtonProps } from "./buttonProps";

const SubmitBtn: FC<ButtonProps> = ({ handleClick }) => {
    return (
        <SubmitButton onClick={handleClick}>
            Submit
        </SubmitButton>
    );
}

export default SubmitBtn;
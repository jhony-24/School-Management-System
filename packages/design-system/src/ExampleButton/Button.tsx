import styled from "styled-components"

export interface ButtonProps {
  text ?: string;
}

const StyledButton = styled.button({
  background : "red"
})

const Button = ({text}: ButtonProps) => {
  return (
    <StyledButton type="button">
      EXAMPLE BUTTON
      {text}
    </StyledButton>
  );
};

export default Button;
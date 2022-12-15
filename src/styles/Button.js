import styled from "styled-components";

const StyledButton = styled.button`

  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms,background 200ms;
  background: transparent;
  color: #000000;
  box-shadow: 0 0 0 3px #000000 inset;
  :hover{
    transform: translateY(-2px);

`

export default StyledButton
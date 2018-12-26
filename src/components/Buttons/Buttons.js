import styled from "astroturf";

export const Button = styled("button")`
  padding: 0;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 200ms ease;
  &:focus {
    outline: none;
  }
  &.raisedButton {
    padding: 0.4rem 0.8rem;
    font-weight: 600;
    color: #262c37;
    background-color: transparent;
    border: 2px solid rgba(144, 197, 61, 0.5);
    border-radius: 1.2857rem;
    &.isActive {
      cursor: default;
      color: #fff;
      background-color: #90c53d;
    }
  }
`;

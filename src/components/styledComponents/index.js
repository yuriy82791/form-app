import styled from "styled-components";
import { Link } from "react-router-dom";
export const BlockWrapper = styled.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;
export const Wrapper = styled.div`
  padding: 50px;
  width: 500px;
  margin: 0 auto;
`;

export const LogoBlock = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f590b2;
  border-radius: 50%;
  margin: 0 auto 10px;
  svg {
    width: 16px;
    height: 21px;
    path {
      fill: #000;
    }
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form``;
export const InputTwoColumns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  input {
    width: 48%;
  }
`;
export const InputBlock = styled.div`
  margin-bottom: 15px;
`;
export const Input = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 20px 15px;
  color: #b8b8b8;
  background-color: transparent;
  border-radius: 3px;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.valid === null ? "#494949" : props.valid ? "#4AE83C" : "#E23B3B"};
`;

export const SubmitButton = styled.button`
  font-size: 14px;
  margin-top: 35px;
  background-color: #8fc9f7;
  border: 1px solid #8fc9f7;
  font-size: 14px;
  width: 100%;
  line-height: 18px;
  padding: 10px 10px;
  color: #000;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background-color: transparent;
    color: #8fc9f7;
  }
`;

export const CheckoxLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #b8b8b8;
`;

export const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ .checkmark {
    background-color: transparent;
    &:after {
      display: block;
    }
  }
`;
export const CheckboxSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid #b8b8b8;
  border-radius: 2px;
  height: 16px;
  width: 16px;
  background-color: transparent;
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export const LinkBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-direction: row-reverse;
`;
export const Hyperlink = styled.a`
  color: #8fc9f7;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const Routerlink = styled(Link)`
  color: #8fc9f7;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const CopyRights = styled.p`
  color: #ababab;
  font-size: 14px;
  text-align: center;
  margin-top: 60px;
`;

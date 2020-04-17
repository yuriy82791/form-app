import React, { useState, useRef } from "react";
import {
  Title,
  BlockWrapper,
  Wrapper,
  Form,
  LogoBlock,
  InputBlock,
  Routerlink,
  Hyperlink,
  Input,
  SubmitButton,
  CheckoxLabel,
  InputCheckbox,
  CheckboxSpan,
  CopyRights,
  LinkBlock,
} from "../styledComponents";

import { ReactComponent as Logo } from "../../assets/images/padlock.svg";
export default () => {
  const emailReg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
  const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const currentEmail = useRef();
  const currentPass = useRef();
  const [check, clickCheck] = useState(false);
  const [email, emailInput] = useState("");
  const [pass, passInput] = useState("");
  const [validEmail, setValidEmail] = useState(null);
  const [validPass, setValidPass] = useState(null);

  const inputValidate = (el, reg, setStatee) => {
    if (el.current) {
      if (el.current.value === "" || !reg.test(el.current.value)) {
        setStatee(false);
      } else {
        setStatee(true);
      }
    }
  };
  const checkBoxClick = (e) => {
    clickCheck(!check);
  };
  const validateField = (el, setInputState) => {
    setInputState(el.current.value);
    let reg;
    let temState;
    if (el.current.type === "email") {
      reg = emailReg;
      temState = setValidEmail;
    } else {
      reg = passReg;
      temState = setValidPass;
    }

    inputValidate(el, reg, temState);
  };
  const validateForm = () => {
    validateField(currentEmail, emailInput);
    validateField(currentPass, passInput);
    if (validEmail && validPass) {
      clickCheck(false);
      emailInput("");
      passInput("");
      setValidEmail(null);
      setValidPass(null);
    }
  };
  return (
    <BlockWrapper>
      <Wrapper>
        <LogoBlock>
          <Logo />
        </LogoBlock>
        <Title>Sign in</Title>
        <Form className="">
          <InputBlock>
            <Input
              type="email"
              className="input-field"
              value={email}
              name="email"
              ref={currentEmail}
              onChange={() => {
                validateField(currentEmail, emailInput);
              }}
              valid={validEmail}
              placeholder="Email Address*"
            />
          </InputBlock>
          <InputBlock>
            <Input
              type="password"
              className="input-field"
              value={pass}
              name="pass"
              ref={currentPass}
              onChange={() => {
                validateField(currentPass, passInput);
              }}
              valid={validPass}
              placeholder="Password*"
            />
          </InputBlock>
          <CheckoxLabel>
            Remember me
            <InputCheckbox
              name="isGoing"
              type="checkbox"
              checked={check}
              onChange={checkBoxClick}
            />
            <CheckboxSpan className="checkmark"></CheckboxSpan>
          </CheckoxLabel>
          <SubmitButton type="button" onClick={validateForm}>
            Sign In
          </SubmitButton>
        </Form>
        <LinkBlock>
          <Routerlink to="/form-app/registration">
            Dont have an account? Sign Up
          </Routerlink>
          <Hyperlink href="#">Forgot password?</Hyperlink>
        </LinkBlock>

        <CopyRights>Copyright &copy; Your Website 2020</CopyRights>
      </Wrapper>
    </BlockWrapper>
  );
};

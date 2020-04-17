import React, { useState, useRef } from "react";
import {
  Title,
  BlockWrapper,
  Wrapper,
  Form,
  LogoBlock,
  InputBlock,
  Routerlink,
  InputTwoColumns,
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
  const textReg = /^([a-zA-Z0-9_-]){3,}$/;
  const currentEmail = useRef();
  const currentPass = useRef();
  const currentName = useRef();
  const currentLastName = useRef();
  const [check, clickCheck] = useState(false);
  const [email, emailInput] = useState("");
  const [pass, passInput] = useState("");
  const [name, nameInput] = useState("");
  const [lastName, lastNameInput] = useState("");
  const [validEmail, setValidEmail] = useState(null);
  const [validPass, setValidPass] = useState(null);
  const [validName, setValidName] = useState(null);
  const [validLastName, setValidlastName] = useState(null);

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
    if (el.current.name === "email") {
      reg = emailReg;
      temState = setValidEmail;
    } else if (el.current.name === "pass") {
      reg = passReg;
      temState = setValidPass;
    } else if (el.current.name === "firstName") {
      reg = textReg;
      temState = setValidName;
    } else if (el.current.name === "lastName") {
      reg = textReg;
      temState = setValidlastName;
    }

    inputValidate(el, reg, temState);
  };
  const validateForm = () => {
    validateField(currentEmail, emailInput);
    validateField(currentPass, passInput);
    validateField(currentName, nameInput);
    validateField(currentLastName, lastNameInput);
    if (validEmail && validPass && validName && validLastName) {
      clickCheck(false);
      emailInput("");
      passInput("");
      nameInput("");
      lastNameInput("");
      setValidEmail(null);
      setValidPass(null);
      setValidName(null);
      setValidlastName(null);
    }
  };
  return (
    <BlockWrapper>
      <Wrapper>
        <LogoBlock>
          <Logo />
        </LogoBlock>
        <Title>Sign up</Title>
        <Form className="">
          <InputTwoColumns>
            <Input
              type="text"
              className="input-field"
              value={name}
              name="firstName"
              ref={currentName}
              onChange={() => {
                validateField(currentName, nameInput);
              }}
              valid={validName}
              placeholder="First Name*"
            />
            <Input
              type="text"
              className="input-field"
              value={lastName}
              name="lastName"
              ref={currentLastName}
              onChange={() => {
                validateField(currentLastName, lastNameInput);
              }}
              valid={validLastName}
              placeholder="Last Name*"
            />
          </InputTwoColumns>
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
            I want to receive inspiration, marketing promotions and updates via
            email.
            <InputCheckbox
              name="isGoing"
              type="checkbox"
              checked={check}
              onChange={checkBoxClick}
            />
            <CheckboxSpan className="checkmark"></CheckboxSpan>
          </CheckoxLabel>
          <SubmitButton type="button" onClick={validateForm}>
            Sign Up
          </SubmitButton>
        </Form>
        <LinkBlock>
          <Routerlink to="/form-app/">
            Already have an account? Sign In
          </Routerlink>
        </LinkBlock>

        <CopyRights>Copyright &copy; Your Website 2020</CopyRights>
      </Wrapper>
    </BlockWrapper>
  );
};

import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdSentimentSatisfied } from "react-icons/md";
import {
  Section,
  SectionTitle,
  SectionDivider,
  SectionText,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { sendemail, validateEmail } from "../../utilities";
import Loader from "../ui/Loader";
import { Error, FormInput, StyledForm, ContactDetails } from "./styles";
import { ListTitle } from "../Technologies/TechnologiesStyles";
import AnimatedSectionTitle from "../ui/AnimatedSectionTitle";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(true);

  const handleEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    sendemail(
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      () => {
        setLoading(false);
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 1500);
      }
    );
  };
  useEffect(() => {
    if (name && email && message && validateEmail(email)) {
      setError(false);
    } else {
      setError(true);
    }
  }, [name, email, message, validateEmail]);

  const validate = (prop) => {
    if (prop === "name") {
      if (name === "") {
        setNameError("Can I have your name please!!");
      } else {
        setNameError(false);
      }
    }
    if (prop === "message") {
      if (message === "") {
        setMessageError("your message to me?");
      } else {
        setMessageError(false);
      }
    }
    if (prop === "email") {
      if (email === "") {
        setEmailError("your email ?");
      } else if (!validateEmail(email)) {
        setEmailError("email is wrong");
      } else {
        setEmailError(false);
      }
    }
  };
  return (
    <Section id="contact">
      <AnimatedSectionTitle title="Contact me" />
      <br />
      <div className="d-flex flex-wrap">
        <div
          className="col-12 col-md-5"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <ContactDetails>
            <HiOutlineMail />
            <div>
              <ListTitle>Email</ListTitle>
              <p>vaadarsh5614@gmail.com</p>
            </div>
          </ContactDetails>
          <ContactDetails>
            <IoLocationOutline />
            <div>
              <ListTitle>Location</ListTitle>
              <p>New Delhi - India</p>
            </div>
          </ContactDetails>
        </div>
        <div
          className="col-12 col-md-7"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <StyledForm className="w-100">
            <div className="d-flex flex-wrap justify-content-between w-100">
              <FormInput className="col-12 col-md-6" name>
                <div className="input_wrapper">
                  <label>Name</label>
                  <input
                    type="text"
                    autocomplete="off"
                    placeholder=" "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => validate("name")}
                  />
                </div>
                {nameError && <Error>{nameError}</Error>}
              </FormInput>
              <FormInput className="col-12 col-md-6" email>
                <div className="input_wrapper">
                  <label for="email" class="form__label">
                    Email
                  </label>
                  <input
                    type="text"
                    autocomplete="off"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => validate("email")}
                  />
                </div>

                {emailError && <Error>{emailError}</Error>}
              </FormInput>
            </div>

            <FormInput>
              <div className="input_wrapper">
                <label for="email">Message</label>
                <textarea
                  rows={10}
                  type="text"
                  autocomplete="off"
                  placeholder=" "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => validate("message")}
                />
              </div>

              {messageError && <Error>{messageError}</Error>}
            </FormInput>
            <div className="d-flex mt-4">
              <Button
                alt
                type="button"
                className="center-content"
                onClick={handleEmail}
                disabled={error || loading || emailSent}
              >
                {loading && <p>Sending...</p>}
                {emailSent && (
                  <p>
                    {" "}
                    Sent <MdSentimentSatisfied size={22} />
                  </p>
                )}
                {!loading && !emailSent && (
                  <p>
                    Send <IoIosSend size={22} />
                  </p>
                )}
              </Button>
            </div>
          </StyledForm>
        </div>
      </div>
    </Section>
  );
}

export default Contact;

import emailjs from "emailjs-com";

export const sendemail = (
  data,
  onComplete,
  templateId = "template_u2kqtp9"
) => {
  emailjs
    .send(
      "service_00bi3im",
      templateId,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_USERID
    )
    .then(
      (result) => {
        if (onComplete) {
          onComplete();
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

import Head from "next/head";
import useMedia from "use-media";
import { emailRegex } from "../../../utils/validate";
import styles from "./registration.module.scss";
import Header from "../../../components/Header/Header.js";
import React, { useState, useEffect } from "react";
import {
  unstable_Form as Form,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import { useDialogState } from "reakit/Dialog";
import { unstable_useFormState as useFormState } from "reakit/Form";
import Card from "../../../components/Card/Card";
const Tickets = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Card>
          <h2>Level 1</h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                "This class is for you if you never danced blues or did one of our Taster classes.",
            }}
          />
        </Card>
      </div>
      <div>
        <Card>
          <h2>Level 2</h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                "This class is for you if </br> 1. You alread had our level 1 class OR </br> 2. You actively dance blues for more than 4 month",
            }}
          />
        </Card>
      </div>
    </div>
  );
};

const RegistrationForm = ({ form, data }) => {
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(65);
  const dialog = useDialogState();
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { tickets, levels, roles } = data;

  return (
    <Form className={styles.container} {...form}>
      <input
        required
        onBlur={() => () => form.validate()}
        label="First Name"
        defaultValue={form.values.firstName}
        variant="outlined"
        className={styles.input}
        onChange={(event) => {
          form.values.firstName = event.target.value;
        }}
        name="firstName"
        placeholder="first name"
      />
      <FormMessage className={styles.errorMessage} {...form} name="firstName" />
      <input
        required
        label="Last Name"
        variant="outlined"
        defaultValue={form.values.lastName}
        className={styles.input}
        onChange={(event) => {
          form.values.lastName = event.target.value;
        }}
        name="lastName"
        placeholder="last name"
      />
      <FormMessage className={styles.errorMessage} {...form} name="lastName" />
      <input
        required
        label="E-mail"
        variant="outlined"
        className={styles.input}
        defaultValue={form.values.email}
        onChange={(event) => {
          form.values.email = event.target.value;
        }}
        onBlur={() =>
          form.values.lastName && form.values.firstName && form.values.email
            ? setDisable(false)
            : (setDisable(true), form.validate())
        }
        name="email"
        placeholder="email"
      />
      <FormMessage className={styles.errorMessage} {...form} name="email" />
      <Tickets form={form} tickets={tickets} levels={levels} roles={roles} />
      <FormSubmitButton className={styles.button} {...form}>
        Register
      </FormSubmitButton>
    </Form>
  );
};

const Registration = () => {
  const isMobile = useMedia({ maxWidth: "768px" });
  const [step, setStep] = useState(1);
  const form = useFormState({
    values: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      ticket: "",
      level: "",
      competition: "",
      comps: [],
    },
    onValidate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "please write your name";
      }
      if (!values.lastName) {
        errors.lastName = "please write your name";
      }
      if (
        !values.email ||
        !emailRegex.test(values.email.trim().toLowerCase())
      ) {
        errors.email = "Email is not valid";
      }
      if (Object.keys(errors).length > 0) {
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // fetch("/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Cache-Control": "no-cache, no-store",
      //   },
      //   body: JSON.stringify(form.values),
      // })
      //   .then((response) => {
      //     if (response.ok !== true) {
      //       setStatus("sign up failed");
      //     }

      //     return response.json();
      //   })
      //   .then((json) => {
      //     if (json.register === true) {
      //       alert("And you are in!");
      //     } else {
      //       alert("What just happened? Please try again!");
      //     }
      //   })
      //   .catch((error) => console.log(error));
    },
  });
  const data = {
    tickets: ["Fullpass", "Partypass"],
    levels: ["Beginner", "Intermediate", "Advanced", "Advanced+"],
    competitions: ["MnM", "Strictly", "Solo"],
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>dance-pass</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header
        menuItems={[
          { title: "Home", link: "/" },
          { title: "Register", link: "#register" },
        ]}
      />
      <div className={styles.section}>
        <h2>Maybe some subtitle here!</h2>
        <RegistrationForm form={form} data={data} />
      </div>
    </div>
  );
};

export default Registration;

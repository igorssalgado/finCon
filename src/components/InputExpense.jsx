import React from "react";
import { Button, FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Field, Form, Formik } from "formik";

const InputExpense = (props) => {
  function placeHolder() {
    let name = props.currentExpenseName.split(/(?=[A-Z])/);

    return (
      "Add " +
      name[0].charAt(0).toUpperCase() +
      name[0].slice(1) +
      " " +
      name[1]
    );
  }

  function validateName(value) {
    let error;

    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  function validateAmount(value) {
    let error;

    if (!value) {
      error = "Amount is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ expenseName: "", amount: "" }}
      onSubmit={(values, actions) => {
        props.addExpense(values);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 250);
      }}
    >
      {(props) => (
        <Form>
          <Field name="expenseName" validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.expenseName && form.touched.expenseName}
              >
                <Input {...field} placeholder={placeHolder()} />
                <FormErrorMessage>{form.errors.expenseName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="amount" validate={validateAmount}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.amount && form.touched.amount}
              >
                <Input {...field} type="number" placeholder="Amount" />
                <FormErrorMessage>{form.errors.amount}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            <AddIcon />
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default InputExpense;

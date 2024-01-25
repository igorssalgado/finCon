import React from "react";
import { useSelector } from "react-redux";

import {
  Button,
  FormControl,
  Input,
  FormErrorMessage,
  PopoverBody,
  PopoverArrow,
  PopoverContent,
  Portal,
  PopoverTrigger,
  Popover,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Field, Form, Formik } from "formik";

const InputExpense = (props) => {
  const currentExpenseName = useSelector(
    (store) => store.CURRENTEXPENSENAME.currentExpenseName
  );

  function placeHolder() {
    let name = currentExpenseName.split(/(?=[A-Z])/);

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
    <>
      <Popover>
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <Button>{placeHolder()}</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <Formik
                    initialValues={{ expenseName: "", amount: "" }}
                    onSubmit={(values, actions) => {
                      props.addExpense(values);
                      setTimeout(() => {
                        actions.setSubmitting(false);
                        actions.resetForm();
                      }, 250);
                    }}
                  >
                    {(props) => (
                      <Form>
                        <Field name="expenseName" validate={validateName}>
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                form.errors.expenseName &&
                                form.touched.expenseName
                              }
                            >
                              <Input {...field} placeholder={placeHolder()} />
                              <FormErrorMessage>
                                {form.errors.expenseName}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="amount" validate={validateAmount}>
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                form.errors.amount && form.touched.amount
                              }
                            >
                              <Input
                                {...field}
                                type="number"
                                placeholder="Amount"
                              />
                              <FormErrorMessage>
                                {form.errors.amount}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Button
                          mt={4}
                          colorScheme="teal"
                          isLoading={props.isSubmitting}
                          onClick={onClose}
                          type="submit"
                        >
                          <AddIcon />
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    </>
  );
};

export default InputExpense;

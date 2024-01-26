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
import IncomeTable from "../IncomeTable/IncomeTable";

const UpdateIncome = (props) => {
  //   <Button
  //   onClick={() => props.AddIncome({ incomeName: "salario2", amount: 1 })}
  // >
  //   maoe
  // </Button>

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
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button>
              <AddIcon />
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <Formik
                  initialValues={{ incomeName: "", amount: "" }}
                  onSubmit={(values, actions) => {
                    props.AddIncome(values);
                    setTimeout(() => {
                      actions.setSubmitting(false);
                      actions.resetForm();
                    }, 250);
                  }}
                >
                  {(props) => (
                    <Form>
                      <Field name="incomeName" validate={validateName}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.incomeName && form.touched.incomeName
                            }
                          >
                            <Input {...field} placeholder={"placeholder"} />
                            <FormErrorMessage>
                              {form.errors.incomeName}
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
                <IncomeTable deleteIncome={props.deleteIncome} />
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
};

export default UpdateIncome;

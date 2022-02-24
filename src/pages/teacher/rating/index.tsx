import React, { useState } from 'react';
import type { NextPage } from '@hoomies/noak.types.next';
import useTranslation from 'next-translate/useTranslation';
import {
  Button,
  Code,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useFormik, Formik, Form, Field, FieldArray } from 'formik';
import { array, boolean, number, object, string, ValidationError } from 'yup';
import { result } from 'lodash';

const GradeForm = () => {
  const [result, setResult] = useState({});

  const defaultCaster = 10;

  const emptyGrade = {
    note: 0,
    total: 0,
  };

  const initialValues = {
    caster: defaultCaster,
    grades: [emptyGrade],
  };

  const schemaCaster = number().min(5, 'The caster must be >= 5').max(100).required();
  const schemaGrade = object({
    note: number().min(0, 'The note must be greater or equal to Zero').max(100).required(),
    total: number()
      .min(1, 'The total must be greater than Zero')
      .max(100, 'The total must be less or equal to 100')
      .required(),
  });

  const validationSchema = object({
    caster: schemaCaster,
    grades: array().of(schemaGrade),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log('my values', values);

          const response = await fetch('/api/teacher/rating', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log('response data', data);
              setResult(data);
            });

          return new Promise((res) => setTimeout(res, 1000));
        }}
      >
        {({ values, errors, isSubmitting, isValid }) => (
          <Form autoComplete="off">
            {/*<Field name="caster" component={Input} label="Caster" />*/}

            <Field name="caster" validate={schemaCaster}>
              {({ field, form }) => (
                <FormControl isInvalid={errors.caster != undefined}>
                  <FormLabel htmlFor="caster">Caster</FormLabel>
                  <Input {...field} id="caster" placeholder="caster" />
                  <FormErrorMessage>{errors.caster}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <FieldArray name="grades">
              {({ push, remove }) => (
                <Container>
                  <Text fontSize={'2xl'} as="h3">
                    Student Grades
                  </Text>

                  <VStack>
                    {values.grades.map((_, index) => (
                      <HStack key={index} alignItems="self-start">
                        <Field name={`grades[${index}].note`} validate={schemaGrade}>
                          {({ field, form }) => (
                            <FormControl isInvalid={errors.grades != undefined}>
                              <FormLabel htmlFor={`grades[${index}].note`}>Note</FormLabel>
                              <Input {...field} id={`grades[${index}].note`} placeholder="Note" w={100} />
                              <FormErrorMessage>
                                {/*<Code>{JSON.stringify(errors.grades, null, 4)}</Code>*/}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Text fontSize={'2xl'}>/</Text>
                        <Field name={`grades[${index}].total`} validate={schemaGrade}>
                          {({ field, form }) => (
                            <FormControl isInvalid={errors.grades != undefined}>
                              <FormLabel htmlFor={`grades[${index}].total`}>Total</FormLabel>
                              <Input {...field} id={`grades[${index}].total`} placeholder="Total" w={100} />
                              <FormErrorMessage>
                                {/*<Code>{JSON.stringify(errors.grades, null, 4)}</Code>*/}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </HStack>
                    ))}
                    <HStack>
                      <Button onClick={() => push({ ...emptyGrade })}>Add grade</Button>
                      <Button onClick={() => remove(values.grades.length - 1)}>Remove grade</Button>
                    </HStack>
                  </VStack>
                </Container>
              )}
            </FieldArray>

            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Convert ratings
            </Button>
            {/*<Code>{JSON.stringify({ values, errors }, null, 4)}</Code>*/}
          </Form>
        )}
      </Formik>

      <Container>
        <VStack>
          <Text fontSize={'2xl'} as="h1">
            Result
          </Text>
          {result?.input?.map((item, key) => {
            return (
              <Text fontSize={'2xl'} as="h2" key={key}>
                {item.note}/{item.total} => {result.output.total[key]} / {result.output.caster}
              </Text>
            );
          })}
          <Text fontSize={'2xl'} as="h2">
            TOTAL : {result.output.avg}
          </Text>
        </VStack>
      </Container>
    </>
  );
};

const Rating: NextPage = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <VStack spacing={10} align="stretch">
          <Text fontSize={'3xl'} as="h1">
            Rating Tool
          </Text>
          {<GradeForm />}
        </VStack>
      </Container>
    </>
  );
};

export default Rating;

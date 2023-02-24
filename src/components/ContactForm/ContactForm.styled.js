import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
gap: 16px;
margin: 30px;
padding: 10px;
width: 400px;
border: 1px solid black
`

export const FormField = styled.label`
display: flex;
gap:5px;
flex-direction: column;
width: 200px;
`

export const FormButton = styled.button`
width: 150px;
padding: 10px 15px;
`
import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    email: yup.string().email("Ponga un email valido").required("Completa este campo"),


})
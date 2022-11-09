export const mustBePassword = (value) => value.match(/^(?=.*[0-9!@#$%^&*()])(?=.*[A-Za-z])(?!.*[^0-9!@#$%^&*()A-Za-z]){6,18}/);
export const mustBeUsername = (value) => value.match(/^([\d]|[A-Z]|[a-z]){6,18}$/);

import { required, minLength, email, sameAs, and, or } from "@vuelidate/validators";

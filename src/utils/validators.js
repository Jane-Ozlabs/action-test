
export const mustBePassword = (value) => value.match(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&()*]).{6,18}/)

import { required, minLength, email, sameAs, and, or } from '@vuelidate/validators'

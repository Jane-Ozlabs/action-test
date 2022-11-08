export const mustBePassword = (value) =>
    value.match(/^(((?=.*[A-Za-z])(?=.*\d)[A-Za-z\d])|((?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&])|((?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&])){6,18}/);
export const mustBeUsername = (value) => value.match(/^([\d]|[A-Z]|[a-z]){6,18}$/);

import { required, minLength, email, sameAs, and, or } from "@vuelidate/validators";

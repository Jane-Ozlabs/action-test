// service/validation.js
export async function ValidOrError(v, title) {
  v.$touch();
  var validation = await v.$validate();
  console.log("ValidOrError", validation, UV(v));
  if(validation) return true;

  console.log("errors", v.$errors)
  for(const x of v.$errors) {
    console.log(x);
    store.commit("ERROR", { error: title || `${x.$property}`, message: `${x.$message}` });
    break;
  }
  return false;
}
import store from '@/store';

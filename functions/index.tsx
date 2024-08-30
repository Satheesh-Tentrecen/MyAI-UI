export const init_sign_up = {
  firstname: "",
  lastname: "",
  email_id: "",
  mobile_number: "",
  password: "",
};

export const init_login = {
  email_id: "",
  password: "",
};

export const check_req_feilds = (userData: { [key: string]: string }) => {
  if (
    userData.firstname &&
    userData.lastname &&
    userData.email_id &&
    userData.password &&
    userData.mobile_number
  ) {
    return true;
  } else {
    return false;
  }
};

export const login_formdata = (userData: { [key: string]: string }) => {
  const formData = new URLSearchParams();
  formData.append("email_id", userData.email_id);
  formData.append("password", userData.password);
  return formData;
};

export const signup_formdata = (userData: { [key: string]: string }) => {
  const formData = new URLSearchParams();
  formData.append("firstname", userData.firstname);
  formData.append("lastname", userData.lastname);
  formData.append("email_id", userData.email_id);
  formData.append("password", userData.password);
  formData.append("mobile_number", userData.mobile_number);
  return formData;
};

export const signout_formdata = (session_id: string) => {
  const formData = new URLSearchParams();
  formData.append("session_id", session_id);
  return formData;
};

export const file_formdata = (file: any) => {
  const formData = new FormData();
  const user_uuid = "4e216b58-fc19-4002-940e-56511dac4cb9"; //this will come from localStorage
  formData.append("uuid", user_uuid);
  formData.append("file", file);
  return formData;
};

export const setUserToLocal = (session_id: number) => {
  localStorage.setItem("isUserLoggedin", "true");
  localStorage.setItem("session_id", session_id.toString());
};

export const getUserToLocal = () => {
  return localStorage.getItem("isUserLoggedin");
};

export const removeUserToLocal = () => {
  return localStorage.removeItem("isUserLoggedin");
};

export const getSessionId = () => {
  return localStorage.getItem("session_id");
};

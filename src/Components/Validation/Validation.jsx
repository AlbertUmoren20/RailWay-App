export default function Validation(values) {
    const errors = {}

    const email_pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(!values.fullName) {
        errors.fullName = "Name is Required";
    } 
    else if (values.fullName.length < 5) {
        errors.fullName = "Full Name must be at least 5 characters long";
      }
    if(!values.email) {
        errors.email = "email is Required";
    }
    if(!email_pattern.test(values.email)) {
        errors.email = "Email is did not match";
    } 

    if(!values.password) {
        errors.password = "Password is Required";
    }
    if(!password_pattern.test(values.password)) {
        errors.password = "Password is did not match";
    } 
    return errors;
}
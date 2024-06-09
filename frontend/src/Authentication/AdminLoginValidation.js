function AdminLoginValidation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    // Allowed emails with their respective passwords
    const allowed_credentials = {
        "admin1@example.com": "Admin1Password",
        "admin2@example.com": "Admin2Password"
    };

    if (values.email === "") {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email format";
    } else if (!allowed_credentials[values.email]) {
        errors.email = " ";
    }

    if (values.password === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password did not match requirements";
    } else if (allowed_credentials[values.email] && allowed_credentials[values.email] !== values.password) {
        errors.password = " ";
    }

    return errors;
}

export default AdminLoginValidation;

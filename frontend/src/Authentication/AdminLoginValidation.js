function AdminLoginValidation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Allowed emails with their respective passwords
    const allowed_credentials = {
        "admin1@example.com": "Admin1Password!",
        "admin2@example.com": "Admin2Password!"
    };

    // Email validation
    if (!values.email) {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email format";
    } else if (!allowed_credentials[values.email]) {
        errors.email = "Email not authorized";
    }

    // Password validation
    if (!values.password) {
        errors.password = "Password should not be empty";
    } else if (allowed_credentials[values.email] && allowed_credentials[values.email] !== values.password) {
        errors.password = "Incorrect password";
    }

    return errors;
}

export default AdminLoginValidation;

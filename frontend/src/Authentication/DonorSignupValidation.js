function DonorSignUpValidation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const phone_pattern = /^\d{10}$/;

    // Username validation
    if (values.Username === "") {
        errors.Username = "Username should not be empty";
    } else {
        errors.Username = "";
    }

    // Age validation
    if (values.age === "") {
        errors.age = "Age should not be empty";
    } else if (isNaN(values.age) || values.age <= 0) {
        errors.age = "Invalid age";
    } else {
        errors.age = "";
    }

    // Blood Group validation
    if (values.bloodGroup === "") {
        errors.bloodGroup = "Blood Group should not be empty";
    } else {
        errors.bloodGroup = "";
    }

    // Address validation
    if (values.address === "") {
        errors.address = "Address should not be empty";
    } else {
        errors.address = "";
    }

    // Phone validation
    if (values.phone === "") {
        errors.phone = "Phone number should not be empty";
    } else if (!phone_pattern.test(values.phone)) {
        errors.phone = "Invalid phone number format";
    } else {
        errors.phone = "";
    }

    // Disease validation
    if (values.disease === "") {
        errors.disease = "Disease field should not be empty";
    } else {
        errors.disease = "";
    }

    // Email validation
    if (values.email === "") {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    // Password validation
    if (values.password === "") {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters long, include at least one number, one uppercase and one lowercase letter";
    } else {
        errors.password = "";
    }

    return errors;
}

export default DonorSignUpValidation;

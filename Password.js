function isPasswordValid(password) {
    // At least 8 characters
    if (password.length < 8) {
      return false;
    }
  
    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // At least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }
  
    // At least one digit
    if (!/[0-9]/.test(password)) {
      return false;
    }
  
    // At least one special character (e.g., !@#$%^&*)
    if (!/[!@#\$%^&*]/.test(password)) {
      return false;
    }
  
    // If all conditions pass, the password is valid
    return true;
  }
  
  // Example usage
  const password = "Strong#2023";
  if (isPasswordValid(password)) {
    console.log("Password is valid");
  } else {
    console.log("Password is invalid");
  }
  
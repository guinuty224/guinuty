function validatePhoneNumber(input) {
  if (typeof input !== "string") {
    return {
      isValid: false,
      reason: "L'entrée doit être une chaîne de caractères.",
    };
  }

  const trimmed = input.trim();
  if (!trimmed) {
    return {
      isValid: false,
      reason: "Le numéro de téléphone ne peut pas être vide.",
    };
  }

  // 1. Detect duplicate '+' prefixes (e.g. "+224+620000000" or "+224 +224 620000000")
  const plusCount = (trimmed.match(/\+/g) || []).length;
  if (plusCount > 1) {
    return {
      isValid: false,
      reason: "Le numéro contient plusieurs indicatifs de pays (+).",
    };
  }

  // 2. Extract country code digits vs remaining digits if '+' exists
  // Handles inputs like "+224 224 620000000" or "+224 0620000000"
  let sanitized = trimmed;

  if (trimmed.startsWith("+")) {
    // Separate '+' from numbers
    const rawDigits = trimmed.substring(1).trim();

    // Match common country code patterns (1 to 3 digits) at the start
    const match = rawDigits.match(/^(\d{1,3})\s*(.*)$/);
    if (match) {
      const countryCode = match[1];
      let restOfNumber = match[2].replace(/\D/g, ""); // strip non-digits

      // If user repeated the exact same country code in the text field
      if (restOfNumber.startsWith(countryCode)) {
        restOfNumber = restOfNumber.substring(countryCode.length);
      }

      // Remove redundant leading zero often entered after country code (e.g. +33 0612345678 -> +33 612345678)
      if (restOfNumber.startsWith("0")) {
        restOfNumber = restOfNumber.replace(/^0+/, "");
      }

      sanitized = `+${countryCode}${restOfNumber}`;
    }
  }

  // 3. Final digit extraction and length validation
  const digitsOnly = sanitized.replace(/\D/g, "");
  const hasPlusPrefix = sanitized.startsWith("+");
  const isValidLength = digitsOnly.length >= 7 && digitsOnly.length <= 15;

  if (isValidLength) {
    if (hasPlusPrefix) {
      return { isValid: true, value: `+${digitsOnly}` };
    }
    return {
      isValid: false,
      reason:
        'Le numéro de téléphone doit inclure un indicatif pays commençant par "+".',
    };
  }

  return {
    isValid: false,
    reason: "Numéro de téléphone invalide.",
  };
}

export default validatePhoneNumber;

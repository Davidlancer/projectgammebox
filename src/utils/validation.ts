export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface ValidationErrors {
  [key: string]: string;
}

export const validateField = (value: any, rules: ValidationRule): string | null => {
  if (rules.required && (!value || value.toString().trim() === '')) {
    return 'This field is required';
  }

  if (value && rules.minLength && value.toString().length < rules.minLength) {
    return `Must be at least ${rules.minLength} characters`;
  }

  if (value && rules.maxLength && value.toString().length > rules.maxLength) {
    return `Must be no more than ${rules.maxLength} characters`;
  }

  if (value && rules.pattern && !rules.pattern.test(value.toString())) {
    return 'Invalid format';
  }

  if (value && rules.custom) {
    return rules.custom(value);
  }

  return null;
};

export const validateForm = (data: any, rules: ValidationRules): ValidationErrors => {
  const errors: ValidationErrors = {};

  Object.keys(rules).forEach(field => {
    const error = validateField(data[field], rules[field]);
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};

// Common validation patterns
export const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  gamerTag: /^[a-zA-Z0-9_-]{3,20}$/,
  codmId: /^[a-zA-Z0-9_]{6,20}$/,
  fifaId: /^[a-zA-Z0-9_-]{3,20}$/,
  apexId: /^[a-zA-Z0-9_-]{3,20}$/
};

// Common validation rules
export const commonRules = {
  email: {
    required: true,
    pattern: patterns.email
  },
  password: {
    required: true,
    minLength: 8
  },
  gamerTag: {
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: patterns.gamerTag
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  phone: {
    pattern: patterns.phone
  },
  codmId: {
    pattern: patterns.codmId
  },
  fifaId: {
    pattern: patterns.fifaId
  },
  apexId: {
    pattern: patterns.apexId
  }
};

// File validation
export const validateFile = (file: File, maxSizeMB: number = 5, allowedTypes: string[] = ['image/jpeg', 'image/png', 'application/pdf']): string | null => {
  if (!file) {
    return 'Please select a file';
  }

  if (!allowedTypes.includes(file.type)) {
    return `File type not allowed. Allowed types: ${allowedTypes.join(', ')}`;
  }

  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return `File size must be less than ${maxSizeMB}MB`;
  }

  return null;
};

// Team validation
export const validateTeamSize = (members: string[], requiredSize: number): string | null => {
  const validMembers = members.filter(member => member.trim() !== '');
  
  if (validMembers.length !== requiredSize) {
    return `Team must have exactly ${requiredSize} members`;
  }

  const uniqueMembers = new Set(validMembers.map(member => member.toLowerCase().trim()));
  if (uniqueMembers.size !== validMembers.length) {
    return 'Team members must have unique names';
  }

  return null;
};
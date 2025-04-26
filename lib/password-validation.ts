export interface PasswordStrength {
  isStrong: boolean
  score: number // 0-4, 0 being very weak, 4 being very strong
  feedback: {
    warning: string
    suggestions: string[]
  }
}

export function validatePassword(password: string): PasswordStrength {
  if (!password) {
    return {
      isStrong: false,
      score: 0,
      feedback: {
        warning: "Password is required",
        suggestions: ["Please enter a password"],
      },
    }
  }

  // Check length
  const hasMinLength = password.length >= 8

  // Check for uppercase, lowercase, numbers, and special characters
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumbers = /[0-9]/.test(password)
  const hasSpecialChars = /[^A-Za-z0-9]/.test(password)

  // Calculate score (0-4)
  let score = 0
  if (hasMinLength) score++
  if (hasUppercase) score++
  if (hasLowercase) score++
  if (hasNumbers) score++
  if (hasSpecialChars) score++

  // Adjust score based on length
  if (password.length > 12) score = Math.min(score + 1, 4)

  // Check for common patterns
  const hasRepeatedChars = /(.)\1{2,}/.test(password) // e.g., 'aaa'
  const hasSequentialChars =
    /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(
      password,
    )
  const hasCommonWords = /(password|admin|user|login|welcome|123456|qwerty)/i.test(password)

  if (hasRepeatedChars) score = Math.max(score - 1, 0)
  if (hasSequentialChars) score = Math.max(score - 1, 0)
  if (hasCommonWords) score = Math.max(score - 2, 0)

  // Generate feedback
  const warnings: string[] = []
  const suggestions: string[] = []

  if (!hasMinLength) {
    warnings.push("Password is too short")
    suggestions.push("Use at least 8 characters")
  }

  if (!hasUppercase) {
    suggestions.push("Add uppercase letters")
  }

  if (!hasLowercase) {
    suggestions.push("Add lowercase letters")
  }

  if (!hasNumbers) {
    suggestions.push("Add numbers")
  }

  if (!hasSpecialChars) {
    suggestions.push("Add special characters (!@#$%^&*)")
  }

  if (hasRepeatedChars) {
    warnings.push("Password contains repeated characters")
    suggestions.push('Avoid repeating characters (e.g., "aaa")')
  }

  if (hasSequentialChars) {
    warnings.push("Password contains sequential characters")
    suggestions.push('Avoid sequential characters (e.g., "abc", "123")')
  }

  if (hasCommonWords) {
    warnings.push("Password contains common words")
    suggestions.push('Avoid common words like "password" or "admin"')
  }

  // Determine if password is strong enough
  const isStrong = score >= 3 && hasMinLength && (hasUppercase || hasLowercase) && (hasNumbers || hasSpecialChars)

  return {
    isStrong,
    score,
    feedback: {
      warning: warnings.length > 0 ? warnings[0] : "",
      suggestions,
    },
  }
}

export function getPasswordStrengthLabel(score: number): string {
  switch (score) {
    case 0:
      return "Very Weak"
    case 1:
      return "Weak"
    case 2:
      return "Fair"
    case 3:
      return "Good"
    case 4:
      return "Strong"
    default:
      return "Unknown"
  }
}

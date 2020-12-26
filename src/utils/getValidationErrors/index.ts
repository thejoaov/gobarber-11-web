import { ValidationError } from 'yup'
import { Errors } from './types'

export default function getValidationErrors(err: ValidationError): Errors {
  const ValidationErrors: Errors = {}

  err.inner.forEach(error => {
    ValidationErrors[error.path] = error.message
  })

  return ValidationErrors
}

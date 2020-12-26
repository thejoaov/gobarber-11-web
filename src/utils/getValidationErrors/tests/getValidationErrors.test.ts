import getValidationErrors from '..'

const mockErrorValidation = {
  name: 'ValidationError',
  value: { email: 'test@test', password: 'test' },
  errors: ['error_valid_email', 'error_min_password'],
  inner: [
    {
      name: 'ValidationError',
      value: 'test@test',
      path: 'email',
      type: 'email',
      errors: ['error_valid_email'],
      inner: [],
      message: 'error_valid_email',
      params: { path: 'email', value: 'test@test', originalValue: 'test@test', regex: {} },
    },
    {
      name: 'ValidationError',
      value: 'test',
      path: 'password',
      type: 'min',
      errors: ['error_min_password'],
      inner: [],
      message: 'error_min_password',
      params: { path: 'password', value: 'test', originalValue: 'test', min: 6 },
    },
  ],
  message: '2 errors occurred',
}

const mockErrorRequired = {
  name: 'ValidationError',
  value: { email: '', password: '' },
  errors: ['error_required_email', 'error_min_password', 'error_required_password'],
  inner: [
    {
      name: 'ValidationError',
      value: '',
      path: 'email',
      type: 'required',
      errors: ['error_required_email'],
      inner: [],
      message: 'error_required_email',
      params: { path: 'email', value: '', originalValue: '' },
    },
    {
      name: 'ValidationError',
      value: '',
      path: 'password',
      type: 'min',
      errors: ['error_min_password'],
      inner: [],
      message: 'error_min_password',
      params: { path: 'password', value: '', originalValue: '', min: 6 },
    },
    {
      name: 'ValidationError',
      value: '',
      path: 'password',
      type: 'required',
      errors: ['error_required_password'],
      inner: [],
      message: 'error_required_password',
      params: { path: 'password', value: '', originalValue: '' },
    },
  ],
  message: '3 errors occurred',
}

describe('getValidationErrors test suite', () => {
  it('should return correct validation error', () => {
    const validationError = getValidationErrors(mockErrorValidation)

    expect(validationError).toBeTruthy()
    expect(validationError).toEqual({ email: 'error_valid_email', password: 'error_min_password' })
  })

  it('should return correct required error', () => {
    const requiredError = getValidationErrors(mockErrorRequired)

    expect(requiredError).toBeTruthy()
    expect(requiredError).toEqual({ email: 'error_required_email', password: 'error_required_password' })
  })
})

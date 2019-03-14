/* tslint:disable no-invalid-template-strings */

/*
 * English - EN, GB
 */

const defaultErr = '${path} is not valid'
const required = '${path is required'
const oneOf = '${path} must be one of the following values: ${values}'
const notOneOf = '${path} must not be one of the following values: ${values}'

const string = {
  email: '${path} must be a valid email',
  length: '${path} must be exactly ${length} characters',
  lowercase: '${path} must be a lowercase string',
  matches: '${path} must match the following: "${regex}"',
  max: '${path} must be at most ${max} characters',
  min: '${path} must be at least ${min} characters',
  trim: '${path} must be a trimmed string',
  uppercase: '${path} must be a upper case string',
  url: '${path} must be a valid URL'
}

const number = {
  integer: '${path} must be an integer',
  lessThan: '${path} must be less than ${less}',
  max: '${path} must be less than or equal to ${max}',
  min: '${path} must be greater than or equal to ${min}',
  moreThan: '${path} must be greater than ${more}',
  negative: '${path} must be a negative number',
  notEqual: '${path} must be not equal to ${notEqual}',
  positive: '${path} must be a positive number'
}

const date = {
  max: '${path} field must be at earlier than ${max}',
  min: '${path} field must be later than ${min}'
}

const object = {
  noUnknown: '${path} field cannot have keys not specified in the object shape'
}

const array = {
  max: '${path} field must have less than or equal to ${max} items',
  min: '${path} field must have at least ${min} items'
}

const en_GB = {
  array,
  date,
  number,
  object,
  string,
  // tslint:disable-next-line: object-literal-sort-keys
  mixed: {
    notOneOf,
    oneOf,
    required,
    // tslint:disable-next-line: object-literal-sort-keys
    default: defaultErr
  }
}

export default en_GB

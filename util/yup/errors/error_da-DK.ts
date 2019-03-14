/* tslint:disable no-invalid-template-strings */

/*
 * DANISH - DA, DK
 */

const defaultErr = '${path} er ikke gyldig'
const required = '${path er påkrævet'
const oneOf = '${path} skal have én af de følgende værdier: ${values}'
const notOneOf = '${path} må ikke have nogen af de følgende værdier: ${values}'

const string = {
  email: '${path} er ikke en gyldig email',
  length: '${path} skal have præcis ${length} karkaterer',
  lowercase: '${path} må ikke have store(uppercase) bogstaver',
  matches: '${path} skal matche: "${regex}"',
  max: '${path} kan højest være ${max} characters',
  min: '${path} skal være mindst ${min} characters',
  trim: "${path} skal være en 'trimmed string'",
  uppercase: '${path} må ikke have små(lowercase) bogstaver',
  url: '${path} er ikke en gyldig URL'
}

const number = {
  integer: '${path} skal være et tal (integer',
  lessThan: '${path} skal være mindre end ${less}',
  max: '${path} skal være mindre end eller lig ${max}',
  min: '${path} skal være større end eller lig ${min}',
  moreThan: '${path} skal være større end ${more}',
  negative: '${path} skal være et negativt nummer',
  notEqual: '${path} må ikke være lig ${notEqual}',
  positive: '${path} skal være et positivt nummber'
}

const date = {
  max: '${path} må ikke være før ${max}',
  min: '${path} må ikke være efter ${min}'
}

const object = {
  noUnknown: '${path} field cannot have keys not specified in the object shape'
}

const array = {
  max: '${path} kan kun indeholde op til ${max} artikler',
  min: '${path} skal indeholde mindst ${min} artikler'
}

const da_DK = {
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

export default da_DK

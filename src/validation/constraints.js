export const constraints = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
  },
  first_name: {
    presence: true,
    format: {
      pattern: /^[a-zA-Z]+$/
    }
  },
  last_name: {
    presence: true,
    format: {
      pattern: /^[a-zA-Z]+$/
    }
  },
  birthday: {
    presence: true
  },
  gender: {
    presence: true
  },
  occupation: {
    presence: true,
    format: {
      pattern: /^[a-zA-Z]+$/
    }
  },
  phone_number: {
    presence: true
  },
  bio: {
    presence: true
  }
};

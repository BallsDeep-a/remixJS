export const usernameConstraint = {
  presence: true,
  length: {
    minimum: 3,
    maximum: 16,
    tooShort: " cant be shorter than 3 characters",
    tooLong: " cant be longer than 16 characters",
  },
};

export const passwordConstraint = {
  presence: true,
  length: {
    minimum: 6,
    tooShort: " cant be shorter than 6 characters",
  },
};

export const emailConstraint = {
  email: {
    message: "is not valid",
  },
};

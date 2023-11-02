export const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

export const isValidEmail = (value: string) => EMAIL_REGEX.test(value);

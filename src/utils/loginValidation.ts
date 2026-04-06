export type LoginFieldErrors = {
  email: string;
  password: string;
};

const emptyErrors = (): LoginFieldErrors => ({
  email: "",
  password: "",
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmailRequired(email: string): string {
  const trimmed = email.trim();
  if (!trimmed) {
    return "Informe o e-mail.";
  }
  if (!EMAIL_REGEX.test(trimmed)) {
    return "E-mail inválido.";
  }
  return "";
}

export function validatePasswordRequired(password: string): string {
  if (!password) {
    return "Informe a senha.";
  }
  return "";
}

export type LoginValidationResult = {
  ok: boolean;
  errors: LoginFieldErrors;
};

export function validateLoginForm(input: {
  email: string;
  password: string;
}): LoginValidationResult {
  const errors = emptyErrors();
  errors.email = validateEmailRequired(input.email);
  errors.password = validatePasswordRequired(input.password);
  const ok = !errors.email && !errors.password;
  return { ok, errors };
}

export function isLoginFormValid(email: string, password: string): boolean {
  const e = email.trim();
  return !!e && EMAIL_REGEX.test(e) && password.length > 0;
}

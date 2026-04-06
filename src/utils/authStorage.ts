const AUTH_KEY = "auth";

export type AuthPayload = {
  logged: boolean;
};

export function saveAuthSession(payload: AuthPayload): void {
  localStorage.setItem(AUTH_KEY, JSON.stringify(payload));
}

export function readAuthSession(): AuthPayload | null {
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) {
    return null;
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      "logged" in parsed &&
      typeof (parsed as AuthPayload).logged === "boolean"
    ) {
      return parsed as AuthPayload;
    }
    return null;
  } catch {
    return null;
  }
}

export function clearAuthSession(): void {
  localStorage.removeItem(AUTH_KEY);
}

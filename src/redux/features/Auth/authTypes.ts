// authTypes.ts

export interface LoginPayload {
  username: string;
  password: string;
}

// Response from login API
export interface LoginResponse {
  username: string;
  role: string;
  accessToken: string;
}

// Redux slice state
export interface AdminAuth {
  username: string;
  accessToken: string;
  isLoggedIn: boolean;
  role: string;
  loading: boolean;
  error: string | null;
}

export type LoginForm = {
  email: string
  password: string
}

export type User = {
  firstName: string;
  lastName: string;
}

/*------------------------------------userContext-------------------------------*/
export enum LoginStatus {
  Unknown = 'Unknown',
  LoggedIn = 'Logged In',
  LoggedOut = 'Logged Out',
  SigningUp = 'Singing Up',
}

export type UserType = {
  id: string;
  roleId: number;
  roleName: string;
  courseId: number;
  courseName: string;
  firstName: string;
  lastName: string;
  email: string;
  postalCode: string;
  phone: string;
  profilePhoto?: string;
  provider?: string;
  avatarURL: string;
};

export type FirebaseAccount = {
  uid: string;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  providerData?: Array<ProviderData>;
};

export type ProviderData = {
  providerId: string;
};

export type UserContextProps = {
  user: UserType | null;
  setUser: (userStatus: UserType | null) => void;
  firebaseAccount: FirebaseAccount | null;
  setFirebaseAccount: (firebaseAccount: FirebaseAccount | null) => void;
  loginStatus: LoginStatus;
  setLoginStatus: (loginStatus: LoginStatus) => void;
};
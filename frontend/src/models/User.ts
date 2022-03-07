export default interface User {
    name: string;
    email: string;
    mobilePhone?: string
    password?: string;
    newPassword?: string;
    newPasswordConfirmation?: string;
    avatar?: string;
    birthDate?: string;
    gender?: 'm'|'f';
    student?: boolean;
    state?: number;
    city?: number;
}
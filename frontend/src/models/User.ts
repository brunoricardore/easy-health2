export default interface User {
    name: string;
    email: string;
    password?: string;
    new_password?: string;
    new_password_confirmation?: string;
    avatar?: string;
    birth_date?: string;
}
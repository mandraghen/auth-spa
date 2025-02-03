import { login } from '@/actions/login-actions';

export const OIDCLogin = () => {
    return (
        <form action={login} className="flex flex-col gap-4">
            <button type="submit">Login</button>
        </form>
    );
};

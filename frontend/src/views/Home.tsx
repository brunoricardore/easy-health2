import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/easy_health_logo_vertical_black.svg';
import bg from '../assets/images/login-bg.svg';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CenteredContent } from '../components/ConteredContent';
import { Input } from '../components/Input';
import User from '../models/User';




const LoginBox = styled(Card)`

    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    form {
        width: 100%;
    }

    .forget-password {
        font-family: 'Noto Sans Display', sans-serif;
        color: #82848d;
        text-decoration: underline;
        font-size: 12px;
        font-weight: 400;
        margin-top: 15px;
    }

    .create-account {
        color: #82848d;
        font-size: 13px;
        font-family: 'Noto Sans Display', sans-serif;
        margin-top: 15px;

        a {
            text-decoration: underline;
            font-size: 12px;
            font-weight: 600;
            margin-top: 10px;
            color: #c1ab60;
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        justify-content: center;
    }

`;

const LoginContainer = styled(CenteredContent)`
    background: url(${bg}) center/cover no-repeat ;
`;

const Home: React.FC = () => {

    const { handleSubmit, control, formState: { errors } } = useForm<Partial<User>>(

    );

    const login = (data: Partial<User>) => console.log(data, errors);

    return (
        <LoginContainer>
            <LoginBox>
                <img width={170} src={logo} alt="Easy Health Logo" />

                <form noValidate onSubmit={handleSubmit(login)}>

                    <Input inputError={errors.email} rules={{ required: true, pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail incorreto' } }} name='email' control={control} autoComplete='off' required type='email' label='E-mail' />
                    <Input inputError={errors.password} rules={{ required: true }} name='password' control={control} required type='password' label='Senha' />

                    <Button type='submit' variant='primary' >
                        Fazer Login
                    </Button>

                </form>

                <Link className='forget-password' to="/recover-password">Esqueceu a senha?</Link>

                <div className='create-account'>
                    Ainda não possui uma conta? <Link to="/register">Crie já, grátis!</Link>
                </div>

            </LoginBox>
        </LoginContainer>
    )
};

export default Home;
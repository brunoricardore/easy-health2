import { CenteredContent } from '../components/ConteredContent';
import { Card } from '../components/Card';

import logo from '../assets/images/easy_health_logo_vertical_black.svg';
import { Input } from '../components/Input';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import User from '../models/User';
import styled from 'styled-components';


import bg from '../assets/images/login-bg.svg';
import { Button } from '../components/Button';
import { useForm } from 'react-hook-form';

const LoginBox = styled(Card)`

    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;

    form {
        width: 100%;
    }

`;

const LoginContainer = styled(CenteredContent)`
    background: url(${bg}) center/cover no-repeat ;
`;

export const Home: React.FC = () => {

    const { register, handleSubmit, control, formState: {errors} } = useForm<Partial<User>>(
        
    );

    const login = (data) => console.log(data, errors);

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

            </LoginBox>
        </LoginContainer>
    )
};
import { CenteredContent } from '../components/ConteredContent';
import { Card } from '../components/Card';

import logo from '../assets/images/easy_health_logo_vertical_black.svg';
import { Input } from '../components/Input';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import User from '../models/User';

export const Home: React.FC = () => {

    let [user, setUser] = useState<Partial<User>>();

    const handleInputChange = (value: ChangeEvent, ey: keyof User) => {
        console.log('value');
        console.log(value.target);
        
    }

    return (
        <CenteredContent>
            <Card>
                <img width={170} src={logo} alt="Easy Health Logo" />
                <Input onChange={(e) => handleInputChange(e, 'email')} label='E-mail' />
                <Input onChange={(e) => handleInputChange(e, 'password')} label='Senha' />
            </Card>
        </CenteredContent>
    )
};
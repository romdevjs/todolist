import { ChangeEvent, FC, useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { NavLink } from 'react-router-dom';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value);
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (email && password) {
      console.log(email);
      console.log(password);
    }
  }

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={submitHandler}>
        <h3 className="auth__form-title">signin</h3>
        <div className="auth__form-fields">
          <Input
            value={email}
            onChange={changeEmail}
            type="email"
            placeholder="Email"
            color="primary"
            className="auth__form-input"
          />
          <Input
            value={password}
            onChange={changePassword}
            type="password"
            placeholder="Password"
            color="primary"
            className="auth__form-input"
          />
        </div>
        <Button text="Enter" color="primary" className="auth__form-btn"/>
        <NavLink to={'/'} className="auth__form-link">Don't have an account?</NavLink>
      </form>
    </div>
  )
}
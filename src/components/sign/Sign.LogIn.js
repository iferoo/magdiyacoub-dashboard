import { React, useState } from 'react';

import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export default function LogIn() {
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState(false);

  const hasEmailError = () => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        getValues('user.username')
      )
    ) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
  };

  const {
    register,
    handleSubmit,
    getValues,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      user: {
        username: '',
        password: '',
      },
    },
  });

  const onSubmit = data => {};
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ width: '100%' }}>
        <input
          type="text"
          placeholder="username"
          onChangeCapture={() => hasEmailError()}
          onClick={() => hasEmailError()}
          {...register('user.username', {
            required: true /*pattern: /^\S+@\S+$/i*/,
          })}
        />
        <EmailAlert style={{ display: `${usernameError ? 'block' : 'none'}` }}>
          Enter a valid username
        </EmailAlert>
      </div>
      <input
        type="password"
        placeholder="password"
        {...register('user.password', {})}
      />

      <input
        type="submit"
        className="submit"
        value="login"
        onClick={() => {
          navigate('/');
        }}
      />

      <div className="links">
        <LoginNotification style={{ display: `block` }}>
          Your username and/or password are incorrect
        </LoginNotification>
        <div className="or">
          <div />
          <p>OR</p>
          <div />
        </div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgetpassword">Forget Password!</Link>
      </div>
    </form>
  );
}
const LoginNotification = styled.div`
  background-color: var(--red);
  border-radius: 4px;
  padding: 0.5rem;
  color: white;
  width: 100%;
  font-size: 1rem;
  text-align: center;
`;
const EmailAlert = styled.p`
  color: var(--red);
  margin-top: 5px;
  font-size: 1rem;
`;

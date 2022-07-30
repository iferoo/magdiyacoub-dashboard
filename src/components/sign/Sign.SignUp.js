import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export default function SignUp() {
  const [signupError, setSignupError] = useState(false);

  const {
    register,
    handleSubmit,
    // setValue,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
      },
    },
  });

  const onSubmit = data => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="first name"
        {...register('user.firstName', {})}
      />
      <input
        type="text"
        placeholder="last name"
        {...register('user.lastName', {})}
      />
      <input
        type="text"
        placeholder="username"
        {...register('user.username', {})}
      />
      <input
        type="email"
        placeholder="email"
        {...register('user.email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="password"
        {...register('user.password', {})}
      />
      <input type="submit" className="submit" value="Sign Up" />
      <div className="links">
        <LoginNotification
          style={{ display: `${signupError ? 'block' : 'none'}` }}
        >
          This username is already exist.
        </LoginNotification>
        <div className="or">
          <div />
          <p>OR</p>
          <div />
        </div>
        <Link to="/login">Login</Link>
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

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

import { LoginNotification } from '../../styles/Sign.styled';
import { signUp } from '../../store/authSlice';
import { useSelector } from 'react-redux';

export default function SignUp() {
  const navigate = useNavigate();
  const [dispatch] = useOutletContext();
  const [signupError, setSignupError] = useState(true);
  const { token, error } = useSelector(state => state.auth);

  const { register, handleSubmit } = useForm({
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

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      navigate('/patients');
    }
  }, [token, error]);

  const onSubmit = data => {
    dispatch(signUp(data.user));
  };

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
        <LoginNotification hidden={signupError}>
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

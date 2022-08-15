import { React, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { useNavigate, Link, useOutletContext } from 'react-router-dom';

import { EmailAlert, LoginNotification } from '../../styles/Sign.styled';
import { useSelector } from 'react-redux';
import { logIn } from '../../store/authSlice';

export default function LogIn() {
  const navigate = useNavigate();
  const [dispatch] = useOutletContext();
  const [loginError, setLoginError] = useState(true);
  const [usernameError, setUsernameError] = useState(false);
  const { token, error } = useSelector(state => state.auth);

  const hasEmailError = username => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        username
      )
    ) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      navigate('/patients');
    }
    setLoginError(error);
  }, [token, error]);

  const {
    register,
    handleSubmit,
    // getValues,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      user: {
        username: '',
        password: '',
      },
    },
  });

  const onSubmit = data => {
    dispatch(logIn(data.user));
  };
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ width: '100%' }}>
        <input
          type="text"
          placeholder="username"
          onChangeCapture={event => hasEmailError(event.target.value)}
          // onClick={() => hasEmailError()}
          {...register('user.username', {
            required: true,
          })}
        />
        <EmailAlert hidden={!usernameError}>Enter a valid username</EmailAlert>
      </div>
      <input
        type="password"
        placeholder="password"
        {...register('user.password', {})}
      />

      <input type="submit" className="submit" value="login" />

      <div className="links">
        <LoginNotification
          // style={{ display: `${loginError ? 'block' : 'none'}` }}
          hidden={loginError}
        >
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

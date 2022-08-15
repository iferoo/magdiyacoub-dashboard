import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      navigate('/patients');
    }
  }, [token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="email"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input type="submit" className="submit" value="Reset Password" />
    </form>
  );
}

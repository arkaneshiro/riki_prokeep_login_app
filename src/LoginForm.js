import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './LoginForm.module.css'

function LoginForm({...test_func}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState(' ');

  return (
    <div className={styles.card}>
      <form
        name='form'
        className={styles.form}
        onSubmit={handleSubmit(async (data) => {
          try {
            const body = JSON.stringify({email: data.email, password: data.password})
            const res = await fetch('https://reqres.in/api/login', {
              method: "POST",
              body,
              headers: {
                "Content-Type": "application/json"
              }
            });
            if (!res.ok) throw res;
            const resData = await res.json();
            // test_func()
            setSuccessMessage(`logged in with token ${resData.token}`)
          } catch (err) {
            const errorData = await err.json()
            console.error(errorData)
          }

        })}
      >
        <label htmlFor="email">email:</label>
        <input id='email' {...register("email", {
          required: 'You must enter an email',
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'you must enter a valid email'
          }})}
        />
        {errors.email && <div id='emailError' className={styles.error}>{errors.email.message}</div>}

        <label htmlFor="password">password:</label>
        <input id='password' {...register("password",
          {required: 'You must enter a password'})}
        />
        {errors.password && <div id='passwordError' className={styles.error}>{errors.password.message}</div>}

        <input type="submit"/>
      </form>
      <div className={styles.success} title='success'>{successMessage}</div>
    </div>
  );
}

export default LoginForm;

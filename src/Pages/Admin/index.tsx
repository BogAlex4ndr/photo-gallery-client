import React from 'react';
import AddPost from '../../components/AddPost';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fechAuthMe, fetchUserData, selectIsAuth } from '../../redux/slices/auth';
import styles from './Admin.module.scss';
import Header from '../../components/Header';

type FormData = {
  email: string;
  password: string;
};

const Admin = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fechAuthMe());
  }, []);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const onSubmit = async (values: any) => {
    const data = await dispatch(fetchUserData(values));
    if (!data.payload) {
      return alert('some problem here');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  console.log('auth', isAuth);
  return (
    <>
      <Header />
      {!window.localStorage.getItem('token') && !isAuth ? (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p>email</p>
            <input
              aria-label='E-mail'
              autoComplete='off'
              type='email'
              placeholder={errors.email?.message}
              {...register('email', { required: 'enter email' })}></input>
          </div>
          <div>
            <p>password</p>
            <input
              type='password'
              aria-label='Password'
              autoComplete='off'
              placeholder={errors.password?.message}
              {...register('password', { required: 'password' })}></input>
          </div>
          <button className={styles.button} type='submit'>
            Enter
          </button>
        </form>
      ) : (
        <AddPost />
      )}
    </>
  );
};

export default Admin;

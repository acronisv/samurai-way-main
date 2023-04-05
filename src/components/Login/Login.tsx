import React from 'react';
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import s from './Login.module.css'
import Button from '@mui/material/Button';
import {loginValidation, passwordValidation} from "../../utils/validators/validation";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type Inputs = {
    login: string,
    password: string,
    remember: boolean,
    // customError: string
};

export const Login = () => {
    const dispatch = useDispatch()
    const stopSubmit = useSelector<AppStateType>(state => state.auth.submitStopped)
    const stopSubmitMessage = useSelector<AppStateType, string>(state => state.auth.stopSubmitMessage)
    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
    const {handleSubmit, control, reset, formState: {errors}} = useForm<Inputs>({
        mode: "onBlur"
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        dispatch(loginTC(data.login, data.password, data.remember))
        reset()
    }

    if (isAuth) {
        return <Redirect to={'/Profile/'}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="login">Login</label>
                <Controller
                    render={({field}) => (
                        <Input {...field}
                               name='login'
                               error={!!errors.login}
                        />)}
                    name="login"
                    control={control}
                    defaultValue=""
                    rules={loginValidation}
                />
                {errors.login &&
                    <span className={s.error_message}>{errors.login.message || 'This field is required'}</span>}
                <label htmlFor="password">Password </label>
                <Controller
                    render={({field}) => <Input {...field} type='password' error={!!errors.password}/>}
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={passwordValidation}
                />
                {errors.password &&
                    <span className={s.error_message}>{errors.password.message || 'This field is required'}</span>}
                <label htmlFor="remember">Remember me
                    <Controller
                        name="remember"
                        control={control}
                        defaultValue={false}
                        render={({field}) => <Checkbox {...field} />}
                    />
                </label>
                {stopSubmit && <span className={s.error_message}>{stopSubmitMessage}</span>}
                <Button type="submit" variant="contained">Sign in</Button>
                {/*<Button type="submit" variant="contained" onClick={() => {*/}
                {/*    stopSubmit &&*/}
                {/*    setError(*/}
                {/*        'customError',*/}
                {/*        {*/}
                {/*            type: 'custom', message: 'Something goes wrong'*/}
                {/*        },*/}
                {/*        {shouldFocus: true}*/}
                {/*    )*/}
                {/*}}>Sign in</Button>*/}
                {/*{errors.customError &&*/}
                {/*    <span className={s.error_message}>{errors.customError.message}</span>}*/}
            </form>
        </div>
    );
};

import React from 'react';
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import s from './Login.module.css'
import Button from '@mui/material/Button';

type Inputs = {
    login: string,
    password: string,
    remember: boolean
};

export const Login = () => {
    const {handleSubmit, control, reset, formState: {errors}} = useForm<Inputs>({
        mode: "onBlur"
    });
    const rules = {
        required: true,
        minLength: {
            value: 3,
            message: 'Login is too short'
        }
    }
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        reset()
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
                    rules={rules}
                />
                {errors.login &&
                    <span className={s.error_message}>{errors.login.message || 'This field is required'}</span>}
                <label htmlFor="password">Password </label>
                <Controller
                    render={({field}) => <Input {...field} error={!!errors.password}/>}
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={rules}
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
                <Button type="submit" variant="contained">Sign in</Button>
            </form>
        </div>
    );
};

// export const Login = () => {
//     const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<Inputs>({
//         mode: "onBlur"
//     });
//     const onSubmit: SubmitHandler<Inputs> = (data) => {
//         console.log(data)
//         reset()
//     }
//     return (
//         <div>
//             <h2>Login</h2>
//             <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
//                 {/* register your input into the hook by invoking the "register" function */}
//                 <label htmlFor="login">Login</label>
//                 <input {...register("login", {
//                     required: true,
//                     minLength: {
//                         value: 3,
//                         message: 'Login is too short'
//                     }
//                 })} />
//                 {errors.login && <span>{errors.login.message || 'This field is required'}</span>}
//
//
//                 <label htmlFor="password">Password </label>
//                 <input {...register("password", {
//                     required: true,
//                     minLength: {
//                         value: 3,
//                         message: 'Password is too short'
//                     }
//                 })} />
//                 {/* errors will return when field validation fails  */}
//                 {errors.password && <span>{errors.password.message ||'This field is required'}</span>}
//
//                 <label htmlFor="Remember">Remember me
//                     <input type="checkbox" {...register("remember", )} />
//                 </label>
//                 <input type="submit" value="Sign in"/>
//             </form>
//         </div>
//     );
// };
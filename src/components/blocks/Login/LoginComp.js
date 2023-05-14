import AuthForm from 'components/primitives/LoginForm/LoginForm'
import './LoginComp.scss'
import React from 'react'
import { login, register } from 'assets/images'

const LoginComp = () => {
  return (
    <div className='login start'>
        <img src={login} alt='' className='login-image'/>
        <div className='login-form center'>
          <div className='login-form-wrap'>
            <AuthForm />
            </div>
        </div>
    </div>
  )
}

export default LoginComp
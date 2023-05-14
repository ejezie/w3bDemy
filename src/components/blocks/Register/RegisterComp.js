import './RegisterComp.scss'
import React from 'react'
import { register } from 'assets/images'
import RegisterForm from 'components/primitives/RegisterForm/RegisterForm'

const RegisterComp = () => {
  return (
    <div className='login start'>
        <img src={register} alt='' className='login-image'/>
        <div className='login-form center'>
          <div className='login-form-wrap'>
            <RegisterForm />
            </div>
        </div>
    </div>
  )
}

export default RegisterComp
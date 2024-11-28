import React from 'react'
import Form from '../component/Form'

const Login = () => {
  return (
    <Form route="/api/token/" method="login" />
  )
}

export default Login
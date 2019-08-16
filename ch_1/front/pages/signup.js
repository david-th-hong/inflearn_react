import react, { useState } from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import { Form, Input, Checkbox, Button } from 'antd'

const Signup = () => {
  const [id, setId] = useState('')
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [term, setTerm] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [termError, setTermError] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term,
    })
  }
  const onChangeId = e => {
    setId(e.target.value)
  }
  const onChangeNick = e => {
    setNick(e.target.value)
  }
  const onChangePassword = e => {
    setPassword(e.target.value)
  }
  const onChangePasswordCheck = e => {
    setPasswordError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  }
  const onChangeTerm = e => {
    setTermError(false)
    setTerm(e.target.checked) // check box사용에서는 e.target.checked 로.
  }

  return (
    <>
      <Head>
        <title>Tutorials for NEXT NODE</title>
        <link
          rel="stylesheet"
          href="http://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <div>
          <h1>회원가입</h1>
        </div>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id"> 아이디 </label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick"> Nick Name </label>
            <br />
            <Input
              name="user-nick"
              value={nick}
              required
              onChange={onChangeNick}
            />
          </div>
          <div>
            <label htmlFor="user-password"> Password </label>
            <br />
            <Input
              name="user-password"
              value={password}
              type="password"
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-passwordCheck"> Password Check </label>
            <br />
            <Input
              name="user-passwordCheck"
              value={passwordCheck}
              type="password"
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: 'red' }}>비번 확인 하세요.</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
              agreement
            </Checkbox>
            {termError && <div style={{ color: 'red' }}>동의하세요.</div>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  )
}

export default Signup

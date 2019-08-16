# Hello React!

## 이 노트는 inflearn의 조현영님 강좌를 따라가고 있습니다.

## 1-1

### 프로젝트 구조와 배우는것들

- front server

- react / next
- redux
- redux-saga
- styled components

- backend server

- Express
- MySQL
- ORM
- Passport
- Multer
- Socket.IO

## 1-2 next와 eslint 설치

### skeleton

- 프로젝트 큰 구성중 front를 만들어 봄

- ch1/front

- npm init // package.json생성

- npm i react react-dom next // required package (react react-dom next) setup

- npm i -D nodemon webpack

- npm i -D eslint

### lint

.eslintrc

```json
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true // jsx 허용
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": ["import", "react-hooks"]
}
```

- 해당 eslint package install /

```terminal

 npm i -D eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks

```

## 1_3 Next Routing system

- pages directory 생성

- ch1/front/pages/index.js 생성

- next global설치

- package.json 에 script 내용 수정

```json
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```

- npm run dev 로 실행 / localhost:3000

- pages 안에 파일 체계가 알아서 주소체계를 잡아줌

## 1_4 and design 적용하기

- ant design은 react로 코드가 되어 있어서 그대로 쓰기 좋음

- angular / vue도 제공해서 ant design사용하기 좋음

- ch1/front에서 npm i antd 로 설치

### web front layout을 설정하기 위하여,\

- 공통된 레이아웃으로, pages에 개별적으로 생성하지 않을 것임.

- components 라는 폴더 생성

- AppLayout.js 생성

```javascript
import React, { Children } from 'react'
import { Menu, Input } from 'antd'

const AppLayout = ({ Children }) => {
  return (
    <div>
      <Menu>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="mypage">My Page</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton />>
        </Menu.Item>
      </Menu>
      {Children}
    </div>
  )
}

export default AppLayout
```

- index.js에서 AppLayout 호출

```javascript
import React, { Children } from 'react'
import { Menu, Input } from 'antd'

const AppLayout = ({ Children }) => {
  return (
    <div>
      <Menu>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="mypage">My Page</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton />>
        </Menu.Item>
      </Menu>
      {Children}
    </div>
  )
}

export default AppLayout
```

- antd css호출과 NEXT에서 header 다루기

- index.js에서,

```javascript
import Head from 'next/head' // 상단에 추가

// return 상단에 <HEAD> </HEAD> 추가하여, title, link, script 추가
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
      <Link href="/about">
        <a> about </a>
      </Link>
      <div> Hello NEXT!</div>
    </AppLayout>
  </>
)
```

## 1-5 기본 페이지들 만들기

- 아래와 같이 기본 페이지들 생성 /home /profile /signup

```javascript
import react from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

const Profile = () => {
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
          <h1>Profile</h1>
        </div>
      </AppLayout>
    </>
  )
}

export default Profile
```

## 1-6 Sign up 구현

- signup.js 에서 회원가입 기본 양식을 구현
  이벤트 리스너랑 hooks도 기초적으로 만듦

```javascript
import react from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import { Form, Input, Checkbox } from 'antd'

const Signup = () => {
  // event Listeners form at Here
  const onSubmit = () => {}
  const onChangeId = () => {}
  const onChangeNick = () => {}
  const onChangePassword = () => {}
  const onChangePasswordCheck = () => {}
  const onChangeTerm = () => {}

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
        <Form onSubmit={onSubmit}>
          <div>
            <label htmlFor="user-id"> 아이디 </label>
            <br />
            <Input name="user-id" required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick"> Nick Name </label>
            <br />
            <Input name="user-nick" required onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="user-password"> Password </label>
            <br />
            <Input
              name="user-password"
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
              type="password"
              required
              onChange={onChangePasswordCheck}
            />
          </div>
          <div>
            <Checkbox name="user-term" onChange={onChangeTerm}>
              agreement
            </Checkbox>
          </div>
          <div>
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
```

## 1-7 회원가입 state와 custom hook

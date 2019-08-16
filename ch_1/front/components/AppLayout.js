import React, { Children } from 'react'
import { Button, Menu, Input } from 'antd'
import Link from 'next/link'

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mypage">
          <Link href="/profile">
            <a>My Page</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Link href="/signup">
        <a>
          <Button> 회원가입 </Button>
        </a>
      </Link>
      {children}
    </div>
  )
}

export default AppLayout

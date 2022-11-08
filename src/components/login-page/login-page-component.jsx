import { Outlet } from 'react-router-dom'

import {
  signInWithGooglePopup,
  createUserFromAuth,
} from '../../utils/firebase/firebase.utlis'

import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Message,
  Icon,
  Container,
} from 'semantic-ui-react'

const signInWithGoogleHandler = async () => {
  const { user } = await signInWithGooglePopup()
  const userDocRef = await createUserFromAuth(user)

  console.log(userDocRef)
}

function LoginPage() {
  return (
    <div>
      <Grid
        textAlign='center'
        verticalAlign='middle'
        centered
        style={{ padding: 210 }}
      >
        <Grid.Column
          style={{
            maxWidth: 450,
          }}
        >
          <Header as='h1' color='black' textAlign='left'>
            Login
          </Header>
          <Form size='small'>
            <Form.Input fluid transparent placeholder='name@example.com' />
            <Divider />
            <Form.Input
              fluid
              transparent
              placeholder='Password'
              type='password'
            />
            <Button
              animated
              fluid
              compact
              color='black'
              onClick={signInWithGoogleHandler}
            >
              <Button.Content visible>
                <Icon name='google' />
              </Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Form>
        </Grid.Column>
        <Outlet />
      </Grid>
    </div>
  )
}

export default LoginPage

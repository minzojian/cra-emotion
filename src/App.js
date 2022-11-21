import { jsx } from '@emotion/react'
/** @jsxImportSource @emotion/react */
import React from 'react' // eslint-disable-line
import tw,{css,theme,screen} from 'twin.macro'
import { Button, Logo } from './components'

const styles = {

  // Move long class sets out of jsx to keep it scannable
  container:  [
    `
    background: ${theme`colors.blue.500`};
    ${screen`mobile`}{
      background: ${theme`colors.electric`}!important
    }
    `,
    tw`flex flex-col items-center justify-center h-screen`,
  ],
}

const App = () => (
  <div className='abcd' css={styles.container}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

export default App

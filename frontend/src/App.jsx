import { useState } from 'react'
import Button from './component/common/Button'
import Input from './component/common/Input'
import Form from './component/form/Form'

function App() {

  return (
    <>
      <Form>
         <Input placeholder={"Hello world!!!"}></Input>
         <Button label={"Hello"}></Button>
      </Form>
    </>
  )
}

export default App

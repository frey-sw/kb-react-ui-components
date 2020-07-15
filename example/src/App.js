import React from 'react'

import { ExampleComponent } from 'kb-react-ui-components'
import 'kb-react-ui-components/dist/index.css'

import { Backdrop } from "kb-react-ui-components";

const App = () => {
  return <div>
    <ExampleComponent text="Create React Library Example 😄" />
    <Backdrop/>
  </div>
}

export default App

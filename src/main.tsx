import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './Test.tsx'
import Props from './Props.tsx'
import TaskList  from './TaskList.tsx'
import Users from './CallApi.tsx'

import ClicCounter from './UseState.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Test />
    <ClicCounter />
    <Props title="Test Title" count={5} />
    <TaskList />
    <Users />
  </StrictMode>,
)

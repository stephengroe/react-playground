import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EditableTodoList from './EditableTodoList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EditableTodoList />
  </StrictMode>,
)

import { Outlet } from "react-router-dom";

export default function Root({ components }) {
  return (
    <div className='p-5'>
      <nav className='absolute left-0 top-0'>
        <ul>
          {components.map(component => (
            <li>{component}</li>
          ))}
        </ul>
      </nav>
      <div><Outlet /></div>
    </div>
  )
}

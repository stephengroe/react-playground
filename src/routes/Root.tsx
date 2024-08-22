import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className='p-5'>
      <nav className='absolute left-0 top-0'>
        <ul>
          <li>Star ratings</li>
        </ul>
      </nav>
      <div><Outlet /></div>
    </div>
  )
}

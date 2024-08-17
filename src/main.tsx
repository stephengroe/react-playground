import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from './StarRating';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarRating numberOfStars={2} />
  </StrictMode>,
)

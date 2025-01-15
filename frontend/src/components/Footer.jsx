import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
      <footer className="footer footer-center bg-base-100 text-base-content p-4 bg-[rgb(31,41,55)]">
            <aside>
    <p className='text-center text-white'>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
  )
}

export default Footer

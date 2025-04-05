import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4 text-center mt-auto absolute bottom-0 w-full">
          <p className="text-sm">&copy; {new Date().getFullYear()} Scientific Calculator. All rights reserved.</p>
      </footer>
      
    </>
  )
}

export default Footer

import React from "react"

const Header = () => {
  return (
    <div className="sticky top-0 h-header flex justify-center items-center p-4 mb-10 bg-secondary drop-shadow-xl">
      <div className="translate-y-8">
        <img className="w-logo" src="./assets/images/logo.png" alt="Dudignac" />
      </div>
    </div>
  )
}

export default Header

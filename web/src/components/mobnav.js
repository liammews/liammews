import React from "react"

import Menu from "./menu"

class MobNav extends React.Component {

  render() {
    return (
      <>
        <button onClick={() => this.toggleMenu()}>
          Open Menu
        </button>

        <Menu ref={el => (this.childMenu = el)} />
      </>
    )
  }

  toggleMenu() {
    this.childMenu.open()
  }
}

export default MobNav
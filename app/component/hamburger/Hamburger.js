import React, {Component} from 'react'
import styles from './Hamburger.css'

class Hamburger extends Component {

  constructor () {
    super()
    this.state = {active: false}
    this.transform = this.transform.bind(this)
  }

  transform () {
    this.setState({active: !this.state.active})
  }

  render () {
    return (
      <button type='button'
              className={styles.outerBurger}
              aria-label='Menu'
              aria-controls='navigation'
              onClick={this.transform}>
        <span className={this.state.active ? styles.topLine_end : styles.topLine_start} />
        <span className={this.state.active ? styles.middleLine1_end : styles.middleLine1_start} />
        <span className={this.state.active ? styles.middleLine2_end : styles.middleLine2_start} />
        <span className={this.state.active ? styles.bottomLine_end : styles.bottomLine_start} />
      </button>
    )
  }
}

export default Hamburger

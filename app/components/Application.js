import React, {Component} from 'react'
import MapView from './MapView'
import InputsModal from './InputsModal'
import Duration from './Duration'
import styles from './Application.css'

export default class Application extends Component {
  constructor() {
    super()
    this._inputsChanged = this._inputsChanged.bind(this)
    this._inputsSubmitted = this._inputsSubmitted.bind(this)
  }

  render() {
    return (
      <main className={styles.root}>
        <header className={styles.header}>
          <h1>map-thingy</h1>
        </header>
        <MapView>
          <Duration seconds={363}/>
        </MapView>
        <InputsModal changed={this._inputsChanged}
                     submitted={this._inputsSubmitted}/>
      </main>
    )
  }

  _inputsChanged() {}

  _inputsSubmitted() {}
}
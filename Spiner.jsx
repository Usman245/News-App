import React, { Component } from 'react'

export default class Spiner extends Component {
  render() {
    return (
      <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    )
  }
}

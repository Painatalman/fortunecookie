import React, { Component } from 'react';
import styles from './Home.css'

import FortuneCookie from '../FortuneCookie/FortuneCookie.js';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
      <h1>Fortune Cookie</h1>
      <FortuneCookie></FortuneCookie>
      </div>)
  }
}

import React, { Component } from 'react';
import styles from './About.css'

import FortuneCookie from '../FortuneCookie/FortuneCookie.js';

export default class about extends Component {
  render() {
    return (
      <div className={styles.about}>
      <h1>About Fortune Cookie</h1>
      <p>
        Multilanguage fortune cookie teller
      </p>
      </div>)
  }
}

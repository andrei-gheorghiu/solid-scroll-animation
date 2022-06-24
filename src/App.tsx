import type { Component } from 'solid-js';
import { onMount } from "solid-js";
import gsap from 'gsap'

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  onMount(() => {
    gsap.to(`.${styles.logo}`, {
      scrollTrigger: {
        scrub: 1.2,
        pin: `.${styles.App}`,
        pinSpacing: false
      },
      rotation: 360 * 1.125
    })
  })
  return (
    <div class={styles.App}>
      <section class={styles.section}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </section>
    </div>
  );
};

export default App;

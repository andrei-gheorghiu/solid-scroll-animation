/* @refresh reload */
import { render } from 'solid-js/web';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

import './index.css';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);

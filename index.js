var root = document.querySelector('#root');

import contact from './src/contact';
import { html, render } from 'lit-html';

function myRender(){
    return html`
    ${contact()}
    `;
}
render(myRender(),root);



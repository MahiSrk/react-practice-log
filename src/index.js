import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// imported nrtflix index file and also bootstrap libraries/files.
import { NetflixIndex } from './netflix/netflix-index';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import {Login} from './components/login/login';
import {DataBinding} from './components/data-binding/data-binding-primitive'
import { DataBindingObject } from './components/data-binding/data-binding-object';
import {DataBindingInHtmlByReact} from './components/data-binding/data-binding-in-html-by-react'
import {DataBindingComplex} from './components/data-binding/data-binding-three-complex'
import {DataBindingNested} from './components/data-binding/data-binding-five-complex-nested'
import { NasaComponent } from './nasa-api/nasa-component-one';
import { CardComponent} from './cards-codes/card-code-one'
import { FakeStoreComponent } from './components/fakestore-api/fakestore.component.one'
import { FakeStoreComponentTwo } from './components/fakestore-api/fakestore.component.two';
// this below will import bootstrap js which will help to create bootstrap popup we have done it on clicking on cart button.
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { FakeStoreComponentThree } from './components/fakestore-api/fakestore.component.three.js';
import { FakeStoreComponentFour } from './components/fakestore-api/fakestore.compoent.four.js';
import { FakeStoreComponentFive } from './components/fakestore-api/fakestore.componen.five.styles.js';
import { StyleBinding } from './components/fakestore-api/style.binding.six.js';
import { DataBindingOne } from './components/fakestore-api/data-binding.seven.js';
import {DataBindingTwoWay} from './components/fakestore-api/data-binding-eight.js';
import { DataBindingCmplx } from './components/fakestore-api/data-binding-ten.js';
import { StyleBindingTwo } from './components/fakestore-api/style-binding-eleven.js';
import { ClassBindingComponent } from './components/fakestore-api/classs-binding-component-twelve.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassBindingComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

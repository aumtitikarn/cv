//index.js
import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import Signup from './auth/signup';
import Homepage from './page';

import './i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <Homepage/>
);
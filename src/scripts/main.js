'use strict';

import '@babel/polyfill';
import objectFitImages from 'object-fit-images';

import Icon               from '../modules/icon/icon';
import Combobox           from '../modules/combobox/combobox';
import Header             from '../modules/header/header';
import Blog               from '../modules/blog/blog';
import Review             from '../modules/review/review';

new Icon();
new Combobox();
new Header();
new Blog();
new Review();

objectFitImages();
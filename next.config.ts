// !!! YOU MAY NOT EDIT THIS FILE IN CHILD NOAK-THEME !!!
import DefaultNextConf from './config/next/default/conf.lock';
import DefaultNextPlugins from './config/next/default/plugins';

const { withPlugins } = require('next-compose-plugins');

const NextConf = { ...DefaultNextConf };
const NextPlugins = [...DefaultNextPlugins];

module.exports = withPlugins(NextPlugins, NextConf);

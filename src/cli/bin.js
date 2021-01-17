#!/usr/bin/env node
require('please-upgrade-node')(require('../../package.json'))

//xtoni - execucio comença aqui
console.log(`1: ${__filename.slice(-14)}`);

require('./')()

/*
xtoni
 - please-upgrade-node -> package per comprovar versio node - molt enginyós (+ a npmjs)
 - require('./')() executa module_exports de index.js a .
*/
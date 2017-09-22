# fast-delete

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

A tiny single-function library to delete elements from array fast.

## Installation
```
npm install --save fast-delete
```

## Usage
Basic usage:
```javascript
import fastDelete from 'fast-delete'

const arr = [0, 1, 2, 3, 4, 5]
const deletedElement = fastDelete(arr, 2)
console.log(arr) // [0, 1, 5, 3, 4]
```

[npm-url]: https://npmjs.org/package/fast-delete
[downloads-image]: http://img.shields.io/npm/dm/fast-delete.svg
[npm-image]: http://img.shields.io/npm/v/fast-delete.svg
[david-dm-url]:https://david-dm.org/inker/fast-delete
[david-dm-image]:https://david-dm.org/inker/fast-delete.svg
[david-dm-dev-url]:https://david-dm.org/inker/fast-delete#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/fast-delete/dev-status.svg

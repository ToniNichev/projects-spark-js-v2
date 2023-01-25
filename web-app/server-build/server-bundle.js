/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ssr-server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/loadable-manifest.json":
/*!*************************************!*\
  !*** ./dist/loadable-manifest.json ***!
  \*************************************/
/*! exports provided: ./arrayLikeToArray.js, ./arrayWithHoles.js, @babel/runtime/helpers/asyncToGenerator, ./iterableToArrayLimit.js, ./nonIterableRest.js, ../helpers/regeneratorRuntime, @babel/runtime/helpers/slicedToArray, ./unsupportedIterableToArray.js, @babel/runtime/regenerator, ./arrayWithoutHoles.js, @babel/runtime/helpers/defineProperty, ./iterableToArray.js, ./nonIterableSpread.js, @babel/runtime/helpers/toConsumableArray, !!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./styles.scss, !!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src/index.js??ref--5-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./styles.scss, ../BulletPoint, ./styles.scss, ../Dialer, ../EditDelete, ../../components/GeneralPopup, ./AddPopup, ../../../components/Home, ../MessagePopup, ../RangeSlider, ../TemperatureBar, ../ToggleSwitch, ../../containers/EventsManager, ../../utils/Poster, ../../utils/getParams, ../../../pageComponents/Header, ./home.png, ../../../components/Words, ../../../pageComponents/Setup, ../../../pageComponents/About, undefined, ./assertThisInitialized.js, @babel/runtime/helpers/classCallCheck, @babel/runtime/helpers/createClass, @babel/runtime/helpers/esm/extends, @babel/runtime/helpers/esm/inheritsLoose, @babel/runtime/helpers/esm/objectWithoutPropertiesLoose, ./setPrototypeOf.js, @babel/runtime/helpers/extends, @babel/runtime/helpers/getPrototypeOf, @babel/runtime/helpers/inherits, @babel/runtime/helpers/possibleConstructorReturn, ./toPrimitive.js, ./toPropertyKey.js, ./typeof.js, ansi-html-community, ../../../node_modules/css-loader/dist/runtime/api.js, ../../../node_modules/css-loader/dist/runtime/getUrl.js, events, history, hoist-non-react-statics, ./html4-entities, ./html5-entities, html-entities, ./surrogate-pairs, ./xml-entities, loglevel, punycode, object-assign, prop-types/checkPropTypes, ./factoryWithTypeCheckers, prop-types, ./lib/ReactPropTypesSecret, ./lib/has, ./decode, ./encode, querystring, ./cjs/react-dom.development.js, react-dom, ./cjs/react-is.development.js, react-is, react-loadable, react-router-dom, react-router, isarray, path-to-regexp, ./cjs/react.development.js, react, resolve-pathname, ./cjs/scheduler-tracing.development.js, ./cjs/scheduler.development.js, scheduler, scheduler/tracing, sockjs-client/dist/sockjs, !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js, tiny-invariant, tiny-warning, ./Cookies, universal-cookie, ./utils, cookie, url, ./util, value-equal, ./BaseClient, /Users/toninichev/workspace/nodeJS/projects-sparkjs-v2/web-app/node_modules/webpack-dev-server/client/clients/SockJSClient.js, /Users/toninichev/workspace/nodeJS/projects-sparkjs-v2/web-app/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8084, ./overlay, ./socket, ./utils/createSocketUrl, ./getCurrentScriptSource, ./utils/log, ./utils/reloadApp, ./utils/sendMessage, ansi-regex, strip-ansi, ./../../../webpack/buildin/global.js, ./../../../webpack/buildin/module.js, /Users/toninichev/workspace/nodeJS/projects-sparkjs-v2/web-app/node_modules/webpack/hot/dev-server.js, ./emitter, ./log-apply-result, ./log, ./components/App, ../../../components/Loading, ./ComponentList, ./PageData, ../../containers/PageLayout, ../../fonts/Roboto/Roboto-Black.ttf, ../../fonts/Roboto/Roboto-Light.ttf, ../../fonts/digital-display.ttf, ./src/index.js, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"./arrayLikeToArray.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"./arrayWithHoles.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"@babel/runtime/helpers/asyncToGenerator\":[{\"id\":\"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\",\"name\":\"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\",\"name\":\"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"}],\"./iterableToArrayLimit.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"./nonIterableRest.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableRest.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"../helpers/regeneratorRuntime\":[{\"id\":\"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\",\"name\":\"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\",\"name\":\"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"}],\"@babel/runtime/helpers/slicedToArray\":[{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/slicedToArray.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"./unsupportedIterableToArray.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"@babel/runtime/regenerator\":[{\"id\":\"./node_modules/@babel/runtime/regenerator/index.js\",\"name\":\"./node_modules/@babel/runtime/regenerator/index.js\",\"file\":\"0-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/regenerator/index.js\",\"name\":\"./node_modules/@babel/runtime/regenerator/index.js\",\"file\":\"0-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/0-bundle.js.map\"}],\"./arrayWithoutHoles.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\",\"name\":\"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"@babel/runtime/helpers/defineProperty\":[{\"id\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"name\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"name\":\"./node_modules/@babel/runtime/helpers/defineProperty.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"./iterableToArray.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArray.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/iterableToArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/iterableToArray.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"./nonIterableSpread.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\",\"name\":\"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"@babel/runtime/helpers/toConsumableArray\":[{\"id\":\"./node_modules/@babel/runtime/helpers/toConsumableArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/toConsumableArray.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/toConsumableArray.js\",\"name\":\"./node_modules/@babel/runtime/helpers/toConsumableArray.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src/index.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./styles.scss\":[{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Dialer/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Dialer/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/MessagePopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/MessagePopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/BulletPoint/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Dialer/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Dialer/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/EditDelete/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/MessagePopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/MessagePopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/RangeSlider/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/TemperatureBar/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ToggleSwitch/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/Header/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/Header/styles.scss\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GeneralPopup/styles.scss\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/Header/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/Header/styles.scss\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Words/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Words/styles.scss\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Words/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Words/styles.scss\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/Setup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/Setup/styles.scss\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/Setup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/Setup/styles.scss\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/About/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/About/styles.scss\",\"file\":\"5-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/5-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/About/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pageComponents/About/styles.scss\",\"file\":\"5-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/5-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/App/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/App/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Loading/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Loading/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/PageLayout/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/PageLayout/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/App/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/App/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Loading/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Loading/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/PageLayout/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/containers/PageLayout/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"!!../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src/index.js??ref--5-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./styles.scss\":[{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/AddPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/AddPopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/AddPopup/styles.scss\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Home/AddPopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../BulletPoint\":[{\"id\":\"./src/components/BulletPoint/index.js\",\"name\":\"./src/components/BulletPoint/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/BulletPoint/index.js\",\"name\":\"./src/components/BulletPoint/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"./styles.scss\":[{\"id\":\"./src/components/BulletPoint/styles.scss\",\"name\":\"./src/components/BulletPoint/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/Dialer/styles.scss\",\"name\":\"./src/components/Dialer/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/EditDelete/styles.scss\",\"name\":\"./src/components/EditDelete/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/Home/AddPopup/styles.scss\",\"name\":\"./src/components/Home/AddPopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/Home/styles.scss\",\"name\":\"./src/components/Home/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/MessagePopup/styles.scss\",\"name\":\"./src/components/MessagePopup/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/RangeSlider/styles.scss\",\"name\":\"./src/components/RangeSlider/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/TemperatureBar/styles.scss\",\"name\":\"./src/components/TemperatureBar/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/ToggleSwitch/styles.scss\",\"name\":\"./src/components/ToggleSwitch/styles.scss\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/BulletPoint/styles.scss\",\"name\":\"./src/components/BulletPoint/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/Dialer/styles.scss\",\"name\":\"./src/components/Dialer/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/EditDelete/styles.scss\",\"name\":\"./src/components/EditDelete/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/Home/AddPopup/styles.scss\",\"name\":\"./src/components/Home/AddPopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/Home/styles.scss\",\"name\":\"./src/components/Home/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/MessagePopup/styles.scss\",\"name\":\"./src/components/MessagePopup/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/RangeSlider/styles.scss\",\"name\":\"./src/components/RangeSlider/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/TemperatureBar/styles.scss\",\"name\":\"./src/components/TemperatureBar/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/ToggleSwitch/styles.scss\",\"name\":\"./src/components/ToggleSwitch/styles.scss\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./src/pageComponents/Header/styles.scss\",\"name\":\"./src/pageComponents/Header/styles.scss\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./src/components/GeneralPopup/styles.scss\",\"name\":\"./src/components/GeneralPopup/styles.scss\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"},{\"id\":\"./src/pageComponents/Header/styles.scss\",\"name\":\"./src/pageComponents/Header/styles.scss\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"},{\"id\":\"./src/components/Words/styles.scss\",\"name\":\"./src/components/Words/styles.scss\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js\"},{\"id\":\"./src/components/Words/styles.scss\",\"name\":\"./src/components/Words/styles.scss\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js.map\"},{\"id\":\"./src/pageComponents/Setup/styles.scss\",\"name\":\"./src/pageComponents/Setup/styles.scss\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js\"},{\"id\":\"./src/pageComponents/Setup/styles.scss\",\"name\":\"./src/pageComponents/Setup/styles.scss\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js.map\"},{\"id\":\"./src/pageComponents/About/styles.scss\",\"name\":\"./src/pageComponents/About/styles.scss\",\"file\":\"5-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/5-bundle.js\"},{\"id\":\"./src/pageComponents/About/styles.scss\",\"name\":\"./src/pageComponents/About/styles.scss\",\"file\":\"5-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/5-bundle.js.map\"},{\"id\":\"./src/components/App/styles.scss\",\"name\":\"./src/components/App/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/components/Loading/styles.scss\",\"name\":\"./src/components/Loading/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/containers/PageLayout/styles.scss\",\"name\":\"./src/containers/PageLayout/styles.scss\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/components/App/styles.scss\",\"name\":\"./src/components/App/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"},{\"id\":\"./src/components/Loading/styles.scss\",\"name\":\"./src/components/Loading/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"},{\"id\":\"./src/containers/PageLayout/styles.scss\",\"name\":\"./src/containers/PageLayout/styles.scss\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"../Dialer\":[{\"id\":\"./src/components/Dialer/index.js\",\"name\":\"./src/components/Dialer/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/Dialer/index.js\",\"name\":\"./src/components/Dialer/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../EditDelete\":[{\"id\":\"./src/components/EditDelete/index.js\",\"name\":\"./src/components/EditDelete/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/EditDelete/index.js\",\"name\":\"./src/components/EditDelete/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../../components/GeneralPopup\":[{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./src/components/GeneralPopup/index.js\",\"name\":\"./src/components/GeneralPopup/index.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"./AddPopup\":[{\"id\":\"./src/components/Home/AddPopup/index.js\",\"name\":\"./src/components/Home/AddPopup/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/Home/AddPopup/index.js\",\"name\":\"./src/components/Home/AddPopup/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../../../components/Home\":[{\"id\":\"./src/components/Home/index.js\",\"name\":\"./src/components/Home/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/Home/index.js\",\"name\":\"./src/components/Home/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../MessagePopup\":[{\"id\":\"./src/components/MessagePopup/index.js\",\"name\":\"./src/components/MessagePopup/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/MessagePopup/index.js\",\"name\":\"./src/components/MessagePopup/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../RangeSlider\":[{\"id\":\"./src/components/RangeSlider/index.js\",\"name\":\"./src/components/RangeSlider/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/RangeSlider/index.js\",\"name\":\"./src/components/RangeSlider/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../TemperatureBar\":[{\"id\":\"./src/components/TemperatureBar/index.js\",\"name\":\"./src/components/TemperatureBar/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/TemperatureBar/index.js\",\"name\":\"./src/components/TemperatureBar/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../ToggleSwitch\":[{\"id\":\"./src/components/ToggleSwitch/index.js\",\"name\":\"./src/components/ToggleSwitch/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/components/ToggleSwitch/index.js\",\"name\":\"./src/components/ToggleSwitch/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"}],\"../../containers/EventsManager\":[{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./src/containers/EventsManager/index.js\",\"name\":\"./src/containers/EventsManager/index.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"../../utils/Poster\":[{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js.map\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js\"},{\"id\":\"./src/utils/Poster.js\",\"name\":\"./src/utils/Poster.js\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js.map\"}],\"../../utils/getParams\":[{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"1-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"1-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/1-bundle.js.map\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js.map\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js\"},{\"id\":\"./src/utils/getParams.js\",\"name\":\"./src/utils/getParams.js\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js.map\"}],\"../../../pageComponents/Header\":[{\"id\":\"./src/pageComponents/Header/index.js\",\"name\":\"./src/pageComponents/Header/index.js\",\"file\":\"2-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js\"},{\"id\":\"./src/pageComponents/Header/index.js\",\"name\":\"./src/pageComponents/Header/index.js\",\"file\":\"2-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/2-bundle.js.map\"}],\"./home.png\":[{\"id\":\"./src/components/Words/home.png\",\"name\":\"./src/components/Words/home.png\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js\"},{\"id\":\"./src/components/Words/home.png\",\"name\":\"./src/components/Words/home.png\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js.map\"},{\"id\":\"./src/pageComponents/Setup/home.png\",\"name\":\"./src/pageComponents/Setup/home.png\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js\"},{\"id\":\"./src/pageComponents/Setup/home.png\",\"name\":\"./src/pageComponents/Setup/home.png\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js.map\"}],\"../../../components/Words\":[{\"id\":\"./src/components/Words/index.js\",\"name\":\"./src/components/Words/index.js\",\"file\":\"3-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js\"},{\"id\":\"./src/components/Words/index.js\",\"name\":\"./src/components/Words/index.js\",\"file\":\"3-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/3-bundle.js.map\"}],\"../../../pageComponents/Setup\":[{\"id\":\"./src/pageComponents/Setup/index.js\",\"name\":\"./src/pageComponents/Setup/index.js\",\"file\":\"4-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js\"},{\"id\":\"./src/pageComponents/Setup/index.js\",\"name\":\"./src/pageComponents/Setup/index.js\",\"file\":\"4-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/4-bundle.js.map\"}],\"../../../pageComponents/About\":[{\"id\":\"./src/pageComponents/About/index.js\",\"name\":\"./src/pageComponents/About/index.js\",\"file\":\"5-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/5-bundle.js\"},{\"id\":\"./src/pageComponents/About/index.js\",\"name\":\"./src/pageComponents/About/index.js\",\"file\":\"5-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/5-bundle.js.map\"}],\"undefined\":[{\"id\":1,\"name\":null,\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\",\"name\":\"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":1,\"name\":null,\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"},{\"id\":\"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\",\"name\":\"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./assertThisInitialized.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\",\"name\":\"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\",\"name\":\"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/classCallCheck\":[{\"id\":\"./node_modules/@babel/runtime/helpers/classCallCheck.js\",\"name\":\"./node_modules/@babel/runtime/helpers/classCallCheck.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/classCallCheck.js\",\"name\":\"./node_modules/@babel/runtime/helpers/classCallCheck.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/createClass\":[{\"id\":\"./node_modules/@babel/runtime/helpers/createClass.js\",\"name\":\"./node_modules/@babel/runtime/helpers/createClass.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/createClass.js\",\"name\":\"./node_modules/@babel/runtime/helpers/createClass.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/esm/extends\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/esm/inheritsLoose\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./setPrototypeOf.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"},{\"id\":\"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/extends\":[{\"id\":\"./node_modules/@babel/runtime/helpers/extends.js\",\"name\":\"./node_modules/@babel/runtime/helpers/extends.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/extends.js\",\"name\":\"./node_modules/@babel/runtime/helpers/extends.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/getPrototypeOf\":[{\"id\":\"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\",\"name\":\"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/inherits\":[{\"id\":\"./node_modules/@babel/runtime/helpers/inherits.js\",\"name\":\"./node_modules/@babel/runtime/helpers/inherits.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/inherits.js\",\"name\":\"./node_modules/@babel/runtime/helpers/inherits.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"@babel/runtime/helpers/possibleConstructorReturn\":[{\"id\":\"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\",\"name\":\"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\",\"name\":\"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./toPrimitive.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/toPrimitive.js\",\"name\":\"./node_modules/@babel/runtime/helpers/toPrimitive.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/toPrimitive.js\",\"name\":\"./node_modules/@babel/runtime/helpers/toPrimitive.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./toPropertyKey.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/toPropertyKey.js\",\"name\":\"./node_modules/@babel/runtime/helpers/toPropertyKey.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/toPropertyKey.js\",\"name\":\"./node_modules/@babel/runtime/helpers/toPropertyKey.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./typeof.js\":[{\"id\":\"./node_modules/@babel/runtime/helpers/typeof.js\",\"name\":\"./node_modules/@babel/runtime/helpers/typeof.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/@babel/runtime/helpers/typeof.js\",\"name\":\"./node_modules/@babel/runtime/helpers/typeof.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"ansi-html-community\":[{\"id\":\"./node_modules/ansi-html-community/index.js\",\"name\":\"./node_modules/ansi-html-community/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/ansi-html-community/index.js\",\"name\":\"./node_modules/ansi-html-community/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"../../../node_modules/css-loader/dist/runtime/api.js\":[{\"id\":\"./node_modules/css-loader/dist/runtime/api.js\",\"name\":\"./node_modules/css-loader/dist/runtime/api.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/runtime/api.js\",\"name\":\"./node_modules/css-loader/dist/runtime/api.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"../../../node_modules/css-loader/dist/runtime/getUrl.js\":[{\"id\":\"./node_modules/css-loader/dist/runtime/getUrl.js\",\"name\":\"./node_modules/css-loader/dist/runtime/getUrl.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/css-loader/dist/runtime/getUrl.js\",\"name\":\"./node_modules/css-loader/dist/runtime/getUrl.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"events\":[{\"id\":\"./node_modules/events/events.js\",\"name\":\"./node_modules/events/events.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/events/events.js\",\"name\":\"./node_modules/events/events.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"history\":[{\"id\":\"./node_modules/history/esm/history.js\",\"name\":\"./node_modules/history/esm/history.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/history/esm/history.js\",\"name\":\"./node_modules/history/esm/history.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"hoist-non-react-statics\":[{\"id\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"name\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"name\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./html4-entities\":[{\"id\":\"./node_modules/html-entities/lib/html4-entities.js\",\"name\":\"./node_modules/html-entities/lib/html4-entities.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/html4-entities.js\",\"name\":\"./node_modules/html-entities/lib/html4-entities.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./html5-entities\":[{\"id\":\"./node_modules/html-entities/lib/html5-entities.js\",\"name\":\"./node_modules/html-entities/lib/html5-entities.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/html5-entities.js\",\"name\":\"./node_modules/html-entities/lib/html5-entities.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"html-entities\":[{\"id\":\"./node_modules/html-entities/lib/index.js\",\"name\":\"./node_modules/html-entities/lib/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/index.js\",\"name\":\"./node_modules/html-entities/lib/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./surrogate-pairs\":[{\"id\":\"./node_modules/html-entities/lib/surrogate-pairs.js\",\"name\":\"./node_modules/html-entities/lib/surrogate-pairs.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/surrogate-pairs.js\",\"name\":\"./node_modules/html-entities/lib/surrogate-pairs.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./xml-entities\":[{\"id\":\"./node_modules/html-entities/lib/xml-entities.js\",\"name\":\"./node_modules/html-entities/lib/xml-entities.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/html-entities/lib/xml-entities.js\",\"name\":\"./node_modules/html-entities/lib/xml-entities.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"loglevel\":[{\"id\":\"./node_modules/loglevel/lib/loglevel.js\",\"name\":\"./node_modules/loglevel/lib/loglevel.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/loglevel/lib/loglevel.js\",\"name\":\"./node_modules/loglevel/lib/loglevel.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"punycode\":[{\"id\":\"./node_modules/node-libs-browser/node_modules/punycode/punycode.js\",\"name\":\"./node_modules/node-libs-browser/node_modules/punycode/punycode.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/node-libs-browser/node_modules/punycode/punycode.js\",\"name\":\"./node_modules/node-libs-browser/node_modules/punycode/punycode.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"object-assign\":[{\"id\":\"./node_modules/object-assign/index.js\",\"name\":\"./node_modules/object-assign/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/object-assign/index.js\",\"name\":\"./node_modules/object-assign/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"prop-types/checkPropTypes\":[{\"id\":\"./node_modules/prop-types/checkPropTypes.js\",\"name\":\"./node_modules/prop-types/checkPropTypes.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/checkPropTypes.js\",\"name\":\"./node_modules/prop-types/checkPropTypes.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./factoryWithTypeCheckers\":[{\"id\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"name\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"name\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"prop-types\":[{\"id\":\"./node_modules/prop-types/index.js\",\"name\":\"./node_modules/prop-types/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/index.js\",\"name\":\"./node_modules/prop-types/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./lib/ReactPropTypesSecret\":[{\"id\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"name\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"name\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./lib/has\":[{\"id\":\"./node_modules/prop-types/lib/has.js\",\"name\":\"./node_modules/prop-types/lib/has.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/prop-types/lib/has.js\",\"name\":\"./node_modules/prop-types/lib/has.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./decode\":[{\"id\":\"./node_modules/querystring-es3/decode.js\",\"name\":\"./node_modules/querystring-es3/decode.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/querystring-es3/decode.js\",\"name\":\"./node_modules/querystring-es3/decode.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./encode\":[{\"id\":\"./node_modules/querystring-es3/encode.js\",\"name\":\"./node_modules/querystring-es3/encode.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/querystring-es3/encode.js\",\"name\":\"./node_modules/querystring-es3/encode.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"querystring\":[{\"id\":\"./node_modules/querystring-es3/index.js\",\"name\":\"./node_modules/querystring-es3/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/querystring-es3/index.js\",\"name\":\"./node_modules/querystring-es3/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./cjs/react-dom.development.js\":[{\"id\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"name\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"name\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"react-dom\":[{\"id\":\"./node_modules/react-dom/index.js\",\"name\":\"./node_modules/react-dom/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-dom/index.js\",\"name\":\"./node_modules/react-dom/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./cjs/react-is.development.js\":[{\"id\":\"./node_modules/react-is/cjs/react-is.development.js\",\"name\":\"./node_modules/react-is/cjs/react-is.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-is/cjs/react-is.development.js\",\"name\":\"./node_modules/react-is/cjs/react-is.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"react-is\":[{\"id\":\"./node_modules/react-is/index.js\",\"name\":\"./node_modules/react-is/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-is/index.js\",\"name\":\"./node_modules/react-is/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"react-loadable\":[{\"id\":\"./node_modules/react-loadable/lib/index.js\",\"name\":\"./node_modules/react-loadable/lib/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-loadable/lib/index.js\",\"name\":\"./node_modules/react-loadable/lib/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"react-router-dom\":[{\"id\":\"./node_modules/react-router-dom/esm/react-router-dom.js\",\"name\":\"./node_modules/react-router-dom/esm/react-router-dom.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-router-dom/esm/react-router-dom.js\",\"name\":\"./node_modules/react-router-dom/esm/react-router-dom.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"react-router\":[{\"id\":\"./node_modules/react-router/esm/react-router.js\",\"name\":\"./node_modules/react-router/esm/react-router.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-router/esm/react-router.js\",\"name\":\"./node_modules/react-router/esm/react-router.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"isarray\":[{\"id\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"name\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"name\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"path-to-regexp\":[{\"id\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"name\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"name\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./cjs/react.development.js\":[{\"id\":\"./node_modules/react/cjs/react.development.js\",\"name\":\"./node_modules/react/cjs/react.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react/cjs/react.development.js\",\"name\":\"./node_modules/react/cjs/react.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"react\":[{\"id\":\"./node_modules/react/index.js\",\"name\":\"./node_modules/react/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/react/index.js\",\"name\":\"./node_modules/react/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"resolve-pathname\":[{\"id\":\"./node_modules/resolve-pathname/esm/resolve-pathname.js\",\"name\":\"./node_modules/resolve-pathname/esm/resolve-pathname.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/resolve-pathname/esm/resolve-pathname.js\",\"name\":\"./node_modules/resolve-pathname/esm/resolve-pathname.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./cjs/scheduler-tracing.development.js\":[{\"id\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./cjs/scheduler.development.js\":[{\"id\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"scheduler\":[{\"id\":\"./node_modules/scheduler/index.js\",\"name\":\"./node_modules/scheduler/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/scheduler/index.js\",\"name\":\"./node_modules/scheduler/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"scheduler/tracing\":[{\"id\":\"./node_modules/scheduler/tracing.js\",\"name\":\"./node_modules/scheduler/tracing.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/scheduler/tracing.js\",\"name\":\"./node_modules/scheduler/tracing.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"sockjs-client/dist/sockjs\":[{\"id\":\"./node_modules/sockjs-client/dist/sockjs.js\",\"name\":\"./node_modules/sockjs-client/dist/sockjs.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/sockjs-client/dist/sockjs.js\",\"name\":\"./node_modules/sockjs-client/dist/sockjs.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"!../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\":[{\"id\":\"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\",\"name\":\"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\",\"name\":\"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"tiny-invariant\":[{\"id\":\"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\",\"name\":\"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\",\"name\":\"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"tiny-warning\":[{\"id\":\"./node_modules/tiny-warning/dist/tiny-warning.esm.js\",\"name\":\"./node_modules/tiny-warning/dist/tiny-warning.esm.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/tiny-warning/dist/tiny-warning.esm.js\",\"name\":\"./node_modules/tiny-warning/dist/tiny-warning.esm.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./Cookies\":[{\"id\":\"./node_modules/universal-cookie/es6/Cookies.js\",\"name\":\"./node_modules/universal-cookie/es6/Cookies.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/universal-cookie/es6/Cookies.js\",\"name\":\"./node_modules/universal-cookie/es6/Cookies.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"universal-cookie\":[{\"id\":\"./node_modules/universal-cookie/es6/index.js\",\"name\":\"./node_modules/universal-cookie/es6/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/universal-cookie/es6/index.js\",\"name\":\"./node_modules/universal-cookie/es6/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./utils\":[{\"id\":\"./node_modules/universal-cookie/es6/utils.js\",\"name\":\"./node_modules/universal-cookie/es6/utils.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/universal-cookie/es6/utils.js\",\"name\":\"./node_modules/universal-cookie/es6/utils.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"cookie\":[{\"id\":\"./node_modules/universal-cookie/node_modules/cookie/index.js\",\"name\":\"./node_modules/universal-cookie/node_modules/cookie/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/universal-cookie/node_modules/cookie/index.js\",\"name\":\"./node_modules/universal-cookie/node_modules/cookie/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"url\":[{\"id\":\"./node_modules/url/url.js\",\"name\":\"./node_modules/url/url.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/url/url.js\",\"name\":\"./node_modules/url/url.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./util\":[{\"id\":\"./node_modules/url/util.js\",\"name\":\"./node_modules/url/util.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/url/util.js\",\"name\":\"./node_modules/url/util.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"value-equal\":[{\"id\":\"./node_modules/value-equal/esm/value-equal.js\",\"name\":\"./node_modules/value-equal/esm/value-equal.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/value-equal/esm/value-equal.js\",\"name\":\"./node_modules/value-equal/esm/value-equal.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./BaseClient\":[{\"id\":\"./node_modules/webpack-dev-server/client/clients/BaseClient.js\",\"name\":\"./node_modules/webpack-dev-server/client/clients/BaseClient.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/clients/BaseClient.js\",\"name\":\"./node_modules/webpack-dev-server/client/clients/BaseClient.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"/Users/toninichev/workspace/nodeJS/projects-sparkjs-v2/web-app/node_modules/webpack-dev-server/client/clients/SockJSClient.js\":[{\"id\":\"./node_modules/webpack-dev-server/client/clients/SockJSClient.js\",\"name\":\"./node_modules/webpack-dev-server/client/clients/SockJSClient.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/clients/SockJSClient.js\",\"name\":\"./node_modules/webpack-dev-server/client/clients/SockJSClient.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"/Users/toninichev/workspace/nodeJS/projects-sparkjs-v2/web-app/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8084\":[{\"id\":\"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8084\",\"name\":\"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8084\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8084\",\"name\":\"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8084\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./overlay\":[{\"id\":\"./node_modules/webpack-dev-server/client/overlay.js\",\"name\":\"./node_modules/webpack-dev-server/client/overlay.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/overlay.js\",\"name\":\"./node_modules/webpack-dev-server/client/overlay.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./socket\":[{\"id\":\"./node_modules/webpack-dev-server/client/socket.js\",\"name\":\"./node_modules/webpack-dev-server/client/socket.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/socket.js\",\"name\":\"./node_modules/webpack-dev-server/client/socket.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./utils/createSocketUrl\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/createSocketUrl.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./getCurrentScriptSource\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./utils/log\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/log.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/log.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/log.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/log.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./utils/reloadApp\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/reloadApp.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/reloadApp.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/reloadApp.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/reloadApp.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./utils/sendMessage\":[{\"id\":\"./node_modules/webpack-dev-server/client/utils/sendMessage.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/sendMessage.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/client/utils/sendMessage.js\",\"name\":\"./node_modules/webpack-dev-server/client/utils/sendMessage.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"ansi-regex\":[{\"id\":\"./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js\",\"name\":\"./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js\",\"name\":\"./node_modules/webpack-dev-server/node_modules/ansi-regex/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"strip-ansi\":[{\"id\":\"./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js\",\"name\":\"./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js\",\"name\":\"./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./../../../webpack/buildin/global.js\":[{\"id\":\"./node_modules/webpack/buildin/global.js\",\"name\":\"./node_modules/webpack/buildin/global.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/buildin/global.js\",\"name\":\"./node_modules/webpack/buildin/global.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./../../../webpack/buildin/module.js\":[{\"id\":\"./node_modules/webpack/buildin/module.js\",\"name\":\"./node_modules/webpack/buildin/module.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/buildin/module.js\",\"name\":\"./node_modules/webpack/buildin/module.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"/Users/toninichev/workspace/nodeJS/projects-sparkjs-v2/web-app/node_modules/webpack/hot/dev-server.js\":[{\"id\":\"./node_modules/webpack/hot/dev-server.js\",\"name\":\"./node_modules/webpack/hot/dev-server.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot/dev-server.js\",\"name\":\"./node_modules/webpack/hot/dev-server.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./emitter\":[{\"id\":\"./node_modules/webpack/hot/emitter.js\",\"name\":\"./node_modules/webpack/hot/emitter.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot/emitter.js\",\"name\":\"./node_modules/webpack/hot/emitter.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./log-apply-result\":[{\"id\":\"./node_modules/webpack/hot/log-apply-result.js\",\"name\":\"./node_modules/webpack/hot/log-apply-result.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot/log-apply-result.js\",\"name\":\"./node_modules/webpack/hot/log-apply-result.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./log\":[{\"id\":\"./node_modules/webpack/hot/log.js\",\"name\":\"./node_modules/webpack/hot/log.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./node_modules/webpack/hot/log.js\",\"name\":\"./node_modules/webpack/hot/log.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./components/App\":[{\"id\":\"./src/components/App/index.js\",\"name\":\"./src/components/App/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/components/App/index.js\",\"name\":\"./src/components/App/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"../../../components/Loading\":[{\"id\":\"./src/components/Loading/index.js\",\"name\":\"./src/components/Loading/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/components/Loading/index.js\",\"name\":\"./src/components/Loading/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./ComponentList\":[{\"id\":\"./src/containers/PageLayout/ComponentList/index.js\",\"name\":\"./src/containers/PageLayout/ComponentList/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/containers/PageLayout/ComponentList/index.js\",\"name\":\"./src/containers/PageLayout/ComponentList/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./PageData\":[{\"id\":\"./src/containers/PageLayout/PageData/index.js\",\"name\":\"./src/containers/PageLayout/PageData/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/containers/PageLayout/PageData/index.js\",\"name\":\"./src/containers/PageLayout/PageData/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"../../containers/PageLayout\":[{\"id\":\"./src/containers/PageLayout/index.js\",\"name\":\"./src/containers/PageLayout/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/containers/PageLayout/index.js\",\"name\":\"./src/containers/PageLayout/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"../../fonts/Roboto/Roboto-Black.ttf\":[{\"id\":\"./src/fonts/Roboto/Roboto-Black.ttf\",\"name\":\"./src/fonts/Roboto/Roboto-Black.ttf\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/fonts/Roboto/Roboto-Black.ttf\",\"name\":\"./src/fonts/Roboto/Roboto-Black.ttf\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"../../fonts/Roboto/Roboto-Light.ttf\":[{\"id\":\"./src/fonts/Roboto/Roboto-Light.ttf\",\"name\":\"./src/fonts/Roboto/Roboto-Light.ttf\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/fonts/Roboto/Roboto-Light.ttf\",\"name\":\"./src/fonts/Roboto/Roboto-Light.ttf\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"../../fonts/digital-display.ttf\":[{\"id\":\"./src/fonts/digital-display.ttf\",\"name\":\"./src/fonts/digital-display.ttf\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/fonts/digital-display.ttf\",\"name\":\"./src/fonts/digital-display.ttf\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}],\"./src/index.js\":[{\"id\":\"./src/index.js\",\"name\":\"./src/index.js\",\"file\":\"main-bundle.js\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js\"},{\"id\":\"./src/index.js\",\"name\":\"./src/index.js\",\"file\":\"main-bundle.js.map\",\"publicPath\":\"http://toni-develops.com:8084/dist/main-bundle.js.map\"}]}");

/***/ }),

/***/ "./expressMiddlewares/WeatherServices/index.js":
/*!*****************************************************!*\
  !*** ./expressMiddlewares/WeatherServices/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./expressMiddlewares/WeatherServices/services.js");



var weatherServices = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
    var action;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          action = req.params[0];
          _context.t0 = action;
          _context.next = _context.t0 === 'get-local-weather' ? 4 : 7;
          break;
        case 4:
          _context.next = 6;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["getLocalWeather"])(req, res);
        case 6:
          return _context.abrupt("break", 7);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function weatherServices(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (weatherServices);

/***/ }),

/***/ "./expressMiddlewares/WeatherServices/services.js":
/*!********************************************************!*\
  !*** ./expressMiddlewares/WeatherServices/services.js ***!
  \********************************************************/
/*! exports provided: getLocalWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalWeather", function() { return getLocalWeather; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=West%20New%20York&units=metric&appid=[api key here]";
var cachedResponse = null;
var lastCachedTime = null;
var refreshInterval = 60; // seconds

var sendResponse = function sendResponse(res, responseString) {
  res.status(200);
  res.removeHeader('X-Powered-By');
  res.removeHeader('Set-Cookie');
  res.removeHeader('Connection');
  res.send(responseString);
};
var fetchWeatherData = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          lastCachedTime = new Date();
          _context.next = 3;
          return fetch(WEATHER_API_URL);
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchWeatherData() {
    return _ref.apply(this, arguments);
  };
}();

/**
 * getLocalWeather - returns local weather data.
 * @param {*} req 
 * @param {*} res 
 */
var getLocalWeather = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res) {
    var datenow, response, responseStr;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          datenow = new Date();
          if (!(lastCachedTime != null && (datenow - lastCachedTime) * 0.001 < refreshInterval)) {
            _context2.next = 5;
            break;
          }
          sendResponse(res, cachedResponse);
          _context2.next = 15;
          break;
        case 5:
          console.log(">>>>>> Updating weather data !");
          _context2.next = 8;
          return fetchWeatherData();
        case 8:
          response = _context2.sent;
          _context2.next = 11;
          return response.json();
        case 11:
          responseStr = _context2.sent;
          cachedResponse = responseStr;
          lastCachedTime = new Date();
          sendResponse(res, responseStr);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getLocalWeather(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./expressMiddlewares/devicesServices/index.js":
/*!*****************************************************!*\
  !*** ./expressMiddlewares/devicesServices/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./expressMiddlewares/devicesServices/services.js");



var stringToObject = function stringToObject(str) {
  var fullString = str == '' ? '[]' : '[' + str.split('][').join('],[') + ']';
  return JSON.parse(fullString);
};
var sendResponse = function sendResponse(res, responseString) {
  res.status(200);
  res.removeHeader('X-Powered-By');
  res.removeHeader('Set-Cookie');
  res.removeHeader('Connection');
  res.send(responseString);
};
var DeviceServices = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res, devicesData, hubPreferences, usersData) {
    var _req$apiData, _req$query, _userFromCookie;
    var _req$apiData2, _req$apiData3, errorCode, errorMasg, action, requestData, hubId, userFromCookie, userId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof (req === null || req === void 0 ? void 0 : (_req$apiData = req.apiData) === null || _req$apiData === void 0 ? void 0 : _req$apiData.error) !== 'undefined')) {
            _context.next = 5;
            break;
          }
          errorCode = req === null || req === void 0 ? void 0 : (_req$apiData2 = req.apiData) === null || _req$apiData2 === void 0 ? void 0 : _req$apiData2.error;
          errorMasg = req === null || req === void 0 ? void 0 : (_req$apiData3 = req.apiData) === null || _req$apiData3 === void 0 ? void 0 : _req$apiData3.message;
          sendResponse(res, {
            error: errorCode,
            message: errorMasg
          });
          return _context.abrupt("return");
        case 5:
          if (!(typeof (req === null || req === void 0 ? void 0 : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.data) === 'undefined')) {
            _context.next = 8;
            break;
          }
          sendResponse(res, {
            error: 1,
            message: 'missing `data` parameter.'
          });
          return _context.abrupt("return");
        case 8:
          action = req.params[0];
          requestData = stringToObject(req.query.data);
          hubId = requestData[0][0];
          if (typeof hubPreferences[hubId] === 'undefined') {
            hubPreferences[hubId] = {
              mode: 0
            };
          }
          if (!(typeof req.cookies.user === 'undefined')) {
            _context.next = 16;
            break;
          }
          req.cookies.user = undefined;
          _context.next = 25;
          break;
        case 16:
          _context.prev = 16;
          userFromCookie = JSON.parse(req.cookies.user);
          _context.next = 25;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](16);
          req.cookies.user = undefined;
          sendResponse(res, {
            error: 1,
            message: "Invalid json object for user"
          });
          return _context.abrupt("return");
        case 25:
          userId = (_userFromCookie = userFromCookie) === null || _userFromCookie === void 0 ? void 0 : _userFromCookie.id;
          /*
          if( action !== 'get-data') {
              if( typeof userId === 'undefined') {
                  console.log("Invalid accessToken");
                  sendResponse(res, {error:1, message: "Invalid accessToken"});
                  return;
              }
               if(userFromCookie.accessToken !== usersData[userId]?.accessToken) {
                  debugger;
                  console.log("Invalid accessToken");
                  sendResponse(res, {error:1, message: "Invalid token"});
                  return;
              }
          }
          */
          _context.t1 = action;
          _context.next = _context.t1 === 'get-full-data' ? 29 : _context.t1 === 'get-data' ? 32 : _context.t1 === 'delete-device' ? 34 : _context.t1 === 'set-desired-temperature' ? 40 : _context.t1 === 'set-device-mode' ? 43 : _context.t1 === 'set-device-fan-mode' ? 46 : _context.t1 === 'add-device' ? 49 : _context.t1 === 'cancel-add-device' ? 52 : 55;
          break;
        case 29:
          _context.next = 31;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["getFullReadings"])(req, res, devicesData[hubId]);
        case 31:
          return _context.abrupt("break", 55);
        case 32:
          Object(_services__WEBPACK_IMPORTED_MODULE_2__["getReadings"])(req, res, devicesData[hubId], requestData, hubPreferences[hubId]);
          return _context.abrupt("break", 55);
        case 34:
          _context.next = 36;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["deleteDevice"])(req, res, devicesData[hubId], requestData, hubPreferences[hubId]);
        case 36:
          _context.next = 38;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["getDeviceListFromDB"])(hubId);
        case 38:
          devicesData[hubId] = _context.sent;
          return _context.abrupt("break", 55);
        case 40:
          _context.next = 42;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["setDesiredTemperature"])(req, res, devicesData[hubId], requestData);
        case 42:
          return _context.abrupt("break", 55);
        case 43:
          _context.next = 45;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["setDeviceMode"])(req, res, devicesData[hubId], requestData);
        case 45:
          return _context.abrupt("break", 55);
        case 46:
          _context.next = 48;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["setDeviceFanMode"])(req, res, devicesData[hubId], requestData);
        case 48:
          return _context.abrupt("break", 55);
        case 49:
          _context.next = 51;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["setAddDeviceMode"])(req, res, devicesData[hubId], requestData, hubPreferences[hubId]);
        case 51:
          return _context.abrupt("break", 55);
        case 52:
          _context.next = 54;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["cancelAddDeviceMode"])(req, res, devicesData[hubId], requestData, hubPreferences[hubId]);
        case 54:
          return _context.abrupt("break", 55);
        case 55:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[16, 20]]);
  }));
  return function DeviceServices(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (DeviceServices);

/***/ }),

/***/ "./expressMiddlewares/devicesServices/services.js":
/*!********************************************************!*\
  !*** ./expressMiddlewares/devicesServices/services.js ***!
  \********************************************************/
/*! exports provided: getDeviceListFromDB, getFullReadings, getReadings, setDesiredTemperature, setDeviceMode, setDeviceFanMode, setAddDeviceMode, cancelAddDeviceMode, deleteDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeviceListFromDB", function() { return getDeviceListFromDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullReadings", function() { return getFullReadings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadings", function() { return getReadings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDesiredTemperature", function() { return setDesiredTemperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeviceMode", function() { return setDeviceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeviceFanMode", function() { return setDeviceFanMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddDeviceMode", function() { return setAddDeviceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAddDeviceMode", function() { return cancelAddDeviceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDevice", function() { return deleteDevice; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/queries */ "./src/queries/index.js");




var newDeviceName = "NO NAME";
var sendResponse = function sendResponse(res, responseString) {
  res.status(200);
  res.send(responseString);
};
var validateAccessToken = function validateAccessToken() {};
var getDeviceListFromDB = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(hubId) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _src_queries__WEBPACK_IMPORTED_MODULE_3__["default"].getDevicesBySearchTerm({
            hubId: hubId
          });
        case 2:
          response = _context.sent;
          return _context.abrupt("return", response);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getDeviceListFromDB(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * getFullReadings - returns all device data
 * @param {*} req 
 * @param {*} res 
 * @param {*} deviceData 
 */
var getFullReadings = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(req, res, deviceData) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          response = JSON.stringify(deviceData);
          sendResponse(res, response);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getFullReadings(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * getReadings returns desired temperature and receive device curent humidity and temperature.
 * @param {*} req 
 * @param {*} res 
 */
var getReadings = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(req, res, deviceData, deviceResponse, hubPreferences) {
    var result, hubId, users, userId, deviceObj, i, deviceId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          result = '';
          hubId = req.hubId;
          if (!(hubPreferences.mode === 1)) {
            _context3.next = 19;
            break;
          }
          if (!(req.fullData.length > 1 && req.fullData[1][0] == "added")) {
            _context3.next = 16;
            break;
          }
          _context3.next = 6;
          return _src_queries__WEBPACK_IMPORTED_MODULE_3__["default"].getUserIdByDeviceId(hubId);
        case 6:
          users = _context3.sent;
          if (users.length === 0) {
            sendResponse(res, "{'error': 'no user data'}");
          }
          userId = users[0].userId;
          deviceObj = {
            "deviceId": deviceData.length.toString(),
            "userId": userId,
            "deviceName": newDeviceName,
            "hubId": hubId,
            "group": "My home",
            "humidity": "0",
            "curentTemp": "0",
            "requiredTemp": "0",
            "mode": "1",
            "fanMode": "0"
          };
          deviceData.push(deviceObj);
          _src_queries__WEBPACK_IMPORTED_MODULE_3__["default"].addDevice(deviceObj);
          hubPreferences.mode = 0;
          result = "[##]";
          _context3.next = 17;
          break;
        case 16:
          // Add device mode - send next available device ID to the HUB
          result = "[#,".concat(deviceData.length, "]");
        case 17:
          _context3.next = 20;
          break;
        case 19:
          if (hubPreferences.mode == 2) {
            sendResponse(res, '[##, 1]'); // ## - device added, 1 - ok
            console.log("Device added!");
          } else if (hubPreferences.mode == 3) {
            sendResponse(res, '[##, 1]'); // ## - device deleted, 1 - ok
            console.log("Device deleted!");
          } else {
            //////////////////////////////////////
            // Normal operationg mode
            //////////////////////////////////////
            for (i = 0; i < deviceData.length; i++) {
              // set up deviceData with the real data from devices
              if (typeof deviceResponse[i] != 'undefined' && deviceResponse.length > 1) {
                // deviceResponse[0][0] is the hub ID
                if (typeof deviceResponse[i + 1] !== 'undefined' && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(deviceResponse[i + 1]) == 'object') {
                  deviceId = deviceResponse[i + 1][0];
                  deviceData[deviceId].humidity = deviceResponse[i + 1][1];
                  deviceData[deviceId].curentTemp = deviceResponse[i + 1][2];
                  deviceData[deviceId].lastConnected = new Date();
                }
              }
              // get the desired temperature
              result += '[' + deviceData[i].deviceId + ',' + deviceData[i].requiredTemp + ',' + deviceData[i].mode + ',' + deviceData[i].fanMode + ']';
            }
            //if(result == '')
            //result = '[]';    
          }
        case 20:
          //result = '[#,1,2,3]'; // for testing purposes
          sendResponse(res, result);
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getReadings(_x5, _x6, _x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var setDesiredTemperature = /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(req, res, deviceData, requestData) {
    var data, id, temp, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          data = requestData[1];
          id = data[0];
          temp = data[1];
          deviceData[id].requiredTemp = temp;
          result = "{\"status\": \"success\"}";
          sendResponse(res, result);
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function setDesiredTemperature(_x10, _x11, _x12, _x13) {
    return _ref4.apply(this, arguments);
  };
}();
var setDeviceMode = /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(req, res, deviceData, requestData) {
    var data, id, mode, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          data = requestData[1];
          id = data[0];
          mode = data[1];
          deviceData[id].mode = mode;
          result = "{\"status\": \"success\"}";
          sendResponse(res, result);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function setDeviceMode(_x14, _x15, _x16, _x17) {
    return _ref5.apply(this, arguments);
  };
}();
var setDeviceFanMode = /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(req, res, deviceData, requestData) {
    var data, id, mode, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          data = requestData[1];
          id = data[0];
          mode = data[1];
          deviceData[id].fanMode = mode;
          result = "{\"status\": \"success\"}";
          sendResponse(res, result);
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function setDeviceFanMode(_x18, _x19, _x20, _x21) {
    return _ref6.apply(this, arguments);
  };
}();
var cancelAddDeviceMode = /*#__PURE__*/function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(req, res, deviceData, requestData, hubPreferences) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          result = "{\"status\": \"adding canceled\"}";
          hubPreferences.mode = 0; // adding device
          sendResponse(res, result);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function cancelAddDeviceMode(_x22, _x23, _x24, _x25, _x26) {
    return _ref7.apply(this, arguments);
  };
}();
var setAddDeviceMode = /*#__PURE__*/function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(req, res, deviceData, requestData, hubPreferences) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          newDeviceName = requestData[0][1];
          result = "{\"status\": \"adding\"}";
          hubPreferences.mode = 1; // adding device
          sendResponse(res, result);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function setAddDeviceMode(_x27, _x28, _x29, _x30, _x31) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteDevice = /*#__PURE__*/function () {
  var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9(req, res, deviceData, requestData, hubPreferences) {
    var hubId, removeDeviceList, i, data, tId, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          hubId = requestData[0][0];
          removeDeviceList = requestData[1];
          for (i in deviceData) {
            data = deviceData[i];
            tId = data.deviceId;
            if (removeDeviceList.indexOf(tId) !== -1) {
              _src_queries__WEBPACK_IMPORTED_MODULE_3__["default"].remove({
                deviceId: tId
              });
            }
          }
          _context9.next = 5;
          return _src_queries__WEBPACK_IMPORTED_MODULE_3__["default"].getDevicesBySearchTerm({
            hubId: hubId
          });
        case 5:
          deviceData = _context9.sent;
          result = "{\"status\": \"deleted\"}";
          sendResponse(res, result);
        case 8:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function deleteDevice(_x32, _x33, _x34, _x35, _x36) {
    return _ref9.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./expressMiddlewares/requestDataFromAPI.js":
/*!**************************************************!*\
  !*** ./expressMiddlewares/requestDataFromAPI.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_containers_PageLayout_PageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/containers/PageLayout/PageData */ "./src/containers/PageLayout/PageData/index.js");
/* harmony import */ var _src_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/queries */ "./src/queries/index.js");



var url = __webpack_require__(/*! url */ "url");
var querystring = __webpack_require__(/*! querystring */ "querystring");

var stringToObject = function stringToObject(str) {
  var fullString = str == '' ? '[]' : '[' + str.split("][").join("],[") + ']';
  return JSON.parse(fullString);
};
var sendResponse = function sendResponse(res, responseString) {
  res.status(200);
  res.removeHeader('X-Powered-By');
  res.removeHeader('Set-Cookie');
  res.removeHeader('Connection');
  res.send(responseString);
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} devicesData 
 * @param {*} usersData 
 * @param {*} next 
 * @returns 
 */
var requestDataFromAPI = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res, usersData, next) {
    var _PageData$req$pathnam;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          req.parsedUrl = url.parse(req.url);
          req.pathname = req.parsedUrl.pathname;
          req.template = ((_PageData$req$pathnam = _src_containers_PageLayout_PageData__WEBPACK_IMPORTED_MODULE_2__["default"][req.pathname]) === null || _PageData$req$pathnam === void 0 ? void 0 : _PageData$req$pathnam.template) || null;
          req.parsedQs = querystring.parse(req.parsedUrl.query);
          req.apiData = {};
          next();
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function requestDataFromAPI(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (requestDataFromAPI);

/***/ }),

/***/ "./expressMiddlewares/userServices/index.js":
/*!**************************************************!*\
  !*** ./expressMiddlewares/userServices/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./expressMiddlewares/userServices/services.js");



var stringToObject = function stringToObject(str) {
  var fullString = str == '' ? '[]' : '[' + str.split('][').join('],[') + ']';
  return JSON.parse(fullString);
};
var UserServices = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res, usersData) {
    var action;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          action = req.params[0];
          _context.t0 = action;
          _context.next = _context.t0 === 'register-user' ? 4 : _context.t0 === 'log-in' ? 7 : _context.t0 === 'log-out' ? 10 : _context.t0 === 'update-user' ? 13 : 15;
          break;
        case 4:
          _context.next = 6;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["registerUser"])(req, res);
        case 6:
          return _context.abrupt("break", 15);
        case 7:
          _context.next = 9;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["logIn"])(req, res, usersData);
        case 9:
          return _context.abrupt("break", 15);
        case 10:
          _context.next = 12;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["logOut"])(req, res, usersData);
        case 12:
          return _context.abrupt("break", 15);
        case 13:
          _context.next = 15;
          return Object(_services__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(req, res, usersData);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function UserServices(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (UserServices);

/***/ }),

/***/ "./expressMiddlewares/userServices/services.js":
/*!*****************************************************!*\
  !*** ./expressMiddlewares/userServices/services.js ***!
  \*****************************************************/
/*! exports provided: registerUser, logIn, logOut, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/queries */ "./src/queries/index.js");



var crypto = __webpack_require__(/*! crypto */ "crypto");
var sendResponse = function sendResponse(res, responseString) {
  res.status(200);
  res.removeHeader('X-Powered-By');
  res.removeHeader('Set-Cookie');
  res.removeHeader('Connection');
  res.send(responseString);
};
var registerUser = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
    var requestObj, email, password, hubId, user, hubResult, updateHubResult, resultUpdate;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          requestObj = JSON.parse(req.body);
          email = requestObj.email;
          password = requestObj.password;
          hubId = requestObj.hubId;
          if (!(email === '' && password === '' && hubId === '')) {
            _context.next = 7;
            break;
          }
          sendResponse(res, {
            message: 'Some of fields are empty!',
            errorCode: 1
          });
          return _context.abrupt("return");
        case 7:
          _context.next = 9;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].getUser({
            email: email
          });
        case 9:
          user = _context.sent;
          if (!(user.length > 0)) {
            _context.next = 13;
            break;
          }
          sendResponse(res, {
            message: 'Email exists!',
            errorCode: 1
          });
          return _context.abrupt("return");
        case 13:
          _context.next = 15;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].getHub({
            id: hubId
          });
        case 15:
          hubResult = _context.sent;
          if (!(hubResult.length === 0)) {
            _context.next = 19;
            break;
          }
          sendResponse(res, {
            message: 'Cannot find purchased hub with this id!',
            errorCode: 2
          });
          return _context.abrupt("return");
        case 19:
          _context.next = 21;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].updateHub({
            id: hubId
          }, {
            registered: true
          });
        case 21:
          updateHubResult = _context.sent;
          requestObj.id = hubId + '-u';
          requestObj.group = 'user';
          requestObj.deviceHubs = [hubId];
          _context.next = 27;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].addUser(requestObj);
        case 27:
          resultUpdate = _context.sent;
          if (resultUpdate.result.ok === 1) {
            sendResponse(res, {
              message: "User addded !"
            });
          } else {
            sendResponse(res, {
              message: "Unknown error !",
              errorCode: 1
            });
          }
        case 29:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function registerUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var logIn = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res, usersData) {
    var requestObj, email, password, users, user, name, hash, userId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          requestObj = JSON.parse(req.body);
          email = requestObj.email;
          password = requestObj.password;
          _context2.next = 5;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].getUser({
            email: email,
            password: password
          });
        case 5:
          users = _context2.sent;
          if (!(users.length === 0)) {
            _context2.next = 9;
            break;
          }
          sendResponse(res, {
            error: 1,
            message: 'Username or password do not match!'
          });
          return _context2.abrupt("return");
        case 9:
          user = users[0];
          delete user.password;
          name = "".concat(user.email, "salt").concat(user.userId);
          hash = crypto.createHash('md5').update(name).digest('hex');
          userId = user.id;
          user.accessToken = hash;
          _context2.next = 17;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].updateUser({
            email: email,
            password: password
          }, {
            accessToken: hash
          });
        case 17:
          if (typeof usersData[userId] === 'undefined') {
            usersData[userId] = user;
          }
          sendResponse(res, user);
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function logIn(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var logOut = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(req, res, usersData) {
    var requestObj, email, accessToken, users, userId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          requestObj = JSON.parse(req.body);
          email = requestObj.email;
          accessToken = requestObj.accessToken;
          _context3.next = 5;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].getUser({
            email: email
          });
        case 5:
          users = _context3.sent;
          userId = users[0].id;
          delete usersData[userId];
          if (!(users.length === 0)) {
            _context3.next = 11;
            break;
          }
          sendResponse(res, {
            error: 1,
            message: 'Username can`t be found!'
          });
          return _context3.abrupt("return");
        case 11:
          if (!(accessToken !== requestObj.accessToken)) {
            _context3.next = 14;
            break;
          }
          sendResponse(res, {
            error: 1,
            message: 'Access token is invalid'
          });
          return _context3.abrupt("return");
        case 14:
          _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].updateUser({
            email: email,
            accessToken: accessToken
          }, {
            accessToken: ''
          });
          sendResponse(res, {
            message: "You are logged out !"
          });
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function logOut(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
var updateUser = /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(req, res, usersData) {
    var requestObj, userFromCookie, searchObj, updateObj, hub, hubUpdateResult, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          requestObj = JSON.parse(req.body);
          userFromCookie = JSON.parse(req.cookies.user);
          if (!(userFromCookie.accessToken !== requestObj.accessToken || userFromCookie.email !== requestObj.email)) {
            _context4.next = 5;
            break;
          }
          sendResponse(res, {
            message: 'Invalid access token while updating user data!',
            errorCode: 1
          });
          return _context4.abrupt("return");
        case 5:
          if (!(userFromCookie.password !== requestObj.oldPassword)) {
            _context4.next = 8;
            break;
          }
          sendResponse(res, {
            message: 'Invalid password!',
            errorCode: 1
          });
          return _context4.abrupt("return");
        case 8:
          searchObj = {
            email: userFromCookie.email,
            accessToken: userFromCookie.accessToken
          };
          updateObj = {};
          if (typeof (requestObj === null || requestObj === void 0 ? void 0 : requestObj.password) !== 'undefined') {
            updateObj.password = requestObj.newPassword;
          }
          if (!(typeof (requestObj === null || requestObj === void 0 ? void 0 : requestObj.hubId) !== 'undefined')) {
            _context4.next = 26;
            break;
          }
          _context4.next = 14;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].getHub({
            id: requestObj.hubId
          });
        case 14:
          hub = _context4.sent;
          if (!(hub.length === 0)) {
            _context4.next = 18;
            break;
          }
          sendResponse(res, {
            message: "Can't find this hub id !",
            errorCode: 1
          });
          return _context4.abrupt("return");
        case 18:
          if (!(hub[0].registered === true)) {
            _context4.next = 21;
            break;
          }
          sendResponse(res, {
            message: "Hub with this id is already registered !",
            errorCode: 1
          });
          return _context4.abrupt("return");
        case 21:
          _context4.next = 23;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].updateHub({
            id: requestObj.hubId
          }, {
            registered: true
          });
        case 23:
          hubUpdateResult = _context4.sent;
          updateObj.deviceHubs = [];
          updateObj.deviceHubs[0] = requestObj.hubId;
        case 26:
          _context4.next = 28;
          return _src_queries__WEBPACK_IMPORTED_MODULE_2__["default"].updateUser(searchObj, updateObj);
        case 28:
          result = _context4.sent;
          if (result.matchedCount !== 1) {
            sendResponse(res, {
              message: "Unknown error !",
              errorCode: 1
            });
          } else sendResponse(res, {
            message: "success!"
          });
        case 30:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateUser(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_PageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/PageLayout */ "./src/containers/PageLayout/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/components/App/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);





var client = function client(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "*",
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_PageLayout__WEBPACK_IMPORTED_MODULE_3__["default"], props);
    }
  })));
};
var context = {};
var server = function server(props) {
  var cookies = props.cookies;
  var apiData = props.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: props.url,
    serverCookies: cookies,
    apiData: apiData,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "*",
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_PageLayout__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        serverCookies: cookies,
        apiData: apiData
      }, props));
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var req = _ref.req;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a.appWrapper
  }, typeof window == 'undefined' ? server(req) : client(req));
});

/***/ }),

/***/ "./src/components/App/styles.scss":
/*!****************************************!*\
  !*** ./src/components/App/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"appWrapper":"App-appWrapper--GtBHA"};

/***/ }),

/***/ "./src/components/BulletPoint/index.js":
/*!*********************************************!*\
  !*** ./src/components/BulletPoint/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/BulletPoint/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");



var toggleSelect = function toggleSelect(element, flagName, flagId) {
  if (element.target.className.search('BulletPoint-flagBuletSelected')) {
    element.target.className = _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagBuletSelected;
    _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__["default"].callEvent('setSelectedList')(flagId);
  } else {
    element.target.className = _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagBuletEditable;
    _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__["default"].callEvent('unsetSelectedList')(flagId);
  }
};
var BulletPoint = function BulletPoint(_ref) {
  var status = _ref.status,
    flagName = _ref.flagName,
    flagId = _ref.flagId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagBuletEditable,
    onClick: function onClick(element) {
      toggleSelect(element, flagName, flagId);
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagBulet
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.spacing
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (BulletPoint);

/***/ }),

/***/ "./src/components/BulletPoint/styles.scss":
/*!************************************************!*\
  !*** ./src/components/BulletPoint/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"flagBulet":"BulletPoint-flagBulet--2XWfE","flagBuletEditable":"BulletPoint-flagBuletEditable--2C1I3","flagBuletSelected":"BulletPoint-flagBuletSelected--xCvyU","spacing":"BulletPoint-spacing--33w1y"};

/***/ }),

/***/ "./src/components/Dialer/index.js":
/*!****************************************!*\
  !*** ./src/components/Dialer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Dialer/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 
 * @param {function} onChangeCallback - callback function in the HOC to be called on dialer value changed
 * @param {number} SliderId
 * @param {number} Min
 * @param {number} max
 * @param {number} Step - steps between value and value + 1 (2 will make the dailer to do 0, 0.5, 1 on drag.) 10 will go through all 10 values between 0 and 1
 * @param {number} ShowPrecision - how many digints after decimal point to show
 * @param {function} SetRangeValue - the function in HOC to be called when the value of the dialer should be changed.
 * @param {function} setTempAndHumidity
 * @param {function} onEditingMode - returns either the diler is dragged or not. Helpfull to disable update when the user drag it.
 * 
 * @returns 
 */

var dialerSetUp = [];
var Dialer = function Dialer(_ref) {
  var onChangeCallback = _ref.onChangeCallback,
    SliderId = _ref.SliderId,
    Min = _ref.Min,
    Max = _ref.Max,
    Step = _ref.Step,
    ShowPrecision = _ref.ShowPrecision,
    SetRangeValue = _ref.SetRangeValue,
    setTempAndHumidity = _ref.setTempAndHumidity,
    onEditingMode = _ref.onEditingMode;
  var beginDrag = false;
  var val = 0;
  var min = parseFloat(Min);
  var max = parseFloat(Max);
  var step = parseFloat(Step);
  var ratio = 360 / (max - min);
  var rangeSelectorValueChanged = function rangeSelectorValueChanged() {
    var val = document.querySelectorAll('.labelPrimary')[SliderId].innerText;
    onChangeCallback(SliderId, val);
  };
  var setValue = function setValue(val) {
    val = parseFloat(val).toFixed(ShowPrecision);
    var rotateAngle = 360 / (max - min) * val;
    if (typeof document == 'undefined') return;
    document.querySelectorAll('.labelPrimary')[SliderId].innerText = val + ' °C';
    document.querySelectorAll('.circle > .dot')[SliderId].style.transform = "rotate(".concat(rotateAngle, "deg)");
  };
  var _setTempAndHumidity = function _setTempAndHumidity(humidity, temperature) {
    document.querySelectorAll('.labelSecondary')[SliderId].innerText = parseFloat(temperature).toFixed(ShowPrecision) + ' °C';
    document.querySelectorAll('.labelThird')[SliderId].innerText = parseFloat(humidity).toFixed(ShowPrecision);
  };
  setTempAndHumidity(_setTempAndHumidity);
  SetRangeValue(setValue); // pass setValue to be accessed from parent component.

  var mouseMoveAction = function mouseMoveAction(e) {
    if (beginDrag == false) return;
    var center_x = document.querySelectorAll('.circle')[SliderId].offsetWidth / 2 + document.querySelectorAll('.circle')[SliderId].offsetLeft;
    var center_y = document.querySelectorAll('.circle')[SliderId].offsetHeight / 2 + document.querySelectorAll('.circle')[SliderId].offsetTop;
    var eventObj;
    if (e.touches) eventObj = e.touches[0];else eventObj = e;
    var pos_x = eventObj.pageX;
    var pos_y = eventObj.pageY;
    var delta_y = center_y - pos_y;
    var delta_x = center_x - pos_x;
    var angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI); // Calculate Angle between circle center and mouse pos
    angle -= 90;
    if (angle < 0) angle = 360 + angle; // Always show angle positive
    angle = Math.round(angle);
    document.querySelectorAll('.circle > .dot')[SliderId].style.transform = "rotate(".concat(angle, "deg)");
    var m = parseFloat(min);
    var a = Math.round(angle / ratio * step) / step;
    val = (m + a).toFixed(ShowPrecision);
    document.querySelectorAll('.labelPrimary')[SliderId].innerText = val;
  };
  var dialerPressed = function dialerPressed() {
    beginDrag = true;
    onEditingMode(true);
    document.querySelector('body').classList.add('preventScrolling');
  };
  var dialerReleased = function dialerReleased() {
    beginDrag = false;
    rangeSelectorValueChanged();
    onEditingMode(false);
    document.querySelector('body').classList.remove('preventScrolling');
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (dialerSetUp[SliderId]) {
      return;
    }
    dialerSetUp[SliderId] = true;
    console.log("useEffect");
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('touchstart', function (e) {
      dialerPressed();
    });
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('touchend', function (e) {
      dialerReleased();
    });
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('mousedown', function (e) {
      dialerPressed();
    });
    document.querySelectorAll('.circle > .dot')[SliderId].addEventListener('mouseup', function (e) {
      dialerReleased();
    });
    document.addEventListener('mousemove', function (e) {
      mouseMoveAction(e);
    });
    document.addEventListener('touchmove', function (e) {
      mouseMoveAction(e);
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.circle, 'circle'].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.labelPrimary, 'labelPrimary'].join(' ')
  }, " -- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.labelSecondary, 'labelSecondary'].join(' ')
  }, " -- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.labelThird, 'labelThird'].join(' ')
  }, " -- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dot, 'dot'].join(' ')
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Dialer);

/***/ }),

/***/ "./src/components/Dialer/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Dialer/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Dialer-wrapper--2dvWq","circle":"Dialer-circle--1FhmA","dot":"Dialer-dot--2x6Xc","labelPrimary":"Dialer-labelPrimary--3Ky1a","labelSecondary":"Dialer-labelSecondary--1l3rj","labelThird":"Dialer-labelThird--ylg29"};

/***/ }),

/***/ "./src/components/EditDelete/index.js":
/*!********************************************!*\
  !*** ./src/components/EditDelete/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/EditDelete/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");
/* harmony import */ var _GeneralPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GeneralPopup */ "./src/components/GeneralPopup/index.js");




var deleteFlag = function deleteFlag(hubId, deletelist, editFlag) {
  var list = JSON.stringify(deletelist);
  fetch("".concat("http://toni-develops.com", ":").concat("8085", "/device-services/delete-device?data=[\"").concat(hubId, "\"]").concat(list)).then(function (response) {
    return response.json();
  }).then(function (data) {
    _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__["default"].callEvent('devices-deleted')();
    editFlag();
  });
};
var deleteFlags = function deleteFlags(hubId, editFlag) {
  var list = _containers_EventsManager__WEBPACK_IMPORTED_MODULE_2__["default"].callEvent('getSelectedList')();
  var deletelist = [];
  for (var index in list) {
    if (list[index]) {
      deletelist.push(index);
    }
  }
  deleteFlag(hubId, deletelist, editFlag);
};
var EditDelete = function EditDelete(_ref) {
  var flagEditable = _ref.flagEditable,
    editFlag = _ref.editFlag,
    hubId = _ref.hubId;
  if (!flagEditable) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        editFlag();
      }
    }, "EDIT");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.editDelete
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.deleteButton,
      onClick: function onClick() {
        deleteFlags(hubId, editFlag);
      }
    }, "DELETE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        editFlag();
      }
    }, "CANCEL"));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EditDelete);

/***/ }),

/***/ "./src/components/EditDelete/styles.scss":
/*!***********************************************!*\
  !*** ./src/components/EditDelete/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"editDelete":"EditDelete-editDelete--3eQh-","deleteButton":"EditDelete-deleteButton--s7f0_"};

/***/ }),

/***/ "./src/components/GeneralPopup/index.js":
/*!**********************************************!*\
  !*** ./src/components/GeneralPopup/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/components/GeneralPopup/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");




var Renderer = function Renderer(_ref) {
  var showPopup = _ref.showPopup;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(showPopup),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    popupVisible = _useState2[0],
    setPopupVisible = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  function closePopup() {
    setPopupVisible(false);
  }
  function showPopupFunc(message) {
    setMessage(message);
    setPopupVisible(true);
  }

  // register global showPopup to be called by other components
  _containers_EventsManager__WEBPACK_IMPORTED_MODULE_3__["default"].registerEvent('showPopup', showPopupFunc);
  return popupVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "addFeatureFlag",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: function onClick() {
      closePopup();
    },
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.close
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message
  }, message))) : null;
};
/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/components/GeneralPopup/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/GeneralPopup/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"GeneralPopup-modal--OnTgp","modalContent":"GeneralPopup-modalContent--1NTQT","close":"GeneralPopup-close--3VIzC","message":"GeneralPopup-message--3VEhO"};

/***/ }),

/***/ "./src/components/Home/AddPopup/index.js":
/*!***********************************************!*\
  !*** ./src/components/Home/AddPopup/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Home/AddPopup/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/getParams */ "./src/utils/getParams.js");
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers/EventsManager */ "./src/containers/EventsManager/index.js");
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/Poster */ "./src/utils/Poster.js");






var mode = 0;
var AddPopup = function AddPopup(_ref) {
  var closePopup = _ref.closePopup,
    newDeviceAdded = _ref.newDeviceAdded,
    deviceAddedClear = _ref.deviceAddedClear;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('ADD DEVICE NAME'),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    msg = _useState2[0],
    setMsg = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('ADD DEVICE'),
    _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    buttonText = _useState4[0],
    setButtonText = _useState4[1];
  //const [isMounted, setIsMounted] = useState(false);

  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setInterval(function () {
      console.log('mode :', mode);
      if (!mounted.current) return;
      if (mode == 2 && newDeviceAdded()) {
        setMsg('New device was successfuly added!');
        setButtonText('DONE');
        mode = 3;
      }
    }, 4000);
    mounted.current = true;
    return function () {
      return mounted.current = false;
    };
  });
  var addFlag = function addFlag() {
    var apiData = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : window.__API_DATA__;
    var hubId = apiData.hubId;
    if (mode == 1) {
      // waiting to finish fetch from mode 0
    }
    if (mode == 2) {
      if (document.querySelector('#addFeatureFlag > div > div button').innerHTML === 'CANCEL') {
        fetch("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_3__["deviceApiUrl"], "/cancel-add-device?data=[\"").concat(hubId, "\"]")).then(function (response) {
          return response.json();
        }).then(function (data) {
          closePopup();
          mode = 0;
        });
        mode = 0;
        return;
      } else {
        setMsg('New device was successfuly added!');
        setButtonText('DONE');
        mode = 3;
      }
    }
    if (mode == 3) {
      // done      
      mode = 0;
      setMsg('...');
      setButtonText('ADD DEVICE');
      deviceAddedClear();
      closePopup();
    } else if (mode == 3) {
      // done 
      mode = 0;
      setMsg('...');
      setButtonText('ADD DEVICE');
      closePopup();
    } else if (mode == 0) {
      mode = 1;
      var deviceName = document.querySelector("#popup-device-name").value;
      fetch("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_3__["deviceApiUrl"], "/add-device?data=[\"").concat(hubId, "\", \"").concat(deviceName, "\"]")).then(function (response) {
        return response.json();
      }).then(function (data) {
        setMsg('Looking for the new device ...');
        setButtonText('CANCEL');
        mode = 2;
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "addFeatureFlag",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: function onClick() {
      closePopup();
    },
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.close
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.flagProperties
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "popup-device-name",
    type: "text",
    defaultValue: "new device name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      addFlag();
    }
  }, buttonText)))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddPopup);

/***/ }),

/***/ "./src/components/Home/AddPopup/styles.scss":
/*!**************************************************!*\
  !*** ./src/components/Home/AddPopup/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"AddPopup-modal--202IA","modalContent":"AddPopup-modalContent--ZHo4C","close":"AddPopup-close--3M2Ra"};

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Home/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ToggleSwitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ToggleSwitch */ "./src/components/ToggleSwitch/index.js");
/* harmony import */ var _BulletPoint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../BulletPoint */ "./src/components/BulletPoint/index.js");
/* harmony import */ var _AddPopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AddPopup */ "./src/components/Home/AddPopup/index.js");
/* harmony import */ var _MessagePopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../MessagePopup */ "./src/components/MessagePopup/index.js");
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _EditDelete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../EditDelete */ "./src/components/EditDelete/index.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");
/* harmony import */ var _Dialer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Dialer */ "./src/components/Dialer/index.js");
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../RangeSlider */ "./src/components/RangeSlider/index.js");
/* harmony import */ var _TemperatureBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../TemperatureBar */ "./src/components/TemperatureBar/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=West%20New%20York&units=metric&appid=[api key here]";

var Home = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _Component);
  var _super = _createSuper(Home);
  function Home(props) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Home);
    _this = _super.call(this, props);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "fetchWeatherData", function () {
      if (typeof window == 'undefined') return;
      var refreshRate = 60000;
      fetch('/weather-services/get-local-weather').then(function (response) {
        return response.json();
      }).then(function (data) {
        var outsideTemp = data.main.temp;
        var feelsLike = data.main.feels_like;
        var humidity = data.main.humidity;
        var icon = data.weather[0].icon;
        var minTemp = data.main.temp_min;
        var maxTemp = data.main.temp_max;
        var pressure = data.main.pressure;
        //const windSpeed = data.main.wind.speed;
        _this.setState({
          icon: icon
        });
        _this.setState({
          outsideTemp: outsideTemp,
          feelsLike: feelsLike,
          humidity: humidity,
          minTemp: minTemp,
          maxTemp: maxTemp,
          pressure: pressure
        });
        setTimeout(function () {
          _this.fetchWeatherData();
        }, refreshRate);
      });
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "fetchData", function () {
      var user = _this.cookies.get('user');
      if (typeof window == 'undefined' || _this.fetching === true || typeof user === 'undefined') return;
      _this.fetching = true;
      var refreshRate = 2000;
      if (_this.disableFetchData === true) {
        setTimeout(function () {
          _this.fetchData();
        }, refreshRate);
        return;
      }
      fetch("".concat("http://toni-develops.com", ":").concat("8085", "/device-services/get-full-data?data=[\"").concat(_this.hubId, "\"]")).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (typeof (data === null || data === void 0 ? void 0 : data.error) !== 'undefined') {
          console.log("######################");
          console.log("error: ", data.error);
          console.log("######################");
          //window.location = '/sign-out';
        }

        if (_this.dataLength < data.length) {
          _this.dataLength = data.length;
          _this.DevicesData = data;
          _this.newDeviceAdded = true;
        }
        for (var i = 0; i < data.length; i++) {
          var id = data[i].id;
          var curentTemp = data[i].curentTemp;
          var curentHumidity = data[i].humidity;
          var requiredTemp = data[i].requiredTemp;
          var mode = data[i].mode;
          var fanMode = data[i].fanMode;
          if (typeof data[i].lastConnected === 'undefined' || (new Date() - new Date(data[i].lastConnected)) / 1000 > 20) {
            var newDeviceBodyCSS = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.deviceBodyCSS);
            newDeviceBodyCSS[i] = [_styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.flagWrapper, _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.flagWrapperError];
            _this.setState({
              deviceBodyCSS: newDeviceBodyCSS
            });
          } else {
            var _newDeviceBodyCSS = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.deviceBodyCSS);
            _newDeviceBodyCSS[i] = [_styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.flagWrapper];
            _this.setState({
              deviceBodyCSS: _newDeviceBodyCSS
            });
          }
          if (typeof _this.changeRange[i] != 'undefined') {
            _this.changeRange[i](requiredTemp);
            _this.setTempAndHumidity[i](curentHumidity, curentTemp);
            _this.setDevicesliderMode[i](mode);
            _this.setDeviceFanSliderMode[i](fanMode);
            _this.connected = false;
          }
        }
        _this.fetching = false;
        setTimeout(function () {
          _this.fetchData();
        }, refreshRate);
      });
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "disableFetch", function (mode) {
      _this.disableFetchData = mode;
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onChangeTemperatureCallback", function (deviceId, requiredTemperature) {
      fetch("".concat("http://toni-develops.com", ":").concat("8085", "/device-services/set-desired-temperature?data=[\"").concat(_this.hubId, "\"][").concat(deviceId, ",").concat(requiredTemperature, "]")).then(function (response) {
        return response.json();
      }).then(function (data) {});
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onChangeDeviceModeCallback", function (deviceId, requiredMode) {
      fetch("".concat("http://toni-develops.com", ":").concat("8085", "/device-services/set-device-mode?data=[\"").concat(_this.hubId, "\"][").concat(deviceId, ",").concat(requiredMode, "]")).then(function (response) {
        return response.json();
      }).then(function (data) {});
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onChangeDeviceFanCallback", function (deviceId, requiredMode) {
      fetch("".concat("http://toni-develops.com", ":").concat("8085", "/device-services/set-device-fan-mode?data=[\"").concat(_this.hubId, "\"][").concat(deviceId, ",").concat(requiredMode, "]")).then(function (response) {
        return response.json();
      }).then(function (data) {});
    });
    _this.getDevicesSettings();
    _this.changeRange = [];
    _this.setTempAndHumidity = [];
    _this.setDialersForTheFirstTime = false;
    _this.setDevicesliderMode = [];
    _this.setDeviceFanSliderMode = [];
    _this.disableFetchData = false;
    _this.hubId = null;
    _this.dataLength = 0;
    _this.newDeviceAdded = false;
    _this.cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_20___default.a();
    _this.addFlagVisible = false;
    _this.state = {
      addFlagVisible: false,
      messagePopup: false,
      messagePopupText: '',
      flagEditable: false,
      deviceBodyCSS: [],
      Devices: [],
      // weather data
      icon: '01d',
      outsideTemp: 0,
      feelsLike: 0,
      humidity: 0
    };
    // get api data
    var apiData = typeof global.__API_DATA__ !== 'undefined' ? global.__API_DATA__ : typeof window === 'undefined' ? {} : window.__API_DATA__;
    _this.DevicesData = apiData.DevicesData;
    _this.hubId = apiData.hubId;
    if (typeof window !== 'undefined' && typeof _this.hubId === 'undefined') {
      //window.location = '/sign-in';
      console.log("Undefined Hub Id!");
    }
    // fetch device and weather data
    _this.fetching = false;
    _this.fetchData();
    _this.fetchWeatherData();
    _containers_EventsManager__WEBPACK_IMPORTED_MODULE_21__["default"].registerEvent('Devices-deleted', function () {
      _this.setState({
        messagePopupText: '<h2>Selected Devices removed!</h2><hr/><p>Make sure that you reset all erased Devices to set them up into add mode so you will be able to add them later.</p>'
      });
      _this.setState({
        messagePopup: true
      });
    });
    return _this;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Home, [{
    key: "addFlag",
    value: function addFlag() {
      this.setState({
        addFlagVisible: true
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.setState({
        addFlagVisible: false
      });
      this.getDevicesSettings();
    }
  }, {
    key: "closeMessagePopup",
    value: function closeMessagePopup() {
      //this.setState({messagePopup: false});    
      window.location.reload();
    }
  }, {
    key: "isNewDeviceAdded",
    value: function isNewDeviceAdded() {
      var result = this.newDeviceAdded;
      return result;
    }
  }, {
    key: "deviceAddedClear",
    value: function deviceAddedClear() {
      this.newDeviceAdded = false;
    }
  }, {
    key: "editFlag",
    value: function editFlag() {
      this.setState({
        flagEditable: !this.state.flagEditable
      });
    }
  }, {
    key: "getDevicesSettings",
    value: function getDevicesSettings() {
      // empty for now
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var Devices = this.DevicesData;
      var weatherIcon = "weather/icons/".concat(this.state.icon, ".png");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.wrapper
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.leftRail
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: [_styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.weatherTitle, 'weatherTitle'].join(' ')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: weatherIcon
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "outside: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, this.state.outsideTemp, " \xB0C"), "feels like: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, this.state.feelsLike, " \xB0C"), "humidity: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, this.state.humidity, " %"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.rightRail
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: this.state.flagEditable ? _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.addButtonHidden : _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.addButtonVisible,
        onClick: function onClick() {
          _this2.addFlag();
        }
      }, "ADD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_EditDelete__WEBPACK_IMPORTED_MODULE_15__["default"], {
        flagEditable: this.state.flagEditable,
        editFlag: function editFlag() {
          _this2.editFlag();
        },
        hubId: this.hubId
      })), Devices && Devices.map(function (device, tId) {
        var id = parseInt(device.deviceId);
        var key = "device-control-".concat(id);
        var deviceModeKey = "device-mode-".concat(id);
        var deviceFanModeKey = "device-fan-mode-".concat(id);
        var deviceName = device.deviceName;
        var wrapperClass = typeof _this2.state.deviceBodyCSS[tId] === 'undefined' ? [] : _this2.state.deviceBodyCSS[tId].join(' ');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: key,
          className: wrapperClass
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BulletPoint__WEBPACK_IMPORTED_MODULE_11__["default"], {
          flagName: deviceName,
          flagId: id,
          status: _this2.state.flagEditable
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.roomName
        }, deviceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_18__["default"], {
          min: 1,
          key: deviceModeKey,
          name: "device-mode-selector",
          onChangeCallback: _this2.onChangeDeviceModeCallback,
          SetRangeValue: function SetRangeValue(func) {
            _this2.setDevicesliderMode[id] = func;
          },
          SliderId: id,
          labels: ['OFF', 'COOL', 'HOT']
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.fanModeText
        }, "FAN MODE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_18__["default"], {
          min: 0,
          key: deviceFanModeKey,
          name: "device-fan-mode-selector",
          onChangeCallback: _this2.onChangeDeviceFanCallback,
          SetRangeValue: function SetRangeValue(func) {
            _this2.setDeviceFanSliderMode[id] = func;
          },
          SliderId: id,
          labels: ['AUTO', 'LOW', 'HIGH']
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Dialer__WEBPACK_IMPORTED_MODULE_17__["default"], {
          onChangeCallback: _this2.onChangeTemperatureCallback,
          onEditingMode: _this2.disableFetch,
          SliderId: id,
          Min: 0,
          Max: 90,
          Step: 2,
          ShowPrecision: 1,
          SetRangeValue: function SetRangeValue(func) {
            _this2.changeRange[id] = func;
          },
          setTempAndHumidity: function setTempAndHumidity(func) {
            _this2.setTempAndHumidity[id] = func;
          }
        }));
      })), this.state.addFlagVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AddPopup__WEBPACK_IMPORTED_MODULE_12__["default"], {
        newDeviceAdded: function newDeviceAdded() {
          return _this2.isNewDeviceAdded();
        },
        eviceAddedClear: function eviceAddedClear() {
          _this2.deviceAddedClear();
        },
        closePopup: function closePopup() {
          _this2.closePopup();
        }
      }) : null, this.state.messagePopup ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_MessagePopup__WEBPACK_IMPORTED_MODULE_13__["default"], {
        msg: this.state.messagePopupText,
        closeMessagePopup: function closeMessagePopup() {
          _this2.closeMessagePopup();
        }
      }) : null);
    }
  }]);
  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Home/styles.scss":
/*!*****************************************!*\
  !*** ./src/components/Home/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"weatherTitle":"Home-weatherTitle--3HthZ","wrapper":"Home-wrapper--3avi5","flagWrapper":"Home-flagWrapper--2aGak","flagWrapperError":"Home-flagWrapperError--3Trmy","fanModeText":"Home-fanModeText--hvfIh","leftRail":"Home-leftRail--1B5Fn","rightRail":"Home-rightRail--EYNWw","addButtonVisible":"Home-addButtonVisible--2yIBN","addButtonHidden":"Home-addButtonHidden--12snn"};

/***/ }),

/***/ "./src/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var styles = __webpack_require__(/*! ./styles.scss */ "./src/components/Loading/styles.scss");

/**
 * HELPER COMPONENT TO DISPLAY LOADING ... AND HANDLE ERRORS WHEN COMPONENTS LOADS DYNAMICALLY 
 * @param {} props 
 */
var Loading = function Loading(props) {
  if (props.error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.wrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Error loading component!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.error.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.error.stack), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: props.retry
    }, "Retry")));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Loading/styles.scss":
/*!********************************************!*\
  !*** ./src/components/Loading/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Loading-wrapper--2uAUn"};

/***/ }),

/***/ "./src/components/MessagePopup/index.js":
/*!**********************************************!*\
  !*** ./src/components/MessagePopup/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/MessagePopup/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);


var MessagePopup = function MessagePopup(_ref) {
  var msg = _ref.msg,
    closeMessagePopup = _ref.closeMessagePopup;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: function onClick() {
      closeMessagePopup();
    },
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.close
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.flagProperties
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: msg
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (MessagePopup);

/***/ }),

/***/ "./src/components/MessagePopup/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/MessagePopup/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"MessagePopup-modal--N5o7f","modalContent":"MessagePopup-modalContent--qC8VD","close":"MessagePopup-close--1yzMl"};

/***/ }),

/***/ "./src/components/RangeSlider/index.js":
/*!*********************************************!*\
  !*** ./src/components/RangeSlider/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/RangeSlider/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);


var RangeSlider = function RangeSlider(_ref) {
  var name = _ref.name,
    SliderId = _ref.SliderId,
    labels = _ref.labels,
    onChangeCallback = _ref.onChangeCallback,
    SetRangeValue = _ref.SetRangeValue,
    min = _ref.min;
  var inputId = "".concat(name, "-").concat(SliderId);
  var max = min + labels.length - 1;
  var modeChanged = function modeChanged(e) {
    onChangeCallback(SliderId, e.target.value);
  };
  var _SetRangeValue = function _SetRangeValue(range) {
    document.querySelector(".".concat(inputId)).value = range;
  };
  SetRangeValue(_SetRangeValue);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.labels
  }, labels.map(function (label, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: id
    }, label);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: [inputId].join(' '),
    onMouseUp: function onMouseUp(e) {
      modeChanged(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      modeChanged(e);
    },
    type: "range",
    min: min,
    max: max
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (RangeSlider);

/***/ }),

/***/ "./src/components/RangeSlider/styles.scss":
/*!************************************************!*\
  !*** ./src/components/RangeSlider/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"RangeSlider-wrapper--3QGS7","labels":"RangeSlider-labels--2teDk"};

/***/ }),

/***/ "./src/components/TemperatureBar/index.js":
/*!************************************************!*\
  !*** ./src/components/TemperatureBar/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/TemperatureBar/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");




var handleTemperatureChange = function handleTemperatureChange(event) {
  console.log(event.target.value);
};
var TemperatureBar = function TemperatureBar(_ref) {
  var temp = _ref.temp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Curent Temperature: "), temp);
};
/* harmony default export */ __webpack_exports__["default"] = (TemperatureBar);

/***/ }),

/***/ "./src/components/TemperatureBar/styles.scss":
/*!***************************************************!*\
  !*** ./src/components/TemperatureBar/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"label":"TemperatureBar-label--2-Bh7"};

/***/ }),

/***/ "./src/components/ToggleSwitch/index.js":
/*!**********************************************!*\
  !*** ./src/components/ToggleSwitch/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/components/ToggleSwitch/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");






var switchToggled = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(featureFlagName) {
    var flag, postData, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          flag = findFlagByName(featureFlagName);
          flag.value = flag.value === 'on' ? 'off' : 'on';
          postData = {
            updateFlag: {
              "flagName": featureFlagName
            },
            newFlagData: flag
          };
          console.log(">>>", _utils_getParams__WEBPACK_IMPORTED_MODULE_5__["apiUrl"]);
          _context.next = 6;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_4__["Poster"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_5__["apiUrl"], "/update"), postData);
        case 6:
          result = _context.sent;
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function switchToggled(_x) {
    return _ref.apply(this, arguments);
  };
}();
var findFlagByName = function findFlagByName(flagName) {
  var flags = window.__API_DATA__;
  var result;
  flags.forEach(function (element) {
    if (element.flagName == flagName) {
      result = element;
    }
  });
  return result;
};
var Renderer = function Renderer(_ref2) {
  var featureFlagName = _ref2.featureFlagName,
    val = _ref2.val;
  var checked = val === 'on' ? 'checked' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a["switch"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: featureFlagName,
    onChange: function onChange() {
      switchToggled(featureFlagName);
    },
    type: "checkbox",
    defaultChecked: checked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/components/ToggleSwitch/styles.scss":
/*!*************************************************!*\
  !*** ./src/components/ToggleSwitch/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"switch":"ToggleSwitch-switch--x-dXs","input":"ToggleSwitch-input--2upUx","slider":"ToggleSwitch-slider--16u3Q","round":"ToggleSwitch-round--3-huU"};

/***/ }),

/***/ "./src/components/Words/index.js":
/*!***************************************!*\
  !*** ./src/components/Words/index.js ***!
  \***************************************/
/*! exports provided: Words, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Words", function() { return Words; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/components/Words/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");







var setupFullDatabase = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_6__["apiUrl"], "/setup-full"), {});
        case 2:
          result = _context.sent;
          console.log(result);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function setupFullDatabase() {
    return _ref.apply(this, arguments);
  };
}();
var setupDatabase = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_6__["apiUrl"], "/setup"), {});
        case 2:
          result = _context2.sent;
          console.log(result);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function setupDatabase() {
    return _ref2.apply(this, arguments);
  };
}();
var setupHubsDatabase = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_6__["apiUrl"], "/setup-hubs-db"), {});
        case 2:
          result = _context3.sent;
          console.log(result);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function setupHubsDatabase() {
    return _ref3.apply(this, arguments);
  };
}();
var dropDatabase = /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_6__["apiUrl"], "/dropdb"), {});
        case 2:
          result = _context4.sent;
          console.log(result);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function dropDatabase() {
    return _ref4.apply(this, arguments);
  };
}();
if (typeof window !== 'undefined') {
  window.getRegion = function () {
    return "US";
  };
}
function Words() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    notAvailableModalVisible = _useState2[0],
    setNotAvailableModalVisible = _useState2[1];
  var notAvailableModalClose = function notAvailableModalClose() {
    setNotAvailableModalVisible(false);
    return true;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper
  }, notAvailableModalVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "##### SHOW / HIDE #######"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Wellcome to the setup page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      dropDatabase();
    }
  }, "!!!!DROP DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      setupHubsDatabase();
    }
  }, "CREATE TWO UNREGISTERED HUBS DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      setupDatabase();
    }
  }, "CREATE DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      setupFullDatabase();
    }
  }, "CREATE AND POPULATE DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      notAvailableModalClose();
    }
  }, "SHOW / HIDE"));
}

/* harmony default export */ __webpack_exports__["default"] = (Words);

/***/ }),

/***/ "./src/components/Words/styles.scss":
/*!******************************************!*\
  !*** ./src/components/Words/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Words-wrapper--TaDqC"};

/***/ }),

/***/ "./src/connectors/database/mongodb.js":
/*!********************************************!*\
  !*** ./src/connectors/database/mongodb.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);



//import assert from 'assert';

// Connection URL
var url = "mongodb://localhost:".concat("27017");
// Database Name
var dbName = "sparkjs-home-automation";
var connect = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var db, client;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          db = null;
          _context.prev = 1;
          _context.next = 4;
          return mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(url);
        case 4:
          client = _context.sent;
          db = client.db(dbName);
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log("Error connectiong to Mongo DB!");
          console.log(_context.t0.stack);
        case 12:
          return _context.abrupt("return", db);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function connect() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = ({
  add: function () {
    var _add = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(docObject, collectionName) {
      var result, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return connect();
          case 3:
            db = _context2.sent;
            _context2.next = 6;
            return db.collection(collectionName).insert(docObject);
          case 6:
            result = _context2.sent;
            return _context2.abrupt("return", result);
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.stack);
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function add(_x, _x2) {
      return _add.apply(this, arguments);
    }
    return add;
  }(),
  find: function () {
    var _find = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(searchObject, collectionName) {
      var client, result, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return connect();
          case 3:
            db = _context3.sent;
            _context3.next = 6;
            return db.collection(collectionName).find(searchObject).toArray();
          case 6:
            result = _context3.sent;
            _context3.next = 12;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0.stack);
          case 12:
            if (client) client.close();
            return _context3.abrupt("return", result);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 9]]);
    }));
    function find(_x3, _x4) {
      return _find.apply(this, arguments);
    }
    return find;
  }(),
  remove: function () {
    var _remove = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(searchObject, collectionName) {
      var client, result, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(url);
          case 3:
            client = _context4.sent;
            console.log("Connected correctly to server");
            db = client.db(dbName);
            _context4.next = 8;
            return db.collection(collectionName).remove(searchObject);
          case 8:
            result = _context4.sent;
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0.stack);
          case 14:
            // Close connection
            if (client) client.close();
            return _context4.abrupt("return", result);
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
    }));
    function remove(_x5, _x6) {
      return _remove.apply(this, arguments);
    }
    return remove;
  }(),
  updateOneField: function () {
    var _updateOneField = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(searchObject, newObject, collectionName) {
      var client, result, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(url);
          case 3:
            client = _context5.sent;
            console.log("Connected correctly to server");
            db = client.db(dbName);
            _context5.next = 8;
            return db.collection(collectionName).updateOne(searchObject, {
              $set: newObject
            });
          case 8:
            result = _context5.sent;
            _context5.next = 14;
            break;
          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0.stack);
          case 14:
            // Close connection
            if (client) client.close();
            return _context5.abrupt("return", result);
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 11]]);
    }));
    function updateOneField(_x7, _x8, _x9) {
      return _updateOneField.apply(this, arguments);
    }
    return updateOneField;
  }(),
  update: function () {
    var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(searchObject, newObject, collectionName) {
      var client, result, db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect(url);
          case 3:
            client = _context6.sent;
            console.log("Connected correctly to server");
            db = client.db(dbName);
            _context6.next = 8;
            return db.collection(collectionName).update(searchObject, {
              $set: newObject
            }).toArray();
          case 8:
            result = _context6.sent;
            _context6.next = 14;
            break;
          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0.stack);
          case 14:
            // Close connection
            if (client) client.close();
            return _context6.abrupt("return", result);
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 11]]);
    }));
    function update(_x10, _x11, _x12) {
      return _update.apply(this, arguments);
    }
    return update;
  }(),
  dropDB: function () {
    var _dropDB = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
      var db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return connect();
          case 3:
            db = _context7.sent;
            db.dropDatabase();
            _context7.next = 10;
            break;
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0.stack);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 7]]);
    }));
    function dropDB() {
      return _dropDB.apply(this, arguments);
    }
    return dropDB;
  }(),
  createEmpty: function () {
    var _createEmpty = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(collectionName) {
      var db;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return connect();
          case 3:
            db = _context8.sent;
            db.createCollection(collectionName, function () {
              console.log("Done!");
            });
            _context8.next = 10;
            break;
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0.stack);
          case 10:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 7]]);
    }));
    function createEmpty(_x13) {
      return _createEmpty.apply(this, arguments);
    }
    return createEmpty;
  }()
});

/***/ }),

/***/ "./src/containers/EventsManager/index.js":
/*!***********************************************!*\
  !*** ./src/containers/EventsManager/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isFrontEnd = function isFrontEnd() {
  if (typeof window == 'undefined') ;
};
var app_events;
if (typeof window === 'undefined') {
  if (typeof global.__APP_EVENTS__ == 'undefined') global.__APP_EVENTS__ = {};
  app_events = global.__APP_EVENTS__;
} else {
  if (typeof window.__APP_EVENTS__ == 'undefined') window.__APP_EVENTS__ = {};
  app_events = window.__APP_EVENTS__;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  registerEvent: function registerEvent(eventName, eventAction) {
    if (typeof app_events[eventName] == 'undefined') {
      app_events[eventName] = eventAction;
      return true;
    }
    return false;
  },
  callEvent: function callEvent(eventName) {
    //debugger;
    //return app_events;
    //return app_events[eventName];
    return app_events[eventName];
    //return app_events;
  }
});

/***/ }),

/***/ "./src/containers/PageLayout/ComponentList/index.js":
/*!**********************************************************!*\
  !*** ./src/containers/PageLayout/ComponentList/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Loading */ "./src/components/Loading/index.js");



/* Components */
var Header = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../pageComponents/Header */ "./src/pageComponents/Header/index.js"));
  },
  modules: ['../../../pageComponents/Header'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../pageComponents/Header */ "./src/pageComponents/Header/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var Home = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/Home */ "./src/components/Home/index.js"));
  },
  modules: ['../../../components/Home'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/Home */ "./src/components/Home/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var About = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../pageComponents/About */ "./src/pageComponents/About/index.js"));
  },
  modules: ['../../../pageComponents/About'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../pageComponents/About */ "./src/pageComponents/About/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var Setup = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../pageComponents/Setup */ "./src/pageComponents/Setup/index.js"));
  },
  modules: ['../../../pageComponents/Setup'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../pageComponents/Setup */ "./src/pageComponents/Setup/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var Words = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/Words */ "./src/components/Words/index.js"));
  },
  modules: ['../../../components/Words'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/Words */ "./src/components/Words/index.js")];
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  Home: Home,
  About: About,
  Setup: Setup,
  Header: Header,
  Words: Words
});

/***/ }),

/***/ "./src/containers/PageLayout/PageData/index.js":
/*!*****************************************************!*\
  !*** ./src/containers/PageLayout/PageData/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  '/about': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "About",
        props: {}
      }]
    }]
  },
  '/test': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "Words",
        props: {}
      }]
    }]
  },
  '/home': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "Home",
        props: {}
      }]
    }]
  },
  '/setup': {
    template: "Html",
    layout: [{
      span: 12,
      components: [{
        name: "Header",
        props: {}
      }]
    }, {
      span: 12,
      components: [{
        name: "Setup",
        props: {}
      }]
    }]
  },
  '/other-template': {
    template: "OtherHtml",
    layout: [{
      span: 12,
      components: [{
        name: "Greetings",
        props: {}
      }]
    }]
  }
});

/***/ }),

/***/ "./src/containers/PageLayout/index.js":
/*!********************************************!*\
  !*** ./src/containers/PageLayout/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ComponentList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ComponentList */ "./src/containers/PageLayout/ComponentList/index.js");
/* harmony import */ var _PageData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageData */ "./src/containers/PageLayout/PageData/index.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.scss */ "./src/containers/PageLayout/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var PageLayout = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PageLayout, _Component);
  var _super = _createSuper(PageLayout);
  function PageLayout(props) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PageLayout);
    _this = _super.call(this, props);
    _this.cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8___default.a();
    _this.user = null;
    return _this;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PageLayout, [{
    key: "render",
    value: function render() {
      var url = this.props.location.pathname;
      if (typeof window === 'undefined') {
        // server side 
      } else {
        // client side       
        window.__API_DATA__.url = url;
      }
      var page = _PageData__WEBPACK_IMPORTED_MODULE_7__["default"][url];
      var template = page.template || "template-not-found";
      var allLayout = page.layout.map(function (layoutList) {
        var layout = layoutList.components.map(function (component, id, components) {
          var componentName = component.name;
          var props = component.props;
          var ChildComponent = _ComponentList__WEBPACK_IMPORTED_MODULE_6__["default"][componentName];
          if (typeof ChildComponent === 'undefined') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              key: "{id}",
              className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.error
            }, "Can't find ", componentName, " component!");
          }
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChildComponent, {
            key: componentName,
            props: props
          });
        });
        return layout;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.app
      }, allLayout);
    }
  }]);
  return PageLayout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ }),

/***/ "./src/containers/PageLayout/styles.scss":
/*!***********************************************!*\
  !*** ./src/containers/PageLayout/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"error":"PageLayout-error--1JXBd","wrapper":"PageLayout-wrapper--2x-cs"};

/***/ }),

/***/ "./src/pageComponents/About/index.js":
/*!*******************************************!*\
  !*** ./src/pageComponents/About/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/pageComponents/About/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);


function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "this is the about Page component"));
}
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/pageComponents/About/styles.scss":
/*!**********************************************!*\
  !*** ./src/pageComponents/About/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"About-wrapper--1aIKg"};

/***/ }),

/***/ "./src/pageComponents/Header/index.js":
/*!********************************************!*\
  !*** ./src/pageComponents/Header/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/pageComponents/Header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GeneralPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GeneralPopup */ "./src/components/GeneralPopup/index.js");
/* harmony import */ var _containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/EventsManager */ "./src/containers/EventsManager/index.js");





var selectedFlagsList = [];
var getSelectedList = function getSelectedList() {
  return selectedFlagsList;
};
var setSelectedList = function setSelectedList(id) {
  selectedFlagsList[id] = true;
};
var unsetSelectedList = function unsetSelectedList(id) {
  delete selectedFlagsList[id];
};
_containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__["default"].registerEvent('getSelectedList', getSelectedList);
_containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__["default"].registerEvent('setSelectedList', setSelectedList);
_containers_EventsManager__WEBPACK_IMPORTED_MODULE_4__["default"].registerEvent('unsetSelectedList', unsetSelectedList);
var Header = function Header(_ref) {
  var title = _ref.title;
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
    search = _useLocation.search;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/home".concat(search)
  }, "DEVICES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/account".concat(search)
  }, "ACCOUNT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/setup".concat(search)
  }, "SETTINGS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about".concat(search)
  }, "ABOUT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/sign-out".concat(search)
  }, "SIGN OUT")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GeneralPopup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showPopup: false
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/pageComponents/Header/styles.scss":
/*!***********************************************!*\
  !*** ./src/pageComponents/Header/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Header-wrapper--nW6hI","active":"Header-active--8ICQ-"};

/***/ }),

/***/ "./src/pageComponents/Setup/index.js":
/*!*******************************************!*\
  !*** ./src/pageComponents/Setup/index.js ***!
  \*******************************************/
/*! exports provided: Setup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setup", function() { return Setup; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./src/pageComponents/Setup/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Poster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Poster */ "./src/utils/Poster.js");
/* harmony import */ var _utils_getParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/getParams */ "./src/utils/getParams.js");







var setupFullDatabase = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_6__["apiUrl"], "/setup-full"), {});
        case 2:
          result = _context.sent;
          console.log(result);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function setupFullDatabase() {
    return _ref.apply(this, arguments);
  };
}();
var setupDatabase = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_6__["apiUrl"], "/setup"), {});
        case 2:
          result = _context2.sent;
          console.log(result);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function setupDatabase() {
    return _ref2.apply(this, arguments);
  };
}();
var setupHubsDatabase = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_6__["apiUrl"], "/setup-hubs-db"), {});
        case 2:
          result = _context3.sent;
          console.log(result);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function setupHubsDatabase() {
    return _ref3.apply(this, arguments);
  };
}();
var dropDatabase = /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(_utils_Poster__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(_utils_getParams__WEBPACK_IMPORTED_MODULE_6__["apiUrl"], "/dropdb"), {});
        case 2:
          result = _context4.sent;
          console.log(result);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function dropDatabase() {
    return _ref4.apply(this, arguments);
  };
}();
if (typeof window !== 'undefined') {
  window.getRegion = function () {
    return "US";
  };
}
function Setup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    notAvailableModalVisible = _useState2[0],
    setNotAvailableModalVisible = _useState2[1];
  var notAvailableModalClose = function notAvailableModalClose() {
    setNotAvailableModalVisible(false);
    return true;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper
  }, notAvailableModalVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "##### SHOW / HIDE #######"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Wellcome to the setup page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      dropDatabase();
    }
  }, "!!!!DROP DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      setupHubsDatabase();
    }
  }, "CREATE TWO UNREGISTERED HUBS DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      setupDatabase();
    }
  }, "CREATE DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      setupFullDatabase();
    }
  }, "CREATE AND POPULATE DATABASE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      notAvailableModalClose();
    }
  }, "SHOW / HIDE"));
}

/* harmony default export */ __webpack_exports__["default"] = (Setup);

/***/ }),

/***/ "./src/pageComponents/Setup/styles.scss":
/*!**********************************************!*\
  !*** ./src/pageComponents/Setup/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Setup-wrapper--3PMJK"};

/***/ }),

/***/ "./src/queries/index.js":
/*!******************************!*\
  !*** ./src/queries/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectors/database/mongodb */ "./src/connectors/database/mongodb.js");



var devicesCollectionName = 'devices';
var usersCollectionName = 'users';
var hubsCollectionName = 'hubs';
/* harmony default export */ __webpack_exports__["default"] = ({
  // #######################################
  // Hub functions
  // #######################################  

  getHub: function () {
    var _getHub = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(searchObject) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find(searchObject, hubsCollectionName);
          case 2:
            result = _context.sent;
            return _context.abrupt("return", result);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function getHub(_x) {
      return _getHub.apply(this, arguments);
    }
    return getHub;
  }(),
  updateHub: function () {
    var _updateHub = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(searchObject, updateObject) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].updateOneField(searchObject, updateObject, hubsCollectionName);
          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", result);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function updateHub(_x2, _x3) {
      return _updateHub.apply(this, arguments);
    }
    return updateHub;
  }(),
  // #######################################
  // Devices functions
  // #######################################
  getAllDevices: function () {
    var _getAllDevices = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({}, devicesCollectionName);
          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function getAllDevices() {
      return _getAllDevices.apply(this, arguments);
    }
    return getAllDevices;
  }(),
  getDevicesBySearchTerm: function () {
    var _getDevicesBySearchTerm = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(searchObject) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find(searchObject, devicesCollectionName);
          case 2:
            result = _context4.sent;
            return _context4.abrupt("return", result);
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    function getDevicesBySearchTerm(_x4) {
      return _getDevicesBySearchTerm.apply(this, arguments);
    }
    return getDevicesBySearchTerm;
  }(),
  remove: function () {
    var _remove = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(flagData) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].remove(flagData, devicesCollectionName, function () {
              return true;
            });
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    function remove(_x5) {
      return _remove.apply(this, arguments);
    }
    return remove;
  }(),
  // #######################################
  // Users functions
  // #######################################

  getUser: function () {
    var _getUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(searchObject) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find(searchObject, usersCollectionName);
          case 2:
            result = _context6.sent;
            return _context6.abrupt("return", result);
          case 4:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    function getUser(_x6) {
      return _getUser.apply(this, arguments);
    }
    return getUser;
  }(),
  addUser: function () {
    var _addUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(userObject) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(userObject, usersCollectionName);
          case 2:
            result = _context7.sent;
            return _context7.abrupt("return", result);
          case 4:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    function addUser(_x7) {
      return _addUser.apply(this, arguments);
    }
    return addUser;
  }(),
  updateUser: function () {
    var _updateUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(searchObject, updateObject) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].updateOneField(searchObject, updateObject, usersCollectionName);
          case 2:
            result = _context8.sent;
            return _context8.abrupt("return", result);
          case 4:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    function updateUser(_x8, _x9) {
      return _updateUser.apply(this, arguments);
    }
    return updateUser;
  }(),
  getAllUsers: function () {
    var _getAllUsers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(userId) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({}, usersCollectionName);
          case 2:
            result = _context9.sent;
            return _context9.abrupt("return", result);
          case 4:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    function getAllUsers(_x10) {
      return _getAllUsers.apply(this, arguments);
    }
    return getAllUsers;
  }(),
  getUserByUserId: function () {
    var _getUserByUserId = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10(userId) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({
              "UserId": userId
            }, devicesCollectionName);
          case 2:
            result = _context10.sent;
            return _context10.abrupt("return", result);
          case 4:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    function getUserByUserId(_x11) {
      return _getUserByUserId.apply(this, arguments);
    }
    return getUserByUserId;
  }(),
  getUserIdByDeviceId: function () {
    var _getUserIdByDeviceId = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(deviceId) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({
              deviceHubs: deviceId
            }, usersCollectionName));
          case 1:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    function getUserIdByDeviceId(_x12) {
      return _getUserIdByDeviceId.apply(this, arguments);
    }
    return getUserIdByDeviceId;
  }(),
  /**
   * 
   * @returns devicesObject
   */
  getDevicesData: function () {
    var _getDevicesData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee12() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({}, devicesCollectionName);
          case 2:
            result = _context12.sent;
            return _context12.abrupt("return", result);
          case 4:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    function getDevicesData() {
      return _getDevicesData.apply(this, arguments);
    }
    return getDevicesData;
  }(),
  getDevicesDataForHubId: function () {
    var _getDevicesDataForHubId = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee13(hubId) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].find({
              hubId: hubId
            }, devicesCollectionName);
          case 2:
            result = _context13.sent;
            return _context13.abrupt("return", result);
          case 4:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    function getDevicesDataForHubId(_x13) {
      return _getDevicesDataForHubId.apply(this, arguments);
    }
    return getDevicesDataForHubId;
  }(),
  updateFeatureFlag: function () {
    var _updateFeatureFlag = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee14(searchObject, newObject) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            delete newObject._id;
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].update(searchObject, newObject, devicesCollectionName, function (result) {
              return true;
            });
          case 2:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    function updateFeatureFlag(_x14, _x15) {
      return _updateFeatureFlag.apply(this, arguments);
    }
    return updateFeatureFlag;
  }(),
  addFeatureFlag: function () {
    var _addFeatureFlag = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee15(flagData) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(flagData, devicesCollectionName, function () {
              return true;
            });
          case 1:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    function addFeatureFlag(_x16) {
      return _addFeatureFlag.apply(this, arguments);
    }
    return addFeatureFlag;
  }(),
  dropdb: function () {
    var _dropdb = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee16() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            result = _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].dropDB();
            return _context16.abrupt("return", result);
          case 2:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }));
    function dropdb() {
      return _dropdb.apply(this, arguments);
    }
    return dropdb;
  }(),
  addDevice: function () {
    var _addDevice = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee17(deviceObject) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(deviceObject, devicesCollectionName, function () {});
          case 1:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }));
    function addDevice(_x17) {
      return _addDevice.apply(this, arguments);
    }
    return addDevice;
  }(),
  setup: function () {
    var _setup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee18() {
      var hubs, devicesObj, usersObj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].dropDB();
            hubs = [{
              "id": "AXCS12",
              "registered": false,
              "partition": 1
            }, {
              "id": "B2CF62",
              "registered": false,
              "partition": 1
            }];
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(hubs, hubsCollectionName, function () {});
            devicesObj = [{
              "deviceId": "0",
              "userId": "0",
              "deviceName": "Living Room",
              "hubId": "AXCS12",
              "group": "My home",
              "humidity": "0",
              "curentTemp": "0",
              "requiredTemp": "0",
              "mode": "1",
              "fanMode": "0"
            }, {
              "deviceId": "0",
              "userId": "1",
              "deviceName": "My Studio thermostat",
              "hubId": "B2CF62",
              "group": "My Studio",
              "humidity": "0",
              "curentTemp": "0",
              "requiredTemp": "0",
              "mode": "1",
              "fanMode": "0"
            }, {
              "deviceId": "1",
              "userId": "0",
              "deviceName": "Bedroom",
              "hubId": "AXCS12",
              "group": "My home",
              "humidity": "0",
              "curentTemp": "0",
              "requiredTemp": "0",
              "mode": "1",
              "fanMode": "0"
            }, {
              "deviceId": "2",
              "userId": "0",
              "deviceName": "BlueRoom thermostat",
              "hubId": "AXCS12",
              "group": "My Home",
              "humidity": "0",
              "curentTemp": "0",
              "requiredTemp": "0",
              "mode": "1",
              "fanMode": "0"
            }];
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(devicesObj, devicesCollectionName, function () {});

            // create users collection
            usersObj = [{
              "id": "AXCS12-u",
              "email": "toni.nichev@gmail.com",
              "password": "1234",
              "group": "some group",
              "deviceHubs": ["AXCS12"]
            }, {
              "id": "B2CF62",
              "email": "john.smith@gmail.com",
              "password": "1234",
              "group": "some group",
              "deviceHubs": ["B2CF62"]
            }];
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(usersObj, usersCollectionName, function () {});
          case 7:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    }));
    function setup() {
      return _setup.apply(this, arguments);
    }
    return setup;
  }(),
  setupHubsDb: function () {
    var _setupHubsDb = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee19() {
      var hubs;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].dropDB();
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].createEmpty("devices");
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].createEmpty("users");
            hubs = [{
              "id": "AXCS12",
              "registered": false,
              "partition": 1
            }, {
              "id": "B2CF62",
              "registered": false,
              "partition": 1
            }];
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(hubs, hubsCollectionName, function () {});
          case 5:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }));
    function setupHubsDb() {
      return _setupHubsDb.apply(this, arguments);
    }
    return setupHubsDb;
  }(),
  setupOneUser: function () {
    var _setupOneUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee20() {
      var devicesObj, usersObj, hubs;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].dropDB();
            devicesObj = [];
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(devicesObj, devicesCollectionName, function () {});

            // create users collection
            usersObj = [{
              "userId": "0",
              "email": "toni.nichev@gmail.com",
              "password": "1234",
              "group": "some group",
              "deviceHubs": ["AXCS12"]
            }, {
              "userId": "1",
              "email": "john.smith@gmail.com",
              "password": "1234",
              "group": "some group",
              "deviceHubs": ["B2CF62"]
            }];
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(usersObj, usersCollectionName, function () {});
            hubs = [{
              "id": "AXCS12",
              "registered": false,
              "partition": 1
            }, {
              "id": "B2CF62",
              "registered": false,
              "partition": 1
            }];
            _connectors_database_mongodb__WEBPACK_IMPORTED_MODULE_2__["default"].add(hubs, hubsCollectionName, function () {});
          case 7:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }));
    function setupOneUser() {
      return _setupOneUser.apply(this, arguments);
    }
    return setupOneUser;
  }()
});

/***/ }),

/***/ "./src/templates/Html.js":
/*!*******************************!*\
  !*** ./src/templates/Html.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://toni-develops.com", ":").concat("8084", "/dist/");
var Html = function Html(_ref) {
  var content = _ref.content,
    cssBundles = _ref.cssBundles,
    jsBundles = _ref.jsBundles,
    apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    "http-equiv": "ScreenOrientation",
    content: "autoRotate:disabled"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", null, "var startTime = new Date();"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Server Side Rendering and Bundle Splitting"),
  // don't add this to DEV since there, it will be served from Webpack-dev-server
   false && /*#__PURE__*/false, cssBundles.map(function (bundle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      href: "".concat(bundle.publicPath),
      rel: "stylesheet",
      as: "style",
      media: "screen, projection",
      type: "text/css",
      charSet: "UTF-8"
    });
  }), jsBundles.map(function (_ref2) {
    var file = _ref2.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "".concat(publicPath).concat(file)
    }, file);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__API_DATA__=".concat(JSON.stringify(apiData))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "".concat(publicPath, "main-bundle.js")
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/templates/InternalError.js":
/*!****************************************!*\
  !*** ./src/templates/InternalError.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://toni-develops.com", ":").concat("8084", "/dist/");
var Html = function Html(_ref) {
  var content = _ref.content,
    cssBundles = _ref.cssBundles,
    jsBundles = _ref.jsBundles,
    apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Internal Error")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root"
  }, "INTERNAL ERROR !")));
};
/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/templates/OtherHtml.js":
/*!************************************!*\
  !*** ./src/templates/OtherHtml.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://toni-develops.com", ":").concat("8084", "/dist/");
var Html = function Html(_ref) {
  var content = _ref.content,
    cssBundles = _ref.cssBundles,
    jsBundles = _ref.jsBundles,
    apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Other Template"),
  // don't add this to DEV since there it will be served from Webpack-dev-server
   false && /*#__PURE__*/false, cssBundles.map(function (bundle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      href: "".concat(bundle.publicPath),
      rel: "stylesheet",
      as: "style",
      media: "screen, projection",
      type: "text/css",
      charSet: "UTF-8"
    });
  }), jsBundles.map(function (_ref2) {
    var file = _ref2.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "".concat(publicPath).concat(file)
    }, file);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__API_DATA__=".concat(JSON.stringify(apiData))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "".concat(publicPath, "main-bundle.js")
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/templates/TemplateList/index.js":
/*!*********************************************!*\
  !*** ./src/templates/TemplateList/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Html.js */ "./src/templates/Html.js");
/* harmony import */ var _OtherHtml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OtherHtml.js */ "./src/templates/OtherHtml.js");
/* harmony import */ var _InternalError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InternalError.js */ "./src/templates/InternalError.js");
/* harmony import */ var _TemplateNotFound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TemplateNotFound.js */ "./src/templates/TemplateNotFound.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  Html: _Html_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  OtherHtml: _OtherHtml_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  InternalError: _InternalError_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/templates/TemplateNotFound.js":
/*!*******************************************!*\
  !*** ./src/templates/TemplateNotFound.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var publicPath = "".concat("http://toni-develops.com", ":").concat("8084", "/dist/");
var Html = function Html(_ref) {
  var content = _ref.content,
    cssBundles = _ref.cssBundles,
    jsBundles = _ref.jsBundles,
    apiData = _ref.apiData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    "http-equiv": "ScreenOrientation",
    content: "autoRotate:disabled"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", null, "var startTime = new Date();"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Server Side Rendering and Bundle Splitting"),
  // don't add this to DEV since there, it will be served from Webpack-dev-server
   false && /*#__PURE__*/false, cssBundles.map(function (bundle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      href: "".concat(bundle.publicPath),
      rel: "stylesheet",
      as: "style",
      media: "screen, projection",
      type: "text/css",
      charSet: "UTF-8"
    });
  }), jsBundles.map(function (_ref2) {
    var file = _ref2.file;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "".concat(publicPath).concat(file)
    }, file);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__API_DATA__=".concat(JSON.stringify(apiData))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    "cz-shortcut-listen": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "TEMPLATE NOT FAUND"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "".concat(publicPath, "main-bundle.js")
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/utils/Poster.js":
/*!*****************************!*\
  !*** ./src/utils/Poster.js ***!
  \*****************************/
/*! exports provided: Poster, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poster", function() { return Poster; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var Poster = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var url,
      data,
      response,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
          data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _context.next = 4;
          return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain'
            },
            body: JSON.stringify(data)
          });
        case 4:
          response = _context.sent;
          return _context.abrupt("return", response.json());
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function Poster() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (Poster);

/***/ }),

/***/ "./src/utils/getParams.js":
/*!********************************!*\
  !*** ./src/utils/getParams.js ***!
  \********************************/
/*! exports provided: url, apiUrl, userApiUrl, deviceApiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userApiUrl", function() { return userApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceApiUrl", function() { return deviceApiUrl; });
var url = "http://toni-develops.com";
var apiUrl = "".concat("http://toni-develops.com", ":").concat("8085", "/services");
var userApiUrl = "".concat("http://toni-develops.com", ":").concat("8085", "/user-services");
var deviceApiUrl = "".concat("http://toni-develops.com", ":").concat("8085", "/device-services");

/***/ }),

/***/ "./ssr-server.js":
/*!***********************!*\
  !*** ./ssr-server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/components/App */ "./src/components/App/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dist/loadable-manifest.json */ "./dist/loadable-manifest.json");
var _dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dist/loadable-manifest.json */ "./dist/loadable-manifest.json", 1);
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loadable/webpack */ "react-loadable/webpack");
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_templates_TemplateList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/templates/TemplateList */ "./src/templates/TemplateList/index.js");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _expressMiddlewares_requestDataFromAPI__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./expressMiddlewares/requestDataFromAPI */ "./expressMiddlewares/requestDataFromAPI.js");
/* harmony import */ var _expressMiddlewares_devicesServices__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./expressMiddlewares/devicesServices */ "./expressMiddlewares/devicesServices/index.js");
/* harmony import */ var _expressMiddlewares_userServices__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expressMiddlewares/userServices */ "./expressMiddlewares/userServices/index.js");
/* harmony import */ var _expressMiddlewares_WeatherServices__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./expressMiddlewares/WeatherServices */ "./expressMiddlewares/WeatherServices/index.js");
/* harmony import */ var _src_queries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/queries */ "./src/queries/index.js");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_19__);














//import cookiesManagement from './expressMiddlewares/cookiesManagement';

var publicPath = "".concat("http://toni-develops.com", ":").concat("8084", "/dist/");
// import pageData from './expressMiddlewares/pageData';





var _process$env = Object({"APP_NAME":"Webpack React Tutorial","APP_HOST":"http://toni-develops.com","SERVER_PORT":"8085","ASSETS_SERVER_PORT":"8084","ENVIRONMENT":"development","DB_DATABASE_NAME":"sparkjs-home-automation","DB_DATABASE_PORT":"27017","WEATHER_API_URL":"https://api.openweathermap.org/data/2.5/weather?q=West%20New%20York&units=metric&appid=[api key here]"}),
  APP_HOST = _process$env.APP_HOST,
  SERVER_PORT = _process$env.SERVER_PORT,
  ENVIRONMENT = _process$env.ENVIRONMENT;
var test = null;

// create users object so we won't jump to DB every time to validate tokens
var usersData = {};
var devicesData = {};
var hubPreferences = {};

// only on app start - load devices data !!! To-do get rid of this and request devices data for the specific user
_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
  var devices;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return _src_queries__WEBPACK_IMPORTED_MODULE_18__["default"].getAllDevices();
      case 2:
        devices = _context.sent;
        if (devices.length === 0) {
          console.log('No device data at all!');
        } else {}
      case 4:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();
console.log("SERVER_PORT: ", SERVER_PORT);
var app = new express__WEBPACK_IMPORTED_MODULE_4___default.a();
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({
  xtended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.text());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_19___default.a.text({
  type: 'text/*'
}));
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_13___default()());
app.use('/source-maps', express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('./dist/source-maps'));
app.use('/server-build', express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('./server-build'));
app.use('/dist', express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('dist')); // to serve frontent prod static files
app.use('/favicon.ico', express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('./static-assets/favicon.ico'));
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('static-assets'));
function responseWithSourceCode(req, res, apiData, templateName) {
  // make APP data available for SSR and browser.
  global.__API_DATA__ = apiData;
  var Html = _src_templates_TemplateList__WEBPACK_IMPORTED_MODULE_12__["default"][req.template];

  // Prepare to get list of all modules that have to be loaded for this route
  var modules = [];
  react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_8___default.a.Capture, {
    report: function report(moduleName) {
      return modules.push(moduleName);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
    req: req
  })));

  // Extract CSS and JS bundles
  var bundles = Object(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_10__["getBundles"])(_dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_20__, modules);
  var cssBundles = bundles.filter(function (bundle) {
    return bundle && bundle.file.split('.').pop() === 'css';
  });
  var jsBundles = bundles.filter(function (bundle) {
    return bundle && bundle.file.split('.').pop() === 'js';
  });
  var allJS = jsBundles.map(function (_ref2) {
    var publicPath = _ref2.publicPath;
    return "<script src='".concat(publicPath, "'></script>");
  }).join("\n");

  // don't add this to DEV since there, it will be served from Webpack-dev-server
  var mainCSS = "";
  var allCSS = '';
  if (false) {}
  var HTML_content = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
    req: req
  }));
  var html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Html, {
    content: HTML_content,
    cssBundles: cssBundles,
    jsBundles: jsBundles,
    apiData: apiData
  });
  res.status(200);
  res.send("<!doctype html>\n".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToStaticMarkup(html)));
  res.end();
}
app.get('/Robots.txt', function (req, res) {
  res.send("\n  User-agent: * Disallow: /\n  ");
});

// #############################################################
//  devices services route
// #############################################################
app.get('/device-services/*', function (req, res, next) {
  Object(_expressMiddlewares_requestDataFromAPI__WEBPACK_IMPORTED_MODULE_14__["default"])(req, res, devicesData, usersData, next);
}, function (req, res, next) {
  var _req$apiData;
  if (typeof (req === null || req === void 0 ? void 0 : (_req$apiData = req.apiData) === null || _req$apiData === void 0 ? void 0 : _req$apiData.devicesData) === 'undefined') {
    var _req$apiData2;
    if (typeof (req === null || req === void 0 ? void 0 : (_req$apiData2 = req.apiData) === null || _req$apiData2 === void 0 ? void 0 : _req$apiData2.hubId) !== 'undefined') {
      var hubId = req.apiData.hubId;
      devicesData[hubId] = [];
      hubPreferences[hubId] = {
        mode: 0
      };
    }
  }
  Object(_expressMiddlewares_devicesServices__WEBPACK_IMPORTED_MODULE_15__["default"])(req, res, devicesData, hubPreferences, usersData);
});

// #############################################################
//  user services route
// #############################################################

app.post('/user-services/*', /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          Object(_expressMiddlewares_userServices__WEBPACK_IMPORTED_MODULE_16__["default"])(req, res, usersData);
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}());

// #############################################################
//  weather services route
// #############################################################

app.get('/weather-services/*', /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_expressMiddlewares_WeatherServices__WEBPACK_IMPORTED_MODULE_17__["default"])(req, res);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}());

// #############################################################
// All page requests
// #############################################################
app.get('/*', function (req, res, next) {
  Object(_expressMiddlewares_requestDataFromAPI__WEBPACK_IMPORTED_MODULE_14__["default"])(req, res, usersData, next);
}, function (req, res, next) {
  responseWithSourceCode(req, res, req.apiData, req.templateName);
});

// #############################################################
//  setup services
// #############################################################
app.post('/services/setup-full', /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _src_queries__WEBPACK_IMPORTED_MODULE_18__["default"].setup();
          devicesData = [];
          res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send('{"status": "sucess"}');
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}());
app.post('/services/setup-hubs-db', /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _src_queries__WEBPACK_IMPORTED_MODULE_18__["default"].setupHubsDb();
          res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send('{"status": "sucess"}');
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}());
app.post('/services/setup', /*#__PURE__*/function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          //queries.setup();
          _src_queries__WEBPACK_IMPORTED_MODULE_18__["default"].setupOneUser();
          devicesData = [];
          res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send('{"status": "sucess"}');
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}());
app.post('/services/dropdb', /*#__PURE__*/function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(req, res) {
    var respond;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          respond = _src_queries__WEBPACK_IMPORTED_MODULE_18__["default"].dropdb();
          res.status(200).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', '*').send(respond);
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}());

// #############################################################
//  starting server
// #############################################################

react_loadable__WEBPACK_IMPORTED_MODULE_8___default.a.preloadAll().then(function () {
  if (ENVIRONMENT == 'development') {
    // use plain http for development
    app.listen(SERVER_PORT, function () {
      console.log("\uD83D\uDE0E Server is listening on port ".concat(SERVER_PORT));
    });
  } else {
    // https requests might be too much of a work for Arduino
    app.listen(SERVER_PORT, function () {
      console.log("\uD83D\uDE0E Server is listening on port ".concat(SERVER_PORT));
    });

    // we will pass the 'app' to 'https' server
    /*
    https.createServer({
      // replace with certificate location
      key: fs.readFileSync('/Users/toninichev/.getssl/toni-develops.com/toni-develops.com.key'),
      cert: fs.readFileSync('/Users/toninichev/.getssl/toni-develops.com/toni-develops.com.crt')
    }, app)
    .listen(SERVER_PORT);
    */
  }

  // #############################################################
  //  starting workers
  // #############################################################  

  function runWorkers() {
    //console.log("--=== workers ===--");
    //console.log("(w) hubPreferences: ", hubPreferences);
    setTimeout(function () {
      runWorkers();
    }, 1000);
  }
  var workers = setTimeout(function () {
    runWorkers();
  }, 1000);
});

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=server-bundle.js.map
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".mda-smart-bim-sample-app-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.mda-smart-bim-sample-app-container .map-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.mda-smart-bim-sample-app-container .map-container .map {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"https://s3.ap-southeast-1.amazonaws.com/dinesh.testbucket/sample-files/illuminated-minaret-symbolizes-spirituality-famous-blue-mosque-generated-by-ai.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.mda-smart-bim-sample-app-container .map-container .map .marker {\n  width: 20px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12);\n  position: absolute;\n  cursor: pointer;\n}\n.mda-smart-bim-sample-app-container .map-container .map .marker:hover {\n  scale: 1.5;\n}\n.mda-smart-bim-sample-app-container .map-container .map .marker:nth-of-type(1) {\n  top: 50%;\n  left: 50%;\n}\n.mda-smart-bim-sample-app-container .map-container .map .marker:nth-of-type(2) {\n  top: 60%;\n  left: 60%;\n}\n.mda-smart-bim-sample-app-container .widgets-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 400px;\n}\n\n.mda-smart-bim-sample-widget-wrapper {\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const LineChart_1 = __importDefault(__webpack_require__(/*! ./sample-widgets/LineChart */ "./src/sample-widgets/LineChart.tsx"));
const DonutChart_1 = __importDefault(__webpack_require__(/*! ./sample-widgets/DonutChart */ "./src/sample-widgets/DonutChart.tsx"));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const MDASmartBIMUI = (props) => {
    const { uxpContext, } = props;
    const [widgets, setWidgets] = React.useState([]);
    const widgetsRef = React.useRef([]);
    const markerWidgetsMap = {
        marker1: [{ id: '50f429c4-605f-4ec6-e079-ec73a8c4a26c/widget/sample-line-chart', name: 'Sample Line Chart' }],
        marker2: [{ id: '50f429c4-605f-4ec6-e079-ec73a8c4a26c/widget/sample-line-chart', name: 'Sample Line Chart' }, { id: '50f429c4-605f-4ec6-e079-ec73a8c4a26c/widget/sample-donut-chart', name: 'Sample Donut Chart' }]
    };
    React.useEffect(() => {
        console.log('widgets ', widgets);
    }, [widgets]);
    function onMarkerClick(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            widgetsRef.current = [];
            const widgetsToDisplay = markerWidgetsMap[marker];
            // check if widgets are loaded 
            let registeredWidgets = window.Widgets || [];
            console.log('registered widgets ', registeredWidgets);
            for (const w of widgetsToDisplay) {
                const registeredInstance = registeredWidgets.find((r) => r.id == w.id && r.name === w.name);
                if (!registeredInstance) {
                    // widget not found - need to load the widget script  
                    // get module id and generate script path
                    const moduleId = (0, utils_1.getModuleIdFromWidgetId)(w.id);
                    const scriptPath = (0, utils_1.generateScriptPathFromModuleId)(uxpContext, moduleId);
                    // load script
                    (0, utils_1.loadScriptFile)(scriptPath, () => appendWidget(w), moduleId);
                }
                else {
                    // widget found
                    widgetsRef.current.push(registeredInstance);
                    setWidgets(widgetsRef.current);
                }
            }
        });
    }
    function appendWidget(w) {
        let registeredWidgets = window.Widgets || [];
        console.log('reged ', registeredWidgets);
        const registeredInstance = registeredWidgets.find((r) => r.id == w.id && r.name === w.name);
        if (!registeredInstance)
            console.log('widget not found even after script loaded');
        else {
            widgetsRef.current.push(registeredInstance);
            setWidgets(widgetsRef.current);
        }
    }
    return (React.createElement("div", { className: "mda-smart-bim-sample-app-container" },
        React.createElement("div", { className: "map-container" },
            React.createElement("div", { className: "map" },
                React.createElement("div", { className: "marker", onClick: () => onMarkerClick('marker1') }),
                React.createElement("div", { className: "marker", onClick: () => onMarkerClick('marker2') }))),
        React.createElement("div", { className: "widgets-container" }, widgets.map((instance, i) => {
            var _a, _b, _c;
            let Component = instance.widget;
            let styles = {};
            styles.width = '100%';
            styles.aspectRatio = '1';
            styles.padding = '10px';
            // check layout 
            if ((_a = instance === null || instance === void 0 ? void 0 : instance.configs) === null || _a === void 0 ? void 0 : _a.layout) {
                let w = ((_b = instance.configs.layout) === null || _b === void 0 ? void 0 : _b.w) || 6;
                let h = ((_c = instance.configs.layout) === null || _c === void 0 ? void 0 : _c.h) || 6;
                styles.aspectRatio = (w / h).toString();
            }
            let props = {};
            if (instance.defaultProps)
                props = Object.assign({}, instance.defaultProps);
            return React.createElement("div", { key: i, style: styles },
                React.createElement(Component, Object.assign({ uxpContext: props.uxpContext }, props)));
        }))));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "sample-line-chart",
    widget: LineChart_1.default,
    configs: {
        layout: {
            w: 12,
            h: 8,
            // minH: 12,
            // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "sample-donut-chart",
    widget: DonutChart_1.default,
    configs: {
        layout: {
            w: 12,
            h: 8,
            // minH: 12,
            // minW: 12
        }
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "MDASmartBIM",
    label: "MDASmartBIM",
    // click: () => alert("Hello"),
    component: MDASmartBIMWidget
});
*/
/**
 * Register as a UI
 */
(0, uxp_1.registerUI)({
    id: "mda-smart-bim-sample",
    component: MDASmartBIMUI,
    showDefaultHeader: false
});
/**
 * Enable localization
 *
 * This will enable the localization
 *
 * you can use uxpContext.$L() function
 *
 * Ex: Assume you  have a localization message in localization json
 *
 * ```
 * // localization.json
 *
 * {
 *      "uxp.my-widget.title": {
 *          "en": "This is my widget" // english translation,
 *          "ar": "<arabic tranlation >",
 *          ... here goes other translations
 *      }
 * }
 *
 * ```
 *
 *
 * thne in your widget
 *
 * ```
 * // your widget
 *
 * return <WidgetWrapper>
 *      <div class='title'>
 *          {props.uxpContext.$L('uxp.my-widget.title')}
 *      </div>
 *  </WidgetWrapper>
 *
 * ```
 *
 * /// you can have parameters as well
 * // we use `$` mark to identify params
 * // Ex: $name, $location
 *
 * ```
 * // localization.json
 *
 * {
 *      ...
 *      "uxp.my-widget.user-welcom-msg":{
 *          "en": "$userName welcome to my widget"
 *      }
 * }
 * ```
 *
 * in widget
 *
 * ```
 *      ...
 *      <div> {props.uxpContext.$L('uxp.my-widget.user-welcom-msg', {userName: "Jane Doe"})} </div>
 * ```
 *
 *
 */
// enableLocalization()


/***/ }),

/***/ "./src/sample-widgets/DonutChart.tsx":
/*!*******************************************!*\
  !*** ./src/sample-widgets/DonutChart.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const DonutChartWidget = (props) => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(0);
    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
        return (react_1.default.createElement("g", null,
            react_1.default.createElement("text", { x: cx, y: cy, dy: 8, textAnchor: "middle", fill: fill }, payload.name),
            react_1.default.createElement(recharts_1.Sector, { cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle, fill: fill }),
            react_1.default.createElement(recharts_1.Sector, { cx: cx, cy: cy, startAngle: startAngle, endAngle: endAngle, innerRadius: outerRadius + 6, outerRadius: outerRadius + 10, fill: fill }),
            react_1.default.createElement("path", { d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`, stroke: fill, fill: "none" }),
            react_1.default.createElement("circle", { cx: ex, cy: ey, r: 2, fill: fill, stroke: "none" }),
            react_1.default.createElement("text", { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, textAnchor: textAnchor, fill: "#333" }, `PV ${value}`),
            react_1.default.createElement("text", { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, dy: 18, textAnchor: textAnchor, fill: "#999" }, `(Rate ${(percent * 100).toFixed(2)}%)`)));
    };
    return react_1.default.createElement(components_1.WidgetWrapper, { className: "mda-smart-bim-sample-widget-wrapper" },
        react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
            react_1.default.createElement(recharts_1.PieChart, { width: 400, height: 400 },
                react_1.default.createElement(recharts_1.Pie, { activeIndex: activeIndex, activeShape: renderActiveShape, data: data, cx: "50%", cy: "50%", innerRadius: 60, outerRadius: 80, fill: "#8884d8", dataKey: "value", onMouseEnter: (_, index) => {
                        setActiveIndex(index);
                    } }))));
};
exports["default"] = DonutChartWidget;


/***/ }),

/***/ "./src/sample-widgets/LineChart.tsx":
/*!******************************************!*\
  !*** ./src/sample-widgets/LineChart.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const LineChartWidget = (props) => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return react_1.default.createElement(components_1.WidgetWrapper, { className: "mda-smart-bim-sample-widget-wrapper" },
        react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
            react_1.default.createElement(recharts_1.LineChart, { width: 500, height: 300, data: data, margin: {
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                } },
                react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                react_1.default.createElement(recharts_1.XAxis, { dataKey: "name" }),
                react_1.default.createElement(recharts_1.YAxis, null),
                react_1.default.createElement(recharts_1.Tooltip, null),
                react_1.default.createElement(recharts_1.Legend, null),
                react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "pv", stroke: "#8884d8", activeDot: { r: 8 } }),
                react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "uv", stroke: "#82ca9d" }))));
};
exports["default"] = LineChartWidget;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateScriptPathFromModuleId = exports.getModuleIdFromWidgetId = exports.loadScriptFile = exports.tryParseJSON = exports.hasValue = exports.trimSlash = void 0;
function trimSlash(s) {
    if (!s)
        return '';
    return s.replace(/\/$/, "");
}
exports.trimSlash = trimSlash;
function hasValue(value, skipZero) {
    if (skipZero && typeof value == "number" && value == 0)
        return true;
    if (!value)
        return false;
    switch (typeof value) {
        case 'string':
            return (value === null || value === void 0 ? void 0 : value.trim().length) > 0;
        case 'number':
            return value > 0;
        default:
            return true;
    }
}
exports.hasValue = hasValue;
function tryParseJSON(x, def = null) {
    try {
        return JSON.parse(x);
    }
    catch (_a) {
        return def;
    }
}
exports.tryParseJSON = tryParseJSON;
function isScriptExists(id, remove) {
    if (!hasValue(id))
        return false;
    const element = document.getElementById(id);
    if (!element)
        return false;
    if (remove) {
        element.remove();
        return false;
    }
    return true;
}
function loadScriptFile(path, callback, id, replaceIfExist) {
    const scriptExists = isScriptExists(id, replaceIfExist);
    if (scriptExists) {
        if (typeof callback == "function") {
            callback();
        }
    }
    else {
        var script = document.createElement('script');
        script.onload = function () {
            if (typeof callback == "function") {
                callback();
            }
        };
        if (id) {
            script.setAttribute('id', id);
        }
        script.setAttribute('src', path);
        document.head.appendChild(script);
    }
}
exports.loadScriptFile = loadScriptFile;
function getModuleIdFromWidgetId(widgetId) {
    let parts = widgetId.split('/');
    return parts[0];
}
exports.getModuleIdFromWidgetId = getModuleIdFromWidgetId;
const moduleScriptBasePath = '/api/UXP/module';
function generateScriptPathFromModuleId(uxpContext, moduleId) {
    // return `${trimSlash(uxpContext.lucyUrl)}${moduleScriptBasePath}?id=${moduleId}`
    // here we should load from an lucy account 
    // hardcoding this to load from the this setup 
    return '/dist/main.js';
}
exports.generateScriptPathFromModuleId = generateScriptPathFromModuleId;


/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enableLocalization = exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
const localization_json_1 = __importDefault(__webpack_require__(/*! ../localization.json */ "./localization.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;
function enableLocalization() {
    window.registerLocalization(localization_json_1.default);
}
exports.enableLocalization = enableLocalization;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = Recharts;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = UXPComponents;

/***/ }),

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"id":"50f429c4-605f-4ec6-e079-ec73a8c4a26c","author":"","widgets":[{"id":"sample-line-chart","name":"Sample Line Chart","description":"Sample Line Chart"},{"id":"sample-donut-chart","name":"Sample Donut Chart","description":"Sample Donut Chart"}],"sidebarLinks":[],"uis":[{"id":"mda-smart-bim-sample"}],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
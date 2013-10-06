/**
@browser Gecko
@param {string} propertyName
@param func
*/
Object.prototype.__defineGetter__ = function(propertyName,func) {};
/**
@browser Gecko
@param {string} propertyName
@param func
*/
Object.prototype.__defineSetter__ = function(propertyName,func) {};
/**
@browser Gecko
@param {string} propertyName
@return {Function}
*/
Object.prototype.__lookupGetter__ = function(propertyName) {};
/**
@browser Gecko
@param {string} propertyName
@return {Function}
*/
Object.prototype.__lookupSetter__ = function(propertyName) {};
/**
@browser Gecko
@param {string} propertyName
@return {Function}
*/
Object.prototype.__proto__ = function(propertyName) {};
/**
@browser Gecko
@return {string}
*/
Object.prototype.toSource = function() {};
/**
@browser Gecko
@param {string} prop
@return {string}
*/
Object.prototype.unwatch = function(prop) {};
/**
@browser Gecko
@param {string} prop
@param {function} handler
@return {string}
*/
Object.prototype.watch = function(prop,handler) {};

/**
@type {function}
*/
Function.prototype.caller = 0;
Function = {};

Image = function() {};
Image.constructor = 0;
Image.prototype = new HTMLImageElement();

/**
@type {string}
*/
Navigator.prototype.userAgent = 0;
/**
@type {string}
*/
Navigator.prototype.product = 0;
/**
@type {string}
*/
Navigator.prototype.appVersion = 0;
/**
@type {string}
*/
Navigator.prototype.appName = 0;
/**
@type {string}
*/
Navigator.prototype.appCodeName = 0;
/**
@type {string}
*/
Navigator.prototype.language = 0;
/**
@browser IE
@type {string}
*/
Navigator.prototype.systemLanguage = 0;
/**
@browser IE
@type {string}
*/
Navigator.prototype.userLanguage = 0;
/**
@type {Array}
*/
Navigator.prototype.mimeTypes = 0;
/**
@type {string}
*/
Navigator.prototype.platform = 0;
/**
@type {Array}
*/
Navigator.prototype.plugins = 0;
/**
@type {boolean}
*/
Navigator.prototype.onLine = 0;
/**
@type {boolean}
*/
Navigator.prototype.cookieEnabled = 0;
/**
@return {boolean}
*/
Navigator.prototype.taintEnabled = function() {};
/**
@return {boolean}
*/
Navigator.prototype.javaEnabled = function() {};
/**
@param {string} prefName
@param {string} [prefValue]
@return {string}
*/
Navigator.prototype.preference = function(prefName,prefValue) {};
Navigator = {};

/**
@type {Number}
*/
Screen.prototype.width = 0;
/**
@type {Number}
*/
Screen.prototype.height = 0;
/**
@type {Number}
*/
Screen.prototype.availHeight = 0;
/**
@type {Number}
*/
Screen.prototype.availWidth = 0;
/**
@type {Number}
*/
Screen.prototype.pixelDepth = 0;
/**
@type {Number}
*/
Screen.prototype.colorDepth = 0;
Screen = {};

/**
@type {boolean}
*/
Option.prototype.defaultSelected = 0;
/**
@type {boolean}
*/
Option.prototype.selected = 0;
/**
@type {string}
*/
Option.prototype.text = 0;
/**
@type {string}
*/
Option.prototype.value = 0;
Option = {};

/**
@type {string}
*/
Location.prototype.href = 0;
/**
@type {string}
*/
Location.prototype.hash = 0;
/**
@type {string}
*/
Location.prototype.port = 0;
/**
@type {string}
*/
Location.prototype.host = 0;
/**
@type {string}
*/
Location.prototype.hostname = 0;
/**
@type {string}
*/
Location.prototype.pathname = 0;
/**
@type {string}
*/
Location.prototype.protocol = 0;
/**
@type {string}
*/
Location.prototype.search = 0;
/**
@type {string}
*/
Location.prototype.target = 0;
/**
@param {boolean} [forceget]
@return {void}
*/
Location.prototype.reload = function(forceget) {};
/**
@param {string} url
@return {void}
*/
Location.prototype.replace = function(url) {};
Location = {};

XSLTProcessor = function() {};
/**
@browser Gecko
*/
XSLTProcessor.constructor = 0;
/**
@browser Gecko
@param {Node} domNode
*/
XSLTProcessor.prototype.importStylesheet = function(domNode) {};
/**
@browser Gecko
@param {Node} domNode
@return {Document}
*/
XSLTProcessor.prototype.transformToDocument = function(domNode) {};
/**
@browser Gecko
@param {Node} domToBeTransformed
@param {Document} ownerDocument
@return {DocumentFragment}
*/
XSLTProcessor.prototype.transformToFragment = function(domToBeTransformed,ownerDocument) {};

DOMParser = function() {};
/**
@browser Gecko
*/
DOMParser.constructor = 0;
/**
@browser Gecko
@param {string} stringToParse
@param {string} contentType
@return {Document}
*/
DOMParser.prototype.parseFromString = function(stringToParse,contentType) {};

XMLSerializer = function() {};
/**
@browser Gecko
*/
XMLSerializer.constructor = 0;
/**
@browser Gecko
@param {Document} domNode
@param {Object} stream
@param {string} encoding
*/
XMLSerializer.prototype.serializeToStream = function(domNode,stream,encoding) {};
/**
@browser Gecko
@param {Document} domNode
@return {string}
*/
XMLSerializer.prototype.serializeToString = function(domNode) {};

/**
@type {Object[]}
*/
Event.prototype.data = 0;
/**
@type {Number}
*/
Event.prototype.height = 0;
/**
@browser IE
@type {Number}
*/
Event.prototype.x = 0;
/**
@type {Number}
*/
Event.prototype.screenX = 0;
/**
@type {Number}
*/
Event.prototype.clientX = 0;
/**
@browser IE
@type {Number}
*/
Event.prototype.offsetX = 0;
/**
@browser Gecko
@type {Number}
*/
Event.prototype.layerX = 0;
/**
@browser IE
@type {Object}
*/
Event.prototype.fromElement = 0;
/**
@browser IE
@type {Number}
*/
Event.prototype.wheelDelta = 0;
/**
@browser IE
@type {boolean}
*/
Event.prototype.repeat = 0;
/**
@type {Number}
*/
Event.prototype.pageX = 0;
/**
@browser IE
@type {Number}
*/
Event.prototype.y = 0;
/**
@type {Number}
*/
Event.prototype.screenY = 0;
/**
@type {Number}
*/
Event.prototype.clientY = 0;
/**
@browser IE
@type {Number}
*/
Event.prototype.offsetY = 0;
/**
@browser Gecko
@type {Number}
*/
Event.prototype.layerY = 0;
/**
@type {Number}
*/
Event.prototype.pageY = 0;
/**
@type {Number}
*/
Event.prototype.width = 0;
/**
@type {Number}
*/
Event.prototype.modifiers = 0;
/**
@type {Number}
*/
Event.prototype.keyCode = 0;
/**
@type {string}
*/
Event.prototype.type = 0;
/**
@type {Object}
*/
Event.prototype.which = 0;
/**
@browser IE
@type {Object}
*/
Event.prototype.srcElement = 0;
/**
@browser IE
@type {Object}
*/
Event.prototype.toElement = 0;
/**
@browser IE
@type {boolean}
*/
Event.prototype.cancelBubble = 0;
/**
@browser IE
@type {boolean}
*/
Event.prototype.returnValue = 0;
/**
@type {boolean}
*/
Event.prototype.altKey = 0;
/**
@type {boolean}
*/
Event.prototype.ctrlKey = 0;
/**
@type {boolean}
*/
Event.prototype.shiftKey = 0;
/**
@type {boolean}
*/
Event.prototype.button = 0;
/**
@browser Gecko
@type {string}
*/
Event.prototype.charCode = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.ABORT = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.BLUR = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.CLICK = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.CHANGE = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.DBLCLICK = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.DRAGDROP = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.ERROR = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.FOCUS = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.KEYDOWN = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.KEYPRESS = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.KEYUP = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.LOAD = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.MOUSEDOWN = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.MOUSEMOVE = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.MOUSEOUT = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.MOUSEOVER = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.MOUSEUP = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.MOVE = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.RESET = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.RESIZE = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.SELECT = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.SUBMIT = 0;
/**
@browser Gecko
@type {Event}
@deprecated
*/
Event.prototype.UNLOAD = 0;
Event = {};

/**
@browser Gecko
@type {Node}
*/
Selection.prototype.anchorNode = 0;
/**
@browser Gecko
@type {Number}
*/
Selection.prototype.anchorOffset = 0;
/**
@browser Gecko
@type {Node}
*/
Selection.prototype.focusNode = 0;
/**
@browser Gecko
@type {Number}
*/
Selection.prototype.focusOffset = 0;
/**
@browser Gecko
@type {boolean}
*/
Selection.prototype.isCollapsed = 0;
/**
@browser Gecko
@type {Number}
*/
Selection.prototype.rangeCount = 0;
/**
@browser IE
@type {string}
*/
Selection.prototype.type = 0;
/**
@browser Gecko
@param {Number} index
@return {Range}
*/
Selection.prototype.getRangeAt = function(index) {};
/**
@browser Gecko
@param {Node} parentNode
@param {Number} offset
@return {void}
*/
Selection.prototype.collapse = function(parentNode,offset) {};
/**
@browser Gecko
@param {Node} parentNode
@param {Number} offset
@return {void}
*/
Selection.prototype.extend = function(parentNode,offset) {};
/**
@browser Gecko
@return {void}
*/
Selection.prototype.collapseToStart = function() {};
/**
@browser Gecko
@return {void}
*/
Selection.prototype.collapseToEnd = function() {};
/**
@browser Gecko
@param {Node} parentNode
@return {void}
*/
Selection.prototype.selectAllChildren = function(parentNode) {};
/**
@browser Gecko
@param {Range} range
@return {void}
*/
Selection.prototype.addRange = function(range) {};
/**
@browser Gecko
@param {Range} range
@return {void}
*/
Selection.prototype.removeRange = function(range) {};
/**
@browser Gecko
@return {void}
*/
Selection.prototype.removeAllRanges = function() {};
/**
@browser Gecko
@param {Node} node
@param {boolean} partlyContained
@return {boolean}
*/
Selection.prototype.containsNode = function(node,partlyContained) {};
/**
@browser IE
@return {boolean}
*/
Selection.prototype.clear = function() {};
/**
@browser IE
@return {boolean}
*/
Selection.prototype.empty = function() {};
/**
@browser IE
@return {TextRange}
*/
Selection.prototype.createRange = function() {};
Selection = {};

/**
@browser IE
@type {string}
*/
TextRange.prototype.htmlText = 0;
/**
@browser IE
@type {string}
*/
TextRange.prototype.text = 0;
/**
@browser IE
@type {Number}
*/
TextRange.prototype.boundingWidth = 0;
/**
@browser IE
@type {Number}
*/
TextRange.prototype.boundingHeight = 0;
/**
@browser IE
@type {Number}
*/
TextRange.prototype.boundingLeft = 0;
/**
@browser IE
@type {Number}
*/
TextRange.prototype.offsetLeft = 0;
/**
@browser IE
@type {Number}
*/
TextRange.prototype.boundingTop = 0;
/**
@browser IE
@type {Number}
*/
TextRange.prototype.offsetTop = 0;
/**
@browser IE
@return {string}
*/
TextRange.prototype.getBookmark = function() {};
/**
@browser IE
@param {string} [sBookmark]
@return {boolean}
*/
TextRange.prototype.moveToBookmark = function(sBookmark) {};
/**
@browser IE
@param {boolean} [start]
@return {void}
*/
TextRange.prototype.collapse = function(start) {};
/**
@browser IE
@param {string} [unit]
@return {void}
*/
TextRange.prototype.expand = function(unit) {};
/**
@browser IE
@return {TextRange}
*/
TextRange.prototype.duplicate = function() {};
/**
@browser IE
@return {void}
*/
TextRange.prototype.select = function() {};
/**
@browser IE
@return {Node}
*/
TextRange.prototype.parentElement = function() {};
/**
@browser IE
@param {TextRange} other
@return {boolean}
*/
TextRange.prototype.inRange = function(other) {};
/**
@browser IE
@param {TextRange} other
@return {boolean}
*/
TextRange.prototype.isEqual = function(other) {};
/**
@browser IE
@param {boolean} [start]
@return {void}
*/
TextRange.prototype.scrollIntoView = function(start) {};
/**
@browser IE
@param {string} type
@param {TextRange} range
@return {void}
*/
TextRange.prototype.setEndPoint = function(type,range) {};
/**
@browser IE
@param {string} type
@param {TextRange} range
@return {void}
*/
TextRange.prototype.compareEndPoint = function(type,range) {};
/**
@browser IE
@param {string} unit
@param {Number} [count]
@return {void}
*/
TextRange.prototype.move = function(unit,count) {};
/**
@browser IE
@param {string} unit
@param {Number} [count]
@return {void}
*/
TextRange.prototype.moveStart = function(unit,count) {};
/**
@browser IE
@param {string} unit
@param {Number} [count]
@return {void}
*/
TextRange.prototype.moveEnd = function(unit,count) {};
/**
@browser IE
@param {string} htmlText
@return {void}
*/
TextRange.prototype.pasteHTML = function(htmlText) {};
/**
@browser IE
@param {HTMLElement} [element]
@return {void}
*/
TextRange.prototype.moveToElementText = function(element) {};
/**
@browser IE
@param {string} [sType]
@param {TextRange} [oRange]
@return {Number}
*/
TextRange.prototype.compareEndPoints = function(sType,oRange) {};
TextRange = {};

/**
@browser IE
@type {Selection}
*/
document.prototype.selection = 0;
/**
@browser IE
@type {Array}
*/
document.prototype.namespaces = 0;
/**
@browser IE
@type {All}
*/
document.prototype.all = 0;
/**
@browser IE
@param {string} sCommand
@param {boolean} [bUserInterface]
@param {*} [vValue]
@return {boolean}
*/
document.prototype.execCommand = function(sCommand,bUserInterface,vValue) {};
document = {};

/**
@type {string}
*/
CssRule.prototype.selectorText = 0;
CssRule = {};

/**
@browser Gecko
@type {CssRule[]}
*/
Stylesheet.prototype.cssRules = 0;
/**
@browser IE
@type {CssRule[]}
*/
Stylesheet.prototype.rules = 0;
/**
@browser IE
@type {HtmlElement}
*/
Stylesheet.prototype.owningElement = 0;
/**
@browser IE
@param {string} selector
@param {string} style
@param {Number} [index]
@return {void}
*/
Stylesheet.prototype.addRule = function(selector,style,index) {};
/**
@browser Gecko
@param {string} ruleText
@param {Number} index
@return {void}
*/
Stylesheet.prototype.insertRule = function(ruleText,index) {};
/**
@browser IE
@param {Number} index
@return {void}
*/
Stylesheet.prototype.removeRule = function(index) {};
/**
@browser Gecko
@param {Number} index
@return {void}
*/
Stylesheet.prototype.deleteRule = function(index) {};
Stylesheet = {};

/**
@browser Gecko
@param {string} title
@param {string} url
@param {string} param3
@return {void}
*/
MozillaSideBar.prototype.addPanel = function(title,url,param3) {};
MozillaSideBar = {};

/**
@browser IE
@param {string} title
@param {string} [url]
@return {void}
*/
IEExternal.prototype.AddFavorite = function(title,url) {};
IEExternal = {};

/**
@return {void}
*/
History.prototype.back = function() {};
/**
@return {void}
*/
History.prototype.forward = function() {};
/**
@param {Number} count
@return {void}
*/
History.prototype.go = function(count) {};
History = {};

/**
 * @interface
 */
function Console() {}
/**
@param {...*} message
*/
Console.prototype.info = function(message) {};
/**
@param {...*} message
*/
Console.prototype.warn = function(message) {};
/**
@param {...*} message
*/
Console.prototype.error = function(message) {};
/**
@param {...*} message
*/
Console.prototype.log = function(message) {};
/**
@param {...*} message
*/
Console.prototype.dir = function(message) {};
Console.prototype.group = function() {};
Console.prototype.groupCollapsed = function() {};
Console.prototype.groupEnd = function() {};
Console.prototype.trace = function() {};
/**
@param {string} timerName
*/
Console.prototype.time = function(timerName) {};
/**
@param {string} timerName
*/
Console.prototype.timeEnd = function(timerName) {};
Console.prototype.time = function() {};

/**
@typedef {window}
*/
Window = {};

/**
@type {HTMLDocument}
@const
*/
window.document = 0;
/**
@type {Event}
@const
*/
window.event = 0;
/**
@type {Navigator}
@const
*/
window.navigator = 0;
/**
@type {Screen}
@const
*/
window.screen = 0;
/**
@type {Location|String}
*/
window.location = 0;
/**
@type {Console}
*/
window.console = 0;
/**
@type {Object}
*/
window.frameElement = 0;
/**
@type {window}
*/
window.opener = 0;
/**
@type {window}
*/
window.window = 0;
/**
@type {window}
*/
window.parent = 0;
/**
@type {window}
*/
window.top = 0;
/**
@type {Object}
*/
window.self = 0;
/**
@type {Array}
*/
window.frames = 0;
/**
@type {Number}
*/
window.innerHeight = 0;
/**
@type {Number}
*/
window.innerWidth = 0;
/**
@type {Number}
*/
window.outerHeight = 0;
/**
@type {Number}
*/
window.outerWidth = 0;
/**
@browser IE
@type {Number}
*/
window.screenLeft = 0;
/**
@browser IE
@type {Number}
*/
window.screenTop = 0;
/**
@type {Number}
*/
window.scrollX = 0;
/**
@type {Number}
*/
window.scrollY = 0;
/**
@type {Number}
*/
window.pageXOffset = 0;
/**
@type {Number}
*/
window.pageYOffset = 0;
/**
@type {Number}
*/
window.scrollMaxX = 0;
/**
@type {Number}
*/
window.scrollMaxY = 0;
/**
@type {string}
*/
window.status = 0;
/**
@type {string}
*/
window.defaultStatus = 0;
/**
@type {Object}
*/
window.toolbar = 0;
/**
@type {Object}
*/
window.menubar = 0;
/**
@type {Object}
*/
window.scrollbars = 0;
/**
@type {Object}
*/
window.directories = 0;
/**
@type {History}
*/
window.history = 0;
/**
@browser Gecko
@type {MozillaSideBar}
*/
window.sidebar = 0;
/**
@browser IE
@type {IEExternal}
*/
window.external = 0;
/**
@browser Opera
@type {boolean}
*/
window.opera = 0;
/**
@browser ie
@type {ClipboardData}
@const
*/
window.clipboardData = 0;
/**
@type {Function}
*/
Object.defineProperty(window, "onload", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(window, "onunload", { set: function(value) {} });
/**
@browser Gecko
@return {Selection}
*/
window.getSelection = function() {};
/**
@param {string} [url]
@param {string} [windowName]
@param {string} [windowFeatures]
@param {boolean} [replace]
@return {window}
*/
window.open = function(url,windowName,windowFeatures,replace) {};
/**
@return {void}
*/
window.close = function() {};
/**
@return {void}
*/
window.print = function() {};
/**
@param {String|*} message
*/
window.alert = function(message) {};
/**
@param {string} encodedData
@return {string}
*/
window.atob = function(encodedData) {};
/**
@param {string} decodedData
@return {string}
*/
window.btoa = function(decodedData) {};
/**
@param {string} message
*/
window.confirm = function(message) {};
/**
@param {string} message
@param {string} [defaultValue]
*/
window.prompt = function(message,defaultValue) {};
/**
@param {number} intervalId
*/
window.clearInterval = function(intervalId) {};
/**
@param {number} intervalId
*/
window.clearTimeout = function(intervalId) {};
/**
@param {String|Function} code
@param {number} delay
@return {number}
*/
window.setInterval = function(code,delay) {};
/**
@param {String|Function} code
@param {number} delay
@return {number}
*/
window.setTimeout = function(code,delay) {};
/**
@browser Gecko
@param {Event} eventType
@return {void}
@deprecated
*/
window.captureEvents = function(eventType) {};
/**
@browser Gecko
@param {Event} eventType
@return {void}
@deprecated
*/
window.releaseEvents = function(eventType) {};
/**
@browser Gecko
@param {Event} event
@return {void}
@deprecated
*/
window.routeEvent = function(event) {};
/**
@browser Gecko
@param {Event} event
@return {void}
@deprecated
*/
window.preventBubble = function(event) {};
/**
@browser IE
@param {string} classOrPath
@param {string} [clazz]
@return {Object}
@deprecated
*/
window.GetObject = function(classOrPath,clazz) {};
/**
@browser IE
@return {string}
*/
window.ScriptEngine = function() {};
/**
@browser IE
@return {string}
*/
window.ScriptEngineBuildVersion = function() {};
/**
@browser IE
@return {string}
*/
window.ScriptEngineMajorVersion = function() {};
/**
@browser IE
@return {string}
*/
window.ScriptEngineMinorVersion = function() {};
/**
@param {Number} x
@param {Number} y
*/
window.scrollTo = function(x,y) {};
/**
@param {Number} xDelta
@param {Number} yDelta
*/
window.scrollBy = function(xDelta,yDelta) {};
/**
@param {Number} x
@param {Number} y
*/
window.moveTo = function(x,y) {};
/**
@param {Number} xDelta
@param {Number} yDelta
*/
window.moveBy = function(xDelta,yDelta) {};
/**
@param {Number} width
@param {Number} height
*/
window.resizeTo = function(width,height) {};
/**
@param {Number} widthDelta
@param {Number} heightDelta
*/
window.resizeBy = function(widthDelta,heightDelta) {};
/**
@browser Gecko
@param {Element} element
@param {string} pseudoElt
@return {CSSStyleDeclaration}
*/
window.getComputedStyle = function(element,pseudoElt) {};
/**
@browser IE
@param {string} sUrl
@param {Object|String|Number} [vArguments]
@param {string} [sFeatures]
@return {Object}
*/
window.showModalDialog = function(sUrl,vArguments,sFeatures) {};
/**
@browser IE
@param {string} type
@param {Function} listener
*/
window.attachEvent = function(type,listener) {};
/**
@browser IE
@param {string} type
@param {Function} listener
*/
window.detachEvent = function(type,listener) {};
/**
@browser Gecko
@param {string} type
@param {Function} listener
@param {boolean} [useCapture]
*/
window.addEventListener = function(type,listener,useCapture) {};
/**
@browser Gecko
@param {string} type
@param {Function} listener
@param {boolean} [useCapture]
*/
window.removeEventListener = function(type,listener,useCapture) {};
/**
@browser IE
@param {string} sScript
*/
window.execScript = function(sScript) {};
/**
@browser IE
*/
window.CollectGarbage = function() {};

/**
@browser ie
@param {string} sDataFormat
@param {string} sData
@return {boolean}
*/
ClipboardData.prototype.setData = function(sDataFormat,sData) {};
/**
@browser ie
@param {string} sDataFormat
@return {string}
*/
ClipboardData.prototype.getData = function(sDataFormat) {};
/**
@browser ie
@param {string} [sDataFormat]
@return {boolean}
*/
ClipboardData.prototype.clearData = function(sDataFormat) {};
ClipboardData = {};

/**
@type {window}
@const
*/
window = 0;
/**
@param {string} [str]
@deprecated
*/
escape = function(str) {};
/**
@param {string} [str]
@deprecated
*/
unescape = function(str) {};

/**
@type {Number}
@const
*/
HTMLCollection.prototype.length = 0;
/**
@param {Number} index
@return {Node}
*/
HTMLCollection.prototype.item = function(index) {};
/**
@param {string} name
@return {Node}
*/
HTMLCollection.prototype.namedItem = function(name) {};
HTMLCollection = {};

/**
@type {Number}
@const
*/
HTMLOptionsCollection.prototype.length = 0;
/**
@param {number} index
@return {Node}
*/
HTMLOptionsCollection.prototype.item = function(index) {};
/**
@param {string} name
@return {Node}
*/
HTMLOptionsCollection.prototype.namedItem = function(name) {};
HTMLOptionsCollection = {};

/**
@type {string}
*/
HTMLDocument.prototype.title = 0;
/**
@type {string}
@const
*/
HTMLDocument.prototype.referrer = 0;
/**
@type {string}
@const
*/
HTMLDocument.prototype.domain = 0;
/**
@type {string}
@const
*/
HTMLDocument.prototype.URL = 0;
/**
@type {HTMLElement}
*/
HTMLDocument.prototype.body = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLDocument.prototype.images = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLDocument.prototype.applets = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLDocument.prototype.links = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLDocument.prototype.forms = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLDocument.prototype.anchors = 0;
/**
@type {HTMLCollection}
*/
HTMLDocument.prototype.cookie = 0;
/**
@type {Stylesheet[]}
@const
*/
HTMLDocument.prototype.styleSheets = 0;
/**
@browser Gecko
@type {DocumentView}
*/
HTMLDocument.prototype.defaultView = 0;
/**
@browser IE
@type {DocumentView}
*/
HTMLDocument.prototype.activeElement = 0;
/**
@type {string}
*/
HTMLDocument.prototype.compatMode = 0;
/**
@browser IE
@type {window}
*/
HTMLDocument.prototype.parentWindow = 0;
/**
@browser Gecko
@type {CommandDispatcher}
*/
HTMLDocument.prototype.commandDispatcher = 0;
/**
@browser IE
@type {Number}
*/
HTMLDocument.prototype.documentMode = 0;
/**
@type {Function}
*/
Object.defineProperty(HTMLDocument, "onload", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLDocument, "onunload", { set: function(value) {} });
HTMLDocument.prototype.open = function() {};
HTMLDocument.prototype.close = function() {};
/**
@param {string} text
*/
HTMLDocument.prototype.write = function(text) {};
/**
@param {string} text
*/
HTMLDocument.prototype.writeln = function(text) {};
/**
@param {string} elementName
@return {NodeList}
*/
HTMLDocument.prototype.getElementsByName = function(elementName) {};
/**
@browser Gecko
@param {string} className
@return {NodeList}
*/
HTMLDocument.prototype.getElementsByClassName = function(className) {};
/**
@browser IE
@param {string} [sUrl]
@param {Number} [iIndex]
@return {Stylesheet}
*/
HTMLDocument.prototype.createStyleSheet = function(sUrl,iIndex) {};
/**
@browser Gecko
@param {HTMLElement} element
@return {{x: Number, y: Number, width: Number, height: Number}}
@deprecated
*/
HTMLDocument.prototype.getBoxObjectFor = function(element) {};
/**
@param {string} selector
@return {NodeList}
*/
HTMLDocument.prototype.querySelectorAll = function(selector) {};
/**
@param {string} selector
@return {Node}
*/
HTMLDocument.prototype.querySelector = function(selector) {};
/**
@browser Gecko
@param {HTMLElement} node
@return {Node[]}
*/
HTMLDocument.prototype.getAnonymousNodes = function(node) {};
/**
@browser Gecko
@param {HTMLElement} node
@param {string} attrName
@param {string} attrValue
@return {NodeList}
*/
HTMLDocument.prototype.getAnonymousElementByAttribute = function(node,attrName,attrValue) {};
/**
@browser IE
@param {number} iX
@param {number} iY
@return {HTMLElement}
*/
HTMLDocument.prototype.elementFromPoint = function(iX,iY) {};
/**
@browser IE
@param {Event} [oExistingEvent]
@return {Event}
*/
HTMLDocument.prototype.createEventObject = function(oExistingEvent) {};
/**
@browser Gecko
@param {Event} eventType
@deprecated
*/
HTMLDocument.prototype.captureEvents = function(eventType) {};
/**
@browser Gecko
@param {Event} eventType
@deprecated
*/
HTMLDocument.prototype.releaseEvents = function(eventType) {};
/**
@browser Gecko
@param {Event} event
@deprecated
*/
HTMLDocument.prototype.routeEvent = function(event) {};
/**
@browser Gecko
@param {Event} event
@deprecated
*/
HTMLDocument.prototype.preventBubble = function(event) {};
HTMLDocument.prototype = new Document();
HTMLDocument = {};

/**
@browser Gecko
@type {HTMLElement}
*/
CommandDispatcher.prototype.focusedElement = 0;
CommandDispatcher = {};

AbstractView = {};

/**
@browser Gecko
@param {Node} element
@param {string} type
@return {CssStyle}
*/
DocumentView.prototype.getComputedStyle = function(element,type) {};
DocumentView.prototype = new AbstractView();
DocumentView = {};

/**
@browser Gecko
@param {string} propertyName
@return {string}
*/
CssStyle.prototype.getPropertyValue = function(propertyName) {};
CssStyle = {};

/**
@type {string}
*/
HTMLElement.prototype.outerHTML = 0;
/**
@type {string}
*/
HTMLElement.prototype.id = 0;
/**
@type {string}
*/
HTMLElement.prototype.title = 0;
/**
@type {string}
*/
HTMLElement.prototype.lang = 0;
/**
@type {string}
*/
HTMLElement.prototype.dir = 0;
/**
@type {string}
*/
HTMLElement.prototype.className = 0;
/**
@browser IE
@type {HTMLElement[]}
*/
HTMLElement.prototype.children = 0;
/**
@type {CSSStyleDeclaration}
*/
HTMLElement.prototype.style = 0;
/**
@type {number}
*/
HTMLElement.prototype.clientWidth = 0;
/**
@type {number}
*/
HTMLElement.prototype.clientHeight = 0;
/**
@type {number}
*/
HTMLElement.prototype.clientTop = 0;
/**
@type {number}
*/
HTMLElement.prototype.clientLeft = 0;
/**
@type {string}
*/
HTMLElement.prototype.innerHTML = 0;
/**
@browser IE
@type {string}
*/
HTMLElement.prototype.innerText = 0;
/**
@type {number}
*/
HTMLElement.prototype.offsetWidth = 0;
/**
@type {number}
*/
HTMLElement.prototype.offsetHeight = 0;
/**
@type {number}
*/
HTMLElement.prototype.offsetTop = 0;
/**
@type {number}
*/
HTMLElement.prototype.offsetLeft = 0;
/**
@type {HTMLElement}
*/
HTMLElement.prototype.offsetParent = 0;
/**
@type {number}
*/
HTMLElement.prototype.scrollWidth = 0;
/**
@type {number}
*/
HTMLElement.prototype.scrollHeight = 0;
/**
@type {number}
*/
HTMLElement.prototype.scrollTop = 0;
/**
@type {number}
*/
HTMLElement.prototype.scrollLeft = 0;
/**
@type {Stylesheet}
*/
HTMLElement.prototype.stylesheet = 0;
/**
@browser IE
@type {number}
@const
*/
HTMLElement.prototype.sourceIndex = 0;
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onblur", { set: function(value) {} });
/**
@type {function():(void|Boolean)}
*/
Object.defineProperty(HTMLElement, "onclick", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "ondblclick", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onfocus", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onkeydown", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onkeyup", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onmouseup", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onmousedown", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onmouseout", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onmouseover", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onmousemove", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLElement, "onresize", { set: function(value) {} });
/**
@browser IE
@type {IEElementStyle}
*/
HTMLElement.prototype.currentStyle = 0;
/**
@browser IE
@type {IEElementStyle}
*/
HTMLElement.prototype.runtimeStyle = 0;
/**
@browser IE
@type {Array}
*/
HTMLElement.prototype.filters = 0;
/**
@browser Gecko
@type {HTMLElement}
*/
HTMLElement.prototype.boxObject = 0;
/**
@browser IE
@type {string}
*/
HTMLElement.prototype.propertyName = 0;
/**
@browser IE
@type {boolean}
*/
HTMLElement.prototype.isDisabled = 0;
/**
@browser IE
@param {string} position
@param {string} htmlContent
*/
HTMLElement.prototype.insertAdjacentHTML = function(position,htmlContent) {};
/**
@browser IE
@param {string} [sScrollAction]
*/
HTMLElement.prototype.doScroll = function(sScrollAction) {};
/**
@browser IE
@param {string} position
@param {string} textContent
*/
HTMLElement.prototype.insertAdjacentText = function(position,textContent) {};
/**
@browser IE
@param {string} type
@param {Function} listener
*/
HTMLElement.prototype.attachEvent = function(type,listener) {};
/**
@browser IE
@param {string} type
@param {Function} listener
*/
HTMLElement.prototype.detachEvent = function(type,listener) {};
/**
@browser IE
@param {string} type
@param {Event} [event]
*/
HTMLElement.prototype.fireEvent = function(type,event) {};
/**
@browser IE
@param {string} sUrl
@return {Number}
*/
HTMLElement.prototype.addBehavior = function(sUrl) {};
/**
@browser IE
@param {Number} sID
@return {boolean}
*/
HTMLElement.prototype.removeBehavior = function(sID) {};
/**
@browser IE
@return {ClientRect}
*/
HTMLElement.prototype.getBoundingClientRect = function() {};
/**
@browser Gecko
*/
HTMLElement.prototype.showPopup = function() {};
/**
@browser Gecko
*/
HTMLElement.prototype.hidePopup = function() {};
/**
@browser IE
@param {boolean} [bContainerCapture]
*/
HTMLElement.prototype.setCapture = function(bContainerCapture) {};
/**
@browser IE
*/
HTMLElement.prototype.releaseCapture = function() {};
/**
@browser IE
*/
HTMLElement.prototype.clearAttributes = function() {};
/**
@browser IE
@param {Object} [oSource]
@param {boolean} [bPreserve]
*/
HTMLElement.prototype.mergeAttributes = function(oSource,bPreserve) {};
HTMLElement.prototype = new Element();
HTMLElement = {};

/**
@type {Number}
@const
*/
ClientRect.prototype.bottom = 0;
/**
@type {Number}
@const
*/
ClientRect.prototype.height = 0;
/**
@type {Number}
@const
*/
ClientRect.prototype.left = 0;
/**
@type {Number}
@const
*/
ClientRect.prototype.right = 0;
/**
@type {Number}
@const
*/
ClientRect.prototype.top = 0;
/**
@type {Number}
@const
*/
ClientRect.prototype.width = 0;
ClientRect = {};

/**
@type {string}
*/
CSSStyleDeclaration.prototype.cssText = 0;
/**
@type {number}
*/
CSSStyleDeclaration.prototype.length = 0;
/**
@type {CSSRule}
*/
CSSStyleDeclaration.prototype.parentRule = 0;
/**
@param {string} propertyName
@return {CSSValue}
*/
CSSStyleDeclaration.prototype.getPropertyCSSValue = function(propertyName) {};
/**
@param {string} propertyName
@return {string}
*/
CSSStyleDeclaration.prototype.getPropertyPriority = function(propertyName) {};
/**
@param {string} propertyName
@return {string}
*/
CSSStyleDeclaration.prototype.getPropertyValue = function(propertyName) {};
/**
@param {Number} index
@return {string}
*/
CSSStyleDeclaration.prototype.item = function(index) {};
/**
@param {string} propertyName
@return {string}
*/
CSSStyleDeclaration.prototype.removeProperty = function(propertyName) {};
/**
@param {string} propertyName
@param {string} value
@param {string} priority
@return {void}
*/
CSSStyleDeclaration.prototype.setProperty = function(propertyName,value,priority) {};
CSSStyleDeclaration = {};

/**
@static
@type {number}
@const
*/
CSSRule.STYLE_RULE = 1;
/**
@static
@type {number}
@const
*/
CSSRule.MEDIA_RULE = 4;
/**
@static
@type {number}
@const
*/
CSSRule.FONT_FACE_RULE = 5;
/**
@static
@type {number}
@const
*/
CSSRule.PAGE_RULE = 6;
/**
@static
@type {number}
@const
*/
CSSRule.IMPORT_RULE = 3;
/**
@static
@type {number}
@const
*/
CSSRule.CHARSET_RULE = 2;
/**
@static
@type {number}
@const
*/
CSSRule.UNKNOWN_RULE = 0;
/**
@static
@type {number}
@const
*/
CSSRule.KEYFRAMES_RULE = 7;
/**
@static
@type {number}
@const
*/
CSSRule.KEYFRAME_RULE = 8;
/**
@static
@type {number}
@const
*/
CSSRule.NAMESPACE_RULE = 10;
/**
@static
@type {number}
@const
*/
CSSRule.COUNTER_STYLE_RULE = 11;
/**
@static
@type {number}
@const
*/
CSSRule.SUPPORTS_RULE = 12;
/**
@static
@type {number}
@const
*/
CSSRule.DOCUMENT_RULE = 13;
/**
@static
@type {number}
@const
*/
CSSRule.FONT_FEATURE_VALUES_RULE = 14;
/**
@static
@type {number}
@const
*/
CSSRule.VIEWPORT_RULE = 15;
/**
@static
@type {number}
@const
*/
CSSRule.REGION_STYLE_RULE = 16;
/**
@type {string}
*/
CSSRule.prototype.cssText = 0;
/**
@type {CSSRule}
*/
CSSRule.prototype.parentRule = 0;
/**
@type {CSSStyleSheet}
*/
CSSRule.prototype.parentStyleSheet = 0;
/**
@type {number}
*/
CSSRule.prototype.type = 0;
CSSRule = {};

/**
@static
@type {number}
@const
*/
CSSValue.CSS_INHERIT = 0;
/**
@static
@type {number}
@const
*/
CSSValue.CSS_PRIMITIVE_VALUE = 1;
/**
@static
@type {number}
@const
*/
CSSValue.CSS_VALUE_LIST = 2;
/**
@static
@type {number}
@const
*/
CSSValue.CSS_CUSTOM = 3;
/**
@type {string}
*/
CSSValue.prototype.cssText = 0;
/**
@type {number}
*/
CSSValue.prototype.cssValueType = 0;
CSSValue = {};

/**
@type {CSSRule[]}
@const
*/
CSSStyleSheet.prototype.cssRules = 0;
/**
@type {CSSImportRule}
@const
*/
CSSStyleSheet.prototype.ownerRule = 0;
/**
@param {string} rule
@param {number} index
*/
CSSStyleSheet.prototype.insertRule = function(rule,index) {};
/**
@param {number} index
*/
CSSStyleSheet.prototype.deleteRule = function(index) {};
CSSStyleSheet = {};

/**
@type {string}
*/
CSSImportRule.prototype.href = 0;
/**
@type {Object}
*/
CSSImportRule.prototype.media = 0;
/**
@type {CSSStyleSheet}
*/
CSSImportRule.prototype.styleSheet = 0;
/**
@type {CSSStyleSheet}
*/
CSSImportRule.prototype.styleSheet = 0;
CSSImportRule = {};

/**
@browser IE
@type {boolean}
*/
IEElementStyle.prototype.hasLayout = 0;
IEElementStyle.prototype = new CSSStyleDeclaration();
IEElementStyle = {};

/**
@type {string}
*/
HTMLHtmlElement.prototype.version = 0;
HTMLHtmlElement.prototype = new HTMLElement();
HTMLHtmlElement = {};

/**
@type {string}
*/
HTMLHeadElement.prototype.profile = 0;
HTMLHeadElement.prototype = new HTMLElement();
HTMLHeadElement = {};

/**
@type {boolean}
*/
HTMLLinkElement.prototype.disabled = 0;
/**
@type {string}
*/
HTMLLinkElement.prototype.charset = 0;
/**
@type {string}
*/
HTMLLinkElement.prototype.href = 0;
/**
@type {string}
*/
HTMLLinkElement.prototype.hreflang = 0;
/**
@type {string}
*/
HTMLLinkElement.prototype.media = 0;
/**
@type {string}
*/
HTMLLinkElement.prototype.rel = 0;
/**
@type {string}
*/
HTMLLinkElement.prototype.rev = 0;
/**
@type {string}
*/
HTMLLinkElement.prototype.target = 0;
/**
@type {string}
*/
HTMLLinkElement.prototype.type = 0;
HTMLLinkElement.prototype = new HTMLElement();
HTMLLinkElement = {};

/**
@type {string}
*/
HTMLTitleElement.prototype.text = 0;
HTMLTitleElement.prototype = new HTMLElement();
HTMLTitleElement = {};

/**
@type {string}
*/
HTMLMetaElement.prototype.content = 0;
/**
@type {string}
*/
HTMLMetaElement.prototype.httpEquiv = 0;
/**
@type {string}
*/
HTMLMetaElement.prototype.name = 0;
/**
@type {string}
*/
HTMLMetaElement.prototype.scheme = 0;
HTMLMetaElement.prototype = new HTMLElement();
HTMLMetaElement = {};

/**
@type {string}
*/
HTMLBaseElement.prototype.href = 0;
/**
@type {string}
*/
HTMLBaseElement.prototype.target = 0;
HTMLBaseElement.prototype = new HTMLElement();
HTMLBaseElement = {};

/**
@type {HTMLFormElement}
@const
*/
HTMLIsIndexElement.prototype.form = 0;
/**
@type {string}
*/
HTMLIsIndexElement.prototype.prompt = 0;
HTMLIsIndexElement.prototype = new HTMLElement();
HTMLIsIndexElement = {};

/**
@type {boolean}
*/
HTMLStyleElement.prototype.disabled = 0;
/**
@type {string}
*/
HTMLStyleElement.prototype.media = 0;
/**
@type {string}
*/
HTMLStyleElement.prototype.type = 0;
/**
@browser IE
@type {Stylesheet}
*/
HTMLStyleElement.prototype.styleSheet = 0;
HTMLStyleElement.prototype = new HTMLElement();
HTMLStyleElement = {};

/**
@type {string}
*/
HTMLBodyElement.prototype.aLink = 0;
/**
@type {string}
*/
HTMLBodyElement.prototype.background = 0;
/**
@type {string}
*/
HTMLBodyElement.prototype.bgColor = 0;
/**
@type {string}
*/
HTMLBodyElement.prototype.link = 0;
/**
@type {string}
*/
HTMLBodyElement.prototype.text = 0;
/**
@type {string}
*/
HTMLBodyElement.prototype.vLink = 0;
/**
@type {Function}
*/
Object.defineProperty(HTMLBodyElement, "onload", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLBodyElement, "onunload", { set: function(value) {} });
HTMLBodyElement.prototype = new HTMLElement();
HTMLBodyElement = {};

/**
@type {HTMLCollection}
@const
*/
HTMLFormElement.prototype.elements = 0;
/**
@type {Number}
@const
*/
HTMLFormElement.prototype.length = 0;
/**
@type {string}
*/
HTMLFormElement.prototype.name = 0;
/**
@type {string}
*/
HTMLFormElement.prototype.acceptCharset = 0;
/**
@type {string}
*/
HTMLFormElement.prototype.action = 0;
/**
@type {string}
*/
HTMLFormElement.prototype.enctype = 0;
/**
@type {string}
*/
HTMLFormElement.prototype.method = 0;
/**
@type {string}
*/
HTMLFormElement.prototype.target = 0;
HTMLFormElement.prototype.submit = function() {};
HTMLFormElement.prototype.reset = function() {};
HTMLFormElement.prototype = new HTMLElement();
HTMLFormElement = {};

/**
@type {string}
@const
*/
HTMLSelectElement.prototype.type = 0;
/**
@type {Number}
*/
HTMLSelectElement.prototype.selectedIndex = 0;
/**
@type {string}
*/
HTMLSelectElement.prototype.value = 0;
/**
@type {Number}
*/
HTMLSelectElement.prototype.length = 0;
/**
@type {HTMLFormElement}
@const
*/
HTMLSelectElement.prototype.form = 0;
/**
@type {HTMLOptionsCollection}
@const
*/
HTMLSelectElement.prototype.options = 0;
/**
@type {boolean}
*/
HTMLSelectElement.prototype.disabled = 0;
/**
@type {boolean}
*/
HTMLSelectElement.prototype.multiple = 0;
/**
@type {string}
*/
HTMLSelectElement.prototype.name = 0;
/**
@type {Number}
*/
HTMLSelectElement.prototype.size = 0;
/**
@type {Number}
*/
HTMLSelectElement.prototype.tabIndex = 0;
/**
@param {HTMLElement} element
@param {HTMLElement} before
*/
HTMLSelectElement.prototype.add = function(element,before) {};
/**
@param {Number} index
*/
HTMLSelectElement.prototype.remove = function(index) {};
HTMLSelectElement.prototype.blur = function() {};
HTMLSelectElement.prototype.focus = function() {};
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement = {};

/**
@type {boolean}
*/
HTMLOptGroupElement.prototype.disabled = 0;
/**
@type {string}
*/
HTMLOptGroupElement.prototype.label = 0;
HTMLOptGroupElement.prototype = new HTMLElement();
HTMLOptGroupElement = {};

/**
@type {HTMLFormElement}
@const
*/
HTMLOptionElement.prototype.form = 0;
/**
@type {boolean}
*/
HTMLOptionElement.prototype.defaultSelected = 0;
/**
@type {string}
*/
HTMLOptionElement.prototype.text = 0;
/**
@type {Number}
*/
HTMLOptionElement.prototype.index = 0;
/**
@type {boolean}
*/
HTMLOptionElement.prototype.disabled = 0;
/**
@type {string}
*/
HTMLOptionElement.prototype.label = 0;
/**
@type {boolean}
*/
HTMLOptionElement.prototype.selected = 0;
/**
@type {string}
*/
HTMLOptionElement.prototype.value = 0;
HTMLOptionElement.prototype = new HTMLElement();
HTMLOptionElement = {};

/**
@type {string}
*/
HTMLInputElement.prototype.defaultValue = 0;
/**
@type {boolean}
*/
HTMLInputElement.prototype.defaultChecked = 0;
/**
@type {HTMLFormElement}
@const
*/
HTMLInputElement.prototype.form = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.accept = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.accessKey = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.align = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.alt = 0;
/**
@type {boolean}
*/
HTMLInputElement.prototype.checked = 0;
/**
@type {boolean}
*/
HTMLInputElement.prototype.disabled = 0;
/**
@type {Number}
*/
HTMLInputElement.prototype.maxLength = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.name = 0;
/**
@type {boolean}
*/
HTMLInputElement.prototype.readOnly = 0;
/**
@type {Number}
*/
HTMLInputElement.prototype.size = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.src = 0;
/**
@type {Number}
*/
HTMLInputElement.prototype.tabIndex = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.type = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.useMap = 0;
/**
@type {string}
*/
HTMLInputElement.prototype.value = 0;
/**
@type {Number}
*/
HTMLInputElement.prototype.selectionStart = 0;
/**
@type {Number}
*/
HTMLInputElement.prototype.selectionEnd = 0;
HTMLInputElement.prototype.blur = function() {};
HTMLInputElement.prototype.focus = function() {};
HTMLInputElement.prototype.select = function() {};
HTMLInputElement.prototype.click = function() {};
/**
@browser Gecko
@param {Number} [start]
@param {Number} [end]
*/
HTMLInputElement.prototype.setSelectionRange = function(start,end) {};
/**
@browser IE
@return {TextRange}
*/
HTMLInputElement.prototype.createTextRange = function() {};
HTMLInputElement.prototype = new HTMLElement();
HTMLInputElement = {};

/**
@type {string}
*/
HTMLTextAreaElement.prototype.defaultValue = 0;
/**
@type {HTMLFormElement}
@const
*/
HTMLTextAreaElement.prototype.form = 0;
/**
@type {string}
*/
HTMLTextAreaElement.prototype.accessKey = 0;
/**
@type {Number}
*/
HTMLTextAreaElement.prototype.cols = 0;
/**
@type {boolean}
*/
HTMLTextAreaElement.prototype.disabled = 0;
/**
@type {string}
*/
HTMLTextAreaElement.prototype.name = 0;
/**
@type {boolean}
*/
HTMLTextAreaElement.prototype.readOnly = 0;
/**
@type {Number}
*/
HTMLTextAreaElement.prototype.rows = 0;
/**
@type {Number}
*/
HTMLTextAreaElement.prototype.tabIndex = 0;
/**
@type {string}
*/
HTMLTextAreaElement.prototype.type = 0;
/**
@type {string}
*/
HTMLTextAreaElement.prototype.value = 0;
HTMLTextAreaElement.prototype.blur = function() {};
HTMLTextAreaElement.prototype.focus = function() {};
HTMLTextAreaElement.prototype.select = function() {};
HTMLTextAreaElement.prototype = new HTMLElement();
HTMLTextAreaElement = {};

/**
@type {HTMLFormElement}
@const
*/
HTMLButtonElement.prototype.form = 0;
/**
@type {string}
*/
HTMLButtonElement.prototype.accessKey = 0;
/**
@type {boolean}
*/
HTMLButtonElement.prototype.disabled = 0;
/**
@type {string}
*/
HTMLButtonElement.prototype.name = 0;
/**
@type {Number}
*/
HTMLButtonElement.prototype.tabIndex = 0;
/**
@type {string}
*/
HTMLButtonElement.prototype.type = 0;
/**
@type {string}
*/
HTMLButtonElement.prototype.value = 0;
HTMLButtonElement.prototype = new HTMLElement();
HTMLButtonElement = {};

/**
@type {HTMLFormElement}
@const
*/
HTMLLabelElement.prototype.form = 0;
/**
@type {string}
*/
HTMLLabelElement.prototype.accessKey = 0;
/**
@type {string}
*/
HTMLLabelElement.prototype.htmlFor = 0;
HTMLLabelElement.prototype = new HTMLElement();
HTMLLabelElement = {};

/**
@type {HTMLFormElement}
@const
*/
HTMLFieldSetElement.prototype.form = 0;
HTMLFieldSetElement.prototype = new HTMLElement();
HTMLFieldSetElement = {};

/**
@type {HTMLFormElement}
@const
*/
HTMLLegendElement.prototype.form = 0;
/**
@type {string}
*/
HTMLLegendElement.prototype.accessKey = 0;
/**
@type {string}
*/
HTMLLegendElement.prototype.align = 0;
HTMLLegendElement.prototype = new HTMLElement();
HTMLLegendElement = {};

/**
@type {boolean}
*/
HTMLUListElement.prototype.compact = 0;
/**
@type {string}
*/
HTMLUListElement.prototype.type = 0;
HTMLUListElement.prototype = new HTMLElement();
HTMLUListElement = {};

/**
@type {boolean}
*/
HTMLOListElement.prototype.compact = 0;
/**
@type {Number}
*/
HTMLOListElement.prototype.start = 0;
/**
@type {string}
*/
HTMLOListElement.prototype.type = 0;
HTMLOListElement.prototype = new HTMLElement();
HTMLOListElement = {};

/**
@type {boolean}
*/
HTMLDListElement.prototype.compact = 0;
HTMLDListElement.prototype = new HTMLElement();
HTMLDListElement = {};

/**
@type {boolean}
*/
HTMLDirectoryElement.prototype.compact = 0;
HTMLDirectoryElement.prototype = new HTMLElement();
HTMLDirectoryElement = {};

/**
@type {boolean}
*/
HTMLMenuElement.prototype.compact = 0;
HTMLMenuElement.prototype = new HTMLElement();
HTMLMenuElement = {};

/**
@type {string}
*/
HTMLLIElement.prototype.type = 0;
/**
@type {Number}
*/
HTMLLIElement.prototype.value = 0;
HTMLLIElement.prototype = new HTMLElement();
HTMLLIElement = {};

/**
@type {string}
*/
HTMLDivElement.prototype.align = 0;
HTMLDivElement.prototype = new HTMLElement();
HTMLDivElement = {};

/**
@type {string}
*/
HTMLParagraphElement.prototype.align = 0;
HTMLParagraphElement.prototype = new HTMLElement();
HTMLParagraphElement = {};

/**
@type {string}
*/
HTMLHeadingElement.prototype.align = 0;
HTMLHeadingElement.prototype = new HTMLElement();
HTMLHeadingElement = {};

/**
@type {string}
*/
HTMLQuoteElement.prototype.cite = 0;
HTMLQuoteElement.prototype = new HTMLElement();
HTMLQuoteElement = {};

/**
@type {Number}
*/
HTMLPreElement.prototype.width = 0;
HTMLPreElement.prototype = new HTMLElement();
HTMLPreElement = {};

/**
@type {string}
*/
HTMLBRElement.prototype.clear = 0;
HTMLBRElement.prototype = new HTMLElement();
HTMLBRElement = {};

/**
@type {string}
*/
HTMLBaseFontElement.prototype.color = 0;
/**
@type {string}
*/
HTMLBaseFontElement.prototype.face = 0;
/**
@type {Number}
*/
HTMLBaseFontElement.prototype.size = 0;
HTMLBaseFontElement.prototype = new HTMLElement();
HTMLBaseFontElement = {};

/**
@type {string}
*/
HTMLFontElement.prototype.color = 0;
/**
@type {string}
*/
HTMLFontElement.prototype.face = 0;
/**
@type {string}
*/
HTMLFontElement.prototype.size = 0;
HTMLFontElement.prototype = new HTMLElement();
HTMLFontElement = {};

/**
@type {string}
*/
HTMLHRElement.prototype.align = 0;
/**
@type {boolean}
*/
HTMLHRElement.prototype.noShade = 0;
/**
@type {string}
*/
HTMLHRElement.prototype.size = 0;
/**
@type {string}
*/
HTMLHRElement.prototype.width = 0;
HTMLHRElement.prototype = new HTMLElement();
HTMLHRElement = {};

/**
@type {string}
*/
HTMLModElement.prototype.cite = 0;
/**
@type {string}
*/
HTMLModElement.prototype.dateTime = 0;
HTMLModElement.prototype = new HTMLElement();
HTMLModElement = {};

/**
@type {string}
*/
HTMLAnchorElement.prototype.accessKey = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.charset = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.coords = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.href = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.hreflang = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.name = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.rel = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.rev = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.shape = 0;
/**
@type {Number}
*/
HTMLAnchorElement.prototype.tabIndex = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.target = 0;
/**
@type {string}
*/
HTMLAnchorElement.prototype.type = 0;
HTMLAnchorElement.prototype.blur = function() {};
HTMLAnchorElement.prototype.focus = function() {};
HTMLAnchorElement.prototype = new HTMLElement();
HTMLAnchorElement = {};

/**
@type {string}
*/
HTMLImageElement.prototype.name = 0;
/**
@type {string}
*/
HTMLImageElement.prototype.align = 0;
/**
@type {string}
*/
HTMLImageElement.prototype.alt = 0;
/**
@type {string}
*/
HTMLImageElement.prototype.border = 0;
/**
@type {Number}
*/
HTMLImageElement.prototype.height = 0;
/**
@type {Number}
*/
HTMLImageElement.prototype.hspace = 0;
/**
@type {boolean}
*/
HTMLImageElement.prototype.isMap = 0;
/**
@type {string}
*/
HTMLImageElement.prototype.longDesc = 0;
/**
@type {string}
*/
HTMLImageElement.prototype.src = 0;
/**
@type {string}
*/
HTMLImageElement.prototype.useMap = 0;
/**
@type {Number}
*/
HTMLImageElement.prototype.vspace = 0;
/**
@type {Number}
*/
HTMLImageElement.prototype.width = 0;
/**
@type {Function}
*/
Object.defineProperty(HTMLImageElement, "onload", { set: function(value) {} });
/**
@type {Function}
*/
Object.defineProperty(HTMLImageElement, "onunload", { set: function(value) {} });
HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement = {};

/**
@type {HTMLFormElement}
@const
*/
HTMLObjectElement.prototype.form = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.code = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.align = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.archive = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.border = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.codeBase = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.codeType = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.data = 0;
/**
@type {boolean}
*/
HTMLObjectElement.prototype.declare = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.height = 0;
/**
@type {Number}
*/
HTMLObjectElement.prototype.hspace = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.name = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.standby = 0;
/**
@type {Number}
*/
HTMLObjectElement.prototype.tabIndex = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.type = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.useMap = 0;
/**
@type {Number}
*/
HTMLObjectElement.prototype.vspace = 0;
/**
@type {string}
*/
HTMLObjectElement.prototype.width = 0;
/**
@type {Document}
@const
*/
HTMLObjectElement.prototype.contentDocument = 0;
HTMLObjectElement.prototype = new HTMLElement();
HTMLObjectElement = {};

/**
@type {string}
*/
HTMLParamElement.prototype.name = 0;
/**
@type {string}
*/
HTMLParamElement.prototype.type = 0;
/**
@type {string}
*/
HTMLParamElement.prototype.value = 0;
/**
@type {string}
*/
HTMLParamElement.prototype.valueType = 0;
HTMLParamElement.prototype = new HTMLElement();
HTMLParamElement = {};

/**
@type {string}
*/
HTMLAppletElement.prototype.align = 0;
/**
@type {string}
*/
HTMLAppletElement.prototype.alt = 0;
/**
@type {string}
*/
HTMLAppletElement.prototype.archive = 0;
/**
@type {string}
*/
HTMLAppletElement.prototype.code = 0;
/**
@type {string}
*/
HTMLAppletElement.prototype.codeBase = 0;
/**
@type {string}
*/
HTMLAppletElement.prototype.height = 0;
/**
@type {Number}
*/
HTMLAppletElement.prototype.hspace = 0;
/**
@type {string}
*/
HTMLAppletElement.prototype.name = 0;
/**
@type {string}
*/
HTMLAppletElement.prototype.object = 0;
/**
@type {Number}
*/
HTMLAppletElement.prototype.vspace = 0;
/**
@type {string}
*/
HTMLAppletElement.prototype.width = 0;
HTMLAppletElement.prototype = new HTMLElement();
HTMLAppletElement = {};

/**
@type {HTMLCollection}
@const
*/
HTMLMapElement.prototype.areas = 0;
/**
@type {string}
*/
HTMLMapElement.prototype.name = 0;
HTMLMapElement.prototype = new HTMLElement();
HTMLMapElement = {};

/**
@type {string}
*/
HTMLAreaElement.prototype.accessKey = 0;
/**
@type {string}
*/
HTMLAreaElement.prototype.alt = 0;
/**
@type {string}
*/
HTMLAreaElement.prototype.coords = 0;
/**
@type {string}
*/
HTMLAreaElement.prototype.href = 0;
/**
@type {boolean}
*/
HTMLAreaElement.prototype.noHref = 0;
/**
@type {string}
*/
HTMLAreaElement.prototype.shape = 0;
/**
@type {Number}
*/
HTMLAreaElement.prototype.tabIndex = 0;
/**
@type {string}
*/
HTMLAreaElement.prototype.target = 0;
HTMLAreaElement.prototype = new HTMLElement();
HTMLAreaElement = {};

/**
@type {string}
*/
HTMLScriptElement.prototype.text = 0;
/**
@type {string}
*/
HTMLScriptElement.prototype.htmlFor = 0;
/**
@type {string}
*/
HTMLScriptElement.prototype.event = 0;
/**
@type {string}
*/
HTMLScriptElement.prototype.charset = 0;
/**
@type {boolean}
*/
HTMLScriptElement.prototype.defer = 0;
/**
@type {string}
*/
HTMLScriptElement.prototype.src = 0;
/**
@type {string}
*/
HTMLScriptElement.prototype.type = 0;
HTMLScriptElement.prototype = new HTMLElement();
HTMLScriptElement = {};

/**
@type {HTMLTableCaptionElement}
*/
HTMLTableElement.prototype.caption = 0;
/**
@type {HTMLTableSectionElement}
*/
HTMLTableElement.prototype.tHead = 0;
/**
@type {HTMLTableSectionElement}
*/
HTMLTableElement.prototype.tFoot = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLTableElement.prototype.rows = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLTableElement.prototype.tBodies = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.align = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.bgColor = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.border = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.cellPadding = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.cellSpacing = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.frame = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.rules = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.summary = 0;
/**
@type {string}
*/
HTMLTableElement.prototype.width = 0;
/**
@return {HTMLElement}
*/
HTMLTableElement.prototype.createTHead = function() {};
HTMLTableElement.prototype.deleteTHead = function() {};
/**
@return {HTMLElement}
*/
HTMLTableElement.prototype.createTFoot = function() {};
HTMLTableElement.prototype.deleteTFoot = function() {};
/**
@return {HTMLElement}
*/
HTMLTableElement.prototype.createCaption = function() {};
HTMLTableElement.prototype.deleteCaption = function() {};
/**
@param {Number} index
@return {HTMLElement}
*/
HTMLTableElement.prototype.insertRow = function(index) {};
/**
@param {Number} index
*/
HTMLTableElement.prototype.deleteRow = function(index) {};
HTMLTableElement.prototype = new HTMLElement();
HTMLTableElement = {};

/**
@type {string}
*/
HTMLTableCaptionElement.prototype.align = 0;
HTMLTableCaptionElement.prototype = new HTMLElement();
HTMLTableCaptionElement = {};

/**
@type {string}
*/
HTMLTableColElement.prototype.align = 0;
/**
@type {string}
*/
HTMLTableColElement.prototype.ch = 0;
/**
@type {string}
*/
HTMLTableColElement.prototype.chOff = 0;
/**
@type {Number}
*/
HTMLTableColElement.prototype.span = 0;
/**
@type {string}
*/
HTMLTableColElement.prototype.vAlign = 0;
/**
@type {string}
*/
HTMLTableColElement.prototype.width = 0;
HTMLTableColElement.prototype = new HTMLElement();
HTMLTableColElement = {};

/**
@type {string}
*/
HTMLTableSectionElement.prototype.align = 0;
/**
@type {string}
*/
HTMLTableSectionElement.prototype.ch = 0;
/**
@type {string}
*/
HTMLTableSectionElement.prototype.chOff = 0;
/**
@type {string}
*/
HTMLTableSectionElement.prototype.vAlign = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLTableSectionElement.prototype.rows = 0;
/**
@param {Number} index
@return {HTMLElement}
*/
HTMLTableSectionElement.prototype.insertRow = function(index) {};
/**
@param {Number} index
*/
HTMLTableSectionElement.prototype.deleteRow = function(index) {};
HTMLTableSectionElement.prototype = new HTMLElement();
HTMLTableSectionElement = {};

/**
@type {Number}
@const
*/
HTMLTableRowElement.prototype.rowIndex = 0;
/**
@type {Number}
@const
*/
HTMLTableRowElement.prototype.sectionRowIndex = 0;
/**
@type {HTMLCollection}
@const
*/
HTMLTableRowElement.prototype.cells = 0;
/**
@type {string}
*/
HTMLTableRowElement.prototype.align = 0;
/**
@type {string}
*/
HTMLTableRowElement.prototype.bgColor = 0;
/**
@type {string}
*/
HTMLTableRowElement.prototype.ch = 0;
/**
@type {string}
*/
HTMLTableRowElement.prototype.chOff = 0;
/**
@type {string}
*/
HTMLTableRowElement.prototype.vAlign = 0;
/**
@param {Number} index
@return {HTMLElement}
*/
HTMLTableRowElement.prototype.insertCell = function(index) {};
/**
@param {Number} index
*/
HTMLTableRowElement.prototype.deleteCell = function(index) {};
HTMLTableRowElement.prototype = new HTMLElement();
HTMLTableRowElement = {};

/**
@type {Number}
@const
*/
HTMLTableCellElement.prototype.cellIndex = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.abbr = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.align = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.axis = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.bgColor = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.ch = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.chOff = 0;
/**
@type {Number}
*/
HTMLTableCellElement.prototype.colSpan = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.headers = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.height = 0;
/**
@type {boolean}
*/
HTMLTableCellElement.prototype.noWrap = 0;
/**
@type {Number}
*/
HTMLTableCellElement.prototype.rowSpan = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.scope = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.vAlign = 0;
/**
@type {string}
*/
HTMLTableCellElement.prototype.width = 0;
HTMLTableCellElement.prototype = new HTMLElement();
HTMLTableCellElement = {};

/**
@type {string}
*/
HTMLFrameSetElement.prototype.cols = 0;
/**
@type {string}
*/
HTMLFrameSetElement.prototype.rows = 0;
HTMLFrameSetElement.prototype = new HTMLElement();
HTMLFrameSetElement = {};

/**
@type {string}
*/
HTMLFrameElement.prototype.frameBorder = 0;
/**
@type {string}
*/
HTMLFrameElement.prototype.longDesc = 0;
/**
@type {string}
*/
HTMLFrameElement.prototype.marginHeight = 0;
/**
@type {string}
*/
HTMLFrameElement.prototype.marginWidth = 0;
/**
@type {string}
*/
HTMLFrameElement.prototype.name = 0;
/**
@type {boolean}
*/
HTMLFrameElement.prototype.noResize = 0;
/**
@type {string}
*/
HTMLFrameElement.prototype.scrolling = 0;
/**
@type {string}
*/
HTMLFrameElement.prototype.src = 0;
/**
@browser Gecko
@type {Document}
@const
*/
HTMLFrameElement.prototype.contentDocument = 0;
HTMLFrameElement.prototype = new HTMLElement();
HTMLFrameElement = {};

/**
@type {string}
*/
HTMLIFrameElement.prototype.align = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.frameBorder = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.height = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.longDesc = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.marginHeight = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.marginWidth = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.name = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.scrolling = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.src = 0;
/**
@type {string}
*/
HTMLIFrameElement.prototype.width = 0;
/**
@type {Document}
@const
*/
HTMLIFrameElement.prototype.contentDocument = 0;
/**
@type {window}
@const
*/
HTMLIFrameElement.prototype.contentWindow = 0;
HTMLIFrameElement.prototype = new HTMLElement();
HTMLIFrameElement = {};
CSSStyleDeclaration.prototype.mozBackgroundOrigin = 0 || '';
CSSStyleDeclaration.prototype.mozBorderBottomColors = 0 || '';
CSSStyleDeclaration.prototype.mozBorderBottomImage = 0 || '';
CSSStyleDeclaration.prototype.mozBorderBottomLeftImage = 0 || '';
CSSStyleDeclaration.prototype.mozBorderBottomRightImage = 0 || '';
CSSStyleDeclaration.prototype.mozBorderBreak = 0 || '';
CSSStyleDeclaration.prototype.mozBorderCornerImage = 0 || '';
CSSStyleDeclaration.prototype.mozBorderCornerImageTransform = 0 || '';
CSSStyleDeclaration.prototype.mozBorderImageTransform = 0 || '';
CSSStyleDeclaration.prototype.mozBorderLeftColors = 0 || '';
CSSStyleDeclaration.prototype.mozBorderLeftImage = 0 || '';
CSSStyleDeclaration.prototype.mozBorderRadius = 0 || '';
CSSStyleDeclaration.prototype.mozBorderRadiusBottomleft = 0 || '';
CSSStyleDeclaration.prototype.mozBorderRadiusBottomright = 0 || '';
CSSStyleDeclaration.prototype.mozBorderRadiusTopleft = 0 || '';
CSSStyleDeclaration.prototype.mozBorderRadiusTopright = 0 || '';
CSSStyleDeclaration.prototype.mozBorderRightColors = 0 || '';
CSSStyleDeclaration.prototype.mozBorderRightImage = 0 || '';
CSSStyleDeclaration.prototype.mozBorderTopColors = 0 || '';
CSSStyleDeclaration.prototype.mozBorderTopImage = 0 || '';
CSSStyleDeclaration.prototype.mozBorderTopLeftImage = 0 || '';
CSSStyleDeclaration.prototype.mozBorderTopRightImage = 0 || '';
CSSStyleDeclaration.prototype.mozBoxShadow = 0 || '';
CSSStyleDeclaration.prototype.mozBoxSizing = 0 || '';
CSSStyleDeclaration.prototype.oBackgroundSize = 0 || '';
CSSStyleDeclaration.prototype.webkitBackgroundOrigin = 0 || '';
CSSStyleDeclaration.prototype.webkitBackgroundSize = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderBottomImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderBottomLeftImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderBottomLeftRadius = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderBottomRightImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderBottomRightRadius = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderBreak = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderCornerImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderCornerImageTransform = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderImageTransform = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderLeftImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderRadius = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderRightImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderTopImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderTopLeftImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderTopLeftRadius = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderTopRightImage = 0 || '';
CSSStyleDeclaration.prototype.webkitBorderTopRightRadius = 0 || '';
CSSStyleDeclaration.prototype.webkitBoxSizing = 0 || '';
CSSStyleDeclaration.prototype.appearance = 0 || '';
CSSStyleDeclaration.prototype.azimuth = 0 || '';
CSSStyleDeclaration.prototype.background = 0 || '';
CSSStyleDeclaration.prototype.backgroundAttachment = 0 || '';
CSSStyleDeclaration.prototype.backgroundClip = 0 || '';
CSSStyleDeclaration.prototype.backgroundColor = 0 || '';
CSSStyleDeclaration.prototype.backgroundImage = 0 || '';
CSSStyleDeclaration.prototype.backgroundOrigin = 0 || '';
CSSStyleDeclaration.prototype.backgroundPosition = 0 || '';
CSSStyleDeclaration.prototype.backgroundRepeat = 0 || '';
CSSStyleDeclaration.prototype.backgroundSize = 0 || '';
CSSStyleDeclaration.prototype.border = 0 || '';
CSSStyleDeclaration.prototype.borderBottom = 0 || '';
CSSStyleDeclaration.prototype.borderBottomColor = 0 || '';
CSSStyleDeclaration.prototype.borderBottomLeftRadius = 0 || '';
CSSStyleDeclaration.prototype.borderBottomRightRadius = 0 || '';
CSSStyleDeclaration.prototype.borderBottomStyle = 0 || '';
CSSStyleDeclaration.prototype.borderBottomWidth = 0 || '';
CSSStyleDeclaration.prototype.borderBreak = 0 || '';
CSSStyleDeclaration.prototype.borderCollapse = 0 || '';
CSSStyleDeclaration.prototype.borderColor = 0 || '';
CSSStyleDeclaration.prototype.borderCornerImageTransform = 0 || '';
CSSStyleDeclaration.prototype.borderImage = 0 || '';
CSSStyleDeclaration.prototype.borderImageOutset = 0 || '';
CSSStyleDeclaration.prototype.borderImageRepeat = 0 || '';
CSSStyleDeclaration.prototype.borderImageSlice = 0 || '';
CSSStyleDeclaration.prototype.borderImageSource = 0 || '';
CSSStyleDeclaration.prototype.borderImageTransform = 0 || '';
CSSStyleDeclaration.prototype.borderImageWidth = 0 || '';
CSSStyleDeclaration.prototype.borderLeft = 0 || '';
CSSStyleDeclaration.prototype.borderLeftColor = 0 || '';
CSSStyleDeclaration.prototype.borderLeftStyle = 0 || '';
CSSStyleDeclaration.prototype.borderLeftWidth = 0 || '';
CSSStyleDeclaration.prototype.borderRadius = 0 || '';
CSSStyleDeclaration.prototype.borderRight = 0 || '';
CSSStyleDeclaration.prototype.borderRightColor = 0 || '';
CSSStyleDeclaration.prototype.borderRightStyle = 0 || '';
CSSStyleDeclaration.prototype.borderRightWidth = 0 || '';
CSSStyleDeclaration.prototype.borderSpacing = 0 || '';
CSSStyleDeclaration.prototype.borderStyle = 0 || '';
CSSStyleDeclaration.prototype.borderTop = 0 || '';
CSSStyleDeclaration.prototype.borderTopColor = 0 || '';
CSSStyleDeclaration.prototype.borderTopLeftRadius = 0 || '';
CSSStyleDeclaration.prototype.borderTopRightRadius = 0 || '';
CSSStyleDeclaration.prototype.borderTopStyle = 0 || '';
CSSStyleDeclaration.prototype.borderTopWidth = 0 || '';
CSSStyleDeclaration.prototype.borderWidth = 0 || '';
CSSStyleDeclaration.prototype.bottom = 0 || '';
CSSStyleDeclaration.prototype.boxDecorationBreak = 0 || '';
CSSStyleDeclaration.prototype.boxShadow = 0 || '';
CSSStyleDeclaration.prototype.boxSizing = 0 || '';
CSSStyleDeclaration.prototype.captionSide = 0 || '';
CSSStyleDeclaration.prototype.clear = 0 || '';
CSSStyleDeclaration.prototype.clip = 0 || '';
CSSStyleDeclaration.prototype.color = 0 || '';
CSSStyleDeclaration.prototype.content = 0 || '';
CSSStyleDeclaration.prototype.counterIncrement = 0 || '';
CSSStyleDeclaration.prototype.counterReset = 0 || '';
CSSStyleDeclaration.prototype.cue = 0 || '';
CSSStyleDeclaration.prototype.cueAfter = 0 || '';
CSSStyleDeclaration.prototype.cueBefore = 0 || '';
CSSStyleDeclaration.prototype.cursor = 0 || '';
CSSStyleDeclaration.prototype.direction = 0 || '';
CSSStyleDeclaration.prototype.display = 0 || '';
CSSStyleDeclaration.prototype.elevation = 0 || '';
CSSStyleDeclaration.prototype.emptyCells = 0 || '';
CSSStyleDeclaration.prototype.float = 0 || '';
CSSStyleDeclaration.prototype.font = 0 || '';
CSSStyleDeclaration.prototype.fontFamily = 0 || '';
CSSStyleDeclaration.prototype.fontFeatureSettings = 0 || '';
CSSStyleDeclaration.prototype.fontKerning = 0 || '';
CSSStyleDeclaration.prototype.fontLanguageOverride = 0 || '';
CSSStyleDeclaration.prototype.fontSize = 0 || '';
CSSStyleDeclaration.prototype.fontSizeAdjust = 0 || '';
CSSStyleDeclaration.prototype.fontStretch = 0 || '';
CSSStyleDeclaration.prototype.fontStyle = 0 || '';
CSSStyleDeclaration.prototype.fontSynthesis = 0 || '';
CSSStyleDeclaration.prototype.fontVariant = 0 || '';
CSSStyleDeclaration.prototype.fontVariantAlternates = 0 || '';
CSSStyleDeclaration.prototype.fontVariantCaps = 0 || '';
CSSStyleDeclaration.prototype.fontVariantEastAsian = 0 || '';
CSSStyleDeclaration.prototype.fontVariantLigatures = 0 || '';
CSSStyleDeclaration.prototype.fontVariantNumeric = 0 || '';
CSSStyleDeclaration.prototype.fontWeight = 0 || '';
CSSStyleDeclaration.prototype.hangingPunctuation = 0 || '';
CSSStyleDeclaration.prototype.height = 0 || '';
CSSStyleDeclaration.prototype.hyphenateCharacter = 0 || '';
CSSStyleDeclaration.prototype.hyphenateLimitChars = 0 || '';
CSSStyleDeclaration.prototype.hyphenateLimitLast = 0 || '';
CSSStyleDeclaration.prototype.hyphenateLimitLines = 0 || '';
CSSStyleDeclaration.prototype.hyphenateLimitZone = 0 || '';
CSSStyleDeclaration.prototype.hyphens = 0 || '';
CSSStyleDeclaration.prototype.icon = 0 || '';
CSSStyleDeclaration.prototype.imageOrientation = 0 || '';
CSSStyleDeclaration.prototype.imageRendering = 0 || '';
CSSStyleDeclaration.prototype.imageResolution = 0 || '';
CSSStyleDeclaration.prototype.left = 0 || '';
CSSStyleDeclaration.prototype.letterSpacing = 0 || '';
CSSStyleDeclaration.prototype.lineBreak = 0 || '';
CSSStyleDeclaration.prototype.lineHeight = 0 || '';
CSSStyleDeclaration.prototype.listStyle = 0 || '';
CSSStyleDeclaration.prototype.listStyleImage = 0 || '';
CSSStyleDeclaration.prototype.listStylePosition = 0 || '';
CSSStyleDeclaration.prototype.listStyleType = 0 || '';
CSSStyleDeclaration.prototype.margin = 0 || '';
CSSStyleDeclaration.prototype.marginBottom = 0 || '';
CSSStyleDeclaration.prototype.marginLeft = 0 || '';
CSSStyleDeclaration.prototype.marginRight = 0 || '';
CSSStyleDeclaration.prototype.marginTop = 0 || '';
CSSStyleDeclaration.prototype.marqueeDirection = 0 || '';
CSSStyleDeclaration.prototype.marqueeLoop = 0 || '';
CSSStyleDeclaration.prototype.marqueeSpeed = 0 || '';
CSSStyleDeclaration.prototype.marqueeStyle = 0 || '';
CSSStyleDeclaration.prototype.maxHeight = 0 || '';
CSSStyleDeclaration.prototype.maxWidth = 0 || '';
CSSStyleDeclaration.prototype.minHeight = 0 || '';
CSSStyleDeclaration.prototype.minWidth = 0 || '';
CSSStyleDeclaration.prototype.navDown = 0 || '';
CSSStyleDeclaration.prototype.navIndex = 0 || '';
CSSStyleDeclaration.prototype.navLeft = 0 || '';
CSSStyleDeclaration.prototype.navRight = 0 || '';
CSSStyleDeclaration.prototype.navUp = 0 || '';
CSSStyleDeclaration.prototype.opacity = 0 || '';
CSSStyleDeclaration.prototype.orphans = 0 || '';
CSSStyleDeclaration.prototype.outline = 0 || '';
CSSStyleDeclaration.prototype.outlineColor = 0 || '';
CSSStyleDeclaration.prototype.outlineOffset = 0 || '';
CSSStyleDeclaration.prototype.outlineStyle = 0 || '';
CSSStyleDeclaration.prototype.outlineWidth = 0 || '';
CSSStyleDeclaration.prototype.overflow = 0 || '';
CSSStyleDeclaration.prototype.overflowStyle = 0 || '';
CSSStyleDeclaration.prototype.overflowWrap = 0 || '';
CSSStyleDeclaration.prototype.overflowX = 0 || '';
CSSStyleDeclaration.prototype.overflowY = 0 || '';
CSSStyleDeclaration.prototype.padding = 0 || '';
CSSStyleDeclaration.prototype.paddingBottom = 0 || '';
CSSStyleDeclaration.prototype.paddingLeft = 0 || '';
CSSStyleDeclaration.prototype.paddingRight = 0 || '';
CSSStyleDeclaration.prototype.paddingTop = 0 || '';
CSSStyleDeclaration.prototype.pageBreakAfter = 0 || '';
CSSStyleDeclaration.prototype.pageBreakBefore = 0 || '';
CSSStyleDeclaration.prototype.pageBreakInside = 0 || '';
CSSStyleDeclaration.prototype.pause = 0 || '';
CSSStyleDeclaration.prototype.pauseAfter = 0 || '';
CSSStyleDeclaration.prototype.pauseBefore = 0 || '';
CSSStyleDeclaration.prototype.pitch = 0 || '';
CSSStyleDeclaration.prototype.pitchRange = 0 || '';
CSSStyleDeclaration.prototype.playDuring = 0 || '';
CSSStyleDeclaration.prototype.position = 0 || '';
CSSStyleDeclaration.prototype.quotes = 0 || '';
CSSStyleDeclaration.prototype.resize = 0 || '';
CSSStyleDeclaration.prototype.richness = 0 || '';
CSSStyleDeclaration.prototype.right = 0 || '';
CSSStyleDeclaration.prototype.rotation = 0 || '';
CSSStyleDeclaration.prototype.rotationPoint = 0 || '';
CSSStyleDeclaration.prototype.speak = 0 || '';
CSSStyleDeclaration.prototype.speakHeader = 0 || '';
CSSStyleDeclaration.prototype.speakNumeral = 0 || '';
CSSStyleDeclaration.prototype.speakPunctuation = 0 || '';
CSSStyleDeclaration.prototype.speechRate = 0 || '';
CSSStyleDeclaration.prototype.stress = 0 || '';
CSSStyleDeclaration.prototype.tabSize = 0 || '';
CSSStyleDeclaration.prototype.tableLayout = 0 || '';
CSSStyleDeclaration.prototype.textAlign = 0 || '';
CSSStyleDeclaration.prototype.textAlignLast = 0 || '';
CSSStyleDeclaration.prototype.textDecoration = 0 || '';
CSSStyleDeclaration.prototype.textDecorationColor = 0 || '';
CSSStyleDeclaration.prototype.textDecorationLine = 0 || '';
CSSStyleDeclaration.prototype.textDecorationSkip = 0 || '';
CSSStyleDeclaration.prototype.textDecorationStyle = 0 || '';
CSSStyleDeclaration.prototype.textEmphasis = 0 || '';
CSSStyleDeclaration.prototype.textEmphasisColor = 0 || '';
CSSStyleDeclaration.prototype.textEmphasisPosition = 0 || '';
CSSStyleDeclaration.prototype.textEmphasisSkip = 0 || '';
CSSStyleDeclaration.prototype.textEmphasisStyle = 0 || '';
CSSStyleDeclaration.prototype.textIndent = 0 || '';
CSSStyleDeclaration.prototype.textJustify = 0 || '';
CSSStyleDeclaration.prototype.textOverflow = 0 || '';
CSSStyleDeclaration.prototype.textShadow = 0 || '';
CSSStyleDeclaration.prototype.textSpaceCollapse = 0 || '';
CSSStyleDeclaration.prototype.textSpacing = 0 || '';
CSSStyleDeclaration.prototype.textTransform = 0 || '';
CSSStyleDeclaration.prototype.textUnderlinePosition = 0 || '';
CSSStyleDeclaration.prototype.textWrap = 0 || '';
CSSStyleDeclaration.prototype.top = 0 || '';
CSSStyleDeclaration.prototype.unicodeBidi = 0 || '';
CSSStyleDeclaration.prototype.verticalAlign = 0 || '';
CSSStyleDeclaration.prototype.verticalPosition = 0 || '';
CSSStyleDeclaration.prototype.visibility = 0 || '';
CSSStyleDeclaration.prototype.voiceFamily = 0 || '';
CSSStyleDeclaration.prototype.volume = 0 || '';
CSSStyleDeclaration.prototype.whiteSpace = 0 || '';
CSSStyleDeclaration.prototype.widows = 0 || '';
CSSStyleDeclaration.prototype.width = 0 || '';
CSSStyleDeclaration.prototype.wordBreak = 0 || '';
CSSStyleDeclaration.prototype.wordSpacing = 0 || '';
CSSStyleDeclaration.prototype.wordWrap = 0 || '';
CSSStyleDeclaration.prototype.zIndex = 0 || '';
CSSStyleDeclaration.prototype.zoom = 0 || '';

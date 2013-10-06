/**
 * @interface
 */
function Event() {}
/**
@browser Gecko
@static
@type {number}
@const
*/
Event.CAPTURING_PHASE = 1;
/**
@browser Gecko
@static
@type {number}
@const
*/
Event.AT_TARGET = 2;
/**
@browser Gecko
@static
@type {number}
@const
*/
Event.BUBBLING_PHASE = 2;
/**
@browser Gecko
@type {string}
@const
*/
Event.prototype.type = 0;
/**
@browser Gecko
@type {EventTarget}
@const
*/
Event.prototype.target = 0;
/**
@browser Gecko
@type {EventTarget}
@const
*/
Event.prototype.currentTarget = 0;
/**
@browser Gecko
@type {number}
@const
*/
Event.prototype.eventPhase = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
Event.prototype.bubbles = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
Event.prototype.cancelable = 0;
/**
@browser Gecko
@type {Date}
@const
*/
Event.prototype.timeStamp = 0;
/**
@browser Gecko
@type {string}
@const
*/
Event.prototype.namespaceURI = 0;
/**
@browser Gecko
*/
Event.prototype.stopPropagation = function() {};
/**
@browser Gecko
*/
Event.prototype.preventDefault = function() {};
/**
@browser Gecko
@param {string} eventTypeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
*/
Event.prototype.initEvent = function(eventTypeArg,canBubbleArg,cancelableArg) {};
/**
@browser Gecko
@return {boolean}
*/
Event.prototype.isCustom = function() {};
/**
@browser Gecko
*/
Event.prototype.stopImmediatePropagation = function() {};
/**
@browser Gecko
@return {boolean}
*/
Event.prototype.isDefaultPrevented = function() {};
/**
@browser Gecko
@param {string} namespaceURIArg
@param {string} eventTypeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
*/
Event.prototype.initEventNS = function(namespaceURIArg,eventTypeArg,canBubbleArg,cancelableArg) {};

/**
 * @interface
 */
function EventTarget() {}
/**
@param {string} type
@param {EventListener|Function} listener
@param {boolean} [useCapture]
*/
EventTarget.prototype.addEventListener = function(type,listener,useCapture) {};
/**
@param {string} type
@param {EventListener|Function} listener
@param {boolean} [useCapture]
*/
EventTarget.prototype.removeEventListener = function(type,listener,useCapture) {};
/**
@param {Event} event
@return {boolean}
*/
EventTarget.prototype.dispatchEvent = function(event) {};
/**
@param {string} namespaceURI
@param {string} type
@param {EventListener} listener
@param {boolean} [useCapture]
@param {Object} [evtGroup]
*/
EventTarget.prototype.addEventListenerNS = function(namespaceURI,type,listener,useCapture,evtGroup) {};
/**
@param {string} namespaceURI
@param {string} type
@param {EventListener} listener
@param {boolean} [useCapture]
*/
EventTarget.prototype.removeEventListenerNS = function(namespaceURI,type,listener,useCapture) {};
/**
@param {string} namespaceURI
@param {string} type
@return {boolean}
*/
EventTarget.prototype.willTriggerNS = function(namespaceURI,type) {};
/**
@param {string} namespaceURI
@param {string} type
@return {boolean}
*/
EventTarget.prototype.hasEventListenerNS = function(namespaceURI,type) {};

/**
 * @interface
 */
function EventListener() {}
/**
@browser Gecko
@param {Event} event
*/
EventListener.prototype.handleEvent = function(event) {};

/**
@browser Gecko
@type {Number}
*/
EventException.prototype.code = 0;
EventException = {};

/**
@browser Gecko
@param {string} eventType
@return {Event}
*/
DocumentEvent.prototype.createEvent = function(eventType) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} type
@return {string}
*/
DocumentEvent.prototype.canDispatch = function(namespaceURI,type) {};
DocumentEvent = {};

/**
@browser Gecko
@param {EventTarget} target
@param {Number} phase
*/
CustomEvent.prototype.setDispatchState = function(target,phase) {};
/**
@browser Gecko
@return {boolean}
*/
CustomEvent.prototype.isPropagationStopped = function() {};
/**
@browser Gecko
@return {boolean}
*/
CustomEvent.prototype.isImmediatePropagationStopped = function() {};
CustomEvent.prototype = new Event();
CustomEvent = {};

/**
@browser Gecko
@type {AbstractView}
@const
*/
UIEvent.prototype.view = 0;
/**
@browser Gecko
@type {number}
@const
*/
UIEvent.prototype.detail = 0;
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
*/
UIEvent.prototype.initUIEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,detailArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
*/
UIEvent.prototype.initUIEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,detailArg) {};
UIEvent.prototype = new Event();
UIEvent = {};

/**
@browser Gecko
@type {string}
@const
*/
TextEvent.prototype.data = 0;
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} dataArg
*/
TextEvent.prototype.initTextEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,dataArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} dataArg
*/
TextEvent.prototype.initTextEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,dataArg) {};
TextEvent.prototype = new UIEvent();
TextEvent = {};

/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.screenX = 0;
/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.screenY = 0;
/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.clientX = 0;
/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.clientY = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
MouseEvent.prototype.ctrlKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
MouseEvent.prototype.shiftKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
MouseEvent.prototype.altKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
MouseEvent.prototype.metaKey = 0;
/**
@browser Gecko
@type {Number}
@const
*/
MouseEvent.prototype.button = 0;
/**
@browser Gecko
@type {EventTarget}
@const
*/
MouseEvent.prototype.relatedTarget = 0;
/**
@browser Gecko
@param {string} keyIdentifierArg
@return {boolean}
*/
MouseEvent.prototype.getModifierState = function(keyIdentifierArg) {};
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {number} detailArg
@param {number} screenXArg
@param {number} screenYArg
@param {number} clientXArg
@param {number} clientYArg
@param {boolean} ctrlKeyArg
@param {boolean} altKeyArg
@param {boolean} shiftKeyArg
@param {boolean} metaKeyArg
@param {number} buttonArg
@param {EventTarget} relatedTargetArg
*/
MouseEvent.prototype.initMouseEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,detailArg,screenXArg,screenYArg,clientXArg,clientYArg,ctrlKeyArg,altKeyArg,shiftKeyArg,metaKeyArg,buttonArg,relatedTargetArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
@param {Number} screenXArg
@param {Number} screenYArg
@param {Number} clientXArg
@param {Number} clientYArg
@param {boolean} ctrlKeyArg
@param {boolean} altKeyArg
@param {boolean} shiftKeyArg
@param {boolean} metaKeyArg
@param {Number} buttonArg
@param {EventTarget} relatedTargetArg
*/
MouseEvent.prototype.initMouseEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,detailArg,screenXArg,screenYArg,clientXArg,clientYArg,ctrlKeyArg,altKeyArg,shiftKeyArg,metaKeyArg,buttonArg,relatedTargetArg) {};
MouseEvent.prototype = new UIEvent();
MouseEvent = {};

/**
@browser Gecko
@type {string}
@const
*/
KeyboardEvent.prototype.keyIdentifier = 0;
/**
@browser Gecko
@type {Number}
@const
*/
KeyboardEvent.prototype.keyLocation = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.ctrlKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.shiftKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.altKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.metaKey = 0;
/**
@browser Gecko
@param {string} keyIdentifierArg
@return {boolean}
*/
KeyboardEvent.prototype.getModifierState = function(keyIdentifierArg) {};
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {string} keyIdentifierArg
@param {Number} keyLocationArg
@param {string} modifiersList
*/
KeyboardEvent.prototype.initKeyboardEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,keyIdentifierArg,keyLocationArg,modifiersList) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {string} keyIdentifierArg
@param {Number} keyLocationArg
@param {string} modifiersList
*/
KeyboardEvent.prototype.initKeyboardEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,keyIdentifierArg,keyLocationArg,modifiersList) {};
KeyboardEvent.prototype = new UIEvent();
KeyboardEvent = {};

/**
@browser Gecko
@static
@type {number}
@const
*/
MutationEvent.MODIFICATION = 1;
/**
@browser Gecko
@static
@type {number}
@const
*/
MutationEvent.ADDITION = 2;
/**
@browser Gecko
@static
@type {number}
@const
*/
MutationEvent.REMOVAL = 3;
/**
@browser Gecko
@type {Node}
@const
*/
MutationEvent.prototype.relatedNode = 0;
/**
@browser Gecko
@type {string}
@const
*/
MutationEvent.prototype.prevValue = 0;
/**
@browser Gecko
@type {string}
@const
*/
MutationEvent.prototype.newValue = 0;
/**
@browser Gecko
@type {string}
@const
*/
MutationEvent.prototype.attrName = 0;
/**
@browser Gecko
@type {Number}
@const
*/
MutationEvent.prototype.attrChange = 0;
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {Node} relatedNodeArg
@param {string} prevValueArg
@param {string} newValueArg
@param {string} attrNameArg
@param {Number} attrChangeArg
*/
MutationEvent.prototype.initMutationEvent = function(typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevValueArg,newValueArg,attrNameArg,attrChangeArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {Node} relatedNodeArg
@param {string} prevValueArg
@param {string} newValueArg
@param {string} attrNameArg
@param {Number} attrChangeArg
*/
MutationEvent.prototype.initMutationEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevValueArg,newValueArg,attrNameArg,attrChangeArg) {};
MutationEvent.prototype = new UIEvent();
MutationEvent = {};

/**
@browser Gecko
@type {string}
@const
*/
MutationNameEvent.prototype.prevNamespaceURI = 0;
/**
@browser Gecko
@type {string}
@const
*/
MutationNameEvent.prototype.prevNodeName = 0;
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {Node} relatedNodeArg
@param {string} prevNamespaceURIArg
@param {string} prevNodeNameArg
*/
MutationNameEvent.prototype.initMutationNameEvent = function(typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevNamespaceURIArg,prevNodeNameArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {Node} relatedNodeArg
@param {string} prevNamespaceURIArg
@param {string} prevNodeNameArg
*/
MutationNameEvent.prototype.initMutationNameEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevNamespaceURIArg,prevNodeNameArg) {};
MutationNameEvent.prototype = new MutationEvent();
MutationNameEvent = {};

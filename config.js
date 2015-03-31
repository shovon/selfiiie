System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "lib/styles/normalize.css!github:systemjs/plugin-css@0.1.9",
      "npm:process@0.10.1/browser",
      "npm:react@0.13.1/lib/PooledClass",
      "npm:react@0.13.1/lib/Object.assign",
      "npm:react@0.13.1/lib/emptyObject",
      "npm:react@0.13.1/lib/emptyFunction",
      "npm:react@0.13.1/lib/ReactCurrentOwner",
      "npm:react@0.13.1/lib/ReactRootIndex",
      "npm:react@0.13.1/lib/getIteratorFn",
      "npm:react@0.13.1/lib/ReactLifeCycle",
      "npm:react@0.13.1/lib/ReactInstanceMap",
      "npm:react@0.13.1/lib/CallbackQueue",
      "npm:react@0.13.1/lib/ReactPerf",
      "npm:react@0.13.1/lib/ReactOwner",
      "npm:react@0.13.1/lib/ReactPropTypeLocations",
      "npm:react@0.13.1/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.1/lib/ReactNativeComponent",
      "npm:react@0.13.1/lib/Transaction",
      "npm:react@0.13.1/lib/ReactErrorUtils",
      "npm:react@0.13.1/lib/keyOf",
      "npm:react@0.13.1/lib/mapObject",
      "npm:react@0.13.1/lib/DOMProperty",
      "npm:react@0.13.1/lib/escapeTextContentForBrowser",
      "npm:react@0.13.1/lib/CSSProperty",
      "npm:react@0.13.1/lib/ExecutionEnvironment",
      "npm:react@0.13.1/lib/camelize",
      "npm:react@0.13.1/lib/dangerousStyleValue",
      "npm:react@0.13.1/lib/hyphenate",
      "npm:react@0.13.1/lib/memoizeStringOnly",
      "npm:react@0.13.1/lib/toArray",
      "npm:react@0.13.1/lib/getMarkupWrap",
      "npm:react@0.13.1/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.13.1/lib/setInnerHTML",
      "npm:react@0.13.1/lib/EventPluginRegistry",
      "npm:react@0.13.1/lib/accumulateInto",
      "npm:react@0.13.1/lib/forEachAccumulated",
      "npm:react@0.13.1/lib/ReactEventEmitterMixin",
      "npm:react@0.13.1/lib/ViewportMetrics",
      "npm:react@0.13.1/lib/isEventSupported",
      "npm:react@0.13.1/lib/ReactEmptyComponent",
      "npm:react@0.13.1/lib/adler32",
      "npm:react@0.13.1/lib/isNode",
      "npm:react@0.13.1/lib/getReactRootElementInContainer",
      "npm:react@0.13.1/lib/ReactComponentEnvironment",
      "npm:react@0.13.1/lib/shouldUpdateReactComponent",
      "npm:react@0.13.1/lib/flattenChildren",
      "npm:react@0.13.1/lib/EventPropagators",
      "npm:react@0.13.1/lib/getTextContentAccessor",
      "npm:react@0.13.1/lib/getEventTarget",
      "npm:react@0.13.1/lib/SyntheticInputEvent",
      "npm:react@0.13.1/lib/isTextInputElement",
      "npm:react@0.13.1/lib/ClientReactRootIndex",
      "npm:react@0.13.1/lib/DefaultEventPluginOrder",
      "npm:react@0.13.1/lib/SyntheticUIEvent",
      "npm:react@0.13.1/lib/getEventModifierState",
      "npm:react@0.13.1/lib/HTMLDOMPropertyConfig",
      "npm:react@0.13.1/lib/MobileSafariClickEventPlugin",
      "npm:react@0.13.1/lib/findDOMNode",
      "npm:react@0.13.1/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.13.1/lib/focusNode",
      "npm:react@0.13.1/lib/LocalEventTrapMixin",
      "npm:react@0.13.1/lib/ReactDOMImg",
      "npm:react@0.13.1/lib/ReactDOMIframe",
      "npm:react@0.13.1/lib/ReactPropTypes",
      "npm:react@0.13.1/lib/ReactDOMOption",
      "npm:react@0.13.1/lib/ReactDOMSelect",
      "npm:react@0.13.1/lib/ReactDOMTextarea",
      "npm:react@0.13.1/lib/EventListener",
      "npm:react@0.13.1/lib/getUnboundedScrollPosition",
      "npm:react@0.13.1/lib/ReactInjection",
      "npm:react@0.13.1/lib/getNodeForCharacterOffset",
      "npm:react@0.13.1/lib/getActiveElement",
      "npm:react@0.13.1/lib/ReactPutListenerQueue",
      "npm:react@0.13.1/lib/shallowEqual",
      "npm:react@0.13.1/lib/ServerReactRootIndex",
      "npm:react@0.13.1/lib/SyntheticClipboardEvent",
      "npm:react@0.13.1/lib/SyntheticFocusEvent",
      "npm:react@0.13.1/lib/getEventCharCode",
      "npm:react@0.13.1/lib/getEventKey",
      "npm:react@0.13.1/lib/SyntheticDragEvent",
      "npm:react@0.13.1/lib/SyntheticTouchEvent",
      "npm:react@0.13.1/lib/SyntheticWheelEvent",
      "npm:react@0.13.1/lib/SVGDOMPropertyConfig",
      "npm:react@0.13.1/lib/createFullPageComponent",
      "npm:react@0.13.1/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.13.1/lib/performance",
      "npm:react@0.13.1/lib/ReactServerRenderingTransaction",
      "npm:react@0.13.1/lib/onlyChild",
      "npm:object-assign@2.0.0/index",
      "npm:qs@2.4.1/lib/utils",
      "npm:qs@2.4.1/lib/parse",
      "npm:react-router@0.13.2/lib/components/ContextWrapper",
      "npm:react-router@0.13.2/lib/components/Route",
      "npm:react-router@0.13.2/lib/components/Link",
      "npm:react-router@0.13.2/lib/components/NotFoundRoute",
      "npm:react-router@0.13.2/lib/components/Redirect",
      "npm:react-router@0.13.2/lib/actions/LocationActions",
      "npm:react-router@0.13.2/lib/History",
      "npm:react-router@0.13.2/lib/locations/HistoryLocation",
      "npm:react-router@0.13.2/lib/locations/RefreshLocation",
      "npm:react-router@0.13.2/lib/locations/StaticLocation",
      "npm:react-router@0.13.2/lib/locations/TestLocation",
      "npm:react-router@0.13.2/lib/behaviors/ImitateBrowserBehavior",
      "npm:react-router@0.13.2/lib/behaviors/ScrollToTopBehavior",
      "npm:react-router@0.13.2/lib/Navigation",
      "npm:react-router@0.13.2/lib/State",
      "npm:react-router@0.13.2/lib/createRoutesFromReactChildren",
      "npm:react-router@0.13.2/lib/getWindowScrollPosition",
      "npm:react-router@0.13.2/lib/isReactChildren",
      "npm:react-router@0.13.2/lib/Cancellation",
      "npm:react-router@0.13.2/lib/Redirect",
      "npm:react-router@0.13.2/lib/Match",
      "npm:react-router@0.13.2/lib/supportsHistory",
      "npm:react-router@0.13.2/lib/runRouter",
      "lib/components/App/index.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "lib/components/Index/styles.css!github:systemjs/plugin-css@0.1.9",
      "npm:font-awesome@4.3.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.9",
      "lib/components/SnapButton/styles.css!github:systemjs/plugin-css@0.1.9",
      "lib/components/Images/styles.css!github:systemjs/plugin-css@0.1.9",
      "github:github/fetch@0.7.0/fetch",
      "npm:events-browserify@0.0.1/events",
      "npm:flux@2.0.1/lib/invariant",
      "lib/constants/ImagesConstants",
      "lib/actions/ImagesActions",
      "lib/helpers/imgur",
      "lib/settings",
      "npm:querystring@0.2.0/decode",
      "npm:querystring@0.2.0/encode",
      "lib/components/PhotoBooth/styles.css!github:systemjs/plugin-css@0.1.9",
      "lib/components/TitleBar/styles.css!github:systemjs/plugin-css@0.1.9",
      "lib/helpers/imageutils",
      "lib/constants/TempImageConstants",
      "lib/stores/TempImageStore",
      "lib/components/Editor/styles.css!github:systemjs/plugin-css@0.1.9",
      "npm:process@0.10.1",
      "npm:react@0.13.1/lib/warning",
      "npm:react@0.13.1/lib/ReactInstanceHandles",
      "npm:react@0.13.1/lib/ReactRef",
      "npm:react@0.13.1/lib/ReactElementValidator",
      "npm:react@0.13.1/lib/ReactClass",
      "npm:react@0.13.1/lib/ReactDOM",
      "npm:react@0.13.1/lib/quoteAttributeValueForBrowser",
      "npm:react@0.13.1/lib/camelizeStyleName",
      "npm:react@0.13.1/lib/hyphenateStyleName",
      "npm:react@0.13.1/lib/createArrayFromMixed",
      "npm:react@0.13.1/lib/setTextContent",
      "npm:react@0.13.1/lib/EventPluginHub",
      "npm:react@0.13.1/lib/ReactMarkupChecksum",
      "npm:react@0.13.1/lib/isTextNode",
      "npm:react@0.13.1/lib/ReactCompositeComponent",
      "npm:react@0.13.1/lib/ReactChildReconciler",
      "npm:react@0.13.1/lib/FallbackCompositionState",
      "npm:react@0.13.1/lib/SyntheticEvent",
      "npm:react@0.13.1/lib/ChangeEventPlugin",
      "npm:react@0.13.1/lib/SyntheticMouseEvent",
      "npm:react@0.13.1/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.1/lib/AutoFocusMixin",
      "npm:react@0.13.1/lib/ReactDOMForm",
      "npm:react@0.13.1/lib/LinkedValueUtils",
      "npm:react@0.13.1/lib/ReactEventListener",
      "npm:react@0.13.1/lib/ReactDOMSelection",
      "npm:react@0.13.1/lib/SelectEventPlugin",
      "npm:react@0.13.1/lib/SyntheticKeyboardEvent",
      "npm:react@0.13.1/lib/performanceNow",
      "npm:react@0.13.1/lib/ReactServerRendering",
      "npm:object-assign@2.0.0",
      "npm:qs@2.4.1/lib/stringify",
      "npm:react-router@0.13.2/lib/components/RouteHandler",
      "npm:react-router@0.13.2/lib/locations/HashLocation",
      "npm:react-router@0.13.2/lib/ScrollHistory",
      "npm:react-router@0.13.2/lib/Transition",
      "lib/components/SnapButton/index.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "github:github/fetch@0.7.0",
      "npm:events-browserify@0.0.1",
      "npm:flux@2.0.1/lib/Dispatcher",
      "npm:querystring@0.2.0/index",
      "lib/components/TitleBar/index.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "lib/helpers/Camera",
      "lib/actions/TempImageActions",
      "lib/components/Editor/index.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:react@0.13.1/lib/ReactContext",
      "npm:react@0.13.1/lib/traverseAllChildren",
      "npm:react@0.13.1/lib/ReactReconciler",
      "npm:react@0.13.1/lib/DOMPropertyOperations",
      "npm:react@0.13.1/lib/CSSPropertyOperations",
      "npm:react@0.13.1/lib/createNodesFromMarkup",
      "npm:react@0.13.1/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.1/lib/containsNode",
      "npm:react@0.13.1/lib/instantiateReactComponent",
      "npm:react@0.13.1/lib/ReactMultiChild",
      "npm:react@0.13.1/lib/SyntheticCompositionEvent",
      "npm:react@0.13.1/lib/EnterLeaveEventPlugin",
      "npm:react@0.13.1/lib/ReactDOMButton",
      "npm:react@0.13.1/lib/ReactDOMInput",
      "npm:react@0.13.1/lib/ReactInputSelection",
      "npm:react@0.13.1/lib/SimpleEventPlugin",
      "npm:react@0.13.1/lib/ReactDefaultPerf",
      "npm:qs@2.4.1/lib/index",
      "npm:react-router@0.13.2/lib/createRouter",
      "github:jspm/nodelibs-events@0.1.0/index",
      "npm:flux@2.0.1/index",
      "npm:querystring@0.2.0",
      "lib/components/PhotoBooth/index.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:react@0.13.1/lib/ReactElement",
      "npm:react@0.13.1/lib/ReactUpdates",
      "npm:react@0.13.1/lib/Danger",
      "npm:react@0.13.1/lib/ReactMount",
      "npm:react@0.13.1/lib/ReactDOMComponent",
      "npm:react@0.13.1/lib/BeforeInputEventPlugin",
      "npm:react@0.13.1/lib/ReactReconcileTransaction",
      "npm:qs@2.4.1/index",
      "github:jspm/nodelibs-events@0.1.0",
      "npm:flux@2.0.1",
      "github:jspm/nodelibs-querystring@0.1.0/index",
      "npm:react@0.13.1/lib/invariant",
      "npm:react@0.13.1/lib/ReactFragment",
      "npm:react@0.13.1/lib/ReactUpdateQueue",
      "npm:react@0.13.1/lib/DOMChildrenOperations",
      "npm:react@0.13.1/lib/ReactDefaultInjection",
      "npm:qs@2.4.1",
      "lib/dispatcher/AppDispatcher",
      "github:jspm/nodelibs-querystring@0.1.0",
      "npm:react@0.13.1/lib/keyMirror",
      "npm:react@0.13.1/lib/ReactChildren",
      "npm:react@0.13.1/lib/ReactComponent",
      "npm:react@0.13.1/lib/ReactDOMIDOperations",
      "npm:react-router@0.13.2/lib/PathUtils",
      "lib/helpers/mongolab",
      "npm:react@0.13.1/lib/EventConstants",
      "npm:react@0.13.1/lib/ReactComponentBrowserEnvironment",
      "npm:react-router@0.13.2/lib/Route",
      "lib/stores/ImagesStore",
      "npm:react@0.13.1/lib/EventPluginUtils",
      "npm:react@0.13.1/lib/ReactDOMTextComponent",
      "npm:react-router@0.13.2/lib/PropTypes",
      "lib/components/Images/index.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "npm:react@0.13.1/lib/React",
      "npm:react-router@0.13.2/lib/components/DefaultRoute",
      "lib/components/Index/index.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "npm:react@0.13.1/react",
      "npm:react-router@0.13.2/lib/index",
      "npm:react@0.13.1",
      "npm:react-router@0.13.2/lib",
      "npm:react-router@0.13.2",
      "lib/bootstrap.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "lib/main"
    ]
  }
});

System.config({
  "map": {
    "css": "github:systemjs/plugin-css@0.1.9",
    "events": "github:jspm/nodelibs-events@0.1.0",
    "fetch": "github:github/fetch@0.7.0",
    "flux": "npm:flux@2.0.1",
    "font-awesome": "npm:font-awesome@4.3.0",
    "jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "object-assign": "npm:object-assign@2.0.0",
    "querystring": "github:jspm/nodelibs-querystring@0.1.0",
    "react": "npm:react@0.13.1",
    "react-router": "npm:react-router@0.13.2",
    "github:floatdrop/plugin-jsx@1.1.0": {
      "react-tools": "npm:react-tools@0.13.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.1.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.13"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:systemjs/plugin-css@0.1.9": {
      "clean-css": "npm:clean-css@3.1.8",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js-rfc3280@1.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3"
    },
    "npm:asn1.js@1.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.6.16": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@1.1.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:browserify-rsa@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@2.8.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@2.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer@3.1.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:classnames@1.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:clean-css@3.1.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commoner@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.6",
      "iconv-lite": "npm:iconv-lite@0.4.7",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.9.18",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.0",
      "sha.js": "npm:sha.js@2.3.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.13": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@2.8.0",
      "create-ecdh": "npm:create-ecdh@2.0.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "public-encrypt": "npm:public-encrypt@2.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.6"
    },
    "npm:esprima-fb@10001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:mkdirp@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:once@1.3.1": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@2.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3",
      "asn1.js-rfc3280": "npm:asn1.js-rfc3280@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pemstrip": "npm:pemstrip@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-asn1@3.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3",
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2-compat@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-router@0.13.2": {
      "classnames": "npm:classnames@1.1.4",
      "object-assign": "npm:object-assign@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "qs": "npm:qs@2.4.1",
      "react": "npm:react@0.13.1"
    },
    "npm:react-tools@0.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.1",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.9.18": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.16",
      "esprima-fb": "npm:esprima-fb@10001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:ripemd160@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

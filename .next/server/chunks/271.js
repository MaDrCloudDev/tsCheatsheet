exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 4266:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(1751);
const _normalizetrailingslash = __webpack_require__(2387);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)((0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 370:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(2387);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 3991:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 1516:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 3740:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _interop_require_wildcard = __webpack_require__(8760);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(6689));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2636));
const _imageblursvg = __webpack_require__(4486);
const _imageconfig = __webpack_require__(5843);
const _imageconfigcontext = __webpack_require__(744);
const _warnonce = __webpack_require__(618);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths(param, width, sizes) {
    let { deviceSizes , allSizes  } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config , src , unoptimized , width , quality , sizes , loader  } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { imgAttributes , heightInt , widthInt , qualityInt , className , imgStyle , blurStyle , isLazy , fetchPriority , fill , placeholder , loading , srcString , config , unoptimized , loader , onLoadRef , onLoadingCompleteRef , setBlurComplete , setShowAltText , onLoad , onError , ...rest } = param;
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        loading: loading,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: {
            ...imgStyle,
            ...blurStyle
        },
        ...imgAttributes,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
const Image = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src , sizes , unoptimized =false , priority =false , loading , className , quality , width , height , fill , style , onLoad , onLoadingComplete , placeholder ="empty" , blurDataURL , fetchPriority , layout , objectFit , objectPosition , lazyBoundary , lazyRoot , ...all } = param;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageloader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _ , ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        }) + '")'
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = {
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fetchPriority,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText,
        ...rest
    };
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgElementArgs,
        ref: forwardedRef
    }), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin,
        referrerPolicy: rest.referrerPolicy,
        ...getDynamicProps(fetchPriority)
    })) : null);
});
const _default = Image;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 5569:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6689));
const _resolvehref = __webpack_require__(7782);
const _islocalurl = __webpack_require__(1109);
const _formaturl = __webpack_require__(3938);
const _utils = __webpack_require__(9232);
const _addlocale = __webpack_require__(370);
const _routercontext = __webpack_require__(4964);
const _approutercontext = __webpack_require__(3280);
const _useintersection = __webpack_require__(508);
const _getdomainlocale = __webpack_require__(1516);
const _addbasepath = __webpack_require__(4266);
const _routerreducertypes = __webpack_require__(3991);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp = null , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false , ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    if (false) {}
    const { href , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2387:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(3297);
const _parsepath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 29:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 508:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(6689);
const _requestidlecallback = __webpack_require__(29);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef , rootMargin , disabled  } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 452:
/***/ (() => {



/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(3740)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5569)


/***/ }),

/***/ 6171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ Layout)
/* harmony export */ });
/* unused harmony exports Bleed, Card, Cards, Collapse, FileTree, Link, Navbar, NotFoundPage, ServerSideErrorPage, SkipNavContent, SkipNavLink, Steps, Tab, Tabs, ThemeSwitch, useConfig */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nextra_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7391);
/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9575);
/* harmony import */ var nextra_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4861);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9926);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_package_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7587);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4916);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5893);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var nextra_normalize_pages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2709);
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9164);
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(git_url_parse__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3841);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_popperjs_core__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8395);
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(flexsearch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1185);
/* harmony import */ var next_dist_client_add_base_path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4266);
/* harmony import */ var next_dist_client_add_base_path__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_add_base_path__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8751);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5875);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(match_sorter__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var nextra_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_mdx__WEBPACK_IMPORTED_MODULE_5__, zod__WEBPACK_IMPORTED_MODULE_7__, nextra_normalize_pages__WEBPACK_IMPORTED_MODULE_13__, _headlessui_react__WEBPACK_IMPORTED_MODULE_17__, scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_22__]);
([nextra_mdx__WEBPACK_IMPORTED_MODULE_5__, zod__WEBPACK_IMPORTED_MODULE_7__, nextra_normalize_pages__WEBPACK_IMPORTED_MODULE_13__, _headlessui_react__WEBPACK_IMPORTED_MODULE_17__, scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx







// src/constants.tsx





// src/components/anchor.tsx




// src/contexts/active-anchor.tsx



var ActiveAnchorContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
var SetActiveAnchorContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((v) => v);
var IntersectionObserverContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(
  null
);
var slugs = /* @__PURE__ */ new WeakMap();
var SlugsContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(slugs);
var useActiveAnchor = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ActiveAnchorContext);
var useSetActiveAnchor = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SetActiveAnchorContext);
var useIntersectionObserver = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IntersectionObserverContext);
var useSlugs = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SlugsContext);
var ActiveAnchorProvider = ({
  children
}) => {
  const [activeAnchor, setActiveAnchor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  if (IS_BROWSER && !observerRef.current) {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setActiveAnchor((f) => {
          const ret = __spreadValues({}, f);
          for (const entry of entries) {
            if ((entry == null ? void 0 : entry.rootBounds) && slugs.has(entry.target)) {
              const [slug, index] = slugs.get(entry.target);
              const aboveHalfViewport = entry.boundingClientRect.y + entry.boundingClientRect.height <= entry.rootBounds.y + entry.rootBounds.height;
              const insideHalfViewport = entry.intersectionRatio > 0;
              ret[slug] = {
                index,
                aboveHalfViewport,
                insideHalfViewport
              };
            }
          }
          let activeSlug = "";
          let smallestIndexInViewport = Infinity;
          let largestIndexAboveViewport = -1;
          for (const s in ret) {
            ret[s].isActive = false;
            if (ret[s].insideHalfViewport && ret[s].index < smallestIndexInViewport) {
              smallestIndexInViewport = ret[s].index;
              activeSlug = s;
            }
            if (smallestIndexInViewport === Infinity && ret[s].aboveHalfViewport && ret[s].index > largestIndexAboveViewport) {
              largestIndexAboveViewport = ret[s].index;
              activeSlug = s;
            }
          }
          if (ret[activeSlug])
            ret[activeSlug].isActive = true;
          return ret;
        });
      },
      {
        rootMargin: "0px 0px -50%",
        threshold: [0, 1]
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ActiveAnchorContext.Provider, { value: activeAnchor, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(SetActiveAnchorContext.Provider, { value: setActiveAnchor, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(SlugsContext.Provider, { value: slugs, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(IntersectionObserverContext.Provider, { value: observerRef.current, children }) }) }) });
};

// src/contexts/config.tsx




// src/contexts/menu.ts

var MenuContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  menu: false,
  setMenu: () => false
});
var useMenu = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MenuContext);
var MenuProvider = MenuContext.Provider;

// src/contexts/config.tsx

var ConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(__spreadValues({
  title: "",
  frontMatter: {}
}, DEFAULT_THEME));
function useConfig() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ConfigContext);
}
var theme;
var isValidated = false;
function normalizeZodMessage(error) {
  return error.issues.flatMap((issue) => {
    const themePath = issue.path.length > 0 && `Path: "${issue.path.join(".")}"`;
    const unionErrors = "unionErrors" in issue ? issue.unionErrors.map(normalizeZodMessage) : [];
    return [
      [issue.message, themePath].filter(Boolean).join(". "),
      ...unionErrors
    ];
  }).join("\n");
}
function validateMeta(pageMap) {
  for (const pageMapItem of pageMap) {
    if (pageMapItem.kind === "Meta") {
      for (const [key, data] of Object.entries(pageMapItem.data)) {
        try {
          metaSchema.parse(data);
        } catch (error) {
          console.error(
            `[nextra-theme-docs] Error validating _meta.json file for "${key}" property.

${normalizeZodMessage(
              error
            )}`
          );
        }
      }
    } else if (pageMapItem.kind === "Folder") {
      validateMeta(pageMapItem.children);
    }
  }
}
var ConfigProvider = ({
  children,
  value: { themeConfig, pageOpts }
}) => {
  const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  theme || (theme = __spreadValues(__spreadValues({}, DEFAULT_THEME), Object.fromEntries(
    Object.entries(themeConfig).map(([key, value]) => [
      key,
      value && typeof value === "object" && DEEP_OBJECT_KEYS.includes(key) ? (
        // @ts-expect-error -- key has always object value
        __spreadValues(__spreadValues({}, DEFAULT_THEME[key]), value)
      ) : value
    ])
  )));
  if (false) {}
  const extendedConfig = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, theme), {
    flexsearch: pageOpts.flexsearch
  }), typeof pageOpts.newNextLinkBehavior === "boolean" && {
    newNextLinkBehavior: pageOpts.newNextLinkBehavior
  }), {
    title: pageOpts.title,
    frontMatter: pageOpts.frontMatter
  });
  const { nextThemes } = extendedConfig;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    next_themes__WEBPACK_IMPORTED_MODULE_12__.ThemeProvider,
    {
      attribute: "class",
      disableTransitionOnChange: true,
      defaultTheme: nextThemes.defaultTheme,
      storageKey: nextThemes.storageKey,
      forcedTheme: nextThemes.forcedTheme,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ConfigContext.Provider, { value: extendedConfig, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(MenuProvider, { value: { menu, setMenu }, children }) })
    }
  );
};

// src/contexts/details.ts

var DetailsContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((v) => v);
var useDetails = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DetailsContext);
var DetailsProvider = DetailsContext.Provider;

// src/components/anchor.tsx

var nextVersion = Number(next_package_json__WEBPACK_IMPORTED_MODULE_9__/* .version.split */ .i8.split(".")[0]);
var Anchor = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_a, forwardedRef) {
  var _b = _a, { href = "", children, newWindow } = _b, props = __objRest(_b, ["href", "children", "newWindow"]);
  const config = useConfig();
  if (newWindow) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
      "a",
      __spreadProps(__spreadValues({
        ref: forwardedRef,
        href,
        target: "_blank",
        rel: "noreferrer"
      }, props), {
        children: [
          children,
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-sr-only", children: " (opens in a new tab)" })
        ]
      })
    );
  }
  if (!href) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", __spreadProps(__spreadValues({ ref: forwardedRef }, props), { children }));
  }
  if (nextVersion > 12 || config.newNextLinkBehavior) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), __spreadProps(__spreadValues({ ref: forwardedRef, href }, props), { children }));
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), { href, passHref: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", __spreadProps(__spreadValues({ ref: forwardedRef }, props), { children })) });
});
Anchor.displayName = "Anchor";

// src/components/banner.tsx



// src/utils/get-git-issue-url.ts

var getGitIssueUrl = ({
  repository = "",
  title,
  labels
}) => {
  const repo = git_url_parse__WEBPACK_IMPORTED_MODULE_14___default()(repository);
  if (!repo)
    throw new Error("Invalid `docsRepositoryBase` URL!");
  if (repo.resource.includes("gitlab")) {
    return `${repo.protocol}://${repo.resource}/${repo.owner}/${repo.name}/-/issues/new?issue[title]=${encodeURIComponent(title)}`;
  }
  if (repo.resource.includes("github")) {
    return `${repo.protocol}://${repo.resource}/${repo.owner}/${repo.name}/issues/new?title=${encodeURIComponent(title)}&labels=${labels || ""}`;
  }
  return "#";
};

// src/utils/render.tsx

function renderComponent(ComponentOrNode, props) {
  if (!ComponentOrNode)
    return null;
  if (typeof ComponentOrNode !== "function")
    return ComponentOrNode;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ComponentOrNode, __spreadValues({}, props));
}
function renderString(stringOrFunction, props = {}) {
  const result = typeof stringOrFunction === "function" ? stringOrFunction(props) : stringOrFunction;
  return result || "";
}

// src/utils/use-popper.ts


function usePopper(options) {
  const reference = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const popper = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const cleanupCallback = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const instantiatePopper = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    var _a;
    if (!reference.current || !popper.current)
      return;
    (_a = cleanupCallback.current) == null ? void 0 : _a.call(cleanupCallback);
    cleanupCallback.current = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_15__.createPopper)(
      reference.current,
      popper.current,
      options
    ).destroy;
  }, [reference, popper, cleanupCallback, options]);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => [
      (referenceDomNode) => {
        reference.current = referenceDomNode;
        instantiatePopper();
      },
      (popperDomNode) => {
        popper.current = popperDomNode;
        instantiatePopper();
      }
    ],
    [reference, popper, instantiatePopper]
  );
}

// src/utils/use-git-edit-url.ts

function useGitEditUrl(filePath = "") {
  const config = useConfig();
  const repo = git_url_parse__WEBPACK_IMPORTED_MODULE_14___default()(config.docsRepositoryBase || "");
  if (!repo)
    throw new Error("Invalid `docsRepositoryBase` URL!");
  return `${repo.href}/${filePath}`;
}

// src/components/banner.tsx

function Banner() {
  const { banner } = useConfig();
  if (!banner.text) {
    return null;
  }
  const hideBannerScript = `try{if(localStorage.getItem(${JSON.stringify(
    banner.key
  )})==='0'){document.body.classList.add('nextra-banner-hidden')}}catch(e){}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("script", { dangerouslySetInnerHTML: { __html: hideBannerScript } }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nextra-banner-container nx-sticky nx-top-0 nx-z-20 nx-flex nx-items-center md:nx-relative",
          "nx-h-[var(--nextra-banner-height)] [body.nextra-banner-hidden_&]:nx-hidden",
          "nx-text-slate-50 dark:nx-text-white nx-bg-neutral-900 dark:nx-bg-[linear-gradient(1deg,#383838,#212121)]",
          "nx-px-2 ltr:nx-pl-10 rtl:nx-pr-10 print:nx-hidden"
        ),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-w-full nx-truncate nx-px-4 nx-text-center nx-font-medium nx-text-sm", children: renderComponent(banner.text) }),
          banner.dismissible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss banner",
              className: "nx-w-8 nx-h-8 nx-opacity-80 hover:nx-opacity-100",
              onClick: () => {
                try {
                  localStorage.setItem(banner.key, "0");
                } catch (e) {
                }
                document.body.classList.add("nextra-banner-hidden");
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .XIcon */ .b0, { className: "nx-mx-auto nx-h-4 nx-w-4" })
            }
          )
        ]
      }
    )
  ] });
}

// src/components/bleed.tsx


function Bleed({
  full,
  children
}) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      className: cn2(
        "nextra-bleed nx-relative -nx-mx-6 nx-mt-6 md:-nx-mx-8 2xl:-nx-mx-24",
        full && [
          // 'md:mx:[calc(-50vw+50%+8rem)',
          "ltr:xl:nx-ml-[calc(50%-50vw+16rem)] ltr:xl:nx-mr-[calc(50%-50vw)]",
          "rtl:xl:nx-ml-[calc(50%-50vw)] rtl:xl:nx-mr-[calc(50%-50vw+16rem)]"
        ]
      ),
      children
    }
  );
}

// src/components/breadcrumb.tsx




function Breadcrumb({
  activePath
}) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden nx-text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current", children: activePath.map((item, index) => {
    const isLink = !item.children || item.withIndexPage;
    const isActive = index === activePath.length - 1;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
      index > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .ArrowRightIcon */ .LZ, { className: "nx-w-3.5 nx-shrink-0" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "div",
        {
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            "nx-whitespace-nowrap nx-transition-colors",
            isActive ? "nx-font-medium nx-text-gray-700 contrast-more:nx-font-bold contrast-more:nx-text-current dark:nx-text-gray-100 contrast-more:dark:nx-text-current" : [
              "nx-min-w-[24px] nx-overflow-hidden nx-text-ellipsis",
              isLink && "hover:nx-text-gray-900 dark:hover:nx-text-gray-100"
            ]
          ),
          title: item.title,
          children: isLink && !isActive ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Anchor, { href: item.route, children: item.title }) : item.title
        }
      )
    ] }, item.route + item.name);
  }) });
}

// src/components/cards.tsx


var classes = {
  cards: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nextra-cards nx-mt-4 nx-gap-4 nx-grid"),
  card: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200",
    "nx-text-current nx-no-underline dark:nx-shadow-none",
    "hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100",
    "active:nx-shadow-sm active:nx-shadow-gray-200",
    "nx-transition-all nx-duration-200 hover:nx-border-gray-300"
  ),
  title: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-flex nx-font-semibold nx-items-start nx-gap-2 nx-p-4 nx-text-gray-700 hover:nx-text-gray-900"
  )
};
var arrowEl = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-transition-transform nx-duration-75 group-hover:nx-translate-x-[2px]", children: "\u2192" });
function Card(_a) {
  var _b = _a, {
    children,
    title,
    icon,
    image,
    arrow,
    href
  } = _b, props = __objRest(_b, [
    "children",
    "title",
    "icon",
    "image",
    "arrow",
    "href"
  ]);
  const animatedArrow = arrow ? arrowEl : null;
  if (image) {
    return /* @__PURE__ */ jsxs4(
      Anchor,
      __spreadProps(__spreadValues({
        href,
        className: cn4(
          classes.card,
          "nx-bg-gray-100 nx-shadow dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50 hover:nx-shadow-lg dark:hover:nx-border-neutral-500 dark:hover:nx-bg-neutral-700"
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxs4(
            "span",
            {
              className: cn4(
                classes.title,
                "dark:nx-text-gray-300 dark:hover:nx-text-gray-100"
              ),
              children: [
                icon,
                /* @__PURE__ */ jsxs4("span", { className: "nx-flex nx-gap-1", children: [
                  title,
                  animatedArrow
                ] })
              ]
            }
          )
        ]
      })
    );
  }
  return /* @__PURE__ */ jsx8(
    Anchor,
    __spreadProps(__spreadValues({
      href,
      className: cn4(
        classes.card,
        "nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900"
      )
    }, props), {
      children: /* @__PURE__ */ jsxs4(
        "span",
        {
          className: cn4(
            classes.title,
            "dark:nx-text-neutral-200 dark:hover:nx-text-neutral-50"
          ),
          children: [
            icon,
            title,
            animatedArrow
          ]
        }
      )
    })
  );
}
function Cards(_a) {
  var _b = _a, {
    children,
    num = 3,
    className,
    style
  } = _b, props = __objRest(_b, [
    "children",
    "num",
    "className",
    "style"
  ]);
  return /* @__PURE__ */ jsx8(
    "div",
    __spreadProps(__spreadValues({
      className: cn4(classes.cards, className)
    }, props), {
      style: __spreadProps(__spreadValues({}, style), {
        "--rows": num
      }),
      children
    })
  );
}

// src/components/collapse.tsx



function Collapse({
  children,
  className,
  isOpen,
  horizontal = false
}) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const animationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const initialOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isOpen);
  const initialRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    const animation = animationRef.current;
    if (animation) {
      clearTimeout(animation);
    }
    if (initialRender.current || !container || !inner)
      return;
    container.classList.toggle("nx-duration-500", !isOpen);
    container.classList.toggle("nx-duration-300", isOpen);
    if (horizontal) {
      inner.style.width = `${inner.clientWidth}px`;
      container.style.width = `${inner.clientWidth}px`;
    } else {
      container.style.height = `${inner.clientHeight}px`;
    }
    if (isOpen) {
      animationRef.current = window.setTimeout(() => {
        container.style.removeProperty("height");
      }, 300);
    } else {
      setTimeout(() => {
        if (horizontal) {
          container.style.width = "0px";
        } else {
          container.style.height = "0px";
        }
      }, 0);
    }
  }, [horizontal, isOpen]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    initialRender.current = false;
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    "div",
    {
      ref: containerRef,
      className: "nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none",
      style: initialOpen.current || horizontal ? void 0 : { height: 0 },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "div",
        {
          ref: innerRef,
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            "nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none",
            isOpen ? "nx-opacity-100" : "nx-opacity-0",
            className
          ),
          children
        }
      )
    }
  );
}

// src/components/file-tree.tsx



var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(0);
function useIndent() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ctx);
}
var Tree = ({ children }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-mt-6 nx-select-none nx-text-sm nx-text-gray-800 dark:nx-text-gray-300", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-inline-flex nx-flex-col nx-rounded-lg nx-border nx-px-4 nx-py-2 dark:nx-border-neutral-800", children }) });
function Ident() {
  const indent = useIndent();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [...Array(indent)].map((_, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-inline-block nx-w-5" }, i)) });
}
var Folder = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(
  ({ label, name, open, children, defaultOpen = false, onToggle }) => {
    const indent = useIndent();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOpen);
    const toggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
      onToggle == null ? void 0 : onToggle(!isOpen);
      setIsOpen(!isOpen);
    }, [isOpen, onToggle]);
    const isFolderOpen = open === void 0 ? isOpen : open;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", { className: "nx-flex nx-list-none nx-flex-col", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
        "a",
        {
          onClick: toggle,
          title: name,
          className: "nx-inline-flex nx-cursor-pointer nx-items-center nx-py-1 hover:nx-opacity-60",
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Ident, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
              "path",
              {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: isFolderOpen ? "M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z" : "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z"
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-ml-1", children: label != null ? label : name })
          ]
        }
      ),
      isFolderOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ctx.Provider, { value: indent + 1, children }) })
    ] });
  }
);
Folder.displayName = "Folder";
var File = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ label, name, active }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
  "li",
  {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
      "nx-flex nx-list-none",
      active && "nx-text-primary-600 contrast-more:nx-underline"
    ),
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", { className: "nx-inline-flex nx-cursor-default nx-items-center nx-py-1", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Ident, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-ml-1", children: label != null ? label : name })
    ] })
  }
));
File.displayName = "File";
var FileTree = Object.assign(Tree, { Folder, File });

// src/components/flexsearch.tsx





// src/components/highlight-matches.tsx


var HighlightMatches = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function HighlightMatches2({
  value,
  match
}) {
  const splitText = value ? value.split("") : [];
  const escapedSearch = match.trim().replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  const regexp = RegExp("(" + escapedSearch.replaceAll(" ", "|") + ")", "ig");
  let result;
  let id = 0;
  let index = 0;
  const res = [];
  if (value) {
    while ((result = regexp.exec(value)) !== null) {
      res.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
          splitText.splice(0, result.index - index).join(""),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-text-primary-600", children: splitText.splice(0, regexp.lastIndex - result.index).join("") })
        ] }, id++)
      );
      index = regexp.lastIndex;
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
    res,
    splitText.join("")
  ] });
});

// src/components/search.tsx







// src/components/input.tsx



var Input = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  (_a, forwardedRef) => {
    var _b = _a, { className, suffix } = _b, props = __objRest(_b, ["className", "suffix"]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", { className: "nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "input",
        __spreadValues({
          ref: forwardedRef,
          spellCheck: false,
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            className,
            "nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors",
            "nx-text-base nx-leading-tight md:nx-text-sm",
            "nx-bg-black/[.05] dark:nx-bg-gray-50/10",
            "focus:nx-bg-white dark:focus:nx-bg-dark",
            "placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400",
            "contrast-more:nx-border contrast-more:nx-border-current"
          )
        }, props)
      ),
      suffix
    ] });
  }
);
Input.displayName = "Input";

// src/components/search.tsx

var INPUTS = ["input", "select", "button", "textarea"];
function Search({
  className,
  overlayClassName,
  value,
  onChange,
  onActive,
  loading,
  error,
  results
}) {
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const config = useConfig();
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const { setMenu } = useMenu();
  const input = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const ulRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [focused, setFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setActive(0);
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const down = (e) => {
      const activeElement = document.activeElement;
      const tagName = activeElement == null ? void 0 : activeElement.tagName.toLowerCase();
      if (!input.current || !tagName || INPUTS.includes(tagName) || (activeElement == null ? void 0 : activeElement.isContentEditable))
        return;
      if (e.key === "/" || e.key === "k" && (e.metaKey || /* for non-Mac */
      e.ctrlKey)) {
        e.preventDefault();
        input.current.focus();
      } else if (e.key === "Escape") {
        setShow(false);
        input.current.blur();
      }
    };
    window.addEventListener("keydown", down);
    return () => {
      window.removeEventListener("keydown", down);
    };
  }, []);
  const finishSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    var _a;
    (_a = input.current) == null ? void 0 : _a.blur();
    onChange("");
    setShow(false);
    setMenu(false);
  }, [onChange, setMenu]);
  const handleActive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (e) => {
      const { index } = e.currentTarget.dataset;
      setActive(Number(index));
    },
    []
  );
  const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    function(e) {
      var _a, _b, _c;
      switch (e.key) {
        case "ArrowDown": {
          if (active + 1 < results.length) {
            const el = (_a = ulRef.current) == null ? void 0 : _a.querySelector(
              `li:nth-of-type(${active + 2}) > a`
            );
            if (el) {
              e.preventDefault();
              handleActive({ currentTarget: el });
              el.focus();
            }
          }
          break;
        }
        case "ArrowUp": {
          if (active - 1 >= 0) {
            const el = (_b = ulRef.current) == null ? void 0 : _b.querySelector(
              `li:nth-of-type(${active}) > a`
            );
            if (el) {
              e.preventDefault();
              handleActive({ currentTarget: el });
              el.focus();
            }
          }
          break;
        }
        case "Enter": {
          const result = results[active];
          if (result) {
            void router.push(result.route);
            finishSearch();
          }
          break;
        }
        case "Escape": {
          setShow(false);
          (_c = input.current) == null ? void 0 : _c.blur();
          break;
        }
      }
    },
    [active, results, router, finishSearch, handleActive]
  );
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMounted */ .s)();
  const renderList = show && Boolean(value);
  const icon = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Transition,
    {
      show: mounted && (!show || Boolean(value)),
      as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
      enter: "nx-transition-opacity",
      enterFrom: "nx-opacity-0",
      enterTo: "nx-opacity-100",
      leave: "nx-transition-opacity",
      leaveFrom: "nx-opacity-100",
      leaveTo: "nx-opacity-0",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "kbd",
        {
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            "nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5",
            "nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500",
            "nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50",
            "contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current",
            "nx-items-center nx-gap-1 nx-transition-opacity",
            value ? "nx-z-20 nx-flex nx-cursor-pointer hover:nx-opacity-70" : "nx-pointer-events-none nx-hidden sm:nx-flex"
          ),
          title: value ? "Clear" : void 0,
          onClick: () => {
            onChange("");
          },
          children: value && focused ? "ESC" : mounted && (navigator.userAgent.includes("Macintosh") ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-text-xs", children: "\u2318" }),
            "K"
          ] }) : "CTRL K")
        }
      )
    }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nextra-search nx-relative md:nx-w-64", className), children: [
    renderList && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "div",
      {
        className: "nx-fixed nx-inset-0 nx-z-10",
        onClick: () => setShow(false)
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      Input,
      {
        ref: input,
        value,
        onChange: (e) => {
          const { value: value2 } = e.target;
          onChange(value2);
          setShow(Boolean(value2));
        },
        onFocus: () => {
          onActive == null ? void 0 : onActive(true);
          setFocused(true);
        },
        onBlur: () => {
          setFocused(false);
        },
        type: "search",
        placeholder: renderString(config.search.placeholder),
        onKeyDown: handleKeyDown,
        suffix: icon
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Transition,
      {
        show: renderList,
        as: _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Transition.Child,
        leave: "nx-transition-opacity nx-duration-100",
        leaveFrom: "nx-opacity-100",
        leaveTo: "nx-opacity-0",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
          "ul",
          {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
              "nextra-scrollbar",
              // Using bg-white as background-color when the browser didn't support backdrop-filter
              "nx-border nx-border-gray-200 nx-bg-white nx-text-gray-100 dark:nx-border-neutral-800 dark:nx-bg-neutral-900",
              "nx-absolute nx-top-full nx-z-20 nx-mt-2 nx-overflow-auto nx-overscroll-contain nx-rounded-xl nx-py-2.5 nx-shadow-xl",
              "nx-max-h-[min(calc(50vh-11rem-env(safe-area-inset-bottom)),400px)]",
              "md:nx-max-h-[min(calc(100vh-5rem-env(safe-area-inset-bottom)),400px)]",
              "nx-inset-x-0 ltr:md:nx-left-auto rtl:md:nx-right-auto",
              "contrast-more:nx-border contrast-more:nx-border-gray-900 contrast-more:dark:nx-border-gray-50",
              overlayClassName
            ),
            ref: ulRef,
            style: {
              transition: "max-height .2s ease"
              // don't work with tailwindcss
            },
            children: error ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", { className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-red-500", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .InformationCircleIcon */ .AV, { className: "nx-h-5 nx-w-5" }),
              renderString(config.search.error)
            ] }) : loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", { className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-gray-400", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .SpinnerIcon */ .L4, { className: "nx-h-5 nx-w-5 nx-animate-spin" }),
              renderComponent(config.search.loading)
            ] }) : results.length > 0 ? results.map(({ route, prefix, children, id }, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
              prefix,
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                "li",
                {
                  className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                    "nx-mx-2.5 nx-break-words nx-rounded-md",
                    "contrast-more:nx-border",
                    i === active ? "nx-bg-primary-500/10 nx-text-primary-600 contrast-more:nx-border-primary-500" : "nx-text-gray-800 contrast-more:nx-border-transparent dark:nx-text-gray-300"
                  ),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                    Anchor,
                    {
                      className: "nx-block nx-scroll-m-12 nx-px-2.5 nx-py-2",
                      href: route,
                      "data-index": i,
                      onFocus: handleActive,
                      onMouseMove: handleActive,
                      onClick: finishSearch,
                      onKeyDown: handleKeyDown,
                      children
                    }
                  )
                }
              )
            ] }, id)) : renderComponent(config.search.emptyResult)
          }
        )
      }
    )
  ] });
}

// src/components/flexsearch.tsx

var indexes = {};
var loadIndexesPromises = /* @__PURE__ */ new Map();
var loadIndexes = (basePath, locale) => {
  const key = basePath + "@" + locale;
  if (loadIndexesPromises.has(key)) {
    return loadIndexesPromises.get(key);
  }
  const promise = loadIndexesImpl(basePath, locale);
  loadIndexesPromises.set(key, promise);
  return promise;
};
var loadIndexesImpl = (basePath, locale) => __async(void 0, null, function* () {
  const response = yield fetch(
    `${basePath}/_next/static/chunks/nextra-data-${locale}.json`
  );
  const data = yield response.json();
  const pageIndex = new (flexsearch__WEBPACK_IMPORTED_MODULE_16___default().Document)({
    cache: 100,
    tokenize: "full",
    document: {
      id: "id",
      index: "content",
      store: ["title"]
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true
    }
  });
  const sectionIndex = new (flexsearch__WEBPACK_IMPORTED_MODULE_16___default().Document)({
    cache: 100,
    tokenize: "full",
    document: {
      id: "id",
      index: "content",
      tag: "pageId",
      store: ["title", "content", "url", "display"]
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true
    }
  });
  let pageId = 0;
  for (const route in data) {
    let pageContent = "";
    ++pageId;
    for (const heading in data[route].data) {
      const [hash, text] = heading.split("#");
      const url = route + (hash ? "#" + hash : "");
      const title = text || data[route].title;
      const content = data[route].data[heading] || "";
      const paragraphs = content.split("\n").filter(Boolean);
      sectionIndex.add(__spreadValues({
        id: url,
        url,
        title,
        pageId: `page_${pageId}`,
        content: title
      }, paragraphs[0] && { display: paragraphs[0] }));
      for (let i = 0; i < paragraphs.length; i++) {
        sectionIndex.add({
          id: `${url}_${i}`,
          url,
          title,
          pageId: `page_${pageId}`,
          content: paragraphs[i]
        });
      }
      pageContent += ` ${title} ${content}`;
    }
    pageIndex.add({
      id: pageId,
      title: data[route].title,
      content: pageContent
    });
  }
  indexes[locale] = [pageIndex, sectionIndex];
});
function Flexsearch({
  className
}) {
  const { locale = DEFAULT_LOCALE, basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const doSearch = (search2) => {
    var _a, _b;
    if (!search2)
      return;
    const [pageIndex, sectionIndex] = indexes[locale];
    const pageResults = ((_a = pageIndex.search(search2, 5, {
      enrich: true,
      suggest: true
    })[0]) == null ? void 0 : _a.result) || [];
    const results2 = [];
    const pageTitleMatches = {};
    for (let i = 0; i < pageResults.length; i++) {
      const result = pageResults[i];
      pageTitleMatches[i] = 0;
      const sectionResults = ((_b = sectionIndex.search(search2, 5, {
        enrich: true,
        suggest: true,
        tag: `page_${result.id}`
      })[0]) == null ? void 0 : _b.result) || [];
      let isFirstItemOfPage = true;
      const occurred = {};
      for (let j = 0; j < sectionResults.length; j++) {
        const { doc } = sectionResults[j];
        const isMatchingTitle = doc.display !== void 0;
        if (isMatchingTitle) {
          pageTitleMatches[i]++;
        }
        const { url, title } = doc;
        const content = doc.display || doc.content;
        if (occurred[url + "@" + content])
          continue;
        occurred[url + "@" + content] = true;
        results2.push({
          _page_rk: i,
          _section_rk: j,
          route: url,
          prefix: isFirstItemOfPage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
            "div",
            {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                "nx-mx-2.5 nx-mb-2 nx-mt-6 nx-select-none nx-border-b nx-border-black/10 nx-px-2.5 nx-pb-1.5 nx-text-xs nx-font-semibold nx-uppercase nx-text-gray-500 first:nx-mt-0 dark:nx-border-white/20 dark:nx-text-gray-300",
                "contrast-more:nx-border-gray-600 contrast-more:nx-text-gray-900 contrast-more:dark:nx-border-gray-50 contrast-more:dark:nx-text-gray-50"
              ),
              children: result.doc.title
            }
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-text-base nx-font-semibold nx-leading-5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(HighlightMatches, { match: search2, value: title }) }),
            content && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "excerpt nx-mt-1 nx-text-sm nx-leading-[1.35rem] nx-text-gray-600 dark:nx-text-gray-400 contrast-more:dark:nx-text-gray-50", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(HighlightMatches, { match: search2, value: content }) })
          ] })
        });
        isFirstItemOfPage = false;
      }
    }
    setResults(
      results2.sort((a, b) => {
        if (a._page_rk === b._page_rk) {
          return a._section_rk - b._section_rk;
        }
        if (pageTitleMatches[a._page_rk] !== pageTitleMatches[b._page_rk]) {
          return pageTitleMatches[b._page_rk] - pageTitleMatches[a._page_rk];
        }
        return a._page_rk - b._page_rk;
      }).map((res) => ({
        id: `${res._page_rk}_${res._section_rk}`,
        route: res.route,
        prefix: res.prefix,
        children: res.children
      }))
    );
  };
  const preload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (active) => __async(this, null, function* () {
      if (active && !indexes[locale]) {
        setLoading(true);
        try {
          yield loadIndexes(basePath, locale);
        } catch (e) {
          setError(true);
        }
        setLoading(false);
      }
    }),
    [locale, basePath]
  );
  const handleChange = (value) => __async(this, null, function* () {
    setSearch(value);
    if (loading) {
      return;
    }
    if (!indexes[locale]) {
      setLoading(true);
      try {
        yield loadIndexes(basePath, locale);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
    doSearch(value);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    Search,
    {
      loading,
      error,
      value: search,
      onChange: handleChange,
      onActive: preload,
      className,
      overlayClassName: "nx-w-screen nx-min-h-[100px] nx-max-w-[min(calc(100vw-2rem),calc(100%+20rem))]",
      results
    }
  );
}

// src/components/footer.tsx


// src/components/locale-switch.tsx




// src/components/select.tsx






function Select({
  options,
  selected,
  onChange,
  title,
  className
}) {
  const [trigger, container] = usePopper({
    strategy: "fixed",
    placement: "top-start",
    modifiers: [
      { name: "offset", options: { offset: [0, 10] } },
      {
        name: "sameWidth",
        enabled: true,
        fn({ state }) {
          state.styles.popper.minWidth = `${state.rects.reference.width}px`;
        },
        phase: "beforeWrite",
        requires: ["computeStyles"]
      }
    ]
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Listbox, { value: selected, onChange, children: ({ open }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
    _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Listbox.Button,
    {
      ref: trigger,
      title,
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400",
        open ? "nx-bg-gray-200 nx-text-gray-900 dark:nx-bg-primary-100/10 dark:nx-text-gray-50" : "hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
        className
      ),
      children: [
        selected.name,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Portal, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
          _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Transition,
          {
            ref: container,
            show: open,
            as: _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Listbox.Options,
            className: "nx-z-20 nx-max-h-64 nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800",
            leave: "nx-transition-opacity",
            leaveFrom: "nx-opacity-100",
            leaveTo: "nx-opacity-0",
            children: options.map((option) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
              _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Listbox.Option,
              {
                value: option,
                className: ({ active }) => clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                  active ? "nx-bg-primary-50 nx-text-primary-600 dark:nx-bg-primary-500/10" : "nx-text-gray-800 dark:nx-text-gray-100",
                  "nx-relative nx-cursor-pointer nx-whitespace-nowrap nx-py-1.5",
                  "nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"
                ),
                children: [
                  option.name,
                  option.key === selected.key && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-absolute nx-inset-y-0 nx-flex nx-items-center ltr:nx-right-3 rtl:nx-left-3", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .CheckIcon */ .nQ, {}) })
                ]
              },
              option.key
            ))
          }
        ) })
      ]
    }
  ) });
}
function Portal(props) {
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMounted */ .s)();
  if (!mounted)
    return null;
  return (0,react_dom__WEBPACK_IMPORTED_MODULE_19__.createPortal)(props.children, document.body);
}

// src/components/locale-switch.tsx

function LocaleSwitch({
  options,
  lite,
  className
}) {
  const { locale, asPath } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const selected = options.find((l) => locale === l.locale);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    Select,
    {
      title: "Change language",
      className,
      onChange: (option) => {
        const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3);
        document.cookie = `NEXT_LOCALE=${option.key}; expires=${date.toUTCString()}; path=/`;
        location.href = (0,next_dist_client_add_base_path__WEBPACK_IMPORTED_MODULE_18__.addBasePath)(asPath);
      },
      selected: {
        key: (selected == null ? void 0 : selected.locale) || "",
        name: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", { className: "nx-flex nx-items-center nx-gap-2", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .GlobeIcon */ .n9, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: lite ? "nx-hidden" : "", children: selected == null ? void 0 : selected.text })
        ] })
      },
      options: options.map((l) => ({
        key: l.locale,
        name: l.text
      }))
    }
  );
}

// src/components/footer.tsx

function Footer({ menu }) {
  const config = useConfig();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("footer", { className: "nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nx-mx-auto nx-flex nx-max-w-[90rem] nx-gap-2 nx-py-2 nx-px-4",
          menu && (config.i18n.length > 0 || config.darkMode) ? "nx-flex" : "nx-hidden"
        ),
        children: [
          config.i18n.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(LocaleSwitch, { options: config.i18n }),
          config.darkMode && renderComponent(config.themeSwitch.component)
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", { className: "dark:nx-border-neutral-800" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start",
          "nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
        ),
        children: renderComponent(config.footer.text)
      }
    )
  ] });
}

// src/components/head.tsx





function Head() {
  var _a;
  const config = useConfig();
  const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_12__.useTheme)();
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMounted */ .s)();
  const head = typeof config.head === "function" ? config.head({}) : config.head;
  const hue = config.primaryHue;
  const { dark: darkHue, light: lightHue } = typeof hue === "number" ? { dark: hue, light: hue } : hue;
  const frontMatter = config.frontMatter;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      next_seo__WEBPACK_IMPORTED_MODULE_20__.NextSeo,
      __spreadValues({
        title: config.title,
        description: frontMatter.description,
        canonical: frontMatter.canonical,
        openGraph: frontMatter.openGraph
      }, (_a = config.useNextSeoProps) == null ? void 0 : _a.call(config))
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_21___default()), { children: [
      config.faviconGlyph ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "link",
        {
          rel: "icon",
          href: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>${config.faviconGlyph}</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`
        }
      ) : null,
      mounted ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "meta",
        {
          name: "theme-color",
          content: resolvedTheme === "dark" ? "#111" : "#fff"
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
          "meta",
          {
            name: "theme-color",
            content: "#fff",
            media: "(prefers-color-scheme: light)"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
          "meta",
          {
            name: "theme-color",
            content: "#111",
            media: "(prefers-color-scheme: dark)"
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("style", { children: `
        :root {
          --nextra-primary-hue: ${lightHue}deg;
          --nextra-navbar-height: 4rem;
          --nextra-menu-height: 3.75rem;
          --nextra-banner-height: 2.5rem;
        }
        
        .dark {
          --nextra-primary-hue: ${darkHue}deg;
        }
      ` }),
      head
    ] })
  ] });
}

// src/components/nav-links.tsx



var classes2 = {
  link: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-text-gray-600 nx-transition-colors [word-break:break-word] hover:nx-text-primary-600 dark:nx-text-gray-300 md:nx-text-lg"
  ),
  icon: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nx-inline nx-h-5 nx-shrink-0")
};
var NavLinks = ({
  flatDirectories,
  currentIndex
}) => {
  const config = useConfig();
  const nav = config.navigation;
  const navigation = typeof nav === "boolean" ? { prev: nav, next: nav } : nav;
  let prev = navigation.prev && flatDirectories[currentIndex - 1];
  let next2 = navigation.next && flatDirectories[currentIndex + 1];
  if (prev && !prev.isUnderCurrentDocsTree)
    prev = false;
  if (next2 && !next2.isUnderCurrentDocsTree)
    next2 = false;
  if (!prev && !next2)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
    "div",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-mb-8 nx-flex nx-items-center nx-border-t nx-pt-8 dark:nx-border-neutral-800",
        "contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400",
        "print:nx-hidden"
      ),
      children: [
        prev && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
          Anchor,
          {
            href: prev.route,
            title: prev.title,
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes2.link, "ltr:nx-pr-4 rtl:nx-pl-4"),
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .ArrowRightIcon */ .LZ, { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes2.icon, "ltr:nx-rotate-180") }),
              prev.title
            ]
          }
        ),
        next2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
          Anchor,
          {
            href: next2.route,
            title: next2.title,
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
              classes2.link,
              "ltr:nx-ml-auto ltr:nx-pl-4 ltr:nx-text-right rtl:nx-mr-auto rtl:nx-pr-4 rtl:nx-text-left"
            ),
            children: [
              next2.title,
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .ArrowRightIcon */ .LZ, { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes2.icon, "rtl:nx-rotate-180") })
            ]
          }
        )
      ]
    }
  );
};

// src/components/navbar.tsx





var classes3 = {
  link: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100"
  ),
  active: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nx-font-medium nx-subpixel-antialiased"),
  inactive: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
  )
};
function NavbarMenu({
  className,
  menu,
  children
}) {
  const { items } = menu;
  const routes = Object.fromEntries(
    (menu.children || []).map((route) => [route.name, route])
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-relative nx-inline-block", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Menu, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Menu.Button,
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          className,
          "-nx-ml-2 nx-hidden nx-items-center nx-whitespace-nowrap nx-rounded nx-p-2 md:nx-inline-flex",
          classes3.inactive
        ),
        children
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Transition,
      {
        leave: "nx-transition-opacity",
        leaveFrom: "nx-opacity-100",
        leaveTo: "nx-opacity-0",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
          _headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Menu.Items,
          {
            className: "nx-absolute nx-right-0 nx-z-20 nx-mt-1 nx-max-h-64 nx-min-w-full nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800",
            tabIndex: 0,
            children: Object.entries(items || {}).map(([key, item]) => {
              var _a;
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_17__.Menu.Item, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                Anchor,
                {
                  href: item.href || ((_a = routes[key]) == null ? void 0 : _a.route) || menu.route + "/" + key,
                  className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                    "nx-relative nx-hidden nx-w-full nx-select-none nx-whitespace-nowrap nx-text-gray-600 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 md:nx-inline-block",
                    "nx-py-1.5 nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"
                  ),
                  newWindow: item.newWindow,
                  children: item.title || key
                }
              ) }, key);
            })
          }
        )
      }
    )
  ] }) });
}
function Navbar({ flatDirectories, items }) {
  const config = useConfig();
  const activeRoute = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFSRoute */ .$)();
  const { menu, setMenu } = useMenu();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", { className: "nextra-nav-container nx-sticky nx-top-0 nx-z-20 nx-w-full nx-bg-transparent print:nx-hidden", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nextra-nav-container-blur",
          "nx-pointer-events-none nx-absolute nx-z-[-1] nx-h-full nx-w-full nx-bg-white dark:nx-bg-dark",
          "nx-shadow-[0_2px_4px_rgba(0,0,0,.02),0_1px_0_rgba(0,0,0,.06)] dark:nx-shadow-[0_-1px_0_rgba(255,255,255,.1)_inset]",
          "contrast-more:nx-shadow-[0_0_0_1px_#000] contrast-more:dark:nx-shadow-[0_0_0_1px_#fff]"
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("nav", { className: "nx-mx-auto nx-flex nx-h-[var(--nextra-navbar-height)] nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]", children: [
      config.logoLink ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        Anchor,
        {
          href: typeof config.logoLink === "string" ? config.logoLink : "/",
          className: "nx-flex nx-items-center hover:nx-opacity-75 ltr:nx-mr-auto rtl:nx-ml-auto",
          children: renderComponent(config.logo)
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-flex nx-items-center ltr:nx-mr-auto rtl:nx-ml-auto", children: renderComponent(config.logo) }),
      items.map((pageOrMenu) => {
        if (pageOrMenu.display === "hidden")
          return null;
        if (pageOrMenu.type === "menu") {
          const menu2 = pageOrMenu;
          const isActive2 = menu2.route === activeRoute || activeRoute.startsWith(menu2.route + "/");
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
            NavbarMenu,
            {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                classes3.link,
                "nx-flex nx-gap-1",
                isActive2 ? classes3.active : classes3.inactive
              ),
              menu: menu2,
              children: [
                menu2.title,
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                  nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .ArrowRightIcon */ .LZ,
                  {
                    className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5",
                    pathClassName: "nx-origin-center nx-transition-transform nx-rotate-90"
                  }
                )
              ]
            },
            menu2.title
          );
        }
        const page = pageOrMenu;
        let href = page.href || page.route || "#";
        if (page.children) {
          href = (page.withIndexPage ? page.route : page.firstChildRoute) || href;
        }
        const isActive = page.route === activeRoute || activeRoute.startsWith(page.route + "/");
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
          Anchor,
          {
            href,
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
              classes3.link,
              "nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block",
              !isActive || page.newWindow ? classes3.inactive : classes3.active
            ),
            newWindow: page.newWindow,
            "aria-current": !page.newWindow && isActive,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-absolute nx-inset-x-0 nx-text-center", children: page.title }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-invisible nx-font-medium", children: page.title })
            ]
          },
          href
        );
      }),
      renderComponent(config.search.component, {
        directories: flatDirectories,
        className: "nx-hidden md:nx-inline-block mx-min-w-[200px]"
      }),
      config.project.link ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        Anchor,
        {
          className: "nx-p-2 nx-text-current",
          href: config.project.link,
          newWindow: true,
          children: renderComponent(config.project.icon)
        }
      ) : null,
      config.chat.link ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        Anchor,
        {
          className: "nx-p-2 nx-text-current",
          href: config.chat.link,
          newWindow: true,
          children: renderComponent(config.chat.icon)
        }
      ) : null,
      renderComponent(config.navbar.extraContent),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "button",
        {
          type: "button",
          "aria-label": "Menu",
          className: "nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden",
          onClick: () => setMenu(!menu),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .MenuIcon */ .Oq, { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()({ open: menu }) })
        }
      )
    ] })
  ] });
}

// src/components/not-found.tsx



function NotFoundPage() {
  const config = useConfig();
  const mounted = useMounted4();
  const { asPath } = useRouter4();
  const { content, labels } = config.notFound;
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx21("p", { className: "nx-text-center", children: /* @__PURE__ */ jsx21(
    Anchor,
    {
      href: getGitIssueUrl({
        repository: config.docsRepositoryBase,
        title: `Found broken \`${mounted ? asPath : ""}\` link. Please fix!`,
        labels
      }),
      newWindow: true,
      className: "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]",
      children: renderComponent(content)
    }
  ) });
}

// src/components/server-side-error.tsx



function ServerSideErrorPage() {
  const config = useConfig();
  const mounted = useMounted5();
  const { asPath } = useRouter5();
  const { content, labels } = config.serverSideError;
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx22("p", { className: "nx-text-center", children: /* @__PURE__ */ jsx22(
    Anchor,
    {
      href: getGitIssueUrl({
        repository: config.docsRepositoryBase,
        title: `Got server-side error in \`${mounted ? asPath : ""}\` url. Please fix!`,
        labels
      }),
      newWindow: true,
      className: "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]",
      children: renderComponent(content)
    }
  ) });
}

// src/components/sidebar.tsx







var TreeState = /* @__PURE__ */ Object.create(null);
var FocusedItemContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
var OnFocuseItemContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
var FolderLevelContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(0);
var Folder2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function FolderInner(props) {
  const level = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FolderLevelContext);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FolderLevelContext.Provider, { value: level + 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FolderImpl, __spreadValues({}, props)) });
});
var classes4 = {
  link: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word]",
    "nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border"
  ),
  inactive: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900",
    "dark:nx-text-neutral-400 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
    "contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50",
    "contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"
  ),
  active: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600",
    "contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500"
  ),
  list: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nx-flex nx-flex-col nx-gap-1"),
  border: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-relative before:nx-absolute before:nx-inset-y-1",
    'before:nx-w-px before:nx-bg-gray-200 before:nx-content-[""] dark:before:nx-bg-neutral-800',
    "ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0"
  )
};
function FolderImpl({ item, anchors }) {
  const routeOriginal = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFSRoute */ .$)();
  const [route] = routeOriginal.split("#");
  const active = [route, route + "/"].includes(item.route + "/");
  const activeRouteInside = active || route.startsWith(item.route + "/");
  const focusedRoute = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FocusedItemContext);
  const focusedRouteInside = !!(focusedRoute == null ? void 0 : focusedRoute.startsWith(item.route + "/"));
  const level = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FolderLevelContext);
  const { setMenu } = useMenu();
  const config = useConfig();
  const { theme: theme2 } = item;
  const open = TreeState[item.route] === void 0 ? active || activeRouteInside || focusedRouteInside || (theme2 && "collapsed" in theme2 ? !theme2.collapsed : level < config.sidebar.defaultMenuCollapseLevel) : TreeState[item.route] || focusedRouteInside;
  const rerender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({})[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (activeRouteInside || focusedRouteInside) {
      TreeState[item.route] = true;
    }
  }, [activeRouteInside, focusedRouteInside, item.route]);
  if (item.type === "menu") {
    const menu = item;
    const routes = Object.fromEntries(
      (menu.children || []).map((route2) => [route2.name, route2])
    );
    item.children = Object.entries(menu.items || {}).map(([key, item2]) => {
      const route2 = routes[key] || __spreadProps(__spreadValues({
        name: key
      }, "locale" in menu && { locale: menu.locale }), {
        route: menu.route + "/" + key
      });
      return __spreadValues(__spreadValues({}, route2), item2);
    });
  }
  const isLink = "withIndexPage" in item && item.withIndexPage;
  const ComponentToUse = isLink ? Anchor : "button";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()({ open, active }), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
      ComponentToUse,
      {
        href: isLink ? item.route : void 0,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nx-items-center nx-justify-between nx-gap-2",
          !isLink && "nx-text-left nx-w-full",
          classes4.link,
          active ? classes4.active : classes4.inactive
        ),
        onClick: (e) => {
          const clickedToggleIcon = ["svg", "path"].includes(
            e.target.tagName.toLowerCase()
          );
          if (clickedToggleIcon) {
            e.preventDefault();
          }
          if (isLink) {
            if (active || clickedToggleIcon) {
              TreeState[item.route] = !open;
            } else {
              TreeState[item.route] = true;
              setMenu(false);
            }
            rerender({});
            return;
          }
          if (active)
            return;
          TreeState[item.route] = !open;
          rerender({});
        },
        children: [
          renderComponent(config.sidebar.titleComponent, {
            title: item.title,
            type: item.type,
            route: item.route
          }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
            nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .ArrowRightIcon */ .LZ,
            {
              className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5",
              pathClassName: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                "nx-origin-center nx-transition-transform rtl:-nx-rotate-180",
                open && "ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Collapse, { className: "ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1", isOpen: open, children: Array.isArray(item.children) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      Menu2,
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes4.border, "ltr:nx-ml-3 rtl:nx-mr-3"),
        directories: item.children,
        base: item.route,
        anchors
      }
    ) : null })
  ] });
}
function Separator({ title }) {
  const config = useConfig();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    "li",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "[word-break:break-word]",
        title ? "nx-mt-5 nx-mb-2 nx-px-2 nx-py-1.5 nx-text-sm nx-font-semibold nx-text-gray-900 first:nx-mt-0 dark:nx-text-gray-100" : "nx-my-4"
      ),
      children: title ? renderComponent(config.sidebar.titleComponent, {
        title,
        type: "separator",
        route: ""
      }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", { className: "nx-mx-2 nx-border-t nx-border-gray-200 dark:nx-border-primary-100/10" })
    }
  );
}
function File2({
  item,
  anchors
}) {
  const route = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFSRoute */ .$)();
  const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OnFocuseItemContext);
  const active = item.route && [route, route + "/"].includes(item.route + "/");
  const activeAnchor = useActiveAnchor();
  const { setMenu } = useMenu();
  const config = useConfig();
  if (item.type === "separator") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Separator, { title: item.title });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes4.list, { active }), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      Anchor,
      {
        href: item.href || item.route,
        newWindow: item.newWindow,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes4.link, active ? classes4.active : classes4.inactive),
        onClick: () => {
          setMenu(false);
        },
        onFocus: () => {
          onFocus == null ? void 0 : onFocus(item.route);
        },
        onBlur: () => {
          onFocus == null ? void 0 : onFocus(null);
        },
        children: renderComponent(config.sidebar.titleComponent, {
          title: item.title,
          type: item.type,
          route: item.route
        })
      }
    ),
    active && anchors.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "ul",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          classes4.list,
          classes4.border,
          "ltr:nx-ml-3 rtl:nx-mr-3"
        ),
        children: anchors.map(({ id, value }) => {
          var _a;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
            "a",
            {
              href: `#${id}`,
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                classes4.link,
                'nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-["#"]',
                ((_a = activeAnchor[id]) == null ? void 0 : _a.isActive) ? classes4.active : classes4.inactive
              ),
              onClick: () => {
                setMenu(false);
              },
              children: value
            }
          ) }, id);
        })
      }
    )
  ] });
}
function Menu2({
  directories,
  anchors,
  className,
  onlyCurrentDocs
}) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes4.list, className), children: directories.map(
    (item) => !onlyCurrentDocs || item.isUnderCurrentDocsTree ? item.type === "menu" || item.children && (item.children.length || !item.withIndexPage) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Folder2, { item, anchors }, item.name) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(File2, { item, anchors }, item.name) : null
  ) });
}
function Sidebar({
  docsDirectories,
  flatDirectories,
  fullDirectories,
  asPopover = false,
  headings,
  includePlaceholder
}) {
  const config = useConfig();
  const { menu, setMenu } = useMenu();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const [focused, setFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [showSidebar, setSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [showToggleAnimation, setToggleAnimation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const anchors = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => headings.filter((v) => v.depth === 2), [headings]);
  const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (menu) {
      document.body.classList.add("nx-overflow-hidden", "md:nx-overflow-auto");
    } else {
      document.body.classList.remove(
        "nx-overflow-hidden",
        "md:nx-overflow-auto"
      );
    }
  }, [menu]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _a;
    const activeElement = (_a = sidebarRef.current) == null ? void 0 : _a.querySelector("li.active");
    if (activeElement && (window.innerWidth > 767 || menu)) {
      const scroll = () => {
        (0,scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_22__["default"])(activeElement, {
          block: "center",
          inline: "center",
          scrollMode: "always",
          boundary: containerRef.current
        });
      };
      if (menu) {
        setTimeout(scroll, 300);
      } else {
        scroll();
      }
    }
  }, [menu]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setMenu(false);
  }, [router.asPath, setMenu]);
  const hasI18n = config.i18n.length > 0;
  const hasMenu = config.darkMode || hasI18n;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
    includePlaceholder && asPopover ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "max-xl:nx-hidden nx-h-0 nx-w-64 nx-shrink-0" }) : null,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "motion-reduce:nx-transition-none [transition:background-color_1.5s_ease]",
          menu ? "nx-fixed nx-inset-0 nx-z-10 nx-bg-black/80 dark:nx-bg-black/60" : "nx-bg-transparent"
        ),
        onClick: () => setMenu(false)
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
      "aside",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nextra-sidebar-container nx-flex nx-flex-col",
          "md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none",
          "nx-transform-gpu nx-transition-all nx-ease-in-out",
          "print:nx-hidden",
          showSidebar ? "md:nx-w-64" : "md:nx-w-20",
          asPopover ? "md:nx-hidden" : "md:nx-sticky md:nx-self-start",
          menu ? "max-md:[transform:translate3d(0,0,0)]" : "max-md:[transform:translate3d(0,-100%,0)]"
        ),
        ref: containerRef,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-px-4 nx-pt-4 md:nx-hidden", children: renderComponent(config.search.component, {
            directories: flatDirectories
          }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FocusedItemContext.Provider, { value: focused, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
            OnFocuseItemContext.Provider,
            {
              value: (item) => {
                setFocused(item);
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
                "div",
                {
                  className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                    "nx-overflow-y-auto nx-overflow-x-hidden",
                    "nx-p-4 nx-grow md:nx-h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))]",
                    showSidebar ? "nextra-scrollbar" : "no-scrollbar"
                  ),
                  ref: sidebarRef,
                  children: [
                    (!asPopover || !showSidebar) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Collapse, { isOpen: showSidebar, horizontal: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                      Menu2,
                      {
                        className: "max-md:nx-hidden",
                        directories: docsDirectories,
                        anchors: config.toc.float ? [] : anchors,
                        onlyCurrentDocs: true
                      }
                    ) }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                      Menu2,
                      {
                        className: "md:nx-hidden",
                        directories: fullDirectories,
                        anchors
                      }
                    )
                  ]
                }
              )
            }
          ) }),
          hasMenu && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
            "div",
            {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                "nx-sticky nx-bottom-0",
                "nx-bg-white dark:nx-bg-dark",
                // when banner is showed, sidebar links can be behind menu, set bg color as body bg color
                "nx-mx-4 nx-py-4 nx-shadow-[0_-12px_16px_#fff]",
                "nx-flex nx-items-center nx-gap-2",
                "dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111]",
                "contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none",
                showSidebar ? clsx__WEBPACK_IMPORTED_MODULE_3___default()(hasI18n && "nx-justify-end", "nx-border-t") : "nx-py-4 nx-flex-wrap nx-justify-center"
              ),
              "data-toggle-animation": showToggleAnimation ? showSidebar ? "show" : "hide" : "off",
              children: [
                hasI18n && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                  LocaleSwitch,
                  {
                    options: config.i18n,
                    lite: !showSidebar,
                    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(showSidebar ? "nx-grow" : "max-md:nx-grow")
                  }
                ),
                config.darkMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                  "div",
                  {
                    className: showSidebar && !hasI18n ? "nx-grow nx-flex nx-flex-col" : "",
                    children: renderComponent(config.themeSwitch.component, {
                      lite: !showSidebar || hasI18n
                    })
                  }
                ),
                config.sidebar.toggleButton && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                  "button",
                  {
                    title: showSidebar ? "Hide sidebar" : "Show sidebar",
                    className: "max-md:nx-hidden nx-h-7 nx-rounded-md nx-transition-colors nx-text-gray-600 dark:nx-text-gray-400 nx-px-2 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
                    onClick: () => {
                      setSidebar(!showSidebar);
                      setToggleAnimation(true);
                    },
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .ExpandIcon */ .Qq, { isOpen: showSidebar })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}

// src/components/skip-nav.tsx



var DEFAULT_ID = "reach-skip-nav";
var DEFAULT_LABEL = "Skip to content";
var SkipNavLink = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  function(_a, forwardedRef) {
    var _b = _a, {
      className: providedClassName,
      id,
      label = DEFAULT_LABEL,
      styled
    } = _b, props = __objRest(_b, [
      "className",
      "id",
      "label",
      "styled"
    ]);
    const className = providedClassName === void 0 ? styled ? clsx__WEBPACK_IMPORTED_MODULE_3___default()(
      "nx-sr-only",
      "focus:nx-not-sr-only focus:nx-fixed focus:nx-z-50 focus:nx-m-3 focus:nx-ml-4 focus:nx-h-[calc(var(--nextra-navbar-height)-1.5rem)] focus:nx-rounded-lg focus:nx-border focus:nx-px-3 focus:nx-py-2 focus:nx-align-middle focus:nx-text-sm focus:nx-font-bold",
      "focus:nx-text-gray-900 focus:dark:nx-text-gray-100",
      "focus:nx-bg-white focus:dark:nx-bg-neutral-900",
      "focus:nx-border-neutral-400 focus:dark:nx-border-neutral-800"
    ) : "" : providedClassName;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "a",
      __spreadProps(__spreadValues({}, props), {
        ref: forwardedRef,
        href: `#${id || DEFAULT_ID}`,
        className,
        "data-reach-skip-link": "",
        children: label
      })
    );
  }
);
SkipNavLink.displayName = "SkipNavLink";
var SkipNavContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  function(_a, forwardedRef) {
    var _b = _a, { id } = _b, props = __objRest(_b, ["id"]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", __spreadProps(__spreadValues({}, props), { ref: forwardedRef, id: id || DEFAULT_ID }));
  }
);
SkipNavContent.displayName = "SkipNavContent";

// src/components/steps.tsx


function Steps(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx25(
    "div",
    __spreadProps(__spreadValues({
      className: cn16(
        "nextra-steps nx-ml-4 nx-mb-12 nx-border-l nx-border-gray-200 nx-pl-6",
        "dark:nx-border-neutral-800 [counter-reset:step]",
        className
      )
    }, props), {
      children
    })
  );
}

// src/components/tabs.tsx



function isTabItem(item) {
  if (item && typeof item === "object" && "label" in item)
    return true;
  return false;
}
var renderTab = (item) => {
  if (isTabItem(item)) {
    return item.label;
  }
  return item;
};
function Tabs({
  items,
  selectedIndex,
  defaultIndex,
  onChange,
  children
}) {
  return /* @__PURE__ */ jsxs17(
    HeadlessTab.Group,
    {
      selectedIndex,
      defaultIndex,
      onChange,
      children: [
        /* @__PURE__ */ jsx26("div", { className: "nextra-scrollbar nx-overflow-x-auto nx-overflow-y-hidden nx-overscroll-x-contain", children: /* @__PURE__ */ jsx26(HeadlessTab.List, { className: "nx-mt-4 nx-flex nx-w-max nx-min-w-full nx-border-b nx-border-gray-200 nx-pb-px dark:nx-border-neutral-800", children: items.map((item, index) => {
          const disabled = !!(item && typeof item === "object" && "disabled" in item && item.disabled);
          return /* @__PURE__ */ jsx26(
            HeadlessTab,
            {
              disabled,
              className: ({ selected }) => cn17(
                "nx-mr-2 nx-rounded-t nx-p-2 nx-font-medium nx-leading-5 nx-transition-colors",
                "-nx-mb-0.5 nx-select-none nx-border-b-2",
                selected ? "nx-border-primary-500 nx-text-primary-600" : "nx-border-transparent nx-text-gray-600 hover:nx-border-gray-200 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-border-neutral-800 dark:hover:nx-text-white",
                disabled && "nx-pointer-events-none nx-text-gray-400 dark:nx-text-neutral-600"
              ),
              children: renderTab(item)
            },
            index
          );
        }) }) }),
        /* @__PURE__ */ jsx26(HeadlessTab.Panels, { children })
      ]
    }
  );
}
function Tab(_a) {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ jsx26(HeadlessTab.Panel, __spreadProps(__spreadValues({}, props), { className: "nx-rounded nx-pt-6", children }));
}

// src/components/theme-switch.tsx





var themeOptionsSchema = zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
  light: zod__WEBPACK_IMPORTED_MODULE_7__.z.string(),
  dark: zod__WEBPACK_IMPORTED_MODULE_7__.z.string(),
  system: zod__WEBPACK_IMPORTED_MODULE_7__.z.string()
});
function ThemeSwitch({
  lite,
  className
}) {
  const { setTheme, resolvedTheme, theme: theme2 = "" } = (0,next_themes__WEBPACK_IMPORTED_MODULE_12__.useTheme)();
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMounted */ .s)();
  const config = useConfig().themeSwitch;
  const IconToUse = mounted && resolvedTheme === "dark" ? nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .MoonIcon */ .kL : nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .SunIcon */ .NW;
  const options = typeof config.useOptions === "function" ? config.useOptions() : config.useOptions;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    Select,
    {
      className,
      title: "Change theme",
      options: [
        { key: "light", name: options.light },
        { key: "dark", name: options.dark },
        { key: "system", name: options.system }
      ],
      onChange: (option) => {
        setTheme(option.key);
      },
      selected: {
        key: theme2,
        name: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", { className: "nx-flex nx-items-center nx-gap-2 nx-capitalize", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(IconToUse, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: lite ? "md:nx-hidden" : "", children: mounted ? options[theme2] : options.light })
        ] })
      }
    }
  );
}

// src/components/toc.tsx




var linkClassName = clsx__WEBPACK_IMPORTED_MODULE_3___default()(
  "nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100",
  "contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
);
function TOC({ headings, filePath }) {
  var _a;
  const activeAnchor = useActiveAnchor();
  const config = useConfig();
  const tocRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => headings.filter((heading) => heading.depth > 1),
    [headings]
  );
  const hasHeadings = items.length > 0;
  const hasMetaInfo = Boolean(
    config.feedback.content || config.editLink.component || config.toc.extraContent
  );
  const activeSlug = (_a = Object.entries(activeAnchor).find(
    ([, { isActive }]) => isActive
  )) == null ? void 0 : _a[0];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _a2;
    if (!activeSlug)
      return;
    const anchor = (_a2 = tocRef.current) == null ? void 0 : _a2.querySelector(
      `li > a[href="#${activeSlug}"]`
    );
    if (anchor) {
      (0,scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_22__["default"])(anchor, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: tocRef.current
      });
    }
  }, [activeSlug]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
    "div",
    {
      ref: tocRef,
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nextra-scrollbar nx-sticky nx-top-16 nx-overflow-y-auto nx-pr-4 nx-pt-6 nx-text-sm [hyphens:auto]",
        "nx-max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-nx-mr-4 rtl:-nx-ml-4"
      ),
      children: [
        hasHeadings && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", { className: "nx-mb-4 nx-font-semibold nx-tracking-tight", children: renderComponent(config.toc.title) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", { children: items.map(({ id, value, depth }) => {
            var _a2, _b, _c, _d;
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", { className: "nx-my-2 nx-scroll-my-6 nx-scroll-py-6", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
              "a",
              {
                href: `#${id}`,
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                  {
                    2: "nx-font-semibold",
                    3: "ltr:nx-pl-4 rtl:nx-pr-4",
                    4: "ltr:nx-pl-8 rtl:nx-pr-8",
                    5: "ltr:nx-pl-12 rtl:nx-pr-12",
                    6: "ltr:nx-pl-16 rtl:nx-pr-16"
                  }[depth],
                  "nx-inline-block",
                  ((_a2 = activeAnchor[id]) == null ? void 0 : _a2.isActive) ? "nx-text-primary-600 nx-subpixel-antialiased contrast-more:!nx-text-primary-600" : "nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300",
                  "contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words"
                ),
                children: (_d = (_c = (_b = config.toc).headingComponent) == null ? void 0 : _c.call(_b, {
                  id,
                  children: value
                })) != null ? _d : value
              }
            ) }, id);
          }) })
        ] }),
        hasMetaInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
          "div",
          {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
              hasHeadings && "nx-mt-8 nx-border-t nx-bg-white nx-pt-8 nx-shadow-[0_-12px_16px_white] dark:nx-bg-dark dark:nx-shadow-[0_-12px_16px_#111]",
              "nx-sticky nx-bottom-0 nx-flex nx-flex-col nx-items-start nx-gap-2 nx-pb-8 dark:nx-border-neutral-800",
              "contrast-more:nx-border-t contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-border-neutral-400"
            ),
            children: [
              config.feedback.content ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                Anchor,
                {
                  className: linkClassName,
                  href: config.feedback.useLink(),
                  newWindow: true,
                  children: renderComponent(config.feedback.content)
                }
              ) : null,
              renderComponent(config.editLink.component, {
                filePath,
                className: linkClassName,
                children: renderComponent(config.editLink.text)
              }),
              renderComponent(config.toc.extraContent)
            ]
          }
        )
      ]
    }
  );
}

// src/components/match-sorter-search.tsx



function MatchSorterSearch({
  className,
  directories
}) {
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const results = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (
      // Will need to scrape all the headers from each page and search through them here
      // (similar to what we already do to render the hash links in sidebar)
      // We could also try to search the entire string text from each page
      search ? (0,match_sorter__WEBPACK_IMPORTED_MODULE_23__.matchSorter)(directories, search, { keys: ["title"] }).map(
        ({ route, title }) => ({
          id: route + title,
          route,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(HighlightMatches, { value: title, match: search })
        })
      ) : []
    ),
    [search, directories]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    Search,
    {
      value: search,
      onChange: setSearch,
      className,
      overlayClassName: "nx-w-full",
      results
    }
  );
}

// src/constants.tsx

var DEFAULT_LOCALE = "en-US";
var IS_BROWSER = typeof window !== "undefined";
function isReactNode(value) {
  return value == null || isString(value) || isFunction(value) || (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isString(value) {
  return typeof value === "string";
}
var i18nSchema = zod__WEBPACK_IMPORTED_MODULE_7__.z.array(
  zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    direction: zod__WEBPACK_IMPORTED_MODULE_7__.z["enum"](["ltr", "rtl"]).optional(),
    locale: zod__WEBPACK_IMPORTED_MODULE_7__.z.string(),
    text: zod__WEBPACK_IMPORTED_MODULE_7__.z.string()
  })
);
var reactNode = [
  isReactNode,
  { message: "Must be React.ReactNode or React.FC" }
];
var fc = [isFunction, { message: "Must be React.FC" }];
var themeSchema = zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
  banner: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    dismissible: zod__WEBPACK_IMPORTED_MODULE_7__.z.boolean(),
    key: zod__WEBPACK_IMPORTED_MODULE_7__.z.string(),
    text: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode).optional()
  }),
  chat: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    icon: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    link: zod__WEBPACK_IMPORTED_MODULE_7__.z.string().startsWith("https://").optional()
  }),
  components: zod__WEBPACK_IMPORTED_MODULE_7__.z.record(zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...fc)).optional(),
  darkMode: zod__WEBPACK_IMPORTED_MODULE_7__.z.boolean(),
  direction: zod__WEBPACK_IMPORTED_MODULE_7__.z["enum"](["ltr", "rtl"]),
  docsRepositoryBase: zod__WEBPACK_IMPORTED_MODULE_7__.z.string().startsWith("https://"),
  editLink: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...fc),
    text: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode)
  }),
  faviconGlyph: zod__WEBPACK_IMPORTED_MODULE_7__.z.string().optional(),
  feedback: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    content: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    labels: zod__WEBPACK_IMPORTED_MODULE_7__.z.string(),
    useLink: zod__WEBPACK_IMPORTED_MODULE_7__.z["function"]().returns(zod__WEBPACK_IMPORTED_MODULE_7__.z.string())
  }),
  footer: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    text: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode)
  }),
  gitTimestamp: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
  head: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
  i18n: i18nSchema,
  logo: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
  logoLink: zod__WEBPACK_IMPORTED_MODULE_7__.z.boolean().or(zod__WEBPACK_IMPORTED_MODULE_7__.z.string()),
  main: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...fc).optional(),
  navbar: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    extraContent: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode).optional()
  }),
  navigation: zod__WEBPACK_IMPORTED_MODULE_7__.z.boolean().or(
    zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
      next: zod__WEBPACK_IMPORTED_MODULE_7__.z.boolean(),
      prev: zod__WEBPACK_IMPORTED_MODULE_7__.z.boolean()
    })
  ),
  nextThemes: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    defaultTheme: zod__WEBPACK_IMPORTED_MODULE_7__.z.string(),
    forcedTheme: zod__WEBPACK_IMPORTED_MODULE_7__.z.string().optional(),
    storageKey: zod__WEBPACK_IMPORTED_MODULE_7__.z.string()
  }),
  notFound: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    content: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    labels: zod__WEBPACK_IMPORTED_MODULE_7__.z.string()
  }),
  primaryHue: zod__WEBPACK_IMPORTED_MODULE_7__.z.number().or(
    zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
      dark: zod__WEBPACK_IMPORTED_MODULE_7__.z.number(),
      light: zod__WEBPACK_IMPORTED_MODULE_7__.z.number()
    })
  ),
  project: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    icon: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    link: zod__WEBPACK_IMPORTED_MODULE_7__.z.string().startsWith("https://").optional()
  }),
  search: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    emptyResult: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    error: zod__WEBPACK_IMPORTED_MODULE_7__.z.string().or(zod__WEBPACK_IMPORTED_MODULE_7__.z["function"]().returns(zod__WEBPACK_IMPORTED_MODULE_7__.z.string())),
    loading: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    // Can't be React component
    placeholder: zod__WEBPACK_IMPORTED_MODULE_7__.z.string().or(zod__WEBPACK_IMPORTED_MODULE_7__.z["function"]().returns(zod__WEBPACK_IMPORTED_MODULE_7__.z.string()))
  }),
  serverSideError: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    content: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    labels: zod__WEBPACK_IMPORTED_MODULE_7__.z.string()
  }),
  sidebar: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    defaultMenuCollapseLevel: zod__WEBPACK_IMPORTED_MODULE_7__.z.number().min(1).int(),
    titleComponent: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    toggleButton: zod__WEBPACK_IMPORTED_MODULE_7__.z.boolean()
  }),
  themeSwitch: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(
      ...reactNode
    ),
    useOptions: themeOptionsSchema.or(zod__WEBPACK_IMPORTED_MODULE_7__.z["function"]().returns(themeOptionsSchema))
  }),
  toc: zod__WEBPACK_IMPORTED_MODULE_7__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    extraContent: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode),
    float: zod__WEBPACK_IMPORTED_MODULE_7__.z.boolean(),
    headingComponent: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...fc).optional(),
    title: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(...reactNode)
  }),
  useNextSeoProps: zod__WEBPACK_IMPORTED_MODULE_7__.z.custom(isFunction)
});
var publicThemeSchema = themeSchema.deepPartial().extend({
  // to have `locale` and `text` as required properties
  i18n: i18nSchema.optional()
});
var LOADING_LOCALES = {
  "en-US": "Loading",
  fr: "\u0421hargement",
  ru: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
  "zh-CN": "\u6B63\u5728\u52A0\u8F7D"
};
var PLACEHOLDER_LOCALES = {
  "en-US": "Search documentation",
  fr: "Rechercher documents",
  ru: "\u041F\u043E\u0438\u0441\u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
  "zh-CN": "\u641C\u7D22\u6587\u6863"
};
var DEFAULT_THEME = {
  banner: {
    dismissible: true,
    key: "nextra-banner"
  },
  chat: {
    icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .DiscordIcon */ .D7, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-sr-only", children: "Discord" })
    ] })
  },
  darkMode: true,
  direction: "ltr",
  docsRepositoryBase: "https://github.com/shuding/nextra",
  editLink: {
    component: function EditLink({ className, filePath, children }) {
      const editUrl = useGitEditUrl(filePath);
      if (!editUrl) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Anchor, { className, href: editUrl, children });
    },
    text: "Edit this page"
  },
  feedback: {
    content: "Question? Give us feedback \u2192",
    labels: "feedback",
    useLink() {
      const config = useConfig();
      return getGitIssueUrl({
        labels: config.feedback.labels,
        repository: config.docsRepositoryBase,
        title: `Feedback for \u201C${config.title}\u201D`
      });
    }
  },
  footer: {
    component: Footer,
    text: `MIT ${(/* @__PURE__ */ new Date()).getFullYear()} \xA9 Nextra.`
  },
  gitTimestamp: function GitTimestamp({ timestamp }) {
    const { locale = DEFAULT_LOCALE } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
      "Last updated on",
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("time", { dateTime: timestamp.toISOString(), children: timestamp.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) })
    ] });
  },
  head: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", { name: "msapplication-TileColor", content: "#fff" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", { httpEquiv: "Content-Language", content: "en" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", { name: "description", content: "Nextra: the next docs builder" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", { name: "twitter:site", content: "@shuding_" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", { property: "og:title", content: "Nextra: the next docs builder" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", { property: "og:description", content: "Nextra: the next docs builder" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta", { name: "apple-mobile-web-app-title", content: "Nextra" })
  ] }),
  i18n: [],
  logo: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-font-extrabold", children: "Nextra" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-ml-2 nx-hidden nx-font-normal nx-text-gray-600 md:nx-inline", children: "The Next Docs Builder" })
  ] }),
  logoLink: true,
  navbar: {
    component: Navbar
  },
  navigation: true,
  nextThemes: {
    defaultTheme: "system",
    storageKey: "theme"
  },
  notFound: {
    content: "Submit an issue about broken link \u2192",
    labels: "bug"
  },
  primaryHue: {
    dark: 204,
    light: 212
  },
  project: {
    icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_6__/* .GitHubIcon */ .fy, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-sr-only", children: "GitHub" })
    ] })
  },
  search: {
    component: function Search2({ className, directories }) {
      const config = useConfig();
      return config.flexsearch ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Flexsearch, { className }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(MatchSorterSearch, { className, directories });
    },
    emptyResult: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400", children: "No results found." }),
    error: "Failed to load search index.",
    loading: function useLoading() {
      const { locale, defaultLocale = DEFAULT_LOCALE } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
      const text = locale && LOADING_LOCALES[locale] || LOADING_LOCALES[defaultLocale];
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
        text,
        "\u2026"
      ] });
    },
    placeholder: function usePlaceholder() {
      const { locale, defaultLocale = DEFAULT_LOCALE } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
      const text = locale && PLACEHOLDER_LOCALES[locale] || PLACEHOLDER_LOCALES[defaultLocale];
      return `${text}\u2026`;
    }
  },
  serverSideError: {
    content: "Submit an issue about error in url \u2192",
    labels: "bug"
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    titleComponent: ({ title }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: title }),
    toggleButton: false
  },
  themeSwitch: {
    component: ThemeSwitch,
    useOptions() {
      const { locale } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
      if (locale === "zh-CN") {
        return { dark: "\u6DF1\u8272\u4E3B\u9898", light: "\u6D45\u8272\u4E3B\u9898", system: "\u7CFB\u7EDF\u9ED8\u8BA4" };
      }
      return { dark: "Dark", light: "Light", system: "System" };
    }
  },
  toc: {
    component: TOC,
    float: true,
    title: "On This Page"
  },
  useNextSeoProps: () => ({ titleTemplate: "%s \u2013 Nextra" })
};
var DEEP_OBJECT_KEYS = Object.entries(DEFAULT_THEME).map(([key, value]) => {
  const isObject = value && typeof value === "object" && !Array.isArray(value) && !(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(value);
  if (isObject) {
    return key;
  }
}).filter(Boolean);

// src/polyfill.ts
if (IS_BROWSER) {
  let resizeTimer;
  const addResizingClass = () => {
    document.body.classList.add("resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resizing");
    }, 200);
  };
  window.addEventListener("resize", addResizingClass);
}

// src/index.tsx


// src/mdx-components.tsx




function HeadingLink(_a) {
  var _b = _a, {
    tag: Tag,
    context,
    children,
    id
  } = _b, props = __objRest(_b, [
    "tag",
    "context",
    "children",
    "id"
  ]);
  const setActiveAnchor = useSetActiveAnchor();
  const slugs2 = useSlugs();
  const observer = useIntersectionObserver();
  const obRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!id)
      return;
    const heading = obRef.current;
    if (!heading)
      return;
    slugs2.set(heading, [id, context.index += 1]);
    observer == null ? void 0 : observer.observe(heading);
    return () => {
      observer == null ? void 0 : observer.disconnect();
      slugs2.delete(heading);
      setActiveAnchor((f) => {
        const ret = __spreadValues({}, f);
        delete ret[id];
        return ret;
      });
    };
  }, [id, context, slugs2, observer, setActiveAnchor]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
    Tag,
    __spreadProps(__spreadValues({
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100",
        {
          h2: "nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400",
          h3: "nx-mt-8 nx-text-2xl",
          h4: "nx-mt-8 nx-text-xl",
          h5: "nx-mt-8 nx-text-lg",
          h6: "nx-mt-8 nx-text-base"
        }[Tag]
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", { className: "nx-absolute -nx-mt-20", id, ref: obRef }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
          "a",
          {
            href: `#${id}`,
            className: "subheading-anchor",
            "aria-label": "Permalink for this section"
          }
        )
      ]
    })
  );
}
var findSummary = (children) => {
  let summary = null;
  const restChildren = [];
  react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, (child, index) => {
    var _a;
    if (child && child.type === Summary) {
      summary || (summary = child);
      return;
    }
    let c = child;
    if (!summary && child && typeof child === "object" && child.type !== Details && "props" in child && child.props) {
      const result = findSummary(child.props.children);
      summary = result[0];
      c = (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, __spreadProps(__spreadValues({}, child.props), {
        children: ((_a = result[1]) == null ? void 0 : _a.length) ? result[1] : void 0,
        key: index
      }));
    }
    restChildren.push(c);
  });
  return [summary, restChildren];
};
var Details = (_a) => {
  var _b = _a, {
    children,
    open
  } = _b, props = __objRest(_b, [
    "children",
    "open"
  ]);
  const [openState, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!open);
  const [summary, restChildren] = findSummary(children);
  const [delayedOpenState, setDelayedOpenState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(openState);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (openState) {
      setDelayedOpenState(true);
    } else {
      const timeout = setTimeout(() => setDelayedOpenState(openState), 500);
      return () => clearTimeout(timeout);
    }
  }, [openState]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(
    "details",
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({
      className: "nx-my-4 nx-rounded nx-border nx-border-gray-200 nx-bg-white nx-p-2 nx-shadow-sm first:nx-mt-0 dark:nx-border-neutral-800 dark:nx-bg-neutral-900"
    }, props), {
      open: delayedOpenState
    }), openState && { "data-expanded": true }), {
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(DetailsProvider, { value: setOpen, children: summary }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Collapse, { isOpen: openState, children: restChildren })
      ]
    })
  );
};
var Summary = (props) => {
  const setOpen = useDetails();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    "summary",
    __spreadProps(__spreadValues({
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-flex nx-items-center nx-cursor-pointer nx-list-none nx-p-1 nx-transition-colors hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800",
        "before:nx-mr-1 before:nx-inline-block before:nx-transition-transform before:nx-content-[''] dark:before:nx-invert",
        "rtl:before:nx-rotate-180 [[data-expanded]>&]:before:nx-rotate-90"
      )
    }, props), {
      onClick: (e) => {
        e.preventDefault();
        setOpen((v) => !v);
      }
    })
  );
};
var EXTERNAL_HREF_REGEX = /https?:\/\//;
var Link = (_a) => {
  var _b = _a, { href = "", className } = _b, props = __objRest(_b, ["href", "className"]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    Anchor,
    __spreadValues({
      href,
      newWindow: EXTERNAL_HREF_REGEX.test(href),
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]",
        className
      )
    }, props)
  );
};
var A = (_a) => {
  var _b = _a, { href = "" } = _b, props = __objRest(_b, ["href"]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Anchor, __spreadValues({ href, newWindow: EXTERNAL_HREF_REGEX.test(href) }, props));
};
var getComponents = ({
  isRawLayout,
  components
}) => {
  if (isRawLayout) {
    return { a: A };
  }
  const context = { index: 0 };
  return __spreadValues({
    h1: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "h1",
      __spreadValues({
        className: "nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100"
      }, props)
    ),
    h2: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(HeadingLink, __spreadValues({ tag: "h2", context }, props)),
    h3: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(HeadingLink, __spreadValues({ tag: "h3", context }, props)),
    h4: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(HeadingLink, __spreadValues({ tag: "h4", context }, props)),
    h5: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(HeadingLink, __spreadValues({ tag: "h5", context }, props)),
    h6: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(HeadingLink, __spreadValues({ tag: "h6", context }, props)),
    ul: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "ul",
      __spreadValues({
        className: "nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
      }, props)
    ),
    ol: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "ol",
      __spreadValues({
        className: "nx-mt-6 nx-list-decimal first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
      }, props)
    ),
    li: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", __spreadValues({ className: "nx-my-2" }, props)),
    blockquote: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "blockquote",
      __spreadValues({
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400",
          "first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6"
        )
      }, props)
    ),
    hr: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", __spreadValues({ className: "nx-my-8 dark:nx-border-gray-900" }, props)),
    a: Link,
    table: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      nextra_components__WEBPACK_IMPORTED_MODULE_24__/* .Table */ .iA,
      __spreadValues({
        className: "nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0"
      }, props)
    ),
    p: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", __spreadValues({ className: "nx-mt-6 nx-leading-7 first:nx-mt-0" }, props)),
    tr: nextra_components__WEBPACK_IMPORTED_MODULE_24__.Tr,
    th: nextra_components__WEBPACK_IMPORTED_MODULE_24__.Th,
    td: nextra_components__WEBPACK_IMPORTED_MODULE_24__.Td,
    details: Details,
    summary: Summary,
    pre: nextra_components__WEBPACK_IMPORTED_MODULE_24__/* .Pre */ .SU,
    code: nextra_components__WEBPACK_IMPORTED_MODULE_24__/* .Code */ .EK
  }, components);
};

// src/index.tsx




var classes5 = {
  toc: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nextra-toc nx-order-last nx-hidden nx-w-64 nx-shrink-0 xl:nx-block print:nx-hidden"
  ),
  main: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nx-w-full nx-break-words")
};
var Body = ({
  themeContext,
  breadcrumb,
  timestamp,
  navigation,
  children
}) => {
  var _a;
  const config = useConfig();
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMounted */ .s)();
  if (themeContext.layout === "raw") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: classes5.main, children });
  }
  const date = themeContext.timestamp && config.gitTimestamp && timestamp ? new Date(timestamp) : null;
  const gitTimestampEl = (
    // Because a user's time zone may be different from the server page
    mounted && date ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400", children: renderComponent(config.gitTimestamp, { timestamp: date }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", { className: "nx-mt-16" })
  );
  const content = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, { children: [
    children,
    gitTimestampEl,
    navigation
  ] });
  const body = ((_a = config.main) == null ? void 0 : _a.call(config, { children: content })) || content;
  if (themeContext.layout === "full") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
      "article",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          classes5.main,
          "nextra-content nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
        ),
        children: body
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    "article",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        classes5.main,
        "nextra-content nx-flex nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-min-w-0 nx-justify-center nx-pb-8 nx-pr-[calc(env(safe-area-inset-right)-1.5rem)]",
        themeContext.typesetting === "article" && "nextra-body-typesetting-article"
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("main", { className: "nx-w-full nx-min-w-0 nx-max-w-6xl nx-px-6 nx-pt-4 md:nx-px-12", children: [
        breadcrumb,
        body
      ] })
    }
  );
};
var InnerLayout = ({
  filePath,
  pageMap,
  frontMatter,
  headings,
  timestamp,
  children
}) => {
  const config = useConfig();
  const { locale = DEFAULT_LOCALE, defaultLocale } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const fsPath = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFSRoute */ .$)();
  const {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    topLevelNavbarItems,
    docsDirectories,
    flatDirectories,
    flatDocsDirectories,
    directories
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,nextra_normalize_pages__WEBPACK_IMPORTED_MODULE_13__/* .normalizePages */ .k)({
      list: pageMap,
      locale,
      defaultLocale,
      route: fsPath
    }),
    [pageMap, locale, defaultLocale, fsPath]
  );
  const themeContext = __spreadValues(__spreadValues({}, activeThemeContext), frontMatter);
  const hideSidebar = !themeContext.sidebar || themeContext.layout === "raw" || activeType === "page";
  const tocEl = activeType === "page" || !themeContext.toc || themeContext.layout !== "default" ? themeContext.layout !== "full" && themeContext.layout !== "raw" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("nav", { className: classes5.toc, "aria-label": "table of contents" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
    "nav",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes5.toc, "nx-px-4"),
      "aria-label": "table of contents",
      children: renderComponent(config.toc.component, {
        headings: config.toc.float ? headings : [],
        filePath
      })
    }
  );
  const localeConfig = config.i18n.find((l) => l.locale === locale);
  const isRTL = localeConfig ? localeConfig.direction === "rtl" : config.direction === "rtl";
  const direction = isRTL ? "rtl" : "ltr";
  return (
    // This makes sure that selectors like `[dir=ltr] .nextra-container` work
    // before hydration as Tailwind expects the `dir` attribute to exist on the
    // `html` element.
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", { dir: direction, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `document.documentElement.setAttribute('dir','${direction}')`
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Head, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Banner, {}),
      themeContext.navbar && renderComponent(config.navbar.component, {
        flatDirectories,
        items: topLevelNavbarItems
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
        "div",
        {
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            "nx-mx-auto nx-flex",
            themeContext.layout !== "raw" && "nx-max-w-[90rem]"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ActiveAnchorProvider, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
              Sidebar,
              {
                docsDirectories,
                flatDirectories,
                fullDirectories: directories,
                headings,
                asPopover: hideSidebar,
                includePlaceholder: themeContext.layout === "default"
              }
            ),
            tocEl,
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(SkipNavContent, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
              Body,
              {
                themeContext,
                breadcrumb: activeType !== "page" && themeContext.breadcrumb ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Breadcrumb, { activePath }) : null,
                timestamp,
                navigation: activeType !== "page" && themeContext.pagination ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                  NavLinks,
                  {
                    flatDirectories: flatDocsDirectories,
                    currentIndex: activeIndex
                  }
                ) : null,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(
                  nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .MDXProvider */ .Z,
                  {
                    components: getComponents({
                      isRawLayout: themeContext.layout === "raw",
                      components: config.components
                    }),
                    children
                  }
                )
              }
            )
          ] })
        }
      ),
      themeContext.footer && renderComponent(config.footer.component, { menu: hideSidebar })
    ] })
  );
};
function Layout(_a) {
  var _b = _a, {
    children
  } = _b, context = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ConfigProvider, { value: context, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(InnerLayout, __spreadProps(__spreadValues({}, context.pageOpts), { children })) });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EK": () => (/* reexport */ Code),
  "SU": () => (/* reexport */ Pre),
  "iA": () => (/* reexport */ Table),
  "Td": () => (/* reexport */ Td),
  "Th": () => (/* reexport */ Th),
  "Tr": () => (/* reexport */ Tr)
});

// UNUSED EXPORTS: Button, Callout, CopyToClipboard

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/button.js
// src/components/button.tsx


var Button = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "button",
    {
      className: external_clsx_default()(
        "nextra-button nx-transition-all active:nx-opacity-50",
        "nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5",
        "dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50",
        className
      ),
      ...props,
      children
    }
  );
};


// EXTERNAL MODULE: ./node_modules/nextra/dist/icons/index.js + 14 modules
var icons = __webpack_require__(4861);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/callout.js
// src/components/callout.tsx



var TypeToEmoji = {
  default: "\u{1F4A1}",
  error: "\u{1F6AB}",
  info: /* @__PURE__ */ (0,jsx_runtime.jsx)(icons/* InformationCircleIcon */.AV, { className: "nx-mt-1" }),
  warning: "\u26A0\uFE0F"
};
var classes = {
  default: external_clsx_default()(
    "nx-border-orange-100 nx-bg-orange-50 nx-text-orange-800 dark:nx-border-orange-400/30 dark:nx-bg-orange-400/20 dark:nx-text-orange-300"
  ),
  error: external_clsx_default()(
    "nx-border-red-200 nx-bg-red-100 nx-text-red-900 dark:nx-border-red-200/30 dark:nx-bg-red-900/30 dark:nx-text-red-200"
  ),
  info: external_clsx_default()(
    "nx-border-blue-200 nx-bg-blue-100 nx-text-blue-900 dark:nx-border-blue-200/30 dark:nx-bg-blue-900/30 dark:nx-text-blue-200"
  ),
  warning: external_clsx_default()(
    "nx-border-yellow-100 nx-bg-yellow-50 nx-text-yellow-900 dark:nx-border-yellow-200/30 dark:nx-bg-yellow-700/30 dark:nx-text-yellow-200"
  )
};
function Callout({
  children,
  type = "default",
  emoji = TypeToEmoji[type]
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4",
        "contrast-more:nx-border-current contrast-more:dark:nx-border-current",
        classes[type]
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",
            style: {
              fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            },
            children: emoji
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "nx-w-full nx-min-w-0 nx-leading-7", children })
      ]
    }
  );
}


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/copy-to-clipboard.js
// src/components/copy-to-clipboard.tsx




var CopyToClipboard = ({
  getValue,
  ...props
}) => {
  const [isCopied, setCopied] = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (!isCopied)
      return;
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2e3);
    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);
  const handleClick = (0,external_react_.useCallback)(async () => {
    setCopied(true);
    if (!navigator?.clipboard) {
      console.error("Access to clipboard rejected!");
    }
    try {
      await navigator.clipboard.writeText(getValue());
    } catch {
      console.error("Failed to copy!");
    }
  }, [getValue]);
  const IconToUse = isCopied ? icons/* CheckIcon */.nQ : icons/* CopyIcon */.TI;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Button, { onClick: handleClick, title: "Copy code", tabIndex: 0, ...props, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(IconToUse, { className: "nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4" }) });
};


;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/code.js
// src/components/code.tsx


var Code = ({
  children,
  className,
  ...props
}) => {
  const hasLineNumbers = "data-line-numbers" in props;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "code",
    {
      className: external_clsx_default()(
        "nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]",
        "dark:nx-border-white/10 dark:nx-bg-white/10",
        hasLineNumbers && "[counter-reset:line]",
        className
      ),
      dir: "ltr",
      ...props,
      children
    }
  );
};


;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/pre.js
// src/components/pre.tsx






var Pre = ({
  children,
  className,
  hasCopyCode,
  filename,
  ...props
}) => {
  const preRef = (0,external_react_.useRef)(null);
  const toggleWordWrap = (0,external_react_.useCallback)(() => {
    const htmlDataset = document.documentElement.dataset;
    const hasWordWrap = "nextraWordWrap" in htmlDataset;
    if (hasWordWrap) {
      delete htmlDataset.nextraWordWrap;
    } else {
      htmlDataset.nextraWordWrap = "";
    }
  }, []);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "nextra-code-block nx-relative nx-mt-6 first:nx-mt-0", children: [
    filename && /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200", children: filename }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "pre",
      {
        className: external_clsx_default()(
          "nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]",
          "contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",
          filename ? "nx-pt-12 nx-pb-4" : "nx-py-4",
          className
        ),
        ref: preRef,
        ...props,
        children
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      "div",
      {
        className: external_clsx_default()(
          "nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100",
          "nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",
          filename ? "nx-top-8" : "nx-top-0"
        ),
        children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            Button,
            {
              onClick: toggleWordWrap,
              className: "md:nx-hidden",
              title: "Toggle word wrap",
              children: /* @__PURE__ */ (0,jsx_runtime.jsx)(icons/* WordWrapIcon */.NK, { className: "nx-pointer-events-none nx-h-4 nx-w-4" })
            }
          ),
          hasCopyCode && /* @__PURE__ */ (0,jsx_runtime.jsx)(
            CopyToClipboard,
            {
              getValue: () => preRef.current?.querySelector("code")?.textContent || ""
            }
          )
        ]
      }
    )
  ] });
};


;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/td.js
// src/components/td.tsx

var Td = ({ className = "", ...props }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "td",
  {
    className: "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600 " + className,
    ...props
  }
);


;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/table.js
// src/components/table.tsx

var Table = ({
  className = "",
  ...props
}) => /* @__PURE__ */ (0,jsx_runtime.jsx)("table", { className: "nx-block nx-overflow-x-scroll " + className, ...props });


;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/th.js
// src/components/th.tsx

var Th = ({ className = "", ...props }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "th",
  {
    className: "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600 " + className,
    ...props
  }
);


;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/tr.js
// src/components/tr.tsx

var Tr = ({ className = "", ...props }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "tr",
  {
    className: "nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20 " + className,
    ...props
  }
);


;// CONCATENATED MODULE: ./node_modules/nextra/dist/components/index.js
// src/components/index.ts












/***/ }),

/***/ 7391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ useFSRoute),
  "s": () => (/* reexport */ useMounted)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/hooks/use-mounted.js
// src/hooks/use-mounted.ts

function useMounted() {
  const [mounted, setMounted] = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setMounted(true);
  }, []);
  return mounted;
}


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/nextra/dist/constants.mjs
var constants = __webpack_require__(7222);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/hooks/use-fs-route.js
// src/hooks/use-fs-route.ts



var template = "https://nextra.vercel.app";
var useFSRoute = () => {
  const { locale = constants/* DEFAULT_LOCALE */.ZW, asPath, route } = (0,router_.useRouter)();
  return (0,external_react_.useMemo)(() => {
    const clientRoute = constants/* ERROR_ROUTES.has */.hV.has(route) ? route : asPath;
    const { pathname } = new URL(clientRoute, template);
    const cleanedPath = locale ? pathname.replace(new RegExp(`\\.${locale}(\\/|$)`), "$1") : pathname;
    return cleanedPath.replace(/\/index(\/|$)/, "$1").replace(/\/$/, "") || "/";
  }, [asPath, locale, route]);
};


;// CONCATENATED MODULE: ./node_modules/nextra/dist/hooks/index.js
// src/hooks/index.ts




/***/ }),

/***/ 4861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LZ": () => (/* reexport */ ArrowRightIcon),
  "nQ": () => (/* reexport */ CheckIcon),
  "TI": () => (/* reexport */ CopyIcon),
  "D7": () => (/* reexport */ DiscordIcon),
  "Qq": () => (/* reexport */ ExpandIcon),
  "fy": () => (/* reexport */ GitHubIcon),
  "n9": () => (/* reexport */ GlobeIcon),
  "AV": () => (/* reexport */ InformationCircleIcon),
  "Oq": () => (/* reexport */ MenuIcon),
  "kL": () => (/* reexport */ MoonIcon),
  "L4": () => (/* reexport */ SpinnerIcon),
  "NW": () => (/* reexport */ SunIcon),
  "NK": () => (/* reexport */ WordWrapIcon),
  "b0": () => (/* reexport */ XIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/arrow-right.js
// src/icons/arrow-right.tsx

function ArrowRightIcon({
  pathClassName,
  ...props
}) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", ...props, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 5l7 7-7 7",
      className: pathClassName
    }
  ) });
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/check.js
// src/icons/check.tsx

function CheckIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      viewBox: "0 0 20 20",
      width: "1em",
      height: "1em",
      fill: "currentColor",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/copy.js
// src/icons/copy.tsx

function CopyIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "currentColor",
      ...props,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "rect",
          {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "path",
          {
            d: "M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/discord.js
// src/icons/discord.tsx

function DiscordIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 5 30.67 23.25",
      ...props,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)("title", { children: "Discord" }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)("path", { d: "M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z" })
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/expand.js
// src/icons/expand.tsx

function ExpandIcon({
  isOpen,
  ...props
}) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "svg",
    {
      height: "12",
      width: "12",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      ...props,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "path",
          {
            fillRule: "evenodd",
            d: "M4.177 7.823l2.396-2.396A.25.25 0 017 5.604v4.792a.25.25 0 01-.427.177L4.177 8.177a.25.25 0 010-.354z",
            className: isOpen ? "" : "nx-origin-[35%] nx-rotate-180"
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "path",
          {
            fillRule: "evenodd",
            d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25H9.5v-13H1.75zm12.5 13H11v-13h3.25a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25z"
          }
        )
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/github.js
// src/icons/github.tsx

function GitHubIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      fill: "currentColor",
      viewBox: "3 3 18 18",
      ...props,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)("title", { children: "GitHub" }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)("path", { d: "M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z" })
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/globe.js
// src/icons/globe.tsx

function GlobeIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      viewBox: "2 2 16 16",
      width: "12",
      height: "12",
      fill: "currentColor",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
          clipRule: "evenodd"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/information-circle.js
// src/icons/information-circle.tsx

function InformationCircleIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      width: "20",
      height: "20",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/menu.js
// src/icons/menu.tsx

function MenuIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "svg",
    {
      fill: "none",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      ...props,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)("g", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16"
          }
        ) }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 12h16"
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)("g", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 18h16"
          }
        ) })
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/moon.js
// src/icons/moon.tsx

function MoonIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      fill: "none",
      viewBox: "2 2 20 20",
      width: "12",
      height: "12",
      stroke: "currentColor",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          fill: "currentColor",
          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/spinner.js
// src/icons/spinner.tsx

function SpinnerIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      ...props,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "circle",
          {
            className: "nx-opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "path",
          {
            className: "nx-opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/sun.js
// src/icons/sun.tsx

function SunIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      fill: "none",
      viewBox: "3 3 18 18",
      width: "12",
      height: "12",
      stroke: "currentColor",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          fill: "currentColor",
          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/word-wrap.js
// src/icons/word-wrap.tsx

function WordWrapIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", width: "24", height: "24", ...props, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
    }
  ) });
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/x.js
// src/icons/x.tsx

function XIcon(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      ...props,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          clipRule: "evenodd"
        }
      )
    }
  );
}


;// CONCATENATED MODULE: ./node_modules/nextra/dist/icons/index.js
// src/icons/index.ts
















/***/ }),

/***/ 2462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Nextra)
/* harmony export */ });
/* harmony import */ var _ssg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7308);
/* harmony import */ var _use_internals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7922);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ssg__WEBPACK_IMPORTED_MODULE_0__]);
_ssg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/layout.tsx



function Nextra({
  __nextra_pageMap,
  __nextra_dynamic_opts,
  ...props
}) {
  const { context, Layout } = (0,_use_internals__WEBPACK_IMPORTED_MODULE_1__/* .useInternals */ .u)();
  const { Content, ...restContext } = context;
  if (__nextra_pageMap) {
    restContext.pageOpts = {
      ...restContext.pageOpts,
      pageMap: __nextra_pageMap
    };
  }
  if (__nextra_dynamic_opts) {
    const data = JSON.parse(__nextra_dynamic_opts);
    restContext.pageOpts = {
      ...restContext.pageOpts,
      headings: data.headings,
      title: data.title || restContext.pageOpts.title,
      frontMatter: data.frontMatter
    };
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Layout, { ...restContext, pageProps: props, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ssg__WEBPACK_IMPORTED_MODULE_0__/* .SSGContext.Provider */ .mK.Provider, { value: props, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Content, { ...props }) }) });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.MDXProvider),
/* harmony export */   "a": () => (/* reexport safe */ _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__.useMDXComponents)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__]);
_mdx_js_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/mdx.ts



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ normalizePages)
/* harmony export */ });
/* unused harmony export metaSchema */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7222);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/normalize-pages.ts


var DEFAULT_PAGE_THEME = {
  breadcrumb: true,
  collapsed: false,
  footer: true,
  layout: "default",
  navbar: true,
  pagination: true,
  sidebar: true,
  timestamp: true,
  toc: true,
  typesetting: "default"
};
var pageThemeSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.strictObject({
  breadcrumb: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  collapsed: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  footer: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  layout: zod__WEBPACK_IMPORTED_MODULE_0__.z["enum"](["default", "full", "raw"]),
  navbar: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  pagination: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  sidebar: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  timestamp: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  toc: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  typesetting: zod__WEBPACK_IMPORTED_MODULE_0__.z["enum"](["default", "article"])
});
var displaySchema = zod__WEBPACK_IMPORTED_MODULE_0__.z["enum"](["normal", "hidden", "children"]);
var titleSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.string();
var linkItemSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.strictObject({
  href: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
  newWindow: zod__WEBPACK_IMPORTED_MODULE_0__.z.boolean(),
  title: titleSchema
});
var menuItemSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.strictObject({
  display: displaySchema.optional(),
  items: zod__WEBPACK_IMPORTED_MODULE_0__.z.record(linkItemSchema.partial({ href: true, newWindow: true })),
  title: titleSchema,
  type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("menu")
});
var separatorItemSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.strictObject({
  title: titleSchema,
  type: zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("separator")
});
var itemSchema = linkItemSchema.extend({
  display: displaySchema,
  theme: pageThemeSchema,
  title: titleSchema,
  type: zod__WEBPACK_IMPORTED_MODULE_0__.z["enum"](["page", "doc"])
}).deepPartial();
var metaSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().or(menuItemSchema).or(separatorItemSchema).or(itemSchema);
function extendMeta(meta = {}, fallback) {
  if (typeof meta === "string") {
    meta = { title: meta };
  }
  const theme = Object.assign({}, fallback.theme, meta.theme);
  return Object.assign({}, fallback, meta, { theme });
}
function findFirstRoute(items) {
  for (const item of items) {
    if (item.route)
      return item.route;
    if (item.children) {
      const route = findFirstRoute(item.children);
      if (route)
        return route;
    }
  }
}
function normalizePages({
  list,
  locale,
  defaultLocale,
  route,
  docsRoot = "",
  underCurrentDocsRoot = false,
  pageThemeContext = DEFAULT_PAGE_THEME
}) {
  let _meta;
  for (const item of list) {
    if (item.kind === "Meta") {
      if (item.locale === locale) {
        _meta = item.data;
        break;
      }
      _meta || (_meta = item.data);
    }
  }
  const meta = _meta || {};
  const metaKeys = Object.keys(meta);
  for (const key of metaKeys) {
    if (typeof meta[key] === "string") {
      meta[key] = {
        title: meta[key]
      };
    }
  }
  const directories = [];
  const flatDirectories = [];
  const docsDirectories = [];
  const flatDocsDirectories = [];
  const topLevelNavbarItems = [];
  let activeType;
  let activeIndex = 0;
  let activeThemeContext = pageThemeContext;
  let activePath = [];
  let metaKeyIndex = -1;
  const fallbackMeta = meta["*"] || {};
  delete fallbackMeta.title;
  delete fallbackMeta.href;
  const items = list.filter(
    (a) => (
      // not meta
      a.kind !== "Meta" && // not hidden routes
      !a.name.startsWith("_") && // locale matches, or fallback to default locale
      (!("locale" in a) || !a.locale || [locale, defaultLocale].includes(a.locale))
    )
  ).sort((a, b) => {
    const indexA = metaKeys.indexOf(a.name);
    const indexB = metaKeys.indexOf(b.name);
    if (indexA === -1 && indexB === -1)
      return a.name < b.name ? -1 : 1;
    if (indexA === -1)
      return 1;
    if (indexB === -1)
      return -1;
    return indexA - indexB;
  }).flatMap((item) => {
    const items2 = [];
    const index = metaKeys.indexOf(item.name);
    let extendedItem;
    if (index !== -1) {
      for (let i = metaKeyIndex + 1; i < index; i++) {
        const key = metaKeys[i];
        if (key !== "*") {
          items2.push({
            name: key,
            route: "#",
            ...meta[key]
          });
        }
      }
      metaKeyIndex = index;
      extendedItem = { ...meta[item.name], ...item };
    }
    items2.push(extendedItem || item);
    return items2;
  });
  for (let i = metaKeyIndex + 1; i < metaKeys.length; i++) {
    const key = metaKeys[i];
    if (key !== "*") {
      items.push({
        name: key,
        route: "#",
        ...meta[key]
      });
    }
  }
  for (let i = 0; i < items.length; i++) {
    const a = items[i];
    if (i + 1 < items.length && a.name === items[i + 1].name) {
      items[i + 1] = { ...items[i + 1], withIndexPage: true };
      if (a.children && !items[i + 1].children) {
        items[i + 1].children = a.children;
      }
      continue;
    }
    const extendedMeta = extendMeta(meta[a.name], fallbackMeta);
    const { display, type = "doc" } = extendedMeta;
    const extendedPageThemeContext = {
      ...pageThemeContext,
      ...extendedMeta.theme
    };
    const isCurrentDocsTree = route.startsWith(docsRoot);
    const normalizedChildren = a.children && normalizePages({
      list: a.children,
      locale,
      defaultLocale,
      route,
      docsRoot: type === "page" || type === "menu" ? a.route : docsRoot,
      underCurrentDocsRoot: underCurrentDocsRoot || isCurrentDocsTree,
      pageThemeContext: extendedPageThemeContext
    });
    const title = extendedMeta.title || type !== "separator" && a.name;
    const getItem = () => ({
      ...a,
      type,
      ...title && { title },
      ...display && { display },
      ...normalizedChildren && { children: [] }
    });
    const item = getItem();
    const docsItem = getItem();
    const pageItem = getItem();
    docsItem.isUnderCurrentDocsTree = isCurrentDocsTree;
    if (type === "separator") {
      item.isUnderCurrentDocsTree = isCurrentDocsTree;
    }
    if (a.route === route) {
      activePath = [item];
      activeType = type;
      activeThemeContext = {
        ...activeThemeContext,
        ...extendedPageThemeContext
      };
      switch (type) {
        case "page":
        case "menu":
          activeIndex = topLevelNavbarItems.length;
          break;
        case "doc":
          activeIndex = flatDocsDirectories.length;
      }
    }
    if (display === "hidden" && item.kind !== "Folder" || _constants_mjs__WEBPACK_IMPORTED_MODULE_1__/* .ERROR_ROUTES.has */ .hV.has(a.route)) {
      continue;
    }
    if (normalizedChildren) {
      if (normalizedChildren.activeIndex !== void 0 && normalizedChildren.activeType !== void 0) {
        activeThemeContext = normalizedChildren.activeThemeContext;
        activeType = normalizedChildren.activeType;
        activePath = [item, ...normalizedChildren.activePath];
        switch (activeType) {
          case "page":
          case "menu":
            activeIndex = topLevelNavbarItems.length + normalizedChildren.activeIndex;
            break;
          case "doc":
            activeIndex = flatDocsDirectories.length + normalizedChildren.activeIndex;
            break;
        }
        if (a.withIndexPage && type === "doc") {
          activeIndex++;
        }
      }
      switch (type) {
        case "page":
        case "menu":
          pageItem.children.push(...normalizedChildren.directories);
          docsDirectories.push(...normalizedChildren.docsDirectories);
          if (normalizedChildren.flatDirectories.length) {
            pageItem.firstChildRoute = findFirstRoute(
              normalizedChildren.flatDirectories
            );
            topLevelNavbarItems.push(pageItem);
          } else if (pageItem.withIndexPage) {
            topLevelNavbarItems.push(pageItem);
          }
          break;
        case "doc":
          if (Array.isArray(docsItem.children)) {
            docsItem.children.push(...normalizedChildren.docsDirectories);
          }
          if (item.withIndexPage && display !== "children") {
            flatDocsDirectories.push(docsItem);
          }
      }
      flatDirectories.push(...normalizedChildren.flatDirectories);
      flatDocsDirectories.push(...normalizedChildren.flatDocsDirectories);
      if (Array.isArray(item.children)) {
        item.children.push(...normalizedChildren.directories);
      }
    } else {
      flatDirectories.push(item);
      switch (type) {
        case "page":
        case "menu":
          topLevelNavbarItems.push(pageItem);
          break;
        case "doc":
          flatDocsDirectories.push(docsItem);
      }
    }
    if (type === "doc" && display === "children") {
      if (docsItem.children) {
        directories.push(...docsItem.children);
        docsDirectories.push(...docsItem.children);
      }
    } else {
      directories.push(item);
    }
    switch (type) {
      case "page":
      case "menu":
        docsDirectories.push(pageItem);
        break;
      case "doc":
        if (display !== "children") {
          docsDirectories.push(docsItem);
        }
        break;
      case "separator":
        docsDirectories.push(item);
    }
  }
  return {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    directories,
    flatDirectories,
    docsDirectories,
    flatDocsDirectories,
    topLevelNavbarItems
  };
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ setupNextraPage)
/* harmony export */ });
/* unused harmony export collectCatchAllRoutes */
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1043);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7222);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2462);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(609);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_2__]);
_layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/setup-page.ts




function isFolder(value) {
  return !!value && typeof value === "object" && value.type === "folder";
}
function normalizeMetaData(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (isFolder(value)) {
        const keyWithoutSlash = key.replace("/", "");
        return [
          keyWithoutSlash,
          value.title || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .pageTitleFromFilename */ .Zs)(keyWithoutSlash)
        ];
      }
      return [key, value || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .pageTitleFromFilename */ .Zs)(key)];
    })
  );
}
function collectCatchAllRoutes(parent, meta, isRootFolder = true) {
  if (isRootFolder) {
    collectCatchAllRoutes(
      parent,
      {
        kind: "Meta",
        data: meta.data,
        locale: meta.locale
      },
      false
    );
    meta.data = normalizeMetaData(meta.data);
    return;
  }
  for (const [key, value] of Object.entries(meta.data)) {
    if (!isFolder(value)) {
      if (key === "*") {
        continue;
      }
      parent.children.push({
        kind: "MdxPage",
        ...meta.locale && { locale: meta.locale },
        name: key,
        route: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .normalizePageRoute */ .Tz)(parent.route, key)
      });
      continue;
    }
    const routeWithoutSlashes = key.replace("/", "");
    const newParent = {
      kind: "Folder",
      name: routeWithoutSlashes,
      route: `${parent.route}/${routeWithoutSlashes}`,
      children: [
        {
          kind: "Meta",
          ...meta.locale && { locale: meta.locale },
          data: normalizeMetaData(value.items)
        }
      ]
    };
    parent.children.push(newParent);
    collectCatchAllRoutes(
      newParent,
      {
        kind: "Meta",
        data: value.items,
        locale: meta.locale
      },
      false
    );
  }
}
var cachedResolvedPageMap;
function setupNextraPage({
  pageNextRoute,
  pageOpts,
  nextraLayout,
  themeConfig,
  MDXContent,
  hot,
  pageOptsChecksum,
  dynamicMetaModules = []
}) {
  var _a;
  if (typeof window === "undefined") {
    globalThis.__nextra_resolvePageMap = async () => {
      if ( true && cachedResolvedPageMap) {
        return cachedResolvedPageMap;
      }
      const clonedPageMap = JSON.parse(
        JSON.stringify(__nextra_internal__.pageMap)
      );
      await Promise.all(
        dynamicMetaModules.map(
          async ([importMod, { metaObjectKeyPath, metaParentKeyPath }]) => {
            const mod = await importMod;
            const metaData = await mod.default();
            const meta = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(
              clonedPageMap,
              metaObjectKeyPath
            );
            meta.data = metaData;
            const parent = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(clonedPageMap, metaParentKeyPath);
            collectCatchAllRoutes(parent, meta);
          }
        )
      );
      return cachedResolvedPageMap = clonedPageMap;
    };
  }
  const __nextra_internal__ = globalThis[_a = _constants_mjs__WEBPACK_IMPORTED_MODULE_1__/* .NEXTRA_INTERNAL */ .eZ] || (globalThis[_a] = /* @__PURE__ */ Object.create(null));
  if (pageOpts.pageMap) {
    __nextra_internal__.pageMap = pageOpts.pageMap;
    __nextra_internal__.Layout = nextraLayout;
  } else {
    pageOpts = {
      ...pageOpts,
      pageMap: __nextra_internal__.pageMap,
      flexsearch: __nextra_internal__.flexsearch
    };
    themeConfig = __nextra_internal__.themeConfig;
  }
  pageOpts = {
    // @ts-ignore ignore "'frontMatter' is specified more than once" error to treeshake empty object `{}` for each compiled page
    frontMatter: {},
    ...pageOpts
  };
  __nextra_internal__.route = pageOpts.route;
  __nextra_internal__.context || (__nextra_internal__.context = /* @__PURE__ */ Object.create(null));
  __nextra_internal__.context[pageNextRoute] = {
    Content: MDXContent,
    pageOpts,
    themeConfig
  };
  if (false) {}
  return _layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mK": () => (/* binding */ SSGContext)
/* harmony export */ });
/* unused harmony exports DataContext, RemoteContent, useData, useSSG */
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9961);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9575);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote__WEBPACK_IMPORTED_MODULE_0__, _mdx__WEBPACK_IMPORTED_MODULE_2__]);
([next_mdx_remote__WEBPACK_IMPORTED_MODULE_0__, _mdx__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/ssg.tsx




var SSGContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
var useSSG = (key = "ssg") => useContext(SSGContext)?.[key];
var DataContext = (/* unused pure expression or super */ null && (SSGContext));
var useData = (/* unused pure expression or super */ null && (useSSG));
function RemoteContent({
  components: dynamicComponents
}) {
  const dynamicContext = useSSG("__nextra_dynamic_mdx");
  if (!dynamicContext) {
    throw new Error(
      "RemoteContent must be used together with the `buildDynamicMDX` API"
    );
  }
  const components = useMDXComponents();
  return /* @__PURE__ */ jsx(
    MDXRemote,
    {
      compiledSource: dynamicContext,
      components: { ...components, ...dynamicComponents }
    }
  );
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useInternals)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7222);
// src/use-internals.ts



function useInternals() {
  const __nextra_internal__ = globalThis[_constants_mjs__WEBPACK_IMPORTED_MODULE_2__/* .NEXTRA_INTERNAL */ .eZ];
  const { route } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const rerender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({})[1];
  if (false) {}
  const context = __nextra_internal__.context[route];
  if (!context) {
    throw new Error(
      `No content found for the current route. This is a Nextra bug.`
    );
  }
  return {
    context,
    Layout: __nextra_internal__.Layout
  };
}



/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6689),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ }),

/***/ 7222:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZW": () => (/* binding */ DEFAULT_LOCALE),
/* harmony export */   "eZ": () => (/* binding */ NEXTRA_INTERNAL),
/* harmony export */   "hV": () => (/* binding */ ERROR_ROUTES)
/* harmony export */ });
/* unused harmony exports CODE_BLOCK_FILENAME_REGEX, CWD, DEFAULT_CONFIG, DEFAULT_LOCALES, DYNAMIC_META_FILENAME, EXTERNAL_URL_REGEX, IS_PRODUCTION, LOCALE_REGEX, MARKDOWN_EXTENSIONS, MARKDOWN_EXTENSION_REGEX, MARKDOWN_URL_EXTENSION_REGEX, META_FILENAME, OFFICIAL_THEMES, PUBLIC_DIR */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
// src/constants.ts

var MARKDOWN_EXTENSION_REGEX = /\.mdx?$/;
var MARKDOWN_URL_EXTENSION_REGEX = /\.mdx?(?:(?=[#?])|$)/;
var IS_PRODUCTION = (/* unused pure expression or super */ null && ("production" === "production"));
var LOCALE_REGEX = /\.([a-z]{2}(-[A-Z]{2})?)$/;
var DEFAULT_LOCALE = "en-US";
var DEFAULT_CONFIG = {
  staticImage: true,
  flexsearch: {
    codeblocks: true
  },
  codeHighlight: true
};
var OFFICIAL_THEMES = (/* unused pure expression or super */ null && (["nextra-theme-docs", "nextra-theme-blog"]));
var META_FILENAME = "_meta.json";
var DYNAMIC_META_FILENAME = "_meta.js";
var CWD = process.cwd();
var MARKDOWN_EXTENSIONS = (/* unused pure expression or super */ null && (["md", "mdx"]));
var PUBLIC_DIR = path__WEBPACK_IMPORTED_MODULE_0__.join(CWD, "public");
var EXTERNAL_URL_REGEX = /^https?:\/\//;
var NEXTRA_INTERNAL = Symbol.for("__nextra_internal__");
var CODE_BLOCK_FILENAME_REGEX = /filename="([^"]+)"/;
var DEFAULT_LOCALES = (/* unused pure expression or super */ null && ([""]));
var ERROR_ROUTES = /* @__PURE__ */ new Set(["/404", "/500"]);



/***/ }),

/***/ 609:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tz": () => (/* binding */ normalizePageRoute),
/* harmony export */   "Zs": () => (/* binding */ pageTitleFromFilename)
/* harmony export */ });
/* unused harmony exports getDefault, hashFnv32a, isSerializable, normalizeMeta, parseFileName, sortPages, truthy */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var slash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2488);
/* harmony import */ var title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4090);
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7222);
// src/utils.ts




function parseFileName(filePath) {
  const { name, ext } = path.parse(filePath);
  const locale = name.match(LOCALE_REGEX)?.[1] || "";
  return {
    name: locale ? name.replace(LOCALE_REGEX, "") : name,
    locale,
    ext
  };
}
function truthy(value) {
  return !!value;
}
function normalizeMeta(meta) {
  return typeof meta === "string" ? { title: meta } : meta;
}
function normalizePageRoute(parentRoute, route) {
  return slash__WEBPACK_IMPORTED_MODULE_1__(path__WEBPACK_IMPORTED_MODULE_0__.join(parentRoute, route.replace(/^index$/, "")));
}
function pageTitleFromFilename(fileName) {
  return title__WEBPACK_IMPORTED_MODULE_2__(fileName.replace(/[-_]/g, " "));
}
function sortPages(pages, locale) {
  if (locale === "") {
    locale = void 0;
  }
  return pages.filter((item) => item.kind === "Folder" || item.locale === locale).map((item) => ({
    name: item.name,
    date: "frontMatter" in item && item.frontMatter?.date,
    title: "frontMatter" in item && item.frontMatter?.title || pageTitleFromFilename(item.name)
  })).sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (a.date) {
      return -1;
    }
    if (b.date) {
      return 1;
    }
    return a.title.localeCompare(b.title, locale, { numeric: true });
  }).map((item) => [item.name, item.title]);
}
function isSerializable(o) {
  try {
    JSON.stringify(o);
    return true;
  } catch (err) {
    return false;
  }
}
function hashFnv32a(str, seed = 2166136261) {
  let hval = seed;
  for (let i = 0; i < str.length; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return ("0000000" + (hval >>> 0).toString(16)).substring(-8);
}
function getDefault(module) {
  return module.default || module;
}



/***/ }),

/***/ 7587:
/***/ ((module) => {

"use strict";
module.exports = {"i8":"13.4.3"};

/***/ })

};
;
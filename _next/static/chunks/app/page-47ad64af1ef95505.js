(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 4741:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1822));


/***/ }),

/***/ 1822:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(7449);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6648);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(6063);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./components/GradientBG.js
// @ts-nocheck



function GradientBG(param) {
    let { children } = param;
    const canvasRef = (0,react.useRef)(null);
    const [context, setContext] = (0,react.useState)(null);
    const [pixels, setPixels] = (0,react.useState)([]);
    function Color(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
        this.dir = Math.random() > 0.5 ? -1 : 1;
        this.toString = function() {
            return "hsla(" + this.h + ", " + this.s + "%, " + this.l + "%, " + this.a + ")";
        };
    }
    function Pixel(x, y, w, h, color) {
        this.x = {
            c: x,
            min: 0,
            max: canvasRef.current.width,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.y = {
            c: y,
            min: 0,
            max: canvasRef.current.height,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.w = {
            c: w,
            min: 2,
            max: canvasRef.current.width,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.h = {
            c: h,
            min: 2,
            max: canvasRef.current.height,
            dir: Math.random() > 0.5 ? -1 : 1
        };
        this.color = color;
        this.direction = Math.random() > 0.1 ? -1 : 1;
        this.velocity = (Math.random() * 100 + 100) * 0.01 * this.direction;
    }
    function updatePixel(pixel) {
        if (pixel.x.c <= pixel.x.min || pixel.x.c >= pixel.x.max) {
            pixel.x.dir *= -1;
        }
        if (pixel.y.c <= pixel.y.min || pixel.y.c >= pixel.y.max) {
            pixel.y.dir *= -1;
        }
        if (pixel.w.c <= pixel.w.min || pixel.w.c >= pixel.w.max) {
            pixel.w.dir *= -1;
        }
        if (pixel.h.c <= pixel.h.min || pixel.h.c >= pixel.h.max) {
            pixel.h.dir *= -1;
        }
        if (pixel.color.a <= 0 || pixel.color.a >= 0.75) {
            pixel.color.dir *= -1;
        }
        pixel.x.c += 0.005 * pixel.x.dir;
        pixel.y.c += 0.005 * pixel.y.dir;
        pixel.w.c += 0.005 * pixel.w.dir;
        pixel.h.c += 0.005 * pixel.h.dir;
    }
    function renderPixel(pixel) {
        context.restore();
        context.fillStyle = pixel.color.toString();
        context.fillRect(pixel.x.c, pixel.y.c, pixel.w.c, pixel.h.c);
    }
    function paint() {
        if (canvasRef.current) {
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            for(let i = 0; i < pixels.length; i++){
                updatePixel(pixels[i]);
                renderPixel(pixels[i]);
            }
        }
    }
    (0,react.useEffect)(()=>{
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            setContext(ctx);
            const currentPixels = [
                new Pixel(1, 1, 3, 4, new Color(252, 70, 67, 0.8)),
                new Pixel(0, 0, 1, 1, new Color(0, 0, 98, 1)),
                new Pixel(0, 3, 2, 2, new Color(11, 100, 62, 0.8)),
                new Pixel(4, 0, 4, 3, new Color(190, 94, 75, 0.8)),
                new Pixel(3, 1, 1, 2, new Color(324, 98, 50, 0.1))
            ];
            setPixels(currentPixels);
        }
    }, []);
    (0,react.useEffect)(()=>{
        let animationFrameId;
        if (context) {
            const animate = ()=>{
                paint();
                animationFrameId = window.requestAnimationFrame(animate);
            };
            animate();
        }
        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [
        paint,
        pixels,
        context
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Home_module.background,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("canvas", {
                    className: Home_module.backgroundGradients,
                    width: "6",
                    height: "6",
                    ref: canvasRef
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: Home_module.container,
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./public/assets/hero-mina-logo.svg
/* harmony default export */ var hero_mina_logo = ({"src":"/04-zkapp-browser-ui//_next/static/media/hero-mina-logo.6b81fb56.svg","height":174,"width":191,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/assets/arrow-right-small.svg
/* harmony default export */ var arrow_right_small = ({"src":"/04-zkapp-browser-ui//_next/static/media/arrow-right-small.19aec210.svg","height":16,"width":16,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/o1js/dist/web/index.js
var web = __webpack_require__(337);
;// CONCATENATED MODULE: ../contracts/build/src/Add.js
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */ class Add extends web/* SmartContract */.C3 {
    init() {
        super.init();
        this.num.set((0,web/* Field */.gN)(1));
    }
    async update() {
        const currentState = this.num.getAndRequireEquals();
        const newState = currentState.add(2);
        this.num.set(newState);
    }
    constructor(){
        super(...arguments);
        this.num = (0,web/* State */.ZM)();
    }
}
__decorate([
    (0,web/* state */.SB)(web/* Field */.gN),
    __metadata("design:type", Object)
], Add.prototype, "num", void 0);
__decorate([
    web/* method */.UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Add.prototype, "update", null); //# sourceMappingURL=Add.js.map

;// CONCATENATED MODULE: ../contracts/build/src/index.js

 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./app/reactCOIServiceWorker.tsx
function loadCOIServiceWorker() {
    if ( true && window.location.hostname != "localhost") {
        const coi = window.document.createElement("script");
        coi.setAttribute("src", "/04-zkapp-browser-ui/coi-serviceworker.min.js"); // update if your repo name changes for 'npm run deploy' to work correctly
        window.document.head.appendChild(coi);
    }
}
loadCOIServiceWorker();


;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









// We've already deployed the Add contract on testnet at this address
// https://minascan.io/devnet/account/B62qnTDEeYtBHBePA4yhCt4TCgDtA4L2CGvK7PirbJyX4pKH8bmtWe5
const zkAppAddress = "B62qnTDEeYtBHBePA4yhCt4TCgDtA4L2CGvK7PirbJyX4pKH8bmtWe5";

function Home() {
    const zkApp = (0,react.useRef)(new Add(web/* PublicKey */.nh.fromBase58(zkAppAddress)));
    const [transactionLink, setTransactionLink] = (0,react.useState)(null);
    const [contractState, setContractState] = (0,react.useState)(null);
    const [error, setError] = (0,react.useState)(null);
    const [loading, setLoading] = (0,react.useState)(true);
    // fetch the zkapp state when the page loads
    (0,react.useEffect)(()=>{
        (async ()=>{
            web/* Mina */.No.setActiveInstance(web/* Mina */.No.Network("https://api.minascan.io/node/devnet/v1/graphql"));
            await (0,web/* fetchAccount */.$G)({
                publicKey: zkAppAddress
            });
            const num = zkApp.current.num.get();
            setContractState(num.toString());
            // Compile the contract so that o1js has the proving key required to execute contract calls
            console.log("Compiling Add contract to generate proving and verification keys");
            await Add.compile();
            setLoading(false);
        })();
    }, []);
    const updateZkApp = (0,react.useCallback)(async ()=>{
        setTransactionLink(null);
        setLoading(true);
        try {
            // Retrieve Mina provider injected by browser extension wallet
            const mina = window.mina;
            const walletKey = (await mina.requestAccounts())[0];
            console.log("Connected wallet address: " + walletKey);
            await (0,web/* fetchAccount */.$G)({
                publicKey: web/* PublicKey */.nh.fromBase58(walletKey)
            });
            // Execute a transaction locally on the browser
            const transaction = await web/* Mina */.No.transaction(async ()=>{
                console.log("Executing Add.update() locally");
                await zkApp.current.update();
            });
            // Prove execution of the contract using the proving key
            console.log("Proving execution of Add.update()");
            await transaction.prove();
            // Broadcast the transaction to the Mina network
            console.log("Broadcasting proof of execution to the Mina network");
            const { hash } = await mina.sendTransaction({
                transaction: transaction.toJSON()
            });
            // display the link to the transaction
            const transactionLink = "https://minascan.io/devnet/tx/" + hash;
            setTransactionLink(transactionLink);
        } catch (e) {
            console.error(e.message);
            let errorMessage = "";
            if (e.message.includes("Cannot read properties of undefined (reading 'requestAccounts')")) {
                errorMessage = "Is Auro installed?";
            } else if (e.message.includes("Please create or restore wallet first.")) {
                errorMessage = "Have you created a wallet?";
            } else if (e.message.includes("User rejected the request.")) {
                errorMessage = "Did you grant the app permission to connect?";
            } else {
                errorMessage = "An unknown error occurred.";
            }
            setError(errorMessage);
        } finally{
            setLoading(false);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((noop_head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Mina zkApp UI"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "built with o1js"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                        rel: "icon",
                        href: "/assets/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GradientBG, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                    className: (Home_module_default()).main,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (Home_module_default()).center,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                    href: "https://minaprotocol.com/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                        className: (Home_module_default()).logo,
                                        src: hero_mina_logo,
                                        alt: "Mina Logo",
                                        width: "191",
                                        height: "174",
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: (Home_module_default()).tagline,
                                    children: [
                                        "built with",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            className: (Home_module_default()).code,
                                            children: " o1js"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: (Home_module_default()).start,
                            children: [
                                "Get started by editing",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                    className: (Home_module_default()).code,
                                    children: " app/page.tsx"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (Home_module_default()).state,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            "Contract State: ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: (Home_module_default()).bold,
                                                children: contractState
                                            })
                                        ]
                                    }),
                                    error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: (Home_module_default()).error,
                                        children: [
                                            "Error: ",
                                            error
                                        ]
                                    }) : loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: "Loading..."
                                    }) : transactionLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                        href: transactionLink,
                                        className: (Home_module_default()).bold,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "View Transaction on MinaScan"
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: updateZkApp,
                                        className: (Home_module_default()).button,
                                        children: "Call Add.update()"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (Home_module_default()).grid,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "https://docs.minaprotocol.com/zkapps",
                                    className: (Home_module_default()).card,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "DOCS"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                                        src: arrow_right_small,
                                                        alt: "Mina Logo",
                                                        width: 16,
                                                        height: 16,
                                                        priority: true
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "Explore zkApps, how to build one, and in-depth references"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "https://docs.minaprotocol.com/zkapps/tutorials/hello-world",
                                    className: (Home_module_default()).card,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "TUTORIALS"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                                        src: arrow_right_small,
                                                        alt: "Mina Logo",
                                                        width: 16,
                                                        height: 16,
                                                        priority: true
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "Learn with step-by-step o1js tutorials"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "https://discord.gg/minaprotocol",
                                    className: (Home_module_default()).card,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "QUESTIONS"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                                        src: arrow_right_small,
                                                        alt: "Mina Logo",
                                                        width: 16,
                                                        height: 16,
                                                        priority: true
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "Ask questions on our Discord server"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "https://docs.minaprotocol.com/zkapps/how-to-deploy-a-zkapp",
                                    className: (Home_module_default()).card,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "DEPLOY"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                                        src: arrow_right_small,
                                                        alt: "Mina Logo",
                                                        width: 16,
                                                        height: 16,
                                                        priority: true
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "Deploy a zkApp to Testnet"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 6063:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"Home_main__VkIEL","background":"Home_background__nqUIs","backgroundGradients":"Home_backgroundGradients__6K9ld","container":"Home_container__d256j","tagline":"Home_tagline__q1jNE","start":"Home_start__3ARHr","code":"Home_code__VVrIr","grid":"Home_grid__AVljO","state":"Home_state__FiDi6","error":"Home_error__514Ji","bold":"Home_bold__Ib1jN","card":"Home_card__E5spL","center":"Home_center__O_TIN","logo":"Home_logo__IOQAX","content":"Home_content__tkQPU"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [357,917,327,971,23,744], function() { return __webpack_exec__(4741); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
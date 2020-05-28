(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{375:function(t,s,n){"use strict";n.r(s);var a=n(12),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"dependencies-and-the-window"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-and-the-window"}},[t._v("#")]),t._v(" Dependencies and the window")]),t._v(" "),n("h2",{attrs:{id:"boring-i-know"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#boring-i-know"}},[t._v("#")]),t._v(" Boring, I know")]),t._v(" "),n("p",[t._v("Some of you reading this are very experienced with opening up windows in Rust and probably have your favorite windowing library, but this guide is designed for everybody, so it's something that we need to cover. Luckily, you don't need to read this if you know what you're doing. One thing that you do need to know is that whatever windowing solution you use needs to support the "),n("a",{attrs:{href:"https://github.com/rust-windowing/raw-window-handle",target:"_blank",rel:"noopener noreferrer"}},[t._v("raw-window-handle"),n("OutboundLink")],1),t._v(" crate.")]),t._v(" "),n("h2",{attrs:{id:"what-crates-are-we-using"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-crates-are-we-using"}},[t._v("#")]),t._v(" What crates are we using?")]),t._v(" "),n("p",[t._v("For the beginner stuff, we're going to keep things very simple, we'll add things as we go, but I've listed the relevant "),n("code",[t._v("Cargo.toml")]),t._v(" bits below.")]),t._v(" "),n("div",{staticClass:"language-toml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-toml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("image")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.22"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("winit")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.20"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("wgpu")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.5.0"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("futures")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.3.4"')]),t._v("\n")])])]),n("p",[t._v("If you're on Windows, you can specify Vulkan as your desired backend instead of DirectX by removing the "),n("code",[t._v('wgpu = "0.5.0"')]),t._v(" and adding the following.")]),t._v(" "),n("div",{staticClass:"language-toml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-toml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("dependencies.wgpu")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("version")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.5.0"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("features")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vulkan"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),t._v(" "),n("h2",{attrs:{id:"the-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-code"}},[t._v("#")]),t._v(" The code")]),t._v(" "),n("p",[t._v("There's not much going on here yet, so I'm just going to post the code in full. Just paste this into you're "),n("code",[t._v("main.rs")]),t._v(" or equivalent.")]),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" winit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("EventLoop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ControlFlow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WindowBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" event_loop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EventLoop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" window "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WindowBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("move")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token closure-params"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" control_flow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" event "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("WindowEvent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ref")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                window_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" window_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" event "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                WindowEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CloseRequested "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("control_flow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ControlFlow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Exit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                WindowEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("KeyboardInput "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        KeyboardInput "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ElementState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Pressed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            virtual_keycode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Some")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VirtualKeyCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Escape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("control_flow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ControlFlow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Exit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        _ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                _ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            _ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("All this does is create a window, and keep it open until until user closes it, or presses escape. Next tutorial we'll actually start using wgpu!")]),t._v(" "),n("AutoGithubLink")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
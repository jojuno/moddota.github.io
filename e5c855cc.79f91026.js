(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var i=n(2),a=(n(0),n(177));n(178),n(179);const r={title:"Custom Minimap Icons",author:"Noya",steamId:"76561198046984233",date:"11.11.2015"},o={id:"assets/custom-minimap-icons",isDocsHomePage:!1,title:"Custom Minimap Icons",description:"Here is a quick and simple step by step guide on how to make and use your own minimap icons for creatures",source:"@site/_articles/assets/custom-minimap-icons.md",permalink:"/assets/custom-minimap-icons",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/custom-minimap-icons.md",sidebar:"tutorials",previous:{title:"Extracting and Compiling VTEX files",permalink:"/assets/extracting-and-compiling-vtex-files"},next:{title:"Useful Console Commands",permalink:"/tools/useful-console-commands"}},c=[{value:"Step 1: Get the files",id:"step-1-get-the-files",children:[]},{value:"Step 2: Edit the files",id:"step-2-edit-the-files",children:[{value:"PSD Image",id:"psd-image",children:[]},{value:"VMAT Material",id:"vmat-material",children:[]},{value:"Texture KV File",id:"texture-kv-file",children:[]},{value:"Step 3: Move the files",id:"step-3-move-the-files",children:[]},{value:"Step 4: Compile and check",id:"step-4-compile-and-check",children:[]},{value:"Step 5: Set your unit to use the new icon",id:"step-5-set-your-unit-to-use-the-new-icon",children:[]},{value:"6. Try it ingame",id:"6-try-it-ingame",children:[]}]}],p={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here is a quick and simple step by step guide on how to make and use your own minimap icons for creatures"),Object(a.b)("h2",{id:"step-1-get-the-files"},"Step 1: Get the files"),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://moddota.com/resources/minimap_icon.zip"}),"minimap_icon.zip")," - From the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://moddota.com/forums/resources"}),"Resources page")),Object(a.b)("p",null,"This contains the following files:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"addon_hud_textures.txt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"vgui/hud/minimap_icon.txt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"vgui/hud/minimap_icon.vmat")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"vgui/hud/minimap_icon.psd"))),Object(a.b)("p",null,"addon_hud_textures is an unique file to define the paths for every custom icon."),Object(a.b)("p",null,"The 3 minimap_icon files are used together, and should be renamed to the name your future icon, like ",Object(a.b)("em",{parentName:"p"},"minimap_questgiver")," or ",Object(a.b)("em",{parentName:"p"},"boss_kappa"),"."),Object(a.b)("h2",{id:"step-2-edit-the-files"},"Step 2: Edit the files"),Object(a.b)("h3",{id:"psd-image"},"PSD Image"),Object(a.b)("p",null,"Use a graphic editor such as Photoshop or GIMP to edit the PSD file. "),Object(a.b)("p",null,"In the example source file, I quickly made this transparent image from ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://i.imgur.com/x3L74Hw.png"}),"this source"),":"),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/78Z3kaV.png",alt:"img"}))),Object(a.b)("p",null,"The suggested image size is ",Object(a.b)("strong",{parentName:"p"},"64x64"),".",Object(a.b)("br",null),"\nIf you want to use a different image size it ",Object(a.b)("strong",{parentName:"p"},"must be a power of two"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Important"),": You need to have an Alpha layer filled with the transparent figure you want to display:"),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/lhQL0/81b3632bad.png",alt:"img"}))),Object(a.b)("p",null,"For better results, add strong black borders to the image as an outline (and remember to update the Alpha layer accordingly)."),Object(a.b)("h3",{id:"vmat-material"},"VMAT Material"),Object(a.b)("p",null,"Open the vmat with any code editor and make sure to change minimap_icon.psd for the name of your choice. Keep the rest unchanged"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'"Layer0"\n{\n    "Shader"            "ui.vfx"\n    "F_STENCIL_MASKING" "1"\n    "Texture"           "materials/vgui/hud/minimap_icon.psd" //EDIT THIS\n    "F_TRANSLUCENT"     "1"\n}\n')),Object(a.b)("h3",{id:"texture-kv-file"},"Texture KV File"),Object(a.b)("p",null,"Same process in the addon_hud_textures.txt file"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'""\n{\n    "TextureData"\n    {\n        "minimap_icon" //EDIT THIS\n        {\n            "file"     "materials/vgui/hud/minimap_icon.vmat" //EDIT THIS\n            "x"        "0"\n            "y"        "0"\n            "width"    "64"\n            "height"   "64"\n        }\n    }\n}\n')),Object(a.b)("p",null,"For more icons, just copy the minimap_icon block again with another name inside TextureData"),Object(a.b)("h3",{id:"step-3-move-the-files"},"Step 3: Move the files"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"minimap_icon")," files go in ",Object(a.b)("strong",{parentName:"p"},"content"),"/dota_addons/YOUR_ADDON/materials/",Object(a.b)("strong",{parentName:"p"},"vgui/hud/"),". ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"addon_hud_textures.txt")," file goes in ",Object(a.b)("strong",{parentName:"p"},"content"),"/dota_addons/YOUR_ADDON/scripts/"))),Object(a.b)("h3",{id:"step-4-compile-and-check"},"Step 4: Compile and check"),Object(a.b)("p",null,"Go into the asset browser, write the name of your icon, open the vmat by double clicking on it (this will compile it)."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/lhRLL/31d63b48d9.jpg",alt:"img"}))),Object(a.b)("h3",{id:"step-5-set-your-unit-to-use-the-new-icon"},"Step 5: Set your unit to use the new icon"),Object(a.b)("p",null,"In the unit definition, add these lines:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'"MinimapIcon"        "minimap_icon"\n"MinimapIconSize"    "1000"\n"MinimapDisableTint" "1"\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MinimapIconSize")," determines the relative size of the minimap icon, while ",Object(a.b)("inlineCode",{parentName:"p"},"MinimapDisableTint")," can be 0 or omitted if you want the creature to use different team colors."),Object(a.b)("h3",{id:"6-try-it-ingame"},"6. Try it ingame"),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/lhQFp/37192e1e63.jpg",alt:"img"}))),Object(a.b)("hr",null))}l.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=i,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||r;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),a=n.n(i);function r({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0),a=n.n(i);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);
!function(){"use strict";var e,t={656:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components;const r=()=>(0,t.createElement)(a.Icon,{icon:()=>(0,t.createElement)("svg",{width:"43",height:"42",viewBox:"0 0 43 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M18.8714 0.737632L18.8714 31.6697L4.43058 17.4618L0.788085 21.071L21.4548 41.4043L42.1214 21.071L38.4789 17.4872L24.0381 31.6697L24.0381 0.737632L18.8714 0.737632Z",fill:"#FB1F40"}))}),c=[["core/gallery",{}]];(0,e.registerBlockType)("create-block/social-proof",{edit:function(e){let{attributes:o,setAttributes:i}=e;const{title_black:s,title_red:u}=o,m=(0,l.useBlockProps)({className:"alignfull social--proof"});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,{key:"setting"},(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Block Settings","guten-block"),initialOpen:!0},(0,t.createElement)(a.TextControl,{label:(0,n.__)("Heading Line 1","guten-block"),placeholder:(0,n.__)("Heading Line 1","guten-block"),type:"text",value:s,onChange:e=>i({title_black:e})}),(0,t.createElement)(a.TextControl,{label:(0,n.__)("Heading Line 2","guten-block"),placeholder:(0,n.__)("Heading Line 2","guten-block"),type:"text",value:u,onChange:e=>i({title_red:e})}))),(0,t.createElement)("section",m,(0,t.createElement)("div",{className:"gradient--bg"}),(0,t.createElement)("div",{className:"container"},(0,t.createElement)("span",{className:"goto--next"},(0,t.createElement)(r,null)),(0,t.createElement)("h1",{className:"section--heading"},s," ",(0,t.createElement)("span",{class:"color--red"},u," ")),(0,t.createElement)("div",{className:"social--gallery"},(0,t.createElement)(l.InnerBlocks,{template:c,templateLock:"all"})))))},save:function(e){let{attributes:n}=e;const{title_black:a,title_red:c}=n;return(0,t.createElement)("section",{className:"social--proof alignfull"},(0,t.createElement)("div",{className:"gradient--bg"}),(0,t.createElement)("div",{className:"container"},(0,t.createElement)("span",{className:"goto--next"},(0,t.createElement)(r,null)),(0,t.createElement)("h1",{className:"section--heading"},a," ",(0,t.createElement)("span",{class:"color--red"},c)),(0,t.createElement)("div",{className:"social--gallery"},(0,t.createElement)(l.InnerBlocks.Content,null))))}})}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,n,a,r){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],r=e[u][2];for(var o=!0,i=0;i<n.length;i++)(!1&r||c>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[i])}))?n.splice(i--,1):(o=!1,r<c&&(c=r));if(o){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,c=n[0],o=n[1],i=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(a in o)l.o(o,a)&&(l.m[a]=o[a]);if(i)var u=i(l)}for(t&&t(n);s<c.length;s++)r=c[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},n=self.webpackChunkguten_block=self.webpackChunkguten_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=l.O(void 0,[431],(function(){return l(656)}));a=l.O(a)}();
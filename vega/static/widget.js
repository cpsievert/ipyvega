define(["@jupyter-widgets/base","nbextensions/jupyter-vega/index"],((e,t)=>(()=>{"use strict";var n={891:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function c(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VegaWidget=void 0;const r=n(612),o=n(563);class s extends r.DOMWidgetView{constructor(){super(...arguments),this.viewElement=document.createElement("div"),this.errorElement=document.createElement("div")}render(){return i(this,void 0,void 0,(function*(){this.el.appendChild(this.viewElement),this.errorElement.style.color="red",this.el.appendChild(this.errorElement);const e=()=>i(this,void 0,void 0,(function*(){const e=JSON.parse(this.model.get("_spec_source")),t=JSON.parse(this.model.get("_opt_source"));if(null!=e)try{const n=yield o.vegaEmbed(this.viewElement,e,Object.assign({loader:{http:{credentials:"same-origin"}}},t));this.result&&this.result.finalize(),this.result=n,this.send({type:"display"})}catch(e){this.result&&this.result.finalize(),console.error(e)}})),t=e=>i(this,void 0,void 0,(function*(){const t=this.result;if(null==t)throw new Error("Internal error: no view attached to widget");const n=new Function("datum","return ("+(e.remove||"false")+")"),i=e.insert||[],r=t.view.changeset().remove(n).insert(i);yield t.view.change(e.key,r).runAsync()})),n=e=>i(this,void 0,void 0,(function*(){for(const n of e.updates)yield t(n)}));this.model.on("change:_spec_source",e),this.model.on("change:_opt_source",e),this.model.on("msg:custom",(e=>{const t=function(e){return"update"!=e.type?null:e}(e);null!=t&&n(t).catch((e=>{this.errorElement.textContent=String(e),console.error(e)}))})),yield e()}))}}t.VegaWidget=s},612:t=>{t.exports=e},563:e=>{e.exports=t}},i={};return function e(t){var r=i[t];if(void 0!==r)return r.exports;var o=i[t]={exports:{}};return n[t].call(o.exports,o,o.exports,e),o.exports}(891)})()));
//# sourceMappingURL=widget.js.map
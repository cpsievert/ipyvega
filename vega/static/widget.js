define(["@jupyter-widgets/base","jupyter-vega"],((e,t)=>(()=>{"use strict";var i={412:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MODULE_NAME=t.MODULE_VERSION=void 0;const o=i(147);t.MODULE_VERSION=o.version,t.MODULE_NAME=o.name},891:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(s,n){function r(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VegaWidget=t.VegaModel=void 0;const s=i(146),n=i(412),r=i(407);class a extends s.DOMWidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:a.model_name,_model_module:a.model_module,_model_module_version:a.model_module_version,_view_name:a.view_name,_view_module:a.view_module,_view_module_version:a.view_module_version})}}t.VegaModel=a,a.serializers=Object.assign({},s.DOMWidgetModel.serializers),a.model_name="VegaModel",a.model_module=n.MODULE_NAME,a.model_module_version=n.MODULE_VERSION,a.view_name="VegaWidget",a.view_module=n.MODULE_NAME,a.view_module_version=n.MODULE_VERSION;class l extends s.DOMWidgetView{constructor(){super(...arguments),this.viewElement=document.createElement("div"),this.errorElement=document.createElement("div")}render(){return o(this,void 0,void 0,(function*(){this.el.appendChild(this.viewElement),this.errorElement.style.color="red",this.el.appendChild(this.errorElement);const e=()=>o(this,void 0,void 0,(function*(){const e=JSON.parse(this.model.get("_spec_source")),t=JSON.parse(this.model.get("_opt_source")||"{}");if(null!=e)try{const i=yield(0,r.vegaEmbed)(this.viewElement,e,Object.assign({loader:{http:{credentials:"same-origin"}}},t));this.result&&this.result.finalize(),this.result=i,this.send({type:"display"})}catch(e){this.result&&this.result.finalize(),console.error(e)}})),t=e=>o(this,void 0,void 0,(function*(){const t=this.result;if(null==t)throw new Error("Internal error: no view attached to widget");const i=new Function("datum","return ("+(e.remove||"false")+")"),o=e.insert||[],s=t.view.changeset().remove(i).insert(o);yield t.view.change(e.key,s).runAsync()})),i=e=>o(this,void 0,void 0,(function*(){for(const i of e.updates)yield t(i)}));this.model.on("change:_spec_source",e),this.model.on("change:_opt_source",e),this.model.on("msg:custom",(e=>{const t=function(e){return"update"!=e.type?null:e}(e);null!=t&&i(t).catch((e=>{this.errorElement.textContent=String(e),console.error(e)}))})),yield e()}))}}t.VegaWidget=l},146:t=>{t.exports=e},407:e=>{e.exports=t},147:e=>{e.exports=JSON.parse('{"name":"jupyter-vega","version":"3.5.0","description":"IPython/Jupyter notebook module for [Vega](https://vega.github.io/vega), and [Vega-Lite](https://vega.github.io/vega-lite).","repository":{"type":"git","url":"git+https://github.com/vega/ipyvega.git"},"author":"","license":"BSD-3-Clause","bugs":{"url":"https://github.com/vega/ipyvega/issues"},"homepage":"https://github.com/vega/ipyvega#readme","scripts":{"format":"prettier --write \'src/*.ts\'","lint":"prettier --check \'src/*.ts\'","build":"webpack --mode production","watch":"webpack --mode development --watch"},"dependencies":{"vega":"5.21.0","vega-lite":"4.17.0","vega-embed":"^6.20.5","@jupyter-widgets/base":"4.0.0","@types/webpack-env":"*"},"devDependencies":{"filemanager-webpack-plugin":"^6.1.7","prettier":"^2.5.1","typescript":"^4.5.4","ts-loader":"^9.2.6","webpack":"^5.66.0","webpack-cli":"^4.9.1"},"files":["dist","src","package.json","tsconfig.json","webpack.config.js","yarn.lock"]}')}},o={};return function e(t){var s=o[t];if(void 0!==s)return s.exports;var n=o[t]={exports:{}};return i[t].call(n.exports,n,n.exports,e),n.exports}(891)})()));
//# sourceMappingURL=widget.js.map
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/dom-construct dojo/_base/array dojo/_base/lang dojo/Deferred dojo/promise/all dojo/aspect esri/request ./LayerInfoForDefault ../utils".split(" "),function(m,e,k,f,n,p,q,r,t,u){return m(t,{constructor:function(){this._addImageServiceLayerType()},_addImageServiceLayerType:function(){this.layerObject.type=!this.layerObject.serviceDataType||"esriImageServiceDataTypeVector-UV"!==this.layerObject.serviceDataType&&"esriImageServiceDataTypeVector-MagDir"!==this.layerObject.serviceDataType?
"ArcGISImageServiceLayer":"ArcGISImageServiceVectorLayer"},_initLegendsNode:function(a){10.2<=this.layerObject.version?this._legendRequestServer().then(f.hitch(this,function(b){e.empty(a);k.forEach(b.layers,function(h){k.forEach(h.legend,function(c){if("\x3call other values\x3e"!==c.label){var d=e.create("div",{"class":"legend-div"},a),g=e.create("div",{"class":"legend-symbol jimu-float-leading",style:"width:50px;height:50px;position:relative"},d),l=null;l=c.imageData?"data:"+c.contentType+";base64,"+
c.imageData:c.url;e.create("img",{"class":"legend-symbol-image",style:"overflow:auto;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0",src:l},g);e.create("div",{"class":"legend-label jimu-float-leading",innerHTML:u.sanitizeHTML(c.label)||" "},d)}},this)},this)}),f.hitch(this,function(){e.empty(a)})):e.empty(a)},_legendRequestServer:function(){var a=this.layerObject.url+"/legend",b={f:"json"};this.layerObject._params.bandIds&&(b.bandIds=this.layerObject._params.bandIds);this.layerObject._params.renderingRule&&
(b.renderingRule=this.layerObject._params.renderingRule);return r({url:a,content:b,handleAs:"json",callbackParamName:"callback"})},getSupportTableInfo:function(){var a=new n,b={isSupportedLayer:!1,isSupportQuery:!1,layerType:null},h=this.getLayerType(),c=this.getLayerObject();p({type:h,layerObject:c}).then(f.hitch(this,function(d){var g=d.type;d=d.layerObject;b.layerType=g;0<=this._getLayerTypesOfSupportTable().indexOf(g)&&(b.isSupportedLayer=!0);d.capabilities&&0<=d.capabilities.indexOf("Catalog")?
b.isSupportQuery=!0:b.isSupportedLayer=!1;a.resolve(b)}),function(){a.resolve(b)});return a},_getServiceDefinition:function(){var a=this.getUrl();return this._serviceDefinitionBuffer.getRequest(this.subId).request(a)},_bindEvent:function(){this.inherited(arguments);if(this.layerObject&&!this.layerObject.empty){var a=q.after(this.layerObject,"setRenderingRule",f.hitch(this,this._onRendererChanged));this._eventHandles.push(a)}}})});
﻿/*
    *
    * Wijmo Library 5.20171.301
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.grid","wijmo/wijmo","wijmo/wijmo.grid.detail"],function(n,t,i,r,u){"use strict";var e,s,o,f;Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.grid=window.wijmo.grid||{};window.wijmo.grid.detail=u,function(n){n[n.Code=0]="Code";n[n.Selection=1]="Selection";n[n.ExpandSingle=2]="ExpandSingle";n[n.ExpandMulti=3]="ExpandMulti"}(e=t.DetailVisibilityMode||(t.DetailVisibilityMode={}));s=function(){function n(n,t){var i=this;this._mode=e.ExpandSingle;this._animated=!1;this._g=n;n.mergeManager=new o(n);n.rowHeaders.hostElement.addEventListener('click',this._hdrClick.bind(this));n.formatItem.addHandler(this._formatItem,this);n.selectionChanged.addHandler(this._selectionChanged,this);n.resizedRow.addHandler(this._resizedRow,this);n.loadingRows.addHandler(function(){i.hideDetail()});n.draggingRow.addHandler(function(n,t){t.row<n.rows.length-1&&n.rows[t.row+1]instanceof f&&(t.cancel=!0,i.hideDetail(t.row))});n.formatItem.addHandler(function(n,t){if(t.panel==n.cells){var i=n.rows[t.row];i instanceof f&&(t.cell.style.left='0')}});t&&r.copy(this,t)}return Object.defineProperty(n.prototype,"grid",{get:function(){return this._g},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"detailVisibilityMode",{get:function(){return this._mode},set:function(n){n!=this._mode&&(this._mode=r.asEnum(n,e),this.hideDetail(),this._g.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxHeight",{get:function(){return this._maxHeight},set:function(n){this._maxHeight=r.asNumber(n,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isAnimated",{get:function(){return this._animated},set:function(n){n!=this._animated&&(this._animated=r.asBoolean(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"createDetailCell",{get:function(){return this._createDetailCellFn},set:function(n){this._createDetailCellFn=r.asFunction(n,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disposeDetailCell",{get:function(){return this._disposeDetailCellFn},set:function(n){this._disposeDetailCellFn=r.asFunction(n,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"rowHasDetail",{get:function(){return this._rowHasDetailFn},set:function(n){this._rowHasDetailFn=r.asFunction(n,!0)},enumerable:!0,configurable:!0}),n.prototype.isDetailVisible=function(n){var t=this._g.rows;return(n=this._toIndex(n),t[n]instanceof f)?!0:n<t.length-1&&t[n+1]instanceof f?!0:!1},n.prototype.isDetailAvailable=function(n){var t=this._g.rows;return n=this._toIndex(n),this._hasDetail(n)},n.prototype.hideDetail=function(n){var t=this._g.rows,i,u;if(n==null){for(i=0;i<t.length;i++)t[i]instanceof f&&this.hideDetail(i);return}n=this._toIndex(n);!(t[n]instanceof f)&&n<t.length-1&&t[n+1]instanceof f&&n++;u=t[n];u instanceof f&&(this.disposeDetailCell&&this.disposeDetailCell(u),r.Control.disposeAll(u.detail),t.removeAt(n))},n.prototype.showDetail=function(n,t){var s,i,h,c,u,e,o;if(t===void 0&&(t=!1),s=this._g,i=s.rows,n=this._toIndex(n),n>0&&i[n]instanceof f&&n--,t){for(h=s.selection,c=!1,u=0;u<i.length-1;u++)u!=n&&i[u+1]instanceof f&&(this.hideDetail(u),u<n&&n--,u<h.row&&(h.row--,h.row2--,c=!0));c&&s.select(h,!1)}!this.isDetailVisible(n)&&this._hasDetail(n)&&(e=new f(i[n]),e.detail=this._createDetailCell(i[n]),e.detail&&(this._animated?(o=e.detail.style,o.transform='translateY(-100%)',o.opacity='0',i.insert(n+1,e),r.animate(function(t){t<1?(o.transform='translateY('+(-(1-t)*100).toFixed(0)+'%)',o.opacity=(t*t).toString()):(o.transform='',o.opacity='',r.Control.invalidateAll(e.detail),s.scrollIntoView(n,-1))})):(i.insert(n+1,e),s.scrollIntoView(n,-1))))},n.prototype._toIndex=function(n){return n instanceof i.Row&&(n=n.index),r.asNumber(n,!1,!0)},n.prototype._hdrClick=function(n){var r,t,u;if(!n.defaultPrevented)switch(this._mode){case e.ExpandMulti:case e.ExpandSingle:r=this._g;t=r.hitTest(n);t.row>-1&&(u=r.rows[t.row],this.isDetailVisible(t.row)?this.hideDetail(t.row):(r.select(new i.CellRange(t.row,0,t.row,r.columns.length-1)),this.showDetail(t.row,this._mode==e.ExpandSingle)),n.preventDefault())}},n.prototype._selectionChanged=function(n){var t=this;this._mode==e.Selection&&(this._toSel&&clearTimeout(this._toSel),this._toSel=setTimeout(function(){n.selection.row>-1?t.showDetail(n.selection.row,!0):t.hideDetail()},300))},n.prototype._formatItem=function(n,t){var u=this._g,i=t.panel.rows[t.row],h,o,s,c;t.panel==u.cells&&i instanceof f&&i.detail!=null&&(r.addClass(t.cell,'wj-detail'),t.cell.textContent='',t.cell.style.textAlign='',t.cell.appendChild(i.detail),i.height==null?(r.Control.refreshAll(t.cell),h=getComputedStyle(t.cell),o=i.detail.scrollHeight+parseInt(h.paddingTop)+parseInt(h.paddingBottom),this._maxHeight>0&&o>this._maxHeight&&(o=this._maxHeight),i.height=o,i.detail.style.height||(i.detail.style.height='100%'),s=i.detail.querySelector('.wj-flexgrid'),s&&!s.style.height&&(s.style.height='100%')):setTimeout(function(){r.Control.refreshAll(i.detail)}));(this._mode==e.ExpandMulti||this._mode==e.ExpandSingle)&&t.panel==u.rowHeaders&&t.col==0&&this._hasDetail(t.row)&&(c=t.row<u.rows.length-1&&u.rows[t.row+1]instanceof f,t.cell.innerHTML=c?'<span class="wj-glyph-minus"></span>':'<span class="wj-glyph-plus"></span>')},n.prototype._resizedRow=function(n,t){var i=t.panel.rows[t.row];i instanceof f&&i.detail&&r.Control.refreshAll(i.detail)},n.prototype._hasVisibleDetail=function(n){return n instanceof f||n instanceof i.GroupRow||n instanceof i._NewRowTemplate?!1:!0},n.prototype._hasDetail=function(n){return r.isFunction(this._rowHasDetailFn)?this._rowHasDetailFn(this._g.rows[n]):!0},n.prototype._createDetailCell=function(n,t){return this.createDetailCell?this.createDetailCell(n,t):null},n}();t.FlexGridDetailProvider=s;o=function(n){function t(t){return n.call(this,t)||this}return __extends(t,n),t.prototype.getMergedRange=function(t,r,u,e){e===void 0&&(e=!0);switch(t.cellType){case i.CellType.Cell:if(t.rows[r]instanceof f)return new i.CellRange(r,0,r,t.columns.length-1);break;case i.CellType.RowHeader:if(t.rows[r]instanceof f)return new i.CellRange(r-1,u,r,u);if(r<t.rows.length-1&&t.rows[r+1]instanceof f)return new i.CellRange(r,u,r+1,u)}return n.prototype.getMergedRange.call(this,t,r,u,e)},t}(i.MergeManager);t.DetailMergeManager=o;f=function(n){function t(){var t=n.call(this)||this;return t.isReadOnly=!0,t}return __extends(t,n),Object.defineProperty(t.prototype,"detail",{get:function(){return this._detail},set:function(n){this._detail=n},enumerable:!0,configurable:!0}),t}(i.Row);t.DetailRow=f})
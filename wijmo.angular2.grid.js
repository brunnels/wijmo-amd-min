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
var __extends=this && this.__extends || function()
{
var extendStatics=Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b)
{
d.__proto__ = b
} || function(d, b)
{
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p])
};
return function(d, b)
{
function __()
{
this.constructor = d
}
extendStatics(d, b);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
}
}();
define(["require", "exports", "wijmo/wijmo.grid", "wijmo/wijmo", "@angular/core", "@angular/core", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(require, exports, wjcGrid, wjcCore, core_1, core_2, core_3, common_1, forms_1, wijmo_angular2_directiveBase_1)
{
"use strict";
function tryGetModuleWijmoInput()
{
var m1;
return (m1 = window.wijmo) && m1.input
}
var WjFlexGrid,
WjFlexGridColumn,
WjFlexGridCellTemplate,
CellTemplateType,
DirectiveCellFactory,
moduleExports,
WjGridModule;
Object.defineProperty(exports, "__esModule", {value: !0});
exports.wjFlexGridMeta = {
selector: 'wj-flex-grid', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'newRowAtTop', 'allowAddNew', 'allowDelete', 'allowDragging', 'allowMerging', 'allowResizing', 'allowSorting', 'autoSizeMode', 'autoGenerateColumns', 'childItemsPath', 'groupHeaderFormat', 'headersVisibility', 'showSelectedHeaders', 'showMarquee', 'itemFormatter', 'isReadOnly', 'imeEnabled', 'mergeManager', 'selectionMode', 'showGroups', 'showSort', 'showAlternatingRows', 'showErrors', 'validateEdits', 'treeIndent', 'itemsSource', 'autoClipboard', 'frozenRows', 'frozenColumns', 'deferResizing', 'sortRowIndex', 'stickyHeaders', 'preserveSelectedState', 'preserveOutlineState', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'beginningEditNg: beginningEdit', 'cellEditEndedNg: cellEditEnded', 'cellEditEndingNg: cellEditEnding', 'prepareCellForEditNg: prepareCellForEdit', 'formatItemNg: formatItem', 'resizingColumnNg: resizingColumn', 'resizedColumnNg: resizedColumn', 'autoSizingColumnNg: autoSizingColumn', 'autoSizedColumnNg: autoSizedColumn', 'draggingColumnNg: draggingColumn', 'draggingColumnOverNg: draggingColumnOver', 'draggedColumnNg: draggedColumn', 'sortingColumnNg: sortingColumn', 'sortedColumnNg: sortedColumn', 'resizingRowNg: resizingRow', 'resizedRowNg: resizedRow', 'autoSizingRowNg: autoSizingRow', 'autoSizedRowNg: autoSizedRow', 'draggingRowNg: draggingRow', 'draggingRowOverNg: draggingRowOver', 'draggedRowNg: draggedRow', 'deletingRowNg: deletingRow', 'loadingRowsNg: loadingRows', 'loadedRowsNg: loadedRows', 'rowEditStartingNg: rowEditStarting', 'rowEditStartedNg: rowEditStarted', 'rowEditEndingNg: rowEditEnding', 'rowEditEndedNg: rowEditEnded', 'rowAddedNg: rowAdded', 'groupCollapsedChangedNg: groupCollapsedChanged', 'groupCollapsedChangingNg: groupCollapsedChanging', 'itemsSourceChangedNg: itemsSourceChanged', 'selectionChangingNg: selectionChanging', 'selectionChangedNg: selectionChanged', 'scrollPositionChangedNg: scrollPositionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', 'updatingLayoutNg: updatingLayout', 'updatedLayoutNg: updatedLayout', 'pastingNg: pasting', 'pastedNg: pasted', 'pastingCellNg: pastingCell', 'pastedCellNg: pastedCell', 'copyingNg: copying', 'copiedNg: copied', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjFlexGrid = function(_super)
{
function WjFlexGrid(elRef, injector, parentCmp, cdRef)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.beginningEditNg = new core_1.EventEmitter(!1), _this.cellEditEndedNg = new core_1.EventEmitter(!1), _this.cellEditEndingNg = new core_1.EventEmitter(!1), _this.prepareCellForEditNg = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.resizingColumnNg = new core_1.EventEmitter(!1), _this.resizedColumnNg = new core_1.EventEmitter(!1), _this.autoSizingColumnNg = new core_1.EventEmitter(!1), _this.autoSizedColumnNg = new core_1.EventEmitter(!1), _this.draggingColumnNg = new core_1.EventEmitter(!1), _this.draggingColumnOverNg = new core_1.EventEmitter(!1), _this.draggedColumnNg = new core_1.EventEmitter(!1), _this.sortingColumnNg = new core_1.EventEmitter(!1), _this.sortedColumnNg = new core_1.EventEmitter(!1), _this.resizingRowNg = new core_1.EventEmitter(!1), _this.resizedRowNg = new core_1.EventEmitter(!1), _this.autoSizingRowNg = new core_1.EventEmitter(!1), _this.autoSizedRowNg = new core_1.EventEmitter(!1), _this.draggingRowNg = new core_1.EventEmitter(!1), _this.draggingRowOverNg = new core_1.EventEmitter(!1), _this.draggedRowNg = new core_1.EventEmitter(!1), _this.deletingRowNg = new core_1.EventEmitter(!1), _this.loadingRowsNg = new core_1.EventEmitter(!1), _this.loadedRowsNg = new core_1.EventEmitter(!1), _this.rowEditStartingNg = new core_1.EventEmitter(!1), _this.rowEditStartedNg = new core_1.EventEmitter(!1), _this.rowEditEndingNg = new core_1.EventEmitter(!1), _this.rowEditEndedNg = new core_1.EventEmitter(!1), _this.rowAddedNg = new core_1.EventEmitter(!1), _this.groupCollapsedChangedNg = new core_1.EventEmitter(!1), _this.groupCollapsedChangingNg = new core_1.EventEmitter(!1), _this.itemsSourceChangedNg = new core_1.EventEmitter(!1), _this.selectionChangingNg = new core_1.EventEmitter(!1), _this.selectionChangedNg = new core_1.EventEmitter(!1), _this.scrollPositionChangedNg = new core_1.EventEmitter(!1), _this.updatingViewNg = new core_1.EventEmitter(!1), _this.updatedViewNg = new core_1.EventEmitter(!1), _this.updatingLayoutNg = new core_1.EventEmitter(!1), _this.updatedLayoutNg = new core_1.EventEmitter(!1), _this.pastingNg = new core_1.EventEmitter(!1), _this.pastedNg = new core_1.EventEmitter(!1), _this.pastingCellNg = new core_1.EventEmitter(!1), _this.pastedCellNg = new core_1.EventEmitter(!1), _this.copyingNg = new core_1.EventEmitter(!1), _this.copiedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), new DirectiveCellFactory(_this, cdRef), _this.deferUpdate(function()
{
if (_this.rows.defaultSize < 10)
{
var e=_this.hostElement,
csh=getComputedStyle(e),
csb=getComputedStyle(document.body),
defRowHei=parseInt(csh.fontSize && wjcCore.contains(document.body, e) ? csh.fontSize : csb.fontSize) * 2;
_this.rows.defaultSize = defRowHei;
_this.columns.defaultSize = defRowHei * 4;
_this.columnHeaders.rows.defaultSize = defRowHei;
_this.rowHeaders.columns.defaultSize = Math.round(defRowHei * 1.25)
}
}), _this.created(), _this
}
return __extends(WjFlexGrid, _super), WjFlexGrid.prototype.created = function(){}, WjFlexGrid.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexGrid.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexGrid.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexGrid
}(wjcGrid.FlexGrid);
WjFlexGrid.meta = {outputs: exports.wjFlexGridMeta.outputs};
WjFlexGrid.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexGridMeta.selector, template: exports.wjFlexGridMeta.template, inputs: exports.wjFlexGridMeta.inputs, outputs: exports.wjFlexGridMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexGrid
})
}].concat(exports.wjFlexGridMeta.providers)
}, ]
}, ];
WjFlexGrid.ctorParameters = function()
{
return [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, {
type: core_3.ChangeDetectorRef, decorators: [{
type: core_3.Inject, args: [core_3.ChangeDetectorRef, ]
}, ]
}, ]
};
exports.WjFlexGrid = WjFlexGrid;
exports.wjFlexGridColumnMeta = {
selector: 'wj-flex-grid-column', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'name', 'dataMap', 'dataType', 'binding', 'sortMemberPath', 'format', 'header', 'width', 'minWidth', 'maxWidth', 'align', 'allowDragging', 'allowSorting', 'allowResizing', 'allowMerging', 'aggregate', 'isReadOnly', 'cssClass', 'isContentHtml', 'isSelected', 'visible', 'wordWrap', 'mask', 'inputType', 'isRequired', 'showDropDown', 'dropDownCssClass', ], outputs: ['initialized', 'isSelectedChangePC: isSelectedChange', ], providers: []
};
WjFlexGridColumn = function(_super)
{
function WjFlexGridColumn(elRef, injector, parentCmp)
{
var _this=_super.call(this) || this,
behavior,
gridCmp;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.wjProperty = 'columns', _this.isSelectedChangePC = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), gridCmp = behavior.parentBehavior.directive, gridCmp.autoGenerateColumns && (gridCmp.autoGenerateColumns = !1, gridCmp.columns.clear()), _this.created(), _this
}
return __extends(WjFlexGridColumn, _super), WjFlexGridColumn.prototype.created = function(){}, WjFlexGridColumn.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexGridColumn.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexGridColumn.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexGridColumn
}(wjcGrid.Column);
WjFlexGridColumn.meta = {
outputs: exports.wjFlexGridColumnMeta.outputs, changeEvents: {'grid.selectionChanged': ['isSelected']}
};
WjFlexGridColumn.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexGridColumnMeta.selector, template: exports.wjFlexGridColumnMeta.template, inputs: exports.wjFlexGridColumnMeta.inputs, outputs: exports.wjFlexGridColumnMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexGridColumn
})
}].concat(exports.wjFlexGridColumnMeta.providers)
}, ]
}, ];
WjFlexGridColumn.ctorParameters = function()
{
return [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ]
};
exports.WjFlexGridColumn = WjFlexGridColumn;
WjFlexGridCellTemplate = function()
{
function WjFlexGridCellTemplate(viewContainerRef, templateRef, elRef, parentCmp, domRenderer, injector, cdRef)
{
this.viewContainerRef = viewContainerRef;
this.templateRef = templateRef;
this.elRef = elRef;
this.domRenderer = domRenderer;
this.cdRef = cdRef;
this.autoSizeRows = !0;
parentCmp instanceof WjFlexGrid ? this.grid = parentCmp : parentCmp instanceof WjFlexGridColumn && (this.column = parentCmp, this.grid = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getBehavior(parentCmp).parentBehavior.directive)
}
return WjFlexGridCellTemplate._getTemplContextProp = function(templateType)
{
return '$__cellTempl' + CellTemplateType[templateType]
}, WjFlexGridCellTemplate.prototype.ngOnInit = function()
{
this.ownerControl = this.column && this.column.grid === this.grid ? this.column : this.grid;
this._attachToControl()
}, WjFlexGridCellTemplate.prototype.ngOnDestroy = function()
{
this.cellTypeStr && (this.viewContainerRef.clear(), this.ownerControl[WjFlexGridCellTemplate._getTemplContextProp(this.cellType)] = null, this.grid.invalidate())
}, WjFlexGridCellTemplate.prototype._instantiateTemplate = function(parent)
{
return wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(parent, this.viewContainerRef, this.templateRef, this.domRenderer)
}, WjFlexGridCellTemplate.prototype._attachToControl = function()
{
this.cellTypeStr && (this.cellType = wjcCore.asEnum(this.cellTypeStr, CellTemplateType), this.ownerControl[WjFlexGridCellTemplate._getTemplContextProp(this.cellType)] = this, this.grid.invalidate())
}, WjFlexGridCellTemplate
}();
WjFlexGridCellTemplate.decorators = [{
type: core_2.Directive, args: [{
selector: '[wjFlexGridCellTemplate]', inputs: ['wjFlexGridCellTemplate', 'cellTypeStr: cellType', 'cellOverflow', 'valuePaths', 'autoSizeRows'], exportAs: 'wjFlexGridCellTemplate', providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexGridCellTemplate
})
}]
}, ]
}, ];
WjFlexGridCellTemplate.ctorParameters = function()
{
return [{
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.TemplateRef, decorators: [{
type: core_3.Inject, args: [core_2.TemplateRef, ]
}, {type: core_2.Optional}, ]
}, {
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: core_3.ChangeDetectorRef, decorators: [{
type: core_3.Inject, args: [core_3.ChangeDetectorRef, ]
}, ]
}, ]
};
exports.WjFlexGridCellTemplate = WjFlexGridCellTemplate,
function(CellTemplateType)
{
CellTemplateType[CellTemplateType.Cell = 0] = "Cell";
CellTemplateType[CellTemplateType.CellEdit = 1] = "CellEdit";
CellTemplateType[CellTemplateType.ColumnHeader = 2] = "ColumnHeader";
CellTemplateType[CellTemplateType.RowHeader = 3] = "RowHeader";
CellTemplateType[CellTemplateType.RowHeaderEdit = 4] = "RowHeaderEdit";
CellTemplateType[CellTemplateType.TopLeft = 5] = "TopLeft";
CellTemplateType[CellTemplateType.GroupHeader = 6] = "GroupHeader";
CellTemplateType[CellTemplateType.Group = 7] = "Group";
CellTemplateType[CellTemplateType.NewCellTemplate = 8] = "NewCellTemplate";
CellTemplateType[CellTemplateType.ColumnFooter = 9] = "ColumnFooter";
CellTemplateType[CellTemplateType.BottomLeft = 10] = "BottomLeft"
}(CellTemplateType = exports.CellTemplateType || (exports.CellTemplateType = {}));
DirectiveCellFactory = function(_super)
{
function DirectiveCellFactory(grid, gridCdRef)
{
var _this=_super.call(this) || this,
templateType,
self;
if (_this._needsCdCheck = !1, _this._lastApplyTimeStamp = 0, _this._noApplyLag = !1, _this._startingEditing = !1, _this._cellStampCounter = 0, _this.grid = grid, _this._gridCdRef = gridCdRef, !DirectiveCellFactory._templateTypes)
{
DirectiveCellFactory._templateTypes = [];
for (templateType in CellTemplateType)
isNaN(templateType) && DirectiveCellFactory._templateTypes.push(templateType)
}
return self = _this, _this._baseCf = grid.cellFactory, grid.cellFactory = _this, _this._evtInput = document.createEvent('HTMLEvents'), _this._evtInput.initEvent('input', !0, !1), _this._evtBlur = document.createEvent('HTMLEvents'), _this._evtBlur.initEvent('blur', !1, !1), grid.prepareCellForEdit.addHandler(function()
{
self._noApplyLag = !0
}), grid.cellEditEnded.addHandler(function(s, e)
{
(e.range.col < 0 || e.range.col < grid.columns.length && !grid.columns[e.range.col][WjFlexGridCellTemplate._getTemplContextProp(CellTemplateType.CellEdit)]) && (self._editChar = null);
setTimeout(function()
{
self._noApplyLag = !1
}, 300)
}), grid.beginningEdit.addHandler(function()
{
self._startingEditing = !0
}), grid.hostElement.addEventListener('keydown', function()
{
self._startingEditing = !1
}, !0), grid.hostElement.addEventListener('keypress', function(e)
{
var char=e.charCode > 32 ? String.fromCharCode(e.charCode) : null;
char && (!grid.activeEditor || self._startingEditing ? self._editChar = char : self._editChar && (self._editChar += char))
}, !0), grid.updatedView.addHandler(function()
{
_this._needsCdCheck && (_this._needsCdCheck = !1, _this._gridCdRef.markForCheck())
}, _this), _this
}
return __extends(DirectiveCellFactory, _super), DirectiveCellFactory.prototype.updateCell = function(panel, rowIndex, colIndex, cell, rng)
{
var cellStamp,
isHierNonGroup,
isUpdated,
col,
templContextProp,
templContext,
isTpl,
cellValue,
measureAttr,
isMeasuring,
cellContext,
isForeignCell,
rootEl,
templInstance,
cellInfo_1,
editEndingEH;
this._cellStampCounter = (this._cellStampCounter + 1) % 1e7;
cellStamp = cell[DirectiveCellFactory._cellStampProp] = this._cellStampCounter;
cell.style.overflow && (cell.style.overflow = '');
var self=this,
grid=panel.grid,
editRange=grid.editRange,
templateType,
row=panel.rows[rowIndex],
dataItem=row.dataItem,
isGridCtx=!1,
needCellValue=!1,
isEdit=!1,
isCvGroup=!1;
switch (panel.cellType)
{
case wjcGrid.CellType.Cell:
editRange && editRange.row === rowIndex && editRange.col === colIndex ? (templateType = CellTemplateType.CellEdit, needCellValue = isEdit = !0) : row instanceof wjcGrid.GroupRow ? (isCvGroup = dataItem instanceof wjcCore.CollectionViewGroup, isHierNonGroup = !(isCvGroup || row.hasChildren), colIndex == panel.columns.firstVisibleIndex ? templateType = isHierNonGroup ? CellTemplateType.Cell : CellTemplateType.GroupHeader : (templateType = isHierNonGroup ? CellTemplateType.Cell : CellTemplateType.Group, needCellValue = !0)) : row instanceof wjcGrid._NewRowTemplate ? templateType = CellTemplateType.NewCellTemplate : wjcGrid.detail && wjcGrid.detail.DetailRow && row instanceof wjcGrid.detail.DetailRow || (templateType = CellTemplateType.Cell);
break;
case wjcGrid.CellType.ColumnHeader:
templateType = CellTemplateType.ColumnHeader;
break;
case wjcGrid.CellType.RowHeader:
templateType = grid.collectionView && grid.collectionView.currentEditItem === dataItem ? CellTemplateType.RowHeaderEdit : CellTemplateType.RowHeader;
isGridCtx = !0;
break;
case wjcGrid.CellType.TopLeft:
templateType = CellTemplateType.TopLeft;
isGridCtx = !0;
break;
case wjcGrid.CellType.ColumnFooter:
templateType = CellTemplateType.ColumnFooter;
needCellValue = !0;
break;
case wjcGrid.CellType.BottomLeft:
templateType = CellTemplateType.BottomLeft;
isGridCtx = !0
}
isUpdated = !1;
templateType != null && (col = isCvGroup && templateType == CellTemplateType.GroupHeader ? grid.columns.getColumn(dataItem.groupDescription.propertyName) : colIndex >= 0 && colIndex < panel.columns.length ? panel.columns[colIndex] : null, col && (templContextProp = WjFlexGridCellTemplate._getTemplContextProp(templateType), templContext = (isGridCtx ? grid : col)[templContextProp], templContext || (templateType === CellTemplateType.RowHeaderEdit ? (templateType = CellTemplateType.RowHeader, templContextProp = WjFlexGridCellTemplate._getTemplContextProp(templateType), templContext = grid[templContextProp]) : (templateType === CellTemplateType.Group || templateType === CellTemplateType.GroupHeader) && (isCvGroup || (templateType = CellTemplateType.Cell, templContextProp = WjFlexGridCellTemplate._getTemplContextProp(templateType), templContext = col[templContextProp]))), templContext && (isTpl = !0, needCellValue && (cellValue = panel.getCellData(rowIndex, colIndex, !1)), isTpl && (isUpdated = !0, measureAttr = cell.getAttribute(wjcGrid.FlexGrid._WJS_MEASURE), isMeasuring = measureAttr && measureAttr.toLowerCase() === 'true', isEdit && this._baseCf.updateCell(panel, rowIndex, colIndex, cell, rng, !0), cellContext = cell[templContextProp] || {}, isForeignCell = cellContext.column !== col || !cellContext.viewRef || cellContext.templateContextProperty !== templContextProp || cell.firstChild != cellContext.rootElement, isForeignCell && (isEdit ? (rootEl = cell.firstElementChild, rootEl && (cell.focus(), rootEl.style.display = 'none')) : cell.textContent = '', this._doDisposeCell(cell), templInstance = templContext._instantiateTemplate(cell), cellContext.column = col, cellContext.viewRef = templInstance.viewRef, cellContext.rootElement = templInstance.rootElement, cellContext.templateContextProperty = templContextProp, cell[templContextProp] = cellContext), cellInfo_1 = this._setViewRefVars(cellContext.viewRef, row, col, dataItem, cellValue, templContext.valuePaths), templContext.cellOverflow && (cell.style.overflow = templContext.cellOverflow), isMeasuring ? templContext.cdRef.detectChanges() : templContext.autoSizeRows && setTimeout(function()
{
var inputs,
i,
input,
inpSt,
inpFocusEh;
if (cellStamp === cell[DirectiveCellFactory._cellStampProp])
{
var cellHeight=cell.scrollHeight,
panelRows=panel.rows,
rowSpan=rng && rng.rowSpan || 1;
if (rowIndex < panelRows.length && panelRows[rowIndex].renderHeight * rowSpan < cellHeight - 1)
{
if (panelRows.defaultSize = cellHeight / rowSpan, isEdit)
{
grid.refresh();
grid.startEditing();
return
}
}
else if (isEdit && (inputs = cellContext && cellContext.rootElement && cellContext.rootElement.querySelectorAll('input'), inputs))
for (i = 0; i < inputs.length; i++)
if (input = inputs[i], inpSt = window.getComputedStyle(input), inpSt.display !== 'none' && inpSt.visibility === 'visible')
{
inpFocusEh = function()
{
input.removeEventListener('focus', inpFocusEh);
setTimeout(function()
{
if (self._editChar)
{
var caretPos_1=input.selectionStart + self._editChar.length;
input.value = self._editChar;
self._editChar = null;
input.dispatchEvent(self._evtInput);
setTimeout(function()
{
setTimeout(function()
{
wjcCore.setSelectionRange(input, Math.min(caretPos_1, input.value.length))
}, 0)
}, 0)
}
}, 0)
};
input.addEventListener('focus', inpFocusEh);
input.focus();
break
}
}
}, 0), isEdit ? (self._cellEditorVars = cellInfo_1.localVars, editEndingEH = function(s, e)
{
var activeElement,
_i,
bindNames_1,
curName,
dropDowns;
if (grid.cellEditEnding.removeHandler(editEndingEH), e.stayInEditMode || (activeElement = wjcCore.getActiveElement(), activeElement && activeElement.dispatchEvent(self._evtBlur), cell.focus()), !(e.cancel || e.stayInEditMode))
{
e.cancel = !0;
var cellVar=cellInfo_1.localVars,
newVal=cellVar.value,
bindNames=Object.getOwnPropertyNames(cellInfo_1.bindings);
for (panel.grid.setCellData(rowIndex, colIndex, newVal), _i = 0, bindNames_1 = bindNames; _i < bindNames_1.length; _i++)
curName = bindNames_1[_i],
cellInfo_1.bindings[curName].setValue(cellVar, cellInfo_1.localVars.values[curName])
}
dropDowns = cell.querySelectorAll('.wj-dropdown');
[].forEach.call(dropDowns, function(el)
{
var ctrl=wjcCore.Control.getControl(el);
ctrl && tryGetModuleWijmoInput() && ctrl instanceof tryGetModuleWijmoInput().DropDown && (ctrl.isDroppedDown = !1)
})
}, grid.cellEditEnding.addHandler(editEndingEH), grid.cellEditEnded.addHandler(function()
{
self._cellEditorVars = null
})) : this._baseCf.updateCell(panel, rowIndex, colIndex, cell, rng, !1)))));
isUpdated || (this._doDisposeCell(cell), this._baseCf.updateCell(panel, rowIndex, colIndex, cell, rng))
}, DirectiveCellFactory.prototype.getEditorValue = function(g)
{
return this._cellEditorVars ? this._cellEditorVars.value : _super.prototype.getEditorValue.call(this, g)
}, DirectiveCellFactory.prototype.disposeCell = function(cell)
{
this._doDisposeCell(cell)
}, DirectiveCellFactory.prototype._doDisposeCell = function(cell)
{
for (var templContextProp, cellContext, templateOwner, templateContext, viewIdx, ttm=DirectiveCellFactory._templateTypes, i=0; i < ttm.length; i++)
templContextProp = WjFlexGridCellTemplate._getTemplContextProp(CellTemplateType[ttm[i]]),
cellContext = cell[templContextProp],
cellContext && cellContext.viewRef && (templateOwner = cellContext.column || this.grid, templateContext = templateOwner[templContextProp], templateContext && (viewIdx = templateContext.viewContainerRef.indexOf(cellContext.viewRef), viewIdx > -1 && templateContext.viewContainerRef.remove(viewIdx)), cellContext.viewRef = null, cellContext.rootElement = null, cellContext.column = null, cellContext.templateContextProperty = null, cell[templContextProp] = null)
}, DirectiveCellFactory.prototype._setViewRefVars = function(viewRef, row, col, dataItem, cellValue, valuePaths)
{
var pathNames,
_i,
pathNames_1,
pName,
binding;
this._needsCdCheck = !0;
viewRef.context.row = row;
viewRef.context.col = col;
viewRef.context.item = dataItem;
var values={},
cellCtx=viewRef.context.cell || {},
bindings={},
ret={
localVars: cellCtx, bindings: bindings
};
if (cellCtx.row = row, cellCtx.col = col, cellCtx.item = dataItem, cellCtx.value = cellValue, cellCtx.values = values, valuePaths)
for (pathNames = Object.getOwnPropertyNames(valuePaths), _i = 0, pathNames_1 = pathNames; _i < pathNames_1.length; _i++)
pName = pathNames_1[_i],
binding = new wjcCore.Binding(valuePaths[pName]),
bindings[pName] = binding,
values[pName] = binding.getValue(cellCtx);
return viewRef.context.cell !== cellCtx && (viewRef.context.cell = cellCtx), ret
}, DirectiveCellFactory
}(wjcGrid.CellFactory);
DirectiveCellFactory._cellStampProp = '__wjCellStamp';
moduleExports = [WjFlexGrid, WjFlexGridColumn, WjFlexGridCellTemplate];
WjGridModule = function()
{
function WjGridModule(){}
return WjGridModule
}();
WjGridModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjGridModule.ctorParameters = function()
{
return []
};
exports.WjGridModule = WjGridModule
})
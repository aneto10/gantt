/*
@license

dhtmlxGantt v.6.3.1 Standard

This version of dhtmlxGantt is distributed under GPL 2.0 license and can be legally used in GPL projects.

To use dhtmlxGantt in non-GPL projects (and get Pro version of the product), please obtain Commercial/Enterprise or Ultimate license on our site https://dhtmlx.com/docs/products/dhtmlxGantt/#licensing or contact us at sales@dhtmlx.com

(c) XB Software Ltd.

*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ext/dhtmlxgantt_keyboard_navigation",[],e):"object"==typeof exports?exports["ext/dhtmlxgantt_keyboard_navigation"]=e():t["ext/dhtmlxgantt_keyboard_navigation"]=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/codebase/",n(n.s=238)}({1:function(t,e){function n(t){var e=0,n=0,o=0,i=0;if(t.getBoundingClientRect){var a=t.getBoundingClientRect(),r=document.body,s=document.documentElement||document.body.parentNode||document.body,d=window.pageYOffset||s.scrollTop||r.scrollTop,l=window.pageXOffset||s.scrollLeft||r.scrollLeft,c=s.clientTop||r.clientTop||0,u=s.clientLeft||r.clientLeft||0;e=a.top+d-c,n=a.left+l-u,o=document.body.offsetWidth-a.right,i=document.body.offsetHeight-a.bottom}else{for(;t;)e+=parseInt(t.offsetTop,10),n+=parseInt(t.offsetLeft,10),t=t.offsetParent;o=document.body.offsetWidth-t.offsetWidth-n,i=document.body.offsetHeight-t.offsetHeight-e}return{y:Math.round(e),x:Math.round(n),width:t.offsetWidth,height:t.offsetHeight,right:Math.round(o),bottom:Math.round(i)}}function o(t){var e=!1,n=!1;if(window.getComputedStyle){var o=window.getComputedStyle(t,null);e=o.display,n=o.visibility}else t.currentStyle&&(e=t.currentStyle.display,n=t.currentStyle.visibility);return"none"!=e&&"hidden"!=n}function i(t){return!isNaN(t.getAttribute("tabindex"))&&1*t.getAttribute("tabindex")>=0}function a(t){return!{a:!0,area:!0}[t.nodeName.loLowerCase()]||!!t.getAttribute("href")}function r(t){return!{input:!0,select:!0,textarea:!0,button:!0,object:!0}[t.nodeName.toLowerCase()]||!t.hasAttribute("disabled")}function s(t){if(!t)return"";var e=t.className||"";return e.baseVal&&(e=e.baseVal),e.indexOf||(e=""),c(e)}var d=document.createElement("div");function l(t){return t.tagName?t:(t=t||window.event).target||t.srcElement}function c(t){return(String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")}).apply(t)}t.exports={getNodePosition:n,getFocusableNodes:function(t){for(var e=t.querySelectorAll(["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"].join(", ")),n=Array.prototype.slice.call(e,0),s=0;s<n.length;s++){var d=n[s];(i(d)||r(d)||a(d))&&o(d)||(n.splice(s,1),s--)}return n},getScrollSize:function(){var t=document.createElement("div");t.style.cssText="visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e},getClassName:s,addClassName:function(t,e){e&&-1===t.className.indexOf(e)&&(t.className+=" "+e)},removeClassName:function(t,e){e=e.split(" ");for(var n=0;n<e.length;n++){var o=new RegExp("\\s?\\b"+e[n]+"\\b(?![-_.])","");t.className=t.className.replace(o,"")}},insertNode:function(t,e){d.innerHTML=e;var n=d.firstChild;return t.appendChild(n),n},removeNode:function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},getChildNodes:function(t,e){for(var n=t.childNodes,o=n.length,i=[],a=0;a<o;a++){var r=n[a];r.className&&-1!==r.className.indexOf(e)&&i.push(r)}return i},toNode:function(t){return"string"==typeof t?document.getElementById(t)||document.querySelector(t)||document.body:t||document.body},locateClassName:function(t,e,n){var o=l(t),i="";for(void 0===n&&(n=!0);o;){if(i=s(o)){var a=i.indexOf(e);if(a>=0){if(!n)return o;var r=0===a||!c(i.charAt(a-1)),d=a+e.length>=i.length||!c(i.charAt(a+e.length));if(r&&d)return o}}o=o.parentNode}return null},locateAttribute:function(t,e){if(e){for(var n=l(t);n;){if(n.getAttribute&&n.getAttribute(e))return n;n=n.parentNode}return null}},getTargetNode:l,getRelativeEventPosition:function(t,e){var o=document.documentElement,i=n(e);return{x:t.clientX+o.scrollLeft-o.clientLeft-i.x+e.scrollLeft,y:t.clientY+o.scrollTop-o.clientTop-i.y+e.scrollTop}},isChildOf:function(t,e){if(!t||!e)return!1;for(;t&&t!=e;)t=t.parentNode;return t===e},hasClass:function(t,e){return"classList"in t?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)},closest:function(t,e){if(t.closest)return t.closest(e);if(t.matches||t.msMatchesSelector||t.webkitMatchesSelector){var n=t;if(!document.documentElement.contains(n))return null;do{if((n.matches||n.msMatchesSelector||n.webkitMatchesSelector).call(n,e))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null}return console.error("Your browser is not supported"),null}}},228:function(t,e){t.exports=function(t){t.$keyboardNavigation.dispatcher={isActive:!1,activeNode:null,globalNode:new t.$keyboardNavigation.GanttNode,enable:function(){this.isActive=!0,this.globalNode.enable(),this.setActiveNode(this.getActiveNode())},disable:function(){this.isActive=!1,this.globalNode.disable()},isEnabled:function(){return!!this.isActive},getDefaultNode:function(){var e;return(e=t.config.keyboard_navigation_cells?new t.$keyboardNavigation.TaskCell:new t.$keyboardNavigation.TaskRow).isValid()||(e=e.fallback()),e},setDefaultNode:function(){this.setActiveNode(this.getDefaultNode())},getActiveNode:function(){var t=this.activeNode;return t&&!t.isValid()&&(t=t.fallback()),t},fromDomElement:function(e){for(var n=[t.$keyboardNavigation.TaskRow,t.$keyboardNavigation.TaskCell,t.$keyboardNavigation.HeaderCell],o=0;o<n.length;o++)if(n[o].prototype.fromDomElement){var i=n[o].prototype.fromDomElement(e);if(i)return i}return null},focusGlobalNode:function(){this.blurNode(this.globalNode),this.focusNode(this.globalNode)},setActiveNode:function(t){var e=!0;this.activeNode&&this.activeNode.compareTo(t)&&(e=!1),this.isEnabled()&&(e&&this.blurNode(this.activeNode),this.activeNode=t,this.focusNode(this.activeNode,!e))},focusNode:function(t,e){t&&t.focus&&t.focus(e)},blurNode:function(t){t&&t.blur&&t.blur()},keyDownHandler:function(e){if(!t.$keyboardNavigation.isModal()&&this.isEnabled()&&!(e=e||window.event).defaultPrevented){var n=this.globalNode,o=t.$keyboardNavigation.shortcuts.getCommandFromEvent(e),i=this.getActiveNode();!1!==t.$keyboardNavigation.facade.callEvent("onKeyDown",[o,e])&&(i?i.findHandler(o)?i.doAction(o,e):n.findHandler(o)&&n.doAction(o,e):this.setDefaultNode())}},_timeout:null,awaitsFocus:function(){return null!==this._timeout},delay:function(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(t.bind(function(){this._timeout=null,e()},this),n||1)},clearDelay:function(){clearTimeout(this._timeout)}}}},229:function(t,e){t.exports=function(t){!function(){var e=[];function n(){return!!e.length}function o(e){setTimeout(function(){n()||t.focus()},1)}function i(n){t.eventRemove(n,"keydown",r),t.event(n,"keydown",r),e.push(n)}function a(){var n=e.pop();n&&t.eventRemove(n,"keydown",r),o()}function r(n){var o=(n=n||window.event).currentTarget;(function(t){return t==e[e.length-1]})(o)&&t.$keyboardNavigation.trapFocus(o,n)}function s(){i(t.getLightbox())}t.attachEvent("onLightbox",s),t.attachEvent("onAfterLightbox",a),t.attachEvent("onLightboxChange",function(){a(),s()}),t.attachEvent("onAfterQuickInfo",function(){o()}),t.attachEvent("onMessagePopup",function(t){d=document.activeElement,i(t)}),t.attachEvent("onAfterMessagePopup",function(){a(),setTimeout(function(){d&&(d.focus(),d=null)},1)});var d=null;t.$keyboardNavigation.isModal=n}()}},230:function(t,e,n){t.exports=function(t){var e=n(1);t.$keyboardNavigation.TaskCell=function(e,n){if(!e){var o=t.getChildren(t.config.root_id);o[0]&&(e=o[0])}this.taskId=e,this.columnIndex=n||0,t.isTaskExists(this.taskId)&&(this.index=t.getTaskIndex(this.taskId))},t.$keyboardNavigation.TaskCell.prototype=t._compose(t.$keyboardNavigation.TaskRow,{_handlers:null,isValid:function(){return t.$keyboardNavigation.TaskRow.prototype.isValid.call(this)&&!!t.getGridColumns()[this.columnIndex]},fallback:function(){var e=t.$keyboardNavigation.TaskRow.prototype.fallback.call(this),n=e;if(e instanceof t.$keyboardNavigation.TaskRow){for(var o=t.getGridColumns(),i=this.columnIndex;i>=0&&!o[i];)i--;o[i]&&(n=new t.$keyboardNavigation.TaskCell(e.taskId,i))}return n},fromDomElement:function(n){if(!t.config.keyboard_navigation_cells)return null;var o=t.locate(n);if(t.isTaskExists(o)){var i=0,a=e.locateAttribute(n,"data-column-index");return a&&(i=1*a.getAttribute("data-column-index")),new t.$keyboardNavigation.TaskCell(o,i)}return null},getNode:function(){if(t.isTaskExists(this.taskId)&&t.isTaskVisible(this.taskId)){if(t.config.show_grid){var e=t.$grid.querySelector(".gantt_row["+t.config.task_attribute+"='"+this.taskId+"']");return e?e.querySelector("[data-column-index='"+this.columnIndex+"']"):null}return t.getTaskNode(this.taskId)}},keys:{up:function(){var e=null,n=t.getPrev(this.taskId);e=n?new t.$keyboardNavigation.TaskCell(n,this.columnIndex):new t.$keyboardNavigation.HeaderCell(this.columnIndex),this.moveTo(e)},down:function(){var e=t.getNext(this.taskId);e&&this.moveTo(new t.$keyboardNavigation.TaskCell(e,this.columnIndex))},left:function(){this.columnIndex>0&&this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId,this.columnIndex-1))},right:function(){var e=t.getGridColumns();this.columnIndex<e.length-1&&this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId,this.columnIndex+1))},end:function(){var e=t.getGridColumns();this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId,e.length-1))},home:function(){this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId,0))},pagedown:function(){t.getVisibleTaskCount()&&this.moveTo(new t.$keyboardNavigation.TaskCell(t.getTaskByIndex(t.getVisibleTaskCount()-1).id,this.columnIndex))},pageup:function(){t.getVisibleTaskCount()&&this.moveTo(new t.$keyboardNavigation.TaskCell(t.getTaskByIndex(0).id,this.columnIndex))}}}),t.$keyboardNavigation.TaskCell.prototype.bindAll(t.$keyboardNavigation.TaskRow.prototype.keys),t.$keyboardNavigation.TaskCell.prototype.bindAll(t.$keyboardNavigation.TaskCell.prototype.keys)}},231:function(t,e){t.exports=function(t){t.$keyboardNavigation.TaskRow=function(e){if(!e){var n=t.getChildren(t.config.root_id);n[0]&&(e=n[0])}this.taskId=e,t.isTaskExists(this.taskId)&&(this.index=t.getTaskIndex(this.taskId))},t.$keyboardNavigation.TaskRow.prototype=t._compose(t.$keyboardNavigation.KeyNavNode,{_handlers:null,isValid:function(){return t.isTaskExists(this.taskId)&&t.getTaskIndex(this.taskId)>-1},fallback:function(){if(!t.getVisibleTaskCount()){var e=new t.$keyboardNavigation.HeaderCell;return e.isValid()?e:null}var n=-1;if(t.getTaskByIndex(this.index-1))n=this.index-1;else if(t.getTaskByIndex(this.index+1))n=this.index+1;else for(var o=this.index;o>=0;){if(t.getTaskByIndex(o)){n=o;break}o--}if(n>-1)return new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(n).id)},fromDomElement:function(e){if(t.config.keyboard_navigation_cells)return null;var n=t.locate(e);return t.isTaskExists(n)?new t.$keyboardNavigation.TaskRow(n):null},getNode:function(){if(t.isTaskExists(this.taskId)&&t.isTaskVisible(this.taskId))return t.config.show_grid?t.$grid.querySelector(".gantt_row["+t.config.task_attribute+"='"+this.taskId+"']"):t.getTaskNode(this.taskId)},focus:function(e){if(!e){var n,o,i=t.getTaskPosition(t.getTask(this.taskId)),a=t.config.row_height,r=t.getScrollState();n=t.$task?t.$task.offsetWidth:r.inner_width,o=t.$grid_data||t.$task_data?(t.$grid_data||t.$task_data).offsetHeight:r.inner_height,i.top<r.y||i.top+a>r.y+o?t.scrollTo(null,i.top-5*a):t.config.show_chart&&(i.left<r.x||i.left>r.x+n)&&t.scrollTo(i.left-t.config.task_scroll_offset)}t.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this,[e])},keys:{pagedown:function(){t.getVisibleTaskCount()&&this.moveTo(new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(t.getVisibleTaskCount()-1).id))},pageup:function(){t.getVisibleTaskCount()&&this.moveTo(new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(0).id))},up:function(){var e=null,n=t.getPrev(this.taskId);e=n?new t.$keyboardNavigation.TaskRow(n):new t.$keyboardNavigation.HeaderCell,this.moveTo(e)},down:function(){var e=t.getNext(this.taskId);e&&this.moveTo(new t.$keyboardNavigation.TaskRow(e))},"shift+down":function(){t.hasChild(this.taskId)&&!t.getTask(this.taskId).$open&&t.open(this.taskId)},"shift+up":function(){t.hasChild(this.taskId)&&t.getTask(this.taskId).$open&&t.close(this.taskId)},"shift+right":function(){if(!t.isReadonly(this)){var e=t.getPrevSibling(this.taskId);if(t.isTaskExists(e)&&!t.isChildOf(this.taskId,e))t.getTask(e).$open=!0,!1!==t.moveTask(this.taskId,-1,e)&&t.updateTask(this.taskId)}},"shift+left":function(){if(!t.isReadonly(this)){var e=t.getParent(this.taskId);if(t.isTaskExists(e))!1!==t.moveTask(this.taskId,t.getTaskIndex(e)+1,t.getParent(e))&&t.updateTask(this.taskId)}},space:function(e){t.isSelectedTask(this.taskId)?t.unselectTask(this.taskId):t.selectTask(this.taskId)},"ctrl+left":function(e){t.close(this.taskId)},"ctrl+right":function(e){t.open(this.taskId)},delete:function(e){t.isReadonly(this)||t.$click.buttons.delete(this.taskId)},enter:function(){t.isReadonly(this)||t.showLightbox(this.taskId)},"ctrl+enter":function(){t.isReadonly(this)||t.createTask({},this.taskId)}}}),t.$keyboardNavigation.TaskRow.prototype.bindAll(t.$keyboardNavigation.TaskRow.prototype.keys)}},232:function(t,e,n){t.exports=function(t){var e=n(1);t.$keyboardNavigation.HeaderCell=function(t){this.index=t||0},t.$keyboardNavigation.HeaderCell.prototype=t._compose(t.$keyboardNavigation.KeyNavNode,{_handlers:null,isValid:function(){return!(!t.config.show_grid&&t.getVisibleTaskCount())&&(!!t.getGridColumns()[this.index]||!t.getVisibleTaskCount())},fallback:function(){if(!t.config.show_grid)return t.getVisibleTaskCount()?new t.$keyboardNavigation.TaskRow:null;for(var e=t.getGridColumns(),n=this.index;n>=0&&!e[n];)n--;return e[n]?new t.$keyboardNavigation.HeaderCell(n):null},fromDomElement:function(n){var o=e.locateClassName(n,"gantt_grid_head_cell");if(o){for(var i=0;o&&o.previousSibling;)o=o.previousSibling,i+=1;return new t.$keyboardNavigation.HeaderCell(i)}return null},getNode:function(){return t.$grid_scale.childNodes[this.index]},keys:{left:function(){this.index>0&&this.moveTo(new t.$keyboardNavigation.HeaderCell(this.index-1))},right:function(){var e=t.getGridColumns();this.index<e.length-1&&this.moveTo(new t.$keyboardNavigation.HeaderCell(this.index+1))},down:function(){var e,n=t.getChildren(t.config.root_id);n[0]&&(e=n[0]),e&&(t.config.keyboard_navigation_cells?this.moveTo(new t.$keyboardNavigation.TaskCell(e,this.index)):this.moveTo(new t.$keyboardNavigation.TaskRow(e)))},end:function(){var e=t.getGridColumns();this.moveTo(new t.$keyboardNavigation.HeaderCell(e.length-1))},home:function(){this.moveTo(new t.$keyboardNavigation.HeaderCell(0))},"enter, space":function(){document.activeElement.click()},"ctrl+enter":function(){t.isReadonly(this)||t.createTask({},this.taskId)}}}),t.$keyboardNavigation.HeaderCell.prototype.bindAll(t.$keyboardNavigation.HeaderCell.prototype.keys)}},233:function(t,e){t.exports=function(t){t.$keyboardNavigation.KeyNavNode=function(){},t.$keyboardNavigation.KeyNavNode.prototype=t._compose(t.$keyboardNavigation.EventHandler,{isValid:function(){return!0},fallback:function(){return null},moveTo:function(e){t.$keyboardNavigation.dispatcher.setActiveNode(e)},compareTo:function(t){if(!t)return!1;for(var e in this){if(!!this[e]!=!!t[e])return!1;var n=!(!this[e]||!this[e].toString),o=!(!t[e]||!t[e].toString);if(o!=n)return!1;if(o&&n){if(t[e].toString()!=this[e].toString())return!1}else if(t[e]!=this[e])return!1}return!0},getNode:function(){},focus:function(){var e=this.getNode();if(e){var n=t.$keyboardNavigation.facade;!1!==n.callEvent("onBeforeFocus",[e])&&e&&(e.setAttribute("tabindex","-1"),e.$eventAttached||(e.$eventAttached=!0,t.event(e,"focus",function(t){return(t=t||event).preventDefault(),!1},!1)),e.focus&&e.focus(),n.callEvent("onFocus",[this.getNode()]))}},blur:function(){var e=this.getNode();e&&(t.$keyboardNavigation.facade.callEvent("onBlur",[e]),e.setAttribute("tabindex","-1"))}})}},234:function(t,e){t.exports=function(t){t.$keyboardNavigation.GanttNode=function(){},t.$keyboardNavigation.GanttNode.prototype=t._compose(t.$keyboardNavigation.EventHandler,{focus:function(){t.focus()},blur:function(){},disable:function(){t.$container.setAttribute("tabindex","0")},enable:function(){t.$container&&t.$container.removeAttribute("tabindex")},isEnabled:function(){return t.$container.hasAttribute("tabindex")},scrollHorizontal:function(e){var n=t.dateFromPos(t.getScrollState().x),o=t.getScale(),i=e<0?-o.step:o.step;n=t.date.add(n,i,o.unit),t.scrollTo(t.posFromDate(n))},scrollVertical:function(e){var n=t.getScrollState().y,o=t.config.row_height;t.scrollTo(null,n+(e<0?-1:1)*o)},keys:{"alt+left":function(t){this.scrollHorizontal(-1)},"alt+right":function(t){this.scrollHorizontal(1)},"alt+up":function(t){this.scrollVertical(-1)},"alt+down":function(t){this.scrollVertical(1)},"ctrl+z":function(){t.undo&&t.undo()},"ctrl+r":function(){t.redo&&t.redo()}}}),t.$keyboardNavigation.GanttNode.prototype.bindAll(t.$keyboardNavigation.GanttNode.prototype.keys)}},235:function(t,e,n){t.exports=function(t){!function(){var e=n(1);t.$keyboardNavigation.getFocusableNodes=e.getFocusableNodes,t.$keyboardNavigation.trapFocus=function(e,n){if(9!=n.keyCode)return!1;for(var o=t.$keyboardNavigation.getFocusableNodes(e),i=document.activeElement,a=-1,r=0;r<o.length;r++)if(o[r]==i){a=r;break}if(n.shiftKey){if(a<=0){var s=o[o.length-1];if(s)return s.focus(),n.preventDefault(),!0}}else if(a>=o.length-1){var d=o[0];if(d)return d.focus(),n.preventDefault(),!0}return!1}}()}},236:function(t,e){t.exports=function(t){t.$keyboardNavigation.EventHandler={_handlers:null,findHandler:function(e){this._handlers||(this._handlers={});var n=t.$keyboardNavigation.shortcuts.getHash(e);return this._handlers[n]},doAction:function(e,n){var o=this.findHandler(e);if(o){if(!1===t.$keyboardNavigation.facade.callEvent("onBeforeAction",[e,n]))return;o.call(this,n),n.preventDefault?n.preventDefault():n.returnValue=!1}},bind:function(e,n){this._handlers||(this._handlers={});for(var o=t.$keyboardNavigation.shortcuts,i=o.parse(e),a=0;a<i.length;a++)this._handlers[o.getHash(i[a])]=n},unbind:function(e){for(var n=t.$keyboardNavigation.shortcuts,o=n.parse(e),i=0;i<o.length;i++)this._handlers[n.getHash(o[i])]&&delete this._handlers[n.getHash(o[i])]},bindAll:function(t){for(var e in t)this.bind(e,t[e])},initKeys:function(){this._handlers||(this._handlers={}),this.keys&&this.bindAll(this.keys)}}}},237:function(t,e){t.exports=function(t){t.$keyboardNavigation.shortcuts={createCommand:function(){return{modifiers:{shift:!1,alt:!1,ctrl:!1,meta:!1},keyCode:null}},parse:function(t){for(var e=[],n=this.getExpressions(this.trim(t)),o=0;o<n.length;o++){for(var i=this.getWords(n[o]),a=this.createCommand(),r=0;r<i.length;r++)this.commandKeys[i[r]]?a.modifiers[i[r]]=!0:this.specialKeys[i[r]]?a.keyCode=this.specialKeys[i[r]]:a.keyCode=i[r].charCodeAt(0);e.push(a)}return e},getCommandFromEvent:function(t){var e=this.createCommand();e.modifiers.shift=!!t.shiftKey,e.modifiers.alt=!!t.altKey,e.modifiers.ctrl=!!t.ctrlKey,e.modifiers.meta=!!t.metaKey,e.keyCode=t.which||t.keyCode,e.keyCode>=96&&e.keyCode<=105&&(e.keyCode-=48);var n=String.fromCharCode(e.keyCode);return n&&(e.keyCode=n.toLowerCase().charCodeAt(0)),e},getHashFromEvent:function(t){return this.getHash(this.getCommandFromEvent(t))},getHash:function(t){var e=[];for(var n in t.modifiers)t.modifiers[n]&&e.push(n);return e.push(t.keyCode),e.join(this.junctionChar)},getExpressions:function(t){return t.split(this.junctionChar)},getWords:function(t){return t.split(this.combinationChar)},trim:function(t){return t.replace(/\s/g,"")},junctionChar:",",combinationChar:"+",commandKeys:{shift:16,alt:18,ctrl:17,meta:!0},specialKeys:{backspace:8,tab:9,enter:13,esc:27,space:32,up:38,down:40,left:37,right:39,home:36,end:35,pageup:33,pagedown:34,delete:46,insert:45,plus:107,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123}}}},238:function(t,e,n){!function(){var t=n(4);!function(e){e.config.keyboard_navigation=!0,e.config.keyboard_navigation_cells=!1,e.$keyboardNavigation={},e._compose=function(){for(var t=Array.prototype.slice.call(arguments,0),e={},n=0;n<t.length;n++){var o=t[n];for(var i in"function"==typeof o&&(o=new o),o)e[i]=o[i]}return e},n(237)(e),n(236)(e),n(235)(e),n(234)(e),n(233)(e),n(232)(e),n(231)(e),n(230)(e),n(229)(e),n(228)(e);var o=n(1);!function(){var n=e.$keyboardNavigation.dispatcher;n.isTaskFocused=function(t){var o=n.activeNode;return(o instanceof e.$keyboardNavigation.TaskRow||o instanceof e.$keyboardNavigation.TaskCell)&&o.taskId==t};var i=function(t){if(e.config.keyboard_navigation)return n.keyDownHandler(t)},a=function(t){if(n.$preventDefault)return t.preventDefault(),e.$container.blur(),!1;n.awaitsFocus()||n.focusGlobalNode()},r=function(){if(n.isEnabled()){var t=n.getActiveNode();if(t){var e,o,i=t.getNode();i&&i.parentNode&&(e=i.parentNode.scrollTop,o=i.parentNode.scrollLeft),t.focus(!0),i&&i.parentNode&&(i.parentNode.scrollTop=e,i.parentNode.scrollLeft=o)}}};function s(t){if(!e.config.keyboard_navigation)return!0;var i,a=n.fromDomElement(t);a&&(n.activeNode instanceof e.$keyboardNavigation.TaskCell&&o.isChildOf(t.target,e.$task)&&(a=new e.$keyboardNavigation.TaskCell(a.taskId,n.activeNode.columnIndex)),i=a),i?n.isEnabled()?n.delay(function(){n.setActiveNode(i)}):n.activeNode=i:(n.$preventDefault=!0,setTimeout(function(){n.$preventDefault=!1},300))}e.attachEvent("onDataRender",function(){e.config.keyboard_navigation&&r()}),e.attachEvent("onGanttRender",function(){e.eventRemove(document,"keydown",i),e.eventRemove(e.$container,"focus",a),e.eventRemove(e.$container,"mousedown",s),e.config.keyboard_navigation?(e.event(document,"keydown",i),e.event(e.$container,"focus",a),e.event(e.$container,"mousedown",s),e.$container.setAttribute("tabindex","0")):e.$container.removeAttribute("tabindex")});var d=e.attachEvent("onGanttReady",function(){if(e.detachEvent(d),e.$data.tasksStore.attachEvent("onStoreUpdated",function(t){if(e.config.keyboard_navigation&&n.isEnabled()){var o=n.getActiveNode();o&&o.taskId==t&&r()}}),e._smart_render){var t=e._smart_render._redrawTasks;e._smart_render._redrawTasks=function(o,i){if(e.config.keyboard_navigation&&n.isEnabled()){var a=n.getActiveNode();if(a&&void 0!==a.taskId){for(var r=!1,s=0;s<i.length;s++)if(i[s].id==a.taskId&&i[s].start_date){r=!0;break}r||i.push(e.getTask(a.taskId))}}return t.apply(this,arguments)}}});e.attachEvent("onAfterTaskAdd",function(t,o){if(!e.config.keyboard_navigation)return!0;if(n.isEnabled()){var i=0,a=n.activeNode;a instanceof e.$keyboardNavigation.TaskCell&&(i=a.columnIndex);var r=e.config.keyboard_navigation_cells?e.$keyboardNavigation.TaskCell:e.$keyboardNavigation.TaskRow;n.setActiveNode(new r(t,i))}}),e.attachEvent("onTaskIdChange",function(t,o){if(!e.config.keyboard_navigation)return!0;var i=n.activeNode;return n.isTaskFocused(t)&&(i.taskId=o),!0});var l=setInterval(function(){if(e.config.keyboard_navigation){var t,o=function(){var t=document.activeElement;return t===document.body&&document.getSelection&&(t=document.getSelection().focusNode||document.body),t}(),i=e.$container;if(!o||e._locate_css(o,"gantt_cal_quick_info"))t=!1;else{for(;o!=i&&o;)o=o.parentNode;t=o==i}t&&!n.isEnabled()?n.enable():!t&&n.isEnabled()&&n.disable()}},500);function c(t){var n={gantt:e.$keyboardNavigation.GanttNode,headerCell:e.$keyboardNavigation.HeaderCell,taskRow:e.$keyboardNavigation.TaskRow,taskCell:e.$keyboardNavigation.TaskCell};return n[t]||n.gantt}function u(t){for(var n=e.getGridColumns(),o=0;o<n.length;o++)if(n[o].name==t)return o;return 0}e.attachEvent("onDestroy",function(){clearInterval(l)});var f={};t(f),e.mixin(f,{addShortcut:function(t,e,n){var o=c(n);o&&o.prototype.bind(t,e)},getShortcutHandler:function(t,n){var o=e.$keyboardNavigation.shortcuts.parse(t);if(o.length)return this.getCommandHandler(o[0],n)},getCommandHandler:function(t,e){var n=c(e);if(n&&t)return n.prototype.findHandler(t)},removeShortcut:function(t,e){var n=c(e);n&&n.prototype.unbind(t)},focus:function(t){var e,o=t?t.type:null,i=c(o);switch(o){case"taskCell":e=new i(t.id,u(t.column));break;case"taskRow":e=new i(t.id);break;case"headerCell":e=new i(u(t.column))}n.delay(function(){e?n.setActiveNode(e):(n.enable(),n.getActiveNode()?n.awaitsFocus()||n.enable():n.setDefaultNode())})},getActiveNode:function(){if(n.isEnabled()){var t=n.getActiveNode(),o=function(t){return t instanceof e.$keyboardNavigation.GanttNode?"gantt":t instanceof e.$keyboardNavigation.HeaderCell?"headerCell":t instanceof e.$keyboardNavigation.TaskRow?"taskRow":t instanceof e.$keyboardNavigation.TaskCell?"taskCell":null}(t),i=e.getGridColumns();switch(o){case"taskCell":return{type:"taskCell",id:t.taskId,column:i[t.columnIndex].name};case"taskRow":return{type:"taskRow",id:t.taskId};case"headerCell":return{type:"headerCell",column:i[t.index].name}}}return null}}),e.$keyboardNavigation.facade=f,e.ext.keyboardNavigation=f,e.focus=function(){f.focus()},e.addShortcut=f.addShortcut,e.getShortcutHandler=f.getShortcutHandler,e.removeShortcut=f.removeShortcut}()}(gantt)}()},4:function(t,e){var n=function(){this._connected=[],this._silent_mode=!1};n.prototype={_silentStart:function(){this._silent_mode=!0},_silentEnd:function(){this._silent_mode=!1}};var o=function(t){var e=[],n=function(){for(var n=!0,o=0;o<e.length;o++)if(e[o]){var i=e[o].apply(t,arguments);n=n&&i}return n};return n.addEvent=function(t){return"function"==typeof t&&e.push(t)-1},n.removeEvent=function(t){e[t]=null},n};t.exports=function(t){var e=new n;t.attachEvent=function(t,n,i){return t="ev_"+t.toLowerCase(),e[t]||(e[t]=o(i||this)),t+":"+e[t].addEvent(n)},t.attachAll=function(t,e){this.attachEvent("listen_all",t,e)},t.callEvent=function(t,n,o){if(e._silent_mode)return!0;var i="ev_"+t.toLowerCase();return e.ev_listen_all&&e.ev_listen_all.apply(o||this,[t].concat(n)),!e[i]||e[i].apply(o||this,n)},t.checkEvent=function(t){return!!e["ev_"+t.toLowerCase()]},t.detachEvent=function(t){if(t){var n=t.split(":"),o=n[0],i=n[1];e[o]&&e[o].removeEvent(i)}},t.detachAllEvents=function(){for(var t in e)0===t.indexOf("ev_")&&delete e[t]}}}})});
//# sourceMappingURL=dhtmlxgantt_keyboard_navigation.js.map
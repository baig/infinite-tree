!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.InfiniteTree=factory():root.InfiniteTree=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_events=__webpack_require__(1),_events2=_interopRequireDefault(_events),_clusterize=__webpack_require__(2),_clusterize2=_interopRequireDefault(_clusterize),_flattree=__webpack_require__(3),_renderer=__webpack_require__(4),_utils=__webpack_require__(5),extend=function(target){for(var _len=arguments.length,sources=Array(_len>1?_len-1:0),_key=1;_len>_key;_key++)sources[_key-1]=arguments[_key];return sources.forEach(function(source){for(var key in source)source.hasOwnProperty(key)&&(target[key]=source[key])}),target},addEventListener=function(target,type,listener){return target.attachEvent?target.attachEvent("on"+type,listener):target.addEventListener(type,listener,!1)},removeEventListener=function(target,type,listener){return target.detachEvent?target.detachEvent("on"+type,listener):target.removeEventListener(type,listener,!1)},stopPropagation=function(evt){"undefined"!=typeof evt.stopPropagation?evt.stopPropagation():evt.cancelBubble=!0},generateRows=function(){var nodes=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],rowRenderer=arguments.length<=1||void 0===arguments[1]?_renderer.defaultRowRenderer:arguments[1];return nodes.map(function(node){return rowRenderer(node)})},InfiniteTree=function(_events$EventEmitter){function InfiniteTree(){var options=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];_classCallCheck(this,InfiniteTree);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(InfiniteTree).call(this));return _this.options={autoOpen:!1,el:null,rowRenderer:_renderer.defaultRowRenderer},_this.state={openNodes:[],selectedNode:null},_this.clusterize=null,_this.nodebucket={},_this.nodes=[],_this.rows=[],_this.contentElement=null,_this.contentListener=function(evt){var target=evt.target,currentTarget=evt.currentTarget;if(stopPropagation(evt),target!==currentTarget){for(var itemTarget=target;itemTarget&&itemTarget.parentElement!==currentTarget;)itemTarget=itemTarget.parentElement;var id=itemTarget.getAttribute("aria-id"),node=_this.getNodeById(id);target.className.indexOf("tree-toggler")>=0?_this.state.openNodes.indexOf(node)>=0?_this.closeNode(node):_this.openNode(node):_this.selectNode(node)}},_this.options=extend({},_this.options,options),_this.options.el?(_this.create(),options.data&&_this.loadData(options.data),_this):(console.error("Failed to initialize infinite-tree: el is not specified.",options),_possibleConstructorReturn(_this))}return _inherits(InfiniteTree,_events$EventEmitter),_createClass(InfiniteTree,[{key:"create",value:function(){var infiniteTree=document.createElement("div");infiniteTree.className=(0,_utils.classNames)("infinite-tree");var infiniteTreeScroll=document.createElement("div");infiniteTreeScroll.className=(0,_utils.classNames)("infinite-tree-scroll");var infiniteTreeContent=document.createElement("div");infiniteTreeContent.className=(0,_utils.classNames)("infinite-tree-content"),infiniteTreeScroll.appendChild(infiniteTreeContent),infiniteTree.appendChild(infiniteTreeScroll),this.options.el.appendChild(infiniteTree),this.clusterize=new _clusterize2["default"]({tag:"div",rows:[],scrollElem:infiniteTreeScroll,contentElem:infiniteTreeContent,no_data_class:"infinite-tree-no-data"}),this.contentElement=infiniteTreeContent,addEventListener(this.contentElement,"click",this.contentListener)}},{key:"destroy",value:function(){for(removeEventListener(this.contentElement,"click",this.contentListener),this.clusterize&&(this.clusterize.clear(),this.clusterize=null),this.nodes=[],this.rows=[],this.state.openNodes=[],this.state.selectedNode=null;this.contentElement.firstChild;)this.contentElement.removeChild(this.contentElement.firstChild)}},{key:"clear",value:function(){this.clusterize.clear(),this.nodes=[],this.rows=[],this.state.openNodes=[],this.state.selectedNode=null}},{key:"update",value:function(){this.clusterize.update(this.rows)}},{key:"addNodeAfter",value:function(newNode,node){}},{key:"addNodeBefore",value:function(newNode,node){}},{key:"addParentNode",value:function(newNode,node){}},{key:"appendNode",value:function(newNode,parentNode){}},{key:"closeNode",value:function(node){var rowRenderer=this.options.rowRenderer,nodeIndex=this.nodes.indexOf(node);if(0>nodeIndex)throw new Error("Invalid node specified: node.id="+JSON.stringify(node.id));if(this.state.selectedNode&&this.state.selectedNode!==node){var selectedIndex=this.nodes.indexOf(this.state.selectedNode),rangeFrom=nodeIndex+1,rangeTo=nodeIndex+node.state.total;selectedIndex>=rangeFrom&&rangeTo>=selectedIndex&&this.selectNode(node)}node.state.open=!1;var openNodes=this.state.openNodes.filter(function(node){return node.state.more&&node.state.open});this.state.openNodes=openNodes;for(var deleteCount=node.state.total,p=node;p;)p.state.total=p.state.total-deleteCount,p=p.parent;this.nodes.splice(nodeIndex+1,deleteCount),this.rows.splice(nodeIndex+1,deleteCount),this.rows[nodeIndex]=rowRenderer(node),this.emit("tree.close",node),this.update()}},{key:"getNodeById",value:function(id){var node=(this.nodebucket[id]||[])[0];return void 0!==node?node:null}},{key:"getSelectedNode",value:function(){return this.state.selectedNode}},{key:"getState",value:function(){}},{key:"getTree",value:function(){for(var tree=this.nodes.length>0?this.nodes[0]:null;tree&&null!==tree.parent;)tree=tree.parent;return tree}},{key:"loadData",value:function(){var _this2=this,data=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],_options=this.options,autoOpen=_options.autoOpen,rowRenderer=_options.rowRenderer;this.nodes=(0,_flattree.flatten)(data,{openAllNodes:autoOpen}),this.nodebucket={},this.nodes.forEach(function(node){if(void 0!==node.id){var nodebucket=_this2.nodebucket[node.id];_this2.nodebucket[node.id]=nodebucket?nodebucket.concat(node):[node]}});var openNodes=this.nodes.filter(function(node){return node.state.more&&node.state.open});this.state.openNodes=openNodes,this.state.selectedNode=null,this.rows=this.nodes.map(function(node){return rowRenderer(node)}),this.update()}},{key:"openNode",value:function(node){var rowRenderer=this.options.rowRenderer,nodeIndex=this.nodes.indexOf(node);if(0>nodeIndex)throw new Error("Invalid node specified: node.id="+JSON.stringify(node.id));node.state.open=!0;var openNodes=[node].concat(this.state.openNodes);this.state.openNodes=openNodes;var nodes=(0,_flattree.flatten)(node.children,{openNodes:this.state.openNodes}),rows=generateRows(nodes,rowRenderer);this.nodes.splice.apply(this.nodes,[nodeIndex+1,0].concat(nodes)),this.rows.splice.apply(this.rows,[nodeIndex+1,0].concat(rows)),this.rows[nodeIndex]=generateRows([node],rowRenderer)[0],this.emit("tree.open",node),this.update()}},{key:"removeNode",value:function(node){}},{key:"scrollToNode",value:function(node){}},{key:"selectNode",value:function(){var node=arguments.length<=0||void 0===arguments[0]?null:arguments[0];if(null!==node){var rowRenderer=this.options.rowRenderer,nodeIndex=this.nodes.indexOf(node);if(0>nodeIndex)throw new Error("Invalid node specified: node.id="+JSON.stringify(node.id));if(this.state.selectedNode!==node&&(node.state.selected=!0,this.rows[nodeIndex]=rowRenderer(node)),this.state.selectedNode){var _selectedNode=this.state.selectedNode,_selectedIndex=this.nodes.indexOf(_selectedNode);_selectedNode.state.selected=!1,this.rows[_selectedIndex]=rowRenderer(_selectedNode)}this.state.selectedNode!==node?(this.state.selectedNode=node,this.emit("tree.select",node)):(this.state.selectedNode=null,this.emit("tree.select",null)),this.update()}else if(this.state.selectedNode){var selectedNode=this.state.selectedNode,selectedIndex=this.nodes.indexOf(selectedNode);selectedNode.state.selected=!1,this.rows[selectedIndex]=rowRenderer(selectedNode),this.state.selectedNode=null,this.emit("tree.select",null),this.update()}}},{key:"setState",value:function(){arguments.length<=0||void 0===arguments[0]?{}:arguments[0]}},{key:"toggle",value:function(node){}},{key:"toString",value:function(){}},{key:"updateNode",value:function(node,data){}}]),InfiniteTree}(_events2["default"].EventEmitter);module.exports=InfiniteTree},function(module,exports){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(arg){return"function"==typeof arg}function isNumber(arg){return"number"==typeof arg}function isObject(arg){return"object"==typeof arg&&null!==arg}function isUndefined(arg){return void 0===arg}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||0>n||isNaN(n))throw TypeError("n must be a positive number");return this._maxListeners=n,this},EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(this._events||(this._events={}),"error"===type&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if(er=arguments[1],er instanceof Error)throw er;throw TypeError('Uncaught, unspecified "error" event.')}if(handler=this._events[type],isUndefined(handler))return!1;if(isFunction(handler))switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:args=Array.prototype.slice.call(arguments,1),handler.apply(this,args)}else if(isObject(handler))for(args=Array.prototype.slice.call(arguments,1),listeners=handler.slice(),len=listeners.length,i=0;len>i;i++)listeners[i].apply(this,args);return!0},EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",type,isFunction(listener.listener)?listener.listener:listener),this._events[type]?isObject(this._events[type])?this._events[type].push(listener):this._events[type]=[this._events[type],listener]:this._events[type]=listener,isObject(this._events[type])&&!this._events[type].warned&&(m=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,m&&m>0&&this._events[type].length>m&&(this._events[type].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[type].length),"function"==typeof console.trace&&console.trace())),this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(type,listener){function g(){this.removeListener(type,g),fired||(fired=!0,listener.apply(this,arguments))}if(!isFunction(listener))throw TypeError("listener must be a function");var fired=!1;return g.listener=listener,this.on(type,g),this},EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError("listener must be a function");if(!this._events||!this._events[type])return this;if(list=this._events[type],length=list.length,position=-1,list===listener||isFunction(list.listener)&&list.listener===listener)delete this._events[type],this._events.removeListener&&this.emit("removeListener",type,listener);else if(isObject(list)){for(i=length;i-- >0;)if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}if(0>position)return this;1===list.length?(list.length=0,delete this._events[type]):list.splice(position,1),this._events.removeListener&&this.emit("removeListener",type,listener)}return this},EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[type]&&delete this._events[type],this;if(0===arguments.length){for(key in this._events)"removeListener"!==key&&this.removeAllListeners(key);return this.removeAllListeners("removeListener"),this._events={},this}if(listeners=this._events[type],isFunction(listeners))this.removeListener(type,listeners);else if(listeners)for(;listeners.length;)this.removeListener(type,listeners[listeners.length-1]);return delete this._events[type],this},EventEmitter.prototype.listeners=function(type){var ret;return ret=this._events&&this._events[type]?isFunction(this._events[type])?[this._events[type]]:this._events[type].slice():[]},EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;if(evlistener)return evlistener.length}return 0},EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type)}},function(module,exports,__webpack_require__){!function(name,definition){module.exports=definition()}("Clusterize",function(){"use strict";function on(evt,element,fnc){return element.addEventListener?element.addEventListener(evt,fnc,!1):element.attachEvent("on"+evt,fnc)}function off(evt,element,fnc){return element.removeEventListener?element.removeEventListener(evt,fnc,!1):element.detachEvent("on"+evt,fnc)}function isArray(arr){return"[object Array]"===Object.prototype.toString.call(arr)}function getStyle(prop,elem){return window.getComputedStyle?window.getComputedStyle(elem)[prop]:elem.currentStyle[prop]}var ie=function(){for(var v=3,el=document.createElement("b"),all=el.all||[];el.innerHTML="<!--[if gt IE "+ ++v+"]><i><![endif]-->",all[0];);return v>4?v:document.documentMode}(),is_mac=navigator.platform.toLowerCase().indexOf("mac")+1,Clusterize=function(data){if(!(this instanceof Clusterize))return new Clusterize(data);var self=this,defaults={item_height:0,block_height:0,rows_in_block:50,rows_in_cluster:0,cluster_height:0,blocks_in_cluster:4,tag:null,content_tag:null,show_no_data_row:!0,no_data_class:"clusterize-no-data",no_data_text:"No data",keep_parity:!0,callbacks:{},scroll_top:0};self.options={};for(var option,options=["rows_in_block","blocks_in_cluster","show_no_data_row","no_data_class","no_data_text","keep_parity","tag","callbacks"],i=0;option=options[i];i++)self.options[option]="undefined"!=typeof data[option]&&null!=data[option]?data[option]:defaults[option];for(var elem,elems=["scroll","content"],i=0;elem=elems[i];i++)if(self[elem+"_elem"]=data[elem+"Id"]?document.getElementById(data[elem+"Id"]):data[elem+"Elem"],!self[elem+"_elem"])throw new Error("Error! Could not find "+elem+" element");self.content_elem.hasAttribute("tabindex")||self.content_elem.setAttribute("tabindex",0);var rows=isArray(data.rows)?data.rows:self.fetchMarkup(),cache={data:"",bottom:0},scroll_top=self.scroll_elem.scrollTop;self.exploreEnvironment(rows),self.insertToDOM(rows,cache),self.scroll_elem.scrollTop=scroll_top;var last_cluster=!1,scroll_debounce=0,pointer_events_set=!1,scrollEv=function(){is_mac&&(pointer_events_set||(self.content_elem.style.pointerEvents="none"),pointer_events_set=!0,clearTimeout(scroll_debounce),scroll_debounce=setTimeout(function(){self.content_elem.style.pointerEvents="auto",pointer_events_set=!1},50)),last_cluster!=(last_cluster=self.getClusterNum())&&self.insertToDOM(rows,cache),self.options.callbacks.scrollingProgress&&self.options.callbacks.scrollingProgress(self.getScrollProgress())},resize_debounce=0,resizeEv=function(){clearTimeout(resize_debounce),resize_debounce=setTimeout(self.refresh,100)};on("scroll",self.scroll_elem,scrollEv),on("resize",window,resizeEv),self.destroy=function(clean){off("scroll",self.scroll_elem,scrollEv),off("resize",window,resizeEv),self.html((clean?self.generateEmptyRow():rows).join(""))},self.refresh=function(){self.getRowsHeight(rows)&&self.update(rows)},self.update=function(new_rows){rows=isArray(new_rows)?new_rows:[];var scroll_top=self.scroll_elem.scrollTop;rows.length*self.options.item_height<scroll_top&&(self.scroll_elem.scrollTop=0,last_cluster=0),self.insertToDOM(rows,cache),self.scroll_elem.scrollTop=scroll_top},self.clear=function(){self.update([])},self.getRowsAmount=function(){return rows.length},self.getScrollProgress=function(){return this.options.scroll_top/(rows.length*this.options.item_height)*100||0};var add=function(where,_new_rows){var new_rows=isArray(_new_rows)?_new_rows:[];new_rows.length&&(rows="append"==where?rows.concat(new_rows):new_rows.concat(rows),self.insertToDOM(rows,cache))};self.append=function(rows){add("append",rows)},self.prepend=function(rows){add("prepend",rows)}};return Clusterize.prototype={constructor:Clusterize,fetchMarkup:function(){for(var rows=[],rows_nodes=this.getChildNodes(this.content_elem);rows_nodes.length;)rows.push(rows_nodes.shift().outerHTML);return rows},exploreEnvironment:function(rows){var opts=this.options;opts.content_tag=this.content_elem.tagName.toLowerCase(),rows.length&&(ie&&9>=ie&&!opts.tag&&(opts.tag=rows[0].match(/<([^>\s\/]*)/)[1].toLowerCase()),this.content_elem.children.length<=1&&this.html(rows[0]+rows[0]+rows[0]),opts.tag||(opts.tag=this.content_elem.children[0].tagName.toLowerCase()),this.getRowsHeight(rows))},getRowsHeight:function(rows){var opts=this.options,prev_item_height=opts.item_height;if(opts.cluster_height=0,rows.length){var nodes=this.content_elem.children;return opts.item_height=nodes[Math.floor(nodes.length/2)].offsetHeight,"tr"==opts.tag&&"collapse"!=getStyle("borderCollapse",this.content_elem)&&(opts.item_height+=parseInt(getStyle("borderSpacing",this.content_elem))||0),opts.block_height=opts.item_height*opts.rows_in_block,opts.rows_in_cluster=opts.blocks_in_cluster*opts.rows_in_block,opts.cluster_height=opts.blocks_in_cluster*opts.block_height,prev_item_height!=opts.item_height}},getClusterNum:function(){return this.options.scroll_top=this.scroll_elem.scrollTop,Math.floor(this.options.scroll_top/(this.options.cluster_height-this.options.block_height))||0},generateEmptyRow:function(){var opts=this.options;if(!opts.tag||!opts.show_no_data_row)return[];var td,empty_row=document.createElement(opts.tag),no_data_content=document.createTextNode(opts.no_data_text);return empty_row.className=opts.no_data_class,"tr"==opts.tag&&(td=document.createElement("td"),td.appendChild(no_data_content)),empty_row.appendChild(td||no_data_content),[empty_row.outerHTML]},generate:function(rows,cluster_num){var opts=this.options,rows_len=rows.length;if(rows_len<opts.rows_in_block)return{top_offset:0,bottom_offset:0,rows_above:0,rows:rows_len?rows:this.generateEmptyRow()};opts.cluster_height||this.exploreEnvironment(rows);var items_start=Math.max((opts.rows_in_cluster-opts.rows_in_block)*cluster_num,0),items_end=items_start+opts.rows_in_cluster,top_offset=Math.max(items_start*opts.item_height,0),bottom_offset=Math.max((rows_len-items_end)*opts.item_height,0),this_cluster_rows=[],rows_above=items_start;1>top_offset&&rows_above++;for(var i=items_start;items_end>i;i++)rows[i]&&this_cluster_rows.push(rows[i]);return{top_offset:top_offset,bottom_offset:bottom_offset,rows_above:rows_above,rows:this_cluster_rows}},renderExtraTag:function(class_name,height){var tag=document.createElement(this.options.tag),clusterize_prefix="clusterize-";return tag.className=[clusterize_prefix+"extra-row",clusterize_prefix+class_name].join(" "),height&&(tag.style.height=height+"px"),tag.outerHTML},insertToDOM:function(rows,cache){var data=this.generate(rows,this.getClusterNum()),this_cluster_rows=data.rows.join(""),this_cluster_content_changed=this.checkChanges("data",this_cluster_rows,cache),only_bottom_offset_changed=this.checkChanges("bottom",data.bottom_offset,cache),callbacks=this.options.callbacks,layout=[];this_cluster_content_changed?(data.top_offset&&(this.options.keep_parity&&layout.push(this.renderExtraTag("keep-parity")),layout.push(this.renderExtraTag("top-space",data.top_offset))),layout.push(this_cluster_rows),data.bottom_offset&&layout.push(this.renderExtraTag("bottom-space",data.bottom_offset)),callbacks.clusterWillChange&&callbacks.clusterWillChange(),this.html(layout.join("")),"ol"==this.options.content_tag&&this.content_elem.setAttribute("start",data.rows_above),callbacks.clusterChanged&&callbacks.clusterChanged()):only_bottom_offset_changed&&(this.content_elem.lastChild.style.height=data.bottom_offset+"px")},html:function(data){var content_elem=this.content_elem;if(ie&&9>=ie&&"tr"==this.options.tag){var last,div=document.createElement("div");for(div.innerHTML="<table><tbody>"+data+"</tbody></table>";last=content_elem.lastChild;)content_elem.removeChild(last);for(var rows_nodes=this.getChildNodes(div.firstChild.firstChild);rows_nodes.length;)content_elem.appendChild(rows_nodes.shift())}else content_elem.innerHTML=data},getChildNodes:function(tag){for(var child_nodes=tag.children,nodes=[],i=0,ii=child_nodes.length;ii>i;i++)nodes.push(child_nodes[i]);return nodes},checkChanges:function(type,value,cache){var changed=value!=cache[type];return cache[type]=value,changed}},Clusterize})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i["return"]&&_i["return"]()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return sliceIterator(arr,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),extend=function(target){for(var _len=arguments.length,sources=Array(_len>1?_len-1:0),_key=1;_len>_key;_key++)sources[_key-1]=arguments[_key];return sources.forEach(function(source){for(var key in source)source.hasOwnProperty(key)&&(target[key]=source[key])}),target},flatten=function flatten(){var nodes=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],options=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];nodes=[].concat(nodes);var flatten=[],stack=[],pool={lastChild:{}};options.openAllNodes=!!options.openAllNodes,options.openNodes=options.openNodes||[],options.throwOnError=!!options.throwOnError;var firstNode=nodes.length>0?nodes[0]:null,parent=firstNode?firstNode.parent:null,index=0,root=parent||{label:"",parent:null,children:nodes,state:{depth:-1,path:"",total:0}};if(root===parent)for(var subtotal=root.state.total||0,p=root;p;){var _p$state=p.state,path=_p$state.path,lastChild=_p$state.lastChild,_p$state$total=_p$state.total,total=void 0===_p$state$total?0:_p$state$total;if(path&&lastChild&&(pool.lastChild[path]=!0),p.state.total=total-subtotal,p.state.total<0){if(options.throwOnError)throw new Error("The node might have been corrupted: id="+JSON.stringify(p.id)+", state="+JSON.stringify(p.state));console&&console.log("Error: The node might have been corrupted: id=%s, label=%s, parent=%s, children=%s, state=%s",JSON.stringify(p.id),JSON.stringify(p.label),p.parent,p.children,JSON.stringify(p.state))}p=p.parent}for(stack.push([root,root.state.depth,index]);stack.length>0;)for(var _stack$pop=stack.pop(),_stack$pop2=_slicedToArray(_stack$pop,3),current=_stack$pop2[0],depth=_stack$pop2[1],_index=_stack$pop2[2],_loop=function(){var node=current.children[_index];node.parent=current,node.children=node.children||[];var path=current.state.path+"."+_index,more=Object.keys(node.children).length>0,open=more&&function(){var openAllNodes=options.openAllNodes,openNodes=options.openNodes;return openAllNodes?!0:openNodes.indexOf(node)>=0?!0:openNodes.indexOf(node.id)>=0}(),lastChild=_index===current.children.length-1,prefixMask=function(prefix){for(var mask="";prefix.length>0;)prefix=prefix.replace(/\.\d+$/,""),mask=!prefix||pool.lastChild[prefix]?"0"+mask:"1"+mask;return mask}(path);lastChild&&(pool.lastChild[path]=!0),node.state=extend({},node.state,{depth:depth+1,lastChild:lastChild,more:more,open:open,path:path,prefixMask:prefixMask,total:0});for(var _p=node;null!==_p.parent;)_p.parent.state.total++,_p=_p.parent;return flatten.push(node),++_index,more&&!open?"continue":void(more&&(stack.push([current,depth,_index]),_index=0,depth+=1,current=node))};_index<current.children.length;){_loop()}return flatten};exports.flatten=flatten},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultRowRenderer=void 0;var _utils=__webpack_require__(5),defaultRowRenderer=function(node){var id=node.id,label=node.label,state=node.state,depth=state.depth,more=state.more,open=state.open,path=state.path,children=state.children,total=state.total,_state$selected=state.selected,selected=void 0===_state$selected?!1:_state$selected,togglerContent="";more&&open&&(togglerContent="▼"),more&&!open&&(togglerContent="►");var toggler=(0,_utils.buildHTML)("a",togglerContent,{"class":function(){return more&&open?(0,_utils.classNames)("tree-toggler"):more&&!open?(0,_utils.classNames)("tree-toggler","tree-closed"):""}()}),title=(0,_utils.buildHTML)("span",(0,_utils.quoteattr)(label),{"class":(0,_utils.classNames)("tree-title")}),treeNode=(0,_utils.buildHTML)("div",toggler+title,{"class":"tree-node",style:"margin-left: "+12*depth+"px"}),treeItem=(0,_utils.buildHTML)("div",treeNode,{"aria-id":id,"aria-expanded":more&&open,"aria-depth":depth,"aria-path":path,"aria-selected":selected,"aria-children":children?Object.keys(children).length:0,"aria-total":total,"class":(0,_utils.classNames)("tree-item",{"tree-selected":selected})});return treeItem};exports.defaultRowRenderer=defaultRowRenderer},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj},buildHTML=function buildHTML(tag,html,attrs){switch(tag){case"select":if("object"===("undefined"==typeof html?"undefined":_typeof(html))){var options=html||{};html="";for(var value in options)options.hasOwnProperty(value)&&(html+=buildHTML("option",options[value]||"",{value:value}))}break;default:"object"===("undefined"==typeof html?"undefined":_typeof(html))&&(attrs=html,html=void 0)}var h="<"+tag;for(var attr in attrs)attrs.hasOwnProperty(attr)&&"undefined"!=typeof attrs[attr]&&(h+=" "+attr+'="'+quoteattr(attrs[attr])+'"');return h+="undefined"!=typeof html?">"+html+"</"+tag+">":"/>"},classNames=function classNames(){for(var _len=arguments.length,args=Array(_len),_key=0;_len>_key;_key++)args[_key]=arguments[_key];var classNames=[];return args.forEach(function(arg){Array.isArray(arg)?classNames=classNames.concat(arg):"object"===("undefined"==typeof arg?"undefined":_typeof(arg))?Object.keys(arg).forEach(function(className){var ok=arg[className];ok&&classNames.push(className)}):classNames.push(arg)}),classNames.join(" ")},quoteattr=function(s,preserveCR){return preserveCR=preserveCR?"&#13;":"\n",(""+s).replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r\n/g,preserveCR).replace(/[\r\n]/g,preserveCR)};exports.buildHTML=buildHTML,exports.classNames=classNames,exports.quoteattr=quoteattr}])});
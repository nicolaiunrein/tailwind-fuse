let a1=`number`,a3=`string`,a5=`Object`,a8=4,a7=16,V=null,Y=`utf-8`,ac=217,_=0,W=1,X=`undefined`,a2=`boolean`,a0=`function`,T=Array,a4=Array.isArray,Z=Error,a6=FinalizationRegistry,aa=Object,ab=Promise,a9=Reflect,$=Uint8Array,U=undefined;var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:W,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=_;try{return e(c,f.b,...b)}finally{if(--f.cnt===_){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});var y=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf3b98d069fe892fc(b,c)});var u=(a=>{const b=typeof a;if(b==a1||b==a2||a==V){return `${a}`};if(b==a3){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==V){return `Symbol`}else{return `Symbol(${b})`}};if(b==a0){const b=a.name;if(typeof b==a3&&b.length>_){return `Function(${b})`}else{return `Function`}};if(a4(a)){const b=a.length;let c=`[`;if(b>_){c+=u(a[_])};for(let d=W;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>W){d=c[W]}else{return toString.call(a)};if(d==a5){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a5}};if(a instanceof Z){return `${a.name}: ${a.message}\n${a.stack}`};return d});var E=((a,b)=>{if(a===_){return c(b)}else{return k(a,b)}});var k=((a,b)=>{a=a>>>_;return h.decode(j().subarray(a,a+ b))});var p=(a=>a===U||a===V);var S=(async(b)=>{if(a!==U)return a;if(typeof b===X){b=new URL(`demo-aa2b231c719fd2ea_bg.wasm`,import.meta.url)};const c=O();if(typeof b===a3||typeof Request===a0&&b instanceof Request||typeof URL===a0&&b instanceof URL){b=fetch(b)};P(c);const {instance:d,module:e}=await N(await b,c);return Q(d,e)});var R=(b=>{if(a!==U)return a;const c=O();P(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return Q(d,b)});var g=(a=>{const b=c(a);f(a);return b});var P=((a,b)=>{});var O=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return e(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return e(c)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Z();return e(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{var d=E(b,c);if(b!==_){a.__wbindgen_free(b,c,W)};console.error(d)});b.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==W){b.a=_;return !0};const c=!1;return c});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===a3?e:U;var g=p(f)?_:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a8+ W]=h;r()[b/a8+ _]=g});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===a3;return b});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===a2?(b?W:_):2;return d});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===U;return b});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===V;return b});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===a1?d:U;t()[a/8+ W]=p(e)?_:e;r()[a/a8+ _]=!p(e)});b.wbg.__wbindgen_is_falsy=(a=>{const b=!c(a);return b});b.wbg.__wbg_instanceof_Window_f401953a2cf86220=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5100775d18896c16=(a=>{const b=c(a).document;return p(b)?_:e(b)});b.wbg.__wbg_location_2951b5ee34f19221=(a=>{const b=c(a).location;return e(b)});b.wbg.__wbg_history_bc4057de66a2015f=function(){return F((a=>{const b=c(a).history;return e(b)}),arguments)};b.wbg.__wbg_localStorage_e381d34d0c40c761=function(){return F((a=>{const b=c(a).localStorage;return p(b)?_:e(b)}),arguments)};b.wbg.__wbg_sessionStorage_0a3bf8c7b2253d1a=function(){return F((a=>{const b=c(a).sessionStorage;return p(b)?_:e(b)}),arguments)};b.wbg.__wbg_matchMedia_66bb21e3ef19270c=function(){return F(((a,b,d)=>{var f=E(b,d);const g=c(a).matchMedia(f);return p(g)?_:e(g)}),arguments)};b.wbg.__wbg_scrollTo_4d970c5e1c4b340b=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbg_requestAnimationFrame_549258cfa66011f0=function(){return F(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_clearTimeout_ba63ae54a36e111e=((a,b)=>{c(a).clearTimeout(b)});b.wbg.__wbg_setTimeout_c172d5704ef82276=function(){return F(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_documentElement_da9c841ddb352d95=(a=>{const b=c(a).documentElement;return p(b)?_:e(b)});b.wbg.__wbg_body_edb1908d3ceff3a1=(a=>{const b=c(a).body;return p(b)?_:e(b)});b.wbg.__wbg_head_d7a99d3f407e2291=(a=>{const b=c(a).head;return p(b)?_:e(b)});b.wbg.__wbg_createComment_354ccab4fdc521ee=((a,b,d)=>{var f=E(b,d);const g=c(a).createComment(f);return e(g)});b.wbg.__wbg_createDocumentFragment_8c86903bbb0a3c3c=(a=>{const b=c(a).createDocumentFragment();return e(b)});b.wbg.__wbg_createElement_8bae7856a4bb7411=function(){return F(((a,b,d)=>{var f=E(b,d);const g=c(a).createElement(f);return e(g)}),arguments)};b.wbg.__wbg_createElementNS_556a62fb298be5a2=function(){return F(((a,b,d,f,g)=>{var h=E(b,d);var i=E(f,g);const j=c(a).createElementNS(h,i);return e(j)}),arguments)};b.wbg.__wbg_createTextNode_0c38fd80a5b2284d=((a,b,d)=>{var f=E(b,d);const g=c(a).createTextNode(f);return e(g)});b.wbg.__wbg_getElementById_c369ff43f0db99cf=((a,b,d)=>{var f=E(b,d);const g=c(a).getElementById(f);return p(g)?_:e(g)});b.wbg.__wbg_classList_1f0528ee002e56d4=(a=>{const b=c(a).classList;return e(b)});b.wbg.__wbg_setinnerHTML_26d69b59e1af99c7=((a,b,d)=>{var e=E(b,d);c(a).innerHTML=e});b.wbg.__wbg_getAttribute_99bddb29274b29b9=((b,d,e,f)=>{var g=E(e,f);const h=c(d).getAttribute(g);var i=p(h)?_:o(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=l;r()[b/a8+ W]=j;r()[b/a8+ _]=i});b.wbg.__wbg_hasAttribute_8340e1a2a46f10f3=((a,b,d)=>{var e=E(b,d);const f=c(a).hasAttribute(e);return f});b.wbg.__wbg_removeAttribute_1b10a06ae98ebbd1=function(){return F(((a,b,d)=>{var e=E(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_scrollIntoView_0c1a31f3d0dce6ae=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_setAttribute_3c9f6c303b696daa=function(){return F(((a,b,d,e,f)=>{var g=E(b,d);var h=E(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_210596e44d88649f=function(){return F(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_49b0a5925a04b955=(a=>{c(a).remove()});b.wbg.__wbg_parentNode_6be3abff20e1a5fb=(a=>{const b=c(a).parentNode;return p(b)?_:e(b)});b.wbg.__wbg_childNodes_118168e8b23bcb9b=(a=>{const b=c(a).childNodes;return e(b)});b.wbg.__wbg_previousSibling_9708a091a3e6e03b=(a=>{const b=c(a).previousSibling;return p(b)?_:e(b)});b.wbg.__wbg_nextSibling_709614fdb0fb7a66=(a=>{const b=c(a).nextSibling;return p(b)?_:e(b)});b.wbg.__wbg_appendChild_580ccb11a660db68=function(){return F(((a,b)=>{const d=c(a).appendChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_cloneNode_e19c313ea20d5d1d=function(){return F((a=>{const b=c(a).cloneNode();return e(b)}),arguments)};b.wbg.__wbg_removeChild_96bbfefd2f5a0261=function(){return F(((a,b)=>{const d=c(a).removeChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_length_d0a802565d17eec4=(a=>{const b=c(a).length;return b});b.wbg.__wbg_setdata_8c2b43af041cc1b3=((a,b,d)=>{var e=E(b,d);c(a).data=e});b.wbg.__wbg_addEventListener_53b787075bd5e003=function(){return F(((a,b,d,e)=>{var f=E(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_addEventListener_4283b15b4f039eb5=function(){return F(((a,b,d,e,f)=>{var g=E(b,d);c(a).addEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_dispatchEvent_63c0c01600a98fd2=function(){return F(((a,b)=>{const d=c(a).dispatchEvent(c(b));return d}),arguments)};b.wbg.__wbg_removeEventListener_92cb9b3943463338=function(){return F(((a,b,d,e)=>{var f=E(b,d);c(a).removeEventListener(f,c(e))}),arguments)};b.wbg.__wbg_removeEventListener_f3689e55cc5b09c4=function(){return F(((a,b,d,e,f)=>{var g=E(b,d);c(a).removeEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_close_a994f9425dab445c=function(){return F((a=>{c(a).close()}),arguments)};b.wbg.__wbg_enqueue_ea194723156c0cc2=function(){return F(((a,b)=>{c(a).enqueue(c(b))}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_9db040264422e84a=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_c667c7623404d6bf=(a=>{const b=c(a).host;return e(b)});b.wbg.__wbg_add_dcb05a8ba423bdac=function(){return F(((a,b,d)=>{var e=E(b,d);c(a).add(e)}),arguments)};b.wbg.__wbg_remove_698118fb25ab8150=function(){return F(((a,b,d)=>{var e=E(b,d);c(a).remove(e)}),arguments)};b.wbg.__wbg_href_7bfb3b2fdc0a6c3f=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_origin_ea68ac578fa8517a=((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_pathname_c5fe403ef9525ec6=((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_search_c68f506c44be6d1e=((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_searchParams_bc5845fe67587f77=(a=>{const b=c(a).searchParams;return e(b)});b.wbg.__wbg_hash_cdea7a9b7e684a42=((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_newwithbase_6aabbfb1b2e6a1cb=function(){return F(((a,b,c,d)=>{var f=E(a,b);var g=E(c,d);const h=new URL(f,g);return e(h)}),arguments)};b.wbg.__wbg_target_2fc177e386c8b7b0=(a=>{const b=c(a).target;return p(b)?_:e(b)});b.wbg.__wbg_defaultPrevented_cc14a1dd3dd69c38=(a=>{const b=c(a).defaultPrevented;return b});b.wbg.__wbg_cancelBubble_c0aa3172524eb03c=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_58473fd5ae55f2cd=(a=>{const b=c(a).composedPath();return e(b)});b.wbg.__wbg_preventDefault_b1a4aafc79409429=(a=>{c(a).preventDefault()});b.wbg.__wbg_ctrlKey_008695ce60a588f5=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_1e76dbfcdd36a4b4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_altKey_07da841b54bd3ed6=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_metaKey_86bfd3b0d3a8083f=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_367cdc7303e3cf9b=(a=>{const b=c(a).button;return b});b.wbg.__wbg_instanceof_HtmlAnchorElement_5fc0eb2fbc8672d8=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_target_f0876f510847bc60=((b,d)=>{const e=c(d).target;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_href_40fd5bca11c13133=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_matches_e14ed9ff8291cf24=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_append_7ba9d5c2eb183eea=function(){return F(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_view_7f0ce470793a340f=(a=>{const b=c(a).view;return p(b)?_:e(b)});b.wbg.__wbg_respond_b1a43b2e3a06d525=function(){return F(((a,b)=>{c(a).respond(b>>>_)}),arguments)};b.wbg.__wbg_sethref_b94692d1a9f05b53=function(){return F(((a,b,d)=>{var e=E(b,d);c(a).href=e}),arguments)};b.wbg.__wbg_origin_ee93e29ace71f568=function(){return F(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f}),arguments)};b.wbg.__wbg_pathname_5449afe3829f96a1=function(){return F(((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f}),arguments)};b.wbg.__wbg_search_489f12953342ec1f=function(){return F(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f}),arguments)};b.wbg.__wbg_hash_553098e838e06c1d=function(){return F(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f}),arguments)};b.wbg.__wbg_byobRequest_72fca99f9c32c193=(a=>{const b=c(a).byobRequest;return p(b)?_:e(b)});b.wbg.__wbg_close_184931724d961ccc=function(){return F((a=>{c(a).close()}),arguments)};b.wbg.__wbg_getItem_164e8e5265095b87=function(){return F(((b,d,e,f)=>{var g=E(e,f);const h=c(d).getItem(g);var i=p(h)?_:o(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=l;r()[b/a8+ W]=j;r()[b/a8+ _]=i}),arguments)};b.wbg.__wbg_setItem_ba2bb41d73dac079=function(){return F(((a,b,d,e,f)=>{var g=E(b,d);var h=E(e,f);c(a).setItem(g,h)}),arguments)};b.wbg.__wbg_state_9cc3f933b7d50acb=function(){return F((a=>{const b=c(a).state;return e(b)}),arguments)};b.wbg.__wbg_pushState_b8e8d346f8bb33fd=function(){return F(((a,b,d,e,f,g)=>{var h=E(d,e);var i=E(f,g);c(a).pushState(c(b),h,i)}),arguments)};b.wbg.__wbg_replaceState_ec9431bea5108a50=function(){return F(((a,b,d,e,f,g)=>{var h=E(d,e);var i=E(f,g);c(a).replaceState(c(b),h,i)}),arguments)};b.wbg.__wbg_key_dc5b86010fc4d525=((b,d)=>{const e=c(d).key;var f=p(e)?_:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbg_detail_40fcf009a8ab1ab9=(a=>{const b=c(a).detail;return e(b)});b.wbg.__wbg_newwitheventinitdict_df944b5b582e7ecf=function(){return F(((a,b,d)=>{var f=E(a,b);const g=new CustomEvent(f,c(d));return e(g)}),arguments)};b.wbg.__wbg_debug_5fb96680aecf5dc8=(a=>{console.debug(c(a))});b.wbg.__wbg_error_8e3928cfb8a43e2b=(a=>{console.error(c(a))});b.wbg.__wbg_info_530a29cb2e4e3304=(a=>{console.info(c(a))});b.wbg.__wbg_log_5bb5f88f245d7762=(a=>{console.log(c(a))});b.wbg.__wbg_warn_63bbae1730aead09=(a=>{console.warn(c(a))});b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=(a=>{const b=c(a).queueMicrotask;return e(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===a0;return b});b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_get_bd8e338fbd5f5cc8=((a,b)=>{const d=c(a)[b>>>_];return e(d)});b.wbg.__wbg_length_cd7af8117672b8b8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_e258087cd0daa0ea=((a,b)=>{var c=E(a,b);const d=new Function(c);return e(d)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==V;return d});b.wbg.__wbg_next_40fc327bfc8770e6=(a=>{const b=c(a).next;return e(b)});b.wbg.__wbg_next_196c84450b364254=function(){return F((a=>{const b=c(a).next();return e(b)}),arguments)};b.wbg.__wbg_done_298b57d23c0fc80c=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_d93c65011f51a456=(a=>{const b=c(a).value;return e(b)});b.wbg.__wbg_iterator_2cee6dadfd956dfa=(()=>{const a=Symbol.iterator;return e(a)});b.wbg.__wbg_get_e3c254076557e348=function(){return F(((a,b)=>{const d=a9.get(c(a),c(b));return e(d)}),arguments)};b.wbg.__wbg_call_27c0f87801dedf93=function(){return F(((a,b)=>{const d=c(a).call(c(b));return e(d)}),arguments)};b.wbg.__wbg_new_72fb9a18b5ae2624=(()=>{const a=new aa();return e(a)});b.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return F((()=>{const a=self.self;return e(a)}),arguments)};b.wbg.__wbg_window_c6fb939a7f436783=function(){return F((()=>{const a=window.window;return e(a)}),arguments)};b.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return F((()=>{const a=globalThis.globalThis;return e(a)}),arguments)};b.wbg.__wbg_global_207b558942527489=function(){return F((()=>{const a=global.global;return e(a)}),arguments)};b.wbg.__wbg_decodeURI_34e1afc7326c927c=function(){return F(((a,b)=>{var c=E(a,b);const d=decodeURI(c);return e(d)}),arguments)};b.wbg.__wbg_isArray_2ab64d95e09ea0ae=(a=>{const b=a4(c(a));return b});b.wbg.__wbg_new_28c511d9baebfa89=((a,b)=>{var c=E(a,b);const d=new Z(c);return e(d)});b.wbg.__wbg_call_b3ca7c6051f9bec1=function(){return F(((a,b,d)=>{const f=c(a).call(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_now_3014639a94423537=(()=>{const a=Date.now();return a});b.wbg.__wbg_is_010fdc0f4ab96916=((a,b)=>{const d=aa.is(c(a),c(b));return d});b.wbg.__wbg_exec_b9996525463e30df=((a,b,d)=>{var f=E(b,d);const g=c(a).exec(f);return p(g)?_:e(g)});b.wbg.__wbg_new_3c970fa9da0c5794=((a,b,c,d)=>{var f=E(a,b);var g=E(c,d);const h=new RegExp(f,g);return e(h)});b.wbg.__wbg_new_81740750da40724f=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=_;try{return G(d,c.b,a,b)}finally{c.a=d}};const f=new ab(d);return e(f)}finally{c.a=c.b=_}});b.wbg.__wbg_resolve_b0083a7967828ec8=(a=>{const b=ab.resolve(c(a));return e(b)});b.wbg.__wbg_then_0c86a60e8fcfe9f6=((a,b)=>{const d=c(a).then(c(b));return e(d)});b.wbg.__wbg_buffer_12d079cc21e14bdb=(a=>{const b=c(a).buffer;return e(b)});b.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=((a,b,d)=>{const f=new $(c(a),b>>>_,d>>>_);return e(f)});b.wbg.__wbg_set_a47bac70306a19a7=((a,b,d)=>{c(a).set(c(b),d>>>_)});b.wbg.__wbg_length_c20a40f15020d68a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_buffer_dd7f74bc60f1faab=(a=>{const b=c(a).buffer;return e(b)});b.wbg.__wbg_byteLength_58f7b4fab1919d44=(a=>{const b=c(a).byteLength;return b});b.wbg.__wbg_byteOffset_81d60f7392524f62=(a=>{const b=c(a).byteOffset;return b});b.wbg.__wbg_set_1f9b04f170055d33=function(){return F(((a,b,d)=>{const e=a9.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a8+ W]=g;r()[b/a8+ _]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new Z(k(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return e(b)});b.wbg.__wbindgen_closure_wrapper295=((a,b,c)=>{const d=w(a,b,62,x);return e(d)});b.wbg.__wbindgen_closure_wrapper632=((a,b,c)=>{const d=w(a,b,ac,y);return e(d)});b.wbg.__wbindgen_closure_wrapper638=((a,b,c)=>{const d=w(a,b,ac,z);return e(d)});b.wbg.__wbindgen_closure_wrapper640=((a,b,c)=>{const d=w(a,b,ac,z);return e(d)});b.wbg.__wbindgen_closure_wrapper643=((a,b,c)=>{const d=w(a,b,ac,z);return e(d)});b.wbg.__wbindgen_closure_wrapper1039=((a,b,c)=>{const d=w(a,b,408,A);return e(d)});b.wbg.__wbindgen_closure_wrapper1333=((a,b,c)=>{const d=w(a,b,484,B);return e(d)});b.wbg.__wbindgen_closure_wrapper1452=((a,b,c)=>{const d=w(a,b,509,C);return e(d)});b.wbg.__wbindgen_closure_wrapper3083=((a,b,c)=>{const d=w(a,b,537,D);return e(d)});return b});var G=((b,c,d,f)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h173174d6c70da7b3(b,c,e(d),e(f))});var A=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha474d129d0a8badf(b,c)});var N=(async(a,b)=>{if(typeof Response===a0&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===a0){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var D=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h90389a17f9f58bb5(b,c,e(d))});var C=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc7939ad7d6bbd16e(b,c)});var e=(a=>{if(d===b.length)b.push(b.length+ W);const c=d;d=b[c];b[c]=a;return c});var x=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h449e65664694af6c(b,c,e(d))});var o=((a,b,c)=>{if(c===U){const c=m.encode(a);const d=b(c.length,W)>>>_;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,W)>>>_;const f=j();let g=_;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==_){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,W)>>>_;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,W)>>>_};l=g;return e});var t=(()=>{if(s===V||s.byteLength===_){s=new Float64Array(a.memory.buffer)};return s});var f=(a=>{if(a<132)return;b[a]=d;d=a});var z=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5d3ecac3aa8be42c(b,c,e(d))});var j=(()=>{if(i===V||i.byteLength===_){i=new $(a.memory.buffer)};return i});var c=(a=>b[a]);var B=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd0077c11f31fd855(b,c,e(d))});var r=(()=>{if(q===V||q.byteLength===_){q=new Int32Array(a.memory.buffer)};return q});var Q=((b,c)=>{a=b.exports;S.__wbindgen_wasm_module=c;s=V;q=V;i=V;a.__wbindgen_start();return a});function F(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(e(b))}}let a;const b=new T(128).fill(U);b.push(U,V,!0,!1);let d=b.length;const h=typeof TextDecoder!==X?new TextDecoder(Y,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Z(`TextDecoder not available`)}};if(typeof TextDecoder!==X){h.decode()};let i=V;let l=_;const m=typeof TextEncoder!==X?new TextEncoder(Y):{encode:()=>{throw Z(`TextEncoder not available`)}};const n=typeof m.encodeInto===a0?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=V;let s=V;const v=typeof a6===X?{register:()=>{},unregister:()=>{}}:new a6(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});const H=typeof a6===X?{register:()=>{},unregister:()=>{}}:new a6(b=>a.__wbg_intounderlyingbytesource_free(b>>>_));class I{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;H.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b)}type(){try{const e=a.__wbindgen_add_to_stack_pointer(-a7);a.intounderlyingbytesource_type(e,this.__wbg_ptr);var b=r()[e/a8+ _];var c=r()[e/a8+ W];var d=E(b,c);if(b!==_){a.__wbindgen_free(b,c,W)};return d}finally{a.__wbindgen_add_to_stack_pointer(a7)}}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>_}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,e(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,e(b));return g(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}const J=typeof a6===X?{register:()=>{},unregister:()=>{}}:new a6(b=>a.__wbg_intounderlyingsink_free(b>>>_));class K{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;J.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,e(b));return g(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return g(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,e(b));return g(d)}}const L=typeof a6===X?{register:()=>{},unregister:()=>{}}:new a6(b=>a.__wbg_intounderlyingsource_free(b>>>_));class M{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;L.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,e(b));return g(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingsource_cancel(b)}}export default S;export{I as IntoUnderlyingByteSource,K as IntoUnderlyingSink,M as IntoUnderlyingSource,R as initSync}
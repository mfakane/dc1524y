(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))o(_);new MutationObserver(_=>{for(const r of _)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(_){const r={};return _.integrity&&(r.integrity=_.integrity),_.referrerPolicy&&(r.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?r.credentials="include":_.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(_){if(_.ep)return;_.ep=!0;const r=n(_);fetch(_.href,r)}})();var z,v,ge,C,re,$e,K,Z,V,G,L={},ke=[],Ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function P(t,e){for(var n in e)t[n]=e[n];return t}function we(t){var e=t.parentNode;e&&e.removeChild(t)}function Ne(t,e,n){var o,_,r,i={};for(r in e)r=="key"?o=e[r]:r=="ref"?_=e[r]:i[r]=e[r];if(arguments.length>2&&(i.children=arguments.length>3?z.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)i[r]===void 0&&(i[r]=t.defaultProps[r]);return U(t,i,o,_,null)}function U(t,e,n,o,_){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_??++ge,__i:-1,__u:0};return _==null&&v.vnode!=null&&v.vnode(r),r}function S(t){return t.children}function W(t,e){this.props=t,this.context=e}function H(t,e){if(e==null)return t.__?H(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?H(t):null}function be(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return be(t)}}function oe(t){(!t.__d&&(t.__d=!0)&&C.push(t)&&!I.__r++||re!==v.debounceRendering)&&((re=v.debounceRendering)||$e)(I)}function I(){var t,e,n,o,_,r,i,c;for(C.sort(K);t=C.shift();)t.__d&&(e=C.length,o=void 0,r=(_=(n=t).__v).__e,i=[],c=[],n.__P&&((o=P({},_)).__v=_.__v+1,v.vnode&&v.vnode(o),te(n.__P,o,_,n.__n,n.__P.namespaceURI,32&_.__u?[r]:null,i,r??H(_),!!(32&_.__u),c),o.__v=_.__v,o.__.__k[o.__i]=o,xe(i,o,c),o.__e!=r&&be(o)),C.length>e&&C.sort(K));I.__r=0}function Te(t,e,n,o,_,r,i,c,s,l,p){var a,d,u,$,w,k=o&&o.__k||ke,h=e.length;for(n.__d=s,Me(n,e,k),s=n.__d,a=0;a<h;a++)(u=n.__k[a])!=null&&typeof u!="boolean"&&typeof u!="function"&&(d=u.__i===-1?L:k[u.__i]||L,u.__i=a,te(t,u,d,_,r,i,c,s,l,p),$=u.__e,u.ref&&d.ref!=u.ref&&(d.ref&&ne(d.ref,null,u),p.push(u.ref,u.__c||$,u)),w==null&&$!=null&&(w=$),65536&u.__u||d.__k===u.__k?s=Pe(u,s,t):typeof u.type=="function"&&u.__d!==void 0?s=u.__d:$&&(s=$.nextSibling),u.__d=void 0,u.__u&=-196609);n.__d=s,n.__e=w}function Me(t,e,n){var o,_,r,i,c,s=e.length,l=n.length,p=l,a=0;for(t.__k=[],o=0;o<s;o++)i=o+a,(_=t.__k[o]=(_=e[o])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"||_.constructor==String?U(null,_,null,null,null):ee(_)?U(S,{children:_},null,null,null):_.constructor===void 0&&_.__b>0?U(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null?(_.__=t,_.__b=t.__b+1,c=Le(_,n,i,p),_.__i=c,r=null,c!==-1&&(p--,(r=n[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&a--,typeof _.type!="function"&&(_.__u|=65536)):c!==i&&(c==i-1?a=c-i:c==i+1?a++:c>i?p>s-i?a+=c-i:a--:c<i&&a++,c!==o+a&&(_.__u|=65536))):(r=n[i])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=H(r)),J(r,r,!1),n[i]=null,p--);if(p)for(o=0;o<l;o++)(r=n[o])!=null&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=H(r)),J(r,r))}function Pe(t,e,n){var o,_;if(typeof t.type=="function"){for(o=t.__k,_=0;o&&_<o.length;_++)o[_]&&(o[_].__=t,e=Pe(o[_],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=H(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Le(t,e,n,o){var _=t.key,r=t.type,i=n-1,c=n+1,s=e[n];if(s===null||s&&_==s.key&&r===s.type&&!(131072&s.__u))return n;if(o>(s!=null&&!(131072&s.__u)?1:0))for(;i>=0||c<e.length;){if(i>=0){if((s=e[i])&&!(131072&s.__u)&&_==s.key&&r===s.type)return i;i--}if(c<e.length){if((s=e[c])&&!(131072&s.__u)&&_==s.key&&r===s.type)return c;c++}}return-1}function ie(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Ee.test(e)?n:n+"px"}function A(t,e,n,o,_){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||ie(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||ie(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o?n.u=o.u:(n.u=Z,t.addEventListener(e,r?G:V,r)):t.removeEventListener(e,r?G:V,r);else{if(_=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function ae(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=Z++;else if(e.t<n.u)return;return n(v.event?v.event(e):e)}}}function te(t,e,n,o,_,r,i,c,s,l){var p,a,d,u,$,w,k,h,m,N,T,F,M,_e,D,R,b=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),r=[c=e.__e=n.__e]),(p=v.__b)&&p(e);e:if(typeof b=="function")try{if(h=e.props,m="prototype"in b&&b.prototype.render,N=(p=b.contextType)&&o[p.__c],T=p?N?N.props.value:p.__:o,n.__c?k=(a=e.__c=n.__c).__=a.__E:(m?e.__c=a=new b(h,T):(e.__c=a=new W(h,T),a.constructor=b,a.render=De),N&&N.sub(a),a.props=h,a.state||(a.state={}),a.context=T,a.__n=o,d=a.__d=!0,a.__h=[],a._sb=[]),m&&a.__s==null&&(a.__s=a.state),m&&b.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=P({},a.__s)),P(a.__s,b.getDerivedStateFromProps(h,a.__s))),u=a.props,$=a.state,a.__v=e,d)m&&b.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),m&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(m&&b.getDerivedStateFromProps==null&&h!==u&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(h,T),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(h,a.__s,T)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(a.props=h,a.state=a.__s,a.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),F=0;F<a._sb.length;F++)a.__h.push(a._sb[F]);a._sb=[],a.__h.length&&i.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(h,a.__s,T),m&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(u,$,w)})}if(a.context=T,a.props=h,a.__P=t,a.__e=!1,M=v.__r,_e=0,m){for(a.state=a.__s,a.__d=!1,M&&M(e),p=a.render(a.props,a.state,a.context),D=0;D<a._sb.length;D++)a.__h.push(a._sb[D]);a._sb=[]}else do a.__d=!1,M&&M(e),p=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++_e<25);a.state=a.__s,a.getChildContext!=null&&(o=P(P({},o),a.getChildContext())),m&&!d&&a.getSnapshotBeforeUpdate!=null&&(w=a.getSnapshotBeforeUpdate(u,$)),Te(t,ee(R=p!=null&&p.type===S&&p.key==null?p.props.children:p)?R:[R],e,n,o,_,r,i,c,s,l),a.base=e.__e,e.__u&=-161,a.__h.length&&i.push(a),k&&(a.__E=a.__=null)}catch(O){if(e.__v=null,s||r!=null){for(e.__u|=s?160:32;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,e.__e=c}else e.__e=n.__e,e.__k=n.__k;v.__e(O,e,n)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Fe(n.__e,e,n,o,_,r,i,s,l);(p=v.diffed)&&p(e)}function xe(t,e,n){e.__d=void 0;for(var o=0;o<n.length;o++)ne(n[o],n[++o],n[++o]);v.__c&&v.__c(e,t),t.some(function(_){try{t=_.__h,_.__h=[],t.some(function(r){r.call(_)})}catch(r){v.__e(r,_.__v)}})}function Fe(t,e,n,o,_,r,i,c,s){var l,p,a,d,u,$,w,k=n.props,h=e.props,m=e.type;if(m==="svg"?_="http://www.w3.org/2000/svg":m==="math"?_="http://www.w3.org/1998/Math/MathML":_||(_="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((u=r[l])&&"setAttribute"in u==!!m&&(m?u.localName===m:u.nodeType===3)){t=u,r[l]=null;break}}if(t==null){if(m===null)return document.createTextNode(h);t=document.createElementNS(_,m,h.is&&h),r=null,c=!1}if(m===null)k===h||c&&t.data===h||(t.data=h);else{if(r=r&&z.call(t.childNodes),k=n.props||L,!c&&r!=null)for(k={},l=0;l<t.attributes.length;l++)k[(u=t.attributes[l]).name]=u.value;for(l in k)if(u=k[l],l!="children"){if(l=="dangerouslySetInnerHTML")a=u;else if(l!=="key"&&!(l in h)){if(l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h)continue;A(t,l,null,u,_)}}for(l in h)u=h[l],l=="children"?d=u:l=="dangerouslySetInnerHTML"?p=u:l=="value"?$=u:l=="checked"?w=u:l==="key"||c&&typeof u!="function"||k[l]===u||A(t,l,u,k[l],_);if(p)c||a&&(p.__html===a.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(a&&(t.innerHTML=""),Te(t,ee(d)?d:[d],e,n,o,m==="foreignObject"?"http://www.w3.org/1999/xhtml":_,r,i,r?r[0]:n.__k&&H(n,0),c,s),r!=null)for(l=r.length;l--;)r[l]!=null&&we(r[l]);c||(l="value",$!==void 0&&($!==t[l]||m==="progress"&&!$||m==="option"&&$!==k[l])&&A(t,l,$,k[l],_),l="checked",w!==void 0&&w!==t[l]&&A(t,l,w,k[l],_))}return t}function ne(t,e,n){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&e==null||(t.__u=t(e))}else t.current=e}catch(_){v.__e(_,n)}}function J(t,e,n){var o,_;if(v.unmount&&v.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||ne(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){v.__e(r,e)}o.base=o.__P=null}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&J(o[_],e,n||typeof t.type!="function");n||t.__e==null||we(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function De(t,e,n){return this.constructor(t,n)}function Oe(t,e,n){var o,_,r,i;v.__&&v.__(t,e),_=(o=typeof n=="function")?null:e.__k,r=[],i=[],te(e,t=(!o&&n||e).__k=Ne(S,null,[t]),_||L,L,e.namespaceURI,!o&&n?[n]:_?null:e.firstChild?z.call(e.childNodes):null,r,!o&&n?n:_?_.__e:e.firstChild,o,i),xe(r,t,i)}z=ke.slice,v={__e:function(t,e,n,o){for(var _,r,i;e=e.__;)if((_=e.__c)&&!_.__)try{if((r=_.constructor)&&r.getDerivedStateFromError!=null&&(_.setState(r.getDerivedStateFromError(t)),i=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,o||{}),i=_.__d),i)return _.__E=_}catch(c){t=c}throw t}},ge=0,W.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},n),this.props)),t&&P(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),oe(this))},W.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),oe(this))},W.prototype.render=S,C=[],$e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=function(t,e){return t.__v.__b-e.__v.__b},I.__r=0,Z=0,V=ae(!1),G=ae(!0);var Ae=0;function f(t,e,n,o,_,r){e||(e={});var i,c,s=e;if("ref"in s)for(c in s={},e)c=="ref"?i=e[c]:s[c]=e[c];var l={type:t,props:s,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Ae,__i:-1,__u:0,__source:_,__self:r};if(typeof t=="function"&&(i=t.defaultProps))for(c in i)s[c]===void 0&&(s[c]=i[c]);return v.vnode&&v.vnode(l),l}var B,y,j,le,Q=0,Ce=[],g=v,ce=g.__b,se=g.__r,ue=g.diffed,fe=g.__c,pe=g.unmount,de=g.__;function He(t,e){g.__h&&g.__h(y,t,Q||e),Q=0;var n=y.__H||(y.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function x(t){return Q=1,Ue(Se,t)}function Ue(t,e,n){var o=He(B++,2);if(o.t=t,!o.__c&&(o.__=[Se(void 0,e),function(c){var s=o.__N?o.__N[0]:o.__[0],l=o.t(s,c);s!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){var _=function(c,s,l){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(d){return!!d.__c});if(p.every(function(d){return!d.__N}))return!r||r.call(this,c,s,l);var a=!1;return p.forEach(function(d){if(d.__N){var u=d.__[0];d.__=d.__N,d.__N=void 0,u!==d.__[0]&&(a=!0)}}),!(!a&&o.__c.props===c)&&(!r||r.call(this,c,s,l))};y.u=!0;var r=y.shouldComponentUpdate,i=y.componentWillUpdate;y.componentWillUpdate=function(c,s,l){if(this.__e){var p=r;r=void 0,_(c,s,l),r=p}i&&i.call(this,c,s,l)},y.shouldComponentUpdate=_}return o.__N||o.__}function We(t,e){var n=He(B++,3);!g.__s&&Be(n.__H,e)&&(n.__=t,n.i=e,y.__H.__h.push(n))}function qe(){for(var t;t=Ce.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(q),t.__H.__h.forEach(X),t.__H.__h=[]}catch(e){t.__H.__h=[],g.__e(e,t.__v)}}g.__b=function(t){y=null,ce&&ce(t)},g.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),de&&de(t,e)},g.__r=function(t){se&&se(t),B=0;var e=(y=t.__c).__H;e&&(j===y?(e.__h=[],y.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(q),e.__h.forEach(X),e.__h=[],B=0)),j=y},g.diffed=function(t){ue&&ue(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ce.push(e)!==1&&le===g.requestAnimationFrame||((le=g.requestAnimationFrame)||Ie)(qe)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),j=y=null},g.__c=function(t,e){e.some(function(n){try{n.__h.forEach(q),n.__h=n.__h.filter(function(o){return!o.__||X(o)})}catch(o){e.some(function(_){_.__h&&(_.__h=[])}),e=[],g.__e(o,n.__v)}}),fe&&fe(t,e)},g.unmount=function(t){pe&&pe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{q(o)}catch(_){e=_}}),n.__H=void 0,e&&g.__e(e,n.__v))};var he=typeof requestAnimationFrame=="function";function Ie(t){var e,n=function(){clearTimeout(o),he&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);he&&(e=requestAnimationFrame(n))}function q(t){var e=y,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),y=e}function X(t){var e=y;t.__c=t.__(),y=e}function Be(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function Se(t,e){return typeof e=="function"?e(t):e}class Y{constructor(e){this.patterns=e,this.remainingPatterns=[...e]}pop(){const e=Math.floor(Math.random()*this.remainingPatterns.length),n=this.remainingPatterns[e];return this.remainingPatterns.splice(e,1),n}push(e){this.remainingPatterns.push(e)}reset(){this.remainingPatterns=[...this.patterns]}}(t=>{function e(o){return new t(o).pop()}t.selectOne=e;function n(o,_){const r=new t(_);return[...Array(o)].map(i=>r.pop())}t.selectMany=n})(Y||(Y={}));const E=Y,ve=(t,e)=>{const n=t===1?"/e":"/p",o=new E(["doom1","doom2","doom3","doom4",void 0,void 0,void 0,void 0]),_=[...Array(8)].map((l,p)=>({index:p,pronoun:`<${p+1}>`,doomTarget:o.pop()})),r=e==="marker"?["A","1","B","2","C","3","D","4"]:e==="compass"?["N","NE","E","SE","S","SW","W","NW"]:["北","北東","東","南東","南","南西","西","北西"],i=E.selectOne(r),c=r[(r.indexOf(i)+3+Math.floor(Math.random()*3))%r.length],s=(l,p,a)=>{const d=_.find(u=>u.doomTarget===l||u.doomTarget===l);return d&&d.index<t?p(d.pronoun):a??""};return[`
${n} 騎神トールダンは「至天の陣：死刻」の構え。<se.3> <wait.4>
${n} 騎神トールダンの「至天の陣：死刻」 <se.3> <wait.4>
${n} トールダン・邪眼配置 ${i}・${c} <se.4> <wait.3>
${s("doom1",l=>`/mk attack1 ${l}`)}
${s("doom2",l=>`/mk attack2 ${l}`)}
${s("doom3",l=>`/mk attack3 ${l}`)}
${s("doom4",l=>`/mk attack4 ${l} <wait.7>`,`${n} (死の宣告 デバフ付与) <wait.7>`)}
${n} 聖騎士ゲリックの「ヘヴィインパクト」 <se.3> <wait.2>
${n} ヴェズルフェルニルの「ツイスターダイブ」 <se.5> ヘヴィインパクト (2) <wait.2>
${n} ヘヴィインパクト (3) <se.3> <wait.2>
${n} ヘヴィインパクト (4) <se.3> <wait.4>
${n} 聖騎士シャリベルは「ヘヴンフレイム」を唱えた。 <se.5> <wait.5>
${n} 騎神トールダンの「竜の邪眼」 <se.4>
${n} 聖騎士グリノーの「フェイスアンムーブ」 <se.3> <wait.2>
${n} 聖騎士シャリベルの「ヘヴンフレイム」 <se.4>`.trim()]},ze=()=>{const[t,e]=x(8),[n,o]=x("marker"),[_,r]=x("/e 次のマクロへ！ <se.7>"),[i,c]=x(ve(t,n));return f("form",{onSubmit:s=>s.preventDefault(),children:[f("p",{children:["練習人数:"," ",f("select",{value:t,onChange:s=>e(parseInt(s.currentTarget.value)),children:[f("option",{value:8,children:"8"}),f("option",{value:7,children:"7"}),f("option",{value:6,children:"6"}),f("option",{value:5,children:"5"}),f("option",{value:4,children:"4"}),f("option",{value:3,children:"3"}),f("option",{value:2,children:"2"}),f("option",{value:1,children:"1"})]}),f("br",{}),"方角の表記:"," ",f("select",{value:n,onChange:s=>o(s.currentTarget.value),children:[f("option",{value:"marker",children:"八方位マーカー"}),f("option",{value:"compass",children:"英頭文字"}),f("option",{value:"kanji",children:"漢字"})]}),f("br",{}),"マクロ継続通知:"," ",f("input",{value:_,autocomplete:"off",onChange:s=>r(s.currentTarget.value)}),f("br",{}),f("button",{onClick:()=>c(ve(t,n)),children:"生成"})]}),i.map(s=>f(S,{children:[f("textarea",{readonly:!0,rows:15,cols:80,children:s.replace(/\n\n+/g,`
`).trim()}),f("br",{})]}))]})},me=(t,e)=>{const n=t===1?"/e":"/p",o=new E(["skywardLeap","spiralPierce1","spiralPierce2","cauterize",void 0,void 0,void 0,void 0]),_=[...Array(8)].map((i,c)=>({index:c,pronoun:`<${c+1}>`,primaryTarget:o.pop(),secondaryTarget:void 0}));E.selectOne(_.filter(i=>i.primaryTarget)).secondaryTarget="altarFlare",E.selectOne(_.filter(i=>!i.primaryTarget)).secondaryTarget="liquidHeaven",E.selectMany(2,_.filter(i=>!i.secondaryTarget)).forEach((i,c)=>i.secondaryTarget=c===0?"thunderStruck1":"thunderStruck2");const r=(i,c,s)=>{const l=_.find(p=>p.primaryTarget===i||p.secondaryTarget===i);return l&&l.index<t?c(l.pronoun):s??""};return[`${n} 騎神トールダンは「至天の陣：風槍」の構え。<se.3> <wait.4>
${n} 騎神トールダンの「至天の陣：風槍」 <se.3> <wait.6>
${r("skywardLeap",i=>`/mk circle ${i}`,`${n} (スカイワードリープ マーカー付与)`)}
${r("spiralPierce1",i=>`/mk bind1 ${i}`)}
${r("spiralPierce2",i=>`/mk bind2 ${i} <wait.5>`,`${n} (スパイラルピアス マーカー付与) <wait.5>`)}
${r("thunderStruck1",i=>`/mk stop1 ${i}`)}
${r("thunderStruck2",i=>`/mk stop2 ${i} <wait.2>`,`${n} (サンダーウィング デバフ付与) <wait.2>`)}
/mk off <circle>
/mk off <bind1>
/mk off <bind2>
${r("cauterize",i=>`/mk triangle ${i}`)}
${n} ヴェズルフェルニルの「ツイスターダイブ」 <se.5> <wait.6>
/mk off <triangle>
${n} 騎神トールダンの「レベレーション・アスカロンメルシー」 <se.4>
${e}`,`${r("liquidHeaven",i=>`/mk attack4 ${i}`)}
${r("altarFlare",i=>`/mk attack3 ${i}`)}
${n} ヘヴンリキッド (1), アルターフレア (1) <se.3> <wait.1>
${r("liquidHeaven",i=>`/mk attack3 ${i}`)}
${r("altarFlare",i=>`/mk attack2 ${i}`)}
${n} ヘヴンリキッド (2), アルターフレア (2) <se.3> <wait.1>
${r("liquidHeaven",i=>`/mk attack2 ${i}`)}
${r("altarFlare",i=>`/mk attack1 ${i}`)}
${n} ヘヴンリキッド (3), アルターフレア (3) <se.3> <wait.1>
${r("liquidHeaven",i=>`/mk attack1 ${i}`)}
${r("altarFlare",i=>`/mk off ${i}`)}
${n} ヘヴンリキッド (4), アルターフレア (4) <se.3> <wait.1>
${r("liquidHeaven",i=>`/mk off ${i}`)}
${n} ヘヴンリキッド (5) <se.3> <wait.1>
${n} 聖騎士グリノーの「エンプティディメンション」 <se.4>`]},Re=()=>{const[t,e]=x(8),[n,o]=x("/e 次のマクロへ！ <se.7>"),[_,r]=x(me(t,n));return f("form",{onSubmit:i=>i.preventDefault(),children:[f("p",{children:["練習人数:"," ",f("select",{value:t,onChange:i=>e(parseInt(i.currentTarget.value)),children:[f("option",{value:8,children:"8"}),f("option",{value:7,children:"7"}),f("option",{value:6,children:"6"}),f("option",{value:5,children:"5"}),f("option",{value:4,children:"4"}),f("option",{value:3,children:"3"}),f("option",{value:2,children:"2"}),f("option",{value:1,children:"1"})]}),f("br",{}),"マクロ継続通知:"," ",f("input",{value:n,autocomplete:"off",onChange:i=>o(i.currentTarget.value)}),f("br",{}),f("button",{onClick:()=>r(me(t,n)),children:"生成"})]}),_.map(i=>f(S,{children:[f("textarea",{readonly:!0,rows:15,cols:80,children:i.replace(/\n\n+/g,`
`).trim()}),f("br",{})]}))]})},je=()=>{const[t,e]=x((location.hash||"woth").replace(/^#/,""));return We(()=>{const n=o=>e((location.hash||"woth").replace(/^#/,""));return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)}),f(S,{children:[f("h1",{children:"絶竜詩戦争: 練習マクロガチャ"}),f("p",{children:["練習したいフェーズを選択してください。邂逅編 4 などに突入して使える、練習用マクロを生成します。",f("br",{}),"生成ボタンを押すたびにマクロ中のランダム要素が入れ替わります。"]}),f("select",{value:t,onChange:n=>e(n.currentTarget.value),children:[f("option",{value:"woth",children:"至天の陣：風槍"}),f("option",{value:"doth",children:"至天の陣：死刻"})]}),t==="woth"&&f(Re,{}),t==="doth"&&f(ze,{})]})},ye=document.getElementById("app");ye&&Oe(f(je,{}),ye);

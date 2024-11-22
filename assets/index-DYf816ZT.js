(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))r(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerPolicy&&(o.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?o.credentials="include":_.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(_){if(_.ep)return;_.ep=!0;const o=n(_);fetch(_.href,o)}})();var z,h,ye,H,_e,ge,K,Y,V,G,L={},$e=[],Ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z=Array.isArray;function P(t,e){for(var n in e)t[n]=e[n];return t}function ke(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Ne(t,e,n){var r,_,o,a={};for(o in e)o=="key"?r=e[o]:o=="ref"?_=e[o]:a[o]=e[o];if(arguments.length>2&&(a.children=arguments.length>3?z.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)a[o]===void 0&&(a[o]=t.defaultProps[o]);return U(t,a,r,_,null)}function U(t,e,n,r,_){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_??++ye,__i:-1,__u:0};return _==null&&h.vnode!=null&&h.vnode(o),o}function C(t){return t.children}function W(t,e){this.props=t,this.context=e}function E(t,e){if(e==null)return t.__?E(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?E(t):null}function we(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return we(t)}}function re(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!I.__r++||_e!==h.debounceRendering)&&((_e=h.debounceRendering)||ge)(I)}function I(){var t,e,n,r,_,o,a,c;for(H.sort(K);t=H.shift();)t.__d&&(e=H.length,r=void 0,o=(_=(n=t).__v).__e,a=[],c=[],n.__P&&((r=P({},_)).__v=_.__v+1,h.vnode&&h.vnode(r),ee(n.__P,r,_,n.__n,n.__P.namespaceURI,32&_.__u?[o]:null,a,o??E(_),!!(32&_.__u),c),r.__v=_.__v,r.__.__k[r.__i]=r,Pe(a,r,c),r.__e!=o&&we(r)),H.length>e&&H.sort(K));I.__r=0}function be(t,e,n,r,_,o,a,c,s,l,p){var i,d,f,$,w,k=r&&r.__k||$e,v=e.length;for(n.__d=s,Me(n,e,k),s=n.__d,i=0;i<v;i++)(f=n.__k[i])!=null&&(d=f.__i===-1?L:k[f.__i]||L,f.__i=i,ee(t,f,d,_,o,a,c,s,l,p),$=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&te(d.ref,null,f),p.push(f.ref,f.__c||$,f)),w==null&&$!=null&&(w=$),65536&f.__u||d.__k===f.__k?s=Te(f,s,t):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:$&&(s=$.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=s,n.__e=w}function Me(t,e,n){var r,_,o,a,c,s=e.length,l=n.length,p=l,i=0;for(t.__k=[],r=0;r<s;r++)(_=e[r])!=null&&typeof _!="boolean"&&typeof _!="function"?(a=r+i,(_=t.__k[r]=typeof _=="string"||typeof _=="number"||typeof _=="bigint"||_.constructor==String?U(null,_,null,null,null):Z(_)?U(C,{children:_},null,null,null):_.constructor===void 0&&_.__b>0?U(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_).__=t,_.__b=t.__b+1,o=null,(c=_.__i=Le(_,n,a,p))!==-1&&(p--,(o=n[c])&&(o.__u|=131072)),o==null||o.__v===null?(c==-1&&i--,typeof _.type!="function"&&(_.__u|=65536)):c!==a&&(c==a-1?i--:c==a+1?i++:(c>a?i--:i++,_.__u|=65536))):_=t.__k[r]=null;if(p)for(r=0;r<l;r++)(o=n[r])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=E(o)),xe(o,o))}function Te(t,e,n){var r,_;if(typeof t.type=="function"){for(r=t.__k,_=0;r&&_<r.length;_++)r[_]&&(r[_].__=t,e=Te(r[_],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=E(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Le(t,e,n,r){var _=t.key,o=t.type,a=n-1,c=n+1,s=e[n];if(s===null||s&&_==s.key&&o===s.type&&!(131072&s.__u))return n;if((typeof o!="function"||o===C||_)&&r>(s!=null&&!(131072&s.__u)?1:0))for(;a>=0||c<e.length;){if(a>=0){if((s=e[a])&&!(131072&s.__u)&&_==s.key&&o===s.type)return a;a--}if(c<e.length){if((s=e[c])&&!(131072&s.__u)&&_==s.key&&o===s.type)return c;c++}}return-1}function oe(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Ee.test(e)?n:n+"px"}function O(t,e,n,r,_){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||oe(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||oe(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r?n.u=r.u:(n.u=Y,t.addEventListener(e,o?G:V,o)):t.removeEventListener(e,o?G:V,o);else{if(_=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function ie(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=Y++;else if(e.t<n.u)return;return h.event&&(e=h.event(e)),"handleEvent"in n?n.handleEvent(e):n(e)}}}function ee(t,e,n,r,_,o,a,c,s,l){var p,i,d,f,$,w,k,v,m,N,T,F,M,ne,A,R,b=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),o=[c=e.__e=n.__e]),(p=h.__b)&&p(e);e:if(typeof b=="function")try{if(v=e.props,m="prototype"in b&&b.prototype.render,N=(p=b.contextType)&&r[p.__c],T=p?N?N.props.value:p.__:r,n.__c?k=(i=e.__c=n.__c).__=i.__E:(m?e.__c=i=new b(v,T):(e.__c=i=new W(v,T),i.constructor=b,i.render=Ae),N&&N.sub(i),i.props=v,i.state||(i.state={}),i.context=T,i.__n=r,d=i.__d=!0,i.__h=[],i._sb=[]),m&&i.__s==null&&(i.__s=i.state),m&&b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=P({},i.__s)),P(i.__s,b.getDerivedStateFromProps(v,i.__s))),f=i.props,$=i.state,i.__v=e,d)m&&b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),m&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(m&&b.getDerivedStateFromProps==null&&v!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,T),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,T)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(i.props=v,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(D){D&&(D.__=e)}),F=0;F<i._sb.length;F++)i.__h.push(i._sb[F]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,T),m&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,$,w)})}if(i.context=T,i.props=v,i.__P=t,i.__e=!1,M=h.__r,ne=0,m){for(i.state=i.__s,i.__d=!1,M&&M(e),p=i.render(i.props,i.state,i.context),A=0;A<i._sb.length;A++)i.__h.push(i._sb[A]);i._sb=[]}else do i.__d=!1,M&&M(e),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ne<25);i.state=i.__s,i.getChildContext!=null&&(r=P(P({},r),i.getChildContext())),m&&!d&&i.getSnapshotBeforeUpdate!=null&&(w=i.getSnapshotBeforeUpdate(f,$)),be(t,Z(R=p!=null&&p.type===C&&p.key==null?p.props.children:p)?R:[R],e,n,r,_,o,a,c,s,l),i.base=e.__e,e.__u&=-161,i.__h.length&&a.push(i),k&&(i.__E=i.__=null)}catch(D){if(e.__v=null,s||o!=null){for(e.__u|=s?160:128;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,e.__e=c}else e.__e=n.__e,e.__k=n.__k;h.__e(D,e,n)}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Fe(n.__e,e,n,r,_,o,a,s,l);(p=h.diffed)&&p(e)}function Pe(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)te(n[r],n[++r],n[++r]);h.__c&&h.__c(e,t),t.some(function(_){try{t=_.__h,_.__h=[],t.some(function(o){o.call(_)})}catch(o){h.__e(o,_.__v)}})}function Fe(t,e,n,r,_,o,a,c,s){var l,p,i,d,f,$,w,k=n.props,v=e.props,m=e.type;if(m==="svg"?_="http://www.w3.org/2000/svg":m==="math"?_="http://www.w3.org/1998/Math/MathML":_||(_="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((f=o[l])&&"setAttribute"in f==!!m&&(m?f.localName===m:f.nodeType===3)){t=f,o[l]=null;break}}if(t==null){if(m===null)return document.createTextNode(v);t=document.createElementNS(_,m,v.is&&v),c&&(h.__m&&h.__m(e,o),c=!1),o=null}if(m===null)k===v||c&&t.data===v||(t.data=v);else{if(o=o&&z.call(t.childNodes),k=n.props||L,!c&&o!=null)for(k={},l=0;l<t.attributes.length;l++)k[(f=t.attributes[l]).name]=f.value;for(l in k)if(f=k[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=f;else if(!(l in v)){if(l=="value"&&"defaultValue"in v||l=="checked"&&"defaultChecked"in v)continue;O(t,l,null,f,_)}}for(l in v)f=v[l],l=="children"?d=f:l=="dangerouslySetInnerHTML"?p=f:l=="value"?$=f:l=="checked"?w=f:c&&typeof f!="function"||k[l]===f||O(t,l,f,k[l],_);if(p)c||i&&(p.__html===i.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(i&&(t.innerHTML=""),be(t,Z(d)?d:[d],e,n,r,m==="foreignObject"?"http://www.w3.org/1999/xhtml":_,o,a,o?o[0]:n.__k&&E(n,0),c,s),o!=null)for(l=o.length;l--;)ke(o[l]);c||(l="value",m==="progress"&&$==null?t.removeAttribute("value"):$!==void 0&&($!==t[l]||m==="progress"&&!$||m==="option"&&$!==k[l])&&O(t,l,$,k[l],_),l="checked",w!==void 0&&w!==t[l]&&O(t,l,w,k[l],_))}return t}function te(t,e,n){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(_){h.__e(_,n)}}function xe(t,e,n){var r,_;if(h.unmount&&h.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||te(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){h.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(_=0;_<r.length;_++)r[_]&&xe(r[_],e,n||typeof t.type!="function");n||ke(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Ae(t,e,n){return this.constructor(t,n)}function De(t,e,n){var r,_,o,a;h.__&&h.__(t,e),_=(r=typeof n=="function")?null:e.__k,o=[],a=[],ee(e,t=(!r&&n||e).__k=Ne(C,null,[t]),_||L,L,e.namespaceURI,!r&&n?[n]:_?null:e.firstChild?z.call(e.childNodes):null,o,!r&&n?n:_?_.__e:e.firstChild,r,a),Pe(o,t,a)}z=$e.slice,h={__e:function(t,e,n,r){for(var _,o,a;e=e.__;)if((_=e.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(t)),a=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,r||{}),a=_.__d),a)return _.__E=_}catch(c){t=c}throw t}},ye=0,W.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},n),this.props)),t&&P(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),re(this))},W.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),re(this))},W.prototype.render=C,H=[],ge=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=function(t,e){return t.__v.__b-e.__v.__b},I.__r=0,Y=0,V=ie(!1),G=ie(!0);var Oe=0;function u(t,e,n,r,_,o){e||(e={});var a,c,s=e;"ref"in e&&(a=e.ref,delete e.ref);var l={type:t,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Oe,__i:-1,__u:0,__source:_,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(c in a)s[c]===void 0&&(s[c]=a[c]);return h.vnode&&h.vnode(l),l}var B,y,j,ae,J=0,Ce=[],g=h,le=g.__b,ce=g.__r,se=g.diffed,ue=g.__c,fe=g.unmount,pe=g.__;function He(t,e){g.__h&&g.__h(y,t,J||e),J=0;var n=y.__H||(y.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function x(t){return J=1,Ue(Se,t)}function Ue(t,e,n){var r=He(B++,2);if(r.t=t,!r.__c&&(r.__=[Se(void 0,e),function(c){var s=r.__N?r.__N[0]:r.__[0],l=r.t(s,c);s!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){var _=function(c,s,l){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(d){return!!d.__c});if(p.every(function(d){return!d.__N}))return!o||o.call(this,c,s,l);var i=r.__c.props!==c;return p.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(i=!0)}}),o&&o.call(this,c,s,l)||i};y.u=!0;var o=y.shouldComponentUpdate,a=y.componentWillUpdate;y.componentWillUpdate=function(c,s,l){if(this.__e){var p=o;o=void 0,_(c,s,l),o=p}a&&a.call(this,c,s,l)},y.shouldComponentUpdate=_}return r.__N||r.__}function We(t,e){var n=He(B++,3);!g.__s&&Be(n.__H,e)&&(n.__=t,n.i=e,y.__H.__h.push(n))}function qe(){for(var t;t=Ce.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(q),t.__H.__h.forEach(Q),t.__H.__h=[]}catch(e){t.__H.__h=[],g.__e(e,t.__v)}}g.__b=function(t){y=null,le&&le(t)},g.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),pe&&pe(t,e)},g.__r=function(t){ce&&ce(t),B=0;var e=(y=t.__c).__H;e&&(j===y?(e.__h=[],y.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(q),e.__h.forEach(Q),e.__h=[],B=0)),j=y},g.diffed=function(t){se&&se(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ce.push(e)!==1&&ae===g.requestAnimationFrame||((ae=g.requestAnimationFrame)||Ie)(qe)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),j=y=null},g.__c=function(t,e){e.some(function(n){try{n.__h.forEach(q),n.__h=n.__h.filter(function(r){return!r.__||Q(r)})}catch(r){e.some(function(_){_.__h&&(_.__h=[])}),e=[],g.__e(r,n.__v)}}),ue&&ue(t,e)},g.unmount=function(t){fe&&fe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{q(r)}catch(_){e=_}}),n.__H=void 0,e&&g.__e(e,n.__v))};var de=typeof requestAnimationFrame=="function";function Ie(t){var e,n=function(){clearTimeout(r),de&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);de&&(e=requestAnimationFrame(n))}function q(t){var e=y,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),y=e}function Q(t){var e=y;t.__c=t.__(),y=e}function Be(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Se(t,e){return typeof e=="function"?e(t):e}class X{constructor(e){this.patterns=e,this.remainingPatterns=[...e]}pop(){const e=Math.floor(Math.random()*this.remainingPatterns.length),n=this.remainingPatterns[e];return this.remainingPatterns.splice(e,1),n}push(e){this.remainingPatterns.push(e)}reset(){this.remainingPatterns=[...this.patterns]}}(t=>{function e(r){return new t(r).pop()}t.selectOne=e;function n(r,_){const o=new t(_);return[...Array(r)].map(a=>o.pop())}t.selectMany=n})(X||(X={}));const S=X,he=(t,e)=>{const n=t===1?"/e":"/p",r=new S(["doom1","doom2","doom3","doom4",void 0,void 0,void 0,void 0]),_=[...Array(8)].map((l,p)=>({index:p,pronoun:`<${p+1}>`,doomTarget:r.pop()})),o=e==="marker"?["A","1","B","2","C","3","D","4"]:e==="compass"?["N","NE","E","SE","S","SW","W","NW"]:["北","北東","東","南東","南","南西","西","北西"],a=S.selectOne(o),c=o[(o.indexOf(a)+3+Math.floor(Math.random()*3))%o.length],s=(l,p,i)=>{const d=_.find(f=>f.doomTarget===l||f.doomTarget===l);return d&&d.index<t?p(d.pronoun):i??""};return[`
${n} 騎神トールダンは「至天の陣：死刻」の構え。<se.3> <wait.4>
${n} 騎神トールダンの「至天の陣：死刻」 <se.3> <wait.4>
${n} トールダン・邪眼配置 ${a}・${c} <se.4> <wait.3>
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
${n} 聖騎士シャリベルの「ヘヴンフレイム」 <se.4>`.trim()]},ze=()=>{const[t,e]=x(8),[n,r]=x("marker"),[_,o]=x("/e 次のマクロへ！ <se.7>"),[a,c]=x(he(t,n));return u("form",{onSubmit:s=>s.preventDefault(),children:[u("p",{children:["練習人数:"," ",u("select",{value:t,onChange:s=>e(parseInt(s.currentTarget.value)),children:[u("option",{value:8,children:"8"}),u("option",{value:7,children:"7"}),u("option",{value:6,children:"6"}),u("option",{value:5,children:"5"}),u("option",{value:4,children:"4"}),u("option",{value:3,children:"3"}),u("option",{value:2,children:"2"}),u("option",{value:1,children:"1"})]}),u("br",{}),"方角の表記:"," ",u("select",{value:n,onChange:s=>r(s.currentTarget.value),children:[u("option",{value:"marker",children:"八方位マーカー"}),u("option",{value:"compass",children:"英頭文字"}),u("option",{value:"kanji",children:"漢字"})]}),u("br",{}),"マクロ継続通知:"," ",u("input",{value:_,autocomplete:"off",onChange:s=>o(s.currentTarget.value)}),u("br",{}),u("button",{onClick:()=>c(he(t,n)),children:"生成"})]}),a.map(s=>u(C,{children:[u("textarea",{readonly:!0,rows:15,cols:80,children:s.replace(/\n\n+/g,`
`).trim()}),u("br",{})]}))]})},ve=(t,e)=>{const n=t===1?"/e":"/p",r=new S(["skywardLeap","spiralPierce1","spiralPierce2","cauterize",void 0,void 0,void 0,void 0]),_=[...Array(8)].map((a,c)=>({index:c,pronoun:`<${c+1}>`,primaryTarget:r.pop(),secondaryTarget:void 0}));S.selectOne(_.filter(a=>a.primaryTarget)).secondaryTarget="altarFlare",S.selectOne(_.filter(a=>!a.primaryTarget)).secondaryTarget="liquidHeaven",S.selectMany(2,_.filter(a=>!a.secondaryTarget)).forEach((a,c)=>a.secondaryTarget=c===0?"thunderStruck1":"thunderStruck2");const o=(a,c,s)=>{const l=_.find(p=>p.primaryTarget===a||p.secondaryTarget===a);return l&&l.index<t?c(l.pronoun):s??""};return[`${n} 騎神トールダンは「至天の陣：風槍」の構え。<se.3> <wait.4>
${n} 騎神トールダンの「至天の陣：風槍」 <se.3> <wait.6>
${o("skywardLeap",a=>`/mk circle ${a}`,`${n} (スカイワードリープ マーカー付与)`)}
${o("spiralPierce1",a=>`/mk bind1 ${a}`)}
${o("spiralPierce2",a=>`/mk bind2 ${a} <wait.5>`,`${n} (スパイラルピアス マーカー付与) <wait.5>`)}
${o("thunderStruck1",a=>`/mk stop1 ${a}`)}
${o("thunderStruck2",a=>`/mk stop2 ${a} <wait.2>`,`${n} (サンダーウィング デバフ付与) <wait.2>`)}
/mk off <circle>
/mk off <bind1>
/mk off <bind2>
${o("cauterize",a=>`/mk triangle ${a}`)}
${n} ヴェズルフェルニルの「ツイスターダイブ」 <se.5> <wait.6>
/mk off <triangle>
${n} 騎神トールダンの「レベレーション・アスカロンメルシー」 <se.4>
${e}`,`${o("liquidHeaven",a=>`/mk attack4 ${a}`)}
${o("altarFlare",a=>`/mk attack3 ${a}`)}
${n} ヘヴンリキッド (1), アルターフレア (1) <se.3> <wait.1>
${o("liquidHeaven",a=>`/mk attack3 ${a}`)}
${o("altarFlare",a=>`/mk attack2 ${a}`)}
${n} ヘヴンリキッド (2), アルターフレア (2) <se.3> <wait.1>
${o("liquidHeaven",a=>`/mk attack2 ${a}`)}
${o("altarFlare",a=>`/mk attack1 ${a}`)}
${n} ヘヴンリキッド (3), アルターフレア (3) <se.3> <wait.1>
${o("liquidHeaven",a=>`/mk attack1 ${a}`)}
${o("altarFlare",a=>`/mk off ${a}`)}
${n} ヘヴンリキッド (4), アルターフレア (4) <se.3> <wait.1>
${o("liquidHeaven",a=>`/mk off ${a}`)}
${n} ヘヴンリキッド (5) <se.3> <wait.1>
${n} 聖騎士グリノーの「エンプティディメンション」 <se.4>`]},Re=()=>{const[t,e]=x(8),[n,r]=x("/e 次のマクロへ！ <se.7>"),[_,o]=x(ve(t,n));return u("form",{onSubmit:a=>a.preventDefault(),children:[u("p",{children:["練習人数:"," ",u("select",{value:t,onChange:a=>e(parseInt(a.currentTarget.value)),children:[u("option",{value:8,children:"8"}),u("option",{value:7,children:"7"}),u("option",{value:6,children:"6"}),u("option",{value:5,children:"5"}),u("option",{value:4,children:"4"}),u("option",{value:3,children:"3"}),u("option",{value:2,children:"2"}),u("option",{value:1,children:"1"})]}),u("br",{}),"マクロ継続通知:"," ",u("input",{value:n,autocomplete:"off",onChange:a=>r(a.currentTarget.value)}),u("br",{}),u("button",{onClick:()=>o(ve(t,n)),children:"生成"})]}),_.map(a=>u(C,{children:[u("textarea",{readonly:!0,rows:15,cols:80,children:a.replace(/\n\n+/g,`
`).trim()}),u("br",{})]}))]})},je=()=>{const[t,e]=x((location.hash||"woth").replace(/^#/,""));return We(()=>{const n=r=>e((location.hash||"woth").replace(/^#/,""));return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)}),u(C,{children:[u("h1",{children:"絶竜詩戦争: 練習マクロガチャ"}),u("p",{children:["練習したいフェーズを選択してください。邂逅編 4 などに突入して使える、練習用マクロを生成します。",u("br",{}),"生成ボタンを押すたびにマクロ中のランダム要素が入れ替わります。"]}),u("select",{value:t,onChange:n=>e(n.currentTarget.value),children:[u("option",{value:"woth",children:"至天の陣：風槍"}),u("option",{value:"doth",children:"至天の陣：死刻"})]}),t==="woth"&&u(Re,{}),t==="doth"&&u(ze,{})]})},me=document.getElementById("app");me&&De(u(je,{}),me);
const Te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&r(_)}).observe(document,{childList:!0,subtree:!0});function u(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=u(i);fetch(i.href,n)}};Te();var T,c,se,fe,B,pe,Q,de,L={},he=[],He=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(t,e){for(var u in e)t[u]=e[u];return t}function ve(t){var e=t.parentNode;e&&e.removeChild(t)}function N(t,e,u){var r,i,n,_={};for(n in e)n=="key"?r=e[n]:n=="ref"?i=e[n]:_[n]=e[n];if(arguments.length>2&&(_.children=arguments.length>3?T.call(arguments,2):u),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)_[n]===void 0&&(_[n]=t.defaultProps[n]);return x(t,_,r,i,null)}function x(t,e,u,r,i){var n={type:t,props:e,key:u,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++se:i};return i==null&&c.vnode!=null&&c.vnode(n),n}function Se(){return{current:null}}function $(t){return t.children}function w(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__.__k.indexOf(t)+1):null;for(var u;e<t.__k.length;e++)if((u=t.__k[e])!=null&&u.__e!=null)return u.__e;return typeof t.type=="function"?D(t):null}function me(t){var e,u;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((u=t.__k[e])!=null&&u.__e!=null){t.__e=t.__c.base=u.__e;break}return me(t)}}function W(t){(!t.__d&&(t.__d=!0)&&B.push(t)&&!U.__r++||Q!==c.debounceRendering)&&((Q=c.debounceRendering)||pe)(U)}function U(){for(var t;U.__r=B.length;)t=B.sort(function(e,u){return e.__v.__b-u.__v.__b}),B=[],t.some(function(e){var u,r,i,n,_,a;e.__d&&(_=(n=(u=e).__v).__e,(a=u.__P)&&(r=[],(i=C({},n)).__v=n.__v+1,G(a,n,i,u.__n,a.ownerSVGElement!==void 0,n.__h!=null?[_]:null,r,_==null?D(n):_,n.__h),Ce(r,n),n.__e!=_&&me(n)))})}function ye(t,e,u,r,i,n,_,a,p,d){var o,v,s,l,f,k,m,y=r&&r.__k||he,F=y.length;for(u.__k=[],o=0;o<e.length;o++)if((l=u.__k[o]=(l=e[o])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?x(null,l,null,null,l):Array.isArray(l)?x($,{children:l},null,null,null):l.__b>0?x(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=u,l.__b=u.__b+1,(s=y[o])===null||s&&l.key==s.key&&l.type===s.type)y[o]=void 0;else for(v=0;v<F;v++){if((s=y[v])&&l.key==s.key&&l.type===s.type){y[v]=void 0;break}s=null}G(t,l,s=s||L,i,n,_,a,p,d),f=l.__e,(v=l.ref)&&s.ref!=v&&(m||(m=[]),s.ref&&m.push(s.ref,null,l),m.push(v,l.__c||f,l)),f!=null?(k==null&&(k=f),typeof l.type=="function"&&l.__k===s.__k?l.__d=p=ge(l,p,t):p=Fe(t,l,s,y,f,p),typeof u.type=="function"&&(u.__d=p)):p&&s.__e==p&&p.parentNode!=t&&(p=D(s))}for(u.__e=k,o=F;o--;)y[o]!=null&&(typeof u.type=="function"&&y[o].__e!=null&&y[o].__e==u.__d&&(u.__d=D(r,o+1)),ke(y[o],y[o]));if(m)for(o=0;o<m.length;o++)Ae(m[o],m[++o],m[++o])}function ge(t,e,u){for(var r,i=t.__k,n=0;i&&n<i.length;n++)(r=i[n])&&(r.__=t,e=typeof r.type=="function"?ge(r,e,u):Fe(u,r,r,i,r.__e,e));return e}function Ee(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(u){Ee(u,e)}):e.push(t)),e}function Fe(t,e,u,r,i,n){var _,a,p;if(e.__d!==void 0)_=e.__d,e.__d=void 0;else if(u==null||i!=n||i.parentNode==null)e:if(n==null||n.parentNode!==t)t.appendChild(i),_=null;else{for(a=n,p=0;(a=a.nextSibling)&&p<r.length;p+=2)if(a==i)break e;t.insertBefore(i,n),_=n}return _!==void 0?_:i.nextSibling}function Oe(t,e,u,r,i){var n;for(n in u)n==="children"||n==="key"||n in e||j(t,n,null,u[n],r);for(n in e)i&&typeof e[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||u[n]===e[n]||j(t,n,e[n],u[n],r)}function X(t,e,u){e[0]==="-"?t.setProperty(e,u):t[e]=u==null?"":typeof u!="number"||He.test(e)?u:u+"px"}function j(t,e,u,r,i){var n;e:if(e==="style")if(typeof u=="string")t.style.cssText=u;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)u&&e in u||X(t.style,e,"");if(u)for(e in u)r&&u[e]===r[e]||X(t.style,e,u[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=u,u?r||t.addEventListener(e,n?Z:Y,n):t.removeEventListener(e,n?Z:Y,n);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=u==null?"":u;break e}catch{}typeof u=="function"||(u!=null&&(u!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,u):t.removeAttribute(e))}}function Y(t){this.l[t.type+!1](c.event?c.event(t):t)}function Z(t){this.l[t.type+!0](c.event?c.event(t):t)}function G(t,e,u,r,i,n,_,a,p){var d,o,v,s,l,f,k,m,y,F,b,J,H,E=e.type;if(e.constructor!==void 0)return null;u.__h!=null&&(p=u.__h,a=e.__e=u.__e,e.__h=null,n=[a]),(d=c.__b)&&d(e);try{e:if(typeof E=="function"){if(m=e.props,y=(d=E.contextType)&&r[d.__c],F=d?y?y.props.value:d.__:r,u.__c?k=(o=e.__c=u.__c).__=o.__E:("prototype"in E&&E.prototype.render?e.__c=o=new E(m,F):(e.__c=o=new w(m,F),o.constructor=E,o.render=Le),y&&y.sub(o),o.props=m,o.state||(o.state={}),o.context=F,o.__n=r,v=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),E.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=C({},o.__s)),C(o.__s,E.getDerivedStateFromProps(m,o.__s))),s=o.props,l=o.state,v)E.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(E.getDerivedStateFromProps==null&&m!==s&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(m,F),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(m,o.__s,F)===!1||e.__v===u.__v){o.props=m,o.state=o.__s,e.__v!==u.__v&&(o.__d=!1),o.__v=e,e.__e=u.__e,e.__k=u.__k,e.__k.forEach(function(S){S&&(S.__=e)}),o.__h.length&&_.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(m,o.__s,F),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(s,l,f)})}if(o.context=F,o.props=m,o.__v=e,o.__P=t,b=c.__r,J=0,"prototype"in E&&E.prototype.render)o.state=o.__s,o.__d=!1,b&&b(e),d=o.render(o.props,o.state,o.context);else do o.__d=!1,b&&b(e),d=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++J<25);o.state=o.__s,o.getChildContext!=null&&(r=C(C({},r),o.getChildContext())),v||o.getSnapshotBeforeUpdate==null||(f=o.getSnapshotBeforeUpdate(s,l)),H=d!=null&&d.type===$&&d.key==null?d.props.children:d,ye(t,Array.isArray(H)?H:[H],e,u,r,i,n,_,a,p),o.base=e.__e,e.__h=null,o.__h.length&&_.push(o),k&&(o.__E=o.__=null),o.__e=!1}else n==null&&e.__v===u.__v?(e.__k=u.__k,e.__e=u.__e):e.__e=Me(u.__e,e,u,r,i,n,_,p);(d=c.diffed)&&d(e)}catch(S){e.__v=null,(p||n!=null)&&(e.__e=a,e.__h=!!p,n[n.indexOf(a)]=null),c.__e(S,e,u)}}function Ce(t,e){c.__c&&c.__c(e,t),t.some(function(u){try{t=u.__h,u.__h=[],t.some(function(r){r.call(u)})}catch(r){c.__e(r,u.__v)}})}function Me(t,e,u,r,i,n,_,a){var p,d,o,v=u.props,s=e.props,l=e.type,f=0;if(l==="svg"&&(i=!0),n!=null){for(;f<n.length;f++)if((p=n[f])&&"setAttribute"in p==!!l&&(l?p.localName===l:p.nodeType===3)){t=p,n[f]=null;break}}if(t==null){if(l===null)return document.createTextNode(s);t=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,s.is&&s),n=null,a=!1}if(l===null)v===s||a&&t.data===s||(t.data=s);else{if(n=n&&T.call(t.childNodes),d=(v=u.props||L).dangerouslySetInnerHTML,o=s.dangerouslySetInnerHTML,!a){if(n!=null)for(v={},f=0;f<t.attributes.length;f++)v[t.attributes[f].name]=t.attributes[f].value;(o||d)&&(o&&(d&&o.__html==d.__html||o.__html===t.innerHTML)||(t.innerHTML=o&&o.__html||""))}if(Oe(t,s,v,i,a),o)e.__k=[];else if(f=e.props.children,ye(t,Array.isArray(f)?f:[f],e,u,r,i&&l!=="foreignObject",n,_,n?n[0]:u.__k&&D(u,0),a),n!=null)for(f=n.length;f--;)n[f]!=null&&ve(n[f]);a||("value"in s&&(f=s.value)!==void 0&&(f!==t.value||l==="progress"&&!f||l==="option"&&f!==v.value)&&j(t,"value",f,v.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==t.checked&&j(t,"checked",f,v.checked,!1))}return t}function Ae(t,e,u){try{typeof t=="function"?t(e):t.current=e}catch(r){c.__e(r,u)}}function ke(t,e,u){var r,i;if(c.unmount&&c.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Ae(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){c.__e(n,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&ke(r[i],e,typeof t.type!="function");u||t.__e==null||ve(t.__e),t.__e=t.__d=void 0}function Le(t,e,u){return this.constructor(t,u)}function K(t,e,u){var r,i,n;c.__&&c.__(t,e),i=(r=typeof u=="function")?null:u&&u.__k||e.__k,n=[],G(e,t=(!r&&u||e).__k=N($,null,[t]),i||L,L,e.ownerSVGElement!==void 0,!r&&u?[u]:i?null:e.firstChild?T.call(e.childNodes):null,n,!r&&u?u:i?i.__e:e.firstChild,r),Ce(n,t)}function De(t,e){K(t,e,De)}function Ue(t,e,u){var r,i,n,_=C({},t.props);for(n in e)n=="key"?r=e[n]:n=="ref"?i=e[n]:_[n]=e[n];return arguments.length>2&&(_.children=arguments.length>3?T.call(arguments,2):u),x(t.type,_,r||t.key,i||t.ref,null)}function je(t,e){var u={__c:e="__cC"+de++,__:t,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,n;return this.getChildContext||(i=[],(n={})[e]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(_){this.props.value!==_.value&&i.some(W)},this.sub=function(_){i.push(_);var a=_.componentWillUnmount;_.componentWillUnmount=function(){i.splice(i.indexOf(_),1),a&&a.call(_)}}),r.children}};return u.Provider.__=u.Consumer.contextType=u}T=he.slice,c={__e:function(t,e,u,r){for(var i,n,_;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),_=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),_=i.__d),_)return i.__E=i}catch(a){t=a}throw t}},se=0,fe=function(t){return t!=null&&t.constructor===void 0},w.prototype.setState=function(t,e){var u;u=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof t=="function"&&(t=t(C({},u),this.props)),t&&C(u,t),t!=null&&this.__v&&(e&&this.__h.push(e),W(this))},w.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),W(this))},w.prototype.render=$,B=[],pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U.__r=0,de=0;var qe=Object.freeze(Object.defineProperty({__proto__:null,render:K,hydrate:De,createElement:N,h:N,Fragment:$,createRef:Se,get isValidElement(){return fe},Component:w,cloneElement:Ue,createContext:je,toChildArray:Ee,get options(){return c}},Symbol.toStringTag,{value:"Module"})),$e,g,q,ee,I=0,be=[],te=c.__b,ue=c.__r,ne=c.diffed,re=c.__c,oe=c.unmount;function Ne(t,e){c.__h&&c.__h(g,t,I||e),I=0;var u=g.__H||(g.__H={__:[],__h:[]});return t>=u.__.length&&u.__.push({}),u.__[t]}function P(t){return I=1,We(Be,t)}function We(t,e,u){var r=Ne($e++,2);return r.t=t,r.__c||(r.__=[u?u(e):Be(void 0,e),function(i){var n=r.t(r.__[0],i);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=g),r.__}function Ie(){for(var t;t=be.shift();)if(t.__P)try{t.__H.__h.forEach(M),t.__H.__h.forEach(z),t.__H.__h=[]}catch(e){t.__H.__h=[],c.__e(e,t.__v)}}c.__b=function(t){g=null,te&&te(t)},c.__r=function(t){ue&&ue(t),$e=0;var e=(g=t.__c).__H;e&&(q===g?(e.__h=[],g.__h=[],e.__.forEach(function(u){u.o=u.u=void 0})):(e.__.forEach(function(u){u.u&&(u.__H=u.u),u.o&&(u.__=u.o),u.o=u.u=void 0}),e.__h.forEach(M),e.__h.forEach(z),e.__h=[])),q=g},c.diffed=function(t){ne&&ne(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(be.push(e)!==1&&ee===c.requestAnimationFrame||((ee=c.requestAnimationFrame)||function(u){var r,i=function(){clearTimeout(n),_e&&cancelAnimationFrame(r),setTimeout(u)},n=setTimeout(i,100);_e&&(r=requestAnimationFrame(i))})(Ie)),g=null,q=null},c.__c=function(t,e){e.some(function(u){try{u.__H&&u.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.o&&(r.__=r.o),r.o=r.u=void 0}),u.__h.forEach(M),u.__h=u.__h.filter(function(r){return!r.__||z(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],c.__e(r,u.__v)}}),re&&re(t,e)},c.unmount=function(t){oe&&oe(t);var e,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(r){try{M(r)}catch(i){e=i}}),e&&c.__e(e,u.__v))};var _e=typeof requestAnimationFrame=="function";function M(t){var e=g,u=t.__c;typeof u=="function"&&(t.__c=void 0,u()),g=e}function z(t){var e=g;t.__c=t.__(),g=e}function Be(t,e){return typeof e=="function"?e(t):e}function ze(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(u){var r=Object.getOwnPropertyDescriptor(t,u);Object.defineProperty(e,u,r.get?r:{enumerable:!0,get:function(){return t[u]}})}),e}var Re=ze(qe),xe,we,Pe,R=Re,Ve=0;function ie(t,e,u,r,i){var n,_,a={};for(_ in e)_=="ref"?n=e[_]:a[_]=e[_];var p={type:t,props:a,key:u,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ve,__source:i,__self:r};if(typeof t=="function"&&(n=t.defaultProps))for(_ in n)a[_]===void 0&&(a[_]=n[_]);return R.options.vnode&&R.options.vnode(p),p}Pe=R.Fragment,we=ie,xe=ie;const h=we,A=xe,Ge=Pe,le=()=>[""],Ke=()=>{const[t,e]=P(le());return A("form",{onSubmit:u=>u.preventDefault(),children:[h("p",{children:h("button",{onClick:()=>e(le()),children:"\u751F\u6210"})}),h("textarea",{readonly:!0,rows:15,cols:80,children:t[0]})]})};class V{constructor(e){this.patterns=e,this.remainingPatterns=[...e]}pop(){const e=Math.floor(Math.random()*this.remainingPatterns.length),u=this.remainingPatterns[e];return this.remainingPatterns.splice(e,1),u}push(e){this.remainingPatterns.push(e)}reset(){this.remainingPatterns=[...this.patterns]}}(t=>{function e(r){return new t(r).pop()}t.selectOne=e;function u(r,i){const n=new t(i);return[...Array(r)].map(_=>n.pop())}t.selectMany=u})(V||(V={}));var O=V;const ae=(t,e)=>{const u=t===1?"/e":"/p",r=new O(["skywardLeap","spiralPierce1","spiralPierce2","cauterize",void 0,void 0,void 0,void 0]),i=[...Array(8)].map((_,a)=>({index:a,pronoun:`<${a+1}>`,primaryTarget:r.pop(),secondaryTarget:void 0}));O.selectOne(i.filter(_=>_.primaryTarget)).secondaryTarget="altarFlare",O.selectOne(i.filter(_=>!_.primaryTarget)).secondaryTarget="liquidHeaven",O.selectMany(2,i.filter(_=>!_.secondaryTarget)).forEach((_,a)=>_.secondaryTarget=a===0?"thunderStruck1":"thunderStruck2");const n=(_,a,p)=>{const d=i.find(o=>o.primaryTarget===_||o.secondaryTarget===_);return d&&d.index<t?a(d.pronoun):p!=null?p:""};return[`${u} \u9A0E\u795E\u30C8\u30FC\u30EB\u30C0\u30F3\u306F\u300C\u81F3\u5929\u306E\u9663\uFF1A\u98A8\u69CD\u300D\u306E\u69CB\u3048\u3002<se.3> <wait.4>
${u} \u9A0E\u795E\u30C8\u30FC\u30EB\u30C0\u30F3\u306E\u300C\u81F3\u5929\u306E\u9663\uFF1A\u98A8\u69CD\u300D <se.3> <wait.6>
${n("skywardLeap",_=>`/mk circle ${_}`,`${u} (\u30B9\u30AB\u30A4\u30EF\u30FC\u30C9\u30EA\u30FC\u30D7 \u30DE\u30FC\u30AB\u30FC\u4ED8\u4E0E)`)}
${n("spiralPierce1",_=>`/mk bind1 ${_}`)}
${n("spiralPierce2",_=>`/mk bind2 ${_} <wait.5>`,`${u} (\u30B9\u30D1\u30A4\u30E9\u30EB\u30D4\u30A2\u30B9 \u30DE\u30FC\u30AB\u30FC\u4ED8\u4E0E) <wait.5>`)}
${n("thunderStruck1",_=>`/mk stop1 ${_}`)}
${n("thunderStruck1",_=>`/mk stop2 ${_} <wait.2>`,`${u} (\u30B5\u30F3\u30C0\u30FC\u30A6\u30A3\u30F3\u30B0 \u30C7\u30D0\u30D5\u4ED8\u4E0E) <wait.2>`)}
/mk off <circle>
/mk off <bind1>
/mk off <bind2>
${n("cauterize",_=>`/mk triangle ${_}`)}
${u} \u30F4\u30A7\u30BA\u30EB\u30D5\u30A7\u30EB\u30CB\u30EB\u306E\u300C\u30C4\u30A4\u30B9\u30BF\u30FC\u30C0\u30A4\u30D6\u300D <se.5> <wait.6>
/mk off <triangle>
${u} \u9A0E\u795E\u30C8\u30FC\u30EB\u30C0\u30F3\u306E\u300C\u30EC\u30D9\u30EC\u30FC\u30B7\u30E7\u30F3\u30FB\u30A2\u30B9\u30AB\u30ED\u30F3\u30E1\u30EB\u30B7\u30FC\u300D <se.4>
${e}`,`${n("liquidHeaven",_=>`/mk attack4 ${_}`)}
${n("altarFlare",_=>`/mk attack3 ${_}`)}
${u} \u30D8\u30F4\u30F3\u30EA\u30AD\u30C3\u30C9 (1), \u30A2\u30EB\u30BF\u30FC\u30D5\u30EC\u30A2 (1) <se.3> <wait.1>
${n("liquidHeaven",_=>`/mk attack3 ${_}`)}
${n("altarFlare",_=>`/mk attack2 ${_}`)}
${u} \u30D8\u30F4\u30F3\u30EA\u30AD\u30C3\u30C9 (2), \u30A2\u30EB\u30BF\u30FC\u30D5\u30EC\u30A2 (2) <se.3> <wait.1>
${n("liquidHeaven",_=>`/mk attack2 ${_}`)}
${n("altarFlare",_=>`/mk attack1 ${_}`)}
${u} \u30D8\u30F4\u30F3\u30EA\u30AD\u30C3\u30C9 (3), \u30A2\u30EB\u30BF\u30FC\u30D5\u30EC\u30A2 (3) <se.3> <wait.1>
${n("liquidHeaven",_=>`/mk attack1 ${_}`)}
${n("altarFlare",_=>`/mk off ${_}`)}
${u} \u30D8\u30F4\u30F3\u30EA\u30AD\u30C3\u30C9 (4), \u30A2\u30EB\u30BF\u30FC\u30D5\u30EC\u30A2 (4) <se.3> <wait.1>
${n("liquidHeaven",_=>`/mk off ${_}`)}
${u} \u30D8\u30F4\u30F3\u30EA\u30AD\u30C3\u30C9 (5) <se.3> <wait.1>
${u} \u8056\u9A0E\u58EB\u30B0\u30EA\u30CE\u30FC\u306E\u300C\u30A8\u30F3\u30D7\u30C6\u30A3\u30C7\u30A3\u30E1\u30F3\u30B7\u30E7\u30F3\u300D <se.4>`]},Je=()=>{const[t,e]=P(8),[u,r]=P("/e \u6B21\u306E\u30DE\u30AF\u30ED\u3078\uFF01 <se.7>"),[i,n]=P(ae(t,u));return A("form",{onSubmit:_=>_.preventDefault(),children:[A("p",{children:["\u7DF4\u7FD2\u4EBA\u6570:"," ",A("select",{value:t,onChange:_=>e(parseInt(_.currentTarget.value)),children:[h("option",{value:8,children:"8"}),h("option",{value:7,children:"7"}),h("option",{value:6,children:"6"}),h("option",{value:5,children:"5"}),h("option",{value:4,children:"4"}),h("option",{value:3,children:"3"}),h("option",{value:2,children:"2"}),h("option",{value:1,children:"1"})]}),h("br",{}),"\u30DE\u30AF\u30ED\u7D99\u7D9A\u901A\u77E5:"," ",h("input",{value:u,autocomplete:"off",onChange:_=>r(_.currentTarget.value)}),h("br",{}),h("button",{onClick:()=>n(ae(t,u)),children:"\u751F\u6210"})]}),i.map(_=>A(Ge,{children:[h("textarea",{readonly:!0,rows:15,cols:80,children:_.replace(/\n\n+/g,`
`).trim()}),h("br",{})]}))]})},Qe=()=>{const[t,e]=P("woth");return A($,{children:[h("h1",{children:"\u7D76\u7ADC\u8A69\u6226\u4E89: \u7DF4\u7FD2\u30DE\u30AF\u30ED\u30AC\u30C1\u30E3"}),A("p",{children:["\u7DF4\u7FD2\u3057\u305F\u3044\u30D5\u30A7\u30FC\u30BA\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u9082\u9005\u7DE8 4 \u306A\u3069\u306B\u7A81\u5165\u3057\u3066\u4F7F\u3048\u308B\u3001\u7DF4\u7FD2\u7528\u30DE\u30AF\u30ED\u3092\u751F\u6210\u3057\u307E\u3059\u3002",h("br",{}),"\u751F\u6210\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u305F\u3073\u306B\u30DE\u30AF\u30ED\u4E2D\u306E\u30E9\u30F3\u30C0\u30E0\u8981\u7D20\u304C\u5165\u308C\u66FF\u308F\u308A\u307E\u3059\u3002"]}),A("select",{value:t,onChange:u=>e(u.currentTarget.value),children:[h("option",{value:"woth",children:"\u81F3\u5929\u306E\u9663\uFF1A\u98A8\u69CD"}),h("option",{value:"doth",children:"\u81F3\u5929\u306E\u9663\uFF1A\u6B7B\u523B"})]}),t==="woth"&&h(Je,{}),t==="doth"&&h(Ke,{})]})},ce=document.getElementById("app");ce&&K(h(Qe,{}),ce);
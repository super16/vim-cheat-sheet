(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))r(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerPolicy&&(o.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?o.credentials="include":_.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(_){if(_.ep)return;_.ep=!0;const o=t(_);fetch(_.href,o)}})();var R,d,Pe,x,te,$e,z,xe,D={},Se=[],We=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,I=Array.isArray;function $(n,e){for(var t in e)n[t]=e[t];return n}function Ee(n){var e=n.parentNode;e&&e.removeChild(n)}function q(n,e,t){var r,_,o,c={};for(o in e)o=="key"?r=e[o]:o=="ref"?_=e[o]:c[o]=e[o];if(arguments.length>2&&(c.children=arguments.length>3?R.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(o in n.defaultProps)c[o]===void 0&&(c[o]=n.defaultProps[o]);return L(n,c,r,_,null)}function L(n,e,t,r,_){var o={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_??++Pe,__i:-1,__u:0};return _==null&&d.vnode!=null&&d.vnode(o),o}function S(n){return n.children}function C(n,e){this.props=n,this.context=e}function E(n,e){if(e==null)return n.__?E(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?E(n):null}function He(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return He(n)}}function Z(n){(!n.__d&&(n.__d=!0)&&x.push(n)&&!V.__r++||te!==d.debounceRendering)&&((te=d.debounceRendering)||$e)(V)}function V(){var n,e,t,r,_,o,c,u,a;for(x.sort(z);n=x.shift();)n.__d&&(e=x.length,r=void 0,o=(_=(t=n).__v).__e,u=[],a=[],(c=t.__P)&&((r=$({},_)).__v=_.__v+1,d.vnode&&d.vnode(r),Y(c,r,_,t.__n,c.ownerSVGElement!==void 0,32&_.__u?[o]:null,u,o??E(_),!!(32&_.__u),a),r.__.__k[r.__i]=r,Me(u,r,a),r.__e!=o&&He(r)),x.length>e&&x.sort(z));V.__r=0}function De(n,e,t,r,_,o,c,u,a,s,f){var l,g,h,v,w,m=r&&r.__k||Se,p=e.length;for(t.__d=a,qe(t,e,m),a=t.__d,l=0;l<p;l++)(h=t.__k[l])!=null&&typeof h!="boolean"&&typeof h!="function"&&(g=h.__i===-1?D:m[h.__i]||D,h.__i=l,Y(n,h,g,_,o,c,u,a,s,f),v=h.__e,h.ref&&g.ref!=h.ref&&(g.ref&&ee(g.ref,null,h),f.push(h.ref,h.__c||v,h)),w==null&&v!=null&&(w=v),65536&h.__u||g.__k===h.__k?a=Oe(h,a,n):typeof h.type=="function"&&h.__d!==void 0?a=h.__d:v&&(a=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=a,t.__e=w}function qe(n,e,t){var r,_,o,c,u,a=e.length,s=t.length,f=s,l=0;for(n.__k=[],r=0;r<a;r++)(_=n.__k[r]=(_=e[r])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"||_.constructor==String?L(null,_,null,null,_):I(_)?L(S,{children:_},null,null,null):_.constructor===void 0&&_.__b>0?L(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null?(_.__=n,_.__b=n.__b+1,u=Ve(_,t,c=r+l,f),_.__i=u,o=null,u!==-1&&(f--,(o=t[u])&&(o.__u|=131072)),o==null||o.__v===null?(u==-1&&l--,typeof _.type!="function"&&(_.__u|=65536)):u!==c&&(u===c+1?l++:u>c?f>a-c?l+=u-c:l--:l=u<c&&u==c-1?u-c:0,u!==r+l&&(_.__u|=65536))):(o=t[r])&&o.key==null&&o.__e&&(o.__e==n.__d&&(n.__d=E(o)),G(o,o,!1),t[r]=null,f--);if(f)for(r=0;r<s;r++)(o=t[r])!=null&&!(131072&o.__u)&&(o.__e==n.__d&&(n.__d=E(o)),G(o,o))}function Oe(n,e,t){var r,_;if(typeof n.type=="function"){for(r=n.__k,_=0;r&&_<r.length;_++)r[_]&&(r[_].__=n,e=Oe(r[_],e,t));return e}return n.__e!=e&&(t.insertBefore(n.__e,e||null),e=n.__e),e&&e.nextSibling}function F(n,e){return e=e||[],n==null||typeof n=="boolean"||(I(n)?n.some(function(t){F(t,e)}):e.push(n)),e}function Ve(n,e,t,r){var _=n.key,o=n.type,c=t-1,u=t+1,a=e[t];if(a===null||a&&_==a.key&&o===a.type)return t;if(r>(a!=null&&!(131072&a.__u)?1:0))for(;c>=0||u<e.length;){if(c>=0){if((a=e[c])&&!(131072&a.__u)&&_==a.key&&o===a.type)return c;c--}if(u<e.length){if((a=e[u])&&!(131072&a.__u)&&_==a.key&&o===a.type)return u;u++}}return-1}function _e(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||We.test(e)?t:t+"px"}function U(n,e,t,r,_){var o;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||_e(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||_e(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+o]=t,t?r?t.u=r.u:(t.u=Date.now(),n.addEventListener(e,o?oe:re,o)):n.removeEventListener(e,o?oe:re,o);else{if(_)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,t))}}function re(n){var e=this.l[n.type+!1];if(n.t){if(n.t<=e.u)return}else n.t=Date.now();return e(d.event?d.event(n):n)}function oe(n){return this.l[n.type+!0](d.event?d.event(n):n)}function Y(n,e,t,r,_,o,c,u,a,s){var f,l,g,h,v,w,m,p,y,P,O,H,ne,M,B,k=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(a=!!(32&t.__u),o=[u=e.__e=t.__e]),(f=d.__b)&&f(e);e:if(typeof k=="function")try{if(p=e.props,y=(f=k.contextType)&&r[f.__c],P=f?y?y.props.value:f.__:r,t.__c?m=(l=e.__c=t.__c).__=l.__E:("prototype"in k&&k.prototype.render?e.__c=l=new k(p,P):(e.__c=l=new C(p,P),l.constructor=k,l.render=Re),y&&y.sub(l),l.props=p,l.state||(l.state={}),l.context=P,l.__n=r,g=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),k.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=$({},l.__s)),$(l.__s,k.getDerivedStateFromProps(p,l.__s))),h=l.props,v=l.state,l.__v=e,g)k.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(k.getDerivedStateFromProps==null&&p!==h&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(p,P),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(p,l.__s,P)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(l.props=p,l.state=l.__s,l.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(N){N&&(N.__=e)}),O=0;O<l._sb.length;O++)l.__h.push(l._sb[O]);l._sb=[],l.__h.length&&c.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(p,l.__s,P),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(h,v,w)})}if(l.context=P,l.props=p,l.__P=n,l.__e=!1,H=d.__r,ne=0,"prototype"in k&&k.prototype.render){for(l.state=l.__s,l.__d=!1,H&&H(e),f=l.render(l.props,l.state,l.context),M=0;M<l._sb.length;M++)l.__h.push(l._sb[M]);l._sb=[]}else do l.__d=!1,H&&H(e),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++ne<25);l.state=l.__s,l.getChildContext!=null&&(r=$($({},r),l.getChildContext())),g||l.getSnapshotBeforeUpdate==null||(w=l.getSnapshotBeforeUpdate(h,v)),De(n,I(B=f!=null&&f.type===S&&f.key==null?f.props.children:f)?B:[B],e,t,r,_,o,c,u,a,s),l.base=e.__e,e.__u&=-161,l.__h.length&&c.push(l),m&&(l.__E=l.__=null)}catch(N){e.__v=null,a||o!=null?(e.__e=u,e.__u|=a?160:32,o[o.indexOf(u)]=null):(e.__e=t.__e,e.__k=t.__k),d.__e(N,e,t)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Fe(t.__e,e,t,r,_,o,c,a,s);(f=d.diffed)&&f(e)}function Me(n,e,t){e.__d=void 0;for(var r=0;r<t.length;r++)ee(t[r],t[++r],t[++r]);d.__c&&d.__c(e,n),n.some(function(_){try{n=_.__h,_.__h=[],n.some(function(o){o.call(_)})}catch(o){d.__e(o,_.__v)}})}function Fe(n,e,t,r,_,o,c,u,a){var s,f,l,g,h,v,w,m=t.props,p=e.props,y=e.type;if(y==="svg"&&(_=!0),o!=null){for(s=0;s<o.length;s++)if((h=o[s])&&"setAttribute"in h==!!y&&(y?h.localName===y:h.nodeType===3)){n=h,o[s]=null;break}}if(n==null){if(y===null)return document.createTextNode(p);n=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,p.is&&p),o=null,u=!1}if(y===null)m===p||u&&n.data===p||(n.data=p);else{if(o=o&&R.call(n.childNodes),m=t.props||D,!u&&o!=null)for(m={},s=0;s<n.attributes.length;s++)m[(h=n.attributes[s]).name]=h.value;for(s in m)h=m[s],s=="children"||(s=="dangerouslySetInnerHTML"?l=h:s==="key"||s in p||U(n,s,null,h,_));for(s in p)h=p[s],s=="children"?g=h:s=="dangerouslySetInnerHTML"?f=h:s=="value"?v=h:s=="checked"?w=h:s==="key"||u&&typeof h!="function"||m[s]===h||U(n,s,h,m[s],_);if(f)u||l&&(f.__html===l.__html||f.__html===n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(l&&(n.innerHTML=""),De(n,I(g)?g:[g],e,t,r,_&&y!=="foreignObject",o,c,o?o[0]:t.__k&&E(t,0),u,a),o!=null)for(s=o.length;s--;)o[s]!=null&&Ee(o[s]);u||(s="value",v!==void 0&&(v!==n[s]||y==="progress"&&!v||y==="option"&&v!==m[s])&&U(n,s,v,m[s],!1),s="checked",w!==void 0&&w!==n[s]&&U(n,s,w,m[s],!1))}return n}function ee(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(r){d.__e(r,t)}}function G(n,e,t){var r,_;if(d.unmount&&d.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||ee(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,e)}r.base=r.__P=null,n.__c=void 0}if(r=n.__k)for(_=0;_<r.length;_++)r[_]&&G(r[_],e,t||typeof n.type!="function");t||n.__e==null||Ee(n.__e),n.__=n.__e=n.__d=void 0}function Re(n,e,t){return this.constructor(n,t)}function Ie(n,e,t){var r,_,o,c;d.__&&d.__(n,e),_=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],c=[],Y(e,n=(!r&&t||e).__k=q(S,null,[n]),_||D,D,e.ownerSVGElement!==void 0,!r&&t?[t]:_?null:e.firstChild?R.call(e.childNodes):null,o,!r&&t?t:_?_.__e:e.firstChild,r,c),Me(o,n,c)}function Be(n,e){var t={__c:e="__cC"+xe++,__:n,Consumer:function(r,_){return r.children(_)},Provider:function(r){var _,o;return this.getChildContext||(_=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&_.some(function(u){u.__e=!0,Z(u)})},this.sub=function(c){_.push(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){_.splice(_.indexOf(c),1),u&&u.call(c)}}),r.children}};return t.Provider.__=t.Consumer.contextType=t}R=Se.slice,d={__e:function(n,e,t,r){for(var _,o,c;e=e.__;)if((_=e.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(n)),c=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(n,r||{}),c=_.__d),c)return _.__E=_}catch(u){n=u}throw n}},Pe=0,C.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof n=="function"&&(n=n($({},t),this.props)),n&&$(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Z(this))},C.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Z(this))},C.prototype.render=S,x=[],$e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z=function(n,e){return n.__v.__b-e.__v.__b},V.__r=0,xe=0;var K,b,j,ie,le=0,Ne=[],T=[],ce=d.__b,ue=d.__r,de=d.diffed,ae=d.__c,se=d.unmount;function je(n,e){d.__h&&d.__h(b,n,le||e),le=0;var t=b.__H||(b.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:T}),t.__[n]}function Xe(n){var e=b.context[n.__c],t=je(K++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(b)),e.props.value):n.__}function ze(){for(var n;n=Ne.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(W),n.__H.__h.forEach(J),n.__H.__h=[]}catch(e){n.__H.__h=[],d.__e(e,n.__v)}}d.__b=function(n){b=null,ce&&ce(n)},d.__r=function(n){ue&&ue(n),K=0;var e=(b=n.__c).__H;e&&(j===b?(e.__h=[],b.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=T,t.__N=t.i=void 0})):(e.__h.forEach(W),e.__h.forEach(J),e.__h=[],K=0)),j=b},d.diffed=function(n){de&&de(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ne.push(e)!==1&&ie===d.requestAnimationFrame||((ie=d.requestAnimationFrame)||Ze)(ze)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==T&&(t.__=t.__V),t.i=void 0,t.__V=T})),j=b=null},d.__c=function(n,e){e.some(function(t){try{t.__h.forEach(W),t.__h=t.__h.filter(function(r){return!r.__||J(r)})}catch(r){e.some(function(_){_.__h&&(_.__h=[])}),e=[],d.__e(r,t.__v)}}),ae&&ae(n,e)},d.unmount=function(n){se&&se(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{W(r)}catch(_){e=_}}),t.__H=void 0,e&&d.__e(e,t.__v))};var he=typeof requestAnimationFrame=="function";function Ze(n){var e,t=function(){clearTimeout(r),he&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);he&&(e=requestAnimationFrame(t))}function W(n){var e=b,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),b=e}function J(n){var e=b;n.__c=n.__(),b=e}const Q={},Ue=Be(Q);function Ge(n){const e=Xe(Ue);return typeof n=="function"?n(e):{...e,...n}}function Ke(n){let e;return n.disableParentContext?e=typeof n.components=="function"?n.components(Q):n.components||Q:e=Ge(n.components),q(Ue.Provider,{children:void 0,value:e},n.children)}function Je(n,e){for(var t in e)n[t]=e[t];return n}function fe(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var r in e)if(r!=="__source"&&n[r]!==e[r])return!0;return!1}function pe(n){this.props=n}(pe.prototype=new C).isPureReactComponent=!0,pe.prototype.shouldComponentUpdate=function(n,e){return fe(this.props,n)||fe(this.state,e)};var ve=d.__b;d.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),ve&&ve(n)};var Qe=d.__e;d.__e=function(n,e,t,r){if(n.then){for(var _,o=e;o=o.__;)if((_=o.__c)&&_.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),_.__c(n,e)}Qe(n,e,t,r)};var me=d.unmount;function Ae(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),n.__c.__H=null),(n=Je({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c=null),n.__k=n.__k&&n.__k.map(function(r){return Ae(r,e,t)})),n}function Le(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(r){return Le(r,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function X(){this.__u=0,this.t=null,this.__b=null}function Te(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function A(){this.u=null,this.o=null}d.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),me&&me(n)},(X.prototype=new C).__c=function(n,e){var t=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(t);var _=Te(r.__v),o=!1,c=function(){o||(o=!0,t.__R=null,_?_(u):u())};t.__R=c;var u=function(){if(!--r.__u){if(r.state.__a){var a=r.state.__a;r.__v.__k[0]=Le(a,a.__c.__P,a.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(c,c)},X.prototype.componentWillUnmount=function(){this.t=[]},X.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Ae(this.__b,t,r.__O=r.__P)}this.__b=null}var _=e.__a&&q(S,null,n.fallback);return _&&(_.__u&=-33),[q(S,null,e.__a?null:n.children),_]};var ye=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(A.prototype=new C).__a=function(n){var e=this,t=Te(e.__v),r=e.o.get(n);return r[0]++,function(_){var o=function(){e.props.revealOrder?(r.push(_),ye(e,n,r)):_()};t?t(o):o()}},A.prototype.render=function(n){this.u=null,this.o=new Map;var e=F(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},A.prototype.componentDidUpdate=A.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){ye(n,t,e)})};var Ye=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,en=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,nn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,tn=/[A-Z0-9]/g,_n=typeof document<"u",rn=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};C.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(C.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var ge=d.event;function on(){}function ln(){return this.cancelBubble}function cn(){return this.defaultPrevented}d.event=function(n){return ge&&(n=ge(n)),n.persist=on,n.isPropagationStopped=ln,n.isDefaultPrevented=cn,n.nativeEvent=n};var un={enumerable:!1,configurable:!0,get:function(){return this.class}},be=d.vnode;d.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,r=e.type,_={};for(var o in t){var c=t[o];if(!(o==="value"&&"defaultValue"in t&&c==null||_n&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var u=o.toLowerCase();o==="defaultValue"&&"value"in t&&t.value==null?o="value":o==="download"&&c===!0?c="":u==="ondoubleclick"?o="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||rn(t.type)?u==="onfocus"?o="onfocusin":u==="onblur"?o="onfocusout":nn.test(o)?o=u:r.indexOf("-")===-1&&en.test(o)?o=o.replace(tn,"-$&").toLowerCase():c===null&&(c=void 0):u=o="oninput",u==="oninput"&&_[o=u]&&(o="oninputCapture"),_[o]=c}}r=="select"&&_.multiple&&Array.isArray(_.value)&&(_.value=F(t.children).forEach(function(a){a.props.selected=_.value.indexOf(a.props.value)!=-1})),r=="select"&&_.defaultValue!=null&&(_.value=F(t.children).forEach(function(a){a.props.selected=_.multiple?_.defaultValue.indexOf(a.props.value)!=-1:_.defaultValue==a.props.value})),t.class&&!t.className?(_.class=t.class,Object.defineProperty(_,"className",un)):(t.className&&!t.class||t.class&&t.className)&&(_.class=_.className=t.className),e.props=_}(n),n.$$typeof=Ye,be&&be(n)};var ke=d.__r;d.__r=function(n){ke&&ke(n),n.__c};var we=d.diffed;d.diffed=function(n){we&&we(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value)};var dn=0;function i(n,e,t,r,_,o){var c,u,a={};for(u in e)u=="ref"?c=e[u]:a[u]=e[u];var s={type:n,props:a,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--dn,__i:-1,__u:0,__source:_,__self:o};if(typeof n=="function"&&(c=n.defaultProps))for(u in c)a[u]===void 0&&(a[u]=c[u]);return d.vnode&&d.vnode(s),s}function Ce(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...n.components};return i(S,{children:[i(e.h1,{children:"Vim Cheat Sheet"}),`
`,i(e.h2,{children:"Command mode"}),`
`,i(e.h3,{children:"Basic"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:":q"})," quit"]}),`
`,i(e.li,{children:[i(e.code,{children:":q!"})," quit without saving changes"]}),`
`,i(e.li,{children:[i(e.code,{children:":w"})," save edits"]}),`
`,i(e.li,{children:[i(e.code,{children:":wq"})," save edits and quit"]}),`
`,i(e.li,{children:[i(e.code,{children:"ZZ"})," save edits and quit (equivalent to ",i(e.code,{children:":wq"}),")"]}),`
`,i(e.li,{children:[i(e.code,{children:":w <new filename>"})," save as file with new filename"]}),`
`,i(e.li,{children:[i(e.code,{children:":e!"})," reloads the last saved version to start again"]}),`
`]}),`
`,i(e.h3,{children:"Moving cursor"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:"h"})," left one character"]}),`
`,i(e.li,{children:[i(e.code,{children:"j"})," down one line"]}),`
`,i(e.li,{children:[i(e.code,{children:"k"})," up one line"]}),`
`,i(e.li,{children:[i(e.code,{children:"l"})," right one character"]}),`
`,i(e.li,{children:[i(e.code,{children:"0"})," to the beginning of the line"]}),`
`,i(e.li,{children:[i(e.code,{children:"$"})," to the end of the line"]}),`
`,i(e.li,{children:[i(e.code,{children:"w"})," move forward one word (punctuation & digits included)"]}),`
`,i(e.li,{children:[i(e.code,{children:"W"})," move forward one Word (only words)"]}),`
`,i(e.li,{children:[i(e.code,{children:"b"})," move backward one word (punctuation & digits included)"]}),`
`,i(e.li,{children:[i(e.code,{children:"B"})," move backward one word (only words)"]}),`
`,i(e.li,{children:[i(e.code,{children:"{"})," move to the beginning of the current paragraph"]}),`
`,i(e.li,{children:[i(e.code,{children:"}"})," move to the beginning of the next paragraph"]}),`
`]}),`
`,i(e.h3,{children:"Changing text"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:"cw"})," to the end of a word"]}),`
`,i(e.li,{children:[i(e.code,{children:"c$"})," to the end of the line"]}),`
`,i(e.li,{children:[i(e.code,{children:"c0"})," to the beginning of the line"]}),`
`,i(e.li,{children:[i(e.code,{children:'ci"'})," inside double quotes"]}),`
`,i(e.li,{children:[i(e.code,{children:"C"})," change from the current cursor position to the end of the line"]}),`
`]}),`
`,i(e.h3,{children:"Replace"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:"r"})," replace single character"]}),`
`,i(e.li,{children:[i(e.code,{children:"R"})," enters overstrike mode, replace character by character"]}),`
`,i(e.li,{children:[i(e.code,{children:"s"})," substitute character (delete character and enter insert mode)"]}),`
`,i(e.li,{children:[i(e.code,{children:"S"})," delete entire line from any position position of cursor on the line and enter insert mode"]}),`
`,i(e.li,{children:[i(e.code,{children:"~"})," change case of the character"]}),`
`,i(e.li,{children:[i(e.code,{children:"<C-a>"})," increment the number under cursor"]}),`
`,i(e.li,{children:[i(e.code,{children:"<C-x>"})," decrement the number under cursor"]}),`
`]}),`
`,i(e.h3,{children:"Delete"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:"dw"})," delete word"]}),`
`,i(e.li,{children:[i(e.code,{children:"dW"})," delete Word up to the next whitespace character"]}),`
`,i(e.li,{children:[i(e.code,{children:"dE"})," delete to the end of the word (keep space)"]}),`
`,i(e.li,{children:[i(e.code,{children:"db"})," delete backward (to the whitespace character before word)"]}),`
`,i(e.li,{children:[i(e.code,{children:"d$"})," delete to the end of the line"]}),`
`,i(e.li,{children:[i(e.code,{children:"d0"})," delete to the beginning of the line"]}),`
`,i(e.li,{children:[i(e.code,{children:"dd"})," delete the current line"]}),`
`,i(e.li,{children:[i(e.code,{children:"dt<character>"})," delete till the first occurance of the specified character"]}),`
`,i(e.li,{children:[i(e.code,{children:"x"})," delete one character"]}),`
`]}),`
`,i(e.h3,{children:"Moving text"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:"ddkkp"})," move the line up"]}),`
`,i(e.li,{children:[i(e.code,{children:"ddp"})," move the line below"]}),`
`]}),`
`,i(e.h2,{children:"Visual mode"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.code,{children:"v"})," visually select the current character"]}),`
`,i(e.li,{children:[i(e.code,{children:"V"})," visually select the current line"]}),`
`]})]})}function an(n={}){const{wrapper:e}=n.components||{};return e?i(e,{...n,children:i(Ce,{...n})}):Ce(n)}function sn(){return i("article",{children:[i("span",{className:"pre-title",children:"Personal collection of commands, which I sometimes forget."}),i(Ke,{children:i(an,{})})]})}Ie(i(sn,{}),document.body);

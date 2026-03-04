(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const eo="183",Ym=0,$f=1,qm=2,Ko=1,$m=2,Sa=3,ir=0,cn=1,ei=2,Bn=0,Bs=1,Bc=2,Kf=3,Zf=4,Km=5,Kr=100,Zm=101,jm=102,Jm=103,Qm=104,e_=200,t_=201,n_=202,i_=203,zc=204,kc=205,r_=206,s_=207,a_=208,o_=209,l_=210,c_=211,u_=212,f_=213,h_=214,Gc=0,ul=1,Hc=2,Ys=3,Vc=4,Wc=5,Xc=6,Yc=7,Nd=0,d_=1,p_=2,ki=0,Fd=1,Od=2,Bd=3,zd=4,kd=5,Gd=6,Hd=7,Vd=300,ls=301,qs=302,Bl=303,zl=304,wl=306,qc=1e3,Qi=1001,$c=1002,pn=1003,m_=1004,lo=1005,$t=1006,kl=1007,jr=1008,qt=1009,Wd=1010,Xd=1011,Va=1012,rf=1013,Ti=1014,Ni=1015,rr=1016,sf=1017,af=1018,$s=1020,Yd=35902,qd=35899,$d=1021,Kd=1022,yi=1023,sr=1026,Sr=1027,Zd=1028,of=1029,Ks=1030,lf=1031,cf=1033,Zo=33776,jo=33777,Jo=33778,Qo=33779,Kc=35840,Zc=35841,jc=35842,Jc=35843,Qc=36196,eu=37492,tu=37496,nu=37488,iu=37489,ru=37490,su=37491,au=37808,ou=37809,lu=37810,cu=37811,uu=37812,fu=37813,hu=37814,du=37815,pu=37816,mu=37817,_u=37818,gu=37819,vu=37820,xu=37821,Su=36492,Mu=36494,Eu=36495,yu=36283,Tu=36284,bu=36285,Au=36286,to=3200,jd=0,__=1,Ii="",Tt="srgb",Pr="srgb-linear",fl="linear",Mt="srgb",_s=7680,jf=519,g_=512,v_=513,x_=514,uf=515,S_=516,M_=517,ff=518,E_=519,Jf=35044,Qf="300 es",Fi=2e3,Wa=2001;function y_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function T_(){const i=hl("canvas");return i.style.display="block",i}const eh={};function th(...i){const e="THREE."+i.shift();console.log(e,...i)}function Jd(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=Jd(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=Jd(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function dl(...i){const e=i.join(" ");e in eh||(eh[e]=!0,Ye(...i))}function b_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const A_={[Gc]:ul,[Hc]:Xc,[Vc]:Yc,[Ys]:Wc,[ul]:Gc,[Xc]:Hc,[Yc]:Vc,[Wc]:Ys};class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gl=Math.PI/180,wu=180/Math.PI;function no(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function w_(i,e){return(i%e+e)%e}function Hl(i,e,t){return(1-t)*i+t*e}function ca(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sa{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],f=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==f||c!==h||u!==_){let p=l*f+c*h+u*_+d*g;p<0&&(f=-f,h=-h,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);m=Math.sin(m*v)/E,o=Math.sin(o*v)/E,l=l*m+f*o,c=c*m+h*o,u=u*m+_*o,d=d*m+g*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+_*o,d=d*m+g*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),f=l(n/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new G,nh=new sa;class Je{constructor(e,t,n,r,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],g=r[0],p=r[3],m=r[6],v=r[1],E=r[4],S=r[7],A=r[2],w=r[5],b=r[8];return s[0]=a*g+o*v+l*A,s[3]=a*p+o*E+l*w,s[6]=a*m+o*S+l*b,s[1]=c*g+u*v+d*A,s[4]=c*p+u*E+d*w,s[7]=c*m+u*S+d*b,s[2]=f*g+h*v+_*A,s[5]=f*p+h*E+_*w,s[8]=f*m+h*S+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+n*f+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=h*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wl=new Je,ih=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R_(){const i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Mt&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?fl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:e,whitePoint:n,transfer:fl,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}const ft=R_();function tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gs;class C_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=hl("canvas")),gs.width=e.width,gs.height=e.height;const r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P_=0;class hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xl(r[a].image)):s.push(Xl(r[a]))}else s=Xl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?C_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let D_=0;const Yl=new G;class _n extends lr{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=Qi,r=Qi,s=$t,a=jr,o=yi,l=qt,c=_n.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=no(),this.name="",this.source=new hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Vd;_n.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(h+1)/2,A=(m+1)/2,w=(u+f)/4,b=(d+g)/4,x=(_+p)/4;return E>S&&E>A?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=w/n,s=b/n):S>A?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=w/r,s=x/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=b/s,r=x/s),this.set(n,r,s,t),this}let v=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-g)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U_ extends lr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new _n(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new hf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends U_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qd extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I_ extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lt{constructor(e,t,n,r,s,a,o,l,c,u,d,f,h,_,g,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,f,h,_,g,p)}set(e,t,n,r,s,a,o,l,c,u,d,f,h,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f+g*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L_,e,N_)}lookAt(e,t,n){const r=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),hr.crossVectors(n,$n),hr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),hr.crossVectors(n,$n)),hr.normalize(),co.crossVectors($n,hr),r[0]=hr.x,r[4]=co.x,r[8]=$n.x,r[1]=hr.y,r[5]=co.y,r[9]=$n.y,r[2]=hr.z,r[6]=co.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],g=n[6],p=n[10],m=n[14],v=n[3],E=n[7],S=n[11],A=n[15],w=r[0],b=r[4],x=r[8],y=r[12],U=r[1],C=r[5],I=r[9],z=r[13],H=r[2],B=r[6],k=r[10],N=r[14],J=r[3],Q=r[7],P=r[11],le=r[15];return s[0]=a*w+o*U+l*H+c*J,s[4]=a*b+o*C+l*B+c*Q,s[8]=a*x+o*I+l*k+c*P,s[12]=a*y+o*z+l*N+c*le,s[1]=u*w+d*U+f*H+h*J,s[5]=u*b+d*C+f*B+h*Q,s[9]=u*x+d*I+f*k+h*P,s[13]=u*y+d*z+f*N+h*le,s[2]=_*w+g*U+p*H+m*J,s[6]=_*b+g*C+p*B+m*Q,s[10]=_*x+g*I+p*k+m*P,s[14]=_*y+g*z+p*N+m*le,s[3]=v*w+E*U+S*H+A*J,s[7]=v*b+E*C+S*B+A*Q,s[11]=v*x+E*I+S*k+A*P,s[15]=v*y+E*z+S*N+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],g=e[7],p=e[11],m=e[15],v=l*h-c*f,E=o*h-c*d,S=o*f-l*d,A=a*h-c*u,w=a*f-l*u,b=a*d-o*u;return t*(g*v-p*E+m*S)-n*(_*v-p*A+m*w)+r*(_*E-g*A+m*b)-s*(_*S-g*w+p*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],g=e[13],p=e[14],m=e[15],v=t*o-n*a,E=t*l-r*a,S=t*c-s*a,A=n*l-r*o,w=n*c-s*o,b=r*c-s*l,x=u*g-d*_,y=u*p-f*_,U=u*m-h*_,C=d*p-f*g,I=d*m-h*g,z=f*m-h*p,H=v*z-E*I+S*C+A*U-w*y+b*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=(o*z-l*I+c*C)*B,e[1]=(r*I-n*z-s*C)*B,e[2]=(g*b-p*w+m*A)*B,e[3]=(f*w-d*b-h*A)*B,e[4]=(l*U-a*z-c*y)*B,e[5]=(t*z-r*U+s*y)*B,e[6]=(p*S-_*b-m*E)*B,e[7]=(u*b-f*S+h*E)*B,e[8]=(a*I-o*U+c*x)*B,e[9]=(n*U-t*I-s*x)*B,e[10]=(_*w-g*S+m*v)*B,e[11]=(d*S-u*w-h*v)*B,e[12]=(o*y-a*C-l*x)*B,e[13]=(t*C-n*y+r*x)*B,e[14]=(g*E-_*A-p*v)*B,e[15]=(u*A-d*E+f*v)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,g=a*u,p=a*d,m=o*d,v=l*c,E=l*u,S=l*d,A=n.x,w=n.y,b=n.z;return r[0]=(1-(g+m))*A,r[1]=(h+S)*A,r[2]=(_-E)*A,r[3]=0,r[4]=(h-S)*w,r[5]=(1-(f+m))*w,r[6]=(p+v)*w,r[7]=0,r[8]=(_+E)*b,r[9]=(p-v)*b,r[10]=(1-(f+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),l=vs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),vi.copy(this);const c=1/a,u=1/o,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,t.setFromRotationMatrix(vi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=Fi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Fi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Wa)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Fi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),h=-(n+r)/(n-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Fi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Wa)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new G,vi=new Lt,L_=new G(0,0,0),N_=new G(1,1,1),hr=new G,co=new G,$n=new G,sh=new Lt,ah=new sa;class Hi{constructor(e=0,t=0,n=0,r=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const oh=new G,xs=new sa,Xi=new Lt,uo=new G,ua=new G,O_=new G,B_=new sa,lh=new G(1,0,0),ch=new G(0,1,0),uh=new G(0,0,1),fh={type:"added"},z_={type:"removed"},Ss={type:"childadded",child:null},ql={type:"childremoved",child:null};class fn extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new G,t=new Hi,n=new sa,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Je}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ua,uo,this.up):Xi.lookAt(uo,ua,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Xi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z_),ql.child=e,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,O_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,B_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}fn.DEFAULT_UP=new G(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k_={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=w_(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Kl(a,s,e+1/3),this.g=Kl(a,s,e),this.b=Kl(a,s,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ft.workingToColorSpace(yn.copy(this),e),Math.round(lt(yn.r*255,0,255))*65536+Math.round(lt(yn.g*255,0,255))*256+Math.round(lt(yn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(yn.copy(this),t);const n=yn.r,r=yn.g,s=yn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Tt){ft.workingToColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,r=yn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(ho);const n=Hl(dr.h,ho.h,t),r=Hl(dr.s,ho.s,t),s=Hl(dr.l,ho.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new st;st.NAMES=tp;class df{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(e),this.density=t}clone(){return new df(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ru extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xi=new G,Yi=new G,Zl=new G,qi=new G,Ms=new G,Es=new G,hh=new G,jl=new G,Jl=new G,Ql=new G,ec=new It,tc=new It,nc=new It;class Ei{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xi.subVectors(e,t),r.cross(xi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xi.subVectors(r,t),Yi.subVectors(n,t),Zl.subVectors(e,t);const a=xi.dot(xi),o=xi.dot(Yi),l=xi.dot(Zl),c=Yi.dot(Yi),u=Yi.dot(Zl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(a,qi.y),l.addScaledVector(o,qi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ec,s.x),a.addScaledVector(tc,s.y),a.addScaledVector(nc,s.z),a}static isFrontFacing(e,t,n,r){return xi.subVectors(n,t),Yi.subVectors(e,t),xi.cross(Yi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),xi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ms.subVectors(r,n),Es.subVectors(s,n),jl.subVectors(e,n);const l=Ms.dot(jl),c=Es.dot(jl);if(l<=0&&c<=0)return t.copy(n);Jl.subVectors(e,r);const u=Ms.dot(Jl),d=Es.dot(Jl);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ms,a);Ql.subVectors(e,s);const h=Ms.dot(Ql),_=Es.dot(Ql);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Es,o);const p=u*_-h*d;if(p<=0&&d-u>=0&&h-_>=0)return hh.subVectors(s,r),o=(d-u)/(d-u+(h-_)),t.copy(r).addScaledVector(hh,o);const m=1/(p+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(Ms,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class io{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),mo.subVectors(this.max,fa),ys.subVectors(e.a,fa),Ts.subVectors(e.b,fa),bs.subVectors(e.c,fa),pr.subVectors(Ts,ys),mr.subVectors(bs,Ts),Or.subVectors(ys,bs);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Or.z,Or.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Or.z,0,-Or.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Or.y,Or.x,0];return!ic(t,ys,Ts,bs,mo)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,ys,Ts,bs,mo))?!1:(_o.crossVectors(pr,mr),t=[_o.x,_o.y,_o.z],ic(t,ys,Ts,bs,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new G,new G,new G,new G,new G,new G,new G,new G],Si=new G,po=new io,ys=new G,Ts=new G,bs=new G,pr=new G,mr=new G,Or=new G,fa=new G,mo=new G,_o=new G,Br=new G;function ic(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Br.fromArray(i,s);const o=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=t.dot(Br),u=n.dot(Br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wt=new G,go=new Ge;let G_=0;class si{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jf,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ca(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),r=zn(r,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jf&&(e.usage=this.usage),e}}class np extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ip extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}}const H_=new io,ha=new G,rc=new G;class ro{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):H_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ha,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(rc)),this.expandByPoint(ha.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V_=0;const ui=new Lt,sc=new fn,As=new G,Kn=new io,da=new io,an=new G;class Cn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?ip:np)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Kn.min,da.min),Kn.expandByPoint(an),an.addVectors(Kn.max,da.max),Kn.expandByPoint(an)):(Kn.expandByPoint(da.min),Kn.expandByPoint(da.max))}Kn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)an.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(an));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),an.add(As)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new G,l[x]=new G;const c=new G,u=new G,d=new G,f=new Ge,h=new Ge,_=new Ge,g=new G,p=new G;function m(x,y,U){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,U),f.fromBufferAttribute(s,x),h.fromBufferAttribute(s,y),_.fromBufferAttribute(s,U),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const C=1/(h.x*_.y-_.x*h.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(C),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(C),o[x].add(g),o[y].add(g),o[U].add(g),l[x].add(p),l[y].add(p),l[U].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,y=v.length;x<y;++x){const U=v[x],C=U.start,I=U.count;for(let z=C,H=C+I;z<H;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new G,S=new G,A=new G,w=new G;function b(x){A.fromBufferAttribute(r,x),w.copy(A);const y=o[x];E.copy(y),E.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(w,y);const C=S.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,C)}for(let x=0,y=v.length;x<y;++x){const U=v[x],C=U.start,I=U.count;for(let z=C,H=C+I;z<H;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[h++]}return new si(f,u,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let W_=0;class cr extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Bs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=kc,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==kc&&(n.blendDst=this.blendDst),this.blendEquation!==Kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ki=new G,ac=new G,vo=new G,_r=new G,oc=new G,xo=new G,lc=new G;class pf{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ac.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(ac);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vo),o=_r.dot(this.direction),l=-_r.dot(vo),c=_r.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ac).addScaledVector(vo,f),h}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const n=Ki.dot(this.direction),r=Ki.dot(Ki)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,r,s){oc.subVectors(t,e),xo.subVectors(n,e),lc.crossVectors(oc,xo);let a=this.direction.dot(lc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_r.subVectors(this.origin,e);const l=o*this.direction.dot(xo.crossVectors(_r,xo));if(l<0)return null;const c=o*this.direction.dot(oc.cross(_r));if(c<0||l+c>a)return null;const u=-o*_r.dot(lc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rp extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dh=new Lt,zr=new pf,So=new ro,ph=new G,Mo=new G,Eo=new G,yo=new G,cc=new G,To=new G,mh=new G,bo=new G;class bi extends fn{constructor(e=new Cn,t=new rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){To.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(cc.fromBufferAttribute(d,e),a?To.addScaledVector(cc,u):To.addScaledVector(cc.sub(t),u))}t.add(To)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(So.containsPoint(zr.origin)===!1&&(zr.intersectSphere(So,ph)===null||zr.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(dh.copy(s).invert(),zr.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],v=Math.max(p.start,h.start),E=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let S=v,A=E;S<A;S+=3){const w=o.getX(S),b=o.getX(S+1),x=o.getX(S+2);r=Ao(this,m,e,n,c,u,d,w,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const v=o.getX(p),E=o.getX(p+1),S=o.getX(p+2);r=Ao(this,a,e,n,c,u,d,v,E,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],v=Math.max(p.start,h.start),E=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let S=v,A=E;S<A;S+=3){const w=S,b=S+1,x=S+2;r=Ao(this,m,e,n,c,u,d,w,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const v=p,E=p+1,S=p+2;r=Ao(this,a,e,n,c,u,d,v,E,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function X_(i,e,t,n,r,s,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===ir,o),l===null)return null;bo.copy(o),bo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:i}}function Ao(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Mo),i.getVertexPosition(l,Eo),i.getVertexPosition(c,yo);const u=X_(i,e,t,n,Mo,Eo,yo,mh);if(u){const d=new G;Ei.getBarycoord(mh,Mo,Eo,yo,d),r&&(u.uv=Ei.getInterpolatedAttribute(r,o,l,c,d,new Ge)),s&&(u.uv1=Ei.getInterpolatedAttribute(s,o,l,c,d,new Ge)),a&&(u.normal=Ei.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};Ei.getNormal(Mo,Eo,yo,f.normal),u.face=f,u.barycoord=d}return u}class Y_ extends _n{constructor(e=null,t=1,n=1,r,s,a,o,l,c=pn,u=pn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uc=new G,q_=new G,$_=new Je;class Xr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=uc.subVectors(n,t).cross(q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(uc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$_.getNormalMatrix(e),r=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new ro,K_=new Ge(.5,.5),wo=new G;class mf{constructor(e=new Xr,t=new Xr,n=new Xr,r=new Xr,s=new Xr,a=new Xr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],g=s[9],p=s[10],m=s[11],v=s[12],E=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,h-u,m-_,A-v).normalize(),r[1].setComponents(c+a,h+u,m+_,A+v).normalize(),r[2].setComponents(c+o,h+d,m+g,A+E).normalize(),r[3].setComponents(c-o,h-d,m-g,A-E).normalize(),n)r[4].setComponents(l,f,p,S).normalize(),r[5].setComponents(c-l,h-f,m-p,A-S).normalize();else if(r[4].setComponents(c-l,h-f,m-p,A-S).normalize(),t===Fi)r[5].setComponents(c+l,h+f,m+p,A+S).normalize();else if(t===Wa)r[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const t=K_.distanceTo(e.center);return kr.radius=.7071067811865476+t,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sp extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pl=new G,ml=new G,_h=new Lt,pa=new pf,Ro=new ro,fc=new G,gh=new G;class Z_ extends fn{constructor(e=new Cn,t=new sp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)pl.fromBufferAttribute(t,r-1),ml.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new en(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;_h.copy(r).invert(),pa.copy(e.ray).applyMatrix4(_h);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=c){const m=u.getX(g),v=u.getX(g+1),E=Co(this,e,pa,l,m,v,g);E&&t.push(E)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(h),m=Co(this,e,pa,l,g,p,_-1);m&&t.push(m)}}else{const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=c){const m=Co(this,e,pa,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=Co(this,e,pa,l,_-1,h,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Co(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(pl.fromBufferAttribute(o,r),ml.fromBufferAttribute(o,s),t.distanceSqToSegment(pl,ml,fc,gh)>n)return;fc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fc);if(!(c<e.near||c>e.far))return{distance:c,point:gh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const vh=new G,xh=new G;class j_ extends Z_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)vh.fromBufferAttribute(t,r),xh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+vh.distanceTo(xh);e.setAttribute("lineDistance",new en(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ap extends cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sh=new Lt,Cu=new pf,Po=new ro,Do=new G;class J_ extends fn{constructor(e=new Cn,t=new ap){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;Sh.copy(r).invert(),Cu.copy(e.ray).applyMatrix4(Sh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=f,g=h;_<g;_++){const p=c.getX(_);Do.fromBufferAttribute(d,p),Mh(Do,p,l,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=f,g=h;_<g;_++)Do.fromBufferAttribute(d,_),Mh(Do,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Mh(i,e,t,n,r,s,a){const o=Cu.distanceSqToPoint(i);if(o<t){const l=new G;Cu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class op extends _n{constructor(e=[],t=ls,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zs extends _n{constructor(e,t,n=Ti,r,s,a,o=pn,l=pn,c,u=sr,d=1){if(u!==sr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Q_ extends Zs{constructor(e,t=Ti,n=ls,r,s,a=pn,o=pn,l,c=sr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lp extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class so extends Cn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(d,2));function _(g,p,m,v,E,S,A,w,b,x,y){const U=S/b,C=A/x,I=S/2,z=A/2,H=w/2,B=b+1,k=x+1;let N=0,J=0;const Q=new G;for(let P=0;P<k;P++){const le=P*C-z;for(let ce=0;ce<B;ce++){const Be=ce*U-I;Q[g]=Be*v,Q[p]=le*E,Q[m]=H,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[p]=0,Q[m]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ce/b),d.push(1-P/x),N+=1}}for(let P=0;P<x;P++)for(let le=0;le<b;le++){const ce=f+le+B*P,Be=f+le+B*(P+1),He=f+(le+1)+B*(P+1),qe=f+(le+1)+B*P;l.push(ce,Be,qe),l.push(Be,He,qe),J+=6}o.addGroup(h,J,y),h+=J,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rl extends Cn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new en(s,3)),this.setAttribute("normal",new en(s.slice(),3)),this.setAttribute("uv",new en(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new G,S=new G,A=new G;for(let w=0;w<t.length;w+=3)h(t[w+0],E),h(t[w+1],S),h(t[w+2],A),l(E,S,A,v)}function l(v,E,S,A){const w=A+1,b=[];for(let x=0;x<=w;x++){b[x]=[];const y=v.clone().lerp(S,x/w),U=E.clone().lerp(S,x/w),C=w-x;for(let I=0;I<=C;I++)I===0&&x===w?b[x][I]=y:b[x][I]=y.clone().lerp(U,I/C)}for(let x=0;x<w;x++)for(let y=0;y<2*(w-x)-1;y++){const U=Math.floor(y/2);y%2===0?(f(b[x][U+1]),f(b[x+1][U]),f(b[x][U])):(f(b[x][U+1]),f(b[x+1][U+1]),f(b[x+1][U]))}}function c(v){const E=new G;for(let S=0;S<s.length;S+=3)E.x=s[S+0],E.y=s[S+1],E.z=s[S+2],E.normalize().multiplyScalar(v),s[S+0]=E.x,s[S+1]=E.y,s[S+2]=E.z}function u(){const v=new G;for(let E=0;E<s.length;E+=3){v.x=s[E+0],v.y=s[E+1],v.z=s[E+2];const S=p(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;a.push(S,1-A)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){const E=a[v+0],S=a[v+2],A=a[v+4],w=Math.max(E,S,A),b=Math.min(E,S,A);w>.9&&b<.1&&(E<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function h(v,E){const S=v*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function _(){const v=new G,E=new G,S=new G,A=new G,w=new Ge,b=new Ge,x=new Ge;for(let y=0,U=0;y<s.length;y+=9,U+=6){v.set(s[y+0],s[y+1],s[y+2]),E.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),w.set(a[U+0],a[U+1]),b.set(a[U+2],a[U+3]),x.set(a[U+4],a[U+5]),A.copy(v).add(E).add(S).divideScalar(3);const C=p(A);g(w,U+0,v,C),g(b,U+2,E,C),g(x,U+4,S,C)}}function g(v,E,S,A){A<0&&v.x===1&&(a[E]=v.x-1),S.x===0&&S.z===0&&(a[E]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.vertices,e.indices,e.radius,e.detail)}}class _f extends Rl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _f(e.radius,e.detail)}}class gf extends Rl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gf(e.radius,e.detail)}}class Cl extends Cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const v=m*f-a;for(let E=0;E<c;E++){const S=E*d-s;_.push(S,-v,0),g.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const E=v+c*m,S=v+c*(m+1),A=v+1+c*(m+1),w=v+1+c*m;h.push(E,S,w),h.push(S,A,w)}this.setIndex(h),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(g,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class vf extends Cn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],d=[],f=new G,h=new G,_=new G;for(let g=0;g<=n;g++){const p=a+g/n*o;for(let m=0;m<=r;m++){const v=m/r*s;h.x=(e+t*Math.cos(p))*Math.cos(v),h.y=(e+t*Math.cos(p))*Math.sin(v),h.z=t*Math.sin(p),c.push(h.x,h.y,h.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),_.subVectors(h,f).normalize(),u.push(_.x,_.y,_.z),d.push(m/r),d.push(g/n)}}for(let g=1;g<=n;g++)for(let p=1;p<=r;p++){const m=(r+1)*g+p-1,v=(r+1)*(g-1)+p-1,E=(r+1)*(g-1)+p,S=(r+1)*g+p;l.push(m,v,S),l.push(v,E,S)}this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function js(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Un(i){const e={};for(let t=0;t<i.length;t++){const n=js(i[t]);for(const r in n)e[r]=n[r]}return e}function eg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const tg={clone:js,merge:Un};var ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ng,this.fragmentShader=ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rg extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hc extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sg extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=to,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ag extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xf extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const dc=new Lt,Eh=new G,yh=new G;class up{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yh),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Wa||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uo=new G,Io=new sa,Ri=new G;class fp extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Io,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Io,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Uo,Io,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Io,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new G,Th=new Ge,bh=new Ge;class Gn extends fp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wu*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,Th,bh),t.subVectors(bh,Th)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class og extends up{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class lg extends xf{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new og}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pl extends fp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cg extends up{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends xf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new cg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fg extends xf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,Rs=1;class hg extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(ws,Rs,e,t);r.layers=this.layers,this.add(r);const s=new Gn(ws,Rs,e,t);s.layers=this.layers,this.add(s);const a=new Gn(ws,Rs,e,t);a.layers=this.layers,this.add(a);const o=new Gn(ws,Rs,e,t);o.layers=this.layers,this.add(o);const l=new Gn(ws,Rs,e,t);l.layers=this.layers,this.add(l);const c=new Gn(ws,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class dg extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _t{constructor(e){this.value=e}clone(){return new _t(this.value.clone===void 0?this.value:this.value.clone())}}class pg extends j_{constructor(e=10,t=10,n=4473924,r=8947848){n=new st(n),r=new st(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,h=0,_=-o;f<=t;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=f===s?n:r;g.toArray(c,h),h+=3,g.toArray(c,h),h+=3,g.toArray(c,h),h+=3,g.toArray(c,h),h+=3}const u=new Cn;u.setAttribute("position",new en(l,3)),u.setAttribute("color",new en(c,3));const d=new sp({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ah(i,e,t,n){const r=mg(n);switch(t){case $d:return i*e;case Zd:return i*e/r.components*r.byteLength;case of:return i*e/r.components*r.byteLength;case Ks:return i*e*2/r.components*r.byteLength;case lf:return i*e*2/r.components*r.byteLength;case Kd:return i*e*3/r.components*r.byteLength;case yi:return i*e*4/r.components*r.byteLength;case cf:return i*e*4/r.components*r.byteLength;case Zo:case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Jc:return Math.max(i,16)*Math.max(e,8)/4;case Kc:case jc:return Math.max(i,8)*Math.max(e,8)/2;case Qc:case eu:case nu:case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tu:case ru:case su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case mu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Su:case Mu:case Eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yu:case Tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bu:case Au:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(i){switch(i){case qt:case Wd:return{byteLength:1,components:1};case Va:case Xd:case rr:return{byteLength:2,components:1};case sf:case af:return{byteLength:2,components:4};case Ti:case rf:case Ni:return{byteLength:4,components:1};case Yd:case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);function hp(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _g(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],g=d[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const g=d[h];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:gg,alphahash_pars_fragment:vg,alphamap_fragment:xg,alphamap_pars_fragment:Sg,alphatest_fragment:Mg,alphatest_pars_fragment:Eg,aomap_fragment:yg,aomap_pars_fragment:Tg,batching_pars_vertex:bg,batching_vertex:Ag,begin_vertex:wg,beginnormal_vertex:Rg,bsdfs:Cg,iridescence_fragment:Pg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Ng,color_fragment:Fg,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:zg,common:kg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:Yg,colorspace_fragment:qg,colorspace_pars_fragment:$g,envmap_fragment:Kg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:jg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:c0,envmap_vertex:Qg,fog_vertex:e0,fog_pars_vertex:t0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:s0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:f0,lights_phong_fragment:h0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:_0,lights_fragment_maps:g0,lights_fragment_end:v0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:E0,map_fragment:y0,map_pars_fragment:T0,map_particle_fragment:b0,map_particle_pars_fragment:A0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:P0,morphnormal_vertex:D0,morphtarget_pars_vertex:U0,morphtarget_vertex:I0,normal_fragment_begin:L0,normal_fragment_maps:N0,normal_pars_fragment:F0,normal_pars_vertex:O0,normal_vertex:B0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:V0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:Y0,project_vertex:q0,dithering_fragment:$0,dithering_pars_fragment:K0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:ev,shadowmask_pars_fragment:tv,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:rv,skinnormal_vertex:sv,specularmap_fragment:av,specularmap_pars_fragment:ov,tonemapping_fragment:lv,tonemapping_pars_fragment:cv,transmission_fragment:uv,transmission_pars_fragment:fv,uv_pars_fragment:hv,uv_pars_vertex:dv,uv_vertex:pv,worldpos_vertex:mv,background_vert:_v,background_frag:gv,backgroundCube_vert:vv,backgroundCube_frag:xv,cube_vert:Sv,cube_frag:Mv,depth_vert:Ev,depth_frag:yv,distance_vert:Tv,distance_frag:bv,equirect_vert:Av,equirect_frag:wv,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Pv,meshbasic_frag:Dv,meshlambert_vert:Uv,meshlambert_frag:Iv,meshmatcap_vert:Lv,meshmatcap_frag:Nv,meshnormal_vert:Fv,meshnormal_frag:Ov,meshphong_vert:Bv,meshphong_frag:zv,meshphysical_vert:kv,meshphysical_frag:Gv,meshtoon_vert:Hv,meshtoon_frag:Vv,points_vert:Wv,points_frag:Xv,shadow_vert:Yv,shadow_frag:qv,sprite_vert:$v,sprite_frag:Kv},_e={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ui={basic:{uniforms:Un([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Un([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Un([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Un([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Un([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Un([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Un([_e.points,_e.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Un([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Un([_e.common,_e.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Un([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Un([_e.sprite,_e.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Un([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Un([_e.lights,_e.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ui.physical={uniforms:Un([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Lo={r:0,b:0,g:0},Gr=new Hi,Zv=new Lt;function jv(i,e,t,n,r,s){const a=new st(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function h(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const S=v.backgroundBlurriness>0;E=e.get(E,S)}return E}function _(v){let E=!1;const S=h(v);S===null?p(a,o):S&&S.isColor&&(p(S,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,E){const S=h(E);S&&(S.isCubeTexture||S.mapping===wl)?(c===void 0&&(c=new bi(new so(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:js(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Gr.copy(E.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(Gr)),c.material.toneMapped=ft.getTransfer(S.colorSpace)!==Mt,(u!==S||d!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new bi(new Cl(2,2),new vn({name:"BackgroundMaterial",uniforms:js(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ft.getTransfer(S.colorSpace)!==Mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(Lo,cp(i)),t.buffers.color.setClear(Lo.r,Lo.g,Lo.b,E,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:_,addToRenderList:g,dispose:m}}function Jv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(C,I,z,H,B){let k=!1;const N=d(C,H,z,I);s!==N&&(s=N,c(s.object)),k=h(C,H,z,B),k&&_(C,H,z,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(C,I,z,H),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function d(C,I,z,H){const B=H.wireframe===!0;let k=n[I.id];k===void 0&&(k={},n[I.id]=k);const N=C.isInstancedMesh===!0?C.id:0;let J=k[N];J===void 0&&(J={},k[N]=J);let Q=J[z.id];Q===void 0&&(Q={},J[z.id]=Q);let P=Q[B];return P===void 0&&(P=f(l()),Q[B]=P),P}function f(C){const I=[],z=[],H=[];for(let B=0;B<t;B++)I[B]=0,z[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:H,object:C,attributes:{},index:null}}function h(C,I,z,H){const B=s.attributes,k=I.attributes;let N=0;const J=z.getAttributes();for(const Q in J)if(J[Q].location>=0){const le=B[Q];let ce=k[Q];if(ce===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),le===void 0||le.attribute!==ce||ce&&le.data!==ce.data)return!0;N++}return s.attributesNum!==N||s.index!==H}function _(C,I,z,H){const B={},k=I.attributes;let N=0;const J=z.getAttributes();for(const Q in J)if(J[Q].location>=0){let le=k[Q];le===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const ce={};ce.attribute=le,le&&le.data&&(ce.data=le.data),B[Q]=ce,N++}s.attributes=B,s.attributesNum=N,s.index=H}function g(){const C=s.newAttributes;for(let I=0,z=C.length;I<z;I++)C[I]=0}function p(C){m(C,0)}function m(C,I){const z=s.newAttributes,H=s.enabledAttributes,B=s.attributeDivisors;z[C]=1,H[C]===0&&(i.enableVertexAttribArray(C),H[C]=1),B[C]!==I&&(i.vertexAttribDivisor(C,I),B[C]=I)}function v(){const C=s.newAttributes,I=s.enabledAttributes;for(let z=0,H=I.length;z<H;z++)I[z]!==C[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function E(C,I,z,H,B,k,N){N===!0?i.vertexAttribIPointer(C,I,z,B,k):i.vertexAttribPointer(C,I,z,H,B,k)}function S(C,I,z,H){g();const B=H.attributes,k=z.getAttributes(),N=I.defaultAttributeValues;for(const J in k){const Q=k[J];if(Q.location>=0){let P=B[J];if(P===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),P!==void 0){const le=P.normalized,ce=P.itemSize,Be=e.get(P);if(Be===void 0)continue;const He=Be.buffer,qe=Be.type,K=Be.bytesPerElement,ee=qe===i.INT||qe===i.UNSIGNED_INT||P.gpuType===rf;if(P.isInterleavedBufferAttribute){const re=P.data,Ue=re.stride,Ie=P.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<Q.locationSize;Re++)m(Q.location+Re,re.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<Q.locationSize;Re++)p(Q.location+Re);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Re=0;Re<Q.locationSize;Re++)E(Q.location+Re,ce/Q.locationSize,qe,le,Ue*K,(Ie+ce/Q.locationSize*Re)*K,ee)}else{if(P.isInstancedBufferAttribute){for(let re=0;re<Q.locationSize;re++)m(Q.location+re,P.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let re=0;re<Q.locationSize;re++)p(Q.location+re);i.bindBuffer(i.ARRAY_BUFFER,He);for(let re=0;re<Q.locationSize;re++)E(Q.location+re,ce/Q.locationSize,qe,le,ce*K,ce/Q.locationSize*re*K,ee)}}else if(N!==void 0){const le=N[J];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Q.location,le);break;case 3:i.vertexAttrib3fv(Q.location,le);break;case 4:i.vertexAttrib4fv(Q.location,le);break;default:i.vertexAttrib1fv(Q.location,le)}}}}v()}function A(){y();for(const C in n){const I=n[C];for(const z in I){const H=I[z];for(const B in H){const k=H[B];for(const N in k)u(k[N].object),delete k[N];delete H[B]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const I=n[C.id];for(const z in I){const H=I[z];for(const B in H){const k=H[B];for(const N in k)u(k[N].object),delete k[N];delete H[B]}}delete n[C.id]}function b(C){for(const I in n){const z=n[I];for(const H in z){const B=z[H];if(B[C.id]===void 0)continue;const k=B[C.id];for(const N in k)u(k[N].object),delete k[N];delete B[C.id]}}}function x(C){for(const I in n){const z=n[I],H=C.isInstancedMesh===!0?C.id:0,B=z[H];if(B!==void 0){for(const k in B){const N=B[k];for(const J in N)u(N[J].object),delete N[J];delete B[k]}delete z[H],Object.keys(z).length===0&&delete n[I]}}}function y(){U(),a=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function Qv(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ex(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==yi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const x=b===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==qt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ni&&!x)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:w}}function tx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Xr,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||r;return r=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,E=v*4;let S=m.clippingState||null;l.value=S,S=u(_,f,E,h);for(let A=0;A!==E;++A)S[A]=t[A];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=h+g*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,S=h;E!==g;++E,S+=4)a.copy(d[E]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const Mr=4,wh=[.125,.215,.35,.446,.526,.582],Zr=20,nx=256,ma=new Pl,Rh=new st;let pc=null,mc=0,_c=0,gc=!1;const ix=new G;class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=ix}=s;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,_c),this._renderer.xr.enabled=gc,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:rr,format:yi,colorSpace:Pr,depthBuffer:!1},r=Ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rx(s)),this._blurMaterial=ax(s,e,t),this._ggxMaterial=sx(s,e,t)}return r}_compileMaterial(e){const t=new bi(new Cn,e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,r,s){const l=new Gn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Rh),d.toneMapping=ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new so,new rp({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,m=!0):(p.color.copy(Rh),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const A=this._cubeSize;Cs(r,S*A,E>2?A:0,A,A),d.setRenderTarget(r),m&&d.render(g,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ls||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-Mr?n-_+Mr:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,Cs(s,p,m,3*g,2*g),r.setRenderTarget(s),r.render(o,ma),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Cs(e,p,m,3*g,2*g),r.setRenderTarget(e),r.render(o,ma)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Zr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Zr;p>Zr&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zr}`);const m=[];let v=0;for(let b=0;b<Zr;++b){const x=b/g,y=Math.exp(-x*x/2);m.push(y),b===0?v+=y:b<p&&(v+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;const S=this._sizeLods[r],A=3*S*(r>E-Mr?r-E+Mr:0),w=4*(this._cubeSize-S);Cs(t,A,w,3*S,2*S),l.setRenderTarget(t),l.render(d,ma)}}function rx(i){const e=[],t=[],n=[];let r=i;const s=i-Mr+1+wh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Mr?l=wh[a-i+Mr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,g=3,p=2,m=1,v=new Float32Array(g*_*h),E=new Float32Array(p*_*h),S=new Float32Array(m*_*h);for(let w=0;w<h;w++){const b=w%3*2/3-1,x=w>2?0:-1,y=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];v.set(y,g*_*w),E.set(f,p*_*w);const U=[w,w,w,w,w,w];S.set(U,m*_*w)}const A=new Cn;A.setAttribute("position",new si(v,g)),A.setAttribute("uv",new si(E,p)),A.setAttribute("faceIndex",new si(S,m)),n.push(new bi(A,null)),r>Mr&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ph(i,e,t){const n=new un(i,e,t);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function sx(i,e,t){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ax(i,e,t){const n=new Float32Array(Zr),r=new G(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Dh(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Uh(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class dp extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new op(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new so(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Bn});s.uniforms.tEquirect.value=t;const a=new bi(r,s),o=t.minFilter;return t.minFilter===jr&&(t.minFilter=$t),new hg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function ox(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Bl||h===zl)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new dp(_.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",c),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,_=h===Bl||h===zl,g=h===ls||h===qs;if(_||g){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Ch(i)),p=_?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const v=f.image;return _&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new Ch(i)),p=_?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===Bl?f.mapping=ls:h===zl&&(f.mapping=qs),f}function l(f){let h=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function lx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&dl("WebGLRenderer: "+n+" extension not supported."),r}}}function cx(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(h!==null){const v=h.array;g=h.version;for(let E=0,S=v.length;E<S;E+=3){const A=v[E+0],w=v[E+1],b=v[E+2];f.push(A,w,w,b,b,A)}}else{const v=_.array;g=_.version;for(let E=0,S=v.length/3-1;E<S;E+=3){const A=E+0,w=E+1,b=E+2;f.push(A,w,w,b,b,A)}}const p=new(_.count>=65535?ip:np)(f,1);p.version=g;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ux(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,_){_!==0&&(i.drawElementsInstanced(n,h,s,f*a,_),t.update(h,n,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=h[m];t.update(p,n,1)}function d(f,h,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,h[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,g,0,_);let m=0;for(let v=0;v<_;v++)m+=h[v]*g[v];t.update(m,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hx(i,e,t){const n=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let U=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",U)};var h=U;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*w*4*d),x=new Qd(b,A,w,d);x.type=Ni,x.needsUpdate=!0;const y=S*4;for(let C=0;C<d;C++){const I=m[C],z=v[C],H=E[C],B=A*w*4*C;for(let k=0;k<I.count;k++){const N=k*y;_===!0&&(r.fromBufferAttribute(I,k),b[B+N+0]=r.x,b[B+N+1]=r.y,b[B+N+2]=r.z,b[B+N+3]=0),g===!0&&(r.fromBufferAttribute(z,k),b[B+N+4]=r.x,b[B+N+5]=r.y,b[B+N+6]=r.z,b[B+N+7]=0),p===!0&&(r.fromBufferAttribute(H,k),b[B+N+8]=r.x,b[B+N+9]=r.y,b[B+N+10]=r.z,b[B+N+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new Ge(A,w)},n.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function dx(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const px={[Fd]:"LINEAR_TONE_MAPPING",[Od]:"REINHARD_TONE_MAPPING",[Bd]:"CINEON_TONE_MAPPING",[zd]:"ACES_FILMIC_TONE_MAPPING",[Gd]:"AGX_TONE_MAPPING",[Hd]:"NEUTRAL_TONE_MAPPING",[kd]:"CUSTOM_TONE_MAPPING"};function mx(i,e,t,n,r){const s=new un(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new un(e,t,{type:rr,depthBuffer:!1,stencilBuffer:!1}),o=new Cn;o.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new en([0,2,0,0,2,0],2));const l=new rg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new bi(o,l),u=new Pl(-1,1,1,-1,0,1);let d=null,f=null,h=!1,_,g=null,p=[],m=!1;this.setSize=function(v,E){s.setSize(v,E),a.setSize(v,E);for(let S=0;S<p.length;S++){const A=p[S];A.setSize&&A.setSize(v,E)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const E=s.width,S=s.height;for(let A=0;A<p.length;A++){const w=p[A];w.setSize&&w.setSize(E,S)}},this.begin=function(v,E){if(h||v.toneMapping===ki&&p.length===0)return!1;if(g=E,E!==null){const S=E.width,A=E.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return m===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=ki,!0},this.hasRenderPass=function(){return m},this.end=function(v,E){v.toneMapping=_,h=!0;let S=s,A=a;for(let w=0;w<p.length;w++){const b=p[w];if(b.enabled!==!1&&(b.render(v,A,S,E),b.needsSwap!==!1)){const x=S;S=A,A=x}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,l.defines={},ft.getTransfer(d)===Mt&&(l.defines.SRGB_TRANSFER="");const w=px[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(c,u),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const pp=new _n,Pu=new Zs(1,1),mp=new Qd,_p=new I_,gp=new op,Ih=[],Lh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function aa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ih[r];if(s===void 0&&(s=new Float32Array(r),Ih[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ul(i,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _x(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function Sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Oh.set(n),i.uniformMatrix2fv(this.addr,!1,Oh),nn(t,n)}}function Mx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),nn(t,n)}}function Ex(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),nn(t,n)}}function yx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Dx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Pu.compareFunction=t.isReversedDepthBuffer()?ff:uf,s=Pu):s=pp,t.setTexture2D(e||s,r)}function Ux(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_p,r)}function Ix(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gp,r)}function Lx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||mp,r)}function Nx(i){switch(i){case 5126:return _x;case 35664:return gx;case 35665:return vx;case 35666:return xx;case 35674:return Sx;case 35675:return Mx;case 35676:return Ex;case 5124:case 35670:return yx;case 35667:case 35671:return Tx;case 35668:case 35672:return bx;case 35669:case 35673:return Ax;case 5125:return wx;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Lx}}function Fx(i,e){i.uniform1fv(this.addr,e)}function Ox(i,e){const t=aa(e,this.size,2);i.uniform2fv(this.addr,t)}function Bx(i,e){const t=aa(e,this.size,3);i.uniform3fv(this.addr,t)}function zx(i,e){const t=aa(e,this.size,4);i.uniform4fv(this.addr,t)}function kx(i,e){const t=aa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gx(i,e){const t=aa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hx(i,e){const t=aa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vx(i,e){i.uniform1iv(this.addr,e)}function Wx(i,e){i.uniform2iv(this.addr,e)}function Xx(i,e){i.uniform3iv(this.addr,e)}function Yx(i,e){i.uniform4iv(this.addr,e)}function qx(i,e){i.uniform1uiv(this.addr,e)}function $x(i,e){i.uniform2uiv(this.addr,e)}function Kx(i,e){i.uniform3uiv(this.addr,e)}function Zx(i,e){i.uniform4uiv(this.addr,e)}function jx(i,e,t){const n=this.cache,r=e.length,s=Ul(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Pu:a=pp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Jx(i,e,t){const n=this.cache,r=e.length,s=Ul(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_p,s[a])}function Qx(i,e,t){const n=this.cache,r=e.length,s=Ul(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||gp,s[a])}function eS(i,e,t){const n=this.cache,r=e.length,s=Ul(t,r);tn(n,s)||(i.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||mp,s[a])}function tS(i){switch(i){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return kx;case 35675:return Gx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return Yx;case 5125:return qx;case 36294:return $x;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return eS}}class nS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nx(t.type)}}class iS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tS(t.type)}}class rS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function Bh(i,e){i.seq.push(e),i.map[e.id]=e}function sS(i,e,t){const n=i.name,r=n.length;for(vc.lastIndex=0;;){const s=vc.exec(n),a=vc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Bh(t,c===void 0?new nS(o,i,e):new iS(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new rS(o),Bh(t,d)),t=d}}}class el{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);sS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function zh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const aS=37297;let oS=0;function lS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const kh=new Je;function cS(i){ft._getMatrix(kh,ft.workingColorSpace,i);const e=`mat3( ${kh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case fl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+lS(i.getShaderSource(e),o)}else return s}function uS(i,e){const t=cS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const fS={[Fd]:"Linear",[Od]:"Reinhard",[Bd]:"Cineon",[zd]:"ACESFilmic",[Gd]:"AgX",[Hd]:"Neutral",[kd]:"Custom"};function hS(i,e){const t=fS[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const No=new G;function dS(){ft.getLuminanceCoefficients(No);const i=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function mS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _S(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ma(i){return i!==""}function Hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(i){return i.replace(gS,xS)}const vS=new Map;function xS(i,e){let t=Qe[e];if(t===void 0){const n=vS.get(e);if(n!==void 0)t=Qe[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Du(t)}const SS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(i){return i.replace(SS,MS)}function MS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ES={[Ko]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function yS(i){return ES[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TS={[ls]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[wl]:"ENVMAP_TYPE_CUBE_UV"};function bS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":TS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const AS={[qs]:"ENVMAP_MODE_REFRACTION"};function wS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":AS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RS={[Nd]:"ENVMAP_BLENDING_MULTIPLY",[d_]:"ENVMAP_BLENDING_MIX",[p_]:"ENVMAP_BLENDING_ADD"};function CS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":RS[i.combine]||"ENVMAP_BLENDING_NONE"}function PS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function DS(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yS(t),c=bS(t),u=wS(t),d=CS(t),f=PS(t),h=pS(t),_=mS(s),g=r.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),m.length>0&&(m+=`
`)):(p=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),m=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ki?hS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,uS("linearToOutputTexel",t.outputColorSpace),dS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Du(a),a=Hh(a,t),a=Vh(a,t),o=Du(o),o=Hh(o,t),o=Vh(o,t),a=Wh(a),o=Wh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=v+p+a,S=v+m+o,A=zh(r,r.VERTEX_SHADER,E),w=zh(r,r.FRAGMENT_SHADER,S);r.attachShader(g,A),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(C){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(g)||"",z=r.getShaderInfoLog(A)||"",H=r.getShaderInfoLog(w)||"",B=I.trim(),k=z.trim(),N=H.trim();let J=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,w);else{const P=Gh(r,A,"vertex"),le=Gh(r,w,"fragment");pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+P+`
`+le)}else B!==""?Ye("WebGLProgram: Program Info Log:",B):(k===""||N==="")&&(Q=!1);Q&&(C.diagnostics={runnable:J,programLog:B,vertexShader:{log:k,prefix:p},fragmentShader:{log:N,prefix:m}})}r.deleteShader(A),r.deleteShader(w),x=new el(r,g),y=_S(r,g)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(g,aS)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let US=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new LS(e),t.set(e,n)),n}}class LS{constructor(e){this.id=US++,this.code=e,this.usedTimes=0}}function NS(i,e,t,n,r,s){const a=new ep,o=new IS,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,y,U,C,I){const z=C.fog,H=I.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=e.get(x.envMap||B,k),J=N&&N.mapping===wl?N.image.height:null,Q=h[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const P=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,le=P!==void 0?P.length:0;let ce=0;H.morphAttributes.position!==void 0&&(ce=1),H.morphAttributes.normal!==void 0&&(ce=2),H.morphAttributes.color!==void 0&&(ce=3);let Be,He,qe,K;if(Q){const ve=Ui[Q];Be=ve.vertexShader,He=ve.fragmentShader}else Be=x.vertexShader,He=x.fragmentShader,o.update(x),qe=o.getVertexShaderID(x),K=o.getFragmentShaderID(x);const ee=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,Ie=I.isBatchedMesh===!0,Re=!!x.map,ut=!!x.matcap,ye=!!N,ze=!!x.aoMap,Ke=!!x.lightMap,Oe=!!x.bumpMap,X=!!x.normalMap,L=!!x.displacementMap,gt=!!x.emissiveMap,et=!!x.metalnessMap,ke=!!x.roughnessMap,xe=x.anisotropy>0,R=x.clearcoat>0,M=x.dispersion>0,F=x.iridescence>0,Z=x.sheen>0,j=x.transmission>0,q=xe&&!!x.anisotropyMap,ge=R&&!!x.clearcoatMap,ae=R&&!!x.clearcoatNormalMap,Ce=R&&!!x.clearcoatRoughnessMap,Se=F&&!!x.iridescenceMap,ne=F&&!!x.iridescenceThicknessMap,se=Z&&!!x.sheenColorMap,Me=Z&&!!x.sheenRoughnessMap,Te=!!x.specularMap,he=!!x.specularColorMap,Ve=!!x.specularIntensityMap,D=j&&!!x.transmissionMap,oe=j&&!!x.thicknessMap,ie=!!x.gradientMap,de=!!x.alphaMap,te=x.alphaTest>0,$=!!x.alphaHash,Ee=!!x.extensions;let Ne=ki;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const ht={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:He,defines:x.defines,customVertexShaderID:qe,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Pr,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:ut,envMap:ye,envMapMode:ye&&N.mapping,envMapCubeUVHeight:J,aoMap:ze,lightMap:Ke,bumpMap:Oe,normalMap:X,displacementMap:L,emissiveMap:gt,normalMapObjectSpace:X&&x.normalMapType===__,normalMapTangentSpace:X&&x.normalMapType===jd,metalnessMap:et,roughnessMap:ke,anisotropy:xe,anisotropyMap:q,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ce,dispersion:M,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:ne,sheen:Z,sheenColorMap:se,sheenRoughnessMap:Me,specularMap:Te,specularColorMap:he,specularIntensityMap:Ve,transmission:j,transmissionMap:D,thicknessMap:oe,gradientMap:ie,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:te,alphaHash:$,combine:x.combine,mapUv:Re&&_(x.map.channel),aoMapUv:ze&&_(x.aoMap.channel),lightMapUv:Ke&&_(x.lightMap.channel),bumpMapUv:Oe&&_(x.bumpMap.channel),normalMapUv:X&&_(x.normalMap.channel),displacementMapUv:L&&_(x.displacementMap.channel),emissiveMapUv:gt&&_(x.emissiveMap.channel),metalnessMapUv:et&&_(x.metalnessMap.channel),roughnessMapUv:ke&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:ge&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(x.sheenRoughnessMap.channel),specularMapUv:Te&&_(x.specularMap.channel),specularColorMapUv:he&&_(x.specularColorMap.channel),specularIntensityMapUv:Ve&&_(x.specularIntensityMap.channel),transmissionMapUv:D&&_(x.transmissionMap.channel),thicknessMapUv:oe&&_(x.thicknessMap.channel),alphaMapUv:de&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(X||xe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(Re||de),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&X===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:gt&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ei,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ee&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&x.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)y.push(U),y.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(m(y,x),v(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function m(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function E(x){const y=h[x.type];let U;if(y){const C=Ui[y];U=tg.clone(C.uniforms)}else U=x.uniforms;return U}function S(x,y){let U=u.get(y);return U!==void 0?++U.usedTimes:(U=new DS(i,y,x,r),c.push(U),u.set(y,U)),U}function A(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:b}}function FS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function OS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,g,p,m){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},i[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=_,v.materialVariant=a(f),v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=p,v.group=m),e++,v}function l(f,h,_,g,p,m){const v=o(f,h,_,g,p,m);_.transmission>0?n.push(v):_.transparent===!0?r.push(v):t.push(v)}function c(f,h,_,g,p,m){const v=o(f,h,_,g,p,m);_.transmission>0?n.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}function u(f,h){t.length>1&&t.sort(f||OS),n.length>1&&n.sort(h||Yh),r.length>1&&r.sort(h||Yh)}function d(){for(let f=e,h=i.length;f<h;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function BS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new qh,i.set(n,[a])):r>=s.length?(a=new qh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function zS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new st};break;case"SpotLight":t={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function kS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let GS=0;function HS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function VS(i){const e=new zS,t=kS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,s=new Lt,a=new Lt;function o(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,_=0,g=0,p=0,m=0,v=0,E=0,S=0,A=0,w=0,b=0;c.sort(HS);for(let y=0,U=c.length;y<U;y++){const C=c[y],I=C.color,z=C.intensity,H=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ks?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=I.r*z,d+=I.g*z,f+=I.b*z;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],z);b++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,J=t.get(C);J.shadowIntensity=N.intensity,J.shadowBias=N.bias,J.shadowNormalBias=N.normalBias,J.shadowRadius=N.radius,J.shadowMapSize=N.mapSize,n.directionalShadow[h]=J,n.directionalShadowMap[h]=B,n.directionalShadowMatrix[h]=C.shadow.matrix,v++}n.directional[h]=k,h++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(I).multiplyScalar(z),k.distance=H,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[g]=k;const N=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,N.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[g]=N.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=N.intensity,J.shadowBias=N.bias,J.shadowNormalBias=N.normalBias,J.shadowRadius=N.radius,J.shadowMapSize=N.mapSize,n.spotShadow[g]=J,n.spotShadowMap[g]=B,S++}g++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(I).multiplyScalar(z),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=k,p++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const N=C.shadow,J=t.get(C);J.shadowIntensity=N.intensity,J.shadowBias=N.bias,J.shadowNormalBias=N.normalBias,J.shadowRadius=N.radius,J.shadowMapSize=N.mapSize,J.shadowCameraNear=N.camera.near,J.shadowCameraFar=N.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=C.shadow.matrix,E++}n.point[_]=k,_++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(z),k.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==h||x.pointLength!==_||x.spotLength!==g||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==E||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==b)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,x.directionalLength=h,x.pointLength=_,x.spotLength=g,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=E,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=b,n.version=GS++)}function l(c,u){let d=0,f=0,h=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const E=c[m];if(E.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(E.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(E.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(E.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function $h(i){const e=new VS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function WS(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $h(i),e.set(r,[o])):s>=a.length?(o=new $h(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],$S=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Kh=new Lt,_a=new G,xc=new G;function KS(i,e,t){let n=new mf;const r=new Ge,s=new Ge,a=new It,o=new sg,l=new ag,c={},u=t.maxTextureSize,d={[ir]:cn,[cn]:ir,[ei]:ei},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:XS,fragmentShader:YS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new bi(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let m=this.type;this.render=function(w,b,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===$m&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ko);const y=i.getRenderTarget(),U=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Bn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=m!==this.type;z&&b.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=w.length;H<B;H++){const k=w[H],N=k.shadow;if(N===void 0){Ye("WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const J=N.getFrameExtents();r.multiply(J),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,N.mapSize.y=s.y));const Q=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Q,N.map===null||z===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Sa){if(k.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new un(r.x,r.y,{format:Ks,type:rr,minFilter:$t,magFilter:$t,generateMipmaps:!1}),N.map.texture.name=k.name+".shadowMap",N.map.depthTexture=new Zs(r.x,r.y,Ni),N.map.depthTexture.name=k.name+".shadowMapDepth",N.map.depthTexture.format=sr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=pn,N.map.depthTexture.magFilter=pn}else k.isPointLight?(N.map=new dp(r.x),N.map.depthTexture=new Q_(r.x,Ti)):(N.map=new un(r.x,r.y),N.map.depthTexture=new Zs(r.x,r.y,Ti)),N.map.depthTexture.name=k.name+".shadowMap",N.map.depthTexture.format=sr,this.type===Ko?(N.map.depthTexture.compareFunction=Q?ff:uf,N.map.depthTexture.minFilter=$t,N.map.depthTexture.magFilter=$t):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=pn,N.map.depthTexture.magFilter=pn);N.camera.updateProjectionMatrix()}const P=N.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<P;le++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,le),i.clear();else{le===0&&(i.setRenderTarget(N.map),i.clear());const ce=N.getViewport(le);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),I.viewport(a)}if(k.isPointLight){const ce=N.camera,Be=N.matrix,He=k.distance||ce.far;He!==ce.far&&(ce.far=He,ce.updateProjectionMatrix()),_a.setFromMatrixPosition(k.matrixWorld),ce.position.copy(_a),xc.copy(ce.position),xc.add(qS[le]),ce.up.copy($S[le]),ce.lookAt(xc),ce.updateMatrixWorld(),Be.makeTranslation(-_a.x,-_a.y,-_a.z),Kh.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Kh,ce.coordinateSystem,ce.reversedDepth)}else N.updateMatrices(k);n=N.getFrustum(),S(b,x,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===Sa&&v(N,x),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(y,U,C)};function v(w,b){const x=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new un(r.x,r.y,{format:Ks,type:rr})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,x,f,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,x,h,g,null)}function E(w,b,x,y){let U=null;const C=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)U=C;else if(U=x.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=U.uuid,z=b.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let B=H[z];B===void 0&&(B=U.clone(),H[z]=B,b.addEventListener("dispose",A)),U=B}if(U.visible=b.visible,U.wireframe=b.wireframe,y===Sa?U.side=b.shadowSide!==null?b.shadowSide:b.side:U.side=b.shadowSide!==null?b.shadowSide:d[b.side],U.alphaMap=b.alphaMap,U.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,U.map=b.map,U.clipShadows=b.clipShadows,U.clippingPlanes=b.clippingPlanes,U.clipIntersection=b.clipIntersection,U.displacementMap=b.displacementMap,U.displacementScale=b.displacementScale,U.displacementBias=b.displacementBias,U.wireframeLinewidth=b.wireframeLinewidth,U.linewidth=b.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=i.properties.get(U);I.light=x}return U}function S(w,b,x,y,U){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Sa)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const z=e.update(w),H=w.material;if(Array.isArray(H)){const B=z.groups;for(let k=0,N=B.length;k<N;k++){const J=B[k],Q=H[J.materialIndex];if(Q&&Q.visible){const P=E(w,Q,y,U);w.onBeforeShadow(i,w,b,x,z,P,J),i.renderBufferDirect(x,null,z,P,w,J),w.onAfterShadow(i,w,b,x,z,P,J)}}}else if(H.visible){const B=E(w,H,y,U);w.onBeforeShadow(i,w,b,x,z,B,null),i.renderBufferDirect(x,null,z,B,w,null),w.onAfterShadow(i,w,b,x,z,B,null)}}const I=w.children;for(let z=0,H=I.length;z<H;z++)S(I[z],b,x,y,U)}function A(w){w.target.removeEventListener("dispose",A);for(const x in c){const y=c[x],U=w.target.uuid;U in y&&(y[U].dispose(),delete y[U])}}}function ZS(i,e){function t(){let D=!1;const oe=new It;let ie=null;const de=new It(0,0,0,0);return{setMask:function(te){ie!==te&&!D&&(i.colorMask(te,te,te,te),ie=te)},setLocked:function(te){D=te},setClear:function(te,$,Ee,Ne,ht){ht===!0&&(te*=Ne,$*=Ne,Ee*=Ne),oe.set(te,$,Ee,Ne),de.equals(oe)===!1&&(i.clearColor(te,$,Ee,Ne),de.copy(oe))},reset:function(){D=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,ie=null,de=null,te=null;return{setReversed:function($){if(oe!==$){const Ee=e.get("EXT_clip_control");$?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),oe=$;const Ne=te;te=null,this.setClear(Ne)}},getReversed:function(){return oe},setTest:function($){$?ee(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function($){ie!==$&&!D&&(i.depthMask($),ie=$)},setFunc:function($){if(oe&&($=A_[$]),de!==$){switch($){case Gc:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case Hc:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case Vc:i.depthFunc(i.EQUAL);break;case Wc:i.depthFunc(i.GEQUAL);break;case Xc:i.depthFunc(i.GREATER);break;case Yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=$}},setLocked:function($){D=$},setClear:function($){te!==$&&(te=$,oe&&($=1-$),i.clearDepth($))},reset:function(){D=!1,ie=null,de=null,te=null,oe=!1}}}function r(){let D=!1,oe=null,ie=null,de=null,te=null,$=null,Ee=null,Ne=null,ht=null;return{setTest:function(ve){D||(ve?ee(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(ve){oe!==ve&&!D&&(i.stencilMask(ve),oe=ve)},setFunc:function(ve,Pe,je){(ie!==ve||de!==Pe||te!==je)&&(i.stencilFunc(ve,Pe,je),ie=ve,de=Pe,te=je)},setOp:function(ve,Pe,je){($!==ve||Ee!==Pe||Ne!==je)&&(i.stencilOp(ve,Pe,je),$=ve,Ee=Pe,Ne=je)},setLocked:function(ve){D=ve},setClear:function(ve){ht!==ve&&(i.clearStencil(ve),ht=ve)},reset:function(){D=!1,oe=null,ie=null,de=null,te=null,$=null,Ee=null,Ne=null,ht=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,g=!1,p=null,m=null,v=null,E=null,S=null,A=null,w=null,b=new st(0,0,0),x=0,y=!1,U=null,C=null,I=null,z=null,H=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(J)[1]),k=N>=1):J.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),k=N>=2);let Q=null,P={};const le=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),Be=new It().fromArray(le),He=new It().fromArray(ce);function qe(D,oe,ie,de){const te=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<ie;Ee++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(oe+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return $}const K={};K[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Ys),Oe(!1),X($f),ee(i.CULL_FACE),ze(Bn);function ee(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function re(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ue(D,oe){return d[D]!==oe?(i.bindFramebuffer(D,oe),d[D]=oe,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ie(D,oe){let ie=h,de=!1;if(D){ie=f.get(oe),ie===void 0&&(ie=[],f.set(oe,ie));const te=D.textures;if(ie.length!==te.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Ee=te.length;$<Ee;$++)ie[$]=i.COLOR_ATTACHMENT0+$;ie.length=te.length,de=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,de=!0);de&&i.drawBuffers(ie)}function Re(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const ut={[Kr]:i.FUNC_ADD,[Zm]:i.FUNC_SUBTRACT,[jm]:i.FUNC_REVERSE_SUBTRACT};ut[Jm]=i.MIN,ut[Qm]=i.MAX;const ye={[e_]:i.ZERO,[t_]:i.ONE,[n_]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[l_]:i.SRC_ALPHA_SATURATE,[a_]:i.DST_COLOR,[r_]:i.DST_ALPHA,[i_]:i.ONE_MINUS_SRC_COLOR,[kc]:i.ONE_MINUS_SRC_ALPHA,[o_]:i.ONE_MINUS_DST_COLOR,[s_]:i.ONE_MINUS_DST_ALPHA,[c_]:i.CONSTANT_COLOR,[u_]:i.ONE_MINUS_CONSTANT_COLOR,[f_]:i.CONSTANT_ALPHA,[h_]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(D,oe,ie,de,te,$,Ee,Ne,ht,ve){if(D===Bn){g===!0&&(re(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),D!==Km){if(D!==p||ve!==y){if((m!==Kr||S!==Kr)&&(i.blendEquation(i.FUNC_ADD),m=Kr,S=Kr),ve)switch(D){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.ONE,i.ONE);break;case Kf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",D);break}else switch(D){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kf:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zf:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",D);break}v=null,E=null,A=null,w=null,b.set(0,0,0),x=0,p=D,y=ve}return}te=te||oe,$=$||ie,Ee=Ee||de,(oe!==m||te!==S)&&(i.blendEquationSeparate(ut[oe],ut[te]),m=oe,S=te),(ie!==v||de!==E||$!==A||Ee!==w)&&(i.blendFuncSeparate(ye[ie],ye[de],ye[$],ye[Ee]),v=ie,E=de,A=$,w=Ee),(Ne.equals(b)===!1||ht!==x)&&(i.blendColor(Ne.r,Ne.g,Ne.b,ht),b.copy(Ne),x=ht),p=D,y=!1}function Ke(D,oe){D.side===ei?re(i.CULL_FACE):ee(i.CULL_FACE);let ie=D.side===cn;oe&&(ie=!ie),Oe(ie),D.blending===Bs&&D.transparent===!1?ze(Bn):ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function X(D){D!==Ym?(ee(i.CULL_FACE),D!==C&&(D===$f?i.cullFace(i.BACK):D===qm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),C=D}function L(D){D!==I&&(k&&i.lineWidth(D),I=D)}function gt(D,oe,ie){D?(ee(i.POLYGON_OFFSET_FILL),(z!==oe||H!==ie)&&(z=oe,H=ie,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,ie))):re(i.POLYGON_OFFSET_FILL)}function et(D){D?ee(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function ke(D){D===void 0&&(D=i.TEXTURE0+B-1),Q!==D&&(i.activeTexture(D),Q=D)}function xe(D,oe,ie){ie===void 0&&(Q===null?ie=i.TEXTURE0+B-1:ie=Q);let de=P[ie];de===void 0&&(de={type:void 0,texture:void 0},P[ie]=de),(de.type!==D||de.texture!==oe)&&(Q!==ie&&(i.activeTexture(ie),Q=ie),i.bindTexture(D,oe||K[D]),de.type=D,de.texture=oe)}function R(){const D=P[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function Z(){try{i.texSubImage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function j(){try{i.texSubImage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function ae(){try{i.texStorage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function Ce(){try{i.texStorage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function Se(){try{i.texImage2D(...arguments)}catch(D){pt("WebGLState:",D)}}function ne(){try{i.texImage3D(...arguments)}catch(D){pt("WebGLState:",D)}}function se(D){Be.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function Me(D){He.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function Te(D,oe){let ie=c.get(oe);ie===void 0&&(ie=new WeakMap,c.set(oe,ie));let de=ie.get(D);de===void 0&&(de=i.getUniformBlockIndex(oe,D.name),ie.set(D,de))}function he(D,oe){const de=c.get(oe).get(D);l.get(oe)!==de&&(i.uniformBlockBinding(oe,de,D.__bindingPointIndex),l.set(oe,de))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,P={},d={},f=new WeakMap,h=[],_=null,g=!1,p=null,m=null,v=null,E=null,S=null,A=null,w=null,b=new st(0,0,0),x=0,y=!1,U=null,C=null,I=null,z=null,H=null,Be.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:re,bindFramebuffer:Ue,drawBuffers:Ie,useProgram:Re,setBlending:ze,setMaterial:Ke,setFlipSided:Oe,setCullFace:X,setLineWidth:L,setPolygonOffset:gt,setScissorTest:et,activeTexture:ke,bindTexture:xe,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:Se,texImage3D:ne,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:Ce,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:se,viewport:Me,reset:Ve}}function jS(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return h?new OffscreenCanvas(R,M):hl("canvas")}function g(R,M,F){let Z=1;const j=xe(R);if((j.width>F||j.height>F)&&(Z=F/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Z*j.width),ge=Math.floor(Z*j.height);d===void 0&&(d=_(q,ge));const ae=M?_(q,ge):d;return ae.width=q,ae.height=ge,ae.getContext("2d").drawImage(R,0,0,q,ge),Ye("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+ge+")."),ae}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,M,F,Z,j=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),M===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),M===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),M===i.RGBA){const ge=j?fl:ft.getTransfer(Z);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=ge===Mt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(R,M){let F;return R?M===null||M===Ti||M===$s?F=i.DEPTH24_STENCIL8:M===Ni?F=i.DEPTH32F_STENCIL8:M===Va&&(F=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ti||M===$s?F=i.DEPTH_COMPONENT24:M===Ni?F=i.DEPTH_COMPONENT32F:M===Va&&(F=i.DEPTH_COMPONENT16),F}function A(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==$t?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),x(M),M.isVideoTexture&&u.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),U(M)}function x(R){const M=n.get(R);if(M.__webglInit===void 0)return;const F=R.source,Z=f.get(F);if(Z){const j=Z[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(R),Object.keys(Z).length===0&&f.delete(F)}n.remove(R)}function y(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const F=R.source,Z=f.get(F);delete Z[M.__cacheKey],a.memory.textures--}function U(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let j=0;j<M.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=R.textures;for(let Z=0,j=F.length;Z<j;Z++){const q=n.get(F[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[Z])}n.remove(R)}let C=0;function I(){C=0}function z(){const R=C;return R>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function H(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function B(R,M){const F=n.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const Z=R.image;if(Z===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,R,M);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function k(R,M){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){K(F,R,M);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function N(R,M){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){K(F,R,M);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function J(R,M){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){ee(F,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const Q={[qc]:i.REPEAT,[Qi]:i.CLAMP_TO_EDGE,[$c]:i.MIRRORED_REPEAT},P={[pn]:i.NEAREST,[m_]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[kl]:i.LINEAR_MIPMAP_NEAREST,[jr]:i.LINEAR_MIPMAP_LINEAR},le={[g_]:i.NEVER,[E_]:i.ALWAYS,[v_]:i.LESS,[uf]:i.LEQUAL,[x_]:i.EQUAL,[ff]:i.GEQUAL,[S_]:i.GREATER,[M_]:i.NOTEQUAL};function ce(R,M){if(M.type===Ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$t||M.magFilter===kl||M.magFilter===lo||M.magFilter===jr||M.minFilter===$t||M.minFilter===kl||M.minFilter===lo||M.minFilter===jr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,P[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==lo&&M.minFilter!==jr||M.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Be(R,M){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const Z=M.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const q=H(M);if(q!==R.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[q].usedTimes++;const ge=j[R.__cacheKey];ge!==void 0&&(j[R.__cacheKey].usedTimes--,ge.usedTimes===0&&y(M)),R.__cacheKey=q,R.__webglTexture=j[q].texture}return F}function He(R,M,F){return Math.floor(Math.floor(R/F)/M)}function qe(R,M,F,Z){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,F,Z,M.data);else{q.sort((ne,se)=>ne.start-se.start);let ge=0;for(let ne=1;ne<q.length;ne++){const se=q[ge],Me=q[ne],Te=se.start+se.count,he=He(Me.start,M.width,4),Ve=He(se.start,M.width,4);Me.start<=Te+1&&he===Ve&&He(Me.start+Me.count-1,M.width,4)===he?se.count=Math.max(se.count,Me.start+Me.count-se.start):(++ge,q[ge]=Me)}q.length=ge+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ne=0,se=q.length;ne<se;ne++){const Me=q[ne],Te=Math.floor(Me.start/4),he=Math.ceil(Me.count/4),Ve=Te%M.width,D=Math.floor(Te/M.width),oe=he,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ve,D,oe,ie,F,Z,M.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function K(R,M,F){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const j=Be(R,M),q=M.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+F);const ge=n.get(q);if(q.version!==ge.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const ae=ft.getPrimaries(ft.workingColorSpace),Ce=M.colorSpace===Ii?null:ft.getPrimaries(M.colorSpace),Se=M.colorSpace===Ii||ae===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ne=g(M.image,!1,r.maxTextureSize);ne=ke(M,ne);const se=s.convert(M.format,M.colorSpace),Me=s.convert(M.type);let Te=E(M.internalFormat,se,Me,M.colorSpace,M.isVideoTexture);ce(Z,M);let he;const Ve=M.mipmaps,D=M.isVideoTexture!==!0,oe=ge.__version===void 0||j===!0,ie=q.dataReady,de=A(M,ne);if(M.isDepthTexture)Te=S(M.format===Sr,M.type),oe&&(D?t.texStorage2D(i.TEXTURE_2D,1,Te,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Te,ne.width,ne.height,0,se,Me,null));else if(M.isDataTexture)if(Ve.length>0){D&&oe&&t.texStorage2D(i.TEXTURE_2D,de,Te,Ve[0].width,Ve[0].height);for(let te=0,$=Ve.length;te<$;te++)he=Ve[te],D?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,se,Me,he.data):t.texImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,se,Me,he.data);M.generateMipmaps=!1}else D?(oe&&t.texStorage2D(i.TEXTURE_2D,de,Te,ne.width,ne.height),ie&&qe(M,ne,se,Me)):t.texImage2D(i.TEXTURE_2D,0,Te,ne.width,ne.height,0,se,Me,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Te,Ve[0].width,Ve[0].height,ne.depth);for(let te=0,$=Ve.length;te<$;te++)if(he=Ve[te],M.format!==yi)if(se!==null)if(D){if(ie)if(M.layerUpdates.size>0){const Ee=Ah(he.width,he.height,M.format,M.type);for(const Ne of M.layerUpdates){const ht=he.data.subarray(Ne*Ee/he.data.BYTES_PER_ELEMENT,(Ne+1)*Ee/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Ne,he.width,he.height,1,se,ht)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,se,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Te,he.width,he.height,ne.depth,0,he.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,se,Me,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Te,he.width,he.height,ne.depth,0,se,Me,he.data)}else{D&&oe&&t.texStorage2D(i.TEXTURE_2D,de,Te,Ve[0].width,Ve[0].height);for(let te=0,$=Ve.length;te<$;te++)he=Ve[te],M.format!==yi?se!==null?D?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,se,he.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,he.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,se,Me,he.data):t.texImage2D(i.TEXTURE_2D,te,Te,he.width,he.height,0,se,Me,he.data)}else if(M.isDataArrayTexture)if(D){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Te,ne.width,ne.height,ne.depth),ie)if(M.layerUpdates.size>0){const te=Ah(ne.width,ne.height,M.format,M.type);for(const $ of M.layerUpdates){const Ee=ne.data.subarray($*te/ne.data.BYTES_PER_ELEMENT,($+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,se,Me,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,se,Me,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ne.width,ne.height,ne.depth,0,se,Me,ne.data);else if(M.isData3DTexture)D?(oe&&t.texStorage3D(i.TEXTURE_3D,de,Te,ne.width,ne.height,ne.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,se,Me,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ne.width,ne.height,ne.depth,0,se,Me,ne.data);else if(M.isFramebufferTexture){if(oe)if(D)t.texStorage2D(i.TEXTURE_2D,de,Te,ne.width,ne.height);else{let te=ne.width,$=ne.height;for(let Ee=0;Ee<de;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Te,te,$,0,se,Me,null),te>>=1,$>>=1}}else if(Ve.length>0){if(D&&oe){const te=xe(Ve[0]);t.texStorage2D(i.TEXTURE_2D,de,Te,te.width,te.height)}for(let te=0,$=Ve.length;te<$;te++)he=Ve[te],D?ie&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,se,Me,he):t.texImage2D(i.TEXTURE_2D,te,Te,se,Me,he);M.generateMipmaps=!1}else if(D){if(oe){const te=xe(ne);t.texStorage2D(i.TEXTURE_2D,de,Te,te.width,te.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Me,ne)}else t.texImage2D(i.TEXTURE_2D,0,Te,se,Me,ne);p(M)&&m(Z),ge.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ee(R,M,F){if(M.image.length!==6)return;const Z=Be(R,M),j=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const q=n.get(j);if(j.version!==q.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const ge=ft.getPrimaries(ft.workingColorSpace),ae=M.colorSpace===Ii?null:ft.getPrimaries(M.colorSpace),Ce=M.colorSpace===Ii||ge===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!Se&&!ne?se[$]=g(M.image[$],!0,r.maxCubemapSize):se[$]=ne?M.image[$].image:M.image[$],se[$]=ke(M,se[$]);const Me=se[0],Te=s.convert(M.format,M.colorSpace),he=s.convert(M.type),Ve=E(M.internalFormat,Te,he,M.colorSpace),D=M.isVideoTexture!==!0,oe=q.__version===void 0||Z===!0,ie=j.dataReady;let de=A(M,Me);ce(i.TEXTURE_CUBE_MAP,M);let te;if(Se){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ve,Me.width,Me.height);for(let $=0;$<6;$++){te=se[$].mipmaps;for(let Ee=0;Ee<te.length;Ee++){const Ne=te[Ee];M.format!==yi?Te!==null?D?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,0,0,Ne.width,Ne.height,Te,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,Ve,Ne.width,Ne.height,0,Ne.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,0,0,Ne.width,Ne.height,Te,he,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,Ve,Ne.width,Ne.height,0,Te,he,Ne.data)}}}else{if(te=M.mipmaps,D&&oe){te.length>0&&de++;const $=xe(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ve,$.width,$.height)}for(let $=0;$<6;$++)if(ne){D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,Te,he,se[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,se[$].width,se[$].height,0,Te,he,se[$].data);for(let Ee=0;Ee<te.length;Ee++){const ht=te[Ee].image[$].image;D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,0,0,ht.width,ht.height,Te,he,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,Ve,ht.width,ht.height,0,Te,he,ht.data)}}else{D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,he,se[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,Te,he,se[$]);for(let Ee=0;Ee<te.length;Ee++){const Ne=te[Ee];D?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,0,0,Te,he,Ne.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,Ve,Te,he,Ne.image[$])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,F,Z,j,q){const ge=s.convert(F.format,F.colorSpace),ae=s.convert(F.type),Ce=E(F.internalFormat,ge,ae,F.colorSpace),Se=n.get(M),ne=n.get(F);if(ne.__renderTarget=M,!Se.__hasExternalTextures){const se=Math.max(1,M.width>>q),Me=Math.max(1,M.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,q,Ce,se,Me,M.depth,0,ge,ae,null):t.texImage2D(j,q,Ce,se,Me,0,ge,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,ne.__webglTexture,0,L(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,ne.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(R,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,q=S(M.stencilBuffer,j),ge=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(M),q,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(M),q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{const Z=M.textures;for(let j=0;j<Z.length;j++){const q=Z[j],ge=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),Ce=E(q.internalFormat,ge,ae,q.colorSpace);gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(M),Ce,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(M),Ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(R,M,F){const Z=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ce(i.TEXTURE_CUBE_MAP,M.depthTexture);const Se=s.convert(M.depthTexture.format),ne=s.convert(M.depthTexture.type);let se;M.depthTexture.format===sr?se=i.DEPTH_COMPONENT24:M.depthTexture.format===Sr&&(se=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,se,M.width,M.height,0,Se,ne,null)}}else B(M.depthTexture,0);const q=j.__webglTexture,ge=L(M),ae=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Ce=M.depthTexture.format===Sr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===sr)gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,ae,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,ae,q,0);else if(M.depthTexture.format===Sr)gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,ae,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,ae,q,0);else throw new Error("Unknown depthTexture format")}function Re(R){const M=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)Ie(M.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Ie(M.__webglFramebuffer[0],R,0):Ie(M.__webglFramebuffer,R,0)}else if(F){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ue(M.__webglDepthbuffer[Z],R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ue(M.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(R,M,F){const Z=n.get(R);M!==void 0&&re(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Re(R)}function ye(R){const M=R.texture,F=n.get(R),Z=n.get(M);R.addEventListener("dispose",b);const j=R.textures,q=R.isWebGLCubeRenderTarget===!0,ge=j.length>1;if(ge||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)F.__webglFramebuffer[ae][Ce]=i.createFramebuffer()}else F.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)F.__webglFramebuffer[ae]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ae=0,Ce=j.length;ae<Ce;ae++){const Se=n.get(j[ae]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&gt(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const Ce=j[ae];F.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const Se=s.convert(Ce.format,Ce.colorSpace),ne=s.convert(Ce.type),se=E(Ce.internalFormat,Se,ne,Ce.colorSpace,R.isXRRenderTarget===!0),Me=L(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,se,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(i.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)re(F.__webglFramebuffer[ae][Ce],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce);else re(F.__webglFramebuffer[ae],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,Ce=j.length;ae<Ce;ae++){const Se=j[ae],ne=n.get(Se);let se=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),ce(se,Se),re(F.__webglFramebuffer,R,Se,i.COLOR_ATTACHMENT0+ae,se,0),p(Se)&&m(se)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),ce(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)re(F.__webglFramebuffer[Ce],R,M,i.COLOR_ATTACHMENT0,ae,Ce);else re(F.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ae,0);p(M)&&m(ae),t.unbindTexture()}R.depthBuffer&&Re(R)}function ze(R){const M=R.textures;for(let F=0,Z=M.length;F<Z;F++){const j=M[F];if(p(j)){const q=v(R),ge=n.get(j).__webglTexture;t.bindTexture(q,ge),m(q),t.unbindTexture()}}}const Ke=[],Oe=[];function X(R){if(R.samples>0){if(gt(R)===!1){const M=R.textures,F=R.width,Z=R.height;let j=i.COLOR_BUFFER_BIT;const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),ae=M.length>1;if(ae)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Ce=R.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const ne=n.get(M[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,j,i.NEAREST),l===!0&&(Ke.length=0,Oe.length=0,Ke.push(i.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ke.push(q),Oe.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const ne=n.get(M[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function gt(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ke(R,M){const F=R.colorSpace,Z=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Pr&&F!==Ii&&(ft.getTransfer(F)===Mt?(Z!==yi||j!==qt)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",F)),M}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=J,this.rebindTextures=ut,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=re,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JS(i,e){function t(n,r=Ii){let s;const a=ft.getTransfer(r);if(n===qt)return i.UNSIGNED_BYTE;if(n===sf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===af)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wd)return i.BYTE;if(n===Xd)return i.SHORT;if(n===Va)return i.UNSIGNED_SHORT;if(n===rf)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Ni)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===$d)return i.ALPHA;if(n===Kd)return i.RGB;if(n===yi)return i.RGBA;if(n===sr)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===Zd)return i.RED;if(n===of)return i.RED_INTEGER;if(n===Ks)return i.RG;if(n===lf)return i.RG_INTEGER;if(n===cf)return i.RGBA_INTEGER;if(n===Zo||n===jo||n===Jo||n===Qo)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kc||n===Zc||n===jc||n===Jc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Kc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===su)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qc||n===eu)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===nu)return s.COMPRESSED_R11_EAC;if(n===iu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ru)return s.COMPRESSED_RG11_EAC;if(n===su)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===au||n===ou||n===lu||n===cu||n===uu||n===fu||n===hu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===au)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ou)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===du)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_u)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xu)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Su||n===Mu||n===Eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Su)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===Tu||n===bu||n===Au)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vn({vertexShader:QS,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bi(new Cl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends lr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const g=typeof XRWebGLBinding<"u",p=new tM,m={},v=t.getContextAttributes();let E=null,S=null;const A=[],w=[],b=new Ge;let x=null;const y=new Gn;y.viewport=new It;const U=new Gn;U.viewport=new It;const C=[y,U],I=new dg;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=A[K];return ee===void 0&&(ee=new $l,A[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=A[K];return ee===void 0&&(ee=new $l,A[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=A[K];return ee===void 0&&(ee=new $l,A[K]=ee),ee.getHandSpace()};function B(K){const ee=w.indexOf(K.inputSource);if(ee===-1)return;const re=A[ee];re!==void 0&&(re.update(K.inputSource,K.frame,c||a),re.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",N);for(let K=0;K<A.length;K++){const ee=w[K];ee!==null&&(w[K]=null,A[K].disconnect(ee))}z=null,H=null,p.reset();for(const K in m)delete m[K];e.setRenderTarget(E),h=null,f=null,d=null,r=null,S=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",k),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ue=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?Sr:sr,Ue=v.stencil?$s:Ti);const Re={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new un(f.textureWidth,f.textureHeight,{format:yi,type:qt,depthTexture:new Zs(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new un(h.framebufferWidth,h.framebufferHeight,{format:yi,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(K){for(let ee=0;ee<K.removed.length;ee++){const re=K.removed[ee],Ue=w.indexOf(re);Ue>=0&&(w[Ue]=null,A[Ue].disconnect(re))}for(let ee=0;ee<K.added.length;ee++){const re=K.added[ee];let Ue=w.indexOf(re);if(Ue===-1){for(let Re=0;Re<A.length;Re++)if(Re>=w.length){w.push(re),Ue=Re;break}else if(w[Re]===null){w[Re]=re,Ue=Re;break}if(Ue===-1)break}const Ie=A[Ue];Ie&&Ie.connect(re)}}const J=new G,Q=new G;function P(K,ee,re){J.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const Ue=J.distanceTo(Q),Ie=ee.projectionMatrix.elements,Re=re.projectionMatrix.elements,ut=Ie[14]/(Ie[10]-1),ye=Ie[14]/(Ie[10]+1),ze=(Ie[9]+1)/Ie[5],Ke=(Ie[9]-1)/Ie[5],Oe=(Ie[8]-1)/Ie[0],X=(Re[8]+1)/Re[0],L=ut*Oe,gt=ut*X,et=Ue/(-Oe+X),ke=et*-Oe;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ke),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const xe=ut+et,R=ye+et,M=L-ke,F=gt+(Ue-ke),Z=ze*ye/R*xe,j=Ke*ye/R*xe;K.projectionMatrix.makePerspective(M,F,Z,j,xe,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ee=K.near,re=K.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(re=p.depthFar)),I.near=U.near=y.near=ee,I.far=U.far=y.far=re,(z!==I.near||H!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,H=I.far),I.layers.mask=K.layers.mask|6,y.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const Ue=K.parent,Ie=I.cameras;le(I,Ue);for(let Re=0;Re<Ie.length;Re++)le(Ie[Re],Ue);Ie.length===2?P(I,y,U):I.projectionMatrix.copy(y.projectionMatrix),ce(K,I,Ue)};function ce(K,ee,re){re===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(K){return m[K]};let Be=null;function He(K,ee){if(u=ee.getViewerPose(c||a),_=ee,u!==null){const re=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ue=!1;re.length!==I.cameras.length&&(I.cameras.length=0,Ue=!0);for(let ye=0;ye<re.length;ye++){const ze=re[ye];let Ke=null;if(h!==null)Ke=h.getViewport(ze);else{const X=d.getViewSubImage(f,ze);Ke=X.viewport,ye===0&&(e.setRenderTargetTextures(S,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(S))}let Oe=C[ye];Oe===void 0&&(Oe=new Gn,Oe.layers.enable(ye),Oe.viewport=new It,C[ye]=Oe),Oe.matrix.fromArray(ze.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ze.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ye===0&&(I.matrix.copy(Oe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ue===!0&&I.cameras.push(Oe)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const ye=d.getDepthInformation(re[0]);ye&&ye.isValid&&ye.texture&&p.init(ye,r.renderState)}if(Ie&&Ie.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let ye=0;ye<re.length;ye++){const ze=re[ye].camera;if(ze){let Ke=m[ze];Ke||(Ke=new lp,m[ze]=Ke);const Oe=d.getCameraImage(ze);Ke.sourceTexture=Oe}}}}for(let re=0;re<A.length;re++){const Ue=w[re],Ie=A[re];Ue!==null&&Ie!==void 0&&Ie.update(Ue,ee,c||a)}Be&&Be(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const qe=new hp;qe.setAnimationLoop(He),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}}const Hr=new Hi,iM=new Lt;function rM(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,cp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,v,E,S){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),E=v.envMap,S=v.envMapRotation;E&&(p.envMap.value=E,Hr.copy(S),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),p.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Hr)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sM(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const S=E.program;n.uniformBlockBinding(v,S)}function c(v,E){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",p));const A=E.program;n.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function u(v){const E=d();v.__bindingPointIndex=E;const S=i.createBuffer(),A=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const E=r[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,b=S.length;w<b;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,U=x.length;y<U;y++){const C=x[y];if(h(C,w,y,A)===!0){const I=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let B=0;B<z.length;B++){const k=z[B],N=g(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+H,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,H),H+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,E,S,A){const w=v.value,b=E+"_"+S;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const x=A[b];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return A[b]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function _(v){const E=v.uniforms;let S=0;const A=16;for(let b=0,x=E.length;b<x;b++){const y=Array.isArray(E[b])?E[b]:[E[b]];for(let U=0,C=y.length;U<C;U++){const I=y[U],z=Array.isArray(I.value)?I.value:[I.value];for(let H=0,B=z.length;H<B;H++){const k=z[H],N=g(k),J=S%A,Q=J%N.boundary,P=J+Q;S+=Q,P!==0&&A-P<N.storage&&(S+=A-P),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=N.storage}}}const w=S%A;return w>0&&(S+=A-w),v.__size=S,v.__cache={},this}function g(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",v),E}function p(v){const E=v.target;E.removeEventListener("dispose",p);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function m(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function oM(){return Ci===null&&(Ci=new Y_(aM,16,16,Ks,rr),Ci.name="DFG_LUT",Ci.minFilter=$t,Ci.magFilter=$t,Ci.wrapS=Qi,Ci.wrapT=Qi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class lM{constructor(e={}){const{canvas:t=T_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=qt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=h,p=new Set([cf,lf,of]),m=new Set([qt,Ti,Va,$s,sf,af]),v=new Uint32Array(4),E=new Int32Array(4);let S=null,A=null;const w=[],b=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=Tt;let C=0,I=0,z=null,H=-1,B=null;const k=new It,N=new It;let J=null;const Q=new st(0);let P=0,le=t.width,ce=t.height,Be=1,He=null,qe=null;const K=new It(0,0,le,ce),ee=new It(0,0,le,ce);let re=!1;const Ue=new mf;let Ie=!1,Re=!1;const ut=new Lt,ye=new G,ze=new It,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function X(){return z===null?Be:1}let L=n;function gt(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eo}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ht,!1),L===null){const O="webgl2";if(L=gt(O,T),L===null)throw gt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw pt("WebGLRenderer: "+T.message),T}let et,ke,xe,R,M,F,Z,j,q,ge,ae,Ce,Se,ne,se,Me,Te,he,Ve,D,oe,ie,de;function te(){et=new lx(L),et.init(),oe=new JS(L,et),ke=new ex(L,et,e,oe),xe=new ZS(L,et),ke.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),R=new fx(L),M=new FS,F=new jS(L,et,xe,M,ke,oe,R),Z=new ox(y),j=new _g(L),ie=new Jv(L,j),q=new cx(L,j,R,ie),ge=new dx(L,q,j,ie,R),he=new hx(L,ke,F),se=new tx(M),ae=new NS(y,Z,et,ke,ie,se),Ce=new rM(y,M),Se=new BS,ne=new WS(et),Te=new jv(y,Z,xe,ge,_,l),Me=new KS(y,ge,ke),de=new sM(L,R,ke,xe),Ve=new Qv(L,et,R),D=new ux(L,et,R),R.programs=ae.programs,y.capabilities=ke,y.extensions=et,y.properties=M,y.renderLists=Se,y.shadowMap=Me,y.state=xe,y.info=R}te(),g!==qt&&(x=new mx(g,t.width,t.height,r,s));const $=new nM(y,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(T){T!==void 0&&(Be=T,this.setSize(le,ce,!1))},this.getSize=function(T){return T.set(le,ce)},this.setSize=function(T,O,Y=!0){if($.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,ce=O,t.width=Math.floor(T*Be),t.height=Math.floor(O*Be),Y===!0&&(t.style.width=T+"px",t.style.height=O+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(le*Be,ce*Be).floor()},this.setDrawingBufferSize=function(T,O,Y){le=T,ce=O,Be=Y,t.width=Math.floor(T*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(g===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,O,Y,W){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,O,Y,W),xe.viewport(k.copy(K).multiplyScalar(Be).round())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,O,Y,W){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,O,Y,W),xe.scissor(N.copy(ee).multiplyScalar(Be).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){xe.setScissorTest(re=T)},this.setOpaqueSort=function(T){He=T},this.setTransparentSort=function(T){qe=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Y=!0){let W=0;if(T){let V=!1;if(z!==null){const ue=z.texture.format;V=p.has(ue)}if(V){const ue=z.texture.type,pe=m.has(ue),fe=Te.getClearColor(),Ae=Te.getClearAlpha(),be=fe.r,Ze=fe.g,tt=fe.b;pe?(v[0]=be,v[1]=Ze,v[2]=tt,v[3]=Ae,L.clearBufferuiv(L.COLOR,0,v)):(E[0]=be,E[1]=Ze,E[2]=tt,E[3]=Ae,L.clearBufferiv(L.COLOR,0,E))}else W|=L.COLOR_BUFFER_BIT}O&&(W|=L.DEPTH_BUFFER_BIT),Y&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Te.dispose(),Se.dispose(),ne.dispose(),M.dispose(),Z.dispose(),ge.dispose(),ie.dispose(),de.dispose(),ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",Xe),$.removeEventListener("sessionend",kt),$e.stop()};function Ee(T){T.preventDefault(),th("WebGLRenderer: Context Lost."),U=!0}function Ne(){th("WebGLRenderer: Context Restored."),U=!1;const T=R.autoReset,O=Me.enabled,Y=Me.autoUpdate,W=Me.needsUpdate,V=Me.type;te(),R.autoReset=T,Me.enabled=O,Me.autoUpdate=Y,Me.needsUpdate=W,Me.type=V}function ht(T){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ve(T){const O=T.target;O.removeEventListener("dispose",ve),Pe(O)}function Pe(T){je(T),M.remove(T)}function je(T){const O=M.get(T).programs;O!==void 0&&(O.forEach(function(Y){ae.releaseProgram(Y)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Y,W,V,ue){O===null&&(O=Ke);const pe=V.isMesh&&V.matrixWorld.determinant()<0,fe=ci(T,O,Y,W,V);xe.setMaterial(W,pe);let Ae=Y.index,be=1;if(W.wireframe===!0){if(Ae=q.getWireframeAttribute(Y),Ae===void 0)return;be=2}const Ze=Y.drawRange,tt=Y.attributes.position;let Le=Ze.start*be,Et=(Ze.start+Ze.count)*be;ue!==null&&(Le=Math.max(Le,ue.start*be),Et=Math.min(Et,(ue.start+ue.count)*be)),Ae!==null?(Le=Math.max(Le,0),Et=Math.min(Et,Ae.count)):tt!=null&&(Le=Math.max(Le,0),Et=Math.min(Et,tt.count));const Gt=Et-Le;if(Gt<0||Gt===1/0)return;ie.setup(V,W,fe,Y,Ae);let Bt,yt=Ve;if(Ae!==null&&(Bt=j.get(Ae),yt=D,yt.setIndex(Bt)),V.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*X()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(V.isLine){let Mn=W.linewidth;Mn===void 0&&(Mn=1),xe.setLineWidth(Mn*X()),V.isLineSegments?yt.setMode(L.LINES):V.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else V.isPoints?yt.setMode(L.POINTS):V.isSprite&&yt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)dl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))yt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Mn=V._multiDrawStarts,De=V._multiDrawCounts,qn=V._multiDrawCount,dt=Ae?j.get(Ae).bytesPerElement:1,gi=M.get(W).currentProgram.getUniforms();for(let wi=0;wi<qn;wi++)gi.setValue(L,"_gl_DrawID",wi),yt.render(Mn[wi]/dt,De[wi])}else if(V.isInstancedMesh)yt.renderInstances(Le,Gt,V.count);else if(Y.isInstancedBufferGeometry){const Mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,De=Math.min(Y.instanceCount,Mn);yt.renderInstances(Le,Gt,De)}else yt.render(Le,Gt)};function me(T,O,Y){T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,xn(T,O,Y),T.side=ir,T.needsUpdate=!0,xn(T,O,Y),T.side=ei):xn(T,O,Y)}this.compile=function(T,O,Y=null){Y===null&&(Y=T),A=ne.get(Y),A.init(O),b.push(A),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const W=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const fe=ue[pe];me(fe,Y,V),W.add(fe)}else me(ue,Y,V),W.add(ue)}),A=b.pop(),W},this.compileAsync=function(T,O,Y=null){const W=this.compile(T,O,Y);return new Promise(V=>{function ue(){if(W.forEach(function(pe){M.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){V(T);return}setTimeout(ue,10)}et.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let We=null;function Fe(T){We&&We(T)}function Xe(){$e.stop()}function kt(){$e.start()}const $e=new hp;$e.setAnimationLoop(Fe),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(T){We=T,$.setAnimationLoop(T),T===null?$e.stop():$e.start()},$.addEventListener("sessionstart",Xe),$.addEventListener("sessionend",kt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const Y=$.enabled===!0&&$.isPresenting===!0,W=x!==null&&(z===null||Y)&&x.begin(y,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,O,z),A=ne.get(T,b.length),A.init(O),b.push(A),ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ue.setFromProjectionMatrix(ut,Fi,O.reversedDepth),Re=this.localClippingEnabled,Ie=se.init(this.clippingPlanes,Re),S=Se.get(T,w.length),S.init(),w.push(S),$.enabled===!0&&$.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&Pt(pe,O,-1/0,y.sortObjects)}Pt(T,O,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(He,qe),Oe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Oe&&Te.addToRenderList(S,T),this.info.render.frame++,Ie===!0&&se.beginShadows();const V=A.state.shadowsArray;if(Me.render(V,T,O),Ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&x.hasRenderPass())===!1){const pe=S.opaque,fe=S.transmissive;if(A.setupLights(),O.isArrayCamera){const Ae=O.cameras;if(fe.length>0)for(let be=0,Ze=Ae.length;be<Ze;be++){const tt=Ae[be];Dt(pe,fe,T,tt)}Oe&&Te.render(T);for(let be=0,Ze=Ae.length;be<Ze;be++){const tt=Ae[be];Kt(S,T,tt,tt.viewport)}}else fe.length>0&&Dt(pe,fe,T,O),Oe&&Te.render(T),Kt(S,T,O)}z!==null&&I===0&&(F.updateMultisampleRenderTarget(z),F.updateRenderTargetMipmap(z)),W&&x.end(y),T.isScene===!0&&T.onAfterRender(y,T,O),ie.resetDefaultState(),H=-1,B=null,b.pop(),b.length>0?(A=b[b.length-1],Ie===!0&&se.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Pt(T,O,Y,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){W&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const pe=ge.update(T),fe=T.material;fe.visible&&S.push(T,pe,fe,Y,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){const pe=ge.update(T),fe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ze.copy(pe.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(fe)){const Ae=pe.groups;for(let be=0,Ze=Ae.length;be<Ze;be++){const tt=Ae[be],Le=fe[tt.materialIndex];Le&&Le.visible&&S.push(T,pe,Le,Y,ze.z,tt)}}else fe.visible&&S.push(T,pe,fe,Y,ze.z,null)}}const ue=T.children;for(let pe=0,fe=ue.length;pe<fe;pe++)Pt(ue[pe],O,Y,W)}function Kt(T,O,Y,W){const{opaque:V,transmissive:ue,transparent:pe}=T;A.setupLightsView(Y),Ie===!0&&se.setGlobalState(y.clippingPlanes,Y),W&&xe.viewport(k.copy(W)),V.length>0&&St(V,O,Y),ue.length>0&&St(ue,O,Y),pe.length>0&&St(pe,O,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Dt(T,O,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Le=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new un(1,1,{generateMipmaps:!0,type:Le?rr:qt,minFilter:jr,samples:Math.max(4,ke.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const ue=A.state.transmissionRenderTarget[W.id],pe=W.viewport||k;ue.setSize(pe.z*y.transmissionResolutionScale,pe.w*y.transmissionResolutionScale);const fe=y.getRenderTarget(),Ae=y.getActiveCubeFace(),be=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(Q),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&Te.render(Y);const Ze=y.toneMapping;y.toneMapping=ki;const tt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),Ie===!0&&se.setGlobalState(y.clippingPlanes,W),St(T,Y,W),F.updateMultisampleRenderTarget(ue),F.updateRenderTargetMipmap(ue),et.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Et=0,Gt=O.length;Et<Gt;Et++){const Bt=O[Et],{object:yt,geometry:Mn,material:De,group:qn}=Bt;if(De.side===ei&&yt.layers.test(W.layers)){const dt=De.side;De.side=cn,De.needsUpdate=!0,vt(yt,Y,W,Mn,De,qn),De.side=dt,De.needsUpdate=!0,Le=!0}}Le===!0&&(F.updateMultisampleRenderTarget(ue),F.updateRenderTargetMipmap(ue))}y.setRenderTarget(fe,Ae,be),y.setClearColor(Q,P),tt!==void 0&&(W.viewport=tt),y.toneMapping=Ze}function St(T,O,Y){const W=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ue=T.length;V<ue;V++){const pe=T[V],{object:fe,geometry:Ae,group:be}=pe;let Ze=pe.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),fe.layers.test(Y.layers)&&vt(fe,O,Y,Ae,Ze,be)}}function vt(T,O,Y,W,V,ue){T.onBeforeRender(y,O,Y,W,V,ue),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(y,O,Y,W,T,ue),V.transparent===!0&&V.side===ei&&V.forceSinglePass===!1?(V.side=cn,V.needsUpdate=!0,y.renderBufferDirect(Y,O,W,V,T,ue),V.side=ir,V.needsUpdate=!0,y.renderBufferDirect(Y,O,W,V,T,ue),V.side=ei):y.renderBufferDirect(Y,O,W,V,T,ue),T.onAfterRender(y,O,Y,W,V,ue)}function xn(T,O,Y){O.isScene!==!0&&(O=Ke);const W=M.get(T),V=A.state.lights,ue=A.state.shadowsArray,pe=V.state.version,fe=ae.getParameters(T,V.state,ue,O,Y),Ae=ae.getProgramCacheKey(fe);let be=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;const Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=Z.get(T.envMap||W.environment,Ze),W.envMapRotation=W.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,be===void 0&&(T.addEventListener("dispose",ve),be=new Map,W.programs=be);let tt=be.get(Ae);if(tt!==void 0){if(W.currentProgram===tt&&W.lightsStateVersion===pe)return Sn(T,fe),tt}else fe.uniforms=ae.getUniforms(T),T.onBeforeCompile(fe,y),tt=ae.acquireProgram(fe,Ae),be.set(Ae,tt),W.uniforms=fe.uniforms;const Le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=se.uniform),Sn(T,fe),W.needsLights=jt(T),W.lightsStateVersion=pe,W.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=tt,W.uniformsList=null,tt}function Rt(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=el.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Sn(T,O){const Y=M.get(T);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function ci(T,O,Y,W,V){O.isScene!==!0&&(O=Ke),F.resetTextureUnits();const ue=O.fog,pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,fe=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Pr,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,be=Z.get(W.envMap||pe,Ae),Ze=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,tt=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!Y.morphAttributes.position,Et=!!Y.morphAttributes.normal,Gt=!!Y.morphAttributes.color;let Bt=ki;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Bt=y.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mn=yt!==void 0?yt.length:0,De=M.get(W),qn=A.state.lights;if(Ie===!0&&(Re===!0||T!==B)){const sn=T===B&&W.id===H;se.setState(W,T,sn)}let dt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==qn.state.version||De.outputColorSpace!==fe||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==be||W.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==Ze||De.vertexTangents!==tt||De.morphTargets!==Le||De.morphNormals!==Et||De.morphColors!==Gt||De.toneMapping!==Bt||De.morphTargetsCount!==Mn)&&(dt=!0):(dt=!0,De.__version=W.version);let gi=De.currentProgram;dt===!0&&(gi=xn(W,O,V));let wi=!1,Fr=!1,ps=!1;const bt=gi.getUniforms(),dn=De.uniforms;if(xe.useProgram(gi.program)&&(wi=!0,Fr=!0,ps=!0),W.id!==H&&(H=W.id,Fr=!0),wi||B!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),bt.setValue(L,"projectionMatrix",T.projectionMatrix),bt.setValue(L,"viewMatrix",T.matrixWorldInverse);const fr=bt.map.cameraPosition;fr!==void 0&&fr.setValue(L,ye.setFromMatrixPosition(T.matrixWorld)),ke.logarithmicDepthBuffer&&bt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&bt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,Fr=!0,ps=!0)}if(De.needsLights&&(qn.state.directionalShadowMap.length>0&&bt.setValue(L,"directionalShadowMap",qn.state.directionalShadowMap,F),qn.state.spotShadowMap.length>0&&bt.setValue(L,"spotShadowMap",qn.state.spotShadowMap,F),qn.state.pointShadowMap.length>0&&bt.setValue(L,"pointShadowMap",qn.state.pointShadowMap,F)),V.isSkinnedMesh){bt.setOptional(L,V,"bindMatrix"),bt.setOptional(L,V,"bindMatrixInverse");const sn=V.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),bt.setValue(L,"boneTexture",sn.boneTexture,F))}V.isBatchedMesh&&(bt.setOptional(L,V,"batchingTexture"),bt.setValue(L,"batchingTexture",V._matricesTexture,F),bt.setOptional(L,V,"batchingIdTexture"),bt.setValue(L,"batchingIdTexture",V._indirectTexture,F),bt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&bt.setValue(L,"batchingColorTexture",V._colorsTexture,F));const ur=Y.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&he.update(V,Y,gi),(Fr||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,bt.setValue(L,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=oM()),Fr&&(bt.setValue(L,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Zt(dn,ps),ue&&W.fog===!0&&Ce.refreshFogUniforms(dn,ue),Ce.refreshMaterialUniforms(dn,W,Be,ce,A.state.transmissionRenderTarget[T.id]),el.upload(L,Rt(De),dn,F)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(el.upload(L,Rt(De),dn,F),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&bt.setValue(L,"center",V.center),bt.setValue(L,"modelViewMatrix",V.modelViewMatrix),bt.setValue(L,"normalMatrix",V.normalMatrix),bt.setValue(L,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const sn=W.uniformsGroups;for(let fr=0,ms=sn.length;fr<ms;fr++){const qf=sn[fr];de.update(qf,gi),de.bind(qf,gi)}}return gi}function Zt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function jt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,O,Y){const W=M.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=O,M.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const Y=M.get(T);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const rn=L.createFramebuffer();this.setRenderTarget=function(T,O=0,Y=0){z=T,C=O,I=Y;let W=null,V=!1,ue=!1;if(T){const fe=M.get(T);if(fe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),k.copy(T.viewport),N.copy(T.scissor),J=T.scissorTest,xe.viewport(k),xe.scissor(N),xe.setScissorTest(J),H=-1;return}else if(fe.__webglFramebuffer===void 0)F.setupRenderTarget(T);else if(fe.__hasExternalTextures)F.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(fe.__boundDepthTexture!==Ze){if(Ze!==null&&M.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const be=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(be[O])?W=be[O][Y]:W=be[O],V=!0):T.samples>0&&F.useMultisampledRTT(T)===!1?W=M.get(T).__webglMultisampledFramebuffer:Array.isArray(be)?W=be[Y]:W=be,k.copy(T.viewport),N.copy(T.scissor),J=T.scissorTest}else k.copy(K).multiplyScalar(Be).floor(),N.copy(ee).multiplyScalar(Be).floor(),J=re;if(Y!==0&&(W=rn),xe.bindFramebuffer(L.FRAMEBUFFER,W)&&xe.drawBuffers(T,W),xe.viewport(k),xe.scissor(N),xe.setScissorTest(J),V){const fe=M.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,fe.__webglTexture,Y)}else if(ue){const fe=O;for(let Ae=0;Ae<T.textures.length;Ae++){const be=M.get(T.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,be.__webglTexture,Y,fe)}}else if(T!==null&&Y!==0){const fe=M.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,Y)}H=-1},this.readRenderTargetPixels=function(T,O,Y,W,V,ue,pe,fe=0){if(!(T&&T.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae){xe.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const be=T.textures[fe],Ze=be.format,tt=be.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!ke.textureFormatReadable(Ze)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(tt)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&Y>=0&&Y<=T.height-V&&L.readPixels(O,Y,W,V,oe.convert(Ze),oe.convert(tt),ue)}finally{const be=z!==null?M.get(z).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,O,Y,W,V,ue,pe,fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Ae=Ae[pe]),Ae)if(O>=0&&O<=T.width-W&&Y>=0&&Y<=T.height-V){xe.bindFramebuffer(L.FRAMEBUFFER,Ae);const be=T.textures[fe],Ze=be.format,tt=be.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!ke.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(O,Y,W,V,oe.convert(Ze),oe.convert(tt),0);const Et=z!==null?M.get(z).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Et);const Gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await b_(L,Gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(Le),L.deleteSync(Gt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Y=0){const W=Math.pow(2,-Y),V=Math.floor(T.image.width*W),ue=Math.floor(T.image.height*W),pe=O!==null?O.x:0,fe=O!==null?O.y:0;F.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,pe,fe,V,ue),xe.unbindTexture()};const Wi=L.createFramebuffer(),ds=L.createFramebuffer();this.copyTextureToTexture=function(T,O,Y=null,W=null,V=0,ue=0){let pe,fe,Ae,be,Ze,tt,Le,Et,Gt;const Bt=T.isCompressedTexture?T.mipmaps[ue]:T.image;if(Y!==null)pe=Y.max.x-Y.min.x,fe=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,be=Y.min.x,Ze=Y.min.y,tt=Y.isBox3?Y.min.z:0;else{const dn=Math.pow(2,-V);pe=Math.floor(Bt.width*dn),fe=Math.floor(Bt.height*dn),T.isDataArrayTexture?Ae=Bt.depth:T.isData3DTexture?Ae=Math.floor(Bt.depth*dn):Ae=1,be=0,Ze=0,tt=0}W!==null?(Le=W.x,Et=W.y,Gt=W.z):(Le=0,Et=0,Gt=0);const yt=oe.convert(O.format),Mn=oe.convert(O.type);let De;O.isData3DTexture?(F.setTexture3D(O,0),De=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(F.setTexture2DArray(O,0),De=L.TEXTURE_2D_ARRAY):(F.setTexture2D(O,0),De=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const qn=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gi=L.getParameter(L.UNPACK_SKIP_PIXELS),wi=L.getParameter(L.UNPACK_SKIP_ROWS),Fr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);const ps=T.isDataArrayTexture||T.isData3DTexture,bt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const dn=M.get(T),ur=M.get(O),sn=M.get(dn.__renderTarget),fr=M.get(ur.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,sn.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let ms=0;ms<Ae;ms++)ps&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(T).__webglTexture,V,tt+ms),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(O).__webglTexture,ue,Gt+ms)),L.blitFramebuffer(be,Ze,pe,fe,Le,Et,pe,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||M.has(T)){const dn=M.get(T),ur=M.get(O);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Wi),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ds);for(let sn=0;sn<Ae;sn++)ps?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,V,tt+sn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,V),bt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ur.__webglTexture,ue,Gt+sn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ur.__webglTexture,ue),V!==0?L.blitFramebuffer(be,Ze,pe,fe,Le,Et,pe,fe,L.COLOR_BUFFER_BIT,L.NEAREST):bt?L.copyTexSubImage3D(De,ue,Le,Et,Gt+sn,be,Ze,pe,fe):L.copyTexSubImage2D(De,ue,Le,Et,be,Ze,pe,fe);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else bt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(De,ue,Le,Et,Gt,pe,fe,Ae,yt,Mn,Bt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(De,ue,Le,Et,Gt,pe,fe,Ae,yt,Bt.data):L.texSubImage3D(De,ue,Le,Et,Gt,pe,fe,Ae,yt,Mn,Bt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Le,Et,pe,fe,yt,Mn,Bt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Le,Et,Bt.width,Bt.height,yt,Bt.data):L.texSubImage2D(L.TEXTURE_2D,ue,Le,Et,pe,fe,yt,Mn,Bt);L.pixelStorei(L.UNPACK_ROW_LENGTH,qn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gi),L.pixelStorei(L.UNPACK_SKIP_ROWS,wi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fr),ue===0&&O.generateMipmaps&&L.generateMipmap(De),xe.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&F.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?F.setTextureCube(T,0):T.isData3DTexture?F.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?F.setTexture2DArray(T,0):F.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){C=0,I=0,z=null,xe.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}var Sc=1/1e3,cM=1e3,uM=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*Sc}get fixedDelta(){return this._fixedDelta*Sc}set fixedDelta(i){this._fixedDelta=i*cM}get elapsed(){return this._elapsed*Sc}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},fM=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Cn;return t.setAttribute("position",new si(i,3)),t.setAttribute("uv",new si(e,2)),t})(),Ai=class Uu{static get fullscreenGeometry(){return fM}constructor(e="Pass",t=new Ru,n=new Pl){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new bi(Uu.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Ru),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=to){}render(e,t,n,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof un||t instanceof cr||t instanceof _n||t instanceof Uu)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},hM=class extends Ai{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,r){const s=i.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},dM=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,vp="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",xp=class extends vn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new _t(null),depthBuffer:new _t(null),channelWeights:new _t(null),opacity:new _t(1)},blending:Bn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:dM,vertexShader:vp}),this.depthFunc=ul}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(i){const e=i!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){const e=i!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(i){this.colorSpaceConversion!==i&&(i?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(i){i!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=i):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},pM=class extends Ai{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new xp,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new un(1,1,{minFilter:$t,magFilter:$t,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,n,r){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==qt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===Tt&&(this.renderTarget.texture.colorSpace=Tt))}},Zh=new st,Sp=class extends Ai{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=i.getClearAlpha(),l=s!==null,c=a>=0;l?(i.getClearColor(Zh),i.setClearColor(s,c?a:o)):c&&i.setClearAlpha(a),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(Zh,o):c&&i.setClearAlpha(o)}},mM=class extends Ai{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new Sp(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,r){const s=i.getContext(),a=i.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,d=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,u,4294967295),a.stencil.setClear(d),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,e),c.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(o,l)):(i.setRenderTarget(e),i.render(o,l),i.setRenderTarget(t),i.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},_M=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new pM,this.depthTexture=null,this.passes=[],this.timer=new uM,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new Ge),t=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===qt&&i.outputColorSpace===Tt&&(this.inputBuffer.texture.colorSpace=Tt,this.outputBuffer.texture.colorSpace=Tt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(i,t,n)}}replaceRenderer(i,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(i),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new Zs;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=Sr,i.type=$s):i.type=Ti,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,n){const r=this.renderer,s=r===null?new Ge:r.getDrawingBufferSize(new Ge),a={minFilter:$t,magFilter:$t,stencilBuffer:e,depthBuffer:i,type:t},o=new un(s.width,s.height,a);return n>0&&(o.samples=n),t===qt&&r!==null&&r.outputColorSpace===Tt&&(o.texture.colorSpace=Tt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,n=this.renderer,r=n.getDrawingBufferSize(new Ge),s=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(i.setRenderer(n),i.setSize(r.width,r.height),i.initialize(n,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(i of t)i.setDepthTexture(o)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,n,r,i,s),c.needsSwap&&(s&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,n,r,i,s),o.setFunc(a.EQUAL,1,4294967295)),l=n,n=r,r=l),c instanceof mM?s=!0:c instanceof hM&&(s=!1))}setSize(i,e,t){const n=this.renderer,r=n.getSize(new Ge);(i===void 0||e===void 0)&&(i=r.width,e=r.height),(r.width!==i||r.height!==e)&&n.setSize(i,e,t);const s=n.getDrawingBufferSize(new Ge);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ai.fullscreenGeometry.dispose()}},es={NONE:0,DEPTH:1,CONVOLUTION:2},mt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},gM=class{constructor(){this.shaderParts=new Map([[mt.FRAGMENT_HEAD,null],[mt.FRAGMENT_MAIN_UV,null],[mt.FRAGMENT_MAIN_IMAGE,null],[mt.VERTEX_HEAD,null],[mt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=es.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Pr}},Mc=!1,jh=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case ei:t=this.materialsFlatShadedDoubleSide;break;case cn:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case ei:t=this.materialsDoubleSide;break;case cn:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof vn))return i.clone();const e=i.uniforms,t=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}const n=i.clone();for(const r of t)e[r[0]].value=r[1],n.uniforms[r[0]].value=r[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=ir;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=cn,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=ei,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=cn,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=ei,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,Mc){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=r}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Mc}static set workaroundEnabled(i){Mc=i}},vr=-1,Oi=class extends lr{constructor(i,e=vr,t=vr,n=1){super(),this.resizable=i,this.baseSize=new Ge(1,1),this.preferredSize=new Ge(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new Ge,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==vr?t.width=e.width:e.height!==vr?t.width=Math.round(e.height*(i.width/Math.max(i.height,1))):t.width=Math.round(i.width*n),e.height!==vr?t.height=e.height:e.width!==vr?t.height=Math.round(e.width/Math.max(i.width/Math.max(i.height,1),1)):t.height=Math.round(i.height*n)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(vr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,e){(this.baseSize.width!==i||this.baseSize.height!==e)&&(this.baseSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,e){(this.preferredSize.width!==i||this.preferredSize.height!==e)&&(this.preferredSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return vr}},ot={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},vM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",SM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",MM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",GM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",$M="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KM="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZM=new Map([[ot.ADD,vM],[ot.ALPHA,xM],[ot.AVERAGE,SM],[ot.COLOR,MM],[ot.COLOR_BURN,EM],[ot.COLOR_DODGE,yM],[ot.DARKEN,TM],[ot.DIFFERENCE,bM],[ot.DIVIDE,AM],[ot.DST,null],[ot.EXCLUSION,wM],[ot.HARD_LIGHT,RM],[ot.HARD_MIX,CM],[ot.HUE,PM],[ot.INVERT,DM],[ot.INVERT_RGB,UM],[ot.LIGHTEN,IM],[ot.LINEAR_BURN,LM],[ot.LINEAR_DODGE,NM],[ot.LINEAR_LIGHT,FM],[ot.LUMINOSITY,OM],[ot.MULTIPLY,BM],[ot.NEGATION,zM],[ot.NORMAL,kM],[ot.OVERLAY,GM],[ot.PIN_LIGHT,HM],[ot.REFLECT,VM],[ot.SATURATION,WM],[ot.SCREEN,XM],[ot.SOFT_LIGHT,YM],[ot.SRC,qM],[ot.SUBTRACT,$M],[ot.VIVID_LIGHT,KM]]),jM=class extends lr{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new _t(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return ZM.get(this.blendFunction)}},JM=class extends lr{constructor(i,e,{attributes:t=es.NONE,blendFunction:n=ot.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new jM(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Pr,this._outputColorSpace=Ii}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=to){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof un||e instanceof cr||e instanceof _n||e instanceof Ai)&&this[i].dispose()}}},Sf={MEDIUM:2,LARGE:3},QM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,eE="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",tE=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],nE=class extends vn{constructor(i=new It){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new _t(null),texelSize:new _t(new It),scale:new _t(1),kernel:new _t(0)},blending:Bn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:QM,vertexShader:eE}),this.setTexelSize(i.x,i.y),this.kernelSize=Sf.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return tE[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,e){this.uniforms.texelSize.value.set(i,e,i*.5,e*.5)}setSize(i,e){const t=1/i,n=1/e;this.uniforms.texelSize.value.set(t,n,t*.5,n*.5)}},iE=class extends Ai{constructor({kernelSize:i=Sf.MEDIUM,resolutionScale:e=.5,width:t=Oi.AUTO_SIZE,height:n=Oi.AUTO_SIZE,resolutionX:r=t,resolutionY:s=n}={}){super("KawaseBlurPass"),this.renderTargetA=new un(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Oi(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new nE,this._blurMaterial.kernelSize=i,this.copyMaterial=new xp}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let d=e;this.fullscreenMaterial=c;for(let f=0,h=u.length;f<h;++f){const _=(f&1)===0?o:l;c.kernel=u[f],c.inputBuffer=d.texture,i.setRenderTarget(_),i.render(s,a),d=_}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=d.texture,i.setRenderTarget(this.renderToScreen?null:t),i.render(s,a)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const n=t.width,r=t.height;this.renderTargetA.setSize(n,r),this.renderTargetB.setSize(n,r),this.blurMaterial.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==qt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):i!==null&&i.outputColorSpace===Tt&&(this.renderTargetA.texture.colorSpace=Tt,this.renderTargetB.texture.colorSpace=Tt))}static get AUTO_SIZE(){return Oi.AUTO_SIZE}},rE=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,sE=class extends vn{constructor(i=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:eo.replace(/\D+/g,"")},uniforms:{inputBuffer:new _t(null),threshold:new _t(0),smoothing:new _t(1),range:new _t(null)},blending:Bn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:rE,vertexShader:vp}),this.colorOutput=i,this.luminanceRange=e}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get threshold(){return this.uniforms.threshold.value}set threshold(i){this.smoothing>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=i}getThreshold(){return this.threshold}setThreshold(i){this.threshold=i}get smoothing(){return this.uniforms.smoothing.value}set smoothing(i){this.threshold>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=i}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(i){this.smoothing=i}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(i){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(i){i?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(i){return this.colorOutput}setColorOutputEnabled(i){this.colorOutput=i}get useRange(){return this.luminanceRange!==null}set useRange(i){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(i){i!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=i,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(i){this.luminanceRange=i}},aE=class extends Ai{constructor({renderTarget:i,luminanceRange:e,colorOutput:t,resolutionScale:n=1,width:r=Oi.AUTO_SIZE,height:s=Oi.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new sE(t,e),this.needsSwap=!1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new un(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Oi(this,a,o,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(i,e,t,n,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}initialize(i,e,t){t!==void 0&&t!==qt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},oE=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,lE="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",cE=class extends vn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new _t(null),texelSize:new _t(new Ge)},blending:Bn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:oE,vertexShader:lE})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},uE=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,fE="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",hE=class extends vn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new _t(null),supportBuffer:new _t(null),texelSize:new _t(new Ge),radius:new _t(.85)},blending:Bn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:uE,vertexShader:fE})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}set supportBuffer(i){this.uniforms.supportBuffer.value=i}get radius(){return this.uniforms.radius.value}set radius(i){this.uniforms.radius.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},dE=class extends Ai{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new un(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new cE,this.upsamplingMaterial=new hE,this.resolution=new Ge}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(i){if(this.levels!==i){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<i;++t){const n=e.clone();n.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(e);for(let t=1,n=i-1;t<n;++t){const r=e.clone();r.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(i){this.upsamplingMaterial.radius=i}render(i,e,t,n,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let d=e;this.fullscreenMaterial=o;for(let f=0,h=c.length;f<h;++f){const _=c[f];o.setSize(d.width,d.height),o.inputBuffer=d.texture,i.setRenderTarget(_),i.render(s,a),d=_}this.fullscreenMaterial=l;for(let f=u.length-1;f>=0;--f){const h=u[f];l.setSize(d.width,d.height),l.inputBuffer=d.texture,l.supportBuffer=c[f].texture,i.setRenderTarget(h),i.render(s,a),d=h}}setSize(i,e){const t=this.resolution;t.set(i,e);let n=t.width,r=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)n=Math.round(n*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(n,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(n,r)}initialize(i,e,t){if(t!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of n)r.texture.type=t;if(t!==qt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(i!==null&&i.outputColorSpace===Tt)for(const r of n)r.texture.colorSpace=Tt}}dispose(){super.dispose();for(const i of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))i.dispose()}},pE=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,mE=class extends JM{constructor({blendFunction:i=ot.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:n=!0,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=Sf.LARGE,resolutionScale:l=.5,width:c=Oi.AUTO_SIZE,height:u=Oi.AUTO_SIZE,resolutionX:d=c,resolutionY:f=u}={}){super("BloomEffect",pE,{blendFunction:i,uniforms:new Map([["map",new _t(null)],["intensity",new _t(r)]])}),this.renderTarget=new un(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new iE({kernelSize:o}),this.luminancePass=new aE({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new dE,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const h=this.resolution=new Oi(this,d,f,l);h.addEventListener("change",_=>this.setSize(h.baseWidth,h.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.blurPass.dithering}set dithering(i){this.blurPass.dithering=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(i){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(i){this.uniforms.get("intensity").value=i}getIntensity(){return this.intensity}setIntensity(i){this.intensity=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}update(i,e,t){const n=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(i,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,r.renderTarget):this.blurPass.render(i,r.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,e):this.blurPass.render(i,e,n)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(i,e),this.mipmapBlurPass.setSize(i,e)}initialize(i,e,t){this.blurPass.initialize(i,e,t),this.luminancePass.initialize(i,e,t),this.mipmapBlurPass.initialize(i,e,t),t!==void 0&&(this.renderTarget.texture.type=t,i!==null&&i.outputColorSpace===Tt&&(this.renderTarget.texture.colorSpace=Tt))}},_E=class extends Ai{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new Sp,this.overrideMaterialManager=t===null?null:new jh(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new jh(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,u=i.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,s,a):i.render(s,a),a.layers.mask=l,s.background=c,i.shadowMap.autoUpdate=u}},gE=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,vE="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",xE=class extends vn{constructor(i,e,t,n,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:eo.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new _t(null),depthBuffer:new _t(null),resolution:new _t(new Ge),texelSize:new _t(new Ge),cameraNear:new _t(.3),cameraFar:new _t(1e3),aspect:new _t(1),time:new _t(0)},blending:Bn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=to){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=gE.replace(mt.FRAGMENT_HEAD,i.get(mt.FRAGMENT_HEAD)||"").replace(mt.FRAGMENT_MAIN_UV,i.get(mt.FRAGMENT_MAIN_UV)||"").replace(mt.FRAGMENT_MAIN_IMAGE,i.get(mt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=vE.replace(mt.VERTEX_HEAD,i.get(mt.VERTEX_HEAD)||"").replace(mt.VERTEX_MAIN_SUPPORT,i.get(mt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof Gn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return mt}};function Jh(i,e,t){for(const n of e){const r="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),s=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function SE(i,e,t){let n=e.getFragmentShader(),r=e.getVertexShader();const s=n!==void 0&&/mainImage/.test(n),a=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&es.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(mt.FRAGMENT_HEAD)||"",u=l.get(mt.FRAGMENT_MAIN_UV)||"",d=l.get(mt.FRAGMENT_MAIN_IMAGE)||"",f=l.get(mt.VERTEX_HEAD)||"",h=l.get(mt.VERTEX_MAIN_SUPPORT)||"";const _=new Set,g=new Set;if(a&&(u+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const v=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);h+=`	${i}MainSupport(`,h+=v?`vUv);
`:`);
`;for(const E of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const S of E[1].split(/\s*,\s*/))t.varyings.add(S),_.add(S),g.add(S);for(const E of r.matchAll(o))g.add(E[1])}for(const v of n.matchAll(o))g.add(v[1]);for(const v of e.defines.keys())g.add(v.replace(/\([\w\s,]*\)/g,""));for(const v of e.uniforms.keys())g.add(v);g.delete("while"),g.delete("for"),g.delete("if"),e.uniforms.forEach((v,E)=>t.uniforms.set(i+E.charAt(0).toUpperCase()+E.slice(1),v)),e.defines.forEach((v,E)=>t.defines.set(i+E.charAt(0).toUpperCase()+E.slice(1),v));const p=new Map([["fragment",n],["vertex",r]]);Jh(i,g,t.defines),Jh(i,g,p),n=p.get("fragment"),r=p.get("vertex");const m=e.blendMode;if(t.blendModes.set(m.blendFunction,m),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(d+=e.inputColorSpace===Tt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ii?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const v=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${i}MainImage(color0, UV, `,(t.attributes&es.DEPTH)!==0&&v.test(n)&&(d+="depth, ",t.readDepth=!0),d+=`color1);
	`;const E=i+"BlendOpacity";t.uniforms.set(E,m.opacity),d+=`color0 = blend${m.blendFunction}(color0, color1, ${E});

	`,c+=`uniform float ${E};

`}if(c+=n+`
`,r!==null&&(f+=r+`
`),l.set(mt.FRAGMENT_HEAD,c),l.set(mt.FRAGMENT_MAIN_UV,u),l.set(mt.FRAGMENT_MAIN_IMAGE,d),l.set(mt.VERTEX_HEAD,f),l.set(mt.VERTEX_MAIN_SUPPORT,h),e.extensions!==null)for(const v of e.extensions)t.extensions.add(v)}}var ME=class extends Ai{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new xE(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new gM;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===ot.DST)i.attributes|=a.getAttributes()&es.DEPTH;else{if((i.attributes&a.getAttributes()&es.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);SE("e"+e++,a,i)}let t=i.shaderParts.get(mt.FRAGMENT_HEAD),n=i.shaderParts.get(mt.FRAGMENT_MAIN_IMAGE),r=i.shaderParts.get(mt.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of i.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;(i.attributes&es.DEPTH)!==0?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===Tt&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(mt.FRAGMENT_HEAD,t),i.shaderParts.set(mt.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(mt.FRAGMENT_MAIN_UV,r);for(const[a,o]of i.shaderParts)o!==null&&i.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=to){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,r){for(const s of this.effects)s.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==qt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){i.type==="change"&&this.recompile()}};const ao=new Ru;ao.fog=new df(657946,.03);const oa=new Gn(60,window.innerWidth/window.innerHeight,.1,1e3);oa.position.set(0,3,8);const la=new lM({canvas:document.querySelector("#webgl"),antialias:!0,alpha:!1});la.setSize(window.innerWidth,window.innerHeight);la.setPixelRatio(Math.min(window.devicePixelRatio,2));la.setClearColor(657946);const Il=new _M(la);Il.addPass(new _E(ao,oa));const EE=new mE({intensity:1.2,kernelSize:3,luminanceThreshold:.1,luminanceSmoothing:.9});Il.addPass(new ME(oa,EE));function yE(i,e,t){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),t.setSize(window.innerWidth,window.innerHeight)}const Mp=[];function TE(i){const e=new fg(16777215,.7);i.add(e);const t=new ug(16777215,1);t.position.set(5,10,5),i.add(t);const n=new lg(11032055,2,50);n.position.set(0,5,0),i.add(n);const r=new pg(100,100,61695,13107);r.position.y=-1.5,r.material.transparent=!0,r.material.opacity=.5,i.add(r);const s=new _f(.8,0),a=new hc({color:61695,metalness:.8,roughness:.2,emissive:17476,transparent:!0,opacity:.8,wireframe:!0}),o=new vf(.5,.1,16,100),l=new hc({color:16711935,metalness:.9,roughness:.1,emissive:4456516}),c=new gf(.6,0),u=new hc({color:11032055,metalness:.5,roughness:.5,wireframe:!0}),d=[s,o,c],f=[a,l,u];for(let h=0;h<25;h++){const _=d[Math.floor(Math.random()*d.length)],g=f[Math.floor(Math.random()*f.length)],p=new bi(_,g);p.position.set((Math.random()-.5)*30,Math.random()*8-2,(Math.random()-.5)*50),p.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),p.userData={rotX:(Math.random()-.5)*.01,rotY:(Math.random()-.5)*.01,floatSpeed:Math.random()*.02+.01,initialY:p.position.y,time:Math.random()*100},i.add(p),Mp.push(p)}}function bE(){Mp.forEach(i=>{i.userData.time+=i.userData.floatSpeed,i.rotation.x+=i.userData.rotX,i.rotation.y+=i.userData.rotY,i.position.y=i.userData.initialY+Math.sin(i.userData.time)*.5})}const Ep=[];function Ec(i,e,t,n,r,s){const a=new Cn,o=new Float32Array(e*3);for(let u=0;u<e*3;u+=3)o[u]=(Math.random()-.5)*r,o[u+1]=(Math.random()-.5)*s,o[u+2]=(Math.random()-.5)*r;a.setAttribute("position",new si(o,3));const l=new ap({size:t,color:n,transparent:!0,opacity:.8,blending:Bc,depthWrite:!1}),c=new J_(a,l);return i.add(c),c}function AE(i){const e=Ec(i,1e3,.05,16777215,100,50);e.userData={rotSpeed:2e-4};const t=Ec(i,800,.08,11032055,60,30);t.userData={rotSpeed:5e-4};const n=Ec(i,500,.12,61695,30,20);n.userData={rotSpeed:.001},Ep.push(e,t,n)}function wE(){Ep.forEach(i=>{i.rotation.y+=i.userData.rotSpeed})}function Zi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function yp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Js={duration:.5,overwrite:!1,delay:0},Mf,gn,Ut,pi=1e8,wt=1/pi,Iu=Math.PI*2,RE=Iu/4,CE=0,Tp=Math.sqrt,PE=Math.cos,DE=Math.sin,hn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},Ef=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},yf=function(){return typeof window<"u"},Fo=function(e){return zt(e)||hn(e)},bp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,UE=/random\([^)]+\)/g,IE=/,\s*/g,Qh=/(?:-?\.?\d|\.)+/gi,Ap=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wp=/[+-]=-?[.\d]+/,LE=/[^,'"\[\]\s]+/gi,NE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,Pi,Lu,Tf,oi={},_l={},Rp,Cp=function(e){return(_l=Qs(e,oi))&&Yn},bf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xa=function(e,t){return!t&&console.warn(e)},Pp=function(e,t){return e&&(oi[e]=t)&&_l&&(_l[e]=t)||oi},Ya=function(){return 0},FE={suppressEvents:!0,isStart:!0,kill:!1},tl={suppressEvents:!0,kill:!1},OE={suppressEvents:!0},Af={},wr=[],Nu={},Dp,Jn={},Tc={},ed=30,nl=[],wf="",Rf=function(e){var t=e[0],n,r;if(Vi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=nl.length;r--&&!nl[r].targetTest(t););n=nl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new tm(e[r],n)))||e.splice(r,1);return e},ts=function(e){return e._gsap||Rf(mi(e))[0]._gsap},Up=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Ef(n)&&e.getAttribute&&e.getAttribute(t)||n},Vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},ks=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},BE=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},gl=function(){var e=wr.length,t=wr.slice(0),n,r;for(Nu={},wr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Cf=function(e){return!!(e._initted||e._startAt||e.add)},Ip=function(e,t,n,r){wr.length&&!gn&&gl(),e.render(t,n,!!(gn&&t<0&&Cf(e))),wr.length&&!gn&&gl()},Lp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(LE).length<2?t:hn(e)?e.trim():e},Np=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zE=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Qs=function(e,t){for(var n in t)e[n]=t[n];return e},td=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},vl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ca=function(e){var t=e.parent||Ft,n=e.keyframes?zE(Rn(e.keyframes)):li;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kE=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Fp=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ll=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},GE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Fu=function(e,t,n,r){return e._startAt&&(gn?e._startAt.revert(tl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},HE=function i(e){return!e||e._ts&&i(e.parent)},nd=function(e){return e._repeat?ea(e._tTime,e=e.duration()+e._rDelay)*e:0},ea=function(e,t){var n=Math.floor(e=Nt(e/t));return e&&n===e?n-1:n},xl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nl=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nl(e),n._dirty||ns(n,e)),e},Op=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=xl(e.rawTime(),t),(!t._dur||oo(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Li=function(e,t,n,r){return t.parent&&Dr(t),t._start=Nt((ar(n)?n:n||e!==Ft?fi(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Fp(e,t,"_first","_last",e._sort?"_start":0),Ou(t)||(e._recent=t),r||Op(e,t),e._ts<0&&Fl(e,e._tTime),e},Bp=function(e,t){return(oi.ScrollTrigger||bf("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},zp=function(e,t,n,r,s){if(Df(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Dp!==ti.frame)return wr.push(e),e._lazy=[s,r],1},VE=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},WE=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&VE(e)&&!(!e._initted&&Ou(e))||(e._ts<0||e._dp._ts<0)&&!Ou(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=oo(0,e._tDur,t),u=ea(l,o),e._yoyo&&u&1&&(a=1-a),u!==ea(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||gn||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&zp(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Fu(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Dr(e,1),!n&&!gn&&(ii(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},XE=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ta=function(e,t,n,r){var s=e._repeat,a=Nt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Nt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Fl(e,e._tTime=e._tDur*o),e.parent&&Nl(e),n||ns(e.parent,e),e},id=function(e){return e instanceof Fn?ns(e):ta(e,e._dur)},YE={_start:0,endTime:Ya,totalDuration:Ya},fi=function i(e,t,n){var r=e.labels,s=e._recent||YE,a=e.duration()>=pi?s.endTime(!1):e._dur,o,l,c;return hn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Pa=function(e,t,n){var r=ar(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;a.immediateRender=Hn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Yt(t[0],a,t[s+1])},Nr=function(e,t){return e||e===0?t(e):t},oo=function(e,t,n){return n<e?e:n>t?t:n},An=function(e,t){return!hn(e)||!(t=NE.exec(e))?"":t[1]},qE=function(e,t,n){return Nr(n,function(r){return oo(e,t,r)})},Bu=[].slice,kp=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Pi},$E=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return hn(r)&&!t||kp(r,1)?(s=n).push.apply(s,mi(r)):n.push(r)})||n},mi=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):hn(e)&&!n&&(Lu||!na())?Bu.call((t||Tf).querySelectorAll(e),0):Rn(e)?$E(e,n):kp(e)?Bu.call(e,0):e?[e]:[]},zu=function(e){return e=mi(e)[0]||Xa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Xa("Invalid scope")||Tf.createElement("div"):e)}},Gp=function(e){return e.sort(function(){return .5-Math.random()})},Hp=function(e){if(zt(e))return e;var t=Vi(e)?e:{each:e},n=is(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,d=r;return hn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(f,h,_){var g=(_||t).length,p=a[g],m,v,E,S,A,w,b,x,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,pi])[1],!y){for(b=-pi;b<(b=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=a[g]=[],m=l?Math.min(y,g)*u-.5:r%y,v=y===pi?0:l?g*d/y-.5:r/y|0,b=0,x=pi,w=0;w<g;w++)E=w%y-m,S=v-(w/y|0),p[w]=A=c?Math.abs(c==="y"?S:E):Tp(E*E+S*S),A>b&&(b=A),A<x&&(x=A);r==="random"&&Gp(p),p.max=b-x,p.min=x,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=An(t.amount||t.each)||0,n=n&&g<0?Jp(n):n}return g=(p[f]-p.min)/p.max||0,Nt(p.b+(n?n(g):g)*p.v)+p.u}},ku=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Nt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ar(n)?0:An(n))}},Vp=function(e,t){var n=Rn(e),r,s;return!n&&Vi(e)&&(r=n=e.radius||pi,e.values?(e=mi(e.values),(s=!ar(e[0]))&&(r*=r)):e=ku(e.increment)),Nr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:a,s||u===a||ar(a)?u:u+An(a)}:ku(e))},Wp=function(e,t,n,r){return Nr(Rn(e)?!t:n===!0?!!(n=0):!r,function(){return Rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},KE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},ZE=function(e,t){return function(n){return e(parseFloat(n))+(t||An(n))}},jE=function(e,t,n){return Yp(e,t,0,1,n)},Xp=function(e,t,n){return Nr(n,function(r){return e[~~t(r)]})},JE=function i(e,t,n){var r=t-e;return Rn(e)?Xp(e,i(0,e.length),t):Nr(n,function(s){return(r+(s-e)%r)%r+e})},QE=function i(e,t,n){var r=t-e,s=r*2;return Rn(e)?Xp(e,i(0,e.length-1),t):Nr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},qa=function(e){return e.replace(UE,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(IE);return Wp(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Yp=function(e,t,n,r,s){var a=t-e,o=r-n;return Nr(s,function(l){return n+((l-e)/a*o||0)})},ey=function i(e,t,n,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=hn(e),o={},l,c,u,d,f;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Rn(e)&&!Rn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else r||(e=Qs(Rn(e)?[]:{},e));if(!u){for(l in t)Pf.call(o,e,l,"get",t[l]);s=function(_){return Lf(_,o)||(a?e.p:e)}}}return Nr(n,s)},rd=function(e,t,n){var r=e.labels,s=pi,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ii=function(e,t,n){var r=e.vars,s=r[t],a=Ut,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&wr.length&&gl(),o&&(Ut=o),u=l?s.apply(c,l):s.call(c),Ut=a,u},Ea=function(e){return Dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ii(e,"onInterrupt"),e},Fs,qp=[],$p=function(e){if(e)if(e=!e.name&&e.default||e,yf()||e.headless){var t=e.name,n=zt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ya,render:Lf,add:Pf,kill:_y,modifier:my,rawVars:0},a={targetTest:0,get:0,getSetter:If,aliases:{},register:0};if(na(),e!==r){if(Jn[t])return;li(r,li(vl(e,s),a)),Qs(r.prototype,Qs(s,vl(e,a))),Jn[r.prop=t]=r,e.targetTest&&(nl.push(r),Af[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Pp(t,r),e.register&&e.register(Yn,r,Wn)}else qp.push(e)},At=255,ya={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},bc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},Kp=function(e,t,n){var r=e?ar(e)?[e>>16,e>>8&At,e&At]:0:ya.black,s,a,o,l,c,u,d,f,h,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ya[e])r=ya[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&At,r&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Qh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=bc(l+1/3,s,a),r[1]=bc(l,s,a),r[2]=bc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Ap),n&&r.length<4&&(r[3]=1),r}else r=e.match(Qh)||ya.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/At,a=r[1]/At,o=r[2]/At,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Zp=function(e){var t=[],n=[],r=-1;return e.split(Rr).forEach(function(s){var a=s.match(Ns)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},sd=function(e,t,n){var r="",s=(e+r).match(Rr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=Kp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Zp(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Rr,"1").split(Ns),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Rr),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},Rr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ya)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),ty=/hsl[a]?\(/,jp=function(e){var t=e.join(" "),n;if(Rr.lastIndex=0,Rr.test(t))return n=ty.test(t),e[1]=sd(e[1],n),e[0]=sd(e[0],n,Zp(e[1])),!0},$a,ti=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,_=function g(p){var m=i()-r,v=p===!0,E,S,A,w;if((m>e||m<0)&&(n+=m-t),r+=m,A=r-n,E=A-a,(E>0||v)&&(w=++d.frame,f=A-d.time*1e3,d.time=A=A/1e3,a+=E+(E>=s?4:s-E),S=1),v||(l=c(g)),S)for(h=0;h<o.length;h++)o[h](A,f,w,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Rp&&(!Lu&&yf()&&(Pi=Lu=window,Tf=Pi.document||{},oi.gsap=Yn,(Pi.gsapVersions||(Pi.gsapVersions=[])).push(Yn.version),Cp(_l||Pi.GreenSockGlobals||!Pi.gsap&&Pi||{}),qp.forEach($p)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},$a=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),$a=0,c=Ya},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,v){var E=m?function(S,A,w,b){p(S,A,w,b),d.remove(E)}:p;return d.remove(p),o[v?"unshift":"push"](E),na(),E},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},d})(),na=function(){return!$a&&ti.wake()},ct={},ny=/^[\d.\-M][\d.\-,\s]/,iy=/["']/g,ry=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(iy,"").trim():+c,r=l.substr(o+1).trim();return t},sy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},ay=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ry(t[1])]:sy(e).split(",").map(Lp)):ct._CE&&ny.test(e)?ct._CE("",e):n},Jp=function(e){return function(t){return 1-e(1-t)}},Qp=function i(e,t){for(var n=e._first,r;n;)n instanceof Fn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},is=function(e,t){return e&&(zt(e)?e:ct[e]||ay(e))||t},hs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Vn(e,function(o){ct[o]=oi[o]=s,ct[a=o.toLowerCase()]=n;for(var l in s)ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[o+"."+l]=s[l]}),s},em=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ac=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Iu*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*DE((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:em(o);return s=Iu/s,l.config=function(c,u){return i(e,c,u)},l},wc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:em(n);return r.config=function(s){return i(e,s)},r};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;hs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;hs("Elastic",Ac("in"),Ac("out"),Ac());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};hs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);hs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});hs("Circ",function(i){return-(Tp(1-i*i)-1)});hs("Sine",function(i){return i===1?1:-PE(i*RE)+1});hs("Back",wc("in"),wc("out"),wc());ct.SteppedEase=ct.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((r*oo(0,a,o)|0)+s)*n}}};Js.ease=ct["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return wf+=i+","+i+"Params,"});var tm=function(e,t){this.id=CE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Up,this.set=t?t.getSetter:If},Ka=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ta(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),$a||ti.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ta(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(na(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fl(this,n),!s._dp||s.parent||Op(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ip(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ea(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?xl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(oo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Nl(this),GE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(na(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Nt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Li(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=OE);var r=gn;return gn=n,Cf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,id(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,id(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(fi(this,n),Hn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Hn(r)),this._dur||(this._zTime=-wt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=zt(n)?n:Np,l=function(){var u=r.then;r.then=null,s&&s(),zt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ea(this)},i})();li(Ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Fn=(function(i){yp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Hn(n.sortChildren),Ft&&Li(n.parent||Ft,Zi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bp(Zi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Pa(0,arguments,this),this},t.from=function(r,s,a){return Pa(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Pa(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(r,s,fi(this,a),1),this},t.call=function(r,s,a){return Li(this,Yt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Yt(r,a,fi(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Ca(a).immediateRender=Hn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,Ca(o).immediateRender=Hn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Nt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,_,g,p,m,v,E,S,A,w,b;if(this!==Ft&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,S=this._start,E=this._ts,m=!E,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(f=Nt(u%p),u===l?(g=this._repeat,f=c):(A=Nt(u/p),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=ea(this._tTime,p),!o&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),w&&g&1&&(f=c-f,b=1),g!==A&&!this._lock){var x=w&&A&1,y=x===(w&&g&1);if(g<A&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Nt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Qp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=XE(this,Nt(o),Nt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!A&&(ii(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!m){v=0,_&&(u+=this._zTime=-wt);break}}h=_}else{h=this._last;for(var U=r<0?r:f;h;){if(_=h._prev,(h._act||U<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(U-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(U-h._start)*h._ts,s,a||gn&&Cf(h)),f!==this._time||!this._ts&&!m){v=0,_&&(u+=this._zTime=U?-wt:wt);break}}h=_}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-wt)._zTime=f>=o?1:-1,this._ts))return this._start=S,Nl(this),this.render(r,s,a);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Dr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ii(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(ar(s)||(s=fi(this,s,r)),!(r instanceof Ka)){if(Rn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(hn(r))return this.addLabel(r,s);if(zt(r))r=Yt.delayedCall(0,r);else return this}return this!==r?Li(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Yt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return hn(r)?this.removeLabel(r):zt(r)?this.killTweensOf(r):(r.parent===this&&Ll(this,r),r===this._recent&&(this._recent=this._last),ns(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Yt.delayedCall(0,s||Ya,a);return o.data="isPause",this._hasPause=1,Li(this,o,fi(this,r))},t.removePause=function(r){var s=this._first;for(r=fi(this,r);s;)s._start===r&&s.data==="isPause"&&Dr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Er!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=mi(r),l=this._first,c=ar(s),u;l;)l instanceof Yt?BE(l._targets,o)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=fi(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=Yt.to(a,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ta(_,p,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,li({startAt:{time:fi(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),rd(this,fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),rd(this,fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Nt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ns(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ns(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=pi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Li(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Nt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ta(a,a===Ft&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Ft._ts&&(Ip(Ft,xl(r,Ft)),Dp=ti.frame),ti.frame>=ed){ed+=ai.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&ai.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(Ka);li(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var oy=function(e,t,n,r,s,a,o){var l=new Wn(this._pt,e,t,0,1,om,null,s),c=0,u=0,d,f,h,_,g,p,m,v;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=qa(r)),a&&(v=[n,r],a(v,e,t),n=v[0],r=v[1]),f=n.match(yc)||[];d=yc.exec(r);)_=d[0],g=r.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ks(p,_)-p:parseFloat(_)-p,m:h&&h<4?Math.round:0},c=yc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(wp.test(r)||m)&&(l.e=0),this._pt=l,l},Pf=function(e,t,n,r,s,a,o,l,c,u){zt(r)&&(r=r(s||0,e,a));var d=e[t],f=n!=="get"?n:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=zt(d)?c?hy:sm:Uf,_;if(hn(r)&&(~r.indexOf("random(")&&(r=qa(r)),r.charAt(1)==="="&&(_=ks(f,r)+(An(f)||0),(_||_===0)&&(r=_))),!u||f!==r||Gu)return!isNaN(f*r)&&r!==""?(_=new Wn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?py:am,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&bf(t,r),oy.call(this,e,t,f,r,h,l||ai.stringFilter,c))},ly=function(e,t,n,r,s){if(zt(e)&&(e=Da(e,s,t,n,r)),!Vi(e)||e.style&&e.nodeType||Rn(e)||bp(e))return hn(e)?Da(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Da(e[o],s,t,n,r);return a},nm=function(e,t,n,r,s,a){var o,l,c,u;if(Jn[e]&&(o=new Jn[e]).init(s,o.rawVars?t[e]:ly(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Wn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Er,Gu,Df=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,E=e._overwrite==="auto"&&!Mf,S=e.timeline,A,w,b,x,y,U,C,I,z,H,B,k,N;if(S&&(!f||!s)&&(s="none"),e._ease=is(s,Js.ease),e._yEase=d?Jp(is(d===!0?s:d,Js.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(I=p[0]?ts(p[0]).harness:0,k=I&&r[I.prop],A=vl(r,Af),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!h?g.render(-1,!0):g.revert(u&&_?tl:FE),g._lazy=0),a){if(Dr(e._startAt=Yt.set(p,li({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!o&&!h)&&e._startAt.revert(tl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),b=li({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Hn(l),immediateRender:o,stagger:0,parent:m},A),k&&(b[I.prop]=k),Dr(e._startAt=Yt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(tl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Hn(l)||l&&!_,w=0;w<p.length;w++){if(y=p[w],C=y._gsap||Rf(p)[w]._gsap,e._ptLookup[w]=H={},Nu[C.id]&&wr.length&&gl(),B=v===p?w:v.indexOf(y),I&&(z=new I).init(y,k||A,e,B,v)!==!1&&(e._pt=x=new Wn(e._pt,y,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){H[J]=x}),z.priority&&(U=1)),!I||k)for(b in A)Jn[b]&&(z=nm(b,A,e,B,y,v))?z.priority&&(U=1):H[b]=x=Pf.call(e,y,b,"get",A[b],B,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),E&&e._pt&&(Er=e,Ft.killTweensOf(y,H,e.globalTime(t)),N=!e.parent,Er=0),e._pt&&l&&(Nu[C.id]=1)}U&&lm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,f&&t<=0&&S.render(pi,!0,!0)},cy=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Gu=1,e.vars[t]="+=0",Df(e,o),Gu=0,l?Xa(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Ht(n)+An(d.e)),d.b&&(d.b=u.s+An(d.b))},uy=function(e,t){var n=e[0]?ts(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=Qs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},fy=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Da=function(e,t,n,r,s){return zt(e)?e.call(t,n,r,s):hn(e)&&~e.indexOf("random(")?qa(e):e},im=wf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",rm={};Vn(im+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return rm[i]=1});var Yt=(function(i){yp(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Ca(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,v=r.parent||Ft,E=(Rn(n)||bp(n)?ar(n[0]):"length"in r)?[n]:mi(n),S,A,w,b,x,y,U,C;if(o._targets=E.length?Rf(E):Xa("GSAP target "+n+" not found. https://gsap.com",!ai.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||f||Fo(c)||Fo(u)){if(r=o.vars,S=o.timeline=new Fn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:E}),S.kill(),S.parent=S._dp=Zi(o),S._start=0,f||Fo(c)||Fo(u)){if(b=E.length,U=f&&Hp(f),Vi(f))for(x in f)~im.indexOf(x)&&(C||(C={}),C[x]=f[x]);for(A=0;A<b;A++)w=vl(r,rm),w.stagger=0,m&&(w.yoyoEase=m),C&&Qs(w,C),y=E[A],w.duration=+Da(c,Zi(o),A,y,E),w.delay=(+Da(u,Zi(o),A,y,E)||0)-o._delay,!f&&b===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(y,w,U?U(A,y,E):0),S._ease=ct.none;S.duration()?c=u=0:o.timeline=0}else if(_){Ca(li(S.vars.defaults,{ease:"none"})),S._ease=is(_.ease||r.ease||"none");var I=0,z,H,B;if(Rn(_))_.forEach(function(k){return S.to(E,k,">")}),S.duration();else{w={};for(x in _)x==="ease"||x==="easeEach"||fy(x,_[x],w,_.easeEach);for(x in w)for(z=w[x].sort(function(k,N){return k.t-N.t}),I=0,A=0;A<z.length;A++)H=z[A],B={ease:H.e,duration:(H.t-(A?z[A-1].t:0))/100*c},B[x]=H.v,S.to(E,B,I),I+=B.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return h===!0&&!Mf&&(Er=Zi(o),Ft.killTweensOf(E),Er=0),Li(v,Zi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!_&&o._start===Nt(v._time)&&Hn(d)&&HE(Zi(o))&&v.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),p&&Bp(Zi(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-wt&&!u?l:r<wt?0:r,f,h,_,g,p,m,v,E,S;if(!c)WE(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(f=Nt(d%g),d===l?(_=this._repeat,f=c):(p=Nt(d/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,f=c-f),p=ea(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&(E&&this._yEase&&Qp(E,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Nt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(zp(this,u?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!o&&d&&!s&&!p&&(ii(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;E&&E.render(r<0?r:E._dur*E._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Fu(this,r,s,a),ii(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Fu(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Dr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(ii(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){$a||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Df(this,c),u=this._ease(c/this._dur),cy(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Fl(this,0),this.parent||Fp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Er&&Er.vars.overwrite!==!0)._first||Ea(this),this.parent&&a!==this.timeline.totalDuration()&&ta(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?mi(r):o,c=this._ptLookup,u=this._pt,d,f,h,_,g,p,m;if((!s||s==="all")&&kE(o,l))return s==="all"&&(this._pt=0),Ea(this);for(d=this._op=this._op||[],s!=="all"&&(hn(s)&&(g={},Vn(s,function(v){return g[v]=1}),s=g),s=uy(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,_=f,h={}):(h=d[m]=d[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ll(this,p,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&Ea(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Pa(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Pa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Ft.killTweensOf(r,s,a)},e})(Ka);li(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(i){Yt[i]=function(){var e=new Fn,t=Bu.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Uf=function(e,t,n){return e[t]=n},sm=function(e,t,n){return e[t](n)},hy=function(e,t,n,r){return e[t](r.fp,n)},dy=function(e,t,n){return e.setAttribute(t,n)},If=function(e,t){return zt(e[t])?sm:Ef(e[t])&&e.setAttribute?dy:Uf},am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},py=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},om=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Lf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},my=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},_y=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ll(this,t,"_pt"):t.dep||(n=1),t=r;return!n},gy=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},lm=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Wn=(function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||am,this.d=l||this,this.set=c||Uf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=gy,this.m=n,this.mt=s,this.tween=r},i})();Vn(wf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Af[i]=1});oi.TweenMax=oi.TweenLite=Yt;oi.TimelineLite=oi.TimelineMax=Fn;Ft=new Fn({sortChildren:!1,defaults:Js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=jp;var rs=[],il={},vy=[],ad=0,xy=0,Rc=function(e){return(il[e]||vy).map(function(t){return t()})},Hu=function(){var e=Date.now(),t=[];e-ad>2&&(Rc("matchMediaInit"),rs.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Pi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),ad=e,Rc("matchMedia"))},cm=(function(){function i(t,n){this.selector=n&&zu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xy++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){zt(n)&&(s=r,r=n,n=zt);var a=this,o=function(){var c=Ut,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=zu(s)),Ut=a,d=r.apply(a,arguments),zt(d)&&a._r.push(d),Ut=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Ut;Ut=null,n(this),Ut=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Yt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=rs.length;a--;)rs[a].id===this.id&&rs.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),Sy=(function(){function i(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Vi(n)||(n={matches:n});var a=new cm(0,s||this.scope),o=a.conditions={},l,c,u;Ut&&!a.selector&&(a.selector=Ut.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Pi.matchMedia(n[c]),l&&(rs.indexOf(a)<0&&rs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hu):l.addEventListener("change",Hu)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Sl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return $p(r)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,r){hn(e)&&(e=mi(e)[0]);var s=ts(e||{}).get,a=n?Np:Lp;return n==="native"&&(n=""),e&&(t?a((Jn[t]&&Jn[t].get||s)(e,t,n,r)):function(o,l,c){return a((Jn[o]&&Jn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var r=e.map(function(u){return Yn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=Jn[t],o=ts(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Fs._pt=0,d.init(e,n?u+n:u,Fs,0,[e]),d.render(1,d),Fs._pt&&Lf(1,Fs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=Yn.to(e,li((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=is(e.ease,Js.ease)),td(Js,e||{})},config:function(e){return td(ai,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Jn[o]&&!oi[o]&&Xa(t+" effect requires "+o+" plugin.")}),Tc[t]=function(o,l,c){return n(mi(o),li(l||{},s),c)},a&&(Fn.prototype[t]=function(o,l,c){return this.add(Tc[t](o,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=is(t)},parseEase:function(e,t){return arguments.length?is(e,t):ct},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Fn(e),r,s;for(n.smoothChildTiming=Hn(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,r=Ft._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Yt&&r.vars.onComplete===r._targets[0]))&&Li(n,r,r._start-r._delay),r=s;return Li(Ft,n,0),n},context:function(e,t){return e?new cm(e,t):Ut},matchMedia:function(e){return new Sy(e)},matchMediaRefresh:function(){return rs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Hu()},addEventListener:function(e,t){var n=il[e]||(il[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=il[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:JE,wrapYoyo:QE,distribute:Hp,random:Wp,snap:Vp,normalize:jE,getUnit:An,clamp:qE,splitColor:Kp,toArray:mi,selector:zu,mapRange:Yp,pipe:KE,unitize:ZE,interpolate:ey,shuffle:Gp},install:Cp,effects:Tc,ticker:ti,updateRoot:Fn.updateRoot,plugins:Jn,globalTimeline:Ft,core:{PropTween:Wn,globals:Pp,Tween:Yt,Timeline:Fn,Animation:Ka,getCache:ts,_removeLinkedListItem:Ll,reverting:function(){return gn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return Mf=e}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Sl[i]=Yt[i]});ti.add(Fn.updateRoot);Fs=Sl.to({},{duration:0});var My=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ey=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=My(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Cc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(hn(s)&&(l={},Vn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Ey(o,s)}}}},Yn=Sl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cc("roundProps",ku),Cc("modifiers"),Cc("snap",Vp))||Sl;Yt.version=Fn.version=Yn.version="3.14.2";Rp=1;yf()&&na();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;var od,yr,Gs,Nf,Jr,ld,Ff,yy=function(){return typeof window<"u"},or={},Yr=180/Math.PI,Hs=Math.PI/180,Ps=Math.atan2,cd=1e8,Of=/([A-Z])/g,Ty=/(left|right|width|margin|padding|x)/i,by=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ay=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ry=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},um=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},fm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Py=function(e,t,n){return e.style[t]=n},Dy=function(e,t,n){return e.style.setProperty(t,n)},Uy=function(e,t,n){return e._gsap[t]=n},Iy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ly=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Ny=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ot="transform",Xn=Ot+"Origin",Fy=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ji(r,o)}):this.tfm[e]=a.x?a[e]:ji(r,e),e===Xn&&(this.tfm.zOrigin=a.zOrigin);else return Bi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Ot)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},hm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Oy=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Of,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ff(),(!s||!s.isStart)&&!n[Ot]&&(hm(n),r.zOrigin&&n[Xn]&&(n[Xn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},dm=function(e,t){var n={target:e,props:[],revert:Oy,save:Fy};return e._gsap||Yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},pm,Wu=function(e,t){var n=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return n&&n.style?n:yr.createElement(e)},ri=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Of,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ia(t)||t,1)||""},ud="O,Moz,ms,Ms,Webkit".split(","),ia=function(e,t,n){var r=t||Jr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ud[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ud[a]:"")+e},Xu=function(){yy()&&window.document&&(od=window,yr=od.document,Gs=yr.documentElement,Jr=Wu("div")||{style:{}},Wu("div"),Ot=ia(Ot),Xn=Ot+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pm=!!ia("perspective"),Ff=Yn.core.reverting,Nf=1)},fd=function(e){var t=e.ownerSVGElement,n=Wu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Gs.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Gs.removeChild(n),s},hd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mm=function(e){var t,n;try{t=e.getBBox()}catch{t=fd(e),n=1}return t&&(t.width||t.height)||n||(t=fd(e)),t&&!t.width&&!t.x&&!t.y?{x:+hd(e,["x","cx","x1"])||0,y:+hd(e,["y","cy","y1"])||0,width:0,height:0}:t},_m=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mm(e))},Ur=function(e,t){if(t){var n=e.style,r;t in or&&t!==Xn&&(t=Ot),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Of,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,r,s,a){var o=new Wn(e._pt,t,n,0,1,a?fm:um);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},dd={deg:1,rad:1,turn:1},By={grid:1,flex:1},Ir=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Jr.style,l=Ty.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",_,g,p,m;if(r===a||!s||dd[r]||dd[a])return s;if(a!=="px"&&!f&&(s=i(e,t,n,"px")),m=e.getCTM&&_m(e),(h||a==="%")&&(or[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Ht(h?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===yr||!g.appendChild)&&(g=yr.body),p=g._gsap,p&&h&&p.width&&l&&p.time===ti.time&&!p.uncache)return Ht(s/p.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[u],v?e.style[t]=v:Ur(e,t)}else(h||a==="%")&&!By[ri(g,"display")]&&(o.position=ri(e,"position")),g===e&&(o.position="static"),g.appendChild(Jr),_=Jr[u],g.removeChild(Jr),o.position="absolute";return l&&h&&(p=ts(g),p.time=ti.time,p.width=g[u]),Ht(f?_*s/d:_&&s?d/_*s:0)},ji=function(e,t,n,r){var s;return Nf||Xu(),t in Bi&&t!=="transform"&&(t=Bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=ja(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:El(ri(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ml[t]&&Ml[t](e,t,n)||ri(e,t)||Up(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ir(e,t,s,n)+n:s},zy=function(e,t,n,r){if(!n||n==="none"){var s=ia(t,e,1),a=s&&ri(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ri(e,"borderTopColor"))}var o=new Wn(this._pt,e.style,t,0,1,om),l=0,c=0,u,d,f,h,_,g,p,m,v,E,S,A;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ri(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=ri(e,t)||r,g?e.style[t]=g:Ur(e,t)),u=[n,r],jp(u),n=u[0],r=u[1],f=n.match(Ns)||[],A=r.match(Ns)||[],A.length){for(;d=Ns.exec(r);)p=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(h=parseFloat(g)||0,S=g.substr((h+"").length),p.charAt(1)==="="&&(p=ks(h,p)+S),m=parseFloat(p),E=p.substr((m+"").length),l=Ns.lastIndex-E.length,E||(E=E||ai.units[t]||S,l===r.length&&(r+=E,o.e+=E)),S!==E&&(h=Ir(e,t,g,E)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:h,c:m-h,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?fm:um;return wp.test(r)&&(o.e=0),this._pt=o,o},pd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ky=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=pd[n]||n,t[1]=pd[r]||r,t.join(" ")},Gy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],or[o]&&(l=1,o=o==="transformOrigin"?Xn:Ot),Ur(n,o);l&&(Ur(n,Ot),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ja(n,1),a.uncache=1,hm(r)))}},Ml={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Wn(e._pt,t,n,0,0,Gy);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Za=[1,0,0,1,0,0],gm={},vm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},md=function(e){var t=ri(e,Ot);return vm(t)?Za:t.substr(7).match(Ap).map(Ht)},Bf=function(e,t){var n=e._gsap||ts(e),r=e.style,s=md(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Za:s):(s===Za&&!e.offsetParent&&e!==Gs&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Gs.appendChild(e)),s=md(e),l?r.display=l:Ur(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Gs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yu=function(e,t,n,r,s,a){var o=e._gsap,l=s||Bf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],_=l[1],g=l[2],p=l[3],m=l[4],v=l[5],E=t.split(" "),S=parseFloat(E[0])||0,A=parseFloat(E[1])||0,w,b,x,y;n?l!==Za&&(b=h*p-_*g)&&(x=S*(p/b)+A*(-g/b)+(g*v-p*m)/b,y=S*(-_/b)+A*(h/b)-(h*v-_*m)/b,S=x,A=y):(w=mm(e),S=w.x+(~E[0].indexOf("%")?S/100*w.width:S),A=w.y+(~(E[1]||E[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&o.smooth?(m=S-c,v=A-u,o.xOffset=d+(m*h+v*g)-m,o.yOffset=f+(m*_+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=A,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Xn]="0px 0px",a&&(Tr(a,o,"xOrigin",c,S),Tr(a,o,"yOrigin",u,A),Tr(a,o,"xOffset",d,o.xOffset),Tr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+A)},ja=function(e,t){var n=e._gsap||new tm(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ri(e,Xn)||"0",u,d,f,h,_,g,p,m,v,E,S,A,w,b,x,y,U,C,I,z,H,B,k,N,J,Q,P,le,ce,Be,He,qe;return u=d=f=g=p=m=v=E=S=0,h=_=1,n.svg=!!(e.getCTM&&_m(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),r.scale=r.rotate=r.translate="none"),b=Bf(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",N=""):N=!t&&e.getAttribute("data-svg-origin"),Yu(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==Za&&(C=b[0],I=b[1],z=b[2],H=b[3],u=B=b[4],d=k=b[5],b.length===6?(h=Math.sqrt(C*C+I*I),_=Math.sqrt(H*H+z*z),g=C||I?Ps(I,C)*Yr:0,v=z||H?Ps(z,H)*Yr+g:0,v&&(_*=Math.abs(Math.cos(v*Hs))),n.svg&&(u-=A-(A*C+w*z),d-=w-(A*I+w*H))):(qe=b[6],Be=b[7],P=b[8],le=b[9],ce=b[10],He=b[11],u=b[12],d=b[13],f=b[14],x=Ps(qe,ce),p=x*Yr,x&&(y=Math.cos(-x),U=Math.sin(-x),N=B*y+P*U,J=k*y+le*U,Q=qe*y+ce*U,P=B*-U+P*y,le=k*-U+le*y,ce=qe*-U+ce*y,He=Be*-U+He*y,B=N,k=J,qe=Q),x=Ps(-z,ce),m=x*Yr,x&&(y=Math.cos(-x),U=Math.sin(-x),N=C*y-P*U,J=I*y-le*U,Q=z*y-ce*U,He=H*U+He*y,C=N,I=J,z=Q),x=Ps(I,C),g=x*Yr,x&&(y=Math.cos(x),U=Math.sin(x),N=C*y+I*U,J=B*y+k*U,I=I*y-C*U,k=k*y-B*U,C=N,B=J),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),h=Ht(Math.sqrt(C*C+I*I+z*z)),_=Ht(Math.sqrt(k*k+qe*qe)),x=Ps(B,k),v=Math.abs(x)>2e-4?x*Yr:0,S=He?1/(He<0?-He:He):0),n.svg&&(N=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vm(ri(e,Ot)),N&&e.setAttribute("transform",N))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ht(h),n.scaleY=Ht(_),n.rotation=Ht(g)+o,n.rotationX=Ht(p)+o,n.rotationY=Ht(m)+o,n.skewX=v+o,n.skewY=E+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Xn]=El(c)),n.xOffset=n.yOffset=0,n.force3D=ai.force3D,n.renderTransform=n.svg?Vy:pm?xm:Hy,n.uncache=0,n},El=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pc=function(e,t,n){var r=An(t);return Ht(parseFloat(t)+parseFloat(Ir(e,"x",n+"px",r)))+r},Hy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xm(e,t)},Vr="0deg",ga="0px",Wr=") ",xm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,E=n.zOrigin,S="",A=m==="auto"&&e&&e!==1||m===!0;if(E&&(d!==Vr||u!==Vr)){var w=parseFloat(u)*Hs,b=Math.sin(w),x=Math.cos(w),y;w=parseFloat(d)*Hs,y=Math.cos(w),a=Pc(v,a,b*y*-E),o=Pc(v,o,-Math.sin(w)*-E),l=Pc(v,l,x*y*-E+E)}p!==ga&&(S+="perspective("+p+Wr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(A||a!==ga||o!==ga||l!==ga)&&(S+=l!==ga||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Wr),c!==Vr&&(S+="rotate("+c+Wr),u!==Vr&&(S+="rotateY("+u+Wr),d!==Vr&&(S+="rotateX("+d+Wr),(f!==Vr||h!==Vr)&&(S+="skew("+f+", "+h+Wr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Wr),v.style[Ot]=S||"translate(0, 0)"},Vy=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,E=parseFloat(a),S=parseFloat(o),A,w,b,x,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Hs,c*=Hs,A=Math.cos(l)*d,w=Math.sin(l)*d,b=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Hs,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,x*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,w*=y)),A=Ht(A),w=Ht(w),b=Ht(b),x=Ht(x)):(A=d,x=f,w=b=0),(E&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(E=Ir(h,"x",a,"px"),S=Ir(h,"y",o,"px")),(_||g||p||m)&&(E=Ht(E+_-(_*A+g*b)+p),S=Ht(S+g-(_*w+g*x)+m)),(r||s)&&(y=h.getBBox(),E=Ht(E+r/100*y.width),S=Ht(S+s/100*y.height)),y="matrix("+A+","+w+","+b+","+x+","+E+","+S+")",h.setAttribute("transform",y),v&&(h.style[Ot]=y)},Wy=function(e,t,n,r,s){var a=360,o=hn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Yr:1),c=l-r,u=r+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*cd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*cd)%a-~~(c/a)*a)),e._pt=f=new Wn(e._pt,t,n,r,c,Ay),f.e=u,f.u="deg",e._props.push(n),f},_d=function(e,t){for(var n in t)e[n]=t[n];return e},Xy=function(e,t,n){var r=_d({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ot]=t,o=ja(n,1),Ur(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],a[Ot]=t,o=ja(n,1),a[Ot]=c);for(l in or)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=An(c),_=An(u),d=h!==_?Ir(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Wn(e._pt,o,l,d,f-d,Vu),e._pt.u=_||0,e._props.push(l));_d(o,r)};Vn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Ml[e>1?"border"+i:i]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(_){return ji(o,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(_,g){return h[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,h,d)}});var Sm={name:"css",register:Xu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,_,g,p,m,v,E,S,A,w,b,x,y;Nf||Xu(),this.styles=this.styles||dm(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Jn[g]&&nm(g,t,n,r,e,s)))){if(h=typeof u,_=Ml[g],h==="function"&&(u=u.call(n,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=qa(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(p=An(c),m=An(u),m?p!==m&&(c=Ir(e,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),x.push(g,0,o[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],hn(c)&&~c.indexOf("random(")&&(c=qa(c)),An(c+"")||c==="auto"||(c+=ai.units[g]||An(ji(e,g))||""),(c+"").charAt(1)==="="&&(c=ji(e,g))):c=ji(e,g),f=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),g in Bi&&(g==="autoAlpha"&&(f===1&&ji(e,"visibility")==="hidden"&&d&&(f=0),x.push("visibility",0,o.visibility),Tr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Bi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in or,E){if(this.styles.save(g),y=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=ri(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var U=e.style.perspective;e.style.perspective=u,u=ri(e,"perspective"),U?e.style.perspective=U:Ur(e,"perspective")}d=parseFloat(u)}if(S||(A=e._gsap,A.renderTransform&&!t.parseTransform||ja(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,S=this._pt=new Wn(this._pt,o,Ot,0,1,A.renderTransform,A,0,-1),S.dep=1),g==="scale")this._pt=new Wn(this._pt,A,"scaleY",A.scaleY,(v?ks(A.scaleY,v+d):d)-A.scaleY||0,Vu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(Xn,0,o[Xn]),u=ky(u),A.svg?Yu(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Tr(this,A,"zOrigin",A.zOrigin,m),Tr(this,o,g,El(c),El(u)));continue}else if(g==="svgOrigin"){Yu(e,u,1,w,0,this);continue}else if(g in gm){Wy(this,A,g,f,v?ks(f,v+u):u);continue}else if(g==="smoothOrigin"){Tr(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){Xy(this,u,e);continue}}else g in o||(g=ia(g)||g);if(E||(d||d===0)&&(f||f===0)&&!by.test(u)&&g in o)p=(c+"").substr((f+"").length),d||(d=0),m=An(u)||(g in ai.units?ai.units[g]:p),p!==m&&(f=Ir(e,g,c,m)),this._pt=new Wn(this._pt,E?A:o,g,f,(v?ks(f,v+d):d)-f,!E&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?Cy:Vu),this._pt.u=m||0,E&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=Ry):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=wy);else if(g in o)zy.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,r,s);else if(g!=="parseTransform"){bf(g,u);continue}E||(g in o?x.push(g,0,o[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),a.push(g)}}b&&lm(this)},render:function(e,t){if(t.tween._time||!Ff())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ji,aliases:Bi,getSetter:function(e,t,n){var r=Bi[t];return r&&r.indexOf(",")<0&&(t=r),t in or&&t!==Xn&&(e._gsap.x||ji(e,"x"))?n&&ld===n?t==="scale"?Iy:Uy:(ld=n||{})&&(t==="scale"?Ly:Ny):e.style&&!Ef(e.style[t])?Py:~t.indexOf("-")?Dy:If(e,t)},core:{_removeProperty:Ur,_getMatrix:Bf}};Yn.utils.checkPrefix=ia;Yn.core.getStyleSaver=dm;(function(i,e,t,n){var r=Vn(i+","+e+","+t,function(s){or[s]=1});Vn(e,function(s){ai.units[s]="deg",gm[s]=1}),Bi[r[13]]=i+","+e,Vn(n,function(s){var a=s.split(":");Bi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ai.units[i]="px"});Yn.registerPlugin(Sm);var Ua=Yn.registerPlugin(Sm)||Yn;Ua.core.Tween;function Yy(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function qy(i,e,t){return e&&Yy(i.prototype,e),i}var mn,rl,ni,br,Ar,Vs,Mm,qr,Ia,Em,er,Mi,ym,Tm=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},bm=1,Os=[],rt=[],Gi=[],La=Date.now,qu=function(e,t){return t},$y=function(){var e=Ia.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,rt),r.push.apply(r,Gi),rt=n,Gi=r,qu=function(a,o){return t[a](o)}},Cr=function(e,t){return~Gi.indexOf(e)&&Gi[Gi.indexOf(e)+1][t]},Na=function(e){return!!~Em.indexOf(e)},Dn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Pn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Oo="scrollLeft",Bo="scrollTop",$u=function(){return er&&er.isPressed||rt.cache++},yl=function(e,t){var n=function r(s){if(s||s===0){bm&&(ni.history.scrollRestoration="manual");var a=er&&er.isPressed;s=r.v=Math.round(s)||(er&&er.iOS?1:0),e(s),r.cacheID=rt.cache,a&&qu("ss",s)}else(t||rt.cache!==r.cacheID||qu("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},On={s:Oo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yl(function(i){return arguments.length?ni.scrollTo(i,Qt.sc()):ni.pageXOffset||br[Oo]||Ar[Oo]||Vs[Oo]||0})},Qt={s:Bo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:yl(function(i){return arguments.length?ni.scrollTo(On.sc(),i):ni.pageYOffset||br[Bo]||Ar[Bo]||Vs[Bo]||0})},kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ky=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Lr=function(e,t){var n=t.s,r=t.sc;Na(e)&&(e=br.scrollingElement||Ar);var s=rt.indexOf(e),a=r===Qt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Dn(e,"scroll",$u);var o=rt[s+a],l=o||(rt[s+a]=yl(Cr(e,n),!0)||(Na(e)?r:yl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},Ku=function(e,t,n){var r=e,s=e,a=La(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=La();g||p-a>l?(s=r,r=_,o=a,a=p):n?r+=_:r=s+(_-s)/(p-o)*(a-o)},d=function(){s=r=n?0:r,o=a=0},f=function(_){var g=o,p=s,m=La();return(_||_===0)&&_!==r&&u(_),a===o||m-o>c?0:(r+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:d,getVelocity:f}},va=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},gd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Am=function(){Ia=mn.core.globals().ScrollTrigger,Ia&&Ia.core&&$y()},wm=function(e){return mn=e||Tm(),!rl&&mn&&typeof document<"u"&&document.body&&(ni=window,br=document,Ar=br.documentElement,Vs=br.body,Em=[ni,br,Ar,Vs],mn.utils.clamp,ym=mn.core.context||function(){},qr="onpointerenter"in Vs?"pointer":"mouse",Mm=Vt.isTouch=ni.matchMedia&&ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=Vt.eventTypes=("ontouchstart"in Ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bm=0},500),Am(),rl=1),rl};On.op=Qt;rt.cache=0;var Vt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){rl||wm(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Ia||Am();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,v=n.onDrag,E=n.onPress,S=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,x=n.onDown,y=n.onChangeX,U=n.onChangeY,C=n.onChange,I=n.onToggleX,z=n.onToggleY,H=n.onHover,B=n.onHoverEnd,k=n.onMove,N=n.ignoreCheck,J=n.isNormalizer,Q=n.onGestureStart,P=n.onGestureEnd,le=n.onWheel,ce=n.onEnable,Be=n.onDisable,He=n.onClick,qe=n.scrollSpeed,K=n.capture,ee=n.allowClicks,re=n.lockAxis,Ue=n.onLockAxis;this.target=o=kn(o)||Ar,this.vars=n,h&&(h=mn.utils.toArray(h)),r=r||1e-9,s=s||0,_=_||1,qe=qe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ni.getComputedStyle(Vs).lineHeight)||22);var Ie,Re,ut,ye,ze,Ke,Oe,X=this,L=0,gt=0,et=n.passive||!u&&n.passive!==!1,ke=Lr(o,On),xe=Lr(o,Qt),R=ke(),M=xe(),F=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Mi[0]==="pointerdown",Z=Na(o),j=o.ownerDocument||br,q=[0,0,0],ge=[0,0,0],ae=0,Ce=function(){return ae=La()},Se=function(Pe,je){return(X.event=Pe)&&h&&Ky(Pe.target,h)||je&&F&&Pe.pointerType!=="touch"||N&&N(Pe,je)},ne=function(){X._vx.reset(),X._vy.reset(),Re.pause(),d&&d(X)},se=function(){var Pe=X.deltaX=gd(q),je=X.deltaY=gd(ge),me=Math.abs(Pe)>=r,We=Math.abs(je)>=r;C&&(me||We)&&C(X,Pe,je,q,ge),me&&(A&&X.deltaX>0&&A(X),w&&X.deltaX<0&&w(X),y&&y(X),I&&X.deltaX<0!=L<0&&I(X),L=X.deltaX,q[0]=q[1]=q[2]=0),We&&(x&&X.deltaY>0&&x(X),b&&X.deltaY<0&&b(X),U&&U(X),z&&X.deltaY<0!=gt<0&&z(X),gt=X.deltaY,ge[0]=ge[1]=ge[2]=0),(ye||ut)&&(k&&k(X),ut&&(p&&ut===1&&p(X),v&&v(X),ut=0),ye=!1),Ke&&!(Ke=!1)&&Ue&&Ue(X),ze&&(le(X),ze=!1),Ie=0},Me=function(Pe,je,me){q[me]+=Pe,ge[me]+=je,X._vx.update(Pe),X._vy.update(je),c?Ie||(Ie=requestAnimationFrame(se)):se()},Te=function(Pe,je){re&&!Oe&&(X.axis=Oe=Math.abs(Pe)>Math.abs(je)?"x":"y",Ke=!0),Oe!=="y"&&(q[2]+=Pe,X._vx.update(Pe,!0)),Oe!=="x"&&(ge[2]+=je,X._vy.update(je,!0)),c?Ie||(Ie=requestAnimationFrame(se)):se()},he=function(Pe){if(!Se(Pe,1)){Pe=va(Pe,u);var je=Pe.clientX,me=Pe.clientY,We=je-X.x,Fe=me-X.y,Xe=X.isDragging;X.x=je,X.y=me,(Xe||(We||Fe)&&(Math.abs(X.startX-je)>=s||Math.abs(X.startY-me)>=s))&&(ut||(ut=Xe?2:1),Xe||(X.isDragging=!0),Te(We,Fe))}},Ve=X.onPress=function(ve){Se(ve,1)||ve&&ve.button||(X.axis=Oe=null,Re.pause(),X.isPressed=!0,ve=va(ve),L=gt=0,X.startX=X.x=ve.clientX,X.startY=X.y=ve.clientY,X._vx.reset(),X._vy.reset(),Dn(J?o:j,Mi[1],he,et,!0),X.deltaX=X.deltaY=0,E&&E(X))},D=X.onRelease=function(ve){if(!Se(ve,1)){Pn(J?o:j,Mi[1],he,!0);var Pe=!isNaN(X.y-X.startY),je=X.isDragging,me=je&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),We=va(ve);!me&&Pe&&(X._vx.reset(),X._vy.reset(),u&&ee&&mn.delayedCall(.08,function(){if(La()-ae>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(j.createEvent){var Fe=j.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,ni,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Fe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&je&&!J&&Re.restart(!0),ut&&se(),m&&je&&m(X),S&&S(X,me)}},oe=function(Pe){return Pe.touches&&Pe.touches.length>1&&(X.isGesturing=!0)&&Q(Pe,X.isDragging)},ie=function(){return(X.isGesturing=!1)||P(X)},de=function(Pe){if(!Se(Pe)){var je=ke(),me=xe();Me((je-R)*qe,(me-M)*qe,1),R=je,M=me,d&&Re.restart(!0)}},te=function(Pe){if(!Se(Pe)){Pe=va(Pe,u),le&&(ze=!0);var je=(Pe.deltaMode===1?l:Pe.deltaMode===2?ni.innerHeight:1)*_;Me(Pe.deltaX*je,Pe.deltaY*je,0),d&&!J&&Re.restart(!0)}},$=function(Pe){if(!Se(Pe)){var je=Pe.clientX,me=Pe.clientY,We=je-X.x,Fe=me-X.y;X.x=je,X.y=me,ye=!0,d&&Re.restart(!0),(We||Fe)&&Te(We,Fe)}},Ee=function(Pe){X.event=Pe,H(X)},Ne=function(Pe){X.event=Pe,B(X)},ht=function(Pe){return Se(Pe)||va(Pe,u)&&He(X)};Re=X._dc=mn.delayedCall(f||.25,ne).pause(),X.deltaX=X.deltaY=0,X._vx=Ku(0,50,!0),X._vy=Ku(0,50,!0),X.scrollX=ke,X.scrollY=xe,X.isDragging=X.isGesturing=X.isPressed=!1,ym(this),X.enable=function(ve){return X.isEnabled||(Dn(Z?j:o,"scroll",$u),a.indexOf("scroll")>=0&&Dn(Z?j:o,"scroll",de,et,K),a.indexOf("wheel")>=0&&Dn(o,"wheel",te,et,K),(a.indexOf("touch")>=0&&Mm||a.indexOf("pointer")>=0)&&(Dn(o,Mi[0],Ve,et,K),Dn(j,Mi[2],D),Dn(j,Mi[3],D),ee&&Dn(o,"click",Ce,!0,!0),He&&Dn(o,"click",ht),Q&&Dn(j,"gesturestart",oe),P&&Dn(j,"gestureend",ie),H&&Dn(o,qr+"enter",Ee),B&&Dn(o,qr+"leave",Ne),k&&Dn(o,qr+"move",$)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=ye=ut=!1,X._vx.reset(),X._vy.reset(),R=ke(),M=xe(),ve&&ve.type&&Ve(ve),ce&&ce(X)),X},X.disable=function(){X.isEnabled&&(Os.filter(function(ve){return ve!==X&&Na(ve.target)}).length||Pn(Z?j:o,"scroll",$u),X.isPressed&&(X._vx.reset(),X._vy.reset(),Pn(J?o:j,Mi[1],he,!0)),Pn(Z?j:o,"scroll",de,K),Pn(o,"wheel",te,K),Pn(o,Mi[0],Ve,K),Pn(j,Mi[2],D),Pn(j,Mi[3],D),Pn(o,"click",Ce,!0),Pn(o,"click",ht),Pn(j,"gesturestart",oe),Pn(j,"gestureend",ie),Pn(o,qr+"enter",Ee),Pn(o,qr+"leave",Ne),Pn(o,qr+"move",$),X.isEnabled=X.isPressed=X.isDragging=!1,Be&&Be(X))},X.kill=X.revert=function(){X.disable();var ve=Os.indexOf(X);ve>=0&&Os.splice(ve,1),er===X&&(er=0)},Os.push(X),J&&Na(o)&&(er=X),X.enable(g)},qy(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Vt.version="3.14.2";Vt.create=function(i){return new Vt(i)};Vt.register=wm;Vt.getAll=function(){return Os.slice()};Vt.getById=function(i){return Os.filter(function(e){return e.vars.id===i})[0]};Tm()&&mn.registerPlugin(Vt);var we,Is,it,Ct,Qn,xt,zf,Tl,Ja,Fa,Ta,zo,Tn,Ol,Zu,Ln,vd,xd,Ls,Rm,Dc,Cm,In,ju,Pm,Dm,xr,Ju,kf,Ws,Gf,Oa,Qu,Uc,ko=1,bn=Date.now,Ic=bn(),_i=0,ba=0,Sd=function(e,t,n){var r=jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Md=function(e,t){return t&&(!jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Zy=function i(){return ba&&requestAnimationFrame(i)},Ed=function(){return Ol=1},yd=function(){return Ol=0},Di=function(e){return e},Aa=function(e){return Math.round(e*1e5)/1e5||0},Um=function(){return typeof window<"u"},Im=function(){return we||Um()&&(we=window.gsap)&&we.registerPlugin&&we},cs=function(e){return!!~zf.indexOf(e)},Lm=function(e){return(e==="Height"?Gf:it["inner"+e])||Qn["client"+e]||xt["client"+e]},Nm=function(e){return Cr(e,"getBoundingClientRect")||(cs(e)?function(){return cl.width=it.innerWidth,cl.height=Gf,cl}:function(){return Ji(e)})},jy=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=Cr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?Lm(s):e["client"+s])||0}},Jy=function(e,t){return!t||~Gi.indexOf(e)?Nm(e):function(){return cl}},zi=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=Cr(e,n))?a()-Nm(e)()[s]:cs(e)?(Qn[n]||xt[n])-Lm(r):e[n]-e["offset"+r])},Go=function(e,t){for(var n=0;n<Ls.length;n+=3)(!t||~t.indexOf(Ls[n+1]))&&e(Ls[n],Ls[n+1],Ls[n+2])},jn=function(e){return typeof e=="string"},wn=function(e){return typeof e=="function"},wa=function(e){return typeof e=="number"},$r=function(e){return typeof e=="object"},xa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Lc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ds=Math.abs,Fm="left",Om="top",Hf="right",Vf="bottom",ss="width",as="height",Ba="Right",za="Left",ka="Top",Ga="Bottom",Xt="padding",hi="margin",ra="Width",Wf="Height",Jt="px",di=function(e){return it.getComputedStyle(e)},Qy=function(e){var t=di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Td=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ji=function(e,t){var n=t&&di(e)[Zu]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},bl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Bm=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},eT=function(e){return function(t){return we.utils.snap(Bm(e),t)}},Xf=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},tT=function(e){return function(t,n){return Xf(Bm(e))(t,n.direction)}},Ho=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},ln=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},on=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Vo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},bd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wo={toggleActions:"play",anticipatePin:0},Al={top:0,left:0,center:.5,bottom:1,right:1},sl=function(e,t){if(jn(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Al?Al[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Xo=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=Ct.createElement("div"),g=cs(n)||Cr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?xt:n,v=e.indexOf("start")!==-1,E=v?c:u,S="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(r===Qt?Hf:Vf)+":"+(a+parseFloat(f))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+r.op.d2],al(_,0,r,v),_},al=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+ra]=1,s["border"+o+ra]=0,s[n.p]=t+"px",we.set(e,s)},nt=[],ef={},Qa,Ad=function(){return bn()-_i>34&&(Qa||(Qa=requestAnimationFrame(nr)))},Us=function(){(!In||!In.isPressed||In.startX>xt.clientWidth)&&(rt.cache++,In?Qa||(Qa=requestAnimationFrame(nr)):nr(),_i||fs("scrollStart"),_i=bn())},Nc=function(){Dm=it.innerWidth,Pm=it.innerHeight},Ra=function(e){rt.cache++,(e===!0||!Tn&&!Cm&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!ju||Dm!==it.innerWidth||Math.abs(it.innerHeight-Pm)>it.innerHeight*.25))&&Tl.restart(!0)},us={},nT=[],zm=function i(){return on(at,"scrollEnd",i)||Qr(!0)},fs=function(e){return us[e]&&us[e].map(function(t){return t()})||nT},Zn=[],km=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},Gm=function(){return rt.forEach(function(e){return wn(e)&&++e.cacheID&&(e.rec=e())})},Yf=function(e,t){var n;for(Ln=0;Ln<nt.length;Ln++)n=nt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Oa=!0,t&&km(t),t||fs("revert")},Hm=function(e,t){rt.cache++,(t||!Nn)&&rt.forEach(function(n){return wn(n)&&n.cacheID++&&(n.rec=0)}),jn(e)&&(it.history.scrollRestoration=kf=e)},Nn,os=0,wd,iT=function(){if(wd!==os){var e=wd=os;requestAnimationFrame(function(){return e===os&&Qr(!0)})}},Vm=function(){xt.appendChild(Ws),Gf=!In&&Ws.offsetHeight||it.innerHeight,xt.removeChild(Ws)},Rd=function(e){return Ja(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Qr=function(e,t){if(Qn=Ct.documentElement,xt=Ct.body,zf=[it,Ct,Qn,xt],_i&&!e&&!Oa){ln(at,"scrollEnd",zm);return}Vm(),Nn=at.isRefreshing=!0,Oa||Gm();var n=fs("refreshInit");Rm&&at.sort(),t||Yf(),rt.forEach(function(r){wn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),Oa=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Qu=1,Rd(!0),nt.forEach(function(r){var s=zi(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Rd(!1),Qu=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){wn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Hm(kf,1),Tl.pause(),os++,Nn=2,nr(2),nt.forEach(function(r){return wn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Nn=at.isRefreshing=!1,fs("refresh")},tf=0,ol=1,Ha,nr=function(e){if(e===2||!Nn&&!Oa){at.isUpdating=!0,Ha&&Ha.update(0);var t=nt.length,n=bn(),r=n-Ic>=50,s=t&&nt[0].scroll();if(ol=tf>s?-1:1,Nn||(tf=s),r&&(_i&&!Ol&&n-_i>200&&(_i=0,fs("scrollEnd")),Ta=Ic,Ic=n),ol<0){for(Ln=t;Ln-- >0;)nt[Ln]&&nt[Ln].update(0,r);ol=1}else for(Ln=0;Ln<t;Ln++)nt[Ln]&&nt[Ln].update(0,r);at.isUpdating=!1}Qa=0},nf=[Fm,Om,Vf,Hf,hi+Ga,hi+Ba,hi+ka,hi+za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ll=nf.concat([ss,as,"boxSizing","max"+ra,"max"+Wf,"position",hi,Xt,Xt+ka,Xt+Ba,Xt+Ga,Xt+za]),rT=function(e,t,n){Xs(n);var r=e._gsap;if(r.spacerIsNative)Xs(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Fc=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=nf.length,a=t.style,o=e.style,l;s--;)l=nf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Vf]=o[Hf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ss]=bl(e,On)+Jt,a[as]=bl(e,Qt)+Jt,a[Xt]=o[hi]=o[Om]=o[Fm]="0",Xs(r),o[ss]=o["max"+ra]=n[ss],o[as]=o["max"+Wf]=n[as],o[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},sT=/([A-Z])/g,Xs=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(sT,"-$1").toLowerCase())}},Yo=function(e){for(var t=ll.length,n=e.style,r=[],s=0;s<t;s++)r.push(ll[s],n[ll[s]]);return r.t=e,r},aT=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},cl={left:0,top:0},Cd=function(e,t,n,r,s,a,o,l,c,u,d,f,h,_){wn(e)&&(e=e(l)),jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?sl("0"+e.substr(3),n):0));var g=h?h.time():0,p,m,v;if(h&&h.seek(0),isNaN(e)||(e=+e),wa(e))h&&(e=we.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&al(o,n,r,!0);else{wn(t)&&(t=t(l));var E=(e||"0").split(" "),S,A,w,b;v=kn(t,l)||xt,S=Ji(v)||{},(!S||!S.left&&!S.top)&&di(v).display==="none"&&(b=v.style.display,v.style.display="block",S=Ji(v),b?v.style.display=b:v.style.removeProperty("display")),A=sl(E[0],S[r.d]),w=sl(E[1]||"0",n),e=S[r.p]-c[r.p]-u+A+s-w,o&&al(o,w,r,n-w<20||o._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var x=e+n,y=a._isStart;p="scroll"+r.d2,al(a,x,r,y&&x>20||!y&&(d?Math.max(xt[p],Qn[p]):a.parentNode[p])<=x+1),d&&(c=Ji(o),d&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Jt))}return h&&v&&(p=Ji(v),h.seek(f),m=Ji(v),h._caScrollDist=p[r.p]-m[r.p],e=e/h._caScrollDist*f),h&&h.seek(g),h?e:Math.round(e)},oT=/(webkit|moz|length|cssText|inset)/i,Pd=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=di(e);for(a in o)!+a&&!oT.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Wm=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},qo=function(e,t,n){var r={};r[t.p]="+="+n,we.set(e,r)},Dd=function(e,t){var n=Lr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,_={};c=c||n();var g=Wm(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&nr()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=we.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",n.wheelHandler),at.isTouch&&ln(e,"touchmove",n.wheelHandler),s},at=(function(){function i(t,n){Is||i.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ju(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ba){this.update=this.refresh=this.kill=Di;return}n=Td(jn(n)||wa(n)||n.nodeType?{trigger:n}:n,Wo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,E=s.once,S=s.snap,A=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,x=s.fastScrollEnd,y=s.preventOverlaps,U=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:Qt,C=!d&&d!==0,I=kn(n.scroller||it),z=we.core.getCache(I),H=cs(I),B=("pinType"in n?n.pinType:Cr(I,"pinType")||H&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],N=C&&n.toggleActions.split(" "),J="markers"in n?n.markers:Wo.markers,Q=H?0:parseFloat(di(I)["border"+U.p2+ra])||0,P=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(P)},ce=jy(I,H,U),Be=Jy(I,H),He=0,qe=0,K=0,ee=Lr(I,U),re,Ue,Ie,Re,ut,ye,ze,Ke,Oe,X,L,gt,et,ke,xe,R,M,F,Z,j,q,ge,ae,Ce,Se,ne,se,Me,Te,he,Ve,D,oe,ie,de,te,$,Ee,Ne;if(P._startClamp=P._endClamp=!1,P._dir=U,p*=45,P.scroller=I,P.scroll=b?b.time.bind(b):ee,Re=ee(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(Rm=1,n.refreshPriority===-9999&&(Ha=P)),z.tweenScroll=z.tweenScroll||{top:Dd(I,Qt),left:Dd(I,On)},P.tweenTo=re=z.tweenScroll[U.p],P.scrubDuration=function(me){oe=wa(me)&&me,oe?D?D.duration(me):D=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return m&&m(P)}}):(D&&D.progress(1).kill(),D=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),he=0,l||(l=r.vars.id)),S&&((!$r(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in xt.style&&we.set(H?[xt,Qn]:I,{scrollBehavior:"auto"}),rt.forEach(function(me){return wn(me)&&me.target===(H?Ct.scrollingElement||Qn:I)&&(me.smooth=!1)}),Ie=wn(S.snapTo)?S.snapTo:S.snapTo==="labels"?eT(r):S.snapTo==="labelsDirectional"?tT(r):S.directional!==!1?function(me,We){return Xf(S.snapTo)(me,bn()-qe<500?0:We.direction)}:we.utils.snap(S.snapTo),ie=S.duration||{min:.1,max:2},ie=$r(ie)?Fa(ie.min,ie.max):Fa(ie,ie),de=we.delayedCall(S.delay||oe/2||.1,function(){var me=ee(),We=bn()-qe<500,Fe=re.tween;if((We||Math.abs(P.getVelocity())<10)&&!Fe&&!Ol&&He!==me){var Xe=(me-ye)/ke,kt=r&&!C?r.totalProgress():Xe,$e=We?0:(kt-Ve)/(bn()-Ta)*1e3||0,Pt=we.utils.clamp(-Xe,1-Xe,Ds($e/2)*$e/.185),Kt=Xe+(S.inertia===!1?0:Pt),Dt,St,vt=S,xn=vt.onStart,Rt=vt.onInterrupt,Sn=vt.onComplete;if(Dt=Ie(Kt,P),wa(Dt)||(Dt=Kt),St=Math.max(0,Math.round(ye+Dt*ke)),me<=ze&&me>=ye&&St!==me){if(Fe&&!Fe._initted&&Fe.data<=Ds(St-me))return;S.inertia===!1&&(Pt=Dt-Xe),re(St,{duration:ie(Ds(Math.max(Ds(Kt-kt),Ds(Dt-kt))*.185/$e/.05||0)),ease:S.ease||"power3",data:Ds(St-me),onInterrupt:function(){return de.restart(!0)&&Rt&&Rt(P)},onComplete:function(){P.update(),He=ee(),r&&!C&&(D?D.resetTo("totalProgress",Dt,r._tTime/r._tDur):r.progress(Dt)),he=Ve=r&&!C?r.totalProgress():P.progress,v&&v(P),Sn&&Sn(P)}},me,Pt*ke,St-me-Pt*ke),xn&&xn(P,re.tween)}}else P.isActive&&He!==me&&de.restart(!0)}).pause()),l&&(ef[l]=P),f=P.trigger=kn(f||h!==!0&&h),Ne=f&&f._gsap&&f._gsap.stRevert,Ne&&(Ne=Ne(P)),h=h===!0?f:kn(h),jn(o)&&(o={targets:f,className:o}),h&&(_===!1||_===hi||(_=!_&&h.parentNode&&h.parentNode.style&&di(h.parentNode).display==="flex"?!1:Xt),P.pin=h,Ue=we.core.getCache(h),Ue.spacer?xe=Ue.pinState:(w&&(w=kn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ue.spacerIsNative=!!w,w&&(Ue.spacerState=Yo(w))),Ue.spacer=F=w||Ct.createElement("div"),F.classList.add("pin-spacer"),l&&F.classList.add("pin-spacer-"+l),Ue.pinState=xe=Yo(h)),n.force3D!==!1&&we.set(h,{force3D:!0}),P.spacer=F=Ue.spacer,Te=di(h),Ce=Te[_+U.os2],j=we.getProperty(h),q=we.quickSetter(h,U.a,Jt),Fc(h,F,Te),M=Yo(h)),J){gt=$r(J)?Td(J,bd):bd,X=Xo("scroller-start",l,I,U,gt,0),L=Xo("scroller-end",l,I,U,gt,0,X),Z=X["offset"+U.op.d2];var ht=kn(Cr(I,"content")||I);Ke=this.markerStart=Xo("start",l,ht,U,gt,Z,0,b),Oe=this.markerEnd=Xo("end",l,ht,U,gt,Z,0,b),b&&(Ee=we.quickSetter([Ke,Oe],U.a,Jt)),!B&&!(Gi.length&&Cr(I,"fixedMarkers")===!0)&&(Qy(H?xt:I),we.set([X,L],{force3D:!0}),ne=we.quickSetter(X,U.a,Jt),Me=we.quickSetter(L,U.a,Jt))}if(b){var ve=b.vars.onUpdate,Pe=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(b,Pe||[])})}if(P.previous=function(){return nt[nt.indexOf(P)-1]},P.next=function(){return nt[nt.indexOf(P)+1]},P.revert=function(me,We){if(!We)return P.kill(!0);var Fe=me!==!1||!P.enabled,Xe=Tn;Fe!==P.isReverted&&(Fe&&(te=Math.max(ee(),P.scroll.rec||0),K=P.progress,$=r&&r.progress()),Ke&&[Ke,Oe,X,L].forEach(function(kt){return kt.style.display=Fe?"none":"block"}),Fe&&(Tn=P,P.update(Fe)),h&&(!A||!P.isActive)&&(Fe?rT(h,F,xe):Fc(h,F,di(h),Se)),Fe||P.update(Fe),Tn=Xe,P.isReverted=Fe)},P.refresh=function(me,We,Fe,Xe){if(!((Tn||!P.enabled)&&!We)){if(h&&me&&_i){ln(i,"scrollEnd",zm);return}!Nn&&le&&le(P),Tn=P,re.tween&&!Fe&&(re.tween.kill(),re.tween=0),D&&D.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(be){return be.vars.immediateRender&&be.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var kt=ce(),$e=Be(),Pt=b?b.duration():zi(I,U),Kt=ke<=.01||!ke,Dt=0,St=Xe||0,vt=$r(Fe)?Fe.end:n.end,xn=n.endTrigger||f,Rt=$r(Fe)?Fe.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),Sn=P.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,P),ci=f&&Math.max(0,nt.indexOf(P))||0,Zt=ci,jt,rn,Wi,ds,T,O,Y,W,V,ue,pe,fe,Ae;for(J&&$r(Fe)&&(fe=we.getProperty(X,U.p),Ae=we.getProperty(L,U.p));Zt-- >0;)O=nt[Zt],O.end||O.refresh(0,1)||(Tn=P),Y=O.pin,Y&&(Y===f||Y===h||Y===Sn)&&!O.isReverted&&(ue||(ue=[]),ue.unshift(O),O.revert(!0,!0)),O!==nt[Zt]&&(ci--,Zt--);for(wn(Rt)&&(Rt=Rt(P)),Rt=Sd(Rt,"start",P),ye=Cd(Rt,f,kt,U,ee(),Ke,X,P,$e,Q,B,Pt,b,P._startClamp&&"_startClamp")||(h?-.001:0),wn(vt)&&(vt=vt(P)),jn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(jn(Rt)?Rt.split(" ")[0]:"")+vt:(Dt=sl(vt.substr(2),kt),vt=jn(Rt)?Rt:(b?we.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ye):ye)+Dt,xn=f)),vt=Sd(vt,"end",P),ze=Math.max(ye,Cd(vt||(xn?"100% 0":Pt),xn,kt,U,ee()+Dt,Oe,L,P,$e,Q,B,Pt,b,P._endClamp&&"_endClamp"))||-.001,Dt=0,Zt=ci;Zt--;)O=nt[Zt]||{},Y=O.pin,Y&&O.start-O._pinPush<=ye&&!b&&O.end>0&&(jt=O.end-(P._startClamp?Math.max(0,O.start):O.start),(Y===f&&O.start-O._pinPush<ye||Y===Sn)&&isNaN(Rt)&&(Dt+=jt*(1-O.progress)),Y===h&&(St+=jt));if(ye+=Dt,ze+=Dt,P._startClamp&&(P._startClamp+=Dt),P._endClamp&&!Nn&&(P._endClamp=ze||-.001,ze=Math.min(ze,zi(I,U))),ke=ze-ye||(ye-=.01)&&.001,Kt&&(K=we.utils.clamp(0,1,we.utils.normalize(ye,ze,te))),P._pinPush=St,Ke&&Dt&&(jt={},jt[U.a]="+="+Dt,Sn&&(jt[U.p]="-="+ee()),we.set([Ke,Oe],jt)),h&&!(Qu&&P.end>=zi(I,U)))jt=di(h),ds=U===Qt,Wi=ee(),ge=parseFloat(j(U.a))+St,!Pt&&ze>1&&(pe=(H?Ct.scrollingElement||Qn:I).style,pe={style:pe,value:pe["overflow"+U.a.toUpperCase()]},H&&di(xt)["overflow"+U.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+U.a.toUpperCase()]="scroll")),Fc(h,F,jt),M=Yo(h),rn=Ji(h,!0),W=B&&Lr(I,ds?On:Qt)(),_?(Se=[_+U.os2,ke+St+Jt],Se.t=F,Zt=_===Xt?bl(h,U)+ke+St:0,Zt&&(Se.push(U.d,Zt+Jt),F.style.flexBasis!=="auto"&&(F.style.flexBasis=Zt+Jt)),Xs(Se),Sn&&nt.forEach(function(be){be.pin===Sn&&be.vars.pinSpacing!==!1&&(be._subPinOffset=!0)}),B&&ee(te)):(Zt=bl(h,U),Zt&&F.style.flexBasis!=="auto"&&(F.style.flexBasis=Zt+Jt)),B&&(T={top:rn.top+(ds?Wi-ye:W)+Jt,left:rn.left+(ds?W:Wi-ye)+Jt,boxSizing:"border-box",position:"fixed"},T[ss]=T["max"+ra]=Math.ceil(rn.width)+Jt,T[as]=T["max"+Wf]=Math.ceil(rn.height)+Jt,T[hi]=T[hi+ka]=T[hi+Ba]=T[hi+Ga]=T[hi+za]="0",T[Xt]=jt[Xt],T[Xt+ka]=jt[Xt+ka],T[Xt+Ba]=jt[Xt+Ba],T[Xt+Ga]=jt[Xt+Ga],T[Xt+za]=jt[Xt+za],R=aT(xe,T,A),Nn&&ee(0)),r?(V=r._initted,Dc(1),r.render(r.duration(),!0,!0),ae=j(U.a)-ge+ke+St,se=Math.abs(ke-ae)>1,B&&se&&R.splice(R.length-2,2),r.render(0,!0,!0),V||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Dc(0)):ae=ke,pe&&(pe.value?pe.style["overflow"+U.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+U.a));else if(f&&ee()&&!b)for(rn=f.parentNode;rn&&rn!==xt;)rn._pinOffset&&(ye-=rn._pinOffset,ze-=rn._pinOffset),rn=rn.parentNode;ue&&ue.forEach(function(be){return be.revert(!1,!0)}),P.start=ye,P.end=ze,Re=ut=Nn?te:ee(),!b&&!Nn&&(Re<te&&ee(te),P.scroll.rec=0),P.revert(!1,!0),qe=bn(),de&&(He=-1,de.restart(!0)),Tn=0,r&&C&&(r._initted||$)&&r.progress()!==$&&r.progress($||0,!0).render(r.time(),!0,!0),(Kt||K!==P.progress||b||g||r&&!r._initted)&&(r&&!C&&(r._initted||K||r.vars.immediateRender!==!1)&&r.totalProgress(b&&ye<-.001&&!K?we.utils.normalize(ye,ze,0):K,!0),P.progress=Kt||(Re-ye)/ke===K?0:K),h&&_&&(F._pinOffset=Math.round(P.progress*ae)),D&&D.invalidate(),isNaN(fe)||(fe-=we.getProperty(X,U.p),Ae-=we.getProperty(L,U.p),qo(X,U,fe),qo(Ke,U,fe-(Xe||0)),qo(L,U,Ae),qo(Oe,U,Ae-(Xe||0))),Kt&&!Nn&&P.update(),u&&!Nn&&!et&&(et=!0,u(P),et=!1)}},P.getVelocity=function(){return(ee()-ut)/(bn()-Ta)*1e3||0},P.endAnimation=function(){xa(P.callbackAnimation),r&&(D?D.progress(1):r.paused()?C||xa(r,P.direction<0,1):xa(r,r.reversed()))},P.labelToScroll=function(me){return r&&r.labels&&(ye||P.refresh()||ye)+r.labels[me]/r.duration()*ke||0},P.getTrailing=function(me){var We=nt.indexOf(P),Fe=P.direction>0?nt.slice(0,We).reverse():nt.slice(We+1);return(jn(me)?Fe.filter(function(Xe){return Xe.vars.preventOverlaps===me}):Fe).filter(function(Xe){return P.direction>0?Xe.end<=ye:Xe.start>=ze})},P.update=function(me,We,Fe){if(!(b&&!Fe&&!me)){var Xe=Nn===!0?te:P.scroll(),kt=me?0:(Xe-ye)/ke,$e=kt<0?0:kt>1?1:kt||0,Pt=P.progress,Kt,Dt,St,vt,xn,Rt,Sn,ci;if(We&&(ut=Re,Re=b?ee():Xe,S&&(Ve=he,he=r&&!C?r.totalProgress():$e)),p&&h&&!Tn&&!ko&&_i&&(!$e&&ye<Xe+(Xe-ut)/(bn()-Ta)*p?$e=1e-4:$e===1&&ze>Xe+(Xe-ut)/(bn()-Ta)*p&&($e=.9999)),$e!==Pt&&P.enabled){if(Kt=P.isActive=!!$e&&$e<1,Dt=!!Pt&&Pt<1,Rt=Kt!==Dt,xn=Rt||!!$e!=!!Pt,P.direction=$e>Pt?1:-1,P.progress=$e,xn&&!Tn&&(St=$e&&!Pt?0:$e===1?1:Pt===1?2:3,C&&(vt=!Rt&&N[St+1]!=="none"&&N[St+1]||N[St],ci=r&&(vt==="complete"||vt==="reset"||vt in r))),y&&(Rt||ci)&&(ci||d||!r)&&(wn(y)?y(P):P.getTrailing(y).forEach(function(Wi){return Wi.endAnimation()})),C||(D&&!Tn&&!ko?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",$e,r._tTime/r._tDur):(D.vars.totalProgress=$e,D.invalidate().restart())):r&&r.totalProgress($e,!!(Tn&&(qe||me)))),h){if(me&&_&&(F.style[_+U.os2]=Ce),!B)q(Aa(ge+ae*$e));else if(xn){if(Sn=!me&&$e>Pt&&ze+1>Xe&&Xe+1>=zi(I,U),A)if(!me&&(Kt||Sn)){var Zt=Ji(h,!0),jt=Xe-ye;Pd(h,xt,Zt.top+(U===Qt?jt:0)+Jt,Zt.left+(U===Qt?0:jt)+Jt)}else Pd(h,F);Xs(Kt||Sn?R:M),se&&$e<1&&Kt||q(ge+($e===1&&!Sn?ae:0))}}S&&!re.tween&&!Tn&&!ko&&de.restart(!0),o&&(Rt||E&&$e&&($e<1||!Uc))&&Ja(o.targets).forEach(function(Wi){return Wi.classList[Kt||E?"add":"remove"](o.className)}),a&&!C&&!me&&a(P),xn&&!Tn?(C&&(ci&&(vt==="complete"?r.pause().totalProgress(1):vt==="reset"?r.restart(!0).pause():vt==="restart"?r.restart(!0):r[vt]()),a&&a(P)),(Rt||!Uc)&&(c&&Rt&&Lc(P,c),k[St]&&Lc(P,k[St]),E&&($e===1?P.kill(!1,1):k[St]=0),Rt||(St=$e===1?1:3,k[St]&&Lc(P,k[St]))),x&&!Kt&&Math.abs(P.getVelocity())>(wa(x)?x:2500)&&(xa(P.callbackAnimation),D?D.progress(1):xa(r,vt==="reverse"?1:!$e,1))):C&&a&&!Tn&&a(P)}if(Me){var rn=b?Xe/b.duration()*(b._caScrollDist||0):Xe;ne(rn+(X._isFlipped?1:0)),Me(rn)}Ee&&Ee(-Xe/b.duration()*(b._caScrollDist||0))}},P.enable=function(me,We){P.enabled||(P.enabled=!0,ln(I,"resize",Ra),H||ln(I,"scroll",Us),le&&ln(i,"refreshInit",le),me!==!1&&(P.progress=K=0,Re=ut=He=ee()),We!==!1&&P.refresh())},P.getTween=function(me){return me&&re?re.tween:D},P.setPositions=function(me,We,Fe,Xe){if(b){var kt=b.scrollTrigger,$e=b.duration(),Pt=kt.end-kt.start;me=kt.start+Pt*me/$e,We=kt.start+Pt*We/$e}P.refresh(!1,!1,{start:Md(me,Fe&&!!P._startClamp),end:Md(We,Fe&&!!P._endClamp)},Xe),P.update()},P.adjustPinSpacing=function(me){if(Se&&me){var We=Se.indexOf(U.d)+1;Se[We]=parseFloat(Se[We])+me+Jt,Se[1]=parseFloat(Se[1])+me+Jt,Xs(Se)}},P.disable=function(me,We){if(me!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,We||D&&D.pause(),te=0,Ue&&(Ue.uncache=1),le&&on(i,"refreshInit",le),de&&(de.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!H)){for(var Fe=nt.length;Fe--;)if(nt[Fe].scroller===I&&nt[Fe]!==P)return;on(I,"resize",Ra),H||on(I,"scroll",Us)}},P.kill=function(me,We){P.disable(me,We),D&&!We&&D.kill(),l&&delete ef[l];var Fe=nt.indexOf(P);Fe>=0&&nt.splice(Fe,1),Fe===Ln&&ol>0&&Ln--,Fe=0,nt.forEach(function(Xe){return Xe.scroller===P.scroller&&(Fe=1)}),Fe||Nn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,me&&r.revert({kill:!1}),We||r.kill()),Ke&&[Ke,Oe,X,L].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),Ha===P&&(Ha=0),h&&(Ue&&(Ue.uncache=1),Fe=0,nt.forEach(function(Xe){return Xe.pin===h&&Fe++}),Fe||(Ue.spacer=0)),n.onKill&&n.onKill(P)},nt.push(P),P.enable(!1,!1),Ne&&Ne(P),r&&r.add&&!ke){var je=P.update;P.update=function(){P.update=je,rt.cache++,ye||ze||P.refresh()},we.delayedCall(.01,P.update),ke=.01,ye=ze=0}else P.refresh();h&&iT()},i.register=function(n){return Is||(we=n||Im(),Um()&&window.document&&i.enable(),Is=ba),Is},i.defaults=function(n){if(n)for(var r in n)Wo[r]=n[r];return Wo},i.disable=function(n,r){ba=0,nt.forEach(function(a){return a[r?"kill":"disable"](n)}),on(it,"wheel",Us),on(Ct,"scroll",Us),clearInterval(zo),on(Ct,"touchcancel",Di),on(xt,"touchstart",Di),Ho(on,Ct,"pointerdown,touchstart,mousedown",Ed),Ho(on,Ct,"pointerup,touchend,mouseup",yd),Tl.kill(),Go(on);for(var s=0;s<rt.length;s+=3)Vo(on,rt[s],rt[s+1]),Vo(on,rt[s],rt[s+2])},i.enable=function(){if(it=window,Ct=document,Qn=Ct.documentElement,xt=Ct.body,we&&(Ja=we.utils.toArray,Fa=we.utils.clamp,Ju=we.core.context||Di,Dc=we.core.suppressOverwrites||Di,kf=it.history.scrollRestoration||"auto",tf=it.pageYOffset||0,we.core.globals("ScrollTrigger",i),xt)){ba=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",Vm(),Zy(),Vt.register(we),i.isTouch=Vt.isTouch,xr=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ju=Vt.isTouch===1,ln(it,"wheel",Us),zf=[it,Ct,Qn,xt],we.matchMedia?(i.matchMedia=function(c){var u=we.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},we.addEventListener("matchMediaInit",function(){Gm(),Yf()}),we.addEventListener("matchMediaRevert",function(){return km()}),we.addEventListener("matchMedia",function(){Qr(0,1),fs("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Nc(),Nc})):console.warn("Requires GSAP 3.11.0 or later"),Nc(),ln(Ct,"scroll",Us);var n=xt.hasAttribute("style"),r=xt.style,s=r.borderTopStyle,a=we.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Ji(xt),Qt.m=Math.round(o.top+Qt.sc())||0,On.m=Math.round(o.left+On.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),zo=setInterval(Ad,250),we.delayedCall(.5,function(){return ko=0}),ln(Ct,"touchcancel",Di),ln(xt,"touchstart",Di),Ho(ln,Ct,"pointerdown,touchstart,mousedown",Ed),Ho(ln,Ct,"pointerup,touchend,mouseup",yd),Zu=we.utils.checkPrefix("transform"),ll.push(Zu),Is=bn(),Tl=we.delayedCall(.2,Qr).pause(),Ls=[Ct,"visibilitychange",function(){var c=it.innerWidth,u=it.innerHeight;Ct.hidden?(vd=c,xd=u):(vd!==c||xd!==u)&&Ra()},Ct,"DOMContentLoaded",Qr,it,"load",Qr,it,"resize",Ra],Go(ln),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)Vo(on,rt[l],rt[l+1]),Vo(on,rt[l],rt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Uc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(zo)||(zo=r)&&setInterval(Ad,r),"ignoreMobileResize"in n&&(ju=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Go(on)||Go(ln,n.autoRefreshEvents||"none"),Cm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=kn(n),a=rt.indexOf(s),o=cs(s);~a&&rt.splice(a,o?6:2),r&&(o?Gi.unshift(it,r,xt,r,Qn,r):Gi.unshift(s,r))},i.clearMatchMedia=function(n){nt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(jn(n)?kn(n):n).getBoundingClientRect(),o=a[s?ss:as]*r||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},i.positionInViewport=function(n,r,s){jn(n)&&(n=kn(n));var a=n.getBoundingClientRect(),o=a[s?ss:as],l=r==null?o/2:r in Al?Al[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},i.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=us.killAll||[];us={},r.forEach(function(s){return s()})}},i})();at.version="3.14.2";at.saveStyles=function(i){return i?Ja(i).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),Ju())}}):Zn};at.revert=function(i,e){return Yf(!i,e)};at.create=function(i,e){return new at(i,e)};at.refresh=function(i){return i?Ra(!0):(Is||at.register())&&Qr(!0)};at.update=function(i){return++rt.cache&&nr(i===!0?2:0)};at.clearScrollMemory=Hm;at.maxScroll=function(i,e){return zi(i,e?On:Qt)};at.getScrollFunc=function(i,e){return Lr(kn(i),e?On:Qt)};at.getById=function(i){return ef[i]};at.getAll=function(){return nt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!_i};at.snapDirectional=Xf;at.addEventListener=function(i,e){var t=us[i]||(us[i]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(i,e){var t=us[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=we.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&wn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return wn(s)&&(s=s(),ln(at,"refresh",function(){return s=e.batchMax()})),Ja(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(at.create(c))}),t};var Ud=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Oc=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===Qn&&i(xt,t)},$o={auto:1,scroll:1},lT=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||we.core.getCache(s),o=bn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($o[(l=di(s)).overflowY]||$o[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!cs(s)&&($o[(l=di(s)).overflowY]||$o[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Xm=function(e,t,n,r){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&lT,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&ln(Ct,Vt.eventTypes[0],Ld,!1,!0)},onDisable:function(){return on(Ct,Vt.eventTypes[0],Ld,!0)}})},cT=/(input|label|select|textarea)/i,Id,Ld=function(e){var t=cT.test(e.target.tagName);(t||Id)&&(e._gsapAllow=!0,Id=t)},uT=function(e){$r(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=kn(e.target)||Qn,u=we.core.globals().ScrollSmoother,d=u&&u.get(),f=xr&&(e.content&&kn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Lr(c,Qt),_=Lr(c,On),g=1,p=(Vt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,m=0,v=wn(r)?function(){return r(o)}:function(){return r||2.8},E,S,A=Xm(c,e.type,!0,s),w=function(){return S=!1},b=Di,x=Di,y=function(){l=zi(c,Qt),x=Fa(xr?1:0,l),n&&(b=Fa(0,zi(c,On))),E=os},U=function(){f._gsap.y=Aa(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},C=function(){if(S){requestAnimationFrame(w);var J=Aa(o.deltaY/2),Q=x(h.v-J);if(f&&Q!==h.v+h.offset){h.offset=Q-h.v;var P=Aa((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",h.cacheID=rt.cache,nr()}return!0}h.offset&&U(),S=!0},I,z,H,B,k=function(){y(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(N){return xr&&N.type==="touchmove"&&C()||g>1.05&&N.type!=="touchstart"||o.isGesturing||N.touches&&N.touches.length>1},e.onPress=function(){S=!1;var N=g;g=Aa((it.visualViewport&&it.visualViewport.scale||1)/p),I.pause(),N!==g&&Oc(c,g>1.01?!0:n?!1:"x"),z=_(),H=h(),y(),E=os},e.onRelease=e.onGestureStart=function(N,J){if(h.offset&&U(),!J)B.restart(!0);else{rt.cache++;var Q=v(),P,le;n&&(P=_(),le=P+Q*.05*-N.velocityX/.227,Q*=Ud(_,P,le,zi(c,On)),I.vars.scrollX=b(le)),P=h(),le=P+Q*.05*-N.velocityY/.227,Q*=Ud(h,P,le,zi(c,Qt)),I.vars.scrollY=x(le),I.invalidate().duration(Q).play(.01),(xr&&I.vars.scrollY>=l||P>=l-1)&&we.to({},{onUpdate:k,duration:Q})}a&&a(N)},e.onWheel=function(){I._ts&&I.pause(),bn()-m>1e3&&(E=0,m=bn())},e.onChange=function(N,J,Q,P,le){if(os!==E&&y(),J&&n&&_(b(P[2]===J?z+(N.startX-N.x):_()+J-P[1])),Q){h.offset&&U();var ce=le[2]===Q,Be=ce?H+N.startY-N.y:h()+Q-le[1],He=x(Be);ce&&Be!==He&&(H+=He-Be),h(He)}(Q||J)&&nr()},e.onEnable=function(){Oc(c,n?!1:"x"),at.addEventListener("refresh",k),ln(it,"resize",k),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),A.enable()},e.onDisable=function(){Oc(c,!0),on(it,"resize",k),at.removeEventListener("refresh",k),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new Vt(e),o.iOS=xr,xr&&!h()&&h(1),xr&&we.ticker.add(Di),B=o._dc,I=we.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Wm(h,h(),function(){return I.pause()})},onUpdate:nr,onComplete:B.vars.onComplete}),o};at.sort=function(i){if(wn(i))return nt.sort(i);var e=it.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),nt.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(i){return new Vt(i)};at.normalizeScroll=function(i){if(typeof i>"u")return In;if(i===!0&&In)return In.enable();if(i===!1){In&&In.kill(),In=i;return}var e=i instanceof Vt?i:uT(i);return In&&In.target===e.target&&In.kill(),cs(e.target)&&(In=e),e};at.core={_getVelocityProp:Ku,_inputObserver:Xm,_scrollers:rt,_proxies:Gi,bridge:{ss:function(){_i||fs("scrollStart"),_i=bn()},ref:function(){return Tn}}};Im()&&we.registerPlugin(at);Ua.registerPlugin(at);function fT(i,e){i.position.set(0,3,8),i.rotation.set(0,0,0),Ua.to(i.position,{z:-30,y:1,ease:"none",scrollTrigger:{trigger:"main",start:"top top",end:"bottom bottom",scrub:1.5}}),Ua.to(i.rotation,{y:Math.PI*.1,x:.1,ease:"none",scrollTrigger:{trigger:"main",start:"top top",end:"bottom bottom",scrub:2}}),document.querySelectorAll(".panel").forEach((n,r)=>{Ua.fromTo(n,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power2.out",scrollTrigger:{trigger:n,start:"top 70%",end:"bottom 30%",toggleActions:"play reverse play reverse"}})})}function hT({renderer:i,scene:e,camera:t,composer:n,onUpdate:r}){function s(){requestAnimationFrame(s),r&&r(),n.render()}s()}TE(ao);AE(ao);fT(oa);window.addEventListener("resize",()=>yE(oa,la,Il));hT({renderer:la,scene:ao,camera:oa,composer:Il,onUpdate:()=>{bE(),wE()}});

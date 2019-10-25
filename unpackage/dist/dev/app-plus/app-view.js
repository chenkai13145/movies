var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lines'])
Z([3,'line'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'padding:0 20rpx;'])
Z([[2,'==='],[[7],[3,'types']],[1,'头像:']])
Z([3,'头像'])
Z([[2,'==='],[[7],[3,'types']],[1,'昵称:']])
Z([3,'display:flex;padding:20rpx;'])
Z([3,'昵称:'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'name']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入昵称'])
Z([3,'border:crimson 1px solid;border-radius:4px;width:70%;padding:4px;align-self:center;'])
Z([[7],[3,'name']])
Z([[2,'==='],[[7],[3,'types']],[1,'出生日期:']])
Z([3,'display:flex;'])
Z([3,'出生日期:'])
Z([3,'uni-list-cell'])
Z([3,'uni-list-cell-left'])
Z([3,'当前选择'])
Z([3,'uni-list-cell-db'])
Z([[2,'==='],[[7],[3,'types']],[1,'性别:']])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'radioChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'border-bottom:1px #C8C7CC solid;padding:4px 0;'])
Z([3,'nan'])
Z([3,'男'])
Z(z[22])
Z([3,'男'])
Z(z[21])
Z([3,'nv'])
Z([3,'女'])
Z(z[27])
Z([3,'女'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'score'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'yellow']])
Z([3,'score_img'])
Z([3,'aspectFill'])
Z([3,'/static/icos/star-yellow.png'])
Z([3,'width:12px;height:12px;'])
Z(z[1])
Z(z[2])
Z([[7],[3,'gray']])
Z(z[4])
Z(z[5])
Z([3,'/static/icos/star-gray.png'])
Z(z[7])
Z([[2,'!='],[[7],[3,'showgread']],[1,0]])
Z([a,[[7],[3,'scoregrad']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'black'])
Z([3,'__e'])
Z([3,'img_cover'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'saveFn']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'cover']]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'tu'])
Z([3,'true'])
Z([3,'tu_img'])
Z([3,'red'])
Z([3,'#ffffff'])
Z([3,'3000'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'swiperimg']])
Z(z[7])
Z(z[3])
Z([[2,'+'],[1,'/pages/movieinfo/movieinfo?title\x3dlunbo\x26id\x3d'],[[6],[[7],[3,'item']],[3,'movieId']]])
Z(z[3])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([3,'scorl_hot'])
Z([3,'hot_icon'])
Z([3,'/static/icos/hot.png'])
Z([3,'font-weight:bold;font-size:36rpx;'])
Z([3,'热销分类'])
Z(z[2])
Z([3,'hot_bot_img'])
Z(z[7])
Z(z[8])
Z([[7],[3,'hotimg']])
Z(z[7])
Z([3,'hot_img'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'/pages/movieinfo/movieinfo?title\x3d'],[[6],[[7],[3,'item']],[3,'name']]],[1,'\x26id\x3d']],[[6],[[7],[3,'item']],[3,'id']]])
Z(z[14])
Z([[6],[[7],[3,'item']],[3,'poster']])
Z([3,'hot_text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'score']])
Z([3,'1'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[16])
Z(z[17])
Z([3,'/static/icos/interest.png'])
Z(z[19])
Z([3,'热门预告'])
Z([3,'videm'])
Z(z[7])
Z(z[8])
Z([[7],[3,'videlist']])
Z(z[7])
Z([3,'myVideo'])
Z([3,'__e'])
Z(z[48])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'myisplay']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'videlist']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'videoErrorCallback']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'trailer']])
Z([3,'width:100%;height:100%;'])
Z(z[16])
Z(z[17])
Z([3,'/static/icos/guess-u-like.png'])
Z(z[19])
Z([3,'猜你喜欢'])
Z([[7],[3,'show']])
Z([3,'like_list'])
Z(z[7])
Z(z[8])
Z([[7],[3,'likelist']])
Z(z[7])
Z([3,'like'])
Z(z[28])
Z([3,'like_img'])
Z(z[14])
Z(z[30])
Z([3,'like_text'])
Z([3,'like_title'])
Z([a,z[32][1]])
Z(z[33])
Z(z[34])
Z(z[35])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([a,[[6],[[7],[3,'item']],[3,'basicInfo']]])
Z([a,[[6],[[7],[3,'item']],[3,'releaseDate']]])
Z([3,'dianzan'])
Z([3,'dianzan_jia'])
Z([3,'dianzan_yi'])
Z([3,'/static/icos/praise.png'])
Z([3,'dianzan_text'])
Z([3,'赞一下'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'登录注册'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'true'])
Z([3,'info_video'])
Z([[6],[[7],[3,'movieinfos']],[3,'id']])
Z([[6],[[7],[3,'movieinfos']],[3,'trailer']])
Z([3,'info_img'])
Z([3,'__e'])
Z([3,'info_img_icon'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'movieinfos.cover']]]]]]]]]]])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'movieinfos']],[3,'cover']])
Z([3,'info_img_text'])
Z([3,'font-size:18px;font-weight:bold;color:#000;'])
Z([a,[[6],[[7],[3,'movieinfos']],[3,'name']]])
Z([3,'white-space:nowrap;text-overflow:ellipsis;overflow:hidden;'])
Z([a,[[6],[[7],[3,'movieinfos']],[3,'basicInfo']]])
Z([a,[[6],[[7],[3,'movieinfos']],[3,'originalName']]])
Z([a,[[6],[[7],[3,'movieinfos']],[3,'totalTime']]])
Z([a,[[6],[[7],[3,'movieinfos']],[3,'releaseDate']]])
Z([[7],[3,'show']])
Z([3,'score_info'])
Z([3,'color:#555555;'])
Z([3,'综合评分:'])
Z([a,[[6],[[7],[3,'movieinfos']],[3,'score']]])
Z([3,'graden'])
Z([3,'__l'])
Z([[6],[[7],[3,'movieinfos']],[3,'score']])
Z([3,'1'])
Z(z[26])
Z([a,[[2,'+'],[[6],[[7],[3,'movieinfos']],[3,'prisedCounts']],[1,'人点赞']]])
Z(z[24])
Z([3,'2'])
Z([3,'info_casof'])
Z([3,'info_titl'])
Z([3,'剧情介绍'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'movieinfos']],[3,'plotDesc']]],[1,'']]])
Z([3,'info_casof roleperson'])
Z(z[32])
Z([3,'演职人员'])
Z(z[0])
Z([3,'role'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'actor']])
Z(z[40])
Z([3,'person'])
Z(z[5])
Z([3,'person_img'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'yulanper']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z(z[8])
Z([[6],[[7],[3,'item']],[3,'photo']])
Z([3,'person_text'])
Z([a,[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'actName']],[1,'导演']],[[6],[[7],[3,'item']],[3,'actName']],[[6],[[7],[3,'item']],[3,'name']]]])
Z([3,'pictrue info_casof'])
Z(z[32])
Z([3,'剧照'])
Z(z[0])
Z(z[39])
Z(z[40])
Z(z[41])
Z([[7],[3,'pictrues']])
Z(z[44])
Z(z[5])
Z(z[46])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'yulan']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z(z[8])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'me_top'])
Z([1,false])
Z([3,'me_name'])
Z([3,'头像'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'loginRegister']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'登录/注册'])
Z([3,'login_me'])
Z(z[2])
Z(z[3])
Z([3,'昵称'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'naTagTo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-right:20rpx;'])
Z([3,'设置'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'padding:0px 20rpx;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'datas']])
Z(z[1])
Z([3,'__e'])
Z([3,'you_info'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'pathTo']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'datas']],[1,'']],[[7],[3,'index']]],[1,'lable']]]]]]]]]]]]]]])
Z([3,'left_inf'])
Z([a,[[6],[[7],[3,'item']],[3,'lable']]])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'value']]]])
Z([3,'info_my'])
Z([3,'../../static/icos/left-arrow.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search_top'])
Z([3,'search_icon'])
Z([3,'aspectFill'])
Z([3,'/static/icos/search.png'])
Z([3,'__e'])
Z(z[4])
Z([3,'search_input'])
Z([3,'search'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'serarchFn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'keywords']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'true'])
Z([3,'15'])
Z([3,'搜索预告片'])
Z([3,'text'])
Z([[7],[3,'keywords']])
Z([3,'serach_content'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'searcharr']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'/pages/movieinfo/movieinfo?title\x3d'],[[6],[[7],[3,'item']],[3,'name']]],[1,'\x26id\x3d']],[[6],[[7],[3,'item']],[3,'id']]])
Z([3,'poster'])
Z(z[2])
Z([[6],[[7],[3,'item']],[3,'poster']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./component/line/line.wxml','./component/myput/myput.wxml','./component/score/score.wxml','./pages/cover/cover.wxml','./pages/index/index.wxml','./pages/loginReg/loginReg.wxml','./pages/movieinfo/movieinfo.wxml','./pages/my/my.wxml','./pages/myinfo/myinfo.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var fE=_n('view')
_rz(z,fE,'style',0,e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,1,e,s,gg)){cF.wxVkey=1
var oJ=_n('view')
var lK=_oz(z,2,e,s,gg)
_(oJ,lK)
_(cF,oJ)
}
var hG=_v()
_(fE,hG)
if(_oz(z,3,e,s,gg)){hG.wxVkey=1
var aL=_n('view')
_rz(z,aL,'style',4,e,s,gg)
var tM=_n('label')
var eN=_oz(z,5,e,s,gg)
_(tM,eN)
_(aL,tM)
var bO=_mz(z,'input',['bindinput',6,'data-event-opts',1,'placeholder',2,'style',3,'value',4],[],e,s,gg)
_(aL,bO)
_(hG,aL)
}
var oH=_v()
_(fE,oH)
if(_oz(z,11,e,s,gg)){oH.wxVkey=1
var oP=_n('view')
_rz(z,oP,'style',12,e,s,gg)
var xQ=_n('label')
var oR=_oz(z,13,e,s,gg)
_(xQ,oR)
_(oP,xQ)
var fS=_n('view')
_rz(z,fS,'class',14,e,s,gg)
var cT=_n('view')
_rz(z,cT,'class',15,e,s,gg)
var hU=_oz(z,16,e,s,gg)
_(cT,hU)
_(fS,cT)
var oV=_n('view')
_rz(z,oV,'class',17,e,s,gg)
_(fS,oV)
_(oP,fS)
_(oH,oP)
}
var cI=_v()
_(fE,cI)
if(_oz(z,18,e,s,gg)){cI.wxVkey=1
var cW=_n('view')
var oX=_mz(z,'radio-group',['bindchange',19,'data-event-opts',1],[],e,s,gg)
var lY=_n('view')
_rz(z,lY,'style',21,e,s,gg)
var aZ=_mz(z,'radio',['id',22,'value',1],[],e,s,gg)
_(lY,aZ)
var t1=_n('label')
_rz(z,t1,'for',24,e,s,gg)
var e2=_oz(z,25,e,s,gg)
_(t1,e2)
_(lY,t1)
_(oX,lY)
var b3=_n('view')
_rz(z,b3,'style',26,e,s,gg)
var o4=_mz(z,'radio',['id',27,'value',1],[],e,s,gg)
_(b3,o4)
var x5=_n('label')
_rz(z,x5,'for',29,e,s,gg)
var o6=_oz(z,30,e,s,gg)
_(x5,o6)
_(b3,x5)
_(oX,b3)
_(cW,oX)
_(cI,cW)
}
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var c8=_n('view')
_rz(z,c8,'class',0,e,s,gg)
var o0=_v()
_(c8,o0)
var cAB=function(lCB,oBB,aDB,gg){
var eFB=_mz(z,'image',['class',4,'mode',1,'src',2,'style',3],[],lCB,oBB,gg)
_(aDB,eFB)
return aDB
}
o0.wxXCkey=2
_2z(z,3,cAB,e,s,gg,o0,'item','index','')
var bGB=_v()
_(c8,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_mz(z,'image',['class',11,'mode',1,'src',2,'style',3],[],oJB,xIB,gg)
_(fKB,hMB)
return fKB
}
bGB.wxXCkey=2
_2z(z,10,oHB,e,s,gg,bGB,'item','index','')
var h9=_v()
_(c8,h9)
if(_oz(z,15,e,s,gg)){h9.wxVkey=1
var oNB=_n('view')
var cOB=_oz(z,16,e,s,gg)
_(oNB,cOB)
_(h9,oNB)
}
h9.wxXCkey=1
_(r,c8)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lQB=_n('view')
_rz(z,lQB,'class',0,e,s,gg)
var aRB=_mz(z,'image',['bindlongpress',1,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e,s,gg)
_(lQB,aRB)
_(r,lQB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var eTB=_n('view')
_rz(z,eTB,'class',0,e,s,gg)
var oVB=_n('view')
_rz(z,oVB,'class',1,e,s,gg)
var xWB=_mz(z,'swiper',['autoplay',2,'class',1,'indicatorActiveColor',2,'indicatorColor',3,'interval',4],[],e,s,gg)
var oXB=_v()
_(xWB,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_n('swiper-item')
_rz(z,o4B,'class',11,h1B,cZB,gg)
var l5B=_n('navigator')
_rz(z,l5B,'url',12,h1B,cZB,gg)
var a6B=_mz(z,'image',['class',13,'mode',1,'src',2],[],h1B,cZB,gg)
_(l5B,a6B)
_(o4B,l5B)
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=2
_2z(z,9,fYB,e,s,gg,oXB,'item','index','index')
_(oVB,xWB)
_(eTB,oVB)
var t7B=_n('view')
_rz(z,t7B,'class',16,e,s,gg)
var e8B=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(t7B,e8B)
var b9B=_n('text')
_rz(z,b9B,'style',19,e,s,gg)
var o0B=_oz(z,20,e,s,gg)
_(b9B,o0B)
_(t7B,b9B)
_(eTB,t7B)
var xAC=_n('scroll-view')
_rz(z,xAC,'scrollX',21,e,s,gg)
var oBC=_n('view')
_rz(z,oBC,'class',22,e,s,gg)
var fCC=_v()
_(oBC,fCC)
var cDC=function(oFC,hEC,cGC,gg){
var lIC=_n('view')
_rz(z,lIC,'class',27,oFC,hEC,gg)
var aJC=_n('navigator')
_rz(z,aJC,'url',28,oFC,hEC,gg)
var tKC=_mz(z,'image',['mode',29,'src',1],[],oFC,hEC,gg)
_(aJC,tKC)
_(lIC,aJC)
var eLC=_n('text')
_rz(z,eLC,'class',31,oFC,hEC,gg)
var bMC=_oz(z,32,oFC,hEC,gg)
_(eLC,bMC)
_(lIC,eLC)
var oNC=_mz(z,'score',['bind:__l',33,'scoregrad',1,'showgread',2,'vueId',3],[],oFC,hEC,gg)
_(lIC,oNC)
_(cGC,lIC)
return cGC
}
fCC.wxXCkey=4
_2z(z,25,cDC,e,s,gg,fCC,'item','index','index')
_(xAC,oBC)
_(eTB,xAC)
var xOC=_n('view')
_rz(z,xOC,'class',37,e,s,gg)
var oPC=_mz(z,'image',['class',38,'src',1],[],e,s,gg)
_(xOC,oPC)
var fQC=_n('text')
_rz(z,fQC,'style',40,e,s,gg)
var cRC=_oz(z,41,e,s,gg)
_(fQC,cRC)
_(xOC,fQC)
_(eTB,xOC)
var hSC=_n('view')
_rz(z,hSC,'class',42,e,s,gg)
var oTC=_v()
_(hSC,oTC)
var cUC=function(lWC,oVC,aXC,gg){
var eZC=_n('view')
_rz(z,eZC,'class',47,lWC,oVC,gg)
var b1C=_mz(z,'video',['binderror',48,'bindplay',1,'data-event-opts',2,'id',3,'src',4,'style',5],[],lWC,oVC,gg)
_(eZC,b1C)
_(aXC,eZC)
return aXC
}
oTC.wxXCkey=2
_2z(z,45,cUC,e,s,gg,oTC,'item','index','index')
_(eTB,hSC)
var o2C=_n('view')
_rz(z,o2C,'class',54,e,s,gg)
var x3C=_mz(z,'image',['class',55,'src',1],[],e,s,gg)
_(o2C,x3C)
var o4C=_n('text')
_rz(z,o4C,'style',57,e,s,gg)
var f5C=_oz(z,58,e,s,gg)
_(o4C,f5C)
_(o2C,o4C)
_(eTB,o2C)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,59,e,s,gg)){bUB.wxVkey=1
var c6C=_n('view')
_rz(z,c6C,'class',60,e,s,gg)
var h7C=_v()
_(c6C,h7C)
var o8C=function(o0C,c9C,lAD,gg){
var tCD=_n('view')
_rz(z,tCD,'class',65,o0C,c9C,gg)
var eDD=_n('navigator')
_rz(z,eDD,'url',66,o0C,c9C,gg)
var bED=_mz(z,'image',['class',67,'mode',1,'src',2],[],o0C,c9C,gg)
_(eDD,bED)
_(tCD,eDD)
var oFD=_n('view')
_rz(z,oFD,'class',70,o0C,c9C,gg)
var xGD=_n('view')
_rz(z,xGD,'class',71,o0C,c9C,gg)
var oHD=_oz(z,72,o0C,c9C,gg)
_(xGD,oHD)
_(oFD,xGD)
var fID=_mz(z,'score',['bind:__l',73,'scoregrad',1,'showgread',2,'vueId',3],[],o0C,c9C,gg)
_(oFD,fID)
var cJD=_n('view')
var hKD=_oz(z,77,o0C,c9C,gg)
_(cJD,hKD)
_(oFD,cJD)
var oLD=_n('view')
var cMD=_oz(z,78,o0C,c9C,gg)
_(oLD,cMD)
_(oFD,oLD)
_(tCD,oFD)
var oND=_n('view')
_rz(z,oND,'class',79,o0C,c9C,gg)
var lOD=_n('view')
_rz(z,lOD,'class',80,o0C,c9C,gg)
var aPD=_mz(z,'image',['class',81,'src',1],[],o0C,c9C,gg)
_(lOD,aPD)
var tQD=_n('view')
_rz(z,tQD,'class',83,o0C,c9C,gg)
var eRD=_oz(z,84,o0C,c9C,gg)
_(tQD,eRD)
_(lOD,tQD)
_(oND,lOD)
_(tCD,oND)
_(lAD,tCD)
return lAD
}
h7C.wxXCkey=4
_2z(z,63,o8C,e,s,gg,h7C,'item','index','index')
_(bUB,c6C)
}
bUB.wxXCkey=1
bUB.wxXCkey=3
_(r,eTB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oTD=_n('view')
var xUD=_oz(z,0,e,s,gg)
_(oTD,xUD)
_(r,oTD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fWD=_n('view')
var cXD=_mz(z,'video',['autoplay',0,'class',1,'id',1,'src',2],[],e,s,gg)
_(fWD,cXD)
var hYD=_n('view')
_rz(z,hYD,'class',4,e,s,gg)
var oZD=_mz(z,'image',['bindtap',5,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e,s,gg)
_(hYD,oZD)
var c1D=_n('view')
_rz(z,c1D,'class',10,e,s,gg)
var l3D=_n('view')
_rz(z,l3D,'style',11,e,s,gg)
var a4D=_oz(z,12,e,s,gg)
_(l3D,a4D)
_(c1D,l3D)
var t5D=_n('view')
_rz(z,t5D,'style',13,e,s,gg)
var e6D=_oz(z,14,e,s,gg)
_(t5D,e6D)
_(c1D,t5D)
var b7D=_n('view')
var o8D=_oz(z,15,e,s,gg)
_(b7D,o8D)
_(c1D,b7D)
var x9D=_n('view')
var o0D=_oz(z,16,e,s,gg)
_(x9D,o0D)
_(c1D,x9D)
var fAE=_n('view')
var cBE=_oz(z,17,e,s,gg)
_(fAE,cBE)
_(c1D,fAE)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,18,e,s,gg)){o2D.wxVkey=1
var hCE=_n('view')
_rz(z,hCE,'class',19,e,s,gg)
var oDE=_n('view')
var cEE=_n('view')
_rz(z,cEE,'style',20,e,s,gg)
var oFE=_oz(z,21,e,s,gg)
_(cEE,oFE)
_(oDE,cEE)
var lGE=_n('view')
var aHE=_oz(z,22,e,s,gg)
_(lGE,aHE)
_(oDE,lGE)
_(hCE,oDE)
var tIE=_n('view')
_rz(z,tIE,'class',23,e,s,gg)
var eJE=_mz(z,'score',['bind:__l',24,'scoregrad',1,'showgread',2,'vueId',3],[],e,s,gg)
_(tIE,eJE)
var bKE=_n('view')
var oLE=_oz(z,28,e,s,gg)
_(bKE,oLE)
_(tIE,bKE)
_(hCE,tIE)
_(o2D,hCE)
}
o2D.wxXCkey=1
o2D.wxXCkey=3
_(hYD,c1D)
_(fWD,hYD)
var xME=_mz(z,'lines',['bind:__l',29,'vueId',1],[],e,s,gg)
_(fWD,xME)
var oNE=_n('view')
_rz(z,oNE,'class',31,e,s,gg)
var fOE=_n('view')
_rz(z,fOE,'class',32,e,s,gg)
var cPE=_oz(z,33,e,s,gg)
_(fOE,cPE)
_(oNE,fOE)
var hQE=_n('view')
var oRE=_oz(z,34,e,s,gg)
_(hQE,oRE)
_(oNE,hQE)
_(fWD,oNE)
var cSE=_n('view')
_rz(z,cSE,'class',35,e,s,gg)
var oTE=_n('view')
_rz(z,oTE,'class',36,e,s,gg)
var lUE=_oz(z,37,e,s,gg)
_(oTE,lUE)
_(cSE,oTE)
var aVE=_n('scroll-view')
_rz(z,aVE,'scrollX',38,e,s,gg)
var tWE=_n('view')
_rz(z,tWE,'class',39,e,s,gg)
var eXE=_v()
_(tWE,eXE)
var bYE=function(x1E,oZE,o2E,gg){
var c4E=_n('view')
_rz(z,c4E,'class',44,x1E,oZE,gg)
var h5E=_mz(z,'image',['bindtap',45,'class',1,'data-event-opts',2,'mode',3,'src',4],[],x1E,oZE,gg)
_(c4E,h5E)
var o6E=_n('view')
_rz(z,o6E,'class',50,x1E,oZE,gg)
var c7E=_oz(z,51,x1E,oZE,gg)
_(o6E,c7E)
_(c4E,o6E)
_(o2E,c4E)
return o2E
}
eXE.wxXCkey=2
_2z(z,42,bYE,e,s,gg,eXE,'item','index','index')
_(aVE,tWE)
_(cSE,aVE)
_(fWD,cSE)
var o8E=_n('view')
_rz(z,o8E,'class',52,e,s,gg)
var l9E=_n('view')
_rz(z,l9E,'class',53,e,s,gg)
var a0E=_oz(z,54,e,s,gg)
_(l9E,a0E)
_(o8E,l9E)
var tAF=_n('scroll-view')
_rz(z,tAF,'scrollX',55,e,s,gg)
var eBF=_n('view')
_rz(z,eBF,'class',56,e,s,gg)
var bCF=_v()
_(eBF,bCF)
var oDF=function(oFF,xEF,fGF,gg){
var hIF=_n('view')
_rz(z,hIF,'class',60,oFF,xEF,gg)
var oJF=_mz(z,'image',['bindtap',61,'class',1,'data-event-opts',2,'mode',3,'src',4],[],oFF,xEF,gg)
_(hIF,oJF)
_(fGF,hIF)
return fGF
}
bCF.wxXCkey=2
_2z(z,59,oDF,e,s,gg,bCF,'item','index','')
_(tAF,eBF)
_(o8E,tAF)
_(fWD,o8E)
_(r,fWD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oLF=_n('view')
var lMF=_n('view')
_rz(z,lMF,'class',0,e,s,gg)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,1,e,s,gg)){aNF.wxVkey=1
var tOF=_n('view')
var ePF=_n('view')
_rz(z,ePF,'class',2,e,s,gg)
var bQF=_n('view')
var oRF=_oz(z,3,e,s,gg)
_(bQF,oRF)
_(ePF,bQF)
var xSF=_mz(z,'view',['bindtap',4,'data-event-opts',1],[],e,s,gg)
var oTF=_oz(z,6,e,s,gg)
_(xSF,oTF)
_(ePF,xSF)
_(tOF,ePF)
_(aNF,tOF)
}
else{aNF.wxVkey=2
var fUF=_n('view')
_rz(z,fUF,'class',7,e,s,gg)
var cVF=_n('view')
_rz(z,cVF,'class',8,e,s,gg)
var hWF=_n('view')
var oXF=_oz(z,9,e,s,gg)
_(hWF,oXF)
_(cVF,hWF)
var cYF=_n('view')
var oZF=_oz(z,10,e,s,gg)
_(cYF,oZF)
_(cVF,cYF)
_(fUF,cVF)
var l1F=_mz(z,'view',['bindtap',11,'data-event-opts',1,'style',2],[],e,s,gg)
var a2F=_oz(z,14,e,s,gg)
_(l1F,a2F)
_(fUF,l1F)
_(aNF,fUF)
}
aNF.wxXCkey=1
_(oLF,lMF)
_(r,oLF)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var e4F=_n('view')
_rz(z,e4F,'style',0,e,s,gg)
var b5F=_n('view')
var o6F=_v()
_(b5F,o6F)
var x7F=function(f9F,o8F,c0F,gg){
var oBG=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],f9F,o8F,gg)
var cCG=_n('view')
_rz(z,cCG,'class',8,f9F,o8F,gg)
var oDG=_n('label')
var lEG=_oz(z,9,f9F,o8F,gg)
_(oDG,lEG)
_(cCG,oDG)
var aFG=_n('view')
var tGG=_oz(z,10,f9F,o8F,gg)
_(aFG,tGG)
_(cCG,aFG)
_(oBG,cCG)
var eHG=_mz(z,'image',['class',11,'src',1],[],f9F,o8F,gg)
_(oBG,eHG)
_(c0F,oBG)
return c0F
}
o6F.wxXCkey=2
_2z(z,3,x7F,e,s,gg,o6F,'item','index','index')
_(e4F,b5F)
_(r,e4F)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oJG=_n('view')
var xKG=_n('view')
_rz(z,xKG,'class',0,e,s,gg)
var oLG=_mz(z,'image',['class',1,'mode',1,'src',2],[],e,s,gg)
_(xKG,oLG)
var fMG=_mz(z,'input',['bindconfirm',4,'bindinput',1,'class',2,'confirmType',3,'data-event-opts',4,'focus',5,'maxlength',6,'placeholder',7,'type',8,'value',9],[],e,s,gg)
_(xKG,fMG)
_(oJG,xKG)
var cNG=_n('view')
_rz(z,cNG,'class',14,e,s,gg)
var hOG=_v()
_(cNG,hOG)
var oPG=function(oRG,cQG,lSG,gg){
var tUG=_n('navigator')
_rz(z,tUG,'url',18,oRG,cQG,gg)
var eVG=_mz(z,'image',['class',19,'mode',1,'src',2],[],oRG,cQG,gg)
_(tUG,eVG)
_(lSG,tUG)
return lSG
}
hOG.wxXCkey=2
_2z(z,17,oPG,e,s,gg,hOG,'item','index','')
_(oJG,cNG)
_(r,oJG)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['component/line/line.wxss']=setCssToHead([".",[1],"lines{ padding:",[0,10],"; }\n.",[1],"line{ height: 0px; border-top: 1px #EAEAEA solid; }\n",],undefined,{path:"./component/line/line.wxss"});    
__wxAppCode__['component/line/line.wxml']=$gwx('./component/line/line.wxml');

__wxAppCode__['component/myput/myput.wxss']=setCssToHead([".",[1],"uni-input{ border-radius: 4px; border: 1px salmon solid; width: 70%; }\n",],undefined,{path:"./component/myput/myput.wxss"});    
__wxAppCode__['component/myput/myput.wxml']=$gwx('./component/myput/myput.wxml');

__wxAppCode__['component/score/score.wxss']=setCssToHead([".",[1],"score{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"score_img{ width:12px; height: 12px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./component/score/score.wxss"});    
__wxAppCode__['component/score/score.wxml']=$gwx('./component/score/score.wxml');

__wxAppCode__['pages/cover/cover.wxss']=setCssToHead([".",[1],"black{ width: 100%; height:100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: #000; position: fixed; }\n.",[1],"img_cover{ -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./pages/cover/cover.wxss"});    
__wxAppCode__['pages/cover/cover.wxml']=$gwx('./pages/cover/cover.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"tu{ width: 100%; height: ",[0,440],"; }\n.",[1],"tu_img{ width: 100%; height: ",[0,440],"; }\n.",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"logo { height: ",[0,200],"; width: ",[0,200],"; margin-top: ",[0,200],"; margin-left: auto; margin-right: auto; margin-bottom: ",[0,50],"; }\n.",[1],"text-area { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"title { font-size: ",[0,36],"; color: #8f8f94; }\n.",[1],"scorl_hot{ margin-top: 10px; margin-left: 10px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"hot_bot_img{ width: 100%; white-space: nowrap; margin-top: 6px; }\n.",[1],"hot_img{ margin-left: 10px; display: inline-block; }\n.",[1],"hot_img wx-image{ width: ",[0,220],"; height: ",[0,280],"; }\n.",[1],"hot_text{ width: ",[0,220],"; display: block; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; font-weight: bold; font-size: ",[0,36],"; }\n.",[1],"videm{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"myVideo{ display: inline-block; margin-left: 8px; margin-top: 10px; width: ",[0,340],"; height: ",[0,220],"; }\n.",[1],"like_list{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: 10px; }\n.",[1],"like{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,300],"; margin-top: 10px; -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between; }\n.",[1],"hot_icon{ width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"like_img{ width: ",[0,220],"; height: ",[0,300],"; border-radius: 6px; }\n.",[1],"like_text{ width: ",[0,340],"; height: 100%; font-size: ",[0,34],"; }\n.",[1],"like_title{ font-weight: bold; }\n.",[1],"dianzan{ width: ",[0,150],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color:yellow; border-left: #C0C0C0 dashed ",[0,2],"; }\n.",[1],"dianzan_jia{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column; }\n.",[1],"dianzan_text,.",[1],"dianzan_yi{ -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"dianzan_yi{ width: 40px; height: 40px; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/loginReg/loginReg.wxss']=undefined;    
__wxAppCode__['pages/loginReg/loginReg.wxml']=$gwx('./pages/loginReg/loginReg.wxml');

__wxAppCode__['pages/movieinfo/movieinfo.wxss']=setCssToHead([".",[1],"info_video{ width: 100%; height: ",[0,400],"; }\n.",[1],"info_img{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; background-color: #f7f4f9; padding: 10px 10px 20px 10px; }\n.",[1],"info_img_icon{ width: ",[0,310],"; height: ",[0,340],"; }\n.",[1],"info_img_text{ margin-left: 20px; width: ",[0,400],"; font-size: 16px; color: #C0C0C0; }\n.",[1],"score_info{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: ",[0,340],"; padding: 10px; background-color: #ffffff; -webkit-box-shadow: 2px 2px 4px #999999; box-shadow: 2px 2px 4px #999999; }\n.",[1],"info_titl{ color: #C0C0C0; }\n.",[1],"info_casof{ padding:0 10px 10px 10px; }\n.",[1],"role{ white-space: nowrap; }\n.",[1],"person{ width: ",[0,220],"; margin-right: 10px; display: inline-block; }\n.",[1],"person_img{ width: ",[0,220],"; height: ",[0,320],"; }\n.",[1],"person_text{ white-space:nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden; text-align: center; }\n.",[1],"graden{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n",],undefined,{path:"./pages/movieinfo/movieinfo.wxss"});    
__wxAppCode__['pages/movieinfo/movieinfo.wxml']=$gwx('./pages/movieinfo/movieinfo.wxml');

__wxAppCode__['pages/my/my.wxss']=setCssToHead(["# # .",[1],"me_name{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-left: ",[0,30],"; }\n.",[1],"login_me{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/my/my.wxss:2:1)",{path:"./pages/my/my.wxss"});    
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/myinfo/myinfo.wxss']=setCssToHead([".",[1],"info_my{ width: 20px; height: 20px; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"you_info{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; height: 40px; border-bottom: #EAEAEA 1px solid; }\n.",[1],"left_inf{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./pages/myinfo/myinfo.wxss"});    
__wxAppCode__['pages/myinfo/myinfo.wxml']=$gwx('./pages/myinfo/myinfo.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"search_top{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: 0 ",[0,20]," ",[0,20]," ",[0,20],"; position: fixed; z-index: 200; }\n.",[1],"search_input{ width: ",[0,650],"; height: ",[0,60],"; font-size: 14px; background-color:#eaeaea; }\n.",[1],"search_icon{ width: ",[0,50],"; height: ",[0,60],"; text-align: right; background-color: #eaeaea; padding: 0 ",[0,20]," 0 0; padding: 0 ",[0,20],"; }\n.",[1],"serach_content{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; padding: ",[0,70]," ",[0,20]," 0 ",[0,20],"; }\n.",[1],"poster{ width: ",[0,200],"; height: ",[0,370],"; padding: ",[0,20],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();

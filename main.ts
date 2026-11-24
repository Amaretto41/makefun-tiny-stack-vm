import{mkdirSync as a,readdirSync as b,readFileSync as c,writeFileSync as d}from'node:fs';
import{join as e}from'node:path';
function R(p,q){
let D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),O=new Uint8Array(65536),n=p.length,l=0,s=0,k=0,w=0,i=0,t=0;
let u=x=>{if(s<x)throw 2},v=()=>{if(s>255)throw 3};
try{
for(;;){
if(t==1e6)throw 10;
if(w<0|w>=n)throw 9;
let g=p[w];
if(!(g<8|g>15&g<35&g!=31|g>47&g<53|g==64|g==65|g>79&g<84))throw 5;
let m=g==1?1:g==2?4:g>47&g<52?2:0;
if(m&&w+m>=n)throw 9;
t++;
let x=w+1+m;w=x;
if(g>15&g<35){
if(g==23){u(1);D[s-1]=-D[s-1];continue}
if(g==27){u(1);D[s-1]=~D[s-1];continue}
u(2);
let B=D[s-1],A=D[s-2];
if(g>18&g<23&&!B)throw 4;
D[--s-1]=g==16?A+B:g==17?A-B:g==18?Math.imul(A,B):g==19?Math.trunc(A/B):g==20?A%B:g==21?(A>>>0)/(B>>>0)|0:g==22?(A>>>0)%(B>>>0):g==24?A&B:g==25?A|B:g==26?A^B:g==28?A<<(B&31):g==29?A>>(B&31):g==30?A>>>(B&31):g==32?A==B?1:0:g==33?A<B?1:0:(A>>>0)<(B>>>0)?1:0;
continue}
switch(g){
case 0:return[O.slice(0,l),0];
case 1:v();D[s++]=(p[x-1]<<24)>>24;break;
case 2:v();D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;break;
case 3:u(1);s--;break;
case 4:u(1);v();D[s]=D[s-1];s++;break;
case 5:{u(2);let T=D[s-1];D[s-1]=D[s-2];D[s-2]=T;break}
case 6:u(2);v();D[s]=D[s-2];s++;break;
case 7:{u(3);let T=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=T;break}
case 48:case 49:case 50:{let r=((p[x-2]|p[x-1]<<8)<<16)>>16,T=g==48;if(!T){u(1);let V=D[--s];T=g==49?!V:V!=0}if(T)w=x+r;break}
case 51:if(k>63)throw 7;C[k++]=x;w=p[x-2]|p[x-1]<<8;break;
case 52:if(!k)throw 8;w=C[--k];break;
case 64:{u(1);let A=D[s-1];if(A<0|A>255)throw 6;D[s-1]=M[A];break}
case 65:{u(2);let A=D[s-1];if(A<0|A>255)throw 6;M[A]=D[s-2];s-=2;break}
case 80:{u(1);let S=String(D[s-1]);if(l+S.length>65536)throw 11;s--;for(let j=0;j<S.length;)O[l++]=S.charCodeAt(j++);break}
case 81:u(1);if(l>65535)throw 11;O[l++]=D[--s]&255;break;
case 82:v();D[s++]=i<q.length?q[i++]:-1;break;
case 83:u(1);return[O.slice(0,l),D[--s]&255];
}
}
}catch(e){if(typeof e!='number')throw e;return[O.slice(0,l),e]}
}
let I=process.env.MAKEFUN_INPUT_DIR??'/input',P=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(let f of b(I).sort()){
let[o,z]=R(c(e(I,f,'program.bin')),c(e(I,f,'input.bin')));
a(e(P,f),{recursive:!0});
d(e(P,f,'stdout.bin'),o);
d(e(P,f,'exit.txt'),z+'\n');
}

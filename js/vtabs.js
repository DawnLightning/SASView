// JavaScript Document
function g(o){return document.getElementById(o);}
function hoverli(n){
for(var i=1;i<=13;i++){g('tb_'+i).className='aa';g('tbc_0'+i).className='undis';}g('tbc_0'+n).className='listtab';g('tb_'+n).className='bb';
}
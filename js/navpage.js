function navpage(pagename,t1,t2){
  var title1=document.getElementById("title1");
  var title2=document.getElementById("title2");
  title1.innerHTML=t1;
  title2.innerHTML=t2;
  showpage(pagename);
}
function showpage(pagename){
  var xmlhttp=GetXmlHttpObject();

  if (xmlhttp==null)
  {
    alert ("Browser does not support HTTP Request");
    return;
  }
  var url=document.URL;
  url= url.substring(0,url.lastIndexOf('/')+1);
  url += "includes/"+pagename;
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 || xmlhttp.readyState=="complete")
    {
      var divpage=  document.getElementById("wrapper") ;
      divpage.innerHTML=xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send(null);
}


function GetXmlHttpObject()
{
  var xmlhttp;
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    try{
      xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e){
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }

  return xmlhttp;
}

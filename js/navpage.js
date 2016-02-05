function navpage(pagename,t1,t2){
  $("#title1").html(t1);
  $("#title2").html(t2);
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
      $("#wrapper").html(xmlhttp.responseText);
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

// JavaScript Document
/*confirm*/
$(document).ready(function() {  
    //Default Action  
    $(".tab_content").hide(); //Hide all content  
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab  
    $(".tab_content:first").show(); //Show first tab  content  
      
    //On Click Event  
    $("ul.tabs li").click(function() {  
        $("ul.tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $(".tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;  
    });  
  
});  
/*set*/
$(document).ready(function() {  
  
    //Default Action  
    $(".set-tab_content").hide(); //Hide all content  
    $("ul.set-tabs li:first").addClass("active").show(); //Activate first tab  
    $(".set-tab_content:first").show(); //Show first tab  content  
      
    //On Click Event  
    $("ul.set-tabs li").click(function() {  
        $("ul.set-tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $(".set-tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;  
    });  
  
});  
/*schedule*/
<script type="text/javascript">   
$(document).ready(function() {  
  
    //Default Action  
    $(".sch-tab_content").hide(); //Hide all content  
    $("ul.sch-tabs li:first").addClass("active").show(); //Activate first tab  
    $(".sch-tab_content:first").show(); //Show first tab  content  
      
    //On Click Event  
    $("ul.sch-tabs li").click(function() {  
        $("ul.sch-tabs li").removeClass("active"); //Remove any "active" class  
        $(this).addClass("active"); //Add "active" class to selected tab  
        $(".sch-tab_content").hide(); //Hide all tab content  
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content  
        $(activeTab).fadeIn(); //Fade in the active content  
        return false;  
    });  
  
});  
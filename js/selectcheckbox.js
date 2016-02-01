// JavaScript Document

function selectallweek(thisform) {
  var checkweek = document.getElementsByName("checkweek");
  var check = checkweek[0].checked;
  // 遍历 form  
  for (var i = 0; i < thisform.elements.length; i++) {
    // 提取控件  
    var checkbox = thisform.elements[i];
    // 检查是否是指定的控件  
    if (checkbox.name != "checkweek" && checkbox.type === "checkbox" && checkbox.checked != check) {
      checkbox.checked = check;
    }
  }
}

function selectday(thisday, dayname) {
  var allCheckBoxs = document.getElementsByName(dayname);
  var selectOrUnselect = true;
  if (thisday.checked) {
    selectOrUnselect = false;
  }

  if (selectOrUnselect) {

    for (var i = 0; i < allCheckBoxs.length; i++) {
      allCheckBoxs[i].checked = false;
    }
  } else {
    for (var i = 0; i < allCheckBoxs.length; i++) {
      allCheckBoxs[i].checked = true;
    }
  }
}

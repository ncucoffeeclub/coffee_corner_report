$(document).ready(function(){
    $.getScript("js/fade.js", function(){
       // alert("Script loaded");
       fadeIn(iBase.Id('start-page'));
    });
});

var answer = {};

var page_id = [
  "start-page",
  "profile-name",
  "profile-fb-name",
  "profile-grade",
  "profile-message",
  "first-question",
  "second-question",
  "third-question"
  
]

var button_id = [
  "start-page-button",
  "profile-name-button",
  "profile-fb-name-button",
  "profile-grade-button",
  "profile-message-button",
  "first-question-button",
  "second-question-button",
  "third-question-button"
]

var grade_array=[
  "在校生","準大一","準碩一"
]

var grade_mapping_array=[
  "系所","高中","大學"
]

var user_name;
var grade;

var user_nick_name;



function change_page(from,to){

  switch(from){
    case 1:
      if( !$('#name').val() ) {
        $('#name').addClass('warning');
        document.getElementById("name").placeholder = "請輸入姓名";
        return;
      };

      answer['name'] = $('#name').val();
      user_name = $('#name').val();
      user_nick_name = user_name.substring(1);
      iBase.Id('profile-fb-name-plugin_name').innerHtml = user_name;

      break;
    case 2:
      if( !$('#fbname').val() ) {
        $('#fbname').addClass('warning');
        document.getElementById("fbname").placeholder = "請輸入 facebook 名稱";
        return;
      };

      iBase.Id('profile-grade-plugin_name').innerHtml = user_nick_name;
      answer['fbname'] = $('#fbname').val();
      break;
    case 3:
      grade = $('input[name="gender-grade"]:checked').val();
      answer['grade'] = grade_array[grade];
      iBase.Id('profile-message-plugin_name').innerHtml = user_nick_name;
      iBase.Id('profile-message-plugin_question').innerHtml = grade_mapping_array[grade];
      break;
    case 4: 
      if( !$('#message').val() ) {
        $('#message').addClass('warning');
        document.getElementById("message").placeholder = "不可為空";
        return;
      };
      answer['message'] = $('#message').val();
      break;
    case 5:
      answer['first-answer'] = $('input[name="gender1"]:checked').val();
      break;
    case 3:
      answer['second-answer'] = $('input[name="gender2"]:checked').val();
      break;
    case 4:
      answer['second-answer'] = $('input[name="gender3"]:checked').val();
      break;
 
  }

  $('#'+button_id[from]).prop('disabled', true);

  fadeOut(iBase.Id(page_id[from]),50,0,function(){
    if(to < button_id.length){
      fadeIn(iBase.Id(page_id[to]),50,null);
      $('#'+button_id[from]).prop('disabled', false);
    }
    
  });
}
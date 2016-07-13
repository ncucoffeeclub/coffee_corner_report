$(document).ready(function(){
    $.getScript("js/fade.js", function(){
        
    });

     $.getScript("js/facebook_wrapper.js", function(){
    });
});

function press_enter(box_id,button){
  $('#'+box_id).on('keyup keypress', function(e) {
    var key = window.event ? e.keyCode : e.which;  
    if (key == 13) {
      $('#'+button_id[button]).click(); 
    }  
  });
}

window.onload = function(){
  fadeIn(iBase.Id('start-page'));
   var length = page_id.length;
   now_page = 0;
  for(var i=0;i<length;i++){
    add_page_links_nav(i);
  }
}

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
var now_page;

var user_nick_name;


function add_page_links_nav(counter){
    var pretext =  document.getElementById("page_links_nav").innerHTML;
    document.getElementById("page_links_nav").innerHTML = pretext+"<li><input type=\"button\" value="+(counter+1)+" onclick=\"fading(null,"+ counter + ")\"></input></li>";
}


function fading(from,to){

  if(from == null){
    from = now_page;
  }

  fadeOut(iBase.Id(page_id[from]),20,0,function(){
    if(to < button_id.length){
      fadeIn(iBase.Id(page_id[to]),20,null);
      $('#'+button_id[from]).prop('disabled', false);
    }
    
  });
}




function change_page(from,to){

  $('#'+button_id[from]).prop('disabled', true);
  

  switch(from){
    case 0:
      custom_login(function(name,facebookid){
        if(user_name != null && facebookid != null){
          answer['name'] = $('#name').val();
          answer['facebookid'] = facebookid;
          fading(from,5);
          now_page = to;
        }else{
          fading(from,to);
          now_page = to;
        }
        
      });
      break;
    case 1:
      if( !$('#name').val() ) {
        $('#name').addClass('warning');
        document.getElementById("name").placeholder = "請輸入姓名";
        return;
      };

      answer['name'] = $('#name').val();
      user_name = $('#name').val();
      user_nick_name = user_name.substring(1);
      iBase.Id('profile-fb-name-plugin_name').innerText  = user_name;
      fading(from,to);
      now_page = to;
      break;
    case 2:
      if( !$('#fbname').val() ) {
        $('#fbname').addClass('warning');
        document.getElementById("fbname").placeholder = "請輸入 facebook 名稱";
        return;
      };

      iBase.Id('profile-grade-plugin_name').innerText = user_nick_name;
      answer['fbname'] = $('#fbname').val();
      fading(from,to);
      now_page = to;
      break;
    case 3:
      grade = $('input[name="gender-grade"]:checked').val();
      answer['grade'] = grade_array[grade];
      iBase.Id('profile-message-plugin_name').innerText = user_nick_name;
      iBase.Id('profile-message-plugin_question').innerText = grade_mapping_array[grade];
      fading(from,to);
      now_page = to;
      break;
    case 4: 
      if( !$('#message').val() ) {
        $('#message').addClass('warning');
        document.getElementById("message").placeholder = "不可為空";
        return;
      };
      answer['message'] = $('#message').val();
      fading(from,to);
      now_page = to;
      break;
    case 5:
      answer['first-answer'] = $('input[name="gender1"]:checked').val();
      fading(from,to);
      now_page = to;
      break;
    case 6:
      answer['second-answer'] = $('input[name="gender2"]:checked').val();
      fading(from,to);
      now_page = to;
      break;
    case 7:
      answer['second-answer'] = $('input[name="gender3"]:checked').val();
      fading(from,to);
      now_page = to;
      break;
 
  }

  
}
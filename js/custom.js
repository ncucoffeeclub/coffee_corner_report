$(document).ready(function(){
    $.getScript("E:/Program Files/Git/git/coffee_corner_report/js/fade.js", function(){
       // alert("Script loaded");
       fadeIn(iBase.Id('start-page'));
    });
});

var answer = {};

var page_id = [
  "start-page",
  "first-question",
  "second-question",
  "third-question",
  "fourth-question"
]

var button_id = [
  "start-page-button",
  "first-question-button",
  "second-question-button",
  "third-question-button",
  "fourth-question-button"
]

function change_page(from,to){

  

  

  switch(from){
    case 1:
      if( !$('#name').val() ) {
        $('#name').addClass('warning');
        document.getElementById("name").placeholder = "請輸入姓名";
        return;
      };
      answer['name'] = $('#name').val();
      break;
    case 2:
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
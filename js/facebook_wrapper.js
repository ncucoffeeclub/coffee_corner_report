(function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
      FB.init({
        appId      : '159509661128338',
        xfbml      : true,
        version    : 'v2.5'
      });

      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });

    };



function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
      }
    }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }
  

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.

function custom_login(callback){
      FB.login(function(response) {
        if (response.status === 'connected') {

          var name;
          var facebookid;

          if(callback != undefined){
            FB.api('/me', function(response) {
              console.log('Successful login for: ' + response.name);
              console.log('id: ' + response.id);
              name = response.name;
              facebookid = response.id;
              callback(name,facebookid);
            });
          }
        } else if (response.status === 'not_authorized') {
          callback(null,null);
        } else {
          console.log(response.status);
          callback(null,null);
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
        }
      });
    }
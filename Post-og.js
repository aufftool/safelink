/// in post 
// by aufftool.in
        function gotolinkcountdown(){
          var btn = $('#btn-gotolink');
          btn.text('Please wait...');
          btn.removeClass('d-none');
          var countDown = 16;
          $('#countdown').removeClass('d-none');
          var x = setInterval(function() {
            var distance = countDown -= 1;
            $('#countdown span').text(distance);
            if (distance < 0) {
              $('#countdown').hide();
              clearInterval(x);
              btn.prop('disabled', false);
              btn.text('Go to link');
              $('#gotolink').removeClass('pt-5').removeClass('mt-5');
              $('#alert-done').removeClass('d-none');
            }
          }, 1000);
        }
        $(document).ready(function(){
          $.urlParam = function(name){
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null){
              return null;
            }
            else{
              return decodeURI(results[1]) || 0;
            }
          }
          if ($.urlParam('o') == null){
            $('#progressbar').parent().hide();
          }else{
            percentVal = 0;
            setInterval(function(){
              percentVal += .5;
              $('#progressbar').css("width", percentVal+ '%'); 
              if(percentVal > 120){
                $('#progressbar').parent().hide();
                $('#btngetlink').removeClass('d-none');
              }
            }, 30);
          }
          $('body').on('click', '#btngetlink', function(){
            $(this).parent().fadeOut();
            $('html, body').animate({
              scrollTop: $("#middle-post").offset().top
            }, 800);
            gotolinkcountdown();
          });
          $('body').on('click', '#btn-gotolink', function(){
            var realurl = aesCrypto.decrypt(convertstr($.urlParam('o')),convertstr('root'));
            window.open(realurl, '_blank');
          });
        });
        

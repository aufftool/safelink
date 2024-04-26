/// aufftool.in 
// by techhubtrick.com
        function convertlink(){
          var generateurl = $("#generateurl"),
              generate = $("#generate"),
              generated = $("#generated"),		
              spinner = $("#spinner"),
              resulturl = $('#resulturl');
          if (generateurl.val() == "") {
            generateurl.focus();
            return false;
          }
          spinner.slideDown();
          $.ajax({
            url : '/feeds/posts/summary?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function(data) {
              var link = '',
                  content = data.feed.entry,
                  links =new Array();	
              if (content !== undefined) {
                for (var i = 0; i < content.length; i++) {
                  for (var j = 0; j < content[i].link.length; j++) {
                    if (content[i].link[j].rel == "alternate") {
                      link = content[i].link[j].href;
                      break;
                    }
                  }
                  links[i] = link;
                  var randindex = Math.random() * links.length; 
                  randindex = parseInt(randindex);
                }
//
                resultgenerate = window.location + "?o=" + aesCrypto.encrypt(convertstr(generateurl.val()),convertstr('root'));
                resulturl.val(resultgenerate);
              }else {
                resulturl.val('No result!');
              }
              spinner.slideUp();
              $('#msg').html('<strong>Well done!</strong> link has been encrypted.');
              generated.modal('show');
            },
            error: function() {
              resulturl.val('Error loading feed!');
            }
          });
        }
        $(document).ready(function(){
          $("#spinner").hide();
          clipboard.on('success', function(e) {
            $('#msg').html('<b>Copied!</b> Link has been copied to clipboard.');
          });
          $("#btngenerate").on("click",function(){
            convertlink();
          });
          $('form#form-convert').on('submit', function(e){
            e.preventDefault();
            convertlink();
          });
        });
      

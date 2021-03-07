base_url = "https://e0e05e41ff63.ngrok.io/";

$(document).on({
    ajaxStart: function() { $("body").addClass("loading");    },
     ajaxStop: function() { $("body").removeClass("loading"); }    
});

function get_all_items(){
  $.ajax({
          type: "GET",
          url: base_url + "get_all_items",
          async:false,
          dataType: "json",
          success: function(result) {
            string_total= ''
            for(var i=0; i<result.length;i++){
              string_op='<option name="choice'+i+'" value="'+result[i]+'" >'+result[i]+'</option>';
              string_total+=string_op;
            }
            $('#all_items_div').html(string_total);
            $('#items_by_name_div').html('');
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
                  alert("Some error occured in get file, Try Again");
          },
        });  
}

function connect(){
  $.ajax({
          type: "GET",
          url: base_url + "connect",
          async:false,
          dataType: "json",
          success: function(result) {
            if (result[0] == true){
              $('#status').html('Connection Successful!')
              get_all_items();
            }
            else{alert('Error');}

          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
                  alert("Some error occured in get file, Try Again");
          },
        });  
}

var count =0;
function get_items_by_name(item_name){
  $.ajax({
          type: "GET",
          url: base_url + "get_items_by_name",
          async:false,
          data:{
            "item_name":item_name
          },
          dataType: "json",
          success: function(result) {
            console.log(count)
            // $('#items_by_name_div').html('');
            try{ 
              // label_old = document.getElementById("label"+count.toString());
              // label_old.style.visibility = "none";
              $("#"+count.toString()+"_div").css("display", "none");
            }
            catch(err){
              console.log(err)
            }
            count+=1
            
            var label_div= document.createElement("div");
            label_div.id = count.toString()+"_div";
            for(var i=0; i<result.length;i++){
                var label= document.createElement("label");
                var description = document.createTextNode(result[i][0]);
                var checkbox = document.createElement("input");
                const lineBreak = document.createElement('br');
                checkbox.type = "checkbox";  
                checkbox.id = "asset_codes";
                checkbox.name = "slct[]";     
                checkbox.value = result[i][0];       
                label.appendChild(checkbox);   
                label.appendChild(description);
                label.append(lineBreak);
                label_div.appendChild(label);
            }
            
                document.getElementById('items_by_name_div').appendChild(label_div) 
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
                  alert("Some error occured in get file, Try Again");
          },
        });  
}

function getLabel(size, codes){
   $.ajax({
          type: "GET",
          url: base_url + "get_labels",
          async:false,
          data:{
            "size":size.toString(),
            "codes": JSON.stringify(codes),
          },
          dataType: "json",
          success: function(result) {
              console.log("Done")
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
                  alert(errorThrown, textStatus);
          },
        });  
}

function generatePdf(){
    $.ajax({
        url:  base_url + "downloadPDF",
        method: 'GET',        
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'bar_label.pdf';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        },
         error: function(XMLHttpRequest, textStatus, errorThrown){
                  console.log(errorThrown, textStatus);
          },
          cache: false
    });
}

function getLabelPDF(){
  var size = document.getElementById('size_div').value;
  var codes = $('#asset_codes:checked').map(function() {
                     return this.value;
                  }).get();
  getLabel(size, codes);
  generatePdf();
}
let button = document.getElementById('create-submit');

button.addEventListener('click',function(e){
e.preventDefault();

let user_name = document.getElementById('create-name').value;
var user_id =JSON.parse( sessionStorage.getItem('user') );
let user_brand = document.getElementById('create-brand').value;
let desc_name = document.getElementById('create-description').value;
let price_value = document.getElementById('create-price').value;
let quantity_value = document.getElementById('create-quantity').value;
let goods_service = document.getElementById('prod-opt').value;
let categories = document.getElementById('cat-opt').value;

url = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/creatProd.php";
url_image_upload = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/upload.php";

console.log(goods_service);

$.getJSON(url,
     {pName: user_name,
     user:user_id,
     pBrand:user_brand,
     pDesc:desc_name,
     pPrice:price_value,
     pQuant:quantity_value,
     pCat:categories,
     pType:goods_service
     },
     function(results){

     console.log("The results",results);
     //if the user inputs wrong credentials
     if(user_name=="" || user_brand==""){
       console.log("empty");
         $("#response").fadeIn().html('<span>All the fields are required</span>');
         setTimeout(function(){$("#response").fadeOut('slow');},5000);
         return;
       }

     //   //If the user exists in the database then it links to the Homepage
     //   else if( results!="!exists" && username!="" && password!=""){

     //     sessionStorage.setItem('user', JSON.stringify(results[0]));
     //     alert(JSON.parse(sessionStorage.getItem('user')));
     //     window.location.href='Homepage.html';
     //   }
     //   //When the fields are empty
     //   else{

     //   $("#response").fadeIn().html('<span>All fields required</span>');
     //   setTimeout(function(){ $("#response").fadeOut('slow');}, 3000);
     //   return;
       
      }

     );
     postImageData();
});

//////////////////////////////////////////////////////////////////

function postImageData(){
  var img = document.getElementById('add-picture')
  var myBase64EncodedData  = getBase64Image(img);
                  $.ajax({
                      type: 'POST',
                      url: url_image_upload,
                      data: { 
                          'image': myBase64EncodedData 
                            },
                      success: function(msg){
                          console.log('posted' + msg);
                      }
                  });
              }


//////////////////////////////////////////////////////////////////

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var src = reader.result;
    var variable;
    
    //document.getElementById("dataUrl").innerText = src;
    
    console.log("This is the image : ",input.files);
    reader.onload = function (e) {
      $('#add-picture')
        .attr('src', e.target.result);
        variable = e.target.result;
        console.log("The base64",variable);
        //url_path = bitmap.image.toString(variable);
        var image = new Image();
        image.src = variable;
        url_path = image.src;
        var decodedString = atob( e.target.result);
        console.log(decodedString); 
        // Outputs: "Hello World!
        //url_path = input.files[0]['type'];//.split('/');
        //console.log(image);
    };
      
    reader.readAsDataURL(input.files[0]);
  }
}


//////////////////////////////////////////////////////////////////

function getBase64Image(img) {
  // Create an empty canvas element
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  // Copy the image contents to the canvas
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // Get the data-URL formatted image
  // Firefox supports PNG and JPEG. You could check img.src to
  // guess the original format, but be aware the using "image/jpg"
  // will re-encode the image.
  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}



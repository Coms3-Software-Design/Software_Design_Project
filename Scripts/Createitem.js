// $(document).ready(function(){
//     $('#create-submit').click(function(e){

//       e.preventDefault();

//       var user_name = $("#create-name").val();
//       var user_id =JSON.parse( sessionStorage.getItem('user') );
//       console.log(user_id.UserID);

//       var brand_name = $("#create-brand").val();
//       var desc_name = $("#create-description").val();
//       var price_value = $("#create-price").val();
//       var quantity_value = $("#create-quantity").val();
// //        //$('#datecreated').val(new Date().toDateInputValue());
//           console.log(user_name,brand_name,desc_name,price_value,quantity_value);
//           console.log( $('#submit_form_create').serialize() );


//          if(user_name =='' || brand_name=='' || desc_name== '' || price_value=='' || quantity_value=='')
//          {

//               $('#response').html('<span class="li-modal">All Fields are required</span>');
//               console.log("Empty");
//          }
//          else
//          {
//               $.ajax({
//                url = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/creatProd.php",
//                method:"POST",
//                data:$('#submit_form_create').serialize(),
//                dataType: "text",
//                beforeSend:function(){
//                     $('#response').html('<span class="li-modal">Loading response...</span>');
//                },
//                success:function(data){
                   
//                $('form').trigger("reset");
//                $('#response').fadeIn().html('<span class="li-modal">Uploading successful</span>');
//                setTimeout(function(){
//                $('#response').fadeOut("slow");
//                }, 5000);
//                }
          
//                });
//          }

//     });
// });


let button = document.getElementById('create-submit');

button.addEventListener('click',function(e){
e.preventDefault();

let user_name = document.getElementById('create-name').value;
var user_id =JSON.parse( sessionStorage.getItem('user') );
let user_brand = document.getElementById('create-brand').value;
let desc_name = document.getElementById('create-description').value;
let price_value = document.getElementById('create-price').value;
let quantity_value = document.getElementById('create-quantity').value;
url = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/creatProd.php";
//console.log(quantity_value);

$.getJSON(url,
     {pName: user_name, 
     user:user_id, 
     pBrand:user_brand, 
     pDesc:desc_name, 
     pPrice:price_value,
     pQuant:quantity_value,  
     pCat:"Other",
     pType:"goods"
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
     
});
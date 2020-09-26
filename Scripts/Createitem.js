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
     
});






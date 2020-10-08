const cartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPGetCart.php";
const cartPostUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Cart/MPPostCart.php";
const productPicUrl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/';

let loggedUser = JSON.parse(localStorage.getItem('user'));
console.log(loggedUser);

document.getElementById("emptyCart").addEventListener('click',()=>{
    window.location.href = "Homepage.html";
})

let populate = function(){
    
    $.getJSON(cartUrl , {userID : loggedUser.UserID} , function(results){
        let totalItemsQuant = 0;
        let priceSum = 0;
        let htmlItems = ``;
        console.log(results);
        if(results.length === 0){
            $("#cartBody").empty();
            return;
        }

        document.getElementById("emptyCart").id = "cartNotEmpty";
        $("#cartNotEmpty").empty();


       // sessionStorage.setItem("cart" , JSON.stringify(results));

        htmlItems += `${results.map(function(cartItem){
            totalItemsQuant += 1;
            priceSum += (cartItem.Product_Price * cartItem.Amount);
            
            return `
            <div class="media" style="margin-bottom: 20px; ">
            <img src="${productPicUrl}${cartItem.Product_Pic}" class="mr-3 cartItemPic" alt="..." >
            <div class="media-body">
              
              <h4 class="mt-0" style="text-color : rgb(72, 74, 72)">${cartItem.Product_Name}</h4>  
              <p>${cartItem.Product_Description}</p> 
            </div>
        
            <div class="media-body">
            <h6 id="Amt${cartItem.Product_ID}"><i id="minus${cartItem.Product_ID}" class="fa fa-minus" aria-hidden="true" style="margin-right:20px;"></i>${cartItem.Amount}<i id="plus${cartItem.Product_ID}"class="fa fa-plus" aria-hidden="true" style="margin-left:20px;"></i></h6>
            </div>

            <div class="media-body">
                <h5>R${cartItem.Product_Price}</h5>
            </div>
            
            
            <div class="media-body">
            <h5>R${cartItem.Product_Price * cartItem.Amount}</h5>
            </div>

            </div>
            `;
            
        }).join('')}`;

        if(results.length === 0 ){
            htmlItems = `<a href="Homepage.html" style="marginn:auto; width:50%;"><Button class="btn btn-danger">Continue Shopping<button></a>`;
        }
        
        document.getElementById("cartItemsDiv").innerHTML = htmlItems;
        document.getElementById("tLNumItem").innerHTML = totalItemsQuant;
        document.getElementById("SumNumItem").innerHTML = totalItemsQuant;  
        document.getElementById("PriceSum").innerHTML = "R"+priceSum;

        

        results.forEach(cart_i =>{
            console.log(cart_i);
            
            let minus = document.getElementById(`minus${cart_i.Product_ID}`);
            let plus = document.getElementById(`plus${cart_i.Product_ID}`);
            minus.setAttribute("onclick",`update(${cart_i.Product_ID} , ${-1})`);
            plus.setAttribute("onclick",`update(${cart_i.Product_ID} , ${1})`);
        })
        
    });

   

       

}
function update(ID , num){
    
    let promise = new Promise(resolve=>{
        $.getJSON(cartUrl , {userID : loggedUser.UserID} , results => {
            results.forEach(prod => {
                if(parseInt(prod.Product_ID) === parseInt(ID)){
                    $.getJSON(cartPostUrl, {userID : loggedUser.UserID, product_ID :  ID , amount : parseInt(prod.Amount)+num}, ans => {
                        resolve( [num , prod.Amount]);  
                    });
                }
              
            });
        });

    });

    promise.then(answer=>{
        populate();
    });
    
 

}
populate();

//window.location.href = 'CartItem.html';


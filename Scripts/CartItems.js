const cartUrl = "https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPGetCart.php";
const productPicUrl = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/Products/';

let loggedUser = JSON.parse(localStorage.getItem('user'));
console.log(loggedUser);

let populate = function(){
    
    $.getJSON(cartUrl , {userID : loggedUser.UserID} , function(results){
        let htmlItems = ``;
        console.log(results);

        htmlItems += `${results.map(function(cartItem){
            return `
            <div class="media" style="margin-bottom: 25px; background:rgb(222, 227, 224)">
            <img src="${productPicUrl}${cartItem.Product_Pic}" class="mr-3 cartItemPic rounded-circle" alt="..." >
            <div class="media-body">
              <h4 class="mt-0">${cartItem.Product_Name}</h4>   
            </div>
            
            <div class="media-body">
            <h6><i class="fa fa-minus" aria-hidden="true" style="margin-right:20px;"></i>${cartItem.Amount}<i class="fa fa-plus" aria-hidden="true" style="margin-left:20px;"></i></h6>
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

        document.getElementById("cartItemsDiv").innerHTML = htmlItems;
    });

       

}

populate();
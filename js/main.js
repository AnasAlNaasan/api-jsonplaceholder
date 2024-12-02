


// function getAPI() {
//     var xhttp = new XMLHttpRequest;
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var x = this.responseText;
//             var apiProducts = JSON.parse(x);
//             var api = apiProducts.products;
//             var boxUpdate = '';

//             for (i = 0; i<api.length; i++) {
//                 let box = `
//                     <div class='col-md-3'>
//                         <img src='${api[i].images[0]}' class=''>
//                         <h3>${api[i].id}</h3>
//                         <h5>${api[i].title}</h5>
//                     </div>
//                 `;
//                 boxUpdate = boxUpdate + box;
//             }

//             document.querySelector('.test').innerHTML = boxUpdate;


//         };
//         xhttp.open("GET", "https://dummyjson.com/products",true);
//         xhttp.send();
//     }
// }

// getAPI();



async function getApi() {
    let element = await fetch('https://jsonplaceholder.typicode.com/photos');
    let apiJson = await element.json();
    var updateBox = '';

    for (i = 0; i < apiJson.length; i++) {
        let box = `
        
            <div class='col-md-3'>
                <img src='${apiJson[i].url}' class='w-100'>  
                <h3>${apiJson[i].id}</h3>
                <h5>${apiJson[i].title}</h5>
            </div>
        
        `
        updateBox = updateBox + box;
    }

    document.querySelector('.test').innerHTML = updateBox;

}

getApi();
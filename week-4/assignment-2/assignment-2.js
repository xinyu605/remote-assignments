/*

Complete the functions below to make AJAX call to a URL by GET method, and show the response data in the page. 
You may render UI with any style.

*/

function ajax(src, callback) {
    const dataRequest = new XMLHttpRequest;
    
    dataRequest.onreadystatechange = function(){
        if(dataRequest.readyState === 4 && dataRequest.status === 200){
            let products = JSON.parse(dataRequest.responseText);
            callback(products);
        }
    }
    
    dataRequest.open('GET', src);
    dataRequest.send();
}

function render(data) {
    
    for( let i = 0; i < data.length; i++ ){
        
        let div = document.createElement('div');
        div.setAttribute('id',`item${i+1}`);
        document.getElementById('products').appendChild(div);
        
        newItem('h2', data[i].name, `item${i+1}`);
        newItem('p', data[i].price, `item${i+1}`);
        newItem('p', data[i].description, `item${i+1}`);
//        let name = document.createElement('h2');
//        let textName = document.createTextNode(data[i].name);
//        name.appendChild(textName);
//        document.getElementById(`item${i+1}`).appendChild(name);
//        
//        let price = document.createElement('p');
//        let textPrice = document.createTextNode(data[i].price);
//        price.appendChild(textPrice);
//        document.getElementById(`item${i+1}`).appendChild(price);
//        
//        let desc = document.createElement('p');
//        let textDesc = document.createTextNode(data[i].description);
//        desc.appendChild(textDesc);
//        document.getElementById(`item${i+1}`).appendChild(desc);
    }

    function newItem(type, data, id){
        let node = document.createElement(type);
        let text = document.createTextNode(data);
        node.appendChild(text);
        return document.getElementById(id).appendChild(node);
    }
    
    // document.createElement() and appendChild() are preferred. No innerHTML or 
    // something alike 
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
}); // you should get product information in JSON format and render data in the page


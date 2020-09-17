/*
*
* Complete the function below to calculate the average price of all the products.
*
*/

function avg(data){ 
    // your code here 
    let priceSum = 0;  
    let products = data.products;
    for (let i = 0; i < products.length; i++){
        priceSum += data.products[i].price; 
    }
    let average = priceSum / data.size;
    return average;
} 

const temp = avg({ 
        size:3, 
        products:[ 
                { 
                    name:"Product 1", 
                    price:100 
                }, 
                { 
                    name:"Product 2", 
                    price:700 
                }, 
                { 
                    name:"Product 3", 
                    price:250 
                } 
        ] 
}); 

const message =`The average price of all the products is $${temp}.`
document.querySelector('main').insertAdjacentHTML('beforeend',message);

// show the average price of all products
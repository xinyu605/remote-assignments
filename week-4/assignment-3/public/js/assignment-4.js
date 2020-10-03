/**

Request 1: Click to Change Text. 

When the user clicks on the "Welcome Message" block, change text to "Have a Good Time!".

**/

const welcomeBlock = document.getElementById('welcome');

welcomeBlock.addEventListener('click',(e) =>{
    e.target.innerHTML = `<h1>Have a Good Time!</h1>`;
});


/**

Request 2: Click to Show/Close Menu. 

When the user clicks the menu at the top-right corner, show the hidden mobile menu. After that, the user can click the close button to hide it. 

Hint: you may apply css position:fixed to create a floating mobile menu, which may be out of screen at beginning and totally separated from original menu.

**/

const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.getElementById('closeButton');


    /* 顯示手機選單 */
menuButton.addEventListener('click', (e) => {
    if( e.target.display !== 'none' ){
        mobileMenu.style.visibility = 'visible';
}
});

    /* 關閉手機選單 */
closeButton.addEventListener('click', (e) => {
    mobileMenu.style.visibility = 'hidden';
});


/**

Request 3: Click to Show More Content Boxes. 

There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes. 

Hint: all content boxes are already there, they are just set to display: none at the beginning.

**/

const callOutButton = document.getElementById('callOutButton');
const callOutSection = document.getElementById('callOutSection');

callOutButton.addEventListener('click', (e) => {
    callOutSection.style.display = 'block';
});
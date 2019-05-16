'use strict'
    document.querySelector('.content').innerHTML = '<object type="text/html" data="pages/main.html" ></object>';

document.querySelector('.mainPageRef').onclick = () => {
    document.querySelector('.content').innerHTML = '<object type="text/html" data="pages/main.html" ></object>';
}

document.querySelector('.usersPageRef').onclick = () => {
    document.querySelector('.content').innerHTML = '<object type="text/html" data="pages/users.html" ></object>';
}


document.querySelector('.signPageRef').onclick = () => {
    document.querySelector('.content').innerHTML = '<object type="text/html" data="pages/sign.html" ></object>';
}

console.log("hi people");


var books = {
    createElement: function (id, data) {

    },
    addElements: function (arr) {
        var
            html = htmlLeft = htmlRight = '',
            tmpl = document.getElementById('tmpl-block').innerHTML,
            savedInLocalStorage = readLocalStor();

        var r = /{{ ([a-z]+) }}/gi;
        for (var id in arr) {
            var data = arr[id];
            data.blockType = (-1 === savedInLocalStorage.indexOf(id)) ? 'after' : 'before';

            var
                html = tmpl.replace(r, function (b, key) {
                    if ('id' == key)
                        return id;
                    return data[key];

                });

            if (-1 === savedInLocalStorage.indexOf(id)) {
                htmlLeft += html;
            } else {
                htmlRight += html;
            }
        }
        document.getElementsByClassName('left')[0].innerHTML = htmlLeft;
        document.getElementsByClassName('right')[0].innerHTML = htmlRight;
       var input = document.getElementById('inp').value = '';

    },
    load: function () {
        var xmlhttp = new XMLHttpRequest();
        var url = "static/data.json";

        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                books.addElements(myArr);
                books.createCounterNode();
                books.addCountedBooks();

            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

    },

    createCounterNode: function () {
        var rightDiv = document.createElement('div'),
            leftDiv = document.createElement('div'),
            divLeft = document.getElementsByClassName('content')[0],
            divRight = document.getElementsByClassName('content')[0];

        rightDiv.className = 'counter-right';
        leftDiv.className = 'counter-left';

        divLeft.appendChild(leftDiv);
        divRight.appendChild(rightDiv);

    },

    addCountedBooks: function () {
        var rightElements = document.querySelector('.right').children.length,
            leftEelements = document.querySelector('.left').children.length,
            divLeft = document.getElementsByClassName('content')[0],
            divRight = document.getElementsByClassName('content')[0],
            rightDiv = document.querySelector('.counter-right'),
            leftDiv = document.querySelector('.counter-left');
        rightDiv.innerText = rightElements;
        leftDiv.innerText = leftEelements;
        }
};


var items = {
    select: function (el) {


        if (el.className == 'before') {
            el.className = 'after';

            var newParentR = document.querySelector('.left');
            var oldParentR = document.getElementsByClassName('right');

            var elemParentR = el.parentNode;
            var before = elemParentR.lastChild;


            var newElemToLeft = elemParentR.outerHTML;
            newParentR.insertAdjacentHTML(`beforeEnd`, newElemToLeft);
            elemParentR.remove();

        } else {

            el.className = 'before';
            var newParent = document.querySelector('.right');
            var oldParent = document.getElementsByClassName('left');

            var elemParent = el.parentNode;
            var before = elemParent.lastChild;


            var newElemToRight = elemParent.outerHTML;
            newParent.insertAdjacentHTML(`beforeEnd`, newElemToRight);
            elemParent.remove();

        }
        saveToLocalStorage();
        books.addCountedBooks();
    },


    keypr: function () {
        var input = document.getElementById('inp');
        var filter = input.value.toUpperCase();
        var left = document.getElementsByClassName('left')[0];
        var allBooks = left.children;

        for (var i = 0; i < allBooks.length; i++) {
            var item = allBooks[i];
            var itemHtml = item.innerText.toUpperCase();
            console.log(item.innerText);

            if (-1 == itemHtml.indexOf(filter, itemHtml.indexOf('АВТОР') + 5)) {
                item.style.display = 'none';
            } else {
                item.style = undefined;
            }
        }
        books.addCountedBooks();
    },


};

window.onload = books.load;


function saveToLocalStorage() {
    var arr = [],
        elements = document.querySelector('.right'),
        items = elements.children;

    for (var i = 0; i < items.length; i++) {
        arr.push(items[i].getAttribute('data-id'));
    }
    var serialObj = JSON.stringify(arr);
    localStorage.setItem("rightItems", serialObj);

    var returnObj = JSON.parse(localStorage.getItem("rightItems"));


};

function readLocalStor() {
    return JSON.parse(localStorage.getItem("rightItems"));

};


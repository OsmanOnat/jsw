var title = document.querySelector('.print');

var link_pathname = window.document.location.pathname;


var hiddenInput = document.createElement('input');
hiddenInput.type = 'hidden';
hiddenInput.value = link_pathname;
hiddenInput.className = 'class';
hiddenInput.id = 'id';
hiddenInput.name = 'name';
document.body.appendChild(hiddenInput);

/*var arr = [];
for (var i = 0; i < link_pathname.length; i++) {
    if (link_pathname[i] === '/') {
        arr.push(i);
    }
}
link_pathname = link_pathname.substring(arr[0] + 1, arr[1]);
console.log(link_pathname);*/
let contents = [{
        title: 'title-1',
        content: 'content-1',
    },
    {
        title: 'title-2',
        content: 'content-2',
    },
    {
        title: 'title-3',
        content: 'content-3',
    },
];

let print_div = document.querySelector('.print');

/**
 * variable return new Promise
 */

const pr1 = new Promise((resolve, reject) => {
    setTimeout((newTitleArray = [], newContentArray = []) => {
        for (var i = 0; i < contents.length; i++) {
            newTitleArray.push(contents[i].title);
            newContentArray.push(contents[i].content);
        }
        const error = false;
        if (!error) {
            resolve(newTitleArray, newContentArray);
        } else {
            reject('Bir Hata Oluştu');
        }
    }, 2000);
});

pr1
    .then((arr1, arr2) => {
        print_div.innerHTML = arr1;
        console.log(arr1);
    })
    .catch((err) => {
        console.log(err);
    });

/**
 * Function return new Promise
 */

/*function pr2() {
    return new Promise(function(resolve, reject) {
        setTimeout((newTitleArray = [], newContentArray = []) => {
            for (var i = 0; i < contents.length; i++) {
                newTitleArray.push(contents[i].title);
                newContentArray.push(contents[i].content);
            }
            const error = false;
            if (!error) {
                resolve(newTitleArray, newContentArray);
            } else {
                reject('Bir Hata Oluştu');
            }
        }, 2000);
    });
}

pr2()
    .then((arr1, arr2) => {
        print_div.innerHTML = arr1;
        console.log(arr1);
    })
    .catch((err) => {
        console.log(err);
    });*/
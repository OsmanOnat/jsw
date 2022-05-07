let messages = [
    {
        title: 'title-1',
        description: 'desc-1',
    },
    {
        title: 'title-2',
        description: 'desc-2',
    },
    {
        title: 'title-3',
        description: 'desc-3',
    },
];

let message_div = document.getElementsByClassName('message-div')[0];

function tryPromise(dizi = []){
    return new Promise((resolve, reject) =>{
        setTimeout(function (){
            for(let i=0;i<messages.length; i++) {
                dizi[i] = messages[i].title;
            }
            const err = false;

            if(!err){
                resolve(dizi); //response parametresinde kullanacağım
            }
            else{
                reject('Bir hata oluştu');
            }
            console.log(dizi);
        } , 2000);
    });
}

tryPromise()
    .then(function (response){
        console.log('Success');
        console.log('Yeni Dizi : ' + response);
    })
    .catch(function (e){
        console.log('Failed ' + e)
    });

/**
 * Promise kullanımı bu şekilde
 * Amacı ise;
 * Bir fonskiyonun işleminin bitip bitmediğini ANLAYARAK yola devam etmek istiyorsan bunu kullanmalısın.
 * Böylelikle fonksiyon işleminin bittiğini ya da bir hata olduğunda o hatayı yakalayıp işleme devam etmez ve hatayı gösterir.
 * Kısacası try - catch gibi düşünebilirsin.
 *
 * resolve      -> Bir hata yoksa resolve() yap.
 * reject       -> Bir hata varsa reject() yap
 *
 * .then()      -> resolve() işlemi başarılıysa .then() fonskiyonu çalışsın
 * response     -> Bu tercihen yazılmıştır.
 *
 * .catch()     -> eğerki Promise() hata varsa yani reject() olduysa .catch() bloğu ile o hatayı yakala
 *
 *
 */


/*messages.forEach(value => {
    message_div.innerHTML += `
        title = ${value.title}
        desc = ${value.description}
        <br />
    `;
});*/


/*for(let i=0;i<messages.length; i++) {
    console.log(messages[i].title);
    message_div.innerHTML += `
        title = ${messages[i].title}
        <br />
    `;
}*/
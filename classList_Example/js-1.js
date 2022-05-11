const butonlar = document.querySelectorAll('.soru_button');

butonlar.forEach(function(e) {
    e.addEventListener('click', function() {
        if (e.classList.contains('active')) {

            /**
             * eğerki active değeri aynı butonda varsa 
             */

            console.log(e.classList + ' var');
            /*console.log(e.classList + ' active değeri silindi!');
            e.classList.remove('active');*/
        } else {
            butonlar.forEach(function(e2) {
                console.clear();

                /**
                 * Eğerki active değeri yoksa ;
                 * butona tıklanıldığında active değeri girilir.
                 * 
                 *Tıkladığın buton hariç diğer butonlardan class isimlerinden active class'ını sil
                 */

                e2.classList.remove('active');

            });
            /**
             * Tıkladığın butona active değeri ver . 
             */
            console.log('en son tıkladığınız butona active değeri eklendi! ' + e.classList);
            e.classList.add('active');
        }
    });
});



var question = {
    urun_1: "Urun 1'e ihtiyacınız varmı ?",
    urun_2: "Urun 2'e ihtiyacınız varmı ?",
    urun_3: "Urun 3'e ihtiyacınız varmı ?",
    urun_4: "Urun 4'e ihtiyacınız varmı ?",
};

var urun_fiyat = {
    urun_1: 100,
    urun_2: 300,
    urun_3: 500,
    urun_4: 800,
};

var answer = {
    urun_1: '',
    urun_2: '',
    urun_3: '',
    urun_4: '',
};

var front_answer = document.querySelector('.soru_content');
var ileri = document.querySelector('.ileri');
var geri = document.querySelector('.geri');
var sorular = document.querySelector('.soru');

var sayac;
var question_lenght = Object.keys(question).length;

/*var buttons_array = [];

for (sayac = 0; sayac < question_lenght; sayac++) {

    var new_element = document.createElement('p');
    new_element.id = 'ürün-' + sayac;

    var new_button = document.createElement('button');
    new_button.className = 'button-' + sayac;
    new_button.id = 'button-' + sayac;
    new_button.value = Object.values(urun_fiyat)[sayac];
    new_button.innerHTML = 'button-' + sayac;

    new_element.innerHTML = Object.keys(question)[sayac] + ' - ' + Object.values(question)[sayac];
    document.body.appendChild(new_element)[sayac];
    document.body.appendChild(new_button)[sayac];

    buttons_array.push('button-' + sayac);
}*/

/*var soru_button = document.querySelectorAll('.soru_button');
var active_button = [];
var deactive_button = [];

for (const button of soru_button) {
    button.addEventListener('click', function(e) {

        this.classList.add('active');

        console.log(this.classList);
        console.log(this.classList.length);


    });
}*/
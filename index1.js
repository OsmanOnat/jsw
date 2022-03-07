class Deneme {

    constructor() {
        this.entry_message = "Hoşgeldin";
        this.auto_message = "Siteye Hoşgeldiniz . Size Bir Mesaj Var .";

        /*
        Kodun amacı nesneyi dondurup içeriğinin değiştirilememesi . Yani bir sabit olması.
        burada nesneyi(object) donduruyoruz . Enum yaptık kısacası .

        //document.createTextNode("Şuanda Çevrimiçi"); //yeni bir TEXT_NODE (metin düğümü) oluşturulmasını sağlar.
        */

        document.writeln(this.entry_message);

        this.element_div = document.createElement("div");
        this.element_p = document.createElement("p");
        this.element_br = document.createElement("br");

        this.status_control_enum = Object.freeze({
            STATUS_ONLINE: true,
            STATUS_OFFLINE: false,
        });

        this.status_control_message_enum = Object.freeze({
            STATUS_ONLINE_MESSAGE: "İnternet Bağlantınız Var.",
            STATUS_OFFLINE_MESSAGE: "İnternet Bağlantınız Kesildi!",
        });

        this.attributes_array = new Array(
            "div", "a", "p", "button"
        );
    }

    attribute_control(attribute_name = "", attribute_array = []) {
        var i;
        for (i = 0; i < attribute_array.length; i++) {
            if (attribute_array[i] == attribute_name) {
                console.log(attribute_array[i] + " değeri bulundu!");
                return true;
            }
        }
    }


    create_element(attribute = "", id = "", classname = "", message = "") {
        if (attribute === "" || attribute == null || attribute == undefined) {
            console.log("Attribute ismini kontrol et");
        } else {

            if (this.attribute_control(attribute, this.attributes_array) == true) {

                var create = document.createElement(attribute);
                create.id = id;
                create.className = classname;
                create.innerHTML = message;

                document.body.appendChild(create);

            } else {
                console.log("Attribute dizide yok . kontrol et");
            }

        }
    }

    /**
     * Başka Sekmeye geçince başlık değişir.
     * @param {string} title_value      Yeni Başlık ismini girin. 
     */

    title_change_new_tab(title_value) {
        var default_title = document.title;
        var new_title = title_value;

        window.addEventListener("blur", () => {
            document.title = new_title;
        });

        /*window.addEventListener("blur", function(){
            default_title = new_title;
        });*/

        window.addEventListener("focus", function() {
            document.title = default_title;
        });
    }

    /**
     * İnternet Bağlantısının olup olmadığını kontrol eder.
     */

    status_controller() {
        window.addEventListener("load", function() {

            var div = this.document.getElementById("status");

            window.addEventListener("online", function() {
                //document.writeln("Bağlantı Var");
                div.style.display = "none";
            });

            window.addEventListener("offline", function() {
                document.getElementById("status").innerHTML = "İnternet Bağlantınız Kesildi!";
                /*div.appendChild(
                    document.createTextNode("Sayfayı Yenileyin !")
                );*/
                div.style.display = "block";
            });

        });
    }

    status_controller_2() {
        window.addEventListener("load", function() {
            var div = this.document.getElementById("status");
            var detection = this.navigator.onLine;

            if (detection == true) {
                //this.document.getElementById("status").innerText = "Çevrimiçi";
                div.style.display = "none";
            }
            if (detection == false) {
                document.getElementById("status").innerHTML = "İnternet Bağlantınız Kesildi ! <br>";
                div.appendChild(
                    document.createTextNode("Sayfayı Yenileyin !")
                );
                div.style.display = "block";
            }
        });
    }

    page_close(message) {
        var decision = confirm(message);
        decision == true ? window.close() : "";
    }

    button_page_close(button_id) {
        var button = document.getElementById(button_id);
        button.addEventListener("click", function() {
            console.log("click event");
        });
    }

    /**
     * İnputtaki değeri eş zamanlı ekrana basar.
     */

    text_keyup_write() {
        var keyup_deneme = document.getElementById("keyup_deneme"); //input name
        var yazdir = document.getElementById("keyup_yazdir"); // input value write div id

        keyup_deneme.addEventListener("keyup", () => {
            var x = keyup_deneme.value; //inputtaki değeri okuduk.
            yazdir.innerText = x;
        });
    }

    try_for() {
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }
    }


}

var deneme = new Deneme();
deneme.status_controller();
deneme.title_change_new_tab("denemetitle");
//deneme.page_close("Sayfayı Kapatacakmısın ?");
//deneme.button_page_close("deneme_button");
//deneme.create_element("div", "", "", "", "");
//deneme.create_element("div", "id_deneme", "class_deneme", "tamadır bu");
//deneme.try_for();
deneme.text_keyup_write();

var deneme_array = [
    "div", "p", "a", "button"
];


//deneme.attribute_control("a", deneme_array);

//console.log(attributes_array.length);



var dizi = [
    'osman', 'onat', 1234
];

var enum_1 = {
    1: "osman",
    2: "onat"
};
Object.freeze(enum_1);

var enum_2 = Object.freeze({
    osman: 1,
    onat: 2,
});

console.log(enum_1[1]);
console.log(enum_2.osman);




/*dizi.forEach(e => {
    foreach_output.innerHTML = "değerler " + e;
    document.body.appendChild(create_br);
});*/


var foreach_output = document.getElementById("foreach_output");
const create_br = document.createElement("br");

for (i = 0; i < dizi.length; i++) {
    document.getElementById("foreach_output").innerHTML = dizi[i];
    document.body.appendChild(create_br);
}


/*window.addEventListener("online", function() {
    console.log
});*/


/*const h_tag = document.querySelector("#h_tag");
h_tag.textContent = "H1 ETİKETİ";

let h_tag_css = document.getElementById("h_tag");
h_tag_css.style.color = "red";
h_tag_css.style.borderBottom = "1px solid black";
h_tag_css.style.maxWidth = "max-content";*/
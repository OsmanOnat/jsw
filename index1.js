class Deneme {

    constructor() {
        this.entry_message = "Hoşgeldin";
        this.auto_message = "Siteye Hoşgeldiniz . Size Bir Mesaj Var .";

        /*
        Kodun amacı nesneyi dondurup içeriğinin değiştirilememesi . Yani bir sabit olması.
        burada nesneyi(object) donduruyoruz . Enum yaptık kısacası .

        //document.createTextNode("Şuanda Çevrimiçi"); //yeni bir TEXT_NODE (metin düğümü) oluşturulmasını sağlar.
        */

        var status = {
            ONLINE: 0,
            OFFLINE: 1,
        };
        Object.freeze(status);

        var status_message = {
            online_message: "Şuanda Çevrimiçi",
            offline_message: "Şuanda Çevrimdışı",
        };
        Object.freeze(status_message);

        document.writeln(this.entry_message);

        this.element_div = document.createElement("div");
        this.element_p = document.createElement("p");
        this.element_br = document.createElement("br");


    }

    status_controller() {
        window.addEventListener("load", function() {

            var div = this.document.getElementById("status");
            var detection = this.navigator.onLine;

            if (detection == true) {
                //this.document.getElementById("status").innerText = "Çevrimiçi";
                div.style.display = "none";
            }
            if (detection == false) {
                this.document.getElementById("status").innerHTML = "İnternet Bağlantınız Kesildi ! <br>";
                div.appendChild(
                    this.document.createTextNode("Sayfayı Yenileyin !")
                );
                div.style.display = "block";
            }

        });
    }

    status_controller_2() {
        var div2 = this.document.getElementById("status");

        window.addEventListener("online", function() {
            div2.innerHTML = "Çevrimiçi";
            div2.style.display = "none";
        });

        window.addEventListener("offline", function() {
            div2.innerHTML = "İnternet Bağlantınız Kesildi !";
            div2.style.display = "block";
        });
    }

    create_element(color) {
        const div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = color;
        document.body.appendChild(div);
    }

    get_id_add_classname(id, add_classname) {
        const get_id = document.getElementById(id);
        get_id.classList.add(add_classname);

        //get_id.className += "class_name";
    }

    createDiv(value) {
        const attribute = document.createElement("p");
        attribute.innerText = value;
        document.body.appendChild(attribute);
    }

    Message(message) {
        document.writeln(this.auto_message);
        this.createDiv(message);
    }

}

var deneme = new Deneme();
//deneme.Message("Merhaba Ben Osman Onat");
//deneme.create_element();
deneme.status_controller();
//deneme.status_controller_2();

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


/**
 * JAVASCRİPT ADD CSS
 * ÖĞRENDİĞİM KADARIYLA SADECE getelementbyid İLE OLUYOR.
 */


/*const h_tag = document.querySelector("#h_tag");
h_tag.textContent = "H1 ETİKETİ";

let h_tag_css = document.getElementById("h_tag");
h_tag_css.style.color = "red";
h_tag_css.style.borderBottom = "1px solid black";
h_tag_css.style.maxWidth = "max-content";*/
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
        }
        Object.freeze(status);

        var GLOBAL_MESSAGE = {
            online_message: "Şuanda Çevrimiçi",
            offline_message: "Şuanda Çevrimdışı",
        }
        Object.freeze(GLOBAL_MESSAGE);

        document.writeln(this.entry_message);
    }

    status_controller() {
        window.addEventListener("load", function() {

            var detection = this.navigator.onLine;

            if (detection == true) {
                this.document.getElementById("status").innerText = "Çevrimiçi";
            }
            if (detection == false) {
                this.document.getElementById("status").innerText = "Çevrimdışı";
            }


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
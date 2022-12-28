class Usuario{
    constructor(user, name, code, cel, pass, tp ){
        this.usuario = user;
        this.nombre = name;
        this.dpi = code;
        this.telefono = cel;
        this.contraseña = pass;
        this.tipo = tp;
        this.siguiente = null;

    }
    
    texto(){
        var a = " "+ this.usuario + " " + this.nombre + " " + this.dpi + " " + this.telefono + " " + this.contraseña + " " + this.tipo
        return a
    }
}

class listaUsuarios{
    constructor(){
        this.primero = null;
        this.ultimo = null;

    }

    agregar(nuevo){
        if(this.primero == null){
            this.primero = nuevo
            this.ultimo = nuevo
            return;
        }else{
            var temp = this.ultimo
            this.ultimo = nuevo
            temp.siguiente = nuevo
            return;
        }
    }

    eliminar(usuario){
        if(this.primero = null){
            alert("No hay elementos para borrar");
        }else{
            var temp = this.primero;
            while (temp.siguiente != null){
                if(temp.siguiente.usuario = usuario){
                    var temp2 = temp.siguiente.siguiente;
                    temp.siguiente.siguiente = null;
                    temp.siguiente = temp2;
                    alert("Usuario eliminado");
                    return;
                }
                temp = temp.siguiente;
            }
            alert("Usuario no encontrado");
        }
    }

    login(user, pass, tipo){
        if(user == "" || pass == ""){
            return null;
        }
        if(this.primero == null){
            return null;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.usuario == user && pass == temp.contraseña){
                    if(temp.tipo == tipo){
                        return temp;
                    }else{
                        return null;
                    }
                }
                temp = temp.siguiente;
            }
            return null;
        }
    }

    mostrarTodo(){
        var a = "";
        let temp = this.primero;
        while(temp != null){
            a += temp.texto();

            a += "\n\n";
            temp = temp.siguiente;
        }
        return a;
    }

    buscarUsuario(user){
        if(this.primero == null){
            return null;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.usuario == user){
                    return temp;
                }
                temp = temp.siguiente;
            }
            return null;
        }
    }


    dot(){
        var temp = this.primero;

        var a = 0;
        var t = "user"
        var dot = "digraph G {\n";
        dot += "node [shape = record];\n";
        dot += "rankdir = LR;\n";
        dot += "node [width = 1.5];\n";
        dot += "node [height = 0.5];\n";
        dot += "node [color = \"#006699\", style = filled];\n";
        dot += "edge [color = \"#31CEF0\"];\n";

        while (temp != null){
            dot += t+a + "[label = \"" + temp.usuario + "\"];\n";
            if(temp.siguiente != null){
                dot += t+(a+1) + "[label = \""+temp.siguiente.usuario+"\"];\n";
            }
            temp = temp.siguiente;
            a++;
        }
        temp = this.primero;
        a = 0;
        while (temp != null){
            if(temp.siguiente != null){
                dot += t+a + " -> " + t+(a+1) + ";\n";
            }
            temp = temp.siguiente;
            a++;
        }

        dot += "}";

        return dot;
    }

}

class actorIcon{
    constructor(dpi, nombre, correo, descripcion){
        this.dpi = dpi
        this.nombre = nombre
        this.correo = correo
        this.descripcion = descripcion
        this.der = null
        this.izq = null
    }



}

class arbolActores{
    constructor(){
        this.raiz = null
    }

    agregar(nuevo){
        if(this.raiz == null){
            this.raiz = nuevo
            return;
        }else{
            this.agregaraux(nuevo, this.raiz);

        }
    }

    agregaraux(nuevo, temp){
        if(nuevo.dpi < temp.dpi){
            if(temp.izq == null){
                temp.izq = nuevo
                return;
            }else{
                this.agregaraux(nuevo, temp.izq)
            }
        }else{
            if(temp.der == null){
                temp.der = nuevo
                return;
            }else{
                this.agregaraux(nuevo, temp.der)
            }
        }
    }

    inordenHtml(){
        document.getElementById("viewActores").innerHTML = "";
        this.inOrdentoHtmlAux(this.raiz);
    }

    inOrdentoHtmlAux(raiz){
        if(raiz == null){
            let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            this.inOrdentoHtmlAux(raiz.izq);
            let c = ""

            c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+raiz.nombre+"</h5>";
            c +=   "<p class=\"card-text\">"+raiz.dpi+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.correo+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.descripcion+"</p>";
            c +=   "</div>";
            c +=   "</div>";
            c +=   "<br>";
            c +=   "<br>";

            document.getElementById("viewActores").innerHTML += c;
            this.inOrdentoHtmlAux(raiz.der);
        }
    }

    preordenHtml(){
        document.getElementById("viewActores").innerHTML = "";
        this.preOrdentoHtmlAux(this.raiz);
    }

    preOrdentoHtmlAux(raiz){
        if(raiz == null){
            let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            let c = ""

            c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+raiz.nombre+"</h5>";
            c +=   "<p class=\"card-text\">"+raiz.dpi+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.correo+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.descripcion+"</p>";
            c +=   "</div>";
            c +=   "</div>";
            c +=   "<br>";
            c +=   "<br>";

            document.getElementById("viewActores").innerHTML += c;
            this.preOrdentoHtmlAux(raiz.izq);
            this.preOrdentoHtmlAux(raiz.der);
        }
    }

    postordenHtml(){
        document.getElementById("viewActores").innerHTML = "";
        this.postOrdentoHtmlAux(this.raiz);
    }

    postOrdentoHtmlAux(raiz){
        if(raiz == null){
            this.postOrdentoHtmlAux(raiz.izq);
            this.postOrdentoHtmlAux(raiz.der);
            let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            let c = ""
            c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+raiz.nombre+"</h5>";
            c +=   "<p class=\"card-text\">"+raiz.dpi+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.correo+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.descripcion+"</p>";
            c +=   "</div>";
            c +=   "</div>";
            c +=   "<br>";
            c +=   "<br>";
            document.getElementById("viewActores").innerHTML += c;
        }
    }

}

class Nodo{
    constructor(_valor, name, desc, punt, precio, pag, cat){
        this.valor=_valor;
        this.name = name;
        this.desc = desc;
        this.punt = punt;
        this.precio = precio;
        this.pag = pag;
        this.cat = cat;
        this.izquierda = null;
        this.derecha = null;
        this.altura = 0;
    }
}

class AVL{
    constructor(){
        this.raiz = null;
    }
    //maximo
    MAXIMO(valor1,valor2){
        if(valor1>valor2) return valor1;
        return valor2;
    }
    //altura del arbol
    altura(nodo){
        if(nodo == null) return -1;
        return nodo.altura;
    }
    //insertar
    insertar(valor, name, desc, punt, precio, pag, cat ){
        this.raiz = this.add(valor, name, desc, punt, precio, pag, cat, this.raiz)
    }
    
    //insertar recursivo
    add(valor, name, desc, punt, precio, pag, cat, nodo){
        if(nodo == null) return new Nodo(valor, name, desc, punt, precio, pag, cat);
        else{
            if(valor < nodo.valor){
                nodo.izquierda = this.add(valor, nodo.izquierda)
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda) == -2){
                    //programar los casos 
                    //rsi
                    if(valor < nodo.izquierda.valor){
                        nodo = this.rotacionizquierda(nodo);
                    }//rdi}
                    else{
                        nodo = this.Rotaciondobleizquierda(nodo);
                    }
                    
                }
            }else if(valor > nodo.valor){
                nodo.derecha = this.add(valor, nodo.derecha);
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda)== 2){
                    //otros dos casos
                    //rotacion simple derecha
                    if(valor > nodo.derecha.valor){
                        nodo = this.rotacionderecha(nodo);
                    }else{
                        nodo = this.Rotaciondoblederecha(nodo);
                    }
                    //rotacion doble derecha
                }
            }else{
                nodo.valor = valor;
            }
        }
        nodo.altura = this.MAXIMO(this.altura(nodo.izquierda),this.altura(nodo.derecha))+1
        return nodo;
    }


    //rotacion simple izquierda
    rotacionizquierda(nodo){
        var aux = nodo.izquierda;
        nodo.izquierda = aux.derecha;
        aux.derecha = nodo;
        //calculo de nueva altura
        nodo.altura = this.MAXIMO(this.altura(nodo.derecha),this.altura(nodo.izquierda))+1;
        aux.altura = this.MAXIMO(this.altura(nodo.izquierda), nodo.altura)+1;
        return aux;
    }
    //rotacion simple derecha
    rotacionderecha(nodo){
        var aux = nodo.derecha;
        nodo.derecha = aux.izquierda;
        aux.izquierda = nodo;
        //calcular de nuevo altura
        nodo.altura = this.MAXIMO(this.altura(nodo.derecha),this.altura(nodo.izquierda))+1;
        aux.altura = this.MAXIMO(this.altura(nodo.derecha),nodo.altura)+1;
        return aux;
    }
    //rotacion dobles derecha
    Rotaciondoblederecha(nodo){
        nodo.derecho = this.rotacionizquierda(nodo.derecho);
        return this.rotacionderecha(nodo);
    }

    //rotaciones dobles
    Rotaciondobleizquierda(nodo){
        nodo.izquierda = this.rotacionderecha(nodo.izquierda);
        return this.rotacionizquierda(nodo);
    }

    //recorridos
    preorden(){
        this.pre_orden(this.raiz);
    }
    pre_orden(nodo){[]
        if(nodo!=null){
            console.log("valor=" +nodo.valor);
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }

    //postorden
    postorden(){
        this.post_orden(this.raiz);
    }
    post_orden(nodo){
        if(nodo!=null){
            this.post_orden(nodo.izquierda);
            this.post_orden(nodo.derecha);
            console.log("valor=" +nodo.valor);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("valor=" +nodo.valor);
            this.in_orden(nodo.derecha);    
        }
    }
}

class NodoC{
    constructor(_value, company){
        this.value = _value
        this.company = company
        this.next = null
    }
}
  
class Lista{
constructor(){
    this.head = null;
    this.size = 0;
}

//metodos de la lista
//insertar
insert(_value, company){
    this.size++;
    var tempo = new NodoC(_value, company);
    tempo.next = this.head;
    this.head = tempo;
}
//mostrar 
printList(){
    var temporal = this.head
    while(temporal!=null){
        console.log(temporal.value)
        temporal = temporal.next
    }
}

getSize(){
    return this.size;
}

isEmpty(){
    return this.head === null ; 
}
}

class TableHash{
constructor(size){
    this.amount =0;
    this.size =  size;
    this.table = [];
    for(let i = 0;i < size ; i++){
        this.table.push(new Lista())
    }
    }

    insert(data, company){
        var index = this.functionHash(data);
        if(this.table[index].isEmpty()){
        this.amount++;
        }
        this.table[index].insert(data, company);
        this.rehashing()
    }

    functionHash(data){
        return data % this.size;
    }

    rehashing(){
        var porcentaje =this.amount/this.size
        if(porcentaje>0.75){
        var temp =this.table;
        var tempSize = this.size
        this.size = this.amount*5
        this.table = []
        for(let i = 0;i < this.size ; i++){
            this.table.push(new Lista())
        }
        this.amount =0;
        for(let i = 0;i < tempSize ; i++){
            if(!temp[i].isEmpty()){
            var nodo = temp[i].head;
            while(nodo!=null){
                this.insert(nodo.value, nodo.company);
                nodo = nodo.next
            }
            }
        }

        }
        console.log(this.table,porcentaje);

    }

}

//declaracion de variables globales
let users = new listaUsuarios();//lista simple
let usuarioLog = null;//usuario
let actores =  new arbolActores();//arbol binario
let peliculas = new AVL();//arbol AVL
let categorias = new TableHash(20);//tabla hash

//quemado de usuarios masters
users.agregar(new Usuario("EDD", "Oscar Armin", 2354168452525, 12345678, encriptar("12345678"), true));
users.agregar(new Usuario(" ", "Oscar Armin", 2354168452525, 12345678, encriptar(" "), true));
users.agregar(new Usuario("a", "Alan Barillas", 3032428560108, 58624710, encriptar("a"), false));

function logeo(){
    var lg = document.getElementById("user");
    var ps = document.getElementById("pass");
    var ad = document.getElementById("admon");
    if(ad.checked){
        //admin log here
        var ok = users.login(lg.value, encriptar(ps.value), true)
        if(ok != null) {
            usuarioLog = ok;
            mostrarcuatro();
        }else{
            alert("credenciales incorrectas");
        }
    }else{
        //user log here
        var ok = null; 
        ok = users.login(lg.value, encriptar(ps.value), false);
        if(ok != null){
            usuarioLog = ok;
            vista1();
        }else{
            alert("credenciales incorrectas")
        }

    }
    console.log(lg, ps, ad);

}

//mostrar contenedor con vista de home
function mostraruno(){
    document.getElementById("uno").style.display = "block";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "none";
    document.body.style.backgroundColor = "black";
}

//mostrar contenedor con vista de login
function mostrardos(){
  document.getElementById("uno").style.display = "none";
  document.getElementById("dos").style.display = "block";
  document.getElementById("tres").style.display = "none";
  document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "none";
 
    document.body.style.backgroundColor = "cadetblue";

}

//mostrar contenedor con vista de registro
function mostrartres(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "block";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "none";
    document.body.style.backgroundColor = "cadetblue";

}

//mostrar contenedor con vista administrador
function mostrarcuatro(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "block";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "none";

    document.body.style.backgroundColor = "white";
}

//mostrar contenedor con vista de musica
function vista1(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "block";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "none";
    document.body.style.backgroundColor = "white";
}

//mostrar contenedor con vista de artistas
function vista2(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "block";
    document.getElementById("usuario3").style.display = "none";
    document.body.style.backgroundColor = "white";

}

//mostrar contenedor con vista de playlist
function vista3(){
    graphvizdotPlay();
    dataPlay();
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "block";
    document.body.style.backgroundColor = "white";
}

function encriptar (texto){
    var input = new TextEncoder("utf-8").encode(texto);
    crypto.subtle.digest("SHA-256", input).then(function(digest){
        var view = new DataView(digest);
        var hash = "";
        for (var i = 0; i < view.byteLength; i++) {
            var b = view.getUint8(i);
            hash += '0123456789abcdef'[(b & 0xf0) >> 4];
            hash += '0123456789abcdef'[b & 0x0f];
        }
        return hash;
    });
}

//pagina administrador
//cargar usuarios
function cargarClientes(datas){

    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0;

        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                const name = element["nombre_completo"]
                const dpi = element["dpi"]
                const user = element["nombre_usuario"]
                const pass = element["contrasenia"]
                const phone = element["telefono"]
                const admin = false;
                if(name == undefined || dpi == undefined || user == undefined || pass == undefined || phone == undefined || admin == undefined){
                    error += 1;
                }else{
                    let nuevoUser = new Usuario(user, name, dpi, phone, encriptar(pass), admin);
                    users.agregar(nuevoUser);
                }
            }catch{

            }
        }
        if(error>0){
            alert("existen errores en: "+ error + " datos de usuarios, no se añadieron")
        }
        
    }
    reader.readAsText(datas);


}

//cargar artistas
function cargarActores(datas){
    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0
        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                var dni = element["dni"]
                var name = element["nombre_actor"]
                var correo = element["correo"]
                var desc = element["descripcion"]
                if(name == undefined || dni == undefined || correo == undefined || desc == undefined){
                    error += 1;
                }else{
                    let nuevoActor = new actorIcon(dpi, name, correo, desc);
                    actores.agregar(nuevoActor);

                }
            }catch{

            }
        }
        if (error > 0){
            alert("existen errores en: "+ error + " datos de actores, no se añadieron")
        }
        
    }
    reader.readAsText(datas);

}
//cargar canciones
function cargarPeliculas(datas){
    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0
        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                var id = element["id_pelicula"]
                var name = element["nombre_pelicula"]
                var desc = element["descripcion"]
                var pag = element["paginas"]
                var punt = element["puntuacion_star"]
                var prec = element["precion_Q"]
                var cat = element["categoria"]
                if(id==undefined || name == undefined || desc == undefined || punt == undefined || pag == undefined || prec == undefined || cat == undefined){
                    error += 1;
                }else{
                    peliculas.insertar(id, name, desc, punt, prec, pag, cat);
                }
            }catch{

            }
        }
        if (error > 0){
            alert("existen errores en: "+ error + " datos de peliculas, no se añadieron")
        }
        
    }
    reader.readAsText(datas);

}

//funcion para cargar la musica programada
function cargarCategorias(datas){
    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0
        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                var id = element["id_categoria"];
                var com = element["company"];
                if(id==undefined || com == undefined){
                    error += 1;
                }else{
                    categorias.insert(id, com);
                }
            }catch{

            }
        }
        if (error > 0){
            alert("existen errores en: "+ error + " datos de categorias, no se añadieron")
        }
        
    }
    reader.readAsText(datas);

}

//deseleccionar los archivos de los input file
function deselectFile(){
    alert("Informacion Cargada ")
    var a = document.getElementById("klientes");
    var b = document.getElementById("aktores")
    var c = document.getElementById("pelikulas")
    var d = document.getElementById("kategorias")
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
}

//registro de un usuario
function crearunUsuario(){
    var usuario = document.getElementById("us").value;
    var nombre = document.getElementById("name").value;
    var dpi = document.getElementById("dpy").value;
    var fone = document.getElementById("fone").value;
    var pass = document.getElementById("password").value;
    if (usuario == "" || nombre == "" || dpi == "" || fone == "" || pass == ""){
        alert("no se puede crear el usuario, hay campos vacios")
    }else{
        var nuevoUsuario = new Usuario(usuario, nombre, dpi, fone, encriptar(pass), false);
        users.agregar(nuevoUsuario);
        alert("usuario creado con exito")
        document.getElementById("us").value = "";
        document.getElementById("name").value = "";
        document.getElementById("dpy").value = "";
        document.getElementById("fone").value = "";
        document.getElementById("password").value = "";
    }
}

function grafica1(){

}

function grafica2(){

}

function grafica3(){
}


function orden1(){
    actores.inordenHtml();
}

function orden2(){
    actores.preordenHtml();
}

function orden3(){
    actores.postordenHtml();
}


//codigo sin uso de momento solo para ejemplos
//mostrar toda la musica falta
function dataArtistas(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("hola");
    let c = ""
    let aux2 = arts.primero;
    while (aux2 != null){
        let aux = aux2.cabezaCancion;
        while (aux != null){


        c +=   "<div class=\"card\">";
        c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
        c +=   "<div class=\"card-body\">";
        c +=   "<h5 class=\"card-title\">"+aux.nombre+"</h5>";
        c +=   "<p class=\"card-text\">"+aux.genero+"</p>";
        c +=   "<p class=\"card-text\">"+aux2.nombre+"</p>";
        c +=   "<button type=\"button\" class=\"btn btn-primary\" onclick=\"nuevoPlay('"+aux.nombre+"','"+aux2.nombre+"')\">Añadir PlayList</button>";


        c +=   "</div>";
        c +=   "</div>";
        c +=   "<br>";
        c +=   "<br>";
        aux = aux.siguiente;
        }
        aux2 = aux2.siguiente;
    }
    b.innerHTML = c;

}

//mostrar musica por artistas listo
function dataAtt(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("musicaxart");
    let c = ""
    let aux2 = arts.primero;

    while (aux2 != null){
        let pub = 0;
        let aux = aux2.cabezaCancion;
        c+= "<div class = \"grid-container\">";
        c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/200/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+aux2.nombre+"</h5>";
            c +=   "<h5 class=\"card-title\">"+aux2.edad+"</h5>";
            c +=   "<p class=\"card-text\">"+aux2.lugar+"</p>";
            c +=  "<i class=\"bi bi-play-fill\"></i>"
            c +=   "</div>";
            c +=   "</div>";
        

        while (aux != null){
            pub += 1;
            c +=   "<div class=\"grid-item\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+aux.nombre+"</h5>";
            c +=   "<p class=\"card-text\">"+aux.tiempo+"</p>";
            c +=   "<p class=\"card-text\">"+aux.artista+"</p>";
            c +=   "<p class=\"card-text\"><h6>"+aux.genero+"<h6></p>";
            c +=   "</div>";
            c +=   "</div>";


            aux = aux.siguiente;
        }
        if (pub == 0){
            c +=   "<div class=\"grid-item\">";
            c +=   "<div class=\"card-img-top\"><br><img ></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\"> Sin Canciones </h5>";
            c +=   "</div>";
            c +=   "</div>";
        }
        c+= "</div>";
        c+= "<br>";
        c+= "<br>";
        aux2 = aux2.siguiente;

    }
    b.innerHTML = c;

}

//mostrar usuarios listo
function dataUsuarios(){
    //vistadetodos
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let b = document.getElementById("vistadetodos");
    let c = ""
    let aux = users.primero;
        c += "<center>"
        c += "<h1>Usuarios</h1>"
        c += "</center>"
        c += "<div class = \"grid-container\">";
        while (aux != null){
            if(aux != usuarioLog){
                let amigaso = usuarioLog.amix.buscarAmigo2(aux);
                let bloqueo = usuarioLog.bloq.buscarBloqueado(aux);
                if(amigaso == false && bloqueo == false ){
                    c +=   "<div class=\"grid-item card\">";
                    c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
                    c +=   "<div class=\"card-body\">";
                    c +=   "<h5 class=\"card-title\">"+aux.nombre+"</h5>";
                    c +=   "<p class=\"card-text\"><h6>"+aux.usuario+"</h6></p>";
                    c +=   "<button type=\"button\" class=\"btn btn-primary\" onclick=\"añadir('"+aux.usuario+"')\">Añadir</button>"
                    c +=   "<button type=\"button\" class=\"btn btn-danger\" onclick=\"bloquear('"+aux.usuario+"')\">Bloquear</button>"
                    c +=   "</div>";
                    c +=   "</div>";
                }
            }
            aux = aux.siguiente;
        }
        c+= "</div>";
        c+= "<br>";
        c+= "<br>";
    b.innerHTML = c;


}
//mostrar amigos listo
function dataAmigos(){
    //vistadetodos
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("vistadeamigos");
    let c = ""
    let aux = usuarioLog.amix.primero;
    c += "<center>"
    c += "<h1>Amigos</h1>"
    c += "</center>"
    c += "<div class = \"grid-container\">";
    while (aux != null){
        if(aux.cual != usuarioLog){
                c +=   "<div class=\"grid-item card\">";
                c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
                c +=   "<div class=\"card-body\">";
                c +=   "<h5 class=\"card-title\">"+aux.cual.nombre+"</h5>";
                c +=   "<p class=\"card-text\"><h6>"+aux.cual.usuario+"</h6></p>";
                c +=   "</div>";
                c +=   "</div>";
        }
        aux = aux.next;
    }
    c+= "</div>";
    c+= "<br>";
    c+= "<br>";
    b.innerHTML = c;


}

//añadir a vista de bloqueados
function dataBloqueados(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("bloqueox2");
    let c = ""
    let aux = usuarioLog.bloq.primero;
    c += "<center>"
    c += "<h1>Usuarios Bloqueados</h1>"
    c += "</center>"
    c += "<div class = \"grid-container\">";
    while (aux != null){
        if(aux.cual != usuarioLog){
                c +=   "<div class=\"grid-item card\">";
                c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
                c +=   "<div class=\"card-body\">";
                c +=   "<h5 class=\"card-title\">"+aux.cual.nombre+"</h5>";
                c +=   "<p class=\"card-text\"><h6>"+aux.cual.usuario+"</h6></p>";
                c +=   "</div>";
                c +=   "</div>";
        }
        aux = aux.siguiente;
    }
    c+= "</div>";
    c+= "<br>";
    c+= "<br>";
    b.innerHTML = c;

}

function dataPlay(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("vistadetuplay");
    let c = ""
    let aux = usuarioLog.myplay.primero;
    c += "<center>"
    c += "<h1>Mi PlayList</h1>"
    c += "</center>"
    c += ""
    if (aux != null){
        c +=   "<div class=\"grid-item card\">";
        c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
        c +=   "<div class=\"card-body\">";
        c +=   "<h5 class=\"card-title\">"+aux.cancion.nombre+"</h5>";
        c +=   "<p class=\"card-text\"><h6>"+aux.cancion.artista+"</h6></p>";
        c +=   "</div>";
        c +=   "</div>";
    }else{
        c += "<p style=\"color=\"Red\"; \"><h1>Playlist Vacia</h1></p>";
        c += "</div>";
    }
    while (aux != null && aux != usuarioLog.myplay.primero){
        c +=   "<div class=\"grid-item card\">";
        c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
        c +=   "<div class=\"card-body\">";
        c +=   "<h5 class=\"card-title\">"+aux.cancion.nombre+"</h5>";
        c +=   "<p class=\"card-text\"><h6>"+aux.cancion.artista+"</h6></p>";
        c +=   "</div>";
        c +=   "</div>";
        aux = aux.siguiente


    }
    b.innerHTML = c;
}


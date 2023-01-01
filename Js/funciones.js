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
        this.texto = "";
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
        document.getElementById("viewActores").innerHTML += "enorden" 
        this.inOrdentoHtmlAux(this.raiz);
    }

    inOrdentoHtmlAux(raiz){
        if(raiz != null){
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
            console.log(c)
            document.getElementById("viewActores").innerHTML += c;
            this.inOrdentoHtmlAux(raiz.der);
        }
    }

    preordenHtml(){
        document.getElementById("viewActores").innerHTML = "";
        this.preOrdentoHtmlAux(this.raiz);
    }

    preOrdentoHtmlAux(raiz){
        if(raiz != null){
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
        if(raiz != null){
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

    graficar(){
        this.texto = "";
        var codigodot = "digraph G{\n graph[size = \"11.70,6.25\" ] \nlabel=\" Actores-Arbol \";\n";
        
        var raiz = this.raiz;
        if(raiz != null){
            this.texto += raiz.dpi + "[label=\""+raiz.nombre+"\n"+raiz.dpi+"\n"+raiz.correo+"\"];\n";
            this.graficarAux(raiz);
        }
        codigodot += this.texto;
        codigodot += "}";
        return codigodot;
    }

    graficarAux(raiz){
        if(raiz != null){
            if(raiz.izq != null){
                this.texto += raiz.dpi + "->" + raiz.izq.dpi + ";\n";
                this.texto += raiz.izq.dpi + "[label=\""+raiz.izq.nombre+"\n"+raiz.izq.dpi+"\n"+raiz.izq.correo+"\"];\n";
                this.graficarAux(raiz.izq);
            }
            if(raiz.der != null){
                this.texto += raiz.dpi + "->" + raiz.der.dpi + ";\n";
                this.texto += raiz.der.dpi + "[label=\""+raiz.der.nombre+"\n"+raiz.der.dpi+"\n"+raiz.der.correo+"\"];\n";
                this.graficarAux(raiz.der);
            }
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
        this.texto = "";
        this.comentarios = [];
    }

    cambiarPunteo(punt){
        this.punt = punt;
    }

    agregarComentario(comentario){
        this.comentarios.push(comentario);
    }
}

class AVL{
    constructor(){
        this.raiz = null;
        this.titulos = [];
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
        if(this.raiz==null){
            this.raiz = new Nodo(valor, name, desc, punt, precio, pag, cat);
        }else{

            this.raiz = this.add(valor, name, desc, punt, precio, pag, cat, this.raiz);
        }
    }
    

    add(valor, name, desc, punt, precio, pag, cat, nodo){
        if(nodo == null) return new Nodo(valor, name, desc, punt, precio, pag, cat);
        else{
            if(valor < nodo.valor){
                nodo.izquierda = this.add(valor, name, desc, punt, precio, pag, cat, nodo.izquierda)
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda) == -2){
                    if(valor < nodo.izquierda.valor){
                        nodo = this.rotacionizquierda(nodo);
                    }
                    else{
                        nodo = this.Rotaciondobleizquierda(nodo);
                    }
                    
                }
            }else if(valor > nodo.valor){
                nodo.derecha = this.add(valor, name, desc, punt, precio, pag, cat, nodo.derecha);
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda)== 2){
                    if(valor > nodo.derecha.valor){
                        nodo = this.rotacionderecha(nodo);
                    }else{
                        nodo = this.Rotaciondoblederecha(nodo);
                    }
                }
            }else{
                nodo.valor = valor;
            }
        }
        nodo.altura = this.MAXIMO(this.altura(nodo.izquierda),this.altura(nodo.derecha))+1
        return nodo;
    }



    rotacionizquierda(nodo){
        var aux = nodo.izquierda;
        nodo.izquierda = aux.derecha;
        aux.derecha = nodo;
        //calculo de nueva altura
        nodo.altura = this.MAXIMO(this.altura(nodo.derecha),this.altura(nodo.izquierda))+1;
        aux.altura = this.MAXIMO(this.altura(nodo.izquierda), nodo.altura)+1;
        return aux;
    }


    rotacionderecha(nodo){
        var aux = nodo.derecha;
        nodo.derecha = aux.izquierda;
        aux.izquierda = nodo;
        //calcular de nuevo altura
        nodo.altura = this.MAXIMO(this.altura(nodo.derecha),this.altura(nodo.izquierda))+1;
        aux.altura = this.MAXIMO(this.altura(nodo.derecha),nodo.altura)+1;
        return aux;
    }

    Rotaciondoblederecha(nodo){
        nodo.derecho = this.rotacionizquierda(nodo.derecho);
        return this.rotacionderecha(nodo);
    }


    Rotaciondobleizquierda(nodo){
        nodo.izquierda = this.rotacionderecha(nodo.izquierda);
        return this.rotacionizquierda(nodo);
    }


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

    inordenHtml(){
        document.getElementById("vistapelis").innerHTML = "";
        this.inOrdentoHtmlAux(this.raiz);
    }
    inOrdentoHtmlAux(raiz){
        if(raiz!=null){
            this.inOrdentoHtmlAux(raiz.izquierda);
            let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            let c = ""

            c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+raiz.name+"</h5>";
            c +=   "<p class=\"card-text\">"+raiz.cat+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.punt+" estrellas</p>";
            c +=   "<p class=\"card-text\">"+raiz.precio+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.pag+"</p>";
            c +=   "</div>";
            c +=   "<div class=\"card-footer\">";
                c+=("<button class=\"btn btn-primary\" onclick=\"info("+raiz.valor+")\">Informacion</button>");
                c +=   "<button class=\"btn btn-primary\" onclick=\"alquilar("+raiz.valor+")\">Alquilar</button>";
            c +=   "<p class=\"card-text\">"+raiz.valor+"</p>";
            c +=   "</div>";
            c +=   "</div>";
            c +=   "<br>";
            c +=   "<br>";

            document.getElementById("vistapelis").innerHTML += c;
            this.inOrdentoHtmlAux(raiz.derecha);
        }
    }

    preordenHtml(){
        document.getElementById("vistapelis").innerHTML = "";
        this.preOrdentoHtmlAux(this.raiz);
    }

    preOrdentoHtmlAux(raiz){
        if(raiz!=null){
            let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            let c = ""

            c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+raiz.name+"</h5>";
            c +=   "<p class=\"card-text\">"+raiz.cat+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.punt+" estrellas</p>";
            c +=   "<p class=\"card-text\">"+raiz.precio+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.pag+"</p>";
            c +=   "</div>";
            c +=   "<div class=\"card-footer\">";
                c+=("<button class=\"btn btn-primary\" onclick=\"info("+raiz.valor+")\">Informacion</button>");
                c +=   "<button class=\"btn btn-primary\" onclick=\"alquilar("+raiz.valor+")\">Alquilar</button>";
            c +=   "<p class=\"card-text\">"+raiz.valor+"</p>";
            c +=   "</div>";
            c +=   "</div>";
            c +=   "<br>";
            c +=   "<br>";
            
            document.getElementById("vistapelis").innerHTML += c;
            this.preOrdentoHtmlAux(raiz.izquierda);
            this.preOrdentoHtmlAux(raiz.derecha);
        }
    }



    postordenHtml(){
        document.getElementById("vistapelis").innerHTML = "";
        this.postOrdentoHtmlAux(this.raiz);
    }

    postOrdentoHtmlAux(raiz){
        if(raiz!=null){
            this.postOrdentoHtmlAux(raiz.izquierda);
            this.postOrdentoHtmlAux(raiz.derecha);
            let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            let c = ""
            
            c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+raiz.name+"</h5>";
            c +=   "<p class=\"card-text\">"+raiz.cat+" </p>";
            c +=   "<p class=\"card-text\">"+raiz.punt+" estrellas</p>";
            c +=   "<p class=\"card-text\">"+raiz.precio+"</p>";
            c +=   "<p class=\"card-text\">"+raiz.pag+"</p>";
            c +=   "</div>";
            c +=   "<div class=\"card-footer\">";
                c+=("<button class=\"btn btn-primary\" onclick=\"info("+raiz.valor+")\">Informacion</button>");
                c +=   "<button class=\"btn btn-primary\" onclick=\"alquilar("+raiz.valor+")\">Alquilar</button>";
            c +=   "<p class=\"card-text\">"+raiz.valor+"</p>";
            c +=   "</div>";
            c +=   "</div>";
            c +=   "<br>";
            c +=   "<br>";

            document.getElementById("vistapelis").innerHTML += c;
        }
    }

    aggTitulos(){
        this.titulos = [];
        this.aggTitulosAux(this.raiz);
    }

    aggTitulosAux(nodo){
        if(nodo!=null){
            this.aggTitulosAux(nodo.izquierda);
            this.aggTitulosAux(nodo.derecha);
            this.titulos.push(nodo.name);

        }
        this.titulos.sort();
        return;
    }

    Alphabetic(){
        document.getElementById("vistapelis").innerHTML = "";
        this.aggTitulos();
        let c = "";
        for(var i = 0; i<this.titulos.length; i++){
            console.log(this.titulos[i]);
             this.busquedaporTituloAux(this.raiz, this.titulos[i]);
        }
    }

    disAlphabetic(){
        this.aggTitulos();
        var tt = document.getElementById("vistapelis");
        tt.innerHTML = "";
        for (let index = this.titulos.length-1; index >= 0; index--) {
            this.busquedaporTituloAux(this.raiz, this.titulos[index]);
        }
    }

    busquedaporTitulo(titulo){
        var y = this.busquedaporTituloAux(this.raiz, titulo);
        return y;
    }

    busquedaporTituloAux(raiz, titulo){
        if(raiz!=null){
            if(raiz.name == titulo){
                console.log(raiz);
                let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
                let c = "";
                c+=("<div class=\"card\">");
                c+=("<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>");
                c+=("<div class=\"card-body\">");
                c+=("<h5 class=\"card-title\">"+raiz.name+"</h5>");
                c+=("<p class=\"card-text\">"+raiz.cat+" </p>");
                c+=("<p class=\"card-text\">"+raiz.punt+" estrellas</p>");
                c+=("<p class=\"card-text\">"+raiz.precio+"</p>");
                c+=("<p class=\"card-text\">"+raiz.pag+"</p>");
                c+=("</div>");
                c+=("<div class=\"card-footer\">");
                c+=("<button class=\"btn btn-primary\" onclick=\"info("+raiz.valor+")\">Informacion</button>");
                c+=("<button class=\"btn btn-primary\" onclick=\"alquilar("+raiz.valor+")\">Alquilar</button>");
                c+=("<p class=\"card-text\">"+raiz.valor+"</p>");
                c+=("</div>");
                c+=("</div>");
                c+=("<br>");
                c+=("<br>");
                document.getElementById("vistapelis").innerHTML += c;
                return
            }else{
                this.busquedaporTituloAux(raiz.izquierda, titulo);
                this.busquedaporTituloAux(raiz.derecha, titulo);
            }
        }
    }

    dot(){
        let dot = "digraph G {\n";
        dot += "node [shape=record];\n";
        dot += this.dotAux(this.raiz);
        dot += "}";
        return dot;
    }

    dotAux(nodo){
        if(nodo == null){
            return "";
        }
        let dot = "";
        if(nodo.izquierda != null){
            dot += nodo.valor + "->" + nodo.izquierda.valor + ";\n";
        }
        if(nodo.derecha != null){
            dot += nodo.valor + "->" + nodo.derecha.valor + ";\n";
        }
        dot += this.dotAux(nodo.izquierda);
        dot += this.dotAux(nodo.derecha);
        return dot;
    }

    busquedaValor(valor){
        var y = this.busquedaValorAux(this.raiz, valor);
    }

    busquedaValorAux(raiz, valor){
        if(raiz!=null){
            if(raiz.valor == valor){
                console.log(raiz);
                let c = "";
                c+= "<h1>"+raiz.name+"</h1>";
                c+="</br>";
                c+="<h3> Descripcion:  </h3>"+raiz.desc+"";
                c+="</br>";
                c+="<h3> Categoria:  </h3>"+raiz.cat+"";
                c+="</br>";
                c+="<h3> Precio:  </h3>"+raiz.precio+"";
                c+="</br>";
                c+="<h3> Paginas:  </h3>"+raiz.pag+"";
                c+="</br>";
                c+="<h3> Puntuacion: </h3> "+raiz.punt+"";
                c+="</br>";
                c+="<input type=\"text\" id=\"puntuacion\" placeholder=\"puntuacion\">";
                c+="<button class=\"btn btn-primary\" onclick=\"puntuar("+raiz.valor+")\">Puntuar</button>";
                c+="</br>";
                c+="<button class=\"btn btn-primary\" onclick=\"alquilar("+raiz.valor+")\">Alquilar</button>";
                c+="</br>";
                c+="<input type=\"text\" id=\"comentario\" placeholder=\"nuevo comentario\">";
                c+="<button class=\"btn btn-primary\" onclick=\"comentar("+raiz.valor+")\">Publicar</button>";
                c+="</br>";
                c+="</br>";
                c+="</br>";
                c+="<h2> Comentarios  </h2>";
                for(let i = 0; i<raiz.comentarios.length; i++){
                    c+="<div class=\"card\">";
                    c+="<div class=\"card-body\">";
                    c+="<p>"+raiz.comentarios[i]+"</p>";
                    c+="</div>";
                    c+="</div>";
                    c+="</br>";
                }
                document.getElementById("unaPeli").innerHTML = c;
                return
            }else{
                this.busquedaValorAux(raiz.izquierda, valor);
                this.busquedaValorAux(raiz.derecha, valor);
            }
        }

    }

    busquedaValor2(valor, acc, punt, name){
        var y = this.busquedaValorAux2(this.raiz, valor, acc, punt, name);
    }

    busquedaValorAux2(raiz, valor, acc, punt, name){
        if(raiz!=null){
            if(raiz.valor == valor){
                console.log(raiz)
                if(raiz!=null && acc!=null){
                    raiz.comentarios.push(name+":\n"+acc);
                    console.log("comentario jeje")
                }
                console.log(punt)
                if(raiz!=null && punt!=null){
                    raiz.punt = punt;
                    console.log("puntuacion jeje")
                }
                return;
            }else{
                this.busquedaValorAux2(raiz.izquierda, valor, acc, punt, name);
                this.busquedaValorAux2(raiz.derecha, valor, acc, punt, name);
            }
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
            this.table.push(new Lista());
        }   
    }

    insert(data, company){
        var index = this.functionHash(data);
        console.log(this.size);
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
        var porcentaje =this.amount/this.size;
        if(porcentaje>0.75){
            var temp =this.table;
            var tempSize = this.size;
            this.size = this.amount*5;
            this.table = [];
            for(let i = 0;i < this.size ; i++){
                this.table.push(new Lista());
            }
            this.amount =0;
            for(let i = 0;i < tempSize ; i++){
                if(!temp[i].isEmpty()){
                var nodo = temp[i].head;
                while(nodo!=null){
                    this.insert(nodo.value, nodo.company);
                    nodo = nodo.next;
                }
                }
            }

        }
        console.log(this.table, porcentaje);

    }


    tablagraph(){
        var graph = "digraph G {\n";
            graph += "fontname=\"Helvetica,Arial,sans-serif\"\n";
            graph += "node [fontname=\"Helvetica,Arial,sans-serif\"]\n";
            graph += "edge [fontname=\"Helvetica,Arial,sans-serif\"]\n";
            graph += "a0 [shape=none label=<\n";

            graph += "<TABLE border=\"1\" cellspacing=\"10\" cellpadding=\"10\" style=\"rounded\" >"
            graph += "<TR>\n";
            graph += "<TD>Index</TD>\n";
            graph += "<TD>Value</TD>\n";
            graph += "</TR>\n";
            for(let i = 0;i < this.size ; i++){
                graph += "<TR>\n";
                graph += "<TD>"+i+"</TD>\n";
                var nodo = this.table[i].head;
                while(nodo!=null){
                    graph += "<TD>"+nodo.value+"</TD>\n";
                    nodo = nodo.next;
                }
                graph += "</TR>\n";
            }
            graph += "</TABLE>>];\n";
            graph += "}";
            return graph;

    }

    mostrargrafica(){
        var graph = "digraph G {\n";
        for(let i = 0;i < this.size ; i++){
            var nodo = this.table[i].head;
            var x = "nodo";
            var o = 0;
            graph += i+o+"[label=\""+i+"\"];\n";
            while(nodo!=null){
                graph += x+o+i+"[label=\""+nodo.value+"\"];\n";
                nodo = nodo.next;
                o++;
            }
            o = 0;
            nodo = this.table[i].head;
            while(nodo!=null){
                graph += i+o+"->"+x+o+i+";\n";
                nodo = nodo.next;
                o++;
            }


        }
        graph += "}";
        return graph;
    }

    //tabla hash graphviz
    graphviz(){
        console.log(this.size, "  tamaño")
        var graph = "digraph G {";
        for(let i = 0;i < 20; i++){
            var nodo = this.table[i].head;
            var x = "nodo";
            var o = 0;
            console.log(this.table);
            while(nodo!=null){
                graph += x+o+"[label=\""+nodo.value+"\"];";
                nodo = nodo.next;
                o++;
                console.log(o);
            }
            graph += "}";
            return graph;
        }
    }
    
    html(){
        var html = "<table border=\"1\" cellspacing=\"10\" cellpadding=\"10\" style=\"rounded\" >";
        html += "<tr>";
        html += "<td><h2>Index</h2></td>";
        html += "<td><h2>Value</h2></td>";
        html += "</tr>";
        for(let i = 0;i < this.size ; i++){
            if(!this.table[i].isEmpty()){
            html += "<tr>";
            html += "<td>"+i+"</td>";
            var nodo = this.table[i].head;
            while(nodo!=null){
                html += "<td>"+nodo.value+"--->"+nodo.company+"</td>";
                nodo = nodo.next;
            }
            html += "</tr>";
            }
        }
        html += "</table>";
        return html;
    }

}

class DataNode {
	constructor(value, user, movie) {
		this.value 	= value
        this.user 	= user
        this.movie 	= movie
	}
}

class HashNode {
    constructor(hash) {
      this.hash  = hash
      this.left  = null
      this.right = null
    }
}

class Merkle {
    constructor() {
      this.tophash = null
      this.size = 0;
      this.datablock = []
      this.datablock = []    
      this.dot = ''
    }
  
    add(value, user, movie) {
      this.datablock[this.size]= new DataNode(value, user, movie)
      this.size++;
    }
  
    createTree(exp) {
      this.tophash = new HashNode(0)
      this._createTree(this.tophash, exp )
    }
  
    _createTree(tmp, exp) {
      if (exp > 0) {
        tmp.left = new HashNode(0)
        tmp.right = new HashNode(0)
        this._createTree(tmp.left, exp - 1)
        this._createTree(tmp.right, exp - 1)
      }
    }
  
    genHash(tmp, n) { // postorder
      if (tmp != null) {
        this.genHash(tmp.left, n)
        this.genHash(tmp.right, n)  
        
        if (tmp.left == null && tmp.right == null) {
          tmp.left = this.datablock[n-index--]
          //tmp.hash =sha256(tmp.left.value.user+" - "tmp.left.value.movie)
          tmp.hash =sha256(tmp.left.value+"")
        } else {
          tmp.hash = sha256(tmp.left.value+""+tmp.right.value)
        }      
      }
    }
  
    auth() {
      console.log(this.datablock)
  
      var exp = 1
      while (Math.pow(2, exp) < this.datablock.length) {
        exp += 1
      }
      for (var i = this.datablock.length; i < Math.pow(2, exp); i++) {
        this.datablock.push(1)
      }
      index = Math.pow(2, exp)
      this.createTree(exp)
      this.genHash(this.tophash, Math.pow(2, exp))
    }
  
    clear(){
        this.tophash = null;
        this.datablock = [];  
        this.size = 0;
    }
  }

class Bloque{
	constructor(index,date,data,nonce,prevHash,rootmerkle,hash){
		this.index = index
		this.date = date;
		this.data = data;
		this.nonce = nonce;
		this.prevHash = prevHash;
		this.rootmerkle = rootmerkle;
		this.hash = hash;
	}
}

class Node{
  constructor(_value){
    this.value = _value;
    this.next = null;
    this.before = null;
  }
}

class BlockChain{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

	generarBloque(){
		var date = new Date(Date.now());
        date = (date.toLocaleString().replaceAll("/","-"))
        date = (date.toLocaleString().replaceAll(", ","-::"))

		var prevHash = "";
		if(this.isEmpty()){
			prevHash = "00"
		}else{
			prevHash = this.tail.value.hash
		}
    //generamos el arbol
		alquileres.auth()
    //Data revisar
    var data= alquileres.datablock;
		var rootmerkle = alquileres.tophash.hash
        alquileres.clear();
		var nonce = 0;
		var hash = "";

		//prueba de trabajo
		while(!hash.startsWith("00")){	
			hash = sha256(this.size+date+prevHash+rootmerkle+nonce);
			nonce += 1;
		} 
		var data = new Bloque(this.size, date, data, nonce, prevHash, rootmerkle, hash);
		this.insert(data)
	}	

	isEmpty(){
		return this.head === null
	}

    insert(_value){
        var newNode = new Node(_value);
            this.size++;

        if( this.head != null){
        newNode.before = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        }else{
        this.head = newNode;
        this.tail = newNode;
        }
    }

    delete(_value){
        var temporal = this.head;
        if(temporal.value == _value){
        this.head = temporal.next;
        if(this.head != null){
            this.head.before = null;
        }
        }else{
        while(temporal != null){
            if(temporal.value == _value){
            var anterior = temporal.before;
            anterior.next = temporal.next
            if(temporal.next != null){
                temporal.next.before = anterior; 
            }
            if(this.tail == temporal){
                this.tail = temporal.before 
            }
            break;
            }
            temporal = temporal.next;
        }
        }
    }

    print(){
        var temporal = this.head;
        while(temporal != null){
        console.log(temporal.value);
        temporal = temporal.next;
        }
    }

    print2(){
        var temporal = this.tail;
        while(temporal != null){
        console.log(temporal.value);
        temporal = temporal.before;
        }
    }

    html(){
        
    }

}
  






//declaracion de variables globales
let users = new listaUsuarios();//lista simple
let usuarioLog = null;//usuario
let actores =  new arbolActores();//arbol binario
let peliculas = new AVL();//arbol AVL
let categorias = new TableHash(20);//tabla hash
var alquileres = new Merkle()//almacenamiento alk para obtencion de hash y blockchain
var blockChain = new BlockChain();//blockchain de alquileres
var periodo = 300000;//5 minutos



//quemado de usuarios masters
users.agregar(new Usuario("EDD", "Oscar Armin", 2354168452525, 12345678, encriptar("12345678"), true));
users.agregar(new Usuario("3", "Oscar Armin", 2354168452525, 12345678, encriptar("a"), true));
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
    document.getElementById("pelipeli").style.display = "none";
    document.getElementById("chain").style.display = "none";
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
    document.getElementById("pelipeli").style.display = "none";
    document.getElementById("chain").style.display = "none";
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
    document.getElementById("pelipeli").style.display = "none";
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
    document.getElementById("pelipeli").style.display = "none";
    document.getElementById("chain").style.display = "none";
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
    document.getElementById("pelipeli").style.display = "none";
    document.getElementById("chain").style.display = "none";
    document.body.style.backgroundColor = "white";
}

//mostrar contenedor con vista de artistas
function vista2(){
    vw();
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "block";
    document.getElementById("usuario3").style.display = "none";
    document.getElementById("pelipeli").style.display = "none";
    document.getElementById("chain").style.display = "none";
    document.body.style.backgroundColor = "white";
}

//mostrar contenedor con vista de playlist
function vista3(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "block";
    document.getElementById("pelipeli").style.display = "none";
    document.getElementById("chain").style.display = "none";
    document.body.style.backgroundColor = "white";
}

function vistaPeli(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "none";
    document.getElementById("pelipeli").style.display = "block";
    document.getElementById("chain").style.display = "none";
    document.body.style.backgroundColor = "white";
}

function vistaChain(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("usuario1").style.display = "none";
    document.getElementById("usuario2").style.display = "none";
    document.getElementById("usuario3").style.display = "none";
    document.getElementById("pelipeli").style.display = "none";
    document.getElementById("chain").style.display = "block";
    document.body.style.backgroundColor = "white";
}

function encriptar (texto){
    var hash = sha256(texto+"");
    return hash;
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
                var dpi = element["dni"]
                var name = element["nombre_actor"]
                var correo = element["correo"]
                var desc = element["descripcion"]
                if(name == undefined || dpi == undefined || correo == undefined || desc == undefined){
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
    console.log(categorias.tablagraph());
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
    var x = users.dot();
    graf = x;
    d3.select("#graficaAdmon").graphviz()
    .width(450)
    .height(459)
    .renderDot(x);

}
let graf = "";
function grafica2(){
    var x = actores.graficar()
    graf = x;
    d3.select("#graficaAdmon").graphviz()
    .width(450)
    .height(459)
    .renderDot(x);
}

function grafica3(){
    var x = peliculas.dot();
    graf = x;
    console.log(x)
    d3.select("#graficaAdmon").graphviz()
    .width(450)
    .height(459)
    .renderDot(x);
    console.log(peliculas.preorden());
    console.log(peliculas)
}

function grafica4(){
    var x = categorias.tablagraph();
    graf = x;
    d3.select("#graficaAdmon").graphviz()
    .width(450)
    .height(459)
    .renderDot(x);
}

function download(){
    console.log("hola")
    d3.select("#graficaAdmon").graphviz()
        .renderDot(graf)
        html2canvas(document.getElementById("graficaAdmon"), {
            onrendered (canvas) {
              var link = document.getElementById('download');
              var image = canvas.toDataURL();
              console.log(image);
              link.href = image;
              link.download = 'screenshot.png';
            }
           });
}

function descargargrafica(){
    var x = categorias.tablagraph();
    var blob = new Blob([x], {type: "text/plain;charset=utf-8"});
    d3.saveAs(blob, "grafica.dot");
}

//ordenes de actores
function orden1(){
    actores.inordenHtml();
    console.log("si")
}

function orden2(){
    actores.preordenHtml();
}

function orden3(){
    actores.postordenHtml();
}

//ordenes de peliculas
function o1(){
    peliculas.inordenHtml();
    vista1();
    console.log(peliculas);
}

function o2(){
    peliculas.preordenHtml();
    console.log(peliculas);
    vista1();
}

function o3(){
    peliculas.postordenHtml();
    console.log(peliculas);
    vista1();
}

function o4(){
    peliculas.Alphabetic();
    console.log(peliculas);
    vista1();
}

function o5(){
    peliculas.disAlphabetic();
    console.log(peliculas);
    vista1();
}

function vw(){
    document.getElementById("catecate").innerHTML = "";
    var x = categorias.html();
    document.getElementById("catecate").innerHTML = x;
}

//funciones de peliculas
function comentar(id){
    var commit = document.getElementById("comentario").value;
    peliculas.busquedaValor2(id, commit, null, usuarioLog.nombre );
}

function puntuar(id){
    var punteo = document.getElementById("puntuacion").value;
    peliculas.busquedaValor2(id, null, punteo, null);

}

function alguilar(id){
    var x = peliculas.busquedaValor2(id);
    var peli = x.name;
    var preci = x.precio;
    var u = usuarioLog.name;
}

function info(id){
    var x = peliculas.busquedaValor(id);
    vistaPeli();
}


//funciones blockchain

var as = setInterval(()=>{

	blockChain.generarBloque();  
	console.log(blockChain)
	
},periodo);

function intervalo(){
    periodo = document.getElementById("periodo").value;
    console.log(periodo)

}

function generarBloque(){
    blockChain.generarBloque();  
      console.log(blockChain)
}


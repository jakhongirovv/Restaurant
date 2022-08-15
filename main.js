let odam;
let korzinOff= [];
function keldi() {
    $.ajax("http://myjson.dit.upm.es/api/bins/5rnc",{
        success: (qiymat) =>{
            console.log(qiymat);
            odam = qiymat;
            ekran(odam)
        },
        error: (ero) =>{
            console.log(ero);
        }
    })
}
keldi()


function ekran(h) {
    $("#row").html("")
    h.map((v,i) =>{
        let col=`
        <div class="col-3 offset-1">
                <div class="card bg-dark">
                <img class="rasm" src="${v.rasim}" widht="150" height="160" alt="rasim">
                    <b class="text-light d-block ms-4">${v.nomi }</b>
                    <p class="text-light ms-4">${v.nimaligi}</p>

                    <b class="text-light ms-4">${v.narxi}</b>
                    <div class="bg-dark">
                        <button class="bg-dark buto mt-4" onclick="del(${i})">
                            <span class="text-light"><i class="fa-solid fa-trash-can"></i></span>
                             </button>
                             <button class="bg-dark buto  mt-4" onclick="korzin(${i})">
                             <span class="${i} text-light"><i class="fa-solid fa-trash-arrow-up"></i></span>
                             </button>
                             <button class="bg-dark buto  mt-4" onclick="like(${i})">
                             <span class="${v.like ? "text-danger" : "d-none"}"><i class="fa-solid fa-thumbs-up"></i></span>
                            <span class="${v.like ? "d-none" : "text-danger"}"><i class="fa-solid fa-thumbs-down"></i></span>
                            </button>
                    </div>
                </div>
                    


                
                </div>
        `
        $("#row").append(col)
    })
}

function del(i) {
    odam.splice(i,1)
    ekran(odam)
}

function like(i) {
    odam[i].like = !odam[i].like
    ekran(odam)
}

function korzin(i) {
    korzinOff.push(odam[i]);
    korzina_ekran(korzinOff);
    let o = korzinOff.length;

    $("#korzna").html(o)

}


function korzina_ekran(a) {
    $("#canvas").html("")
    a.map((v,i) =>{
        let col =`
        <div class="col-4">
                
                    <img src="${v.rasim}" widht="150" height="120" alt="rasim">
                    <b class="text-light d-block">${v.nomi }</b>
                    <p class="text-light">${v.nimaligi}</p>

                    <b class="text-light">${v.narxi}</b>
                    


                
                </div>
        `
        $("#canvas").append(col)
    })
}



let odamcha;

function kel(a) {
    $.ajax("http://myjson.dit.upm.es/api/bins/edws", {
        success: (qiyma) =>{
            console.log("qiymatin keldi",qiyma);
            odamcha=qiyma
            oyna(odamcha)
        },
        error: (er) =>{
            console.log(er);
        }
    })
}

kel(odamcha)


function oyna(a) {
    $("#rowa").html("")
    a.map((v,i) =>{
        let coool =`
        <div class="col-3" offset="col-1">
                        <img class="foot_img" src="${v.photo}" width="250" height="200" alt="rasiml">
                        <b class="text-light d-block">${v.name}</b>
                        <p class="text-light">${v.ovqat}</p>
                        <p class="text-light">${v.money}</p>

                        <div class="bg-dark" onclick="dele(${i})">
                            <button class="bg-dark buto mt-4">
                                <span class="text-light"><i class="fa-solid fa-trash-can"></i></span>
                                 </button>
                                 <button class="bg-dark buto  mt-4" onclick="korzins(${i})">
                                 <span class="${i} text-light"><i class="fa-solid fa-trash-arrow-up"></i></span>
                                 </button>
                                 <button class="bg-dark buto  mt-4" onclick="likes(${i})">
                                 <span class="${v.like ? "text-danger" : "d-none"}"><i class="fa-solid fa-thumbs-up"></i></span>
                                <span class="${v.like ? "d-none" : "text-danger"}"><i class="fa-solid fa-thumbs-down"></i></span>
                                </button>
                        </div>
                    </div>
        `
        $("#rowa").append(coool)
    })
}


function dele(i) {
    odam.splice(i,1)
    ekran(odam)
}

function likes(i) {
    odam[i].like = !odam[i].like
    ekran(odam)
}

function korzins(i) {
    korzinOff.push(odam[i]);
    korzina_ekran(korzinOff);
    let o = korzinOff.length;

    $("#korzna").html(o)

}
const liste=["kedi.jpg","köpek.jpg","soru.jpg"];
const kedi=document.getElementById("kedi");
const köpek=document.getElementById("köpek");
const soru=document.getElementById("soru");
const count = 0;

kedi.onclick=secimYap;
köpek.onclick=secimYap;
soru.onclick=secimYap;

function secimYap(){

    const secim= this.dataset.id;
    for (var i = 0 ; i<2 ; i++){
        if (kedi.onclick && count < 2){
            message : "kazandınız !"
        }
        else if (!kedi.onclick && count ===2){
            message : "kaybettiniz !"
        }
        else if (!kedi.onclick && count <2){
            message : "tekrar deneyin !"
        }
        else{
            message : "kaybettiniz !"
        }

    }
}
document.getElementById("root")

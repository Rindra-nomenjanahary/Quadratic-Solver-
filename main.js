function aid() {
    window.alert('Saisissez les coefficients de votre équation du second degré,séparés par des virgules,puis cliquez sur <confirmer> pour obtenir la solution.Exemple:pour x²-4x+7=0, saisir: +1,-4,+7');
}
/*chargement eto*/
const load=document.querySelector('#charge');
const real=document.querySelector('#resol');
if(real){
real.style.display='none';
let trans=0;
function fiova(){
trans++;
if(trans==5){
    load.style.display='none';
    real.style.display='block';
             }
}
setInterval(fiova,1000);
}
/*hatreto*/
const y=document.getElementById('bt');
if(y){
y.addEventListener('click',()=>{
   const maka=document.forms.nomb.value;
   const sep=maka.split(',');
   const i=maka.length;
   const a=sep[0];
   const b=sep[1];
   const c=sep[2];
if(i==0){
document.getElementById('f').innerHTML=('saisir les nombres svp!');
}
    else{
document.getElementById('f').innerHTML=(a+'x²'+b+'x'+c+'=0');
   const d=(b*b)-(4*(a*c));
document.getElementById('del').innerHTML=('delta='+d);

    if(d<0){
 document.getElementById('solu').innerHTML=('Pas de solution!');
           }
    else if(d==0){
    const x=-b/(2*a);
document.getElementById('solu').innerHTML=('la solution est:'+'x='+x);
                 }
    else{
    const r=Math.sqrt(d);
    const x1=(-b-r)/(2*a);
    const x2=(-b+r)/(2*a);
document.getElementById('solu').innerHTML=('les solutions sont :'+'x1='+x1+' et '+'x2='+x2);
        }
      }     
})
}

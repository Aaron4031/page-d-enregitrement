// *****************Afficher les numero lors du clic
let ligne = document.querySelectorAll('tr')
console.log(ligne)

ligne.forEach(lig => {
   lig.addEventListener('click', ()=>{
    alert(lig.rowIndex)
    })
});
// *****************fin Afficher les numero lors du clic
// ******************declaration des variable qui son sur la page d'accueil
let nom = document.querySelector('#nomHTML')
let prenom = document.querySelector('#prenomHTML')
let email = document.querySelector('#emailHTML')
// ******************fin declaration des variable qui son sur la page d'accueil
// *****************declaration des variable du formulaire
let input_noms = document.querySelector('#noms')
let input_prenoms = document.querySelector('#prenoms')
let input_jours = document.querySelector('#jours')
let input_mois = document.querySelector('#mois')
let input_annees = document.querySelector('#annees')
let input_email = document.querySelector('#email')
let input_MP = document.querySelector('#MP')
let input_CMP = document.querySelector('#CMP')
let button = document.querySelector('.button')
// *****************fin declaration des variable du formulaire
// *****************declaration des variable du storageLocal
let storage_nom = localStorage.getItem('nom')
let storage_prenom = localStorage.getItem('prenom')
let storage_jour = localStorage.getItem('jour')
let storage_mois = localStorage.getItem('mois')
let storage_annees = localStorage.getItem('annees')
let storage_email = localStorage.getItem('email')
let storage_mot_passe = localStorage.getItem('mot_passe')
let storage_confiMot_passe = localStorage.getItem('confiMot_passe')
// ***************** fin declaration des variable du storagezLocal
// *****************affichage des info du localstorage dans le html de la pagge sd'accueil
function Afficher() {
    if (storage_email == null) {
        console.log(null)
    } else {
        nom.innerHTML =`${storage_nom}`
        prenom.innerHTML =`${storage_prenom}`
        email.innerHTML =`${storage_email}`
        
    }
    

}
//*****************fin affichage des info du localstorage dans le html de la page d'accueil
//*****************stockage des ellement du inpute lors du clic dans le locastorage 
function clic() {
    
    button.addEventListener('click',()=>{
        let value_noms = input_noms.value
        localStorage.setItem('nom', value_noms)

        let value_prenoms = input_prenoms.value
        localStorage.setItem('prenom', value_prenoms)

        let value_email = input_email.value
        localStorage.setItem('email', value_email)

        let value_jours = input_jours.value
        localStorage.setItem('jour', value_jours)

        let value_mois = input_mois.value
        localStorage.setItem('mois', value_mois)

        let value_annees = input_annees.value
        localStorage.setItem('annees', value_annees)

        let value_MP = input_MP.value
        localStorage.setItem('mot_passe', value_MP)

        let value_CMP = input_CMP.value
        localStorage.setItem('confirMot_passe', value_CMP)

        if ( value_MP != value_CMP ) {
            alert("les mot de passe sont differents")
        } else{
            console.log('bien')
        }
    })
}
//*****************fin stockage des ellement du inpute lors du clic dans le locastorage


Afficher()
clic()

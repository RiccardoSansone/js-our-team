// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: 
// nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:                                                                               
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

const cardContainer = document.getElementById('cardContainer')

const memberslist = [

    {
        nome: 'Wayne',
        cognome: 'Barnett',
        ruolo: 'Founder & CEO ',
        img: `./assets/img/wayne-barnett-founder-ceo.jpg`
    },

    {
        nome: 'Angela',
        cognome: 'Caroll',
        ruolo: 'Chief Editor ',
        img: `./assets/img/angela-caroll-chief-editor.jpg`
    },

    {
        nome: 'Walter ',
        cognome: 'Gordon',
        ruolo: 'Office Manager',
        img:`./assets/img/walter-gordon-office-manager.jpg`
    },


    {
        nome: 'Angela',
        cognome: 'Lopez',
        ruolo: 'Social Media Manager',
        img: `./assets/img/angela-lopez-social-media-manager.jpg`
    },


    {
        nome: 'Scott',
        cognome: 'Estrada',
        ruolo: 'Developer',
        img: `./assets/img/scott-estrada-developer.jpg`
    },


    {
        nome: 'Barbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        img: `./assets/img/barbara-ramos-graphic-designer.jpg`
    }


]

for(let i = 0; i < memberslist.length; i++){
    const members = memberslist[i];
    for(const key in members){
        console.log(key);
        console.log(members[key]);
    }

    const markupElement = `
        <div class="card">
            <h4>${members.nome + '  ' + members.cognome}</h4>
            <p>${members.ruolo}</p>
            <img src="${members.img}" alt="">
        </div>
    `
    cardContainer.insertAdjacentHTML('beforeend', markupElement);
}
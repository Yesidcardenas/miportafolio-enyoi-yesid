
const projects = [
    {
        idproject: 1,
        imagproject: 'https://habitatweb.mx/images/webapp.png',
        titleproject: 'Desarrollo de aplicaciones android',
        descriptionproject:'Aqui podemos ver el contenido de esta card',
        linkproject: 'http://127.0.0.1:5500/index.html#experience'
    },
    {
        idproject: 2,
        imagproject: 'https://lacriaturacreativa.com/wp-content/uploads/2019/07/domestika.jpg',
        titleproject: 'Creación de portafolio web Javascript',
        descriptionproject: 'Aqui podemos ver el contenido de esta card',
        linkproject: 'http://127.0.0.1:5500/index.html#experience' 
    },
    {
        idproject: 3,
        imagproject: 'https://facialix.com/wp-content/uploads/2023/04/curso-app-moviles-google-facialix.jpg',
        titleproject: 'Desarrollo de aplicaciones con google',
        descriptionproject: 'Aqui podemos ver el contenido de esta card',
        linkproject: 'http://127.0.0.1:5500/index.html#experience'
    },
    {
        idproject: 4,
        imagproject: 'https://estuary.dev/static/42418b17bfdb3ab575a5b75a5be714cb/bb8ee/firebase_vs_mongodb_bebc863e05.png',
        titleproject: 'CRUD con MongoDB & Firebase',
        descriptionproject: 'Aqui podemos ver el contenido de esta card',
        linkproject: 'http://127.0.0.1:5500/index.html#experience'
    }
];

loadSectionProjects()
function loadSectionProjects(){
    projects.forEach(project => createCardsProjects(project));
}

function createCardsProjects(project){

    const CardProject = document.createElement('div')
    CardProject.classList.add('card-content')

    const imgCard = document.createElement('img')
    imgCard.classList.add('img-card')
    imgCard.src = project.imagproject
    imgCard.alt = project.titleproject

    const containerDescription = document.createElement('div')
    containerDescription.classList.add('container-description')
    
    const titleCard = document.createElement('h3')
    titleCard.textContent = project.titleproject
    
    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = project.descriptionproject

    const goToProyect = document.createElement('a')
    goToProyect.href = project.linkproject
    goToProyect.textContent = 'Ir al proyecto'

    goToProyect.setAttribute('target','_blank')
    

    CardProject.appendChild(imgCard)
    CardProject.appendChild(containerDescription)

    containerDescription.appendChild(titleCard)
    containerDescription.appendChild(descriptionCard)
    containerDescription.appendChild(goToProyect)


    document.querySelector('.card-container').appendChild(CardProject)

}


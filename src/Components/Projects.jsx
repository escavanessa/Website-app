import ProjectCard from "./Card"


const images = [
    {
        imgUrl:'blue.png',
        title: 'Lorem Ipsum'
    },
    {
        imgUrl:'house.png',
        title: 'Lorem Ipsum'
    },
    {
        imgUrl:'todo.png',
        title: 'Lorem Ipsum'
    },
    {
        imgUrl:'weather.png',
        title: 'Lorem Ipsum'
    },
    {
        imgUrl:'peirce.png',
        title: 'Lorem Ipsum'
    },
    {
        imgUrl:'purple.png',
        title: 'Lorem Ipsum'
    },
  ]
  
const map = images.map((img) => {
    return <ProjectCard imgUrl={img.imgUrl} title={img.title}/>
})


const Projects = () => {
    return(
        <div id="projects" className="project-container">
            {map}
        </div>
    )
}

export default Projects
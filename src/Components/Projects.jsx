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

// the second argument in the map function is the index. kind of like i in a for loop
// since each index is unique can be used as a unique key
const map = images.map((img, imagesArrayIndex) => {
    return <ProjectCard imgUrl={img.imgUrl} title={img.title} key={imagesArrayIndex}/>
})


const Projects = () => {
    return(
        <div id="projects" className="project-container">
            {map}
        </div>
    )
}

export default Projects
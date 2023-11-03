import ProjectCard from "./Card"


const images = [
    {
        imgUrl:'blue.png',
        title: 'Paintings I made throughout my life! Portion coming soon.'
    },
    {
        imgUrl:'house.png',
        title: '3D work i began making in college. Portion coming soon'
    },
    {
        imgUrl:'todo.png',
        title: 'Javascript Project I made'
    },
    {
        imgUrl:'weather.png',
        title: 'Jacascript project I made'
    },
    {
        imgUrl:'peirce.png',
        title: 'A painting I made in college since i ran out of images'
    },
    {
        imgUrl:'purple.png',
        title: 'A painting I made in college since i ran out of images'
    },
  ]

// the second argument in the map function is the index. kind of like i in a for loop
// since each index is unique can be used as a unique key
const map = images.map((img, imagesArrayIndex) => {
    return <ProjectCard imgUrl={img.imgUrl} title={img.title} key={imagesArrayIndex}/>
})


const Projects = () => {
    return(
        <>
        <h1>Featured Projects!</h1>
        <div id="projects" className="project-container">
            {map}
        </div>
        </>
    )
}

export default Projects
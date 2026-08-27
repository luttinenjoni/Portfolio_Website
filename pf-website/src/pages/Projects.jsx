import "../styles/Projects.css";

function Projects() {
  return (
        <>    
        <section id="projects">
            <div className="container projects">
                <h2>Projects</h2>
                <p>Here are some of my projects:</p>
                <div className="row">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src="..." class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Interactive apartment showcase</h5>
                        <p className="card-text">School course project</p>
                        <a href="https://github.com/Luova-innovaatio-Start-Lab-1/StartsLabUnrealEngine" className="card-link">Link to github</a>
                    </div>
                </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">2D rogue like</h5>
                            <p className="card-text">School course project</p>
                            <a href="https://github.com/luttinenjoni/TopDownGame" className="card-link">Link to github</a>
                        </div>
                    </div>
                        <div className="card" style={{ width: '18rem' }}>
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">This portfolio</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects
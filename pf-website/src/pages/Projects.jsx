import "../styles/Projects.css";

function Projects() {
  return (
    <>
        <section id="projects">
            <div className="container projects">
                <h2>Projects</h2>
                <p>Here are some of my projects:</p>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Interactive apartment showcase</h5>
                                <p className="card-text">School course project. I programmed the functionality and some of the visual elements.</p>
                                <a href="https://github.com/Luova-innovaatio-Start-Lab-1/StartsLabUnrealEngine" className="card-link">Link to github</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">2D rogue like</h5>
                            <p className="card-text">School course project. I was one of the main programmers.</p>
                            <a href="https://github.com/luttinenjoni/TopDownGame" className="card-link">Link to github</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">This portfolio</h5>
                            <p className="card-text">Personal project done all by my self using the past experienece with javascript and react.</p>
                            <a href="https://github.com/luttinenjoni/Portfolio" className="card-link">Link to github</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Location app</h5>
                            <p className="card-text">School course project done by myself and with the help of teacher.</p>
                            <a href="https://github.com/luttinenjoni/LocationApp" className="card-link">Link to github</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">3D Puzzle game</h5>
                            <p className="card-text">Summer school course project done with four other students. I was one of the main programmers.</p>
                            <a href="#" className="card-link">Link to youtube video</a>
                        </div>
                    </div>
                     <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">2D Platformer</h5>
                            <p className="card-text">School project. As a team we used claude to to further develop a existing mobile game.</p>
                            <a href="#" className="card-link">Google play store</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Projects
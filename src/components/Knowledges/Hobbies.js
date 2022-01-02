import React from 'react'

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby"><i className="fa fa-running"></i>
                    <span>Course à pied</span>
                </li>
                <li className="hobby"><i className="fa fa-tree"></i>
                    <span>Nature</span>
                </li>
                <li className="hobby"><i className="fa fa-chess"></i>
                    <span>Echec</span>
                </li>
                <li className="hobby"><i className="fa fa-cubes"></i>
                    <span>3D</span>
                </li>
                <li className="hobby"><i className="fa fa-dumbbell"></i>
                    <span>Fitness</span>
                </li>
            </ul>
        </div>
    )
}

export default Hobbies

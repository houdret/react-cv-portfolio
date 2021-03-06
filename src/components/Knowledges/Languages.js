import React, { Component } from 'react'
import ProgressBar from './ProgressBar';
class Languages extends Component {

    state = {
        languages: [
            {id: 1, value: 'Javascript', xp:1},
            {id: 2, value: 'Css', xp:1.3},
            {id: 3, value: 'Php', xp:1.5},
            {id: 4, value: 'C#', xp:0.6}
        ],
        frameworks:[
            {id: 1, value: 'React', xp:0.6},
            {id: 2, value: 'Bootstrap', xp:0.6},
            {id: 3, value: 'Sass', xp:0.3},
            {id: 4, value: 'Vue', xp:0.3}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}
export default Languages;
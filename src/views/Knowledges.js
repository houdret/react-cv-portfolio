import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/Knowledges/Languages';
import Expérience from '../components/Knowledges/Expérience';
import OtherSkills from '../components/Knowledges/OtherSkills';
import Hobbies from '../components/Knowledges/Hobbies';
const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
           <div className="knowledgesContent">
               <Languages />
               <Expérience />
               <OtherSkills />
               <Hobbies />
           </div>
        </div>
    )
}
export default Knowledges;
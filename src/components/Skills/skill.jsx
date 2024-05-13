import React from 'react'
import './skill.css'
import UiDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skill = () => {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What i do</span>
        <span className="skillDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi unde odit, error nemo aut recusandae illo eius. Aspernatur vel ipsam enim exercitationem ad atque minima porro ducimus sequi voluptates.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UiDesign} alt="UiDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text,you can write your own content here.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while the production ready</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>You can write text related to mobile</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skill

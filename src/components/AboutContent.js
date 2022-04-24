import imgAboutContent from '../assets/img/introduce.jpeg'
import '../css/cssComponents/AboutContent.css'

function AboutContent() {
    return (
        <>
            <div className="aboutContent">
                <div className="aboutContentImg">
                    <img src={imgAboutContent} />
                </div>
                <div className="aboutContentText">
                    <h1>Our Story</h1>
                    <div className="underline"></div>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</span>
                </div>
            </div>
        </>
    )
}

export default AboutContent
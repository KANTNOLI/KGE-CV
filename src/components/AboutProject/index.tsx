import style from "./AboutProject.module.scss"

function AboutProject() {
    return (<section className={style.body}>
        <div className={style.content}>
            <div className={style.contentText}>
                <p tabIndex={0} className={style.contentTitle}><span>My thoughts</span> before completing the creation of a solid foundation for my project</p>
                <p className={style.contentDesc}>This project was created with my soul and a lot of my time. For me, this was the strongest test of my abilities, perseverance and desire to gain more and more new knowledge about this.</p>

                <p className={style.contentDesc}>And now I will list the main stages of the project's development, the key mechanics that make it the only one like this, and I want to say a special thank you to Heffernan for the inspiration and idea!</p>
            </div>
        </div>


        <div className={style.listContent}>
            <p>Key points:</p>
            <ul>
                <li>Creating a <span>3D engine</span></li>
                <li>Creating snippets for working with <span>CSS3, 3DObject, Animations, etc.</span></li>
                <li>Writing a <span>custom shader</span> with calculations</li>
                <li>A working <span>Operating System</span></li>
                <li><span>Application Store</span></li>
                <li><span>Caching data</span> and <span>saving</span> downloaded applications</li>
                <li>Cross-platform engine for <span>all Frameworks, including vanilla js</span></li>
                <li>And much more<span>...</span></li>
            </ul>
        </div>

        <div className={style.imgContent}>
            <img tabIndex={1} src="http://91.240.85.151:2403/66-66-66-66-6666/assets/img/KGE5.png" alt="" />
        </div></section>
    );
}

export default AboutProject;
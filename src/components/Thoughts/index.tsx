import style from "./Thoughts.module.scss"

function Thoughts() {
    return (
        <section className={style.body}>

            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={0} className={style.contentTitle}><span>My thoughts</span> before completing the creation of a solid foundation for my project</p>
                    <p className={style.contentDesc}>This project was created with my soul and a lot of my time. For me, this was the strongest test of my abilities, perseverance and desire to gain more and more new knowledge about this.</p>

                    <p className={style.contentDesc}>And now I will list the main stages of the project's development, the key mechanics that make it the only one like this, and I want to say a special thank you to Heffernan for the inspiration and idea!</p>
                </div>
            </div>


            <div tabIndex={1}  className={style.listContent}>
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
                <img tabIndex={2} src="https://web.fractureverse.space/66-66-66-66-6666/assets/img/KGE5.png" alt="" />
            </div>

            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={3} className={style.contentTitle}>Why was this project <span>created at all?</span></p>
                    <p className={style.contentDesc}>In fact, this project is both my portfolio and a collaboration with VBAL, in which I believe and share my best practices. And I decided to create a project as a portfolio and for the programming exam, combining business with pleasure, drawing inspiration from various websites of other people, and as soon as I found something special, challenging and challenging, I sat down at it and started doing it!</p>
                </div>
            </div>

            <div className={style.imgContent}>
                <img tabIndex={4} src="https://web.fractureverse.space/66-66-66-66-6666/assets/img/KGE6.png" alt="" />
            </div>


            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={5} className={style.contentTitle}>What are my future <span>plans?</span></p>
                    <p className={style.contentDesc}>Next, I plan to develop this site more and more, at the time of writing this post, the computer part is ready, in the future another phone version is planned, the logic is the same except for models and optimization in some points.</p>
                    <p className={style.contentDesc}>At the same time, I would like to find a job, this project is more like a Pet project for me, which not only serves as a portfolio and advertising for me, but also helps an indie company VBAL, in which I believe with all my heart. There were also thoughts about monetization of the site, but that's not the point now</p>
                </div>
            </div>

        </section>);
}

export default Thoughts;
import style from "./Works.module.scss"

function Works() {
    return (
        <section className={style.body}>
            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={0} className={style.contentTitle}><span>Hi!</span> Here you will see my work, which <span>tools</span> were used and a <span>description</span> for each project!</p>
                    <p className={style.contentDesc}>There should be a cool description of something, maybe a quote and more, but I'm tired.</p>
                </div>
            </div>

            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={0} className={style.contentTitle}><span>KMNotes</span> - App for phones</p>
                    <p className={style.contentDesc}>A simple application for phones, actually for creating notes with the ability to select the time, delete or basic editing. Well, and the marking of the days of the week</p>
                    <p className={style.contentDesc}><span>React Native</span>, <span>Expo</span> and <span>CSS</span></p>
                    <p tabIndex={0} className={style.contentDesc}>GitHub: <a target="_blank" href="https://github.com/KANTNOLI/KMNotes">KMNotes</a></p>
                </div>
            </div>

            <div className={style.imgContent}>
                <img tabIndex={9} src="http://91.240.85.151:2403/66-66-66-66-6666/assets/img/KMNotes.jpg" alt="" />
            </div>

            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={0} className={style.contentTitle}><span>KGECheckers</span> - Server Game App</p>
                    <p className={style.contentDesc}>This project is made entirely by FullStack, where all work is done only through the server. It consists of a lobby system and a working 3D checkers game.</p>
                    <p className={style.contentDesc}><span>KGEngine</span> + <span>THREE.js</span>, <span>Node.js</span>, <span>Express</span> and <span>Socket.io</span></p>
                    <p tabIndex={0} className={style.contentDesc}>GitHub: <a target="_blank" href="https://github.com/KANTNOLI/KGECheckers">KGECheckers</a></p>
                </div>
            </div>

            <div className={style.imgContent}>
                <img tabIndex={9} src="http://91.240.85.151:2403/66-66-66-66-6666/assets/img/KGECheckers.png" alt="" />
            </div>

            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={0} className={style.contentTitle}><span>KGECV</span> - My first Attempt at a portfolio website</p>
                    <p className={style.contentDesc}>The site is 100% done, but due to the fact that there is no design to adapt to smartphones, I suggested making another one. There are games, achievements, settings, music, everything is beautiful</p>
                    <p className={style.contentDesc}><span>KGEngine</span> + <span>THREE.js</span>, <span>React</span>, <span>React Router</span>, <span>Redux ToolKit</span>, <span>Sass</span> and <span>Swiper</span></p>
                    <p tabIndex={0} className={style.contentDesc}>GitHub: <a target="_blank" href="https://github.com/KANTNOLI/KGECV">KGECV</a></p>
                </div>
            </div>

            <div className={style.imgContent}>
                <img tabIndex={9} src="http://91.240.85.151:2403/66-66-66-66-6666/assets/img/KGECVold.jpg" alt="" />
            </div>


        </section>
    );
}

export default Works;
import style from "./AboutProject.module.scss"

function AboutProject() {
    return (
        <section className={style.body}>
            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={0} className={style.contentTitle}><span>Damn!</span> Why is this project so cool and fucking great? We reveal all the secrets and <span>give advice to others</span></p>
                    <p className={style.contentDesc}>In this section, I will share my journey that I have gone through to realize this wonderful project that has just begun to develop! It won't talk about algorithms for computing or analyzing user behavior, I'll keep 90% of everything related to those parts a secret ON PURPOSE, because anyone can copy it, but only you can go this way yourself, I'll only give you a direction, saving you 50% of the time to think</p>

                    <p className={style.contentDesc}>First, let's make a list of key achievements in the project, and then gradually move on to their description!</p>
                </div>
            </div>


            <div tabIndex={1} className={style.listContent}>
                <p>Important development points:</p>
                <ul>
                    <li>Creating an <span>engine</span></li>
                    <li><span>Collaboration</span> of two scenes</li>
                    <li>Transferring a project to <span>another framework</span></li>
                    <li><span>Collaboration</span> with the server</li>
                    <li>Recommendations<span>...</span></li>
                </ul>
            </div>


            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={2} className={style.contentTitle}><span>Where did I start?</span> Why start with the creation of the engine, and not something else?</p>
                    <p className={style.contentDesc}>Actually, this is not my first 3D-related project, it's the first time I've tried working with THREE.js in early 2024 and only a year later decided to do something more serious on it than a first-person game where you can only run</p>

                    <p className={style.contentDesc}>I started making the engine after the first more serious 3D project, namely checkers This project is in the public domain! When writing this project, I made the most poor and simple engine, which implied the level of func {"calc(a,b)=>a+b"}.</p>

                    <p className={style.contentDesc}>A couple of months later, I was looking for inspiration for a portfolio site, after which I came across a 3D site similar to this one, but slightly worse in functionality, more meager. And then my eyes lit up! I remembered that I started making some kind of engine and I rushed like a hungry dog to meat on this engine and actively began to improve it! But then I ran into a problem, the solution to which will be shown below.</p>
                </div>
            </div>


            <div className={style.imgContent}>
                <img tabIndex={3} src="https://hubabuba.space/66-66-66-66-6666/assets/img/KGE1.png" alt="" />
            </div>


            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={4} className={style.contentTitle}><span>The work of two different scenes!</span> They overlap each other, so how do you work with them?</p>
                    <p className={style.contentDesc}>Initially, I started doing a project in Angular... If you're laughing at me now, then fuck you! But! Despite the fact that I worked with this shit, I managed to do 60% of what you see now! So it's not funny, I'm just persistent and because of that my engine works ON ALL FRAMEWORKS, now it's not so funny, right?</p>

                    <p className={style.contentDesc}>The main problem is that no one on the Internet fucking knew how to interject two different scenes together, I know that there is a working alternative for React, but my solution is no worse and I can develop it any way I want and use it anywhere! Then my brilliant brain came up with a solution... Let's use the game optimization system, where part of the objects outside the user's objective is cut out! It has the same mechanics, but with my conditions Now everything that is located exactly at the back of the HTML sheet is removed so that it is clearly visible, and what is in front or does not fit into the space under the clipping remains! Next, I will show a more detailed description of this feature with screenshots.</p>
                </div>
            </div>

            <div className={style.imgContent}>
                <img tabIndex={5} src="https://hubabuba.space/66-66-66-66-6666/assets/img/KGE2.png" alt="" />
            </div>

            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={6} className={style.contentTitle}><span>Why the fuck did I switch to another framework? </span>How did it affect the project and do I regret it?</p>
                    <p className={style.contentDesc}>I must say right away, I have never regretted my mistakes and I never will, yes, it may have hurt for the time I spent, yes, it may have been a shame, but! Mistakes make us stronger, and that's damn right!</p>

                    <p className={style.contentDesc}>If it hadn't been for the mistake in choosing the framework Angular, I wouldn't have started developing my engine, I wouldn't have started coming up with an implementation of how two scenes work together, I wouldn't have done a lot of things, but I did it, and it's cool!</p>


                    <p className={style.contentDesc}>As a result, I switched to React, where of course there is a solution to this problem, but others don't have my engine either So everything is more than cool! Funny fact, until May 6, 25, it was publicly available on NPM with documentation and API, but I even changed my mind, heh</p>
                </div>
            </div>

            <div className={style.imgContent}>
                <img tabIndex={7} src="https://hubabuba.space/66-66-66-66-6666/assets/img/KGE3.png" alt="" />
            </div>


            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={8} className={style.contentTitle}><span>And now the most interesting part! </span> How did I organize the collaboration with the server and <span>why at all?</span></p>
                    <p className={style.contentDesc}>Have you ever wondered why some people can invent something cool and others can't, even though everyone has the same chance? It's just that some people invent a second bike, while others make it electronic...</p>

                    <p className={style.contentDesc}>The idea of this project was not 100% mine, I was looking for INSPIRATION from others and found it, I found something that inspired me and did not do the same, but I did and improved! What does the server have to do with it? And now I will tell you the most important feature of my project, which scales it 1000x, relative to my mastermind!</p>


                    <p className={style.contentDesc}>I've been thinking for a long time what could make my website special, so that it doesn't just live in my hands as a portfolio, but works for the benefit of people? Now get ready, you know that the DarkStore is a real store, right? Haha, yes! I've implemented a store for games, apps, whatever! Any website, any framework, or even vanilla JS can be turned into an application in 5 fucking minutes, but that's not all! The server here participates in the role of receiving and downloading data and applications, the site has caching and data storage! Everything you've ever downloaded doesn't need to be downloaded EVERY TIME, just once is enough, and now you can use it whenever you want, even if it's removed from the store, is it crazy?</p>
                </div>
            </div>

            <div className={style.imgContent}>
                <img tabIndex={9} src="https://hubabuba.space/66-66-66-66-6666/assets/img/KGE4.png" alt="" />
            </div>

            <div className={style.content}>
                <div className={style.contentText}>
                    <p tabIndex={10} className={style.contentTitle}><span>What advice could I give you</span> if you're crazy and decide to repeat my project?</p>
                    <p className={style.contentDesc}>To begin with, let me know that it would be interesting for me to see this and support you, humanity is developing thanks to madmen like us!</p>

                    <p className={style.contentDesc}>Don't be afraid to make mistakes, mistakes are never a bad thing, either you get an experience that will propel you forward, or a mistake turns out to be luck!</p>

                    <p className={style.contentDesc}>No need to come up with some ingenious invention from scratch, spoiler alert, you won't succeed! Analyze the market, look for challenges, you should have a desire not to reinvent the wheel, but to improve it!</p>

                    <p className={style.contentDesc}>Respect the authors from whom you get your ideas! If you've done something and you've got a cool product, don't be greedy and at least say thank you to the author who helped you! At the time of writing this advice, I have not yet done the credits, but they will be, and I will definitely list all the people who supported me, who inspired me, and who I am grateful to! Be human</p>
                    <p className={style.contentDesc}>Never stop! This does not mean that you should work only at one pace, it means that even if you have a difficult period in your life because of which you have dropped out of life for a day, a week or even a month, get up! As long as you are doing something, you are moving towards your goal, even if you write a line of code, it is only a matter of time, you will 100% succeed if you invest even minimal effort! Good luck!</p>
                    <p className={style.contentDesc}>And finally, I would like to pay attention to the people who not only inspired me, but also supported me. Special thanks to IvanVikVik, Yura, J1JJJ3 and ePinki!</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
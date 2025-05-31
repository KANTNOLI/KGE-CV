import { Link, useSearchParams } from "react-router";
import style from "./Pagination.module.scss"
import { useEffect, useRef } from "react";

function Pagination() {
    const [searchParams] = useSearchParams();
    const portfolioPage: string | null = searchParams.get('portfolioPage')

    const viewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (viewRef.current) {
            const scrollPosition = viewRef.current.scrollHeight / 2;
            window.scrollTo({
                top: (scrollPosition - scrollPosition / 3),
                behavior: 'smooth'
            });
        }
    }, [portfolioPage]);

    return (
        <section ref={viewRef} className={portfolioPage ? style.PaginationActive : style.Pagination}>
            <div className={style.content}>
                {
                    portfolioPage ? <></> :
                        <>
                            <p className={style.PaginationHeadTitle}>KANTNOLI Presents</p>
                            <p className={style.PaginationTitle}>Fullstack developer</p>
                        </>
                }

                <div className={style.links}>
                    <Link to={"/?portfolioPage=Biography"} className={style.page}>Biography</Link>
                    <Link to={"/?portfolioPage=AboutTheProject"} className={style.page}>About the Project</Link>
                    <Link to={"/?portfolioPage=Works"} className={style.page}>Works</Link>
                    <Link to={"/?portfolioPage=Thoughts"} className={style.page}>Thoughts</Link>
                </div>
            </div>
        </section>
    );
}

export default Pagination;

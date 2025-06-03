import { Link, useSearchParams } from "react-router";
import style from "./Pagination.module.scss"
import { useEffect, useRef } from "react";

function Pagination() {
    const [searchParams] = useSearchParams();
    const content: string | null = searchParams.get('content')

    const viewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (viewRef.current && !content) {
            const scrollPosition = viewRef.current.scrollHeight / 2;
            window.scrollTo({
                top: (scrollPosition - scrollPosition / 3),
                behavior: 'smooth'
            });
        }
    }, [content]);

    return (
        <section ref={viewRef} className={content ? style.PaginationActive : style.Pagination}>
            <div className={style.content}>
                {
                    content ? <></> :
                        <>
                            <p className={style.PaginationHeadTitle}>KANTNOLI Presents</p>
                            <p className={style.PaginationTitle}>Fullstack developer</p>
                        </>
                }

                <div className={style.links}>
                    <Link to={"/?content=Biography"} className={style.page}>Biography</Link>
                    <Link to={"/?content=AboutTheProject"} className={style.page}>About the Project</Link>
                    <Link to={"/?content=Works"} className={style.page}>Works</Link>
                    <Link to={"/?content=Thoughts"} className={style.page}>Thoughts</Link>
                </div>
            </div>
        </section>
    );
}

export default Pagination;

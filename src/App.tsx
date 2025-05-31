import { Route, Routes, useSearchParams } from "react-router-dom"
import style from "./App.module.scss"

import Pagination from "./components/Pagination"

import Biography from "./components/Biography";
import Thoughts from "./components/Thoughts";
import AboutProject from "./components/AboutProject";
import Works from "./components/Works";


function App() {
  const [searchParams] = useSearchParams();
  const portfolioPage: string | null = searchParams.get('portfolioPage')

  const renderPage = (): React.ReactNode => {

    if (portfolioPage) {
      switch (portfolioPage) {
        case "Biography":
          return <Biography />
        case "Thoughts":
          return <Thoughts />
        case "AboutTheProjectt":
          return <AboutProject />
        case "Works":
          return <Works />
        default:
          return <div>ну и что ты тут забыл прогер хуев</div>
      }
    }

    return <p>test</p>
  }






  return (
    <Routes>
      <Route
        path="/"
        element={
          portfolioPage ?
            (<section className={style.body}>
              <Pagination></Pagination>
              {renderPage()}
            </section>) :
            (<Pagination></Pagination>)
        }
      />
    </Routes>
  )
}

export default App

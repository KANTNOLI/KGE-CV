import { Route, Routes, useSearchParams } from "react-router"
import style from "./App.module.scss"

import Pagination from "./components/Pagination"

import Biography from "./components/Biography";
import Thoughts from "./components/Thoughts";


function App() {
  const [searchParams] = useSearchParams();
  const portfolioPage: string | null = searchParams.get('portfolioPage')

  console.log(portfolioPage);

  const renderPage = (): React.ReactNode => {

    switch (portfolioPage) {
      case "Biography":
        return <Biography></Biography>
      case "Thoughts":
        return <Thoughts></Thoughts>
      default:
        return <>error</>
    }
  }


  return (
    <Routes>
      <Route
        path="/"
        element={
          portfolioPage ?
            <section className={style.body}>
              <Pagination></Pagination>
              {renderPage()}
            </section> :
            <Pagination></Pagination>

        }
      />
    </Routes>
  )
}

export default App

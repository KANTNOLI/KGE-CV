import { useEffect } from 'react'
//import style from "./App.module.scss"
import { useSearchParams } from 'react-router'
import Pagination from './components/Pagination';
import Biography from './components/Biography';
import AboutProject from './components/AboutProject';
import Works from './components/Works';
import Thoughts from './components/Thoughts';

//import style from "./App.module.scss"

function App() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('content'));
  }, [searchParams])

  const routing = () => {
    switch (searchParams.get('content')) {
      case "Biography":
        return (<>
          <Pagination></Pagination>
          <Biography></Biography>
        </>)
      case "AboutTheProject":
        return (<>
          <Pagination></Pagination>
          <AboutProject></AboutProject>
        </>)
      case "Works":
        return (<>
          <Pagination></Pagination>
          <Works></Works>
        </>)
      case "Thoughts":
        return (<>
          <Pagination></Pagination>
          <Thoughts></Thoughts></>
        )
      default:
        return <Pagination></Pagination>
    }
  }

  return (
    routing()
  )
}

export default App

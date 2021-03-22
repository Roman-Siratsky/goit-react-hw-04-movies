import './sass/main.scss';
import React, { Component , Suspense, lazy} from "react";
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import routes from './routes'

const Trending = lazy(() =>
  import('./components/Trending' /* webpackChunkName: "trending" */)
)
const MovieDetail = lazy(() =>
  import('./components/MovieDetail' /* webpackChunkName: "moviedetail" */)
)
const Movies = lazy(() =>
  import('./components/Movies' /* webpackChunkName: "movies" */)
)
const NonFoundPage = lazy(() =>
  import('./components/NonFoundPage'/* webpackChunkName: "notfound" */)
)

class App extends Component {

  render() {
    return (
      <div className='App-wrapper'>
      <Suspense fallback={<h1>Загружаем</h1>}>
        <Header/>
        <Switch>
        <Route exact path={routes.home} component={Trending}/>
        <Route path={routes.movieDetails} component={MovieDetail}/>
        <Route exact path={routes.movies}  component={Movies}/>
        <Route component={NonFoundPage}/>
        </Switch>
      </Suspense>
      </div>
    );
  }
}

export default App;

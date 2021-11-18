import {
  Switch,
  Route,
  // useParams,
} from 'react-router-dom';
import Header from './Header';
import styles from './Container.module.scss';
import PageInfo from './PageInfo';
import Banner from './ElementsInfo/Banner';
import Elements from './ElementsInfo/Elements';
import { Details } from './ElementDetails/Details';

function Container() {
  return (
    <div className={styles.container}>
      <Header />
      <PageInfo />
      <Banner />
      <Switch>
        <Route exact path="/">
          <Elements />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;

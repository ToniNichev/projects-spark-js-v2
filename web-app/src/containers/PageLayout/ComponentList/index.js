import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';

/* Components */
const Header = Loadable({
  loader: () => import ('../../../pageComponents/Header'),
  loading: Loading
});
const Home = Loadable({
  loader: () => import ('../../../components/Home'),
  loading: Loading
});
const About = Loadable({
  loader: () => import ('../../../pageComponents/About'),
  loading: Loading
});
const Setup = Loadable({
  loader: () => import ('../../../pageComponents/Setup'),
  loading: Loading
});
const Words = Loadable({
  loader: () => import ('../../../components/Words'),
  loading: Loading
});

export default {
  Home,
  About,
  Setup,
  Header,
  Words
}

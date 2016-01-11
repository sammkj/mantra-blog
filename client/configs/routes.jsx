import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import {injectDeps} from 'react-simple-di';

import MainLayout from '../components/layouts.main/index.jsx';
import PostList from '../containers/postlist';
import Post from '../containers/post';
import NewPost from '../containers/newpost';

export const initRoutes = (context, actions) => {
  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

  const {
    Router,
    Route
  } = ReactRouter;

  const createHistory = ReactRouter.history.createHistory;

  const routes = [
    {
      path: '/',
      component: MainLayoutCtx
    }
  ]

  const router = (
    <Router routes={routes} history={createHistory()} />
  );

  Meteor.startup(function () {
    ReactDOM.render(router, document.getElementById("root"));
  });
};

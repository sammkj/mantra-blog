import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { injectDeps } from 'react-simple-di';

import MainLayout from '../components/layouts.main/index.jsx';
import PostList from '../containers/postlist';
import Post from '../containers/post';
import NewPost from '../containers/newpost';

export const initRoutes = (context, actions) => {
  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

  const routes = [
    {
      path: '/',
      component: MainLayoutCtx
    }
  ]

  const router = (
    <Router routes={routes} history={browserHistory} />
  );

  Meteor.startup(function () {
    render(router, document.getElementById("root"));
  });
};

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Fullstory from './FullStory';
import Stories from './Stories';

function Routes({ articles }) {
  const [article, setArticle] = useState([]);
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Stories setArticle={setArticle} searchedArticles={articles} />
        </Route>
        <Route exact path='/fullstory'>
          <Fullstory article={article} />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;

import React from 'react';
import logo from './logo.svg';
import './css/style.css';
import CreatePost from './CreatePost/CreatePost';
import EditPost from './EditPost/EditPost';
import MapComponent from './MapComponent/MapComponent';
import PostsContainer from './PostsContainer/PostsContainer';
import ResultsContainer from './ResultsContainer/ResultsContainer'


const My404 = () => {
  return (
    <div>
      Cannot Find Page
    </div>
  )
}

const App = () => {
  return (
      <switch>
        <h1>BestBuds</h1>
        <div>
          <PostsContainer />
          <ResultsContainer />
        </div>

      </switch>
  );
}

export default App;

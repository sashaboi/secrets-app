import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import MakeComment from './pages/MakeComment/MakeComment';
import ViewComments from './pages/SeeTimeline/ViewComments';
import ShareLink from './pages/ShareLink/ShareLink';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/sharelink" element={<ShareLink />} />
        <Route path="/viewcomments" element={<ViewComments />} />
        <Route path="/comment/:id" element={<MakeComment />} />
      </Routes>
    </div>
  );
};

export default App;

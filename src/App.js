
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
// import './components/Buttons/PrimaryButtons.scss';
import IndexRoute from './routes';
import CommonHeader from './components/CommonHeader/CommonHeader';
import CommonFooter from './components/CommonFooter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getConfig } from './actions/catalogueAction';

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getConfig());
  },[]);
  return (
    <div className="App">
      <BrowserRouter>
        <CommonHeader />
        <IndexRoute />
        <CommonFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;

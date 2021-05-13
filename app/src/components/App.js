import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCat} from './../actions';

const App = (props) => {
  const { cat, isFetching, error, dispatch } = props;

  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  const handleClick = () => {
    dispatch(fetchCat());
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching cat for ya!</h2>;
  }

  return (
    <>
      <div className="container">
        <h1>My Cat Finder</h1>
        </div>
        <div className="app_content">
        <img src={cat.webpurl} width="800"/>
      </div>
      <button onClick={(e)=>{ handleClick() }}>Checkout New Cats</button>

    </>
  );
};

const mapStateToProps = state => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(App);
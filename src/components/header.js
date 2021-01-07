import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { toggleDarkMode } from '../store/actions/header.actions';

const handleClick = useCallback(() => {
  toggleDarkMode(!isDarkMode);
}, []);

const Header = ({ isDarkMode, siteTitle, toggleDarkMode }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <button onClick={handleClick}>Dark mode</button>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  isDarkMode: PropTypes.bool,
  siteTitle: PropTypes.string,
  toggleDarkMode: PropTypes.func,
};

Header.defaultProps = {
  siteTitle: '',
};

const mapStateToProps = (state) => ({
  isDarkMode: state.header.isDarkMode,
});

const mapDispatchToProps = {
  toggleDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

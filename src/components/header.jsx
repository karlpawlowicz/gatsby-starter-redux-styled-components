import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleDarkMode } from '../store/actions/header.actions';

const Header = ({ siteTitle }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.header.isDarkMode);

  const handleClick = useCallback(() => {
    dispatch(toggleDarkMode(!isDarkMode));
  }, [dispatch, isDarkMode]);

  return (
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
        <button onClick={handleClick} type="button">
          Dark mode
        </button>
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
};

// Header.propTypes = {
//   isDarkMode: PropTypes.bool.isRequired,
//   siteTitle: PropTypes.string,
//   toggleDarkModeAction: PropTypes.func.isRequired,
// };

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

// const mapStateToProps = (state) => ({
//   isDarkMode: state.header.isDarkMode,
// });

// const mapDispatchToProps = {
//   toggleDarkModeAction: toggleDarkMode,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;

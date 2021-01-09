import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleDarkMode } from '../../store/actions/header.actions';
import { Container, Wrapper } from './HeaderStyle';
import { HeadingOne } from '../../style/Headings';
import { Link } from '../../style/Links';

const Header = ({ siteTitle }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.header.isDarkMode);

  const handleClick = useCallback(() => {
    dispatch(toggleDarkMode(!isDarkMode));
  }, [dispatch, isDarkMode]);

  return (
    <Wrapper>
      <Container>
        <button onClick={handleClick} type="button">
          Dark mode
        </button>
        <HeadingOne>
          <Link to="/">{siteTitle}</Link>
        </HeadingOne>
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

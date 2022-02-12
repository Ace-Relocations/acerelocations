import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutRequest } from '../../actions';

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutRequest());
    history.push('/login');
  };

  return (
    <div class='sidebar'>
      <div class='brand-logo'>
        <a href='index.html'>
          <img src={logo} alt='logo' style={{width:'50px'}}/>
        </a>
      </div>
      <div class='menu'>
        <ul>
          <li>
            <Link
              to='/'
              data-toggle='tooltip'
              data-placement='right'
              title='Dashboard'
              onClick={() => console.log('Dashboard Clicked')}
            >
              <span>
                <i class='icofont-ui-home'></i>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/create-job'
              onClick={() => console.log('Create Job Clicked')}
              data-toggle='tooltip'
              data-placement='right'
              title='Create Job'
            >
              <span>
              <i class="icofont-truck-alt"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/jobs'
              onClick={() => console.log('View Jobs Clicked')}
              data-toggle='tooltip'
              data-placement='right'
              title='View Jobs'
            >
              <span>
              <i class="icofont-sub-listing"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/create-barcode'
              onClick={() => console.log('Barcode Clicked')}
              data-toggle='tooltip'
              data-placement='right'
              title='Create Barcode'
            >
              <span>
              <i class="icofont-barcode"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to='/barcode'
              onClick={() => console.log('View Barcode Clicked')}
              data-toggle='tooltip'
              data-placement='right'
              title='View Barcode'
            >
              <span>
              <i class="icofont-lens"></i>
              </span>
            </Link>
          </li>
          <li class='logout'>
            <a onClick={onLogoutClick} data-toggle='tooltip' data-placement='right' title='Signout'>
              <span>
                <i class='icofont-power'></i>
              </span>
            </a>
          </li>
        </ul>

        <p class='copyright'>
          &#169; <a href='/'>Ace@2022</a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

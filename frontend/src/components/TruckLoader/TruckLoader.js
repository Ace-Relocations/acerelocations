import React from 'react';

import './TruckLoader.css';

const TruckLoader = () => {
  return (
    <div class='loader'>
      <div class='garage'>
        <div class='hill'></div>
        <div class='truck'>
          <div class='box-truck'>
            <div class='tractor'>
              <div class='tractor-front'></div>
              <div class='tractor-bumper'></div>
              <div class='tractor-wheel'>
                <div class='hub-cap'>
                  <div class='hole hole1'></div>
                  <div class='hole hole2'></div>
                  <div class='hole hole3'></div>
                  <div class='hole hole4'></div>
                </div>
              </div>
              <div class='tractor-door'>
                <div class='window'></div>
                <div class='door-crease'></div>
                <div class='door-handle'></div>
                <div class='step-holder'>
                  <div class='door-gap'></div>
                  <div class='left-edge'></div>
                  <div class='right-edge'></div>
                  <div class='top-step'></div>
                  <div class='bottom-step'></div>
                </div>
              </div>
            </div>
            <div class='box'>
              <div class='box-body'></div>
              <div class='box-axel'></div>
              <div class='mud-flap'></div>
              <div class='box-wheel'>
                <div class='hub-cap'>
                  <div class='hole hole1'></div>
                  <div class='hole hole2'></div>
                  <div class='hole hole3'></div>
                  <div class='hole hole4'></div>
                </div>
              </div>
              <div class='back-guard'></div>
              <div class='back-step'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckLoader;

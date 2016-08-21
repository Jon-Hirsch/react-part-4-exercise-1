import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Shape from '../src/components/Shape';
import App from '../src/components/App';

describe('App', function () {
  let component;
  before(function () {
    component = shallow(<App/>);
  });

  it('should contain a blue square', function () {
    expect(component.contains(<Shape shape="square" color="blue" />)).to.equal(true);
  });

  it('should contain a red diamond', function () {
    expect(component.contains(<Shape shape="diamond" color="red" />)).to.equal(true);
  });

  it('should contain a green circle', function () {
    expect(component.contains(<Shape shape="circle" color="green" />)).to.equal(true);
  });
});

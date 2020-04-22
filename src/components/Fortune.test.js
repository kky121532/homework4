import React from 'react';
import {shallow, mount} from 'enzyme';
import Fortune from './Fortune';
import * as axios from 'axios';

// describe('Fortune', () => {
//   it ('axios mocking', () => {
//     const component = shallow(<Main/>);
//     expect(component.find('.Main').length).toBe(1);
//   });
// });

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

// ...

test("good response", () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: 'success' }));
  // ...
});

test("bad response", () => {
  axios.get.mockImplementation(() => Promise.reject('false'));
  // ...
});

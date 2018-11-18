import React, {Component} from 'react';
import API from '../services/dateAPI';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';

export default class DateYear extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false
    }
  }

	handleClickButton() {
		// handle button click event and state changes here
	}

	render() {
        // complete the necessary application logic here
		return (
  <div className='container-fluid'>
    <div>
      <center>
        <h2>Date/Year Server</h2>
      </center>
    </div>
    <div className='text-center page-title'>
      <DateYearClick onButtonClick={} />
    </div>
  </div>
);

	}
}



// =======

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import DateYear from './DateYear';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('DateYearComponent', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateYear />, div);
  });

  
});
// ======

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DateYearClick extends Component {

  constructor() {
    super();
  }
    // handle triggering of button click in the sections below
	onButtonClick(e) {
	}

	render() {
		return (
  <div className='col-xs-12  col-sm-12 col-md-12 col-lg-12'>
    <button className='fullwidth button btn-primary center-block'>
      Display Date and Year
    </button>
  </div>
);
	}
}

// Uncomment the snippet below
// DateYearClick.propTypes = {
// 	onClickButton: PropTypes.func
// }

// ======== 
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import DateYear from './DateYear';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';
import dateAPI from '../services/dateAPI';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

configure({ adapter: new Adapter() });

describe('DateYearClickComponent', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateYearClick />, div);
  });

  it('check click event', (done) => {
    const mockAdapter = new MockAdapter(axios);
    const mainWrapper = mount(<DateYear />);
    const clickWrapper =  mainWrapper.find(DateYearClick).get(0);
    mockAdapter.onGet('https://jsonmock.hackerrank.com/datetime').reply(200, {
      "time": "06:08:35 PM",
      "date": "11-24-2016"

    });
    clickWrapper.props.onClickButton();
    const msgWrapper =  mount(<DateYearMessage date={"11-24-2016"} year={2016}/>);;
    dateAPI.getAPIResponse().then(res => {
      expect(res).toBe('11-24-2016');

    }, res => {}).then(done, done);
  });

});
// ======

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DateYearMessage extends Component {
	render() {
        // use props from parent to diplay the current date and current year.

		return (
  <div className='info center-block'>
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 date'>
      <strong>
        <h3>The current date is</h3>
      </strong>
    </div>
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 year'>
      <strong>
        <h3>The current year is</h3>
      </strong>
    </div>
  </div>
);

	}
}

// Uncomment the below snippet
// DateYearMessage.propTypes = {
// 	date: PropTypes.string,
// 	year: PropTypes.number
// }

// ======

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import DateYear from './DateYear';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';
import dateAPI from '../services/dateAPI';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('DateYearMessageComponent', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateYearMessage />, div);
  });

  it('check if the date and year are rendered correctly', () => {
    const msgWrapper = mount(<DateYearMessage date={'01-01-1992'} year={1992}/>);
    const date = msgWrapper.find('.date h3').get(0);
    const year = msgWrapper.find('.year h3').get(0);
    expect(date.props.children).toEqual([ 'The current date is ', '01-01-1992' ]);
    expect(year.props.children).toEqual([ 'The current year is ', 1992 ]);
  });
});



import React from 'react';
import ReactDOM from 'react-dom';
import DateYear from './components/DateYear';
import {HashRouter, Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(<HashRouter>
	<Route path="/" component={DateYear}/>
</HashRouter>, document.getElementById('root'));

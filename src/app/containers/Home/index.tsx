import * as React from 'react';
import {Tasks} from '../../components';
const s = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.home}>
        <Tasks/>
      </div>
    );
  }
}
export { Home }

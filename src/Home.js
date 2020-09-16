import React, {Component} from 'react';
import './index.css';

class Home extends Component {
    render() {
      return (
        <div className="homepagecontent">
            <div className="spinner">
<iframe title="spinning choice wheel" src={`https://wheeldecide.com/e.php?${this.props.wheelMeals}col=winter&t=Freeman+Family+Dinners&time=5`} width="500" height="600" scrolling="no" frameBorder="0"></iframe>
</div>
</div> 
    )
}
}

export default Home;
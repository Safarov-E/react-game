import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : 'Navigation',
            subtitle: 'Main menu',
            show: 'show'
        }
    }
    showNav = () => {
        this.setState({show: 'hide'});
    }
    render() {
        return (
            <nav>
                <button type="button" onClick={this.showNav}>Show menu</button>
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <p>{this.state.show}</p>
            </nav>
        );
    }
}

export default Footer;

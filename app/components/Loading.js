import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    content: {
        fontSize: '35px',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '20px',
        textAlign: 'center'
    }
};

export default class Loading extends Component {

    state = { content: this.props.text };

    componentDidMount() {
        const { speed, text } = this.props;

        window.interval = window.setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({ content: text })
                : this.setState((prevState) => ({ content: prevState.content + '.' }))
        }, speed)
    }

    componentWillUnmount() {
        window.clearInterval(window.interval);
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.content}
            </p>
        )
    }    
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}
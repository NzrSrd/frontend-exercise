import React from 'react';

function Loading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return (<Component {...props} />);
        return (<p>Be Hold, fetching data may take some time :)</p>);
    }
}

export default Loading;
import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const[storageChange, setStorageChange] = React.useState(flase);

        return (
        <WrappedComponent 
        show={storageChange}
        toggleShow={setStorageChange}
        />);
    }
}

export { withStorageListener };
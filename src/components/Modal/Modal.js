import React from 'react';

export const Modal = (props) => {

    if (!props.showModal) return null;

    return (
        <>
            {props.showModal && <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vw',
                    height: '100vh',
                    background: 'black',
                    opacity: 0.35,
                    zIndex: 20,

                }}
                onClick={()=>props.editShowModal(false)}
            />}
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    width: 0,
                    height: 0,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'lime',
                    zIndex: 21,
                }}
            >
                {props.children}
            </div>
        </>
    );
};


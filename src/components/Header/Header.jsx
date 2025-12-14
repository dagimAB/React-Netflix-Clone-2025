import React, { useState, useEffect } from 'react';

function Header() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 w-full h-16 p-5 z-50 transition-all duration-500 ease-in ${show ? "bg-black" : "bg-transparent"}`}>
            <div className="flex justify-between items-center h-full px-5">
                <img
                    className="fixed left-5 w-24 object-contain cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix Logo"
                />
                <img
                    className="fixed right-5 w-8 object-contain cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix Avatar"
                />
            </div>
        </div>
    );
}

export default Header;

import React, { useEffect } from "react";

const Scroller = () => {
  useEffect(() => {
    const links = document.querySelectorAll("nav a");

    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  };

  return null;
};

export default Scroller;

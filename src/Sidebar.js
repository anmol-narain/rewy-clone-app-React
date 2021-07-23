import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";
const Sidebar = () => {
  const { isSidenavbarOpen, closeSidenavbar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidenavbarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidenavbar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {/* mapping over the data for the 1st time and grabbing the sublinks */}
          {sublinks.map((items, index) => {
            const { links, page } = items;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {/* mapping over the data for the 2nd time and grabbing the links */}
                  {links.map((link, index) => {
                    const { url, label } = link;
                    return (
                      <a key={index} href={url}>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

import React from "react";
import PropTypes from "prop-types";

export default function P2Tab(props) {
  const { tabList, tabType } = props;
  return (
    <>
      {tabType === "buttonTab" ? (
        <ul className="nav nav-pills">
          {tabList.map((menu) => (
            <li className="nav-item pe-3">
              <a
                className={`${
                  menu.active
                    ? "nav-link active"
                    : "nav-link bg-dark-teal text-white"
                } `}
                href={menu.href}
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <>
          {tabType === "textTab" ? (
            <ul className="nav nav-underline">
              {tabList.map((menu) => (
                <li className="nav-item w-25">
                  <a
                    className={`${
                      menu.active
                        ? "nav-link active border-bottom-1 border-primary "
                        : "nav-link"
                    } `}
                    href={menu.href}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="nav nav-tabs">
              {tabList.map((menu) => (
                <li className="nav-item w-50">
                  <a
                    className={`${
                      menu.active
                        ? "nav-link active bg-lighter-teal border border-primary border-2 border-bottom-0"
                        : "nav-link border border-primary border-bottom-0"
                    } `}
                    href={menu.href}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}

P2Tab.propTypes = {
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
  tabType: PropTypes.string.isRequired,
};

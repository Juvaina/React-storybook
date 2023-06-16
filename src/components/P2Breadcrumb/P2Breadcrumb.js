import { React, useState } from "react";
import PropTypes from "prop-types";

export default function P2Breadcrumb(props) {
  const { menuList } = props;
  return (
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
      <ol className="breadcrumb">
        {menuList.length == 1 ? (
          <li className="breadcrumb-item">
            <a class="text-decoration-none" href={menuList[0].href}>
              <i className="bi bi-chevron-left"></i>
              {menuList[0].label}
            </a>
          </li>
        ) : (
          <>
            {menuList.length < 5 ? (
              <>
                {menuList.map((menu) => (
                  <>
                    {menu.active ? (
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {menu.label}
                      </li>
                    ) : (
                      <li className="breadcrumb-item">
                        <a class="text-decoration-none" href={menu.href}>
                          {menu.label}
                        </a>
                      </li>
                    )}
                  </>
                ))}
              </>
            ) : (
              CollapseBreadcrumb(menuList)
            )}
          </>
        )}
      </ol>
    </nav>
  );
}

const CollapseBreadcrumb = (menu) => {
  const [isCollapse, setCollapse] = useState(true);

  const expandItem = () => {
    if (isCollapse == true) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
  };
  let length = menu.length;

  return (
    <>
      {isCollapse ? (
        <>
          <li className="breadcrumb-item">
            <a class="text-decoration-none" href={menu[0].href}>
              {menu[0].label}
            </a>
          </li>
          <li className="breadcrumb-item" type="button" onClick={expandItem}>
            ...
          </li>
          <li className="breadcrumb-item">
            <a class="text-decoration-none" href={menu[length - 2].href}>
              {menu[length - 2].label}
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {menu[length - 1].label}
          </li>
        </>
      ) : (
        <>
          {menu.map((menu) => (
            <>
              {menu.active ? (
                <li className="breadcrumb-item active" aria-current="page">
                  {menu.label}
                </li>
              ) : (
                <li className="breadcrumb-item">
                  <a class="text-decoration-none" href={menu.href}>
                    {menu.label}
                  </a>
                </li>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
};

P2Breadcrumb.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
};

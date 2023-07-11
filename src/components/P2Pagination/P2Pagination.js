import React from "react";

export default function P2Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination align-items-center">
        <li className="pagination_indicator bg-neutral">
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">
              <i className="bi bi-chevron-left text-white"></i>
            </span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="pagination_indicator bg-neutral">
          <a href="#" aria-label="Next">
            <i className="bi bi-chevron-right text-white"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

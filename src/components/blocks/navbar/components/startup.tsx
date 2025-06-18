// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "components/reuseable/links/ListItemLink";
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { startupLink, pages } from "data/navigation";

export default function Startup() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink
        title="Startup"
        className="nav-link dropdown-toggle"
      />

      <ul className="dropdown-menu">
        {startupLink.map(({ id, title, children }) => {
          return (
            <li className="dropdown dropdown-submenu dropend" key={id}>
              {/* <DropdownToggleLink title={title} className="dropdown-item" /> */}
              {renderLinks(children)}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

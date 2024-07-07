import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/transition">Transitions</Link>
          </li>
          <li>
            <Link to="/suspense">Suspense</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

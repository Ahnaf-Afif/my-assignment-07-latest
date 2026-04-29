"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div
        className="navbar bg-base-100 shadow-sm px-3 md:px-10
      "
      >
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            KeenKeeper
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <div className="hidden md:flex ">
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? "bg-blue-500" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Timeline"
                  className={pathname === "/Timeline" ? "bg-blue-500 " : ""}
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/Stats"
                  className={pathname === "/Stats" ? "bg-blue-500 " : ""}
                >
                  Stats
                </Link>
              </li>
            </div>
            <li>
              <details className="block md:hidden">
                <summary>Pages</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <a>Timeline</a>
                  </li>
                  <li>
                    <a>Stats</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

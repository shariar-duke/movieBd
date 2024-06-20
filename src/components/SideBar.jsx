import Trending from "../assets/icons/trending.svg";
import NewRelease from "../assets/icons/newRelease.svg";
import CommingSoon from "../assets/icons/commingSoon.svg";
import Favourite from "../assets/icons/favourite.svg";
import WatchLater from "../assets/icons/watchLater.svg";

export default function SideBar() {
  return (
    <aside >
      <ul className="space-y-2">
        <a
          href="#"
          className="flex items-center  py-2 px-5 rounded-lg cursor-pointer bg-primary"
        >
          <li className="flex items-center space-x-2">
            <img src={Trending} alt="trending" width="28" height="28" />
            <span>Trending</span>
          </li>
        </a>
        <a
          href="#"
          className="flex items-center  py-2 px-5 rounded-lg cursor-pointer"
        >
          <li className="flex items-center space-x-2">
            <img src={NewRelease} alt="newRelease" width="24" height="24" />
            <span>New Release</span>
          </li>
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-5 rounded-lg cursor-pointer"
        >
          <li className="flex items-center space-x-2">
            <img src={CommingSoon} alt="newRelease" width="24" height="24" />
            <span>Comming Soon</span>
          </li>
        </a>

        <a
          href="#"
          className="flex items-center py-2 px-5 rounded-lg cursor-pointer"
        >
          <li className="flex items-center space-x-2">
            <img src={Favourite} alt="newRelease" width="24" height="24" />
            <span>Favourite</span>
          </li>
        </a>

        <a
          href="#"
          className="flex items-center  py-2 px-5 rounded-lg cursor-pointer"
        >
          <li className="flex items-center space-x-2">
            <img src={WatchLater} alt="newRelease" width="24" height="24" />
            <span>WatchLater</span>
          </li>
        </a>
      </ul>
    </aside>
  );
}

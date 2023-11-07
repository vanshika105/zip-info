import { TbMapPinSearch } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 font-medium">
      <span className="p-2 text-4xl">
        <TbMapPinSearch />
      </span>
      <div className="text-4xl text-darker-green">We just need your zip</div>
      <div className="text-md text-emerald-950">
        Enter your zip code below to get the location information
      </div>
    </div>
  );
};

export default Header;

import MenuList from "./menu-list";


export default function NavBar({ menus = [] }) {
  return (
    <div className="text-center ">
      <MenuList list={menus} />
    </div>
  );
}

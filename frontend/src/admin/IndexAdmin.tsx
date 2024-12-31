import HeaderAdmin from "./Component/HeaderAdmin";
import SidebarAdmin from "./Component/SideBarAdmin";
import IndexFunctions from "./functions/Indexfunctions";

export default function IndexAdmin() {
  return (
    <div className="flex h-full">
      <SidebarAdmin />
      <div className="flex flex-col flex-1">
          <HeaderAdmin />
          <IndexFunctions />
      </div>
    </div>
  );
}

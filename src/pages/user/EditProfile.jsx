import Sidebar, { SidebarItem } from "../layout/Sidebar";
import { administrator } from "../../utilies/routes";
import CustomerForm from "../reserve/CustomerForm"
import UserForm from "../user/UserForm"

export default function EditProfile() {

  return (
    <div className="row">
      <Sidebar>
        {administrator.map((link) => {
          return (
            <SidebarItem
              key={link.name}
              name={link.name}
              href={link.href}
              icon={<link.icon width={30} />}
            />
          );
        })}
      </Sidebar>
      <main className="col-11">
        <div className="row p-5">
          {
            user.id_role == 1 ? <UserForm/> :  <CustomerForm/>
          }
        </div>
      </main>
    </div>
  );
}

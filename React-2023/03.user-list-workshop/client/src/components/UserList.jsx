import Search from "./Search";
import UserListTable from "./UserListTable";

export default function UserList(props) {
    return (
        <section className="card users-container">
            <Search />
            <UserListTable />
        </section>
    )
}
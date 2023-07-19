import { HomeLayout } from "../layouts/HomeLayout";
import Auth from "../utils/Auth"
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
	if (Auth.authenticated()) {
		return (
		<HomeLayout>
			<Outlet />
		</HomeLayout>
		);
	}

	return <Navigate to="/" />;
}                          

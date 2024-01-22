import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
	return (
		<div className=" bg-slate-100">
			<Header />
			<Navbar />
			<section className=" align-element py-20">
				<Outlet />
			</section>
		</div>
	);
};

export default HomeLayout;

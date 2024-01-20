import { NavLink } from "react-router-dom";

const links = [
	{ id: 1, url: "/", text: "home" },
	{ id: 2, url: "about", text: "about" },
	{ id: 2, url: "products", text: "products" },
	{ id: 2, url: "cart", text: "cart" },
	{ id: 2, url: "checkout", text: "checkout" },
	{ id: 2, url: "orders", text: "orders" },
];

const NavLinks = () => {
	return (
		<>
			{links.map((link) => {
				const { id, url, text } = link;
				return (
					<>
						<li key={id} className=" px-3 py-1 m-2 rounded-md">
							<NavLink
								className=" uppercase text-sm text-black font-extrabold"
								to={url}
							>
								{text}
							</NavLink>
						</li>
					</>
				);
			})}
		</>
	);
};

export default NavLinks;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { AnimatePresence, motion } from "framer-motion";
import Background from "../../components/background/background";
import Navigation from "../../components/navigation/navigation";
import styles from "./app.module.css";
import Logo from "../../assets/logo.svg";
import { Suspense, lazy, useEffect, useState } from "react";
import ArVisuals from "../ar-visuals/ar-visuals";

const Home = lazy(() => import("../home/home"));
const About = lazy(() => import("../about/about"));

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Background />
				<div className={styles.container}>
					<Navigation />
					<Outlet />
				</div>
			</>
		),
		children: [
			{
				path: "/",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Home />
					</Suspense>
				),
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<About />
					</Suspense>
				),
			},
			{
				path: "*",
				element: <div>404</div>,
			},
		],
	},
	{
		path: "/ar",
		element: <ArVisuals />,
	},
]);

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const targetElement = document.querySelector("body");
		disableBodyScroll(targetElement);
		const timer = setTimeout(() => {
			setLoading(false);
			enableBodyScroll(targetElement);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<AnimatePresence>
				{loading && (
					<motion.div
						className={styles.loading}
						initial={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
					>
						<img src={Logo} alt="logo" />
					</motion.div>
				)}
			</AnimatePresence>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

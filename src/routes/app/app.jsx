import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { AnimatePresence, motion } from "framer-motion";
import Background from "../../components/background/background";
import Navigation from "../../components/navigation/navigation";
import styles from "./app.module.css";
import Logo from "../../assets/logo.svg";
import {
	Suspense,
	createContext,
	lazy,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

const Home = lazy(() => import("../home/home"));
const About = lazy(() => import("../about/about"));
const ArVisuals = lazy(() => import("../ar-visuals/ar-visuals"));

const LoadingContext = createContext();

function Fallback() {
	const { setLoading } = useContext(LoadingContext);
	useEffect(() => {
		setLoading(true);
		return () => setLoading(false);
	}, [setLoading]);
	return null;
}

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
					<Suspense fallback={<Fallback />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<Fallback />}>
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
		element: (
			<Suspense fallback={<Fallback />}>
				<ArVisuals />
			</Suspense>
		),
	},
]);

function App() {
	const [loading, setLoading] = useState(true);
	const timeout = useRef(null);

	useEffect(() => {
		const targetElement = document.querySelector("body");
		if (loading) disableBodyScroll(targetElement);
		else enableBodyScroll(targetElement);
	}, [loading]);

	const setLoadingFunc = useCallback(
		(value) => {
			if (!value && loading) {
				timeout.current = setTimeout(() => {
					timeout.current = null;
					setLoading(value);
				}, 1000);
			} else if (value && timeout.current) {
				clearTimeout(timeout.current);
				timeout.current = null;
				setLoading(value);
			}
		},
		[loading, setLoading]
	);

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
			<LoadingContext.Provider value={{ loading, setLoading: setLoadingFunc }}>
				<RouterProvider router={router} />
			</LoadingContext.Provider>
		</>
	);
}

export default App;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styles from "./app.module.css";
import {
	Suspense,
	lazy,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { LoadingContext } from "../../context";

const Navigation = lazy(() => import("../../components/navigation/navigation"));
const Background = lazy(() => import("../../components/background/background"));
const Home = lazy(() => import("../home/home"));
const About = lazy(() => import("../about/about"));
const ArVisuals = lazy(() => import("../ar-visuals/ar-visuals"));

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
				<Suspense fallback={null}>
					<Background />
				</Suspense>
				<div className={styles.container}>
					<Suspense fallback={null}>
						<Navigation />
					</Suspense>
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
			{loading && (
				<div className={styles.loading}>
					<img src="/logo.svg" alt="logo" />
				</div>
			)}
			<LoadingContext.Provider value={{ loading, setLoading: setLoadingFunc }}>
				<RouterProvider router={router} />
			</LoadingContext.Provider>
		</>
	);
}

export default App;

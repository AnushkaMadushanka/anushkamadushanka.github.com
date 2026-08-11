import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./routes/Home.jsx";
import NotFound from "./routes/NotFound.jsx";
import styles from "./App.module.css";

/* Home is the page nearly everyone lands on, so it ships in the entry bundle.
   The secondary routes are split out. */
const About = lazy(() => import("./routes/About.jsx"));
const WorkDetail = lazy(() => import("./routes/WorkDetail.jsx"));

function Layout() {
	return (
		<>
			<a href="#main" className={styles.skipLink}>
				Skip to content
			</a>
			<Header />
			<main id="main" tabIndex={-1} className={styles.main}>
				<Outlet />
			</main>
			<Footer />
			<ScrollRestoration />
		</>
	);
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/about",
				element: (
					<Suspense fallback={<div className={styles.routeFallback} aria-busy="true" />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/work/:slug",
				element: (
					<Suspense fallback={<div className={styles.routeFallback} aria-busy="true" />}>
						<WorkDetail />
					</Suspense>
				),
			},
			{ path: "*", element: <NotFound /> },
		],
	},
]);

export default function App() {
	/* Every animation on the site is CSS, so `prefers-reduced-motion` is
	   honoured in the stylesheet rather than by a JS provider. */
	return <RouterProvider router={router} />;
}

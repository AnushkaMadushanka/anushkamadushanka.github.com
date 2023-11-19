import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Background from "../../components/background/background";
import Navigation from "../../components/navigation/navigation";
import styles from "./app.module.css";
import Home from "../home/home";
import About from "../about/about";

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
				element: <Home />,
			},
            {
                path: "/about",
                element: <About />,
            }
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

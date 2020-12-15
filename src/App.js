import React from "react";
import GlobalStyle from "./globalStyles";
import { Footer, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScroolToTop";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" component={Services} />
				<Route path="/products" component={Products} />
				<Route path="/sign-up" component={SignUp} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

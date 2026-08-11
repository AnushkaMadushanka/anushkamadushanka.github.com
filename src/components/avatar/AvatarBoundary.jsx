import { Component } from "react";

/**
 * Catches a failure inside the WebGL avatar (a missing model, a decode error,
 * a driver problem) so it can never take the hero down with it.
 *
 * On failure it renders nothing and calls `onError`, which lets the hero stop
 * waiting and reveal the static portrait on its own.
 */
export default class AvatarBoundary extends Component {
	state = { failed: false };

	static getDerivedStateFromError() {
		return { failed: true };
	}

	componentDidCatch(error) {
		if (import.meta.env.DEV) console.error("Avatar3D failed:", error);
		this.props.onError?.();
	}

	render() {
		return this.state.failed ? null : this.props.children;
	}
}

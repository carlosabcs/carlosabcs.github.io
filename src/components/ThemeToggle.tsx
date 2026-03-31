import { useEffect, useState } from "react";
import { ThemeType } from "../constants";

export default function ThemeToggle() {
	const [theme, setTheme] = useState<ThemeType>(ThemeType.Light);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const isDark = document.documentElement.classList.contains(ThemeType.Dark);
		setTheme(isDark ? ThemeType.Dark : ThemeType.Light);
	}, []);

	const toggleTheme = () => {
		const newTheme =
			theme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light;
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);

		if (newTheme === ThemeType.Dark) {
			document.documentElement.classList.add(ThemeType.Dark);
			return;
		}
		document.documentElement.classList.remove(ThemeType.Dark);
	};

	if (!mounted) {
		return <div className="w-5 h-5" />;
	}

	return (
		<button
			onClick={toggleTheme}
			aria-label="Toggle theme"
			className="text-outline hover:text-primary transition-colors cursor-pointer flex items-center justify-center w-5 h-5"
		>
			<span className="material-symbols-outlined text-[1.25rem]">
				{theme === ThemeType.Dark ? "light_mode" : "dark_mode"}
			</span>
		</button>
	);
}

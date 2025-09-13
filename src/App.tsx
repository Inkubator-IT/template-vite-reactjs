import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-full grid place-items-center">
			<div className="text-center">
				{/* Logos */}
				<div className="flex items-center justify-center gap-12 my-10">
					<a
						href="https://vite.dev"
						target="_blank"
						className="transition-transform hover:scale-110"
						rel="noreferrer"
					>
						<img
							src={viteLogo}
							className="logo size-24 drop-shadow-vite"
							alt="Vite logo"
						/>
					</a>
					<a
						href="https://react.dev"
						target="_blank"
						className="transition-transform hover:scale-110"
						rel="noreferrer"
					>
						<img
							src={reactLogo}
							className="logo react size-24 drop-shadow-react"
							alt="React logo"
						/>
					</a>
				</div>

				{/* Title */}
				<h1 className="text-4xl font-bold">Vite + React</h1>

				{/* Card */}
				<div className="mt-8 inline-flex flex-col items-center gap-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6">
					<button
						className="rounded-xl border border-black/10 dark:border-white/10 px-5 py-2 text-base font-medium shadow-sm transition
                       hover:shadow-md active:scale-95
                       bg-white/90 dark:bg-white/10 backdrop-blur"
						onClick={() => setCount((c) => c + 1)}
					>
						count is <span className="font-semibold">{count}</span>
					</button>

					<p className="text-sm text-gray-600 dark:text-gray-300">
						Edit <code className="font-mono">src/App.tsx</code> and save to test
						HMR
					</p>
				</div>

				{/* Footer note */}
				<p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</div>
	);
}

export default App;

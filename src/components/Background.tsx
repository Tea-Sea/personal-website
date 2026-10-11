import { useEffect, useRef } from "react";

function DotMatrix() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const context = canvas.getContext("2d");

		let width = 0;
		let height = 0;
		let animationId = 0;

		const spacing = 33;
		const radius = 250;
		const dotGrowth = 1.5;
		const mousePos = { x: 0, y: 0 };

		function onMouseMove(e: MouseEvent) {
			mousePos.x = e.clientX;
			mousePos.y = e.clientY;
		}

		function resize() {
			if (!canvas || !context) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);

			width = window.innerWidth;
			height = window.innerHeight

			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;

			context.setTransform(dpr, 0, 0, dpr, 0, 0);
		}

		function drawDots() {
			if (!context) return;
			context.clearRect(0, 0, width, height);

			for (let x = spacing / 2; x < width; x += spacing) {
				for (let y = 0; y < height; y += spacing) {
					const dx = x - mousePos.x;
					const dy = y - mousePos.y;
					const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))

					const intensity = Math.max(0, 1 - distance / radius)
					const glow = intensity * intensity;

					const r = Math.round(65 + (77 * glow));
					const g = Math.round(65 + (16 * glow));
					const b = Math.round(75 + (180 * glow));
					const a = 0.50;

					context.fillStyle = `rgba(${r},${g},${b},${a})`;
					if ((x === 45) && (y === 90)) {
						console.log(glow);
						console.log({r, g, b});
					}

					context.beginPath();
					context.arc(x, y, 1 + glow * dotGrowth, 0, Math.PI * 2);

					context.fill();
				}
			}
		}

		function drawLines() {
			if (!context) return;

			context.strokeStyle = "rgba(65,65,75,0.5)";
			context.lineWidth = 0.2

			for (let x = spacing * 4; x < width; x += spacing * 4) {
				context.beginPath();
				context.moveTo(x, 0);
				context.lineTo(x, height);
				context.stroke();
			}

			for (let y = spacing * 4.5; y < height; y += spacing * 4) {
				context.beginPath();
				context.moveTo(0, y);
				context.lineTo(width, y);
				context.stroke();
			}
		}

		function draw() {
			drawDots();
			drawLines();
			animationId = requestAnimationFrame(draw);
		}
		resize();
		draw();

		window.addEventListener("resize", resize);
		window.addEventListener("mousemove", onMouseMove);

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", onMouseMove);
			cancelAnimationFrame(animationId);
    	};
	}, []);

  	return (
    	<canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none top-0 fixed z-0"></canvas>
  	);
}
export default DotMatrix;
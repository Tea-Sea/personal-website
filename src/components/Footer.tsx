function Footer() {
  	return (
      	<footer className="relative max-w-85/100 w-full mx-auto px-8 border-t-2 border-secondary py-8 font-mono text-[12px] flex justify-between items-center gap-4 flex-wrap">
			<div className="grid grid-cols-2 font-mono w-full">
				<div className="flex justify-self-start items-center text-mono">
					<div className="text-primary">&copy; 2026 Tom Caspar</div>
					<div className="font-bold px-5 text-secondary">&middot;</div>
					<div className="text-secondary"> All rights reserved</div>
				</div>
				<div className="flex justify-end">
					<a href="https://github.com/Tea-Sea" target="_blank" className="justify-self-end transition-all mx-5 duration-300 text-primary hover:text-accent">
						<svg className="w-8 h-8" aria-hidden="true" data-testid="github-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
						</svg>
						<span className="sr-only">GitHub Icon</span>
					</a>
					<a href="https://www.linkedin.com/in/tom-caspar/" target="_blank" className="justify-self-end transition-all duration-300 text-primary hover:text-accent">
						<svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/>
						</svg>
					</a>
				</div>
			</div>
      	</footer>
  	);
};

export default Footer;
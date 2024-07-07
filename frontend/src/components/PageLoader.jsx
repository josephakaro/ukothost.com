import React from 'react';

function PageLoader() {
	return (
		<div className="flex flex-col gap-1 items-center justify-center w-screen h-screen bg-slate-200">
			<span className="loading loading-ball loading-lg"></span>
			<h1 className="text-lg font-semibold">Loading..</h1>
		</div>
	);
}

export default PageLoader;

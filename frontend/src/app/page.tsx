import Link from "next/link";
import React from "react";

const Page = () => {
	const algosTypes = ["search", "sort"];
	return (
		<ul className="flex w-full h-96 items-center justify-center">
			{algosTypes.map((algo, key) => (
				<li
					key={key}
					className="w-40 h-40 border-[0.5px] border-gray-500 flex items-center justify-center m-10 hover:bg-black hover:text-white"
				>
					<Link href={`/${algo}`} className="w-full h-full flex justify-center items-center">
						<p>{algo}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Page;

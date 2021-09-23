import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Your Button Content
	 */
	children: ReactNode;
	/**
	 * Different Button themes and variants you can choose off.
	 * Possible Variants: `primary`, `secondary`, `danger`, `agree`, `border`, `transparent`
	 */
	variants?:
		| 'primary'
		| 'secondary'
		| 'danger'
		| 'agree'
		| 'border'
		| 'transparent';
}

export function Button({
	children,
	variants = 'primary',
	...props
}: ButtonProps) {
	return (
		<button
			type="button"
			className="px-4 py-2 text-white rounded-md focus:outline-none transition-colors duration-150 hover:bg-opacity-60 flex items-center justify-center text-base font-medium bg-blue-500"
			{...props}
		>
			{children}
		</button>
	);
}

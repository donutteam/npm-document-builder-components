//
// Imports
//

import { Child, DE, TextareaElementAttributes } from "@donutteam/document-builder";

//
// Exports
//

export function TextArea(attributes : TextareaElementAttributes, children? : Child) : DE
{
	return new DE("textarea",
		{
			class: "component-text-area",

			...attributes,
		},
		children);
}
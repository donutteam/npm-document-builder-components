//
// Imports
//

import { DE, InputElementAttributes } from "@donutteam/document-builder";

//
// Exports
//

export function FormColorInput(attributes : InputElementAttributes) : DE
{
	return new DE("input",
		{
			class: "component-form-color-input",
			type: "color",

			...attributes,
		});
}
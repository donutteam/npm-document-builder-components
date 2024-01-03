//
// Imports
//

import { Child, DE } from "@donutteam/document-builder";

//
// Exports
//

export function FormLabel(forName : string | null, child : Child) : DE
{
	return new DE("label",
		{
			class: "component-form-label",
			for: forName,
		},
		[
			child,
		]);
}
/**
 *
 * @constructor
 * @param ms
 */
export function Debounce(ms: number = 500)
{

	return function(target, name, desc : PropertyDescriptor)
	{
		const origValue = desc.value;
		const timeoutId = null;

		desc.value = function(...args) {
			if(timeoutId !== null) {
				clearTimeout(timeoutId);
			}

			target[timeoutId] = setTimeout(
				() => {
					origValue.apply(this, args);
				},
				ms
			);
		};

		return desc;
	}
}

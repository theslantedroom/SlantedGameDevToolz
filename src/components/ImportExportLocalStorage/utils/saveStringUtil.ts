import { deflate, inflate } from "pako";

// Compress the JSON string with pako
export function compressObjectWithPako(jsonObject: Record<string, unknown>) {
	// Minify JSON string
	const jsonString = JSON.stringify(jsonObject);

	// Compress with higher compression level
	const compressed = deflate(jsonString, { level: 9 });

	// Encode using base64
	const res = uint8ArrayToBase64(compressed);
	return res;
}

// Helper function to convert Uint8Array to Base64 safely
function uint8ArrayToBase64(uint8Array: Uint8Array<ArrayBufferLike>) {
	let binary = "";
	const len = uint8Array.length;

	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(uint8Array[i]);
	}

	// Convert the binary string to Base64
	return btoa(binary);
}

export function decompressStringWithPako<T extends object>(
	compressedString: string,
): T | null {
	try {
		// Convert base64 encoded string back to Uint8Array
		const binaryString = atob(compressedString);
		const charArray = new Uint8Array(binaryString.length);

		for (let i = 0; i < binaryString.length; i++) {
			charArray[i] = binaryString.charCodeAt(i);
		}

		// Decompress the Uint8Array using pako
		const decompressed = inflate(charArray, { to: "string" });

		// Parse the decompressed string back into a JSON object
		return JSON.parse(decompressed) as T;
	} catch (error) {
		console.error("Decompression or parsing failed:", error);
		return null;
	}
}

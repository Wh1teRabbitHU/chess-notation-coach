const KEY_PREFIX = 'chess-notation-coach.';

function set(key: string, value: string, isSession = false) {
	const storage = isSession ? sessionStorage : localStorage;

	key = KEY_PREFIX + key;
	value = JSON.stringify(value);

	storage.setItem(key, value);
}

function get(key: string, isSession = false) {
	if (!has(key, isSession)) {
		return null;
	}

	key = KEY_PREFIX + key;

	const storage = isSession ? sessionStorage : localStorage;
	const rawValue = storage.getItem(key);

	if (rawValue === 'null') {
		return null;
	}

	return JSON.parse(rawValue ?? '');
}

function has(key: string, isSession = false) {
	key = KEY_PREFIX + key;

	const storage = isSession ? sessionStorage : localStorage;

	return storage.getItem(key) !== null;
}

export default { set, get, has };

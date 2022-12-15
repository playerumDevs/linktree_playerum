module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: 'eslint:recommended',
	globals: {
		ENV: true,
		GLOBAL: true,
		CONFIG: true,
		_staticv: true,
		//
		Main: true,
		Server: true,
		//general
		screens: true,
		screenController: true,
		activityControllers: true,
		message: true,
		setLoading: true,
		//utils
		q: true,
		qs: true,
		lockClick: true,
		waitFrame: true,
		loadAsset: true,
		makeElement: true,
	},
	parserOptions: {
		ecmaVersion: 8
	},
	rules: {
		'no-cond-assign': 'off',
		'no-unused-vars': 'off',
		'no-empty': 'warn',
		'semi': ['error', 'always'],
	}
};
import fs from "fs";
import { logger } from "./logger.js";
import { FILE_EXTENSION_CONST } from "./const.js";
import { barrelIndexTemplate } from "../templates/barrelIndexTemplate.js";
import {jsxTemplate} from "../templates/jsxTemplate.js";
import {testTemplate} from "../templates/testTemplate.js";
import {reducerTemplate} from "../templates/reducerTemplate.js";
import {stateTemplate} from "../templates/stateTemplate.js";
import {storybookTemplateTS} from "../templates/storybookTemplate.js";

export function createBarrelIndex(camelFileName, pathTo, type) {
	fs.writeFileSync(`${pathTo}index.${type}`, barrelIndexTemplate(camelFileName));
	// const tsStream = fs.createWriteStream(`${pathTo}index.${type}`, 'utf8');
	//
	// tsStream.once('open', function() {
	// 	tsStream.write(`export { ${camelFileName} } from "./${camelFileName}";\n`);
	// 	tsStream.end();
	// });

	logger(`index.${type} created`);
}

export function createStyleFile(camelFileName, pathTo, type) {
	fs.writeFileSync(`${pathTo}${camelFileName}.${type}`, '');

	logger(`${camelFileName}.${type} created`);
}


export function createJSXFile(camelFileName, pathTo, type, styleType = FILE_EXTENSION_CONST.SCSS) {
	fs.writeFileSync(`${pathTo}${camelFileName}.${type}`, jsxTemplate(camelFileName, styleType));
	// const tsxStream = fs.createWriteStream(`${pathTo}${camelFileName}.${type}`, 'utf8');
	//
	// tsxStream.once('open', function() {
	// 	tsxStream.write('import React from "react";\n');
	// 	tsxStream.write('\n');
	//
	// 	if (styleType.includes('module')) {
	// 		tsxStream.write(`import styles from "./${camelFileName}.${styleType}";\n`);
	// 	} else {
	// 		tsxStream.write(`import "./${camelFileName}.${styleType}";\n`);
	// 	}
	//
	// 	tsxStream.write('\n');
	// 	tsxStream.write(`export const ${camelFileName} = () => (<></>);\n`);
	// 	tsxStream.end();
	// });

	logger(`${camelFileName}.${type} created`);
}

export function createDirectoryByPath(pathTo) {
	fs.mkdirSync(pathTo,{ recursive: true });
}


export function createTestFile(camelFileName, pathTo, type) {
	fs.writeFileSync(`${pathTo}${camelFileName}.test.${type}`, testTemplate(camelFileName));
// 	const tsxStream = fs.createWriteStream(`${pathTo}${camelFileName}.test.${type}`, 'utf8');
//
// 	tsxStream.once('open', function () {
// 		tsxStream.write('import React from "react";\n');
// 		tsxStream.write('import { render, screen } from "@testing-library/react";\n');
// 		tsxStream.write('import renderer from "react-test-renderer";\n');
// 		tsxStream.write('\n');
// 		tsxStream.write(`import { ${camelFileName} } from "./${camelFileName}";`);
// 		tsxStream.write('\n');
//
// 		tsxStream.write(`
// describe('${camelFileName} component', () => {
// 	test('it renders', () => {
// 		render(<${camelFileName} />);
// 	});
// });
// `);
//
// 		tsxStream.write(`
// test("it renders a correct snapshot", () => {
// 	const tree = renderer.create(<${camelFileName} />).toJSON();
// 	expect(tree).toMatchSnapshot();
// });
// 		`);
//
// 		tsxStream.end();
// 	});

	logger(`${camelFileName}.test.${type} created`);
}

export function createActionsFile(pathTo, type) {
	fs.writeFileSync(`${pathTo}actions.${type}`, '');

	logger(`${pathTo}actions.${type} created`);
}

export function createTypesFile(pathTo, type) {
	fs.writeFileSync(`${pathTo}types.${type}`, '');

	logger(`${pathTo}types.${type} created`);
}

export function createReducerFile(pathTo, type, camelReducerName) {
	fs.writeFileSync(`${pathTo}reducer.${type}`, reducerTemplate(camelReducerName));
// 	const reducerStream = fs.createWriteStream(`${pathTo}reducer.${type}`, 'utf8');
//
// 	reducerStream.once('open', function () {
// 		reducerStream.write('import { initialState } from "./state";\n');
// 		reducerStream.write(`
// export const ${camelReducerName}Reducer = (state = initialState, action) => {
//   switch (action.type) {
//   	default:
//       return {
//         ...state,
//       }
//   }
// }
// 		`)
// 		reducerStream.end();
// 	})

	logger(`${pathTo}reducer.${type} created`);
}

export function createStateFile(pathTo, type) {
	fs.writeFileSync(`${pathTo}state.${type}`, stateTemplate);
// 	const stateStream = fs.createWriteStream(`${pathTo}state.${type}`, 'utf8');
//
// 	stateStream.once('open', function () {
// 		stateStream.write(`
// export const initialState = {
//     error: null,
//     loading: false,
// };
// 		`)
// 		stateStream.end();
// 	})

	logger(`${pathTo}state.${type} created`);
}

export function createStorybookFile(pathTo, type, camelComponentName) {
	fs.writeFileSync(`${pathTo}${camelComponentName}.stories.${type}`, storybookTemplateTS(camelComponentName));

	logger(`${pathTo}${camelComponentName}.stories.${type} created`);
}

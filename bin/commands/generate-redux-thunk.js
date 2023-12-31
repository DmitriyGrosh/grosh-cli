import { FILE_EXTENSION_CONST } from "../utils/const.js";

import {
    createActionsFile,
    createDirectoryByPath,
    createReducerFile,
    createStateFile,
    createTypesFile
} from "../utils/create-file.js";
import { snakeToCamel } from "../utils/to-string.js";

export function generateReduxThunk(pathTo, filename, options) {
    const fileExtension = options[FILE_EXTENSION_CONST.LANGUAGE];

    const rootPath = `./src/${pathTo}/${filename}/`;
    const camelFilename = snakeToCamel(filename, false);

    createDirectoryByPath(rootPath);
    createStateFile(rootPath, fileExtension);
    createActionsFile(rootPath, fileExtension);
    createTypesFile(rootPath, fileExtension);
    createReducerFile(rootPath, fileExtension, camelFilename);
}
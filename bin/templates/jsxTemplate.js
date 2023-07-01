export const jsxTemplate = (camelFileName, styleType) =>
  `import React from "react";
  
import ${styleType.includes('module') ? "styles from" : ""}"./${camelFileName}.${styleType}";
  
export const ${camelFileName} = () => (<></>);
`;
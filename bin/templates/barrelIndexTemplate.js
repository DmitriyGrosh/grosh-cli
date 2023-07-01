export const barrelIndexTemplate = (camelFileName) =>
  `export { ${camelFileName} } from "./${camelFileName}";
`;

export const testTemplate = (camelFileName) =>
  `import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import { ${camelFileName} } from "./${camelFileName}";

describe('${camelFileName} component', () => {
	test('it renders', () => {
		render(<${camelFileName} />);
	});
});

test("it renders a correct snapshot", () => {
	const tree = renderer.create(<${camelFileName} />).toJSON();
	expect(tree).toMatchSnapshot();
});
  `;

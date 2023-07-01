export const storybookTemplateTS = (camelFilename) =>
  `import type { Meta, StoryObj } from '@storybook/react';
import { ${camelFilename} } from './${camelFilename}'; 

const meta = {   
  title: 'Example/${camelFilename}',
  component: ${camelFilename},
} satisfies Meta<typeof ${camelFilename}>;
  
export default meta;
type Story = StoryObj<typeof meta>;
`;

export const storybookTemplateJS = () => `
`;

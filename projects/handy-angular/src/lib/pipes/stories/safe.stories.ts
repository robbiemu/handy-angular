import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

import { SafePipe } from '../safe.pipe';
import { MockSafeComponent } from './safe.component.mock';

// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Pipe/Safe',
  // The component related to the Stories
  component: MockSafeComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [MockSafeComponent, SafePipe],
      imports: [CommonModule],
    }),
  ],
};
// This creates a Story for the component
const Template: Story<MockSafeComponent> = () => ({
  component: MockSafeComponent,
  template: `<app-link></app-link>`,
});
export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!


import { Input } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsPopularPagesComponent } from './rds-popular-pages.component';

export default {
  title: 'Elements/Popular-pages',
  component: RdsPopularPagesComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
      }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsPopularPagesComponent> = (args: RdsPopularPagesComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
 
Basic.args = {
  customPopularPageItems:[{ title: 'Documantation',  subtitle: 'Learn how to integrate our tools with your app', icon: 'document',route: '/home'},
  { title: 'API References',  subtitle: 'A Complete API references of our libraries', icon: 'apiReference' ,route: '/home'},
  { title: 'Guides', subtitle: 'Installation guides that cover popular setups', icon: 'guide',route: '/home'},
  { title: 'Blog',  subtitle: 'Read our latest news and articles', icon: 'blog',route: '/home'}]

}


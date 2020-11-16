import { Args as DefaultArgs } from '@storybook/addons';
import { hbs } from 'ember-cli-htmlbars';

export { RenderContext } from '@storybook/core';

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export interface ElementArgs {
  el: HTMLElement;
}

export interface OptionsArgs {
  template: any;
  context: any;
  element: any;
}

export interface StoryFnEmberReturnType<Args = DefaultArgs> {
  template: ReturnType<typeof hbs>;
  context: Args;
}

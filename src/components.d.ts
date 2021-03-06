/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import {
  MatchResults,
} from '@stencil/router';

declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  AppHome as AppHome
} from './components/app-home/app-home';

declare global {
  interface HTMLAppHomeElement extends AppHome, HTMLStencilElement {
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-home": JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppProfile as AppProfile
} from './components/app-profile/app-profile';

declare global {
  interface HTMLAppProfileElement extends AppProfile, HTMLStencilElement {
  }
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    "app-profile": HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-profile": JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      match?: MatchResults;
    }
  }
}


import {
  JSONDisplay as JsonDisplay
} from './components/json-display/json-display';

declare global {
  interface HTMLJsonDisplayElement extends JsonDisplay, HTMLStencilElement {
  }
  var HTMLJsonDisplayElement: {
    prototype: HTMLJsonDisplayElement;
    new (): HTMLJsonDisplayElement;
  };
  interface HTMLElementTagNameMap {
    "json-display": HTMLJsonDisplayElement;
  }
  interface ElementTagNameMap {
    "json-display": HTMLJsonDisplayElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "json-display": JSXElements.JsonDisplayAttributes;
    }
  }
  namespace JSXElements {
    export interface JsonDisplayAttributes extends HTMLAttributes {
      endpoint?: string;
    }
  }
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StencilTextBox as StencilTextbox
} from './components/stencil-textbox/stencil-textbox';

declare global {
  interface HTMLStencilTextboxElement extends StencilTextbox, HTMLStencilElement {
  }
  var HTMLStencilTextboxElement: {
    prototype: HTMLStencilTextboxElement;
    new (): HTMLStencilTextboxElement;
  };
  interface HTMLElementTagNameMap {
    "stencil-textbox": HTMLStencilTextboxElement;
  }
  interface ElementTagNameMap {
    "stencil-textbox": HTMLStencilTextboxElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stencil-textbox": JSXElements.StencilTextboxAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilTextboxAttributes extends HTMLAttributes {
      name?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

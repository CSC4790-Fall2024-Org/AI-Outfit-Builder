/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/AIStylist`; params?: Router.UnknownInputParams; } | { pathname: `/PhotoUpload`; params?: Router.UnknownInputParams; } | { pathname: `/Wardrobe`; params?: Router.UnknownInputParams; } | { pathname: `/configuration`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/AIStylist`; params?: Router.UnknownOutputParams; } | { pathname: `/PhotoUpload`; params?: Router.UnknownOutputParams; } | { pathname: `/Wardrobe`; params?: Router.UnknownOutputParams; } | { pathname: `/configuration`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/AIStylist${`?${string}` | `#${string}` | ''}` | `/PhotoUpload${`?${string}` | `#${string}` | ''}` | `/Wardrobe${`?${string}` | `#${string}` | ''}` | `/configuration${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/AIStylist`; params?: Router.UnknownInputParams; } | { pathname: `/PhotoUpload`; params?: Router.UnknownInputParams; } | { pathname: `/Wardrobe`; params?: Router.UnknownInputParams; } | { pathname: `/configuration`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}

import * as React from 'react';

export interface CssBaselineProps {
  children?: React.ReactNode;
}

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 * Demos:
 *
 * - [Css Baseline](https://material-ui.com/components/css-baseline/)
 *
 * API:
 *
 * - [CssBaseline API](https://material-ui.com/api/css-baseline/)
 */
declare const CssBaseline: React.ComponentType<CssBaselineProps>;

/**
 * @deprecated The name of this type is misleading. `CssBaseline` implements no class at all.
 */
export type CssBaselineClassKey = '@global';

export default CssBaseline;

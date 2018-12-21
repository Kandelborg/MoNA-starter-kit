/**
 * A React.FunctionComponent with getInitialProps
 */
declare interface StatelessPage<P = {}> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

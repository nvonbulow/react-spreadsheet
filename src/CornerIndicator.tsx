import * as React from "react";
import * as Types from "./types";

export type Props = {
  styles: Types.SpreadsheetStyles;
};

export default function CornerIndicator({ styles }: Props): React.ReactElement {
  return <th className={styles.header} />;
}

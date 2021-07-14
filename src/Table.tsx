import * as React from "react";
import { ReactNode } from "react";
import * as Types from "./types";
import { range } from "./util";

export type Props = {
  columns: number;
  hideColumnIndicators?: boolean | null;
  children: ReactNode;
  styles: Types.SpreadsheetStyles;
};

const Table = ({
  children,
  columns,
  hideColumnIndicators,
  styles,
}: Props): React.ReactElement => {
  const columnCount = columns + (hideColumnIndicators ? 0 : 1);
  const columnNodes = range(columnCount).map((i) => <col key={i} />);
  return (
    <table className={styles.table}>
      <colgroup>{columnNodes}</colgroup>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;

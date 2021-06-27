import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import Paper from "@material-ui/core/Paper";
import {
  StyledPagination,
  StyledTableRow,
  StyledTableCell,
} from "../styles/genericStyles";
import _ from "lodash";

const Datatable = ({ entries }) => {
  const columns = entries[0] && Object.keys(entries[0]);
  const pageSize = 20;
  const pageCount = entries ? Math.ceil(entries.length / pageSize) : 0;

  const [paginatedPosts, setPaginatedPosts] = useState(
    _(entries).slice(0).take(pageSize).value()
  );

  const handleChange = (event, value) => {
    setPaginatedPosts(_(entries).slice(value).take(pageSize).value());
  };

  useEffect(() => {
    setPaginatedPosts(_(entries).slice(0).take(pageSize).value());
  }, [entries]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              {entries[0] &&
                columns.map((heading, index) => (
                  <TableCell key={index}>{heading}</TableCell>
                ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {entries[0] &&
              paginatedPosts.map((row, rowIndex) => {
                return (
                  <TableRow key={rowIndex}>
                    {columns.map((column, columnIndex) => (
                      <>
                        {rowIndex % 2 === 0 ? (
                          <TableCell key={columnIndex}>
                            {row[column].toString()}
                          </TableCell>
                        ) : (
                          <StyledTableCell key={columnIndex}>
                            {row[column].toString()}
                          </StyledTableCell>
                        )}
                      </>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledPagination
          size="large"
          count={pageCount}
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Datatable;

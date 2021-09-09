import React from 'react';
import { Message, Priority } from '../Api';
import styled from 'styled-components';
import { SimpleP } from './styled/Paragraphs';
import { SimpleH2 } from './styled/Headings';
import { TableRow, TableBody, TableCell, Table, Paper } from '@material-ui/core';

const colors = {
  [Priority.Error]: '#F56236',
  [Priority.Warn]: '#FCE788',
  [Priority.Info]: '#88FCA3',
};

const StyledTableRow = styled(TableRow)<{ priority: Priority }>`
  background-color: ${({ priority }) => colors[priority]};
  border-spacing: 0 8px;
  border-collapse: separate;
`;

interface Props {
  title: string;
  messages: Message[];
}

export const MessageTable: React.FC<Props> = ({ title, messages }) => {
  return (
    <Paper elevation={0}>
      <SimpleH2>{title}</SimpleH2>
      <SimpleP>Count {messages?.length || 0}</SimpleP>
      <Table aria-label='customized table'>
        <TableBody>
          {messages?.map((msg) => (
            <StyledTableRow key={msg.message} priority={msg.priority}>
              <TableCell component='th' scope='row'>
                {msg.message}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

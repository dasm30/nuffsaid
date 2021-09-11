import React from 'react';
import { Message, Priority } from '../Api';
import styled from 'styled-components';
import { SimpleP } from './styled/Paragraphs';
import { SimpleH2 } from './styled/Headings';
import { TableRow, TableBody, TableCell, Table, Paper } from '@material-ui/core';
import { messagesActions, useSelectMessages } from '../data/slices/messagesSlice';
import { useDispatch } from 'react-redux';
import { useElementHeight } from '../customHooks/useElementHeight';

const colors = {
  [Priority.Error]: '#F56236',
  [Priority.Warn]: '#FCE788',
  [Priority.Info]: '#88FCA3',
};

const StyledTableRow = styled(TableRow)<{ priority: Priority }>`
  background-color: ${({ priority }) => colors[priority]};
  display: grid;
  margin: 8px 0;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px #8484847a;
  th {
    border-bottom: unset;
  };
`;

interface Props {
  title: string;
  priority: number;
}

const StyledP = styled.p`
  font-size: small;
  margin: 0px 0 -6px;
  text-align: end;
  cursor: pointer;
  :hover {
    color: #4e4e4e;
  }
`;

const StyledTableBody = styled(({ allHeights, ...rest }) => <TableBody {...rest} />)`
  height: calc(100vh - ${(props) => props.allHeights}px);
  display: block;
  overflow-y: auto;
  :after {
    content: '';
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
  }
`;

const titleHeightKey = 'title-h2';
const countHeightKey = 'count-p';
const countVMargin = 12;
const extraSpace = 36;

export const MessageTable: React.FC<Props> = ({ title, priority }) => {
  const messages: Message[] = useSelectMessages(`messages.[${priority}]`);
  const dispatch = useDispatch();
  const getRemoveMsg = (msg: Message) => () => dispatch(messagesActions.remove(msg));

  const { ref: titleRef } = useElementHeight(titleHeightKey);
  const { ref: countRef, allHeights } = useElementHeight(countHeightKey, countVMargin + extraSpace);

  return (
    <Paper elevation={0}>
      <SimpleH2 innerRef={titleRef}>{title}</SimpleH2>
      <SimpleP innerRef={countRef} margin={`0 0 ${countVMargin}px`}>
        Count {messages?.length || 0}
      </SimpleP>
      <Table aria-label='customized table'>
        <StyledTableBody allHeights={allHeights}>
          {messages?.map((msg) => (
            <StyledTableRow key={msg.message} priority={msg.priority}>
              <TableCell component='th' scope='row'>
                {msg.message}
                <StyledP onClick={getRemoveMsg(msg)}>Clear</StyledP>
              </TableCell>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </Table>
    </Paper>
  );
};

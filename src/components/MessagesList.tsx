import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MessageTable } from './MessageTable';
import { Priority } from '../Api';
import { useMessages } from '../customHooks/useMessages';

const MessagesList: React.FC = () => {
  useMessages();
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <MessageTable title="Error Type 1" priority={Priority.Error} />
      </Grid>
      <Grid item xs>
        <MessageTable title="Warning Type 2" priority={Priority.Warn} />
      </Grid>
      <Grid item xs>
        <MessageTable title="Info Type 3" priority={Priority.Info} />
      </Grid>
    </Grid>
  );
}

export default MessagesList;


// import React from 'react';
// // import { withStyles, Theme, createStyles /* , makeStyles */ } from '@material-ui/core/styles';
// // import TableCell from '@material-ui/core/TableCell';
// // import TableRow from '@material-ui/core/TableRow';
// import Grid from '@material-ui/core/Grid';
// import { MessageTable } from './MessageTable';
// import { Messages } from '../data/slices/messagesSlice';
// import { Priority } from '../Api';

// interface Props {
//   messages: Messages;
// }

// const MessagesList: React.FC = () => (
//   <Grid container spacing={3}>
//     <Grid item xs>
//       <MessageTable title="Error Type 1" priority={Priority.Error} />
//     </Grid>
//     <Grid item xs>
//       <MessageTable title="Warning Type 2" priority={Priority.Warn} />
//     </Grid>
//     <Grid item xs>
//       <MessageTable title="Info Type 3" priority={Priority.Info} />
//     </Grid>
//   </Grid>
// );

// // const useStyles = withStyles({
// //   table: {
// //     minWidth: 700,
// //   },
// // });

// // export default function CustomizedTables() {
// //   // const classes = useStyles();

// //   return (
// //     <Paper>
// //       <Table /* className={classes.table} */ aria-label="customized table">
// //         <TableHead>
// //           <TableRow>
// //             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
// //             <StyledTableCell align="right">Calories</StyledTableCell>
// //             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
// //             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
// //             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {rows.map((row) => (
// //             <StyledTableRow key={row.name}>
// //               <StyledTableCell component="th" scope="row">
// //                 {row.name}
// //               </StyledTableCell>
// //               <StyledTableCell align="right">{row.calories}</StyledTableCell>
// //               <StyledTableCell align="right">{row.fat}</StyledTableCell>
// //               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
// //               <StyledTableCell align="right">{row.protein}</StyledTableCell>
// //             </StyledTableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </Paper>
// //   );
// // }

// export default MessagesList;

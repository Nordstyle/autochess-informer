import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {capitalize, takeRareColor} from "../../../src/utils";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import classNames from "classnames";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";

const AllFigures = (props) => {
  const { classes, state, handleChange } = props;
  return (
    <div className={classes.root}>
      <Grid container justify='center'>
        <Typography className={classes.title}
                    style={{ marginRight: '8px'}}
                    variant='h6'>
          Sort by
        </Typography>
        <Select
          value={state.sort}
          onChange={handleChange}
          inputProps={{
            name: 'sort'
          }}
          autoWidth={true}
        >
          <MenuItem value='cost'>Cost</MenuItem>
          <MenuItem value='race'>Race</MenuItem>
          <MenuItem value='species'>Species</MenuItem>
        </Select>
      </Grid>
      <Grid container>
        <Table className={classes.tableRoot}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography variant='subtitle1'>
                  Name
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography variant='subtitle1'>
                  Description
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography variant='subtitle1'>
                  Effects
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography variant='subtitle1'>
                  List of Figures
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*{elements.map(element => (*/}
              {/*<TableRow key={element.id}>*/}
                {/*<TableCell className={classes.tableCell} style={{textAlign:'center'}}>*/}
                  {/*<Typography className={classes.name} variant='subtitle2'>{capitalize(element.name) + 's'}</Typography>*/}
                  {/*<img src={element.icon} className={classes.icon} alt={ isClasses ? 'Dota Auto Chess Classes ' + element.name : 'Dota Auto Chess Species ' + element.name } />*/}
                {/*</TableCell>*/}
                {/*<TableCell className={classNames(classes.cellDescription, classes.tableCell)}>*/}
                  {/*<Typography variant='body2'>*/}
                    {/*{element.description}*/}
                  {/*</Typography>*/}
                {/*</TableCell>*/}
                {/*<TableCell className={classes.tableCell}>*/}
                  {/*<Typography variant='subtitle2'>*/}
                    {/*{element.effect.name}*/}
                  {/*</Typography>*/}
                  {/*<Typography variant='body2' dangerouslySetInnerHTML={{ __html: element.effect.description.replace(/\%/g, '<br/>') }} />*/}
                {/*</TableCell>*/}
                {/*<TableCell className={classes.tableCell}>*/}
                  {/*{matchedFiguresByRace[element.name].map(figure => (*/}
                    {/*<Link key={figure.name} href={`/figure/${figure.name}`}>*/}
                      {/*<Typography style={{ color: takeRareColor(figure.cost), cursor: 'pointer', width: '150px'}} variant='body2'>*/}
                        {/*{figure.name}*/}
                      {/*</Typography>*/}
                    {/*</Link>*/}
                  {/*))}*/}
                {/*</TableCell>*/}
              {/*</TableRow>*/}
            {/*))}*/}
          </TableBody>
        </Table>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(AllFigures);
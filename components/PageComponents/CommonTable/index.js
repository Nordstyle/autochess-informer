import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import classNames from 'classnames'
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {capitalize, matchFiguresByMark, takeRareColor} from "../../../src/utils";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const CommonTable = (props) => {
  const { classes, elements, figures, isClasses } = props;
  const allElements = elements.map(item => item.name);
  const matchedFiguresByRace = matchFiguresByMark(figures, allElements, isClasses);
  console.log(props)
  return (
    <div className={classes.root}>
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
          {elements.map(element => (
            <TableRow key={element.id}>
              <TableCell className={classes.tableCell} style={{textAlign:'center'}}>
                <Typography className={classes.name} variant='subtitle2'>{capitalize(element.name) + 's'}</Typography>
                <img src={element.icon} className={classes.icon} alt={ isClasses ? 'Dota Auto Chess Classes ' + element.name : 'Dota Auto Chess Species ' + element.name } />
              </TableCell>
              <TableCell className={classNames(classes.cellDescription, classes.tableCell)}>
                <Typography variant='body2'>
                  {element.description}
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography variant='subtitle2'>
                  {element.effect.name}
                </Typography>
                <Typography variant='body2' dangerouslySetInnerHTML={{ __html: element.effect.description.replace(/\%/g, '<br/>') }} />
              </TableCell>
              <TableCell className={classes.tableCell}>
                {matchedFiguresByRace[element.name].map(figure => (
                  <Link key={figure.name} href={`/figure/${figure.name}`}>
                    <Typography style={{ color: takeRareColor(figure.cost), cursor: 'pointer', width: '150px'}} variant='body2'>
                      {figure.name}
                    </Typography>
                  </Link>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};

export default withStyles(styles)(CommonTable);
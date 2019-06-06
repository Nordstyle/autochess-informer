import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import classNames from 'classnames'
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {capitalize, matchFiguresByRace, takeRareColor} from "../../../src/utils";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Species = (props) => {
  const { classes, species, figures } = props;
  const allSpecies = species.map(item => item.name);
  const matchedFiguresByRace = matchFiguresByRace(figures, allSpecies);
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
          {species.map(spec => (
            <TableRow key={spec.id}>
              <TableCell className={classes.tableCell} style={{textAlign:'center'}}>
                <Typography className={classes.name} variant='subtitle2'>{capitalize(spec.name) + 's'}</Typography>
                <img src={spec.icon} className={classes.icon} alt={'Dota Auto Chess Species ' + species.name} />
              </TableCell>
              <TableCell className={classNames(classes.cellDescription, classes.tableCell)}>
                <Typography variant='body2'>
                  {spec.description}
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography variant='subtitle2'>
                  {spec.effect.name}
                </Typography>
                <Typography variant='body2' dangerouslySetInnerHTML={{ __html: spec.effect.description.replace(/\%/g, '<br/>') }} />
              </TableCell>
              <TableCell className={classes.tableCell}>
                {matchedFiguresByRace[spec.name].map(figure => (
                  <Link key={figure.name} as={`/figure/${figure.name}`} href={`/figure?name=${figure.name}`}>
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

export default withStyles(styles)(Species);
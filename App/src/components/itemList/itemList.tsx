import React, { FunctionComponent } from 'react'
import { withStyles, Grid } from "@material-ui/core";

import { WithStyles } from "@material-ui/core";
import Style from "./css"
import { item, type } from '../../store/types/items';
import Item from '../item/item';

interface props extends WithStyles<typeof Style> {
  type: type | "ALL",
  exclusiveOnly?: boolean,
  items: Map<string, item>
}

const ItemList: FunctionComponent<props> = ({ classes, type, exclusiveOnly, items }) => {
  return (
    <div className={classes.root}>
      <Grid className={classes.root} container direction="row" alignItems="center" spacing={2}>
        {Array.from(items.entries()).map((entry: [string, item]) => {
          if (exclusiveOnly) {
            return entry[1].exclusive ? (
              <Grid key={entry[0]} item xs={6} sm={4} md={3}  >
                <Item
                  key={entry[1].id}
                  item={entry[1]}
                />
              </Grid>
            ) : null
          }
          return type === "ALL" || entry[1].type === type ? (
            <Grid key={entry[0]} item xs={6} sm={4} md={3}  >
              <Item
                key={entry[1].id}
                item={entry[1]}
              />
            </Grid>
          ) : null
        })}
      </Grid>
    </div >
  )
}

export default withStyles(Style)(ItemList);
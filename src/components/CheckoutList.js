import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Checkout from './Checkout';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#E2EBEB'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width: '1000px'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  checkout: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 20
  }
}));

 const tileData = [
    {
      img: '',
      title: 'Item 1',
      author: 'author',
    },{
        img: '',
        title: 'Item 2',
        author: 'author',
    },{
        img: '',
        title: 'Item 3',
        author: 'author',
    },{
        img: '',
        title: 'Item 4',
        author: 'author',
    },{
        img: '',
        title: 'Item 5',
        author: 'author',
    }
  ];
 
export default function CheckoutList() {
  const classes = useStyles();

  return (
      <div>
        <div className={classes.root}>
        <GridList className={classes.gridList} cols={5.5}>
            {tileData.map(tile => (
            <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                title={tile.title}
                classes={{
                    root: classes.titleBar,
                    title: classes.title,
                }}
                actionIcon={
                    <IconButton aria-label={`star ${tile.title}`}>
                    </IconButton>
                }
                />
            </GridListTile>
            ))}
        </GridList>
        </div>

        <div className={classes.checkout}>
            <Checkout></Checkout>
        </div>

    </div>
  );
}

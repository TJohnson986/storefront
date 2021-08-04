// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function Categories () {

  // a hook to read from state:
  const categories = useSelector(state => state.store.categories);
  const dispatch = useDispatch();

  const setCategory = (category) => {
    dispatch({
      type: 'ACTIVATE',
      payload: category,
    });
  }
  console.log('in categories', categories);

  return (
    <List>
      {/* displays each category */}
      {categories.map(category => {
        return (
          <ListItem onClick={() => setCategory(category.normalizedName)}>
            <ListItemText primary={category.displayName}/>
          </ListItem>
        )
      })}
    </List>
  )
}

export default Categories;
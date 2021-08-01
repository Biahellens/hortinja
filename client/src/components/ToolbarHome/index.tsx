import React, { FC } from 'react'

//componentes
import {
  AppBar,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  InputAdornment,
  Toolbar,
  OutlinedInput,
} from '@material-ui/core'

import FilterList from '@material-ui/icons/FilterList'

import Logo from '../../assets/Images/Logo.png'

export const ToolbarHome: FC<any> = () => {
  return (
    <AppBar color="secondary" style={{ alignItems: 'center', padding: '1vh' }}>
      <Toolbar>
        <img src={Logo} style={{ marginLeft: '4vh', maxHeight: '4vh' }} />
        <div style={{ paddingLeft: '25vh' }}>
          <FormControl
            variant="outlined"
            style={{ marginLeft: '1vh', marginRight: '1vh' }}
          >
            <Select
              labelId="filter-category"
              id="category"
              placeholder="Categorias"
              inputProps={{ 'aria-label': 'search' }}
              style={{
                width: '24vh',
                height: '5vh',
                textAlign: 'center',
                borderRadius: '5vh',
                position: 'relative',
                fontSize: 12,
                backgroundColor: '#D9D2CF',
              }}
            >
              <MenuItem value={10}>Frutas</MenuItem>
              <MenuItem value={20}>Verduras</MenuItem>
              <MenuItem value={30}>Legumes</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <OutlinedInput
              id="horticultural"
              placeholder="Buscar hortaliça"
              style={{
                width: '24vh',
                height: '5vh',
                textAlign: 'center',
                borderRadius: '5vh',
                position: 'relative',
                fontSize: 16,
                backgroundColor: '#D9D2CF',
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <FilterList />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  )
}

/*
<div style={{
              position: 'relative',
              backgroundColor:'#D9D2CF',
              marginLeft: '40vh',
              width: '25vh',
              borderRadius: '2vh'}}>

            <div style={{
              marginLeft: '1vh',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',}}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Buscar hortaliça"
              inputProps={{ 'aria-label': 'search', }}
              style={{width: '20vh', marginLeft: '4vh'}}
            />
          </div>*/

import { CovidApi } from '../../../../services/CovidApi'
import {
  BACKSPACE,
  LOAD_BY_COUNTRY,
  LOAD_SUMMARY_GLOBAl,
  RESET,
  SEARCH_BY_COUNTRY,
  SORT,
} from './types'

const Api = new CovidApi()

export const loadCasesByCountry = () => {
  return (dispatch) => {
    Api.loadByCountry()
      .then(({ data }) => {
        dispatch({ type: LOAD_BY_COUNTRY, payload: data })
      })
      .catch((e) => {
        console.log(e)
        dispatch({ type: 'ERROR' })
        alert('Error loading data!')
      })
  }
}

export const loadSummaryGlobal = () => {
  return (dispatch) => {
    Api.loadSummaryGlobal()
      .then(({ data }) => {
        dispatch({ type: LOAD_SUMMARY_GLOBAl, payload: data })
      })
      .catch((e) => {
        console.log(e)
        dispatch({ type: 'ERROR' })
        alert('Error loading data!')
      })
  }
}

export const searchByCountry = (searchValue) => {
  return {
    type: SEARCH_BY_COUNTRY,
    payload: { searchValue },
  }
}

export const searchReset = () => {
  return {
    type: RESET,
    payload: {},
  }
}

export const searchReduced = (searchValue) => {
  return {
    type: BACKSPACE,
    payload: { searchValue },
  }
}

export const sort = (category) => {
  return {
    type: SORT,
    payload: { category },
  }
}

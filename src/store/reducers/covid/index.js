import { sort } from './actions'
import {
  BACKSPACE,
  LOAD_BY_COUNTRY,
  LOAD_SUMMARY_GLOBAl,
  RESET,
  SEARCH_BY_COUNTRY,
  SORT,
} from './actions/types'

export const indexReducer = (
  state = { cases: [], summary: {} },
  { type, payload },
) => {
  switch (type) {
    case LOAD_BY_COUNTRY:
      localStorage.setItem('covid_cases', JSON.stringify(payload))
      return { ...state, cases: payload }
    case LOAD_SUMMARY_GLOBAl:
      return { ...state, summary: { ...payload } }
    case SEARCH_BY_COUNTRY:
      const results = state.cases.filter((caseV) => {
        if (caseV.country.includes(payload.searchValue)) return true
        else return false
      })
      return { ...state, cases: results }
    case SORT:
      //
      function compare(a, b) {
        if (a[payload.category] < b[payload.category]) {
          return -1
        }
        if (a[payload.category] > b[payload.category]) {
          return 1
        }
        return 0
      }

      const sorted = state.cases.sort(compare)
      return { ...state, cases: [...sorted] }
    case RESET:
      const oringal = localStorage.getItem('covid_cases')
      return { ...state, cases: JSON.parse(oringal) }
    case BACKSPACE:
      let oringalR = localStorage.getItem('covid_cases')
      oringalR = JSON.parse(oringalR)
      const resultsR = oringalR.filter((caseV) => {
        if (caseV.country.includes(payload.searchValue)) return true
        else return false
      })
      return { ...state, cases: resultsR }
    default:
      return state
  }
}

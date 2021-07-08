import { default as axios } from 'axios'

export class CovidApi {
  constructor(baseUrl) {
    if (baseUrl) {
      this.baseUrl = baseUrl + ''
    } else {
      this.baseUrl = 'https://corona.lmao.ninja/v2'
    }
  }

  loadByCountry() {
    return axios.get(`${this.baseUrl}/countries?yesterday&sort`)
  }

  loadSummaryGlobal() {
    return axios.get(`${this.baseUrl}/all?yesterday`)
  }
}

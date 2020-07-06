import axios from 'axios'
import { REGION_CHANGED } from './actionTypes'

export function setRegions() {

    const promise = axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')

    return {
        type: REGION_CHANGED,
        payload: promise
    }
}
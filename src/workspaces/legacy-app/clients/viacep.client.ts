import axios, { AxiosResponse } from 'axios'
import { IAddress } from '../interfaces/address.interface'
import { getOnlyNumber } from '../helpers/functions/getOnlyNumbers.function'

async function getAddressData (cep: string): Promise<IAddress> {
  const axiosResponse: AxiosResponse<IAddress> = await axios.get(`https://viacep.com.br/ws/${getOnlyNumber(cep)}/json/`)
  const address = axiosResponse.data

  return address
}

export {
  getAddressData
}

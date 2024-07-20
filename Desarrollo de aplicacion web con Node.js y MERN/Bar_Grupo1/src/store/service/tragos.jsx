import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Tragos from '../../../../productos/tragos'

export const tragosApi = createApi({
    reducerPath:"tragosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'Tragos',
    }),
    endpoints: (builder) => ({
        getAllTragos: builder.query({
            query: () => "/Carta/Tragos"
        })
    })
})

export const { useGetAllTragosQuery } = tragosApi


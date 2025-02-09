/**
 * Generated by orval 🍺
 * Do not edit manually.
 */
import { useMutation, useQuery } from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type { CalendarDto, GetApiCalendarPriceParams } from '../../models'
import { customAxiosInstance } from '../../customAxiosInstance'
import type { ErrorType } from '../../customAxiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const getApiCalendarPrice = (
  params?: GetApiCalendarPriceParams,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<unknown[]>(
    { url: `/api/Calendar/price`, method: 'GET', params, signal },
    options
  )
}

export const getGetApiCalendarPriceQueryKey = (
  params?: GetApiCalendarPriceParams
) => {
  return [`/api/Calendar/price`, ...(params ? [params] : [])] as const
}

export const getGetApiCalendarPriceQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiCalendarPrice>>,
  TError = ErrorType<unknown>
>(
  params?: GetApiCalendarPriceParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarPrice>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetApiCalendarPriceQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiCalendarPrice>>
  > = ({ signal }) => getApiCalendarPrice(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiCalendarPrice>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiCalendarPriceQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCalendarPrice>>
>
export type GetApiCalendarPriceQueryError = ErrorType<unknown>

export function useGetApiCalendarPrice<
  TData = Awaited<ReturnType<typeof getApiCalendarPrice>>,
  TError = ErrorType<unknown>
>(
  params: undefined | GetApiCalendarPriceParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarPrice>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiCalendarPrice>>,
          TError,
          Awaited<ReturnType<typeof getApiCalendarPrice>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiCalendarPrice<
  TData = Awaited<ReturnType<typeof getApiCalendarPrice>>,
  TError = ErrorType<unknown>
>(
  params?: GetApiCalendarPriceParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarPrice>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiCalendarPrice>>,
          TError,
          Awaited<ReturnType<typeof getApiCalendarPrice>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiCalendarPrice<
  TData = Awaited<ReturnType<typeof getApiCalendarPrice>>,
  TError = ErrorType<unknown>
>(
  params?: GetApiCalendarPriceParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarPrice>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}

export function useGetApiCalendarPrice<
  TData = Awaited<ReturnType<typeof getApiCalendarPrice>>,
  TError = ErrorType<unknown>
>(
  params?: GetApiCalendarPriceParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarPrice>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetApiCalendarPriceQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getApiCalendar = (
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<CalendarDto[]>(
    { url: `/api/Calendar`, method: 'GET', signal },
    options
  )
}

export const getGetApiCalendarQueryKey = () => {
  return [`/api/Calendar`] as const
}

export const getGetApiCalendarQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiCalendar>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApiCalendar>>, TError, TData>
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetApiCalendarQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiCalendar>>> = ({
    signal
  }) => getApiCalendar(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiCalendar>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiCalendarQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCalendar>>
>
export type GetApiCalendarQueryError = ErrorType<unknown>

export function useGetApiCalendar<
  TData = Awaited<ReturnType<typeof getApiCalendar>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApiCalendar>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getApiCalendar>>,
        TError,
        Awaited<ReturnType<typeof getApiCalendar>>
      >,
      'initialData'
    >
  request?: SecondParameter<typeof customAxiosInstance>
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiCalendar<
  TData = Awaited<ReturnType<typeof getApiCalendar>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApiCalendar>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getApiCalendar>>,
        TError,
        Awaited<ReturnType<typeof getApiCalendar>>
      >,
      'initialData'
    >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiCalendar<
  TData = Awaited<ReturnType<typeof getApiCalendar>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApiCalendar>>, TError, TData>
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}

export function useGetApiCalendar<
  TData = Awaited<ReturnType<typeof getApiCalendar>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof getApiCalendar>>, TError, TData>
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetApiCalendarQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const postApiCalendar = (
  calendarDto: CalendarDto,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<CalendarDto>(
    {
      url: `/api/Calendar`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: calendarDto,
      signal
    },
    options
  )
}

export const getPostApiCalendarMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiCalendar>>,
    TError,
    { data: CalendarDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postApiCalendar>>,
  TError,
  { data: CalendarDto },
  TContext
> => {
  const mutationKey = ['postApiCalendar']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiCalendar>>,
    { data: CalendarDto }
  > = (props) => {
    const { data } = props ?? {}

    return postApiCalendar(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostApiCalendarMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiCalendar>>
>
export type PostApiCalendarMutationBody = CalendarDto
export type PostApiCalendarMutationError = ErrorType<unknown>

export const usePostApiCalendar = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiCalendar>>,
    TError,
    { data: CalendarDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof postApiCalendar>>,
  TError,
  { data: CalendarDto },
  TContext
> => {
  const mutationOptions = getPostApiCalendarMutationOptions(options)

  return useMutation(mutationOptions)
}
export const getApiCalendarId = (
  id: string,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<CalendarDto>(
    { url: `/api/Calendar/${id}`, method: 'GET', signal },
    options
  )
}

export const getGetApiCalendarIdQueryKey = (id: string) => {
  return [`/api/Calendar/${id}`] as const
}

export const getGetApiCalendarIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiCalendarId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetApiCalendarIdQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiCalendarId>>
  > = ({ signal }) => getApiCalendarId(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiCalendarId>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiCalendarIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiCalendarId>>
>
export type GetApiCalendarIdQueryError = ErrorType<unknown>

export function useGetApiCalendarId<
  TData = Awaited<ReturnType<typeof getApiCalendarId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarId>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiCalendarId>>,
          TError,
          Awaited<ReturnType<typeof getApiCalendarId>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiCalendarId<
  TData = Awaited<ReturnType<typeof getApiCalendarId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarId>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiCalendarId>>,
          TError,
          Awaited<ReturnType<typeof getApiCalendarId>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiCalendarId<
  TData = Awaited<ReturnType<typeof getApiCalendarId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}

export function useGetApiCalendarId<
  TData = Awaited<ReturnType<typeof getApiCalendarId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiCalendarId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetApiCalendarIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const putApiCalendarId = (
  id: string,
  calendarDto: CalendarDto,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<void>(
    {
      url: `/api/Calendar/${id}`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: calendarDto
    },
    options
  )
}

export const getPutApiCalendarIdMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putApiCalendarId>>,
    TError,
    { id: string; data: CalendarDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof putApiCalendarId>>,
  TError,
  { id: string; data: CalendarDto },
  TContext
> => {
  const mutationKey = ['putApiCalendarId']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof putApiCalendarId>>,
    { id: string; data: CalendarDto }
  > = (props) => {
    const { id, data } = props ?? {}

    return putApiCalendarId(id, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PutApiCalendarIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof putApiCalendarId>>
>
export type PutApiCalendarIdMutationBody = CalendarDto
export type PutApiCalendarIdMutationError = ErrorType<unknown>

export const usePutApiCalendarId = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putApiCalendarId>>,
    TError,
    { id: string; data: CalendarDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof putApiCalendarId>>,
  TError,
  { id: string; data: CalendarDto },
  TContext
> => {
  const mutationOptions = getPutApiCalendarIdMutationOptions(options)

  return useMutation(mutationOptions)
}
export const deleteApiCalendarId = (
  id: string,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<void>(
    { url: `/api/Calendar/${id}`, method: 'DELETE' },
    options
  )
}

export const getDeleteApiCalendarIdMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiCalendarId>>,
    TError,
    { id: string },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteApiCalendarId>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationKey = ['deleteApiCalendarId']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteApiCalendarId>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {}

    return deleteApiCalendarId(id, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteApiCalendarIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteApiCalendarId>>
>

export type DeleteApiCalendarIdMutationError = ErrorType<unknown>

export const useDeleteApiCalendarId = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiCalendarId>>,
    TError,
    { id: string },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteApiCalendarId>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getDeleteApiCalendarIdMutationOptions(options)

  return useMutation(mutationOptions)
}

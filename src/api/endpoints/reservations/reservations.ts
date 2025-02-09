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
import type { ReservationDto } from '../../models'
import { customAxiosInstance } from '../../customAxiosInstance'
import type { ErrorType } from '../../customAxiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const getApiReservations = (
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<ReservationDto[]>(
    { url: `/api/Reservations`, method: 'GET', signal },
    options
  )
}

export const getGetApiReservationsQueryKey = () => {
  return [`/api/Reservations`] as const
}

export const getGetApiReservationsQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiReservations>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getApiReservations>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetApiReservationsQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiReservations>>
  > = ({ signal }) => getApiReservations(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiReservations>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiReservationsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiReservations>>
>
export type GetApiReservationsQueryError = ErrorType<unknown>

export function useGetApiReservations<
  TData = Awaited<ReturnType<typeof getApiReservations>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getApiReservations>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getApiReservations>>,
        TError,
        Awaited<ReturnType<typeof getApiReservations>>
      >,
      'initialData'
    >
  request?: SecondParameter<typeof customAxiosInstance>
}): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiReservations<
  TData = Awaited<ReturnType<typeof getApiReservations>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getApiReservations>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getApiReservations>>,
        TError,
        Awaited<ReturnType<typeof getApiReservations>>
      >,
      'initialData'
    >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiReservations<
  TData = Awaited<ReturnType<typeof getApiReservations>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getApiReservations>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}

export function useGetApiReservations<
  TData = Awaited<ReturnType<typeof getApiReservations>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getApiReservations>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetApiReservationsQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const postApiReservations = (
  reservationDto: ReservationDto,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<ReservationDto>(
    {
      url: `/api/Reservations`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: reservationDto,
      signal
    },
    options
  )
}

export const getPostApiReservationsMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiReservations>>,
    TError,
    { data: ReservationDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postApiReservations>>,
  TError,
  { data: ReservationDto },
  TContext
> => {
  const mutationKey = ['postApiReservations']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiReservations>>,
    { data: ReservationDto }
  > = (props) => {
    const { data } = props ?? {}

    return postApiReservations(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostApiReservationsMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiReservations>>
>
export type PostApiReservationsMutationBody = ReservationDto
export type PostApiReservationsMutationError = ErrorType<unknown>

export const usePostApiReservations = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiReservations>>,
    TError,
    { data: ReservationDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof postApiReservations>>,
  TError,
  { data: ReservationDto },
  TContext
> => {
  const mutationOptions = getPostApiReservationsMutationOptions(options)

  return useMutation(mutationOptions)
}
export const getApiReservationsId = (
  id: string,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<ReservationDto>(
    { url: `/api/Reservations/${id}`, method: 'GET', signal },
    options
  )
}

export const getGetApiReservationsIdQueryKey = (id: string) => {
  return [`/api/Reservations/${id}`] as const
}

export const getGetApiReservationsIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiReservationsId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiReservationsId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetApiReservationsIdQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getApiReservationsId>>
  > = ({ signal }) => getApiReservationsId(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiReservationsId>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetApiReservationsIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiReservationsId>>
>
export type GetApiReservationsIdQueryError = ErrorType<unknown>

export function useGetApiReservationsId<
  TData = Awaited<ReturnType<typeof getApiReservationsId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiReservationsId>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiReservationsId>>,
          TError,
          Awaited<ReturnType<typeof getApiReservationsId>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiReservationsId<
  TData = Awaited<ReturnType<typeof getApiReservationsId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiReservationsId>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiReservationsId>>,
          TError,
          Awaited<ReturnType<typeof getApiReservationsId>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetApiReservationsId<
  TData = Awaited<ReturnType<typeof getApiReservationsId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiReservationsId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}

export function useGetApiReservationsId<
  TData = Awaited<ReturnType<typeof getApiReservationsId>>,
  TError = ErrorType<unknown>
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getApiReservationsId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetApiReservationsIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const putApiReservationsId = (
  id: string,
  reservationDto: ReservationDto,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ReservationDto>(
    {
      url: `/api/Reservations/${id}`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: reservationDto
    },
    options
  )
}

export const getPutApiReservationsIdMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putApiReservationsId>>,
    TError,
    { id: string; data: ReservationDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof putApiReservationsId>>,
  TError,
  { id: string; data: ReservationDto },
  TContext
> => {
  const mutationKey = ['putApiReservationsId']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof putApiReservationsId>>,
    { id: string; data: ReservationDto }
  > = (props) => {
    const { id, data } = props ?? {}

    return putApiReservationsId(id, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PutApiReservationsIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof putApiReservationsId>>
>
export type PutApiReservationsIdMutationBody = ReservationDto
export type PutApiReservationsIdMutationError = ErrorType<unknown>

export const usePutApiReservationsId = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putApiReservationsId>>,
    TError,
    { id: string; data: ReservationDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof putApiReservationsId>>,
  TError,
  { id: string; data: ReservationDto },
  TContext
> => {
  const mutationOptions = getPutApiReservationsIdMutationOptions(options)

  return useMutation(mutationOptions)
}
export const deleteApiReservationsId = (
  id: string,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<void>(
    { url: `/api/Reservations/${id}`, method: 'DELETE' },
    options
  )
}

export const getDeleteApiReservationsIdMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiReservationsId>>,
    TError,
    { id: string },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteApiReservationsId>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationKey = ['deleteApiReservationsId']
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteApiReservationsId>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {}

    return deleteApiReservationsId(id, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteApiReservationsIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteApiReservationsId>>
>

export type DeleteApiReservationsIdMutationError = ErrorType<unknown>

export const useDeleteApiReservationsId = <
  TError = ErrorType<unknown>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiReservationsId>>,
    TError,
    { id: string },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteApiReservationsId>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getDeleteApiReservationsIdMutationOptions(options)

  return useMutation(mutationOptions)
}
